import { connectDB } from "@/untils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청,응답){
    if(요청.method == "DELETE"){
        let db = (await connectDB).db('foruum')
        let result = await db.collection('re').deleteOne({_id : new ObjectId(요청.body)});
        console.log(result);
        {_id : new ObjectId(요펑.ㅠㅐ요)}
        
        
        
        응답.status(200).json('삭제 완료');
    }
}