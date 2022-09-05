let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let fullName = prompt("Adınız Nedir?")

let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} ${fullName}`

function clockFunction(){
    let dateTime= new Date();
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML= `${hrs}: ${min}: ${sec}  ${day}`
}

    setInterval(clockFunction, 1000);