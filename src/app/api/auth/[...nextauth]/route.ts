import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth/next"
import GitHubProvider from "next-auth/providers/github"

  const nextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID || "",
        clientSecret: process.env.GOOGLE_SECRET || ""
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || ""
      })
    ]
  }

  const handler = NextAuth(nextAuthOptions)

  export { handler as GET, handler as POST, nextAuthOptions}