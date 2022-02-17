import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createUser(user: UserDto) {
    return this.usersRepository.save(user);
  }

  async findOne(email: string): Promise<UserDto | undefined> {
    return this.usersRepository.findOne(email);
  }
}
