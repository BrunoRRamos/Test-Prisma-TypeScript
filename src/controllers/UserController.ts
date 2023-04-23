import { PrismaClient, User } from "@prisma/client"

class UserController {
    
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createUser(data: Omit<User, "id">) {
        const newUser = await this.prisma.user.create({
            data: {
                ...data
            }
        })

        return newUser;
    }

    async getUserById(id: string) {
        const searchUser = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });

        return searchUser;
    }
}

export default UserController;