import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Roles {
  rick = 'RICK',
  morty = 'MORTY',
  summer = 'SUMMER',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.summer,
  })
  role: Roles;
}
