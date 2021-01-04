import { IsNotEmpty } from 'class-validator';

export class CrearUsuarioDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  pasword: string;
}
