  //console.log("hello")
       // console.error("hello")
        //console.warn("hello")

        // ctrl + shift + p -> type java script -> disable and enable javascript

        //var ,let , const
        var a=5
        var a=3
        console.log(a)  // -> in var  reassign and redeclear is allow

        let b=3
        b = 9 
        console.log(b)  // -> in let reassign is allow but redeclear is not allow

        const c=7
        //c=4   -> this gives error because in const reassign and redeclear is not allowed
        console.log(c)

        // console.log(5==5)
        // console.log(5==='5')  // check data tyoe also
        // console.log(5+'5')  // '55' convert number into string
        // console.log(5-'5')  // 0 convert string to number
        // console.log(null+null) //0 
        // console.log(false+5) //5
        // console.log(undefined - 1) // not a number(NaN)
        // console.log(null + "hiii") //(nullhiii) convert null to string
 
        if(1){   // 0, false, null, undefined ->all give false
            console.log("hello")
        }
        else{
            console.log("hii")
        }
        