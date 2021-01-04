import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('tasks')
@UseGuards(AuthGuard())
export class UsuarioController {

  constructor(private UsuarioService: UsuarioService) {}

  @Get()
  getUsuario(
  ): Promise<Usuario[]> {
    return this.UsuarioService.getUsuario();
  }
}