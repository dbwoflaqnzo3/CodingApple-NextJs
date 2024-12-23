'use client'

import Link from 'next/link';
import styles from '../community.module.css';
import { useState , useEffect } from 'react';

export default function ListItem(){
    const [result , setResult] = useState([]);

    useEffect(() => {
      // API 호출
  // 클라이언트에서 fetch 요청 시 캐시를 무시하도록 설정
    // 이것 또한 마찬가지로 useEffect를 써서 렌더링시 호출을 해줌 
    // 물론 이것또 마찬가지로 state로 만들어서 map으로 select를 해서 보여줌 
    
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
        <div>
        {
        result.map((element,i)=>{
            return(
            <div className={styles.listItem} key={i}>
                
                <Link href={'/detail/'+element._id.toString()}>
                <h4>{element.title}</h4>
                </Link>
                <Link href={'/edit/' + element._id}>✏</Link>
                <button className={styles.delbtn}
                onClick={(e)=>{
                    fetch('/api/post/delete', 
                    {method : 'DELETE', body : result[i]._id}).then(()=>{
                        e.target.parentElement.style.opacity = 0;
                        setTimeout(()=>{
                          e.target.parentElement.style.display = 'none';
                        }, 1000)
                    })
                }}>삭제</button>
                <p>{element.content}</p>
            </div>
            );
        })
        }
        </div>
    )
}