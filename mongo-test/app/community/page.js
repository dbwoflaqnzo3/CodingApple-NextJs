import styles from '../community.module.css'; // CSS 모듈 import
import ListItem from './ListItem';

// 서버 컴포넌트로 해야지 검색엔진에 노출에 잘 된다.
// 그래서 클라에서 useEffect를 쓰는거 보다 서버에서 가져와서 클라에 뿌려주는게
// 더 좋은 방법이다. ( 그냥 props로 넘기면 간단히 된다. )
export default function List() {

  return (
    <div className={styles.listBg}>
      <ListItem/>
    </div>
  );
}
