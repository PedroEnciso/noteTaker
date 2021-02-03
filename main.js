let numberOfNotes = 1;

function getText() {
    let inputText = document.getElementById('inputBox').value;
    inputTextCopy = document.createTextNode(inputText);
    document.getElementById('inputBox').value = "";
    return inputTextCopy;
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
    let noteButton = document.createElement('button');

    //put content inside note elements
    noteTitle.innerHTML = "Note #" + numberOfNotes;
    noteText.appendChild(getText());
    noteButton.innerHTML = "View Note";

    //put note elements into the note div
    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteText);
    noteDiv.appendChild(noteButton);

    //put the note div into the note section
    let noteContainer = document.getElementById('noteContainer');
    noteContainer.appendChild(noteDiv);

    numberOfNotes++;
}