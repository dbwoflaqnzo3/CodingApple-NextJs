import React from 'react';
import styles from '../community.module.css'; // CSS 모듈 import
import { connectDB } from '../util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List() {

  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  // 데이터 구조상 array안에 오브젝트가 들어가 있기 때문에 저렇게 참조 

  return (
    <div className={styles.listBg}>
      {
        result.map((element,i)=>{
          return(
            <div className={styles.listItem} key={i}>
              
              <Link href={'/detail/'+result[i]._id.toString()}>
                <h4>{result[i].title}</h4>
              </Link>
              <Link href={'/edit/' + result[i]._id}>수정</Link>
              <p>{result[i].content}</p>
            </div>
          );
        })
      }

    </div>
  );
}
