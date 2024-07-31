// '/api/new.js'
import { connectDB } from "@/untils/database"; 
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청,응답) {
  let session = await getServerSession(요청,응답, authOptions);
  let (session) {
    요청.body.author = session.user.email
  }
    if (요청.method == 'POST') {
      if (요청.body.title == '') {
        return 응답.status(500).json('제목을 작성하세요')
      }
      // DB 에러 발생시 처리
      try {
        let db = (await connectDB).db('foruum');
        let result = db.collection('re').insertOne(요청.body)
        응답.redirect(302,'/list');
      } catch (error) {
        console.log("DB 에러 발생");
      }
    }
}
