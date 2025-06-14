//Create notes then save to local storage
//Submit button redirects us to main page.

document.addEventListener("DOMContentLoaded", function(){

    const title = document.getElementById('heading');
    const paragraph = document.getElementById('paragraph');
    const submitButton = document.getElementById('submit');

function saveToLocalStorage(){
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    const newNote = {
        title: title.innerHTML,
        paragraph: paragraph.innerHTML,
    };
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));
    console.log(notes);
}

function redirectToMainPage(){
    saveToLocalStorage();
     window.location.href= 'index.html';
}

    submitButton.addEventListener('click', redirectToMainPage);
})
