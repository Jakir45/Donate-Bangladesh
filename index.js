document.getElementById('donate-btn').addEventListener('click',function(event){

    
    const input =getId('inputvalue');
    console.log( input)

    if(!isNaN(input) && input.trim() !== ""){
        const amountnumber = getElementByInnerTex('amount');
        console.log(amountnumber)
        const totamAmount = input + amountnumber;

        document.getElementById('amount').innerText = totamAmount;
    }
    else{
        alert('not a number')
    }
})
// document.getElementById('donate-btn2').addEventListener('click',function(){
//     const input =getId('input-value2');
//     console.log(input)
// })