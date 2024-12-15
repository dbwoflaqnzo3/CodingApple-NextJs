import style from '../list.module.css';


const List = () => {
    let product = ['Tomato' , 'pasta' , 'coconut']


    return (<>
        <div>
            <h2 className="title">상품목록</h2>
            {
                product.map((element,iter)=>{
                    return (
                        <div className={style.food} key={iter}>
                            <img src={`/food${iter}.png`} className={style.foodImg} />
                            <h4>{element} ${iter*10+40}</h4>
                        </div>
                    )
                })
            }
        </div>
        </>
    );
  }
  

export default List;