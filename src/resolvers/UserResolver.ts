import { Ctx, Field, InputType, Mutation, Query } from "type-graphql";
import { Context, context } from "../context";
import { User } from "../objectTypes/User";

@InputType()
class UserInput {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    email: string;
}

export class UserResolver {
    @Query(() => [User])
    async allUsers(@Ctx() context: Context) {
        return context.prisma.user.findMany();
    }
}
