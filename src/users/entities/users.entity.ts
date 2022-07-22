import { BaseEntity } from 'src/base.entity';
import { Column, Entity } from 'typeorm';

import { Roles } from '../users.constants';

@Entity('users')
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  phone: string;

  @Column({ type: 'enum', enum: Roles, nullable: true })
  role: Roles;
}
