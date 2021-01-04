import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { TipoPerfil } from './usuario-tipo.enum';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { UsuarioRepository } from './usuario.repository'

@Injectable()
export class UsuarioService {
    constructor(
    @InjectRepository(UsuarioRepository)
    private usuarioRepository: UsuarioRepository,
    ) {}

  async createUsuario(
    crearUsuarioDto: CrearUsuarioDto,
  ): Promise<Usuario> {
    return this.usuarioRepository.crearUsuario(crearUsuarioDto);
  }
}
