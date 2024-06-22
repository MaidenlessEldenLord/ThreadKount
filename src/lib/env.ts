import zod, { z } from "zod";

const envSchema = zod.object({
    DATABASE_URL: z.string().min(1), //zod.string().nonempty() is deprecated 
    GOOGLE_CLIENT_ID: z.string().min(1), //so use Zod's "z.string().min(1)" in its place 
    GOOGLE_CLIENT_SECRET: z.string().min(1), //min(1) will cover for nonempty()
    NEXTAUTH_URL: z.string().min(1), //ensuring the field isn't empty
    NEXTAUTH_SECRET: z.string().min(1),
}); 

export const env = envSchema.parse(process.env);