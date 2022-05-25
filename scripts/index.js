//store the products array in localstorage as "products"

function Oneconstructor(a, b, c, d) {
    this.type = a;
    this.desc = b;
    this.price = c;
    this.image = d;
}
let array = JSON.parse(localStorage.getItem("newconstr")) || []

function getdata() {
    event.preventDefault();
    let a = document.getElementById("type").value
    let b = document.getElementById("desc").value
    let c = document.getElementById("price").value
    let d = document.getElementById("image").value


    let newvar = new Oneconstructor(a, b, c, d)
    console.log(newvar)

    array.push(newvar)

    localStorage.setItem("newconstr", JSON.stringify(array))

    document.getElementById("type").value = ""
    document.getElementById("desc").value = ""
    document.getElementById("price").value = ""
    document.getElementById("image").value = ""

}

function getdata() {
    event.preventDefault();
    window.location.href = "./inventory.html"
}

function show_products() {
    event.preventDefault();
    window.location.href = "./inventory.html"
}