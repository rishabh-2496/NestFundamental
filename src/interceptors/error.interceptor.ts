import { Injectable,NestInterceptor,ExecutionContext,CallHandler,HttpException,HttpStatus } from '@nestjs/common'
import { catchError, Observable,throwError } from 'rxjs'

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
        intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
            return next.handle().pipe(
                catchError((error) => {
                    console.log(error)
                    let status = HttpStatus.INTERNAL_SERVER_ERROR
                    let message = "Internal Server Error"
                    if(error.code == 11000){
                        status = HttpStatus.CONFLICT
                        message = 'Duplicate entry found'
                    }else if (error instanceof HttpException){
                        status = error.getStatus()
                        message = error.getResponse() as string;
                    }

                    return throwError(() => new HttpException({ message, statusCode: status },status))
                })
            )   
        }
}