import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Configure one or more authentication providers
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      }),
      // ...add more providers here
    ],

    callbacks: {
      async session({ session, token }) {
        
      },
    },
  });
}
