import { User } from "../entity/User";
import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from "type-graphql";
// import { Role } from "../entity/Role";


@InputType()
class UserInputs{
    @Field()
    name: string

    @Field()
    email: string

    @Field({nullable:true})
    roleId: number
}

@InputType()
class UserUpdateInputs{
    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    email?: string
}

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg("params", () => UserInputs) options: UserInputs
  ) {
    const user = await User.create(options).save();
    return user;
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg("id", () => Int) id: number,
    @Arg("inputs", () => UserUpdateInputs) inputs: UserUpdateInputs
  ) {
    await User.update({ id }, inputs);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Arg("id", () => Int) id: number
  ) {
    await User.delete({ id });
    return true;
  }

  @Query(() => User)
  async user(@Arg("id", () => Int) id: number) {
    const user = await User.findOne(id, {relations:["role"]});
    console.log(55, user)
    return user
  }


  @Query(() => [User])
  async users() {
    const userss = await User.find();
    return userss
  }
}