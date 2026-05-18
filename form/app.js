let formData = document.querySelector("#formData")
console.log(formData);
formData.addEventListener("submit",(e)=>{
      e.preventDefault();
      
      
      console.log(formData[1].value);
      console.log(formData[2].value);
      console.log(formData[3].value);
      let data = {
          name:formData[0].value,
          email:formData[1].value,
          password:formData[2].value,
      }
      localStorage.setItem("userData", JSON.stringify(data))
})


let loginData = document.querySelector("#loginData")
loginData.addEventListener("submit",(e)=>{
    e.preventDefault();
    let login = {
          email:loginData[0].value,
          password:loginData[1].value,
    }


    let data = localStorage.getItem("userData");
    //console.log(data)

    let mainData= JSON.parse(data); // type cast from string to object
    //console.log(mainData)

    if(login.email == mainData.email && login.password == mainData.password){
        console.log("✔️")
    }
    else{
        console.log("✖️")
    }
})