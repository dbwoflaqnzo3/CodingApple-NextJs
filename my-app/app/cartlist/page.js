import CartItem from './data.js'

function Banner(props){
  return <h2>{props.content} 정상 영업합니다</h2>
}

export default function Cart() {
  let bukket = ['토마토','파스타']

    return ( <>
      <div>
        <Banner content={'우리가게'}/>
        <h4 className="title">Cart</h4>
        <CartItem item={bukket[0]}/>
        <CartItem item={bukket[1]}/>
        
      </div>
      </>
    )
  } 