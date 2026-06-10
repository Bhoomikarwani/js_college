import React from 'react'
import './App.css'
const Cart = ({Cart}) => {
  return (
    <div>
          {
            Cart.map((a)=>{
            return
             (
              <div id='main_card'>
                 {/* React loop me hamesha ek unique 'key' dena best practice hai */}
                 <img   src={a.thumbnail}/>
              </div>
              )
            })
           }
    </div>
  )
}

export default Cart