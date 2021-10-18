import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from "typeorm";

@ObjectType()
@Entity()
export class Role extends BaseEntity{
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  role: string;
}
