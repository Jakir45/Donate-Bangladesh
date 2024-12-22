function getId(id){
   const inputvalue = document.getElementById(id).value;
   const inputnumber = parseFloat(inputvalue)
   return inputnumber;
}
function getElementByInnerTex(nam){
    const innerTex =document.getElementById(nam).innerText;
    const innerValue =parseFloat(innerTex);

    return innerValue
}