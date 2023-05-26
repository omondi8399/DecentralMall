import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth, { getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const adminEmails = ['rodgers.omosh@gmail.com']

export const authOptions = {
    providers: [
        
        GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
        }),    
    ],
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        session: ({session,token,user}) => {
            if (adminEmails.includes(session?.user?.email)) {

            } else {
                return session
            }
        },
    },
    }

    export default NextAuth(authOptions)

    export async function isAdminRequest(req,res) {
        const session = await getServerSession(req,res,authOptions)
        res.status(401)
        res.end()
        if (!adminEmails.includes(session?.user?.email)) {
            throw 'not an admin'
        }
    }