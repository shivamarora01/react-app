const axios = require("axios")
// or using ES6 import syntax
// import axios from 'axios';


axios.get(`https://api.github.com/users/shivamarora01`)
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.log("Error : " , error)
    })
