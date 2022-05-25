function more_product() {
    event.preventDefault();
    window.location.href = "./index.html"
}

getdata = JSON.parse(localStorage.getItem("newconstr"))
getdata.map(function(el, i) {
    let div1 = document.createElement("div")

    let img = document.createElement("img")
    img.src = el.d

    let ptag1 = document.createElement("p")
    ptag1.innnerText = el.a

    let ptag2 = document.createElement("p")
    ptag2.innerText = el.b

    let ptag3 = document.createElement("p")
    ptag3.innerText = el.c


    let button3 = document.createElement("button")
    button3.setAttribute("id", "remove_product")
    button3.innerText = "Remove_Product"
    button3.addEventListener("Click", function() {


        removeproduct(el, i)

    })

    div1.append(img, ptag1, ptag2, ptag3, button3)
    document.querySelector("#all_products").append(div1)

});

function removeproduct(el, i) {
    getdata.splice(i, 1)
    localStorage.setItem("products", JSON.stringify(getdata))
    window.location.reload()
}