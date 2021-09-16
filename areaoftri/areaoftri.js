var calculationBox = document.querySelectorAll(".calculation-box")

var options1 = document.querySelectorAll(".option1");
var options2 = document.querySelectorAll(".option2");
var options3 = document.querySelectorAll(".option3");

var output = document.querySelectorAll(".outputDiv");

var errorDiv = document.querySelector(".error");

var radios = document.forms[0].elements;
// show or hide div
radios[0].addEventListener('change', ()=>{
    showOrHideBlock(calculationBox, 0, 1, 2);
})
radios[1].addEventListener('change', ()=>{
    showOrHideBlock(calculationBox, 1, 0, 2);
})
radios[2].addEventListener('change', ()=>{
    showOrHideBlock(calculationBox, 2, 1, 0);
})

function showOrHideBlock(blockDivs, showDivIndex, hideDivIndex1, hideDivIndex2){
    blockDivs[showDivIndex].style.display = "block";
    blockDivs[hideDivIndex1].style.display = "none";
    blockDivs[hideDivIndex2].style.display = "none";
}

document.forms[1].addEventListener("submit",(e)=>{
    e.preventDefault();
    var b = Number(options1[0].value);
    var h = Number(options1[1].value);
    
    output[0].innerText="Area= "+ (b*h)/2
},false)


document.forms[2].addEventListener('submit',(e)=>{
    e.preventDefault();
    errorDiv.style.display = "none";
    const a= Number(options2[0].value);
    const b= Number(options2[1].value);
    const c= Number(options2[2].value);

    if((a+b)>c && (b+c)>a && (a+c)>b){
    const s=(a+b+c)/2;
    output[1].innerText="Area= "+ (Math.sqrt(s*(s-a)*(s-b)*(s-c))).toFixed(2);
    }
    else{
        output[1].innerText="Area="
        errorDiv.style.display = "block";
    }  
    
}, false )

document.forms[3].addEventListener('submit',(e)=>{
    e.preventDefault();
    const b = Number(options3[0].value);
    const c = Number(options3[1].value);
    const A = Number(options3[2].value);
    console.log(b,c,A)
    output[2].innerText="Area= " +((b*c*Math.sin(A*Math.PI/180))/2).toFixed(2);  
}, false )