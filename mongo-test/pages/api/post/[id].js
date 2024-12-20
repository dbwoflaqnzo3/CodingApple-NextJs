// pages/api/post/[id].js
// 수정하기 버튼을 누르면 원래 데이터를 가져오는 거

import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const { id } = req.query;  // URL 파라미터에서 'id' 추출
    console.log(id)

    if (req.method === "GET") {
        try {
            const db = (await connectDB).db('forum');
            const result = await db.collection('post').findOne({ _id: new ObjectId(id) });

            if (!result) {
                return res.status(404).json({ message: "Post not found" });
            }

            return res.status(200).json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    } else {
        // 다른 HTTP 메서드 처리 (예: POST, PUT, DELETE)
        return res.status(405).json({ message: "Method Not Allowed" });
    }
}
