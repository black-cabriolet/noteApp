//this is what youtube gave me
//just for remider incase i need a concept here.





const noteContainer = document.getElementById('notesContainer');
const createButton = document.getElementById('createNotes')
let notes = document.getElementById('inputBox');

//This is for basic displaying the p tag when create is pressed.
// function createnotes (){
//     inputBox.style.display='flex'
// }
// createButton.addEventListener('click', createnotes)

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem('notes')
}
showNotes();
function updateStorage(){
    localStorage.setItem('notes', noteContainer.innerHTML);
}
createButton.addEventListener('click',()=>{
    let inputBox = document.createElement("P")
    let img = document.createElement("IMG");
    inputBox.className = 'inputBox';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "images/deleteDarkMode.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})

noteContainer.addEventListener('click', function (e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){
        notes = document.getElementById("inputBox");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})