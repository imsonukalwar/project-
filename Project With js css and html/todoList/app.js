

const form = document.querySelector('form');
const alltask = document.querySelector("#alltask");
const inp = document.querySelector("#inp");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = inp.value.trim();
    if(!text) return;

    const taskBox = document.createElement("div");
    taskBox.className = "task";

    const span = document.createElement("span");
    span.textContent = text;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.style.marginRight = "10px";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    doneBtn.addEventListener("click", ()=>{
        span.style.textDecoration = "line-through";
    });

    delBtn.addEventListener("click", ()=>{
        taskBox.remove();
    });

    taskBox.append(span, doneBtn, delBtn);
    alltask.append(taskBox);

    form.reset();
});
