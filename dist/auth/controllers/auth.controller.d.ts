import { AuthService } from '../services/auth/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): {
        access_token: string;
    };
}
