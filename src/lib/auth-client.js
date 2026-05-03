import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://qurbani-hat-project.vercel.app"
    // baseURL: "http://localhost:3000"
});

export const { signIn, signUp, signOut, useSession } = createAuthClient();