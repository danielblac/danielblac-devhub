import CredentialsProvider from "next-auth/providers/credentials";
import { API_URL } from "@/utils/url";
import { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        try {
          const { username, password } = credentials || {};

          const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          });

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Authentication failed");
          }

          const user = await res.json();

          if (user?.data?.access_token) {
            return {
              ...user.data,
              id: user.data.id?.toString(),
            };
          }

          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error(
            error instanceof Error ? error.message : "Authentication failed"
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin-login",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session?.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as {
        id: string;
        role?: string;
        username?: string;
        full_name?: string;
        access_token: string;
      };
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};
