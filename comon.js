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


// function btnshow(id){
//     document.getElementById('donationbtn').classList.remove('bg-lime-400')
//     document.getElementById('historybtn').classList.remove('bg-lime-400')

//     document.getElementById(id).classList.add('bg-lime-400')
// }