import Link from 'next/link';
import styles from '../write.module.css';

export default function Write(){
    return (
      <div className={styles.p_20}>
        <Link href={'/community'}>커뮤니티로 돌아가기</Link>
        <h4>글작성</h4>
        <form action="/api/post/new" method="POST">
          <input className={styles.p20Input} name="title" placeholder="글제목"/>
          <input className={styles.p20Input} name="content" placeholder="글내용"/>
        <button className={styles.p20Btn} type="submit">
          저장하기
        </button>
        </form>
      </div>
    )
  }