import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req , res){


    
    if(req.method == 'POST'){
        
        let userContents = req.body
        
        if(userContents.title == ''){
            return res.status(500).json('제목을 입력하시오')
        } 
        let changes = {
            title:  userContents.title,
            content: userContents.content
        }

        const db = (await connectDB).db('forum');
        let result = await db.collection('post').updateOne({_id: new ObjectId(userContents._id)} , 
        {$set : { changes }} )

        console.log(result)
        return (
            res.redirect(302, '/community')  
        )
    }
}