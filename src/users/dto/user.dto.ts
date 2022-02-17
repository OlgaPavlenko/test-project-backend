import { IsEmail, IsNotEmpty } from 'class-validator';
import { Roles } from '../users.constants';

export class UserDto {
  public id: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsNotEmpty()
  public name: string;

  public phone: string;

  @IsNotEmpty()
  public password: string;

  @IsNotEmpty()
  public role: Roles;
}
