// List
let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
let li3 = document.getElementById('li3');
let li4 = document.getElementById('li4');

// Ul
let ul1 = document.getElementById('ul1');

// Edit
let editbtn1 = document.getElementById('ebtn1');
let editbtn2 = document.getElementById('ebtn2');
let editbtn3 = document.getElementById('ebtn3');
let editbtn4 = document.getElementById('ebtn4');

// Detele button
let deletebtn1 = document.getElementById('dbtn1');
let deletebtn2 = document.getElementById('dbtn2');
let deletebtn3 = document.getElementById('dbtn3');
let deletebtn4 = document.getElementById('dbtn4');

// Add button
let addbtn = document.getElementById('addbtn');

// For text
let fortext = document.getElementById('fortext');

// Delete
deletebtn1.addEventListener('click', () =>{
    li1.remove();
})

deletebtn2.addEventListener('click', () =>{
    li2.remove();
})

deletebtn3.addEventListener('click', () =>{
    li3.remove();
})

deletebtn4.addEventListener('click', () =>{
    li4.remove();
})

// Edit
editbtn1.addEventListener('click', () =>{
    document.getElementById('fortext').value = "Task-1";
})

editbtn2.addEventListener('click', () =>{
    document.getElementById('fortext').value = "Task-2";
})

editbtn3.addEventListener('click', () =>{
    document.getElementById('fortext').value = "Task-3";
})

editbtn4.addEventListener('click', () =>{
    document.getElementById('fortext').value = "Task-4";
})

// Add
addbtn.addEventListener('click', () =>{
    let li = document.createElement("li");
    li.innerText = fortext.value;
    ul1.append(li);
})

