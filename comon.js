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

function showsection(id){
    document.getElementById('main').classList.add('hidden');
    document.getElementById('historySection',).classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}


