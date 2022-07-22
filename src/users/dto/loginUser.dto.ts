import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  public id: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsNotEmpty()
  public password: string;
}
