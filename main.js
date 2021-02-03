let numberOfNotes = 1;
let modal = document.getElementById('modal');

function getText() {
    let inputText = document.getElementById('inputBox').value;
    document.getElementById('inputBox').value = "";
    return inputText;
}

function createNoteBox() {
    //check if there is a note written
    if (document.getElementById('inputBox').value === "") {
        alert("Your note is empty!");
        return;
    }
    
    //create all elements going into note box
    let noteDiv = document.createElement('div');
    let noteTitle = document.createElement('h4');
    let noteText = document.createElement('p');
    let hiddenText = document.createElement('p');
    let noteButton = createButton();

    hiddenText.style.display = 'none';

    //Put the full text in hidden <p> and shorten the note text for display
    let inputText = getText();
    let trimmedInputText = trimText(inputText);
    inputText = document.createTextNode(inputText);

    //put content inside note elements
    noteTitle.innerHTML = "Note " + numberOfNotes;
    noteText.appendChild(trimmedInputText);
    hiddenText.appendChild(inputText);

    //put note elements into the note div
    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteText);
    noteDiv.appendChild(noteButton);
    noteDiv.appendChild(hiddenText);

    //put the note div into the note section
    let noteContainer = document.getElementById('noteContainer');
    noteContainer.appendChild(noteDiv);

    numberOfNotes++;
}

function createButton() {
    let noteButton = document.createElement('button');
    noteButton.innerHTML = "View Note";
    noteButton.onclick = function () {
        parentDiv = this.parentElement;
        createModal(parentDiv);
    }
    return noteButton;
}

function createModal(noteDiv) {
    let noteInput =  noteDiv.children[3].textContent;
    let noteText = document.createTextNode(noteInput);
    let modalText = document.getElementById('modal-text');
    modalText.appendChild(noteText);
    modal.style.display = 'block';
}

//function to make the modal disappear
function clearModal() {
    modal.style.display = 'none';
    document.getElementById('modal-text').innerHTML = "";
}

//check the length of the note
function trimText(noteText) {
    if (noteText.length <= 50) {return noteText = document.createTextNode(noteText);}
    else {
        trimmedNoteText = noteText.substring(0, 50) + "...";
        trimmedNoteText = document.createTextNode(trimmedNoteText);
        return trimmedNoteText;
    }
}

//close modal if user clicks outside of the window (this is a cool function i found on w3schools.com)
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }