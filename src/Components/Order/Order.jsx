import React, { useState } from 'react'
import './Order.css'
import { TiMinus, TiPlus, TiShoppingCart } from 'react-icons/ti'

function Order() {

    const [count, setCount] = useState(0)
  return (
    <div className='order_container'>
        <div className="category">
            <strong>SNEAKER COMPANY</strong>
        </div>

        <div className="title">
            <h1>Fall Limited Edition Sneakers</h1>
        </div>
        <div className="description">
            <b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nisi et nihil, est blanditiis cupiditate incidunt debitis harum hic pariatur unde animi in vel neque voluptas quos quod reprehenderit laborum?</b>

        </div>

        <div className="price_promotion">
            <div className="price">
                <strong>$125.00</strong>
            </div>
            <div className="promotion">
                <b>50%</b>
            </div>    
        </div>
        <div className="old_price">
            <strong>$250.00</strong>
        </div>
        
        <div className="buttons_container">
            <button className='btn1'>
                <TiMinus color='hsl(26, 100%, 55%)' size={20} onClick={()=>setCount(count-1)}/>
                <b>

                {count}
                </b>
                <TiPlus color='hsl(26, 100%, 55%)' size={20} onClick={()=>setCount(count+1)}/>
            </button>
            <button className='btn2'>
            <TiShoppingCart size={20}/> <strong>Add to cart</strong>
            </button>
        </div>
        
    </div>
  )
}

export default Order