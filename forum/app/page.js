import {connectDB} from "/untils/database.js";

export default async function Home() {


let client  = await connectDB;
const db = client.db("foruum");
let result =  await db.collection('re').find().toArray();
// console.log(result);

  // const client = await MongoClient.connect('mongodb+srv://text:1234@cluster0.gm3l14g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{useNewUrlParser:true});
  // const db = client.db("forum");
  // db.collection('post').find();
  return (
    
    
    <div>
      {result[0].title}
      <br></br>
      {result[0].content}
    </div>


  );
}
