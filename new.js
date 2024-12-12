function perform(){
    const num1=parseFloat(document.getElementById('num1').value);
    const num2=parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)){
        alert('Please enter valid numbers');
        return;

    }
    const sum = num1+num2;
    const difference = num1 - num2 ;
    const product = num1*num2;

    document.getElementById('sum').innerText= sum;
    document.getElementById('sub').innerText =difference;
    document.getElementById('product').innerText= product;
}