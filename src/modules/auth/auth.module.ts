import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { env } from 'src/shared/database/config/env';

@Module({
  imports: [
    JwtModule.register({
      signOptions: { expiresIn: '7d' },
      secret: env.jwtSecret,
      global: true,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
