
// code for to go to bus seat and ticket section

document.getElementById('buy').addEventListener('click',function(){
    window.location.hash = '#bus';
})

// code for succes section

function next(){
    const busSection = document.getElementById('bus');
    busSection.classList.add('hidden');

    const succesSection =document.getElementById('success');
    succesSection.classList.remove('hidden');
}


// calculation

var totalPrice = 0;
var seatCount = 0;

function updatePrice(price){
    totalPrice += price;
    document.getElementById('total-price').textContent = totalPrice;
}

function updateSeatCount(){
    seatCount--;
    document.getElementById('seat-count').textContent = seatCount;
}

function bookSeat (seatId,price){
    var seat = document.getElementById('seat-id').addEventListener('click', function(){
        updatePrice(price);
        updateSeatCount();
    });
}