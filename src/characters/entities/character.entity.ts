import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    nullable: true,
  })
  characterName: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;
}
