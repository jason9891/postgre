import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TipoPerfil } from './usuario-tipo.enum';

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  username: string;

  @Column()
  password: string;

  @Column()
  perfil: TipoPerfil;

}
