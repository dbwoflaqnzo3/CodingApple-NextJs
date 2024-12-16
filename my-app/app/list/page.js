'use client'
import { useState } from 'react';

import Image from 'next/image';
import img0 from '../public/food0.png';
import img1 from '../public/food1.png';
import img2 from '../public/food2.png';

import style from '../list.module.css';


const List = () => {
  let product = ['Tomato', 'Pasta', 'Coconut'];
  const shopList = [img0,img1,img2]

  let [Num , setNum] = useState([0, 0, 0]);


  return (
    <div>
      <h2 className="title">상품목록</h2>



      {product.map((element, iter) => {
        return (
          <div className={style.food} key={iter}>
            <Image src={shopList[iter]} className={style.foodImg} />
            <h4>
              {element} ${iter * 10 + 40}
            </h4>
            <span>{Num[iter]}</span>
            <button onClick={()=>{
              let productNum = [...Num]; // swallow copy를 해야 변수 업데이트 가능 
              productNum[iter]++;
              setNum(productNum); // 배열이 들어가야 함 
            }}>+</button>
            <button onClick={()=>{
              let productNum = [...Num];
              productNum[iter]--;
              setNum(productNum);
            }}>-</button>
          </div>        
        );
      })}
    </div>
  );
};

export default List;
