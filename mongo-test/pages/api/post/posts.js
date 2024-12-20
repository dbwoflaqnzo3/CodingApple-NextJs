import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req , res){
    res.setHeader("Cache-Control", "no-store, max-age=0");

    const db = (await connectDB).db('forum');
    let posts = await db.collection('post').find().toArray();
    // 데이터 구조상 array안에 오브젝트가 들어가 있기 때문에 저렇게 참조 

    console.log(posts)
    const result = posts.map(post => {
        if (post.changes){
            return {
                ...post,
                title: post.changes.title || post.title,
                content: post.changes.content || post.content
            }
        }
        return post;
    })


    res.status(200).json(result);

}