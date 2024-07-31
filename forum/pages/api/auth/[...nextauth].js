
import { connectDB } from "@/untils/database"; 
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers : [
        GithubProvider({
            clientId: 'Ov23li6iCNEs1qjz6wMp',
            clientSecret :'03ac5a14d0989fd00ee4a04ef852d8ed262333ee'
        }),
    ],
    secret : 'qwer1234',
    adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);