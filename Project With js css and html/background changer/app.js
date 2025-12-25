
const parent=document.getElementById('parent')

parent.addEventListener('click',(e)=>{
const body=document.querySelector('body')
    const ch=e.target;
    body.style.backgroundColor=ch.id;
})

