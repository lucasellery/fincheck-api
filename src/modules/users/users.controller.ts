import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  me(@Req() request: any) {
    console.log({ meUserId: request.userId });

    return this.usersService.getUserById('userId');
  }
}

// Controller: recebe a req e delega para outra pessoa o que será executado
// Service: recebe a req e executa a regra de negócio
// Repository: recebe a req e executa a regra de negócio e persiste no banco de dados
