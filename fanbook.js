let api="https://63c63b14d307b7696735016b.mockapi.io/img"
    
fetch(api)
    .then((request)=>{
        return request.json()
    })
    .then((data)=>{
        console.log(data)
        check(data)
    })
    .catch((err)=>{
        console.log(err)
    })
    function check(data){
data.forEach(element => {
let img=document.createElement("img")
img.src=element.avatar
document.getElementById("low").append(img)
});
    }