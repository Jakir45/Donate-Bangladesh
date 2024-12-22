document.getElementById('donate-btn').addEventListener('click',function(){

    
    const input =getId('inputvalue');
    console.log( input)

    if(input !== String){
        const amountnumber = getElementByInnerTex('amount');
        
        const totalAmount = input + amountnumber;

        document.getElementById('amount').innerText = totalAmount;

        const totaltaka =getElementByInnerTex('total');
        const totalamount = totaltaka -input;
        
        document.getElementById('total').innerText = totalamount;

        const p =document.createElement('p');
        p.innerText =`Added : ${totalAmount} Tk. New Balance : ${totalamount} Tk.`;
        console.log(p)
        document.getElementById('historySection').appendChild(p);
    }
    else{
        alert('not a number')
    }
})
// document.getElementById('donate-btn2').addEventListener('click',function(){
//     const input =getId('input-value2');
//     console.log(input)
// })



document.getElementById('donationbtn').addEventListener('click',function(){
    showsection('main')
})
document.getElementById('historybtn').addEventListener('click',function(){
    showsection('historySection')
})
