
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

const alBtn = document.querySelectorAll('#seat-id');
let count = 0;
let decrease =16;

for(const btn of alBtn){
   btn.addEventListener('click',function(e){
    count = count + 1;
    setInnerText('seat',count)
   })
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}


for(const btn of alBtn){
    btn.addEventListener('click',function(e){
        decrease = decrease - 1;
        setInnerText('seat-count',decrease)
    })
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}