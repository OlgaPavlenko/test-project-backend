import { Controller, Header, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Header('Content-Type', 'application/json')
  @Get('users')
  async users() {
    return await this.usersService.findAll();
  }
}
