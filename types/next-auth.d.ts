// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
      username?: string;
      full_name?: string;
      access_token: string;
    };
  }
}
