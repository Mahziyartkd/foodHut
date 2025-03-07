fetch('https://api.itbook.store/1.0/search/mongodb')
.then(response=>{
    return response.json();
})
.then(data=> console.log(data))