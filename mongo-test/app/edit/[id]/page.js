// app/edit/[id]/page.js
'use client';

import { useState, useEffect } from "react";
import styles from './page.module.css';
import Link from "next/link";

export default function Detail(props) {
    const id = props.params.id;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [postId, setPostId] = useState("");

    // useEffect를 사용하여 API에서 데이터 가져오기
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/api/post/${id}`, {
              headers: {
                  'Cache-Control': 'no-cache'
              }
          });

            if (res.ok) {
              const result = await res.json();
              setTitle(result.title);
              setContent(result.content);
              setPostId(result._id);
            } else {
                console.error("Failed to fetch post data:", res.status);
            }
        }

        fetchData();
    }, [id]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <div className={styles.p_20}>
            <Link href={'/community'}>커뮤니티로 돌아가기</Link>
            <h4>글 수정</h4>
            <form action="/api/post/edit" method="POST">
                <div>
                    <input
                        className={styles.p20Input}
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div>
                    <textarea
                        className={styles.p21Input}
                        name="content"
                        value={content}
                        onChange={handleContentChange}
                        rows={10}
                    />
                </div>
                <input type="hidden" name="_id" value={postId} />
                <button className={styles.p20Btn} type="submit">
                    저장하기
                </button>
            </form>
        </div>
    );
}
