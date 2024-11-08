import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id_article: number;

  @Column()
  nom_article: string;

  @Column()
  quantity: number;

  @Column({ default: false }) //for soft delete
  isDeleted?: boolean;
}
