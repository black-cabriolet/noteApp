//Load title and paragraph form local storage and display it
//Be able to delete notes

const notesContainer = document.getElementById('notes');

function showNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notesContainer.innerHTML = '';//Clears the container so it doesn’t duplicate notes when re-rendering.

    notes.forEach((note, index)=>{
        const noteDiv = document.createElement('li');
        noteDiv.className = 'note';

        const heading = document.createElement('h1');
        heading.innerText = note.title;
        noteDiv.appendChild(heading);

        const text = document.createElement('p');
        text.innerText = note.paragraph;
        noteDiv.appendChild(text);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.innerHTML = "&times";
        deleteBtn.onclick = () => deleteNote(index);
        noteDiv.appendChild(deleteBtn);

        notesContainer.appendChild(noteDiv);
    });
    console.log(notesContainer);
}
function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1); // Remove note
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes(); // Refresh UI
}

showNotes();