let root=document.querySelector("div#root")
let img_1=root.querySelector("#img-1")
let img_2=root.querySelector("#img-2")
let img_3=root.querySelector("#img-3")
let img_4=root.querySelector("#img-4")


console.log(img_1)
console.log(img_2)
console.log(img_3)


img_2.addEventListener("click",function() {
    img_1.setAttribute("src","./images/casio.jpg")

})
img_3.addEventListener("click",function() {
    img_1.setAttribute("src","./images/golrang.jpg")
})
img_4.addEventListener("click",function() {
    img_1.setAttribute("src","./images/Electrical tools.jpg")
})