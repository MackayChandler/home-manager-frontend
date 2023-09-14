import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// Configure one or more authentication providers
export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jdoe" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("https://localhost:7143/auth/signIn", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        const user = await res.json();
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),

    // ...add more providers here
  ],
  callbacks: {
    async session({session, token}) {
      session.user = token.user as Session['user'];
      return session;
    },
    async jwt({token, user}) {
      if (user) {
        token.user = user;
      }
      return token;
    }
  },
  pages: {
    signIn: '/auth/signin'
  },

});
