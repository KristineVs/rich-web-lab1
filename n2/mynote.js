let notesArray = [];
let isEditing = false;
let editingNoteIndex = null;

let addButton = document.getElementById("addTxt");
addButton.addEventListener("click", function(e) {
    let addNote = document.getElementById("text-box");

    if (isEditing && editingNoteIndex != null){
        notesArray[editingNoteIndex] = addNote.value;

        isEditing = false;
        editingNoteIndex = null;
    }
    else{
        notesArray.push(addNote.value);
        addNote.value = "";
    }
    
    showNote();
});

function showNote() {
    let html = "";

    notesArray.forEach(function(element, index) {
        html += `
            <div class="show-notes">
                <h5>Your Note</h5>
                <p class="text-notes">
                    ${element}
                </p>
                <button id="${index}" onclick="deleteNote(${index})" class="delete-btn">
                    Delete
                </button>
                <button id="${index}" onclick="editNote(${index})" class="edit-btn">
                    Edit
                </button>
            </div>`
    });

    let notesElm = document.getElementById("notes");

    if (notesArray.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `You have no notes.`;
    }
}

function deleteNote(index){
    notesArray.splice(index, 1);

    showNote();
}

function editNote(index){
    isEditing = true;
    document.getElementById("text-box").value = notesArray[index];
    editingNoteIndex = index;
}

function changeColor(event) {
    let currcolour = event.target.value;
    let notes = document.getElementsByClassName("show-notes");

    for(n of notes){
        n.style.backgroundColor = currcolour;
    }
};

/*select.onchange = () => {
    var white = document.getElementById("white");
    var pink = document.getElementById("pink");
    var yellow = document.getElementById("yellow");
    var green = document.getElementById("green");

    if(select.value == white){
        select.style.cssText = `
            background-color: ${select.value};
        `
    } if(select.value == pink){
        select.style.cssText = `
            background-color: ${select.value};
        `
    } if(select.value == yellow){
        select.style.cssText = `
            background-color: ${select.value};
        `
    } if(select.value == green){
        select.style.cssText = `
            background-color: ${select.value};
        `
    } else {
        alert("Error");
    }
}*/