import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "../roles.enum";
import { ROLES_KEY } from "../decorator/roles.decorator";
import { RequestWithUser } from '../../interfaces/requestwithuser'
import { Observable } from "rxjs";
import { User } from '../../interfaces/user'

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // this method check if the roles decorator has been applied to paritular route or handler
        // which it getting from context if no then it is allowing access
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])
        console.log("requiredRoles", requiredRoles)
        if(!requiredRoles) {  
            return true
        }
        const request = context.switchToHttp().getRequest<RequestWithUser>()
        const user:User = request?.user
        if(!user){
            throw new ForbiddenException('No user information found in the request');
        }
        const hasRole = requiredRoles.some((role) => user.roles?.includes(role))
        if(!hasRole){
            throw new ForbiddenException('You do not have permission to access this resource')
        }
        return hasRole
    }
}