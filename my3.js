function peri(){
    let r = document.getElementById("radius").value;
    let c = r * 2 * 3.14;
    document.getElementById("perimeter").innerHTML = "Chu vi là: " + c;
    let s = r * r * 3.14;
    document.getElementById("acreage").innerHTML = "Diện tích là: " + s;
}