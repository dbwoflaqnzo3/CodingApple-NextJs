import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req , res){
    console.log(req.body , req.method)

    const db = (await connectDB).db('forum');
    
    if(req.method == 'DELETE'){ 
        let result = await db.collection('post').deleteOne({ _id: new ObjectId(req.body) })
        
        return (
            res.status(200).json(result)
        )
    }

}