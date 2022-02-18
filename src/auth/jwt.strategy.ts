import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,

      secretOrKeyProvider: async (
        _request: Request,
        _rawJwtToken: string,

        done: (err: any, secret: string) => void,
      ) => {
        const JWT_SECRET = configService.get('JWT_CONSTANT');

        done(null, JWT_SECRET);
      },
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
