// Submit button Event Handler
// const submitBtn = document.getElementById("submit");
// submitBtn.addEventListener("click", function() {
//     const submitArea = document.getElementById("submit-area");
//     submitArea.style.display = "none";

//     const calculatRat = document.getElementById("calculat");
//     calculatRat.style.display = "block";
// })

//Rat Desplay Event Handler

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function() {
    const addPrice = document.getElementById("price").value;
    const addPriceAmount = Number(addPrice);

    const addCurrency = document.getElementById("currency").value;
    const addCurrencyAmount = Number(addCurrency);
    if (addPrice <= 0) {
        return alert("Put 1 Ounce price")  
    }
    if (addCurrency <= 0) {
        return alert("Put your Currency Rat")
    }


    var goldPrice24 = (addPriceAmount * addCurrencyAmount) / 31.1;
    var goldPrice22 = goldPrice24 / 24 * 22;
    var goldPrice21 = goldPrice24 / 24 * 21;
    var goldPrice18 = goldPrice24 / 24 * 18;
    var tolaPrice22 = goldPrice22 * 11.6638038;
    var tolaPrice21 = goldPrice21 * 11.6638038;

    document.getElementById("24k").innerHTML = " Gold Price is 24 K 1 gram = " + goldPrice24.toFixed(2) + "/=";
    document.getElementById("22k").innerHTML = " Gold Price is 22 K 1 gram = " + goldPrice22.toFixed(2) + "/=";
    document.getElementById("21k").innerHTML = " Gold Price is 21 K 1 gram = " + goldPrice21.toFixed(2) + "/=";
    document.getElementById("18k").innerHTML = " Gold Price is 18 K 1 gram = " + goldPrice18.toFixed(2) + "/=";
    document.getElementById("tola22").innerHTML = " Gold Price is 22 K 1 Tola = " + tolaPrice22.toFixed(2) + "/=";
    document.getElementById("tola21").innerHTML = " Gold Price is 21 K 1 Tola = " + tolaPrice21.toFixed(2) + "/=";


})

var d = new Date();

document.getElementById("date").innerHTML = d;

// Price Calculate
var calculetBtn = document.getElementById('calculet-price');
calculetBtn.addEventListener('click', function() {
    var unitAdd = document.getElementById('unit').value;
    var unitAmountAdd = Number(unitAdd);
    console.log(unitAmountAdd)

    var priceAdd = document.getElementById('koto').value;
    var priceAmountAdd = Number(priceAdd);
    console.log(priceAmountAdd)
    if (unitAdd <= 0) {
        return alert("Unit Here")
    }
    else if (priceAdd <= 0) {
        return alert("Price Here")  
    }

    var texAdd = document.getElementById('tex').value;
    var texAmountAdd = Number(texAdd);
   
    var totalPrice = (unitAmountAdd * priceAmountAdd);
    var totalTex = (totalPrice * texAmountAdd) / 100;

    var netPrice = totalPrice + totalTex;


    document.getElementById('totalPrice').innerHTML = "Price = " + totalPrice.toFixed(2);
    document.getElementById('totalTex').innerHTML = "Tex = " + totalTex.toFixed(2);
    document.getElementById('netPrice').innerHTML = "Total Price = " + netPrice.toFixed(2);


})