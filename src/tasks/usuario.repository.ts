import { EntityRepository, Repository } from 'typeorm';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { TipoPerfil } from './usuario-tipo.enum';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
  private logger = new Logger('UsuarioRepository');

  async crearUsuario(
    crearUsuarioDto: CrearUsuarioDto,
  ): Promise<Usuario> {
    const { username , pasword } = crearUsuarioDto;

    const usuario = new Usuario();
    usuario.username = usuario;
    usuario.password = pasword;
    usuario.perfil = TipoPerfil.COMUN;

    try {
      await usuario.save();
    } catch (error) {
      this.logger.error(`Failed to create a task for user "${user.username}". Data: ${createTaskDto}`, error.stack);
      throw new InternalServerErrorException();
    }

    delete usuario.username;
    return usuario;
  }
}
