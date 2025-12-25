const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    const inp=document.querySelector('#input');
    const amount=inp.value;
    const h2=document.querySelector('h2');
    let totalTax=0;
    e.preventDefault();
        if (amount <= 1200000) {
        totalTax = 0;
    }
    else if (amount <= 1500000) {
        totalTax = (amount - 1200000) * 0.15;
    }
    else if (amount <= 1800000) {
        totalTax = 45000 + (amount - 1500000) * 0.25;
    }
    else if (amount <= 2000000) {
        totalTax = 45000 + 75000 + (amount - 1800000) * 0.30;
    }
    else {
        totalTax = 45000 + 75000 + 60000 + (amount - 2000000) * 0.35;
    }

    h2.textContent=`Total Tax: ${totalTax}`;
    form.reset();
})