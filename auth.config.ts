import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import Resend from "next-auth/providers/resend"
 
export default {
    providers: [
        Google,
        Resend({
            from: "no-reply@sybermindtoken.com"
        }),
    ]
} satisfies NextAuthConfig