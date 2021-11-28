import { Strategy } from 'passport-jwt';
import { PayloadToken } from '../models/token.model';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: PayloadToken): PayloadToken;
}
export {};
