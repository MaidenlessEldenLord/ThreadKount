import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
        } & DefaultSession["user"];
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> b766a8736ee9fa9ace61951b3ab0ae6228a7b8b9
