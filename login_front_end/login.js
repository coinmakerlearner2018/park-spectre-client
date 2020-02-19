// Front end 
// axios

// Post to me 
// class

signupform
= document.querySelector

username input box 
  document.quer
email input box 
  document.quer



let submitBtn = document.querySelector('')

// paras is data on URL
params : {
    "user_name" :  input_.value ,
    "$$app_token" : "BU4hHmBhCBHBI0yh46qUZvil6"

}


async function getAllparkingLocationData(){
    try { 
    
        let res = await axios({
            method : 'post',
            // 
            url : "http://localhost:9999/createId",
            data : {
                "user_name" :  input_.value ,
                "$$app_token" : "BU4hHmBhCBHBI0yh46qUZvil6"

            }
        })



    // return res