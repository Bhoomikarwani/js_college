

// // component1
// // const Home = () => {
// //   return (
// //     <div>Hello Home!!!</div>
// //   )
// // }



  
// // //component2
// // const New = () => {
// //   return (
// //     <div>New Home!!!</div>
// //   )
// // }
// //   export {New}

// // export default Home   // only ek baar hi export kar sakte hai if we want export mutiple components tho object ko export karenge



//                            // collect data from app

// // import hi from './hi'                           
// // const Home = ({data}) => {
// //    // console.log({data})
// //   return (
// //     <div>
// //         <hi Name = {data}/>
// //     </div>
// //   )
// // }

// // export default Home


                                  
// // import React,{useContext} from 'react'
// // import Context from './Context'
// // const Home = () => {

// //   let data = useContext(Context)
// //   console.log(data);

// //   return (
// //     <div>{data}</div>
// //   )
// // }

// // export default Home

//                                            // add to cart
// import React, { useEffect, useState } from 'react'
// import './App.css'
// const Home = ({apiData,setApiData,Cart,setCart}) => {

//   console.log(Cart,"carttttt");
    
//   useEffect(()=>{
//    async function apiCall(){
//        let res=   await   fetch("https://dummyjson.com/products")
//        let data=  await res.json()
//        console.log(data);
//        setApiData(data.products)
//     }
//     apiCall()
//   },[])

//   return (
//     <div id='card'>
//       {
//         apiData.map((a)=>{
//           return(<div id='main_card'>
//           <img   src={a.thumbnail}/>
//           {/* <h4>{a.title}</h4>
//           <h6>{a.price}</h6> */}
//           <button onClick={()=>setCart([...cart,a])}>add</button>
//           </div>)
//         })
//       }
//     </div>
//   )
// }

// export default Home


import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home