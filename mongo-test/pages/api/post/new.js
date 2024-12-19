import { connectDB } from "@/app/util/database";

export default async function handler(req , res){


    
    if(req.method == 'POST'){
        
        let userContents = req.body

        
        if(userContents.title == ''){
            return res.status(500).json('제목을 입력하시오')
        } 
        
        const db = (await connectDB).db('forum');
        let result = await db.collection('post').insertOne(userContents);
        return (
            res.status(200).redirect('/community')  
        )
    }
}