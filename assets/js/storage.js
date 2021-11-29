// localStorage.setItem("count", 1)
// localStorage.setItem("product", "phone")

// console.log(typeof localStorage.getItem("count"));

// localStorage.removeItem("count")

// localStorage.clear();


let mode = document.querySelector(".mode")

// if (localStorage.getItem("mode") == null) {
//     localStorage.setItem("mode", "light")
// }

// document.addEventListener("DOMContentLoaded", () => {
//     if (localStorage.getItem("mode") == "dark") {
//         document.body.style.background = "black"
//         mode.innerHTML = "Turn on light mode"
//     } else {
//         document.body.style.background = "transparent"
//         mode.innerHTML = "Turn on dark mode"
//     }
// })

// mode.addEventListener("click", () => {
//     if (localStorage.getItem("mode") == "dark") {
//         document.body.style.background = "transparent"
//         localStorage.setItem("mode", "light")
//         mode.innerHTML = "Turn on dark mode"
//     } else {
//         document.body.style.background = "black"
//         localStorage.setItem("mode", "dark")
//         mode.innerHTML = "Turn on light mode"
//     }
// })



// mode.onclick = function() {
//     sessionStorage.setItem("product", "phone")

// }


//Basket

let addToCart = document.querySelectorAll(".btn")




addToCart.forEach(btn => {
    btn.onclick = function(e) {
        e.preventDefault()
        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]))
        }
        let basket = JSON.parse(localStorage.getItem("basket"))

        let name = this.parentElement.children[0].innerHTML;

        let data_id = this.getAttribute("data-id")

        let price = this.parentElement.children[2].innerHTML

        let img = this.parentElement.previousElementSibling.src

        let product = { Id: data_id, name, price, img, count: 1 }
        let existProduct = basket.find(p => p.Id == data_id)
        if (existProduct == undefined) {
            basket.push(product)
        } else {
            existProduct.count++
        }

        localStorage.setItem("basket", JSON.stringify(basket))
        calcCount()
        totalPrice()

    }
})

calcCount()

function calcCount() {
    let countEle = document.querySelector(".count")
    let basket = JSON.parse(localStorage.getItem("basket"))

    countEle.innerHTML = basket.length
}
totalPrice()

function totalPrice() {
    let price = document.querySelector(".price")
    if (localStorage.getItem("basket") == null) {
        localStorage.setItem("basket", JSON.stringify([]))
    }
    let basket = JSON.parse(localStorage.getItem("basket"))
        // let total = 0;
        // basket.forEach(p => {
        //     total += +p.price * p.count
        // })
        // console.log(total);
    let total = basket.reduce((total, p) => {
        return total += +p.price * p.count
    }, 0)
    price.innerHTML = total;
}