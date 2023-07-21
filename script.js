const addBtn = document.querySelector('#addBtn')
let main = document.querySelector('.main');


// self calling function



let saveNotes = () =>{
    const notes = document.querySelectorAll('.note-body')

    const data = []
    notes.forEach(element => {
        data.push(element.value)
    });

    // console.log(data);
    localStorage.setItem("notes", JSON.stringify(data))
}

addBtn.addEventListener('click', function(){
addNewNote()

}, false)



let addNewNote = (text = "") =>{

    let noteBox = document.createElement('div');
    noteBox.classList.add('note-box')
    noteBox.innerHTML = `  <div class="note-head">
    <i class="save fas fa-save"></i>
    <i class="trash fa-solid fa-trash-can"></i>
  </div>
  <textarea class="note-body">${text}</textarea>`

noteBox.querySelector('.trash').addEventListener('click', function(){
    noteBox.remove()
    saveNotes()
}, false)

noteBox.querySelector(".save").addEventListener('click', function(){
    saveNotes();
}, false)

  main.appendChild(noteBox)
  saveNotes()
}

(
    function(){
        let lsNotes = JSON.parse(localStorage.getItem('notes'))
        
        // console.log(lsNotes);

        lsNotes.forEach(element => {
            addNewNote(element)
        });

     
    }
)()