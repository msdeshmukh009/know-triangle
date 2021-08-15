var inputAngles = document.querySelectorAll(".input");
var outputDiv = document.querySelector("#isTriangle");
var checkBtn = document.querySelector("#button");
var form =document.querySelector("#input-form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    var a = Number(inputAngles[0].value);
    var b = Number(inputAngles[1].value);
    
    var hyp = Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
    
    outputDiv.innerText="c= "+hyp.toFixed(2)
})

