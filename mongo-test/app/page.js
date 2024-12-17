
import { MongoClient } from "mongodb";
import { connectDB } from "./util/database.js";



export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray();
  console.log(result);
  
  return (
    <div>크아아아아아앙ㅇㅇㅇ2번쨰 강의 닷</div>
  );
}
