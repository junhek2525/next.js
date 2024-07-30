import { connectDB } from "@/untils/database"; 
import Link from "next/link";

export default async function List(요청,응답){
    let db = (await connectDB).db('foruum');
    let result = await db.collection('re').find().toArray(); //db의 있는 데이터를 디자인한 코드
    let time = new Date()
    console.timeLog(time);
    if(요청.method=='GET'){


        응답.status(200).json(time);





     
        }
        if(요청.method=='POST')
         {
             응답.status(200).json({name:'POST입니다'});
        }
    
}

// export default function handler(){
    
    
            
            
        
     
     
     // console.log('GET요청 들어옴');
 