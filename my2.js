function temp(){
    let c = document.getElementById("tempC").value;
    let f = (c * 9) / 5 + 32
    document.getElementById("result").innerHTML = "Result: " + f;
}
