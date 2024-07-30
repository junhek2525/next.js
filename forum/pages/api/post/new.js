// '/api/new.js'
import { connectDB } from "@/untils/database"; 

export default async function handler(요청,응답) {
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