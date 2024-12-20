'use client'

import React, { useEffect, useState } from 'react';
import styles from '../community.module.css'; // CSS 모듈 import
import Link from 'next/link';


export default function List() {
  const [result , setResult] = useState([]);

  useEffect(() => {
    // API 호출
// 클라이언트에서 fetch 요청 시 캐시를 무시하도록 설정
    fetch('/api/post/posts', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        setResult(data);  // 데이터를 상태에 저장
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });

  }, []);  // 컴포넌트 마운트 시 한 번만 호출


  return (
    <div className={styles.listBg}>
      {
        result.map((element,i)=>{
          return(
            <div className={styles.listItem} key={i}>
              
              <Link href={'/detail/'+element._id.toString()}>
                <h4>{element.title}</h4>
              </Link>
              <Link href={'/edit/' + element._id}>✏</Link>
              <p>{element.content}</p>
            </div>
          );
        })
      }

    </div>
  );
}
