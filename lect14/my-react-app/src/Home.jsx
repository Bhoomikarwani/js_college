

// component1
// const Home = () => {
//   return (
//     <div>Hello Home!!!</div>
//   )
// }



  
// //component2
// const New = () => {
//   return (
//     <div>New Home!!!</div>
//   )
// }
//   export {New}

// export default Home   // only ek baar hi export kar sakte hai if we want export mutiple components tho object ko export karenge



                           // collect data from app

import hi from './hi'                           
const Home = ({data}) => {
   // console.log({data})
  return (
    <div>
        <hi Name = {data}/>
    </div>
  )
}

export default Home