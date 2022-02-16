import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'john@test.gmail',
      password: 'changeme',
    },
    {
      userId: 2,
      email: 'maria@test.gmail',
      password: 'guess',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
