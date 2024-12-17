import React from 'react';
import styles from '../community.module.css'; // CSS 모듈 import
import { connectDB } from '../util/database';

export default async function List() {

  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  // 데이터 구조상 array안에 오브젝트가 들어가 있기 때문에 저렇게 참조 

  return (
    <div className={styles.listBg}>
      <div className={styles.listItem}>
        <h4>{result[0].title}</h4>
        <p>{result[0].content}</p>
      </div>
      <div className={styles.listItem}>
        <h4>{result[1].title}</h4>
        <p>{result[1].content}</p>
      </div>
      <div className={styles.listItem}>
        <h4>글제목</h4>
        <p>1월 1일</p>
      </div>
    </div>
  );
}
