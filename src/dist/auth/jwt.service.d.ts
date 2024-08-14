declare const JWTStrategy_base: new (...args: any[]) => any;
export declare class JWTStrategy extends JWTStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        userId: any;
        username: any;
        roles: any;
    }>;
}
export {};
