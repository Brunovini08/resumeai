import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from "zod"

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({})],
});