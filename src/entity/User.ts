import { Field , Int, ObjectType} from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, OneToOne } from "typeorm";
import { Role } from "./Role";

@ObjectType()
@Entity()
export class User extends BaseEntity{
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field(() => Int)
  @Column('int', {nullable:true, default:2, unique:false})
  roleId: number;

  @OneToOne(() => Role ) 
  @JoinColumn() 
  role: Role;
}
