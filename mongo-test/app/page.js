
import { MongoClient } from "mongodb";
import { connectDB } from "./util/database.js";
import Link from "next/link.js";



export default async function Home() {
  
  return (<>
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>환영합니다!</h1>

      <section style={{ marginTop: '40px' }}>
        <h2>📝 2번쨰 강의</h2>
        <p>
          이곳은 두 번째 강의를 다루는 페이지입니다. 이 강의에서는 중요한 개념들을 다루며,
          실습을 통해 배운 내용을 바로 적용할 수 있습니다. 참여자분들은 반드시 실습을
          진행해 주시기 바랍니다.
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>🔗 실험장으로 가는 링크</h2>
        <p>
          실험장을 통해 더 많은 예제와 실습을 진행할 수 있습니다. 실험장에서 다양한
          기능을 체험하고 실력을 쌓아보세요!
        </p>
        <Link style={{ color: '#0070f3', fontSize: '18px' }} href="/community">
          실험장으로 가는 링크
        </Link>
      </section>

      <footer style={{ marginTop: '460px', textAlign: 'center', color: '#aaa' }}>
        <p>ⓒ 2024. All Rights Reserved.</p>
      </footer>
    </div>


    </>
  );
}
