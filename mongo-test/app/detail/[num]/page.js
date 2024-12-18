import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";


export default async function Detail(props){
    let num = props.params.num;

    const db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id: new ObjectId(num)})

    
    return(
        <div>
            <h2>{num}</h2>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}