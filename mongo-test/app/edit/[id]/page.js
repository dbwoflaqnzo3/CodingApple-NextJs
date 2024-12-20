import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";
import styles from './page.module.css';
import Link from "next/link";



export default async function Detail(props){
    let id = props.params.id;

    const db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id: new ObjectId(id)})


    return(
      <div className={styles.p_20}>
        <Link href={'/community'}>커뮤니티로 돌아가기</Link>
        <h4>글작성</h4>
        <form action="/api/post/edit" method="POST">
          <input className={styles.p20Input} name="title" value={result.title}/>
          <input type='text' className={styles.p20Input} name="content" value={result.content}/>
          <input style={{display:'none'}} name="_id" defaultValue={result._id.toString()}/>
        <button className={styles.p20Btn} type="submit">
          저장하기
        </button>
        </form>
      </div>
    )
}