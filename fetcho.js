fetch(`https://api.github.com/users/shivamarora01`)
//response mai baaki extra bhi aata hai
.then((res) => res.json())
//islieye its converted into json file phle
//fetch return krta h promise
//.then .catch se throw krskte output
.then((res) => {
    console.log(res);
})
.catch((error) => {
    console.log("Error Occured : " ,  error)
})