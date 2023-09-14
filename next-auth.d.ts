import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      firstName: string;
      lastName: string;
    } & Session["user"];
  }

  interface JWT {
    user: Session['user'] & {
        id: string;
    }
    expiresAt?: number;
  }
}
