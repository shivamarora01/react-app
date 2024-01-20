fetch(`https://api.github.com/users/shivamarora01`)
.then((res) => res.json)
let data = res;
console.log(data);