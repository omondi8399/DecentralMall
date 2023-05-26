import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const adminEmails = ['rodgers.omosh@gmail.com']


    export default NextAuth({
    providers: [
        
        GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
        }),    
    ],
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        session: ({session,token,user}) => {

            return session
        },
    },
    })