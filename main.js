let svgdiv = document.getElementById("svgidv")
let butdiv = document.getElementById("butdiv")
let btn = document.getElementById("btn")

butdiv.addEventListener("mouseover" , () => {
    svgdiv.style.transition = "0.5s"
    svgdiv.style.backgroundColor = "#151515"
})
butdiv.addEventListener("mouseout" , () => {
    svgdiv.style.backgroundColor = "#d5966c"
})

butdiv.addEventListener("mouseover" , () => {
    btn.style.transition = "0.5s"
    btn.style.backgroundColor = "#d5966c"
})
butdiv.addEventListener("mouseout" , () => {
    btn.style.backgroundColor = "#151515    "
})

let happybirtday = alert("ბატონო ვალერ გილოცავთ დაბადების დღეს დიდი ბიჭი გაიზარდე <3")
// let valeri2 = alert("ყველაფერი ")