import { connectDB } from "@/untils/database"; 
import Link from "next/link";

export default async function List(){
    let db = (await connectDB).db('foruum');
    let result = await db.collection('re').find().toArray();
    return(
        <div className="list-bg">
            {
                result.map((a,i) =>
                <div className="list-item" key={i}>
                    <Link href={'/detail/'+result[i]._id}><h4>{a.title}</h4></Link>
                    <p>1월 1일</p>
                    </div>
                )
            }
        </div>



        // <div className="list-bg">
        //      <div className="list-item">
        //     여기에 글 표시
        //     <h4>{result[0].title}</h4>
        //     <p>1월 1일</p>
        //     </div>
        //     <div className="list-item">
        //     여기에 글 표시
        //     <h4>{result[1].title}</h4>
        //     <p>1월 1일</p>
        //     </div>
        //     <div className="list-item">
        //     여기에 글 표시
        //     <h4>{result[2].title}</h4>
        //     <p>1월 1일</p>
        //     </div>
        // </div>
    );
}