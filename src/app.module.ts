import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule], // whole module
  controllers: [],
  providers: [], // services - injectable
})
export class AppModule {}
