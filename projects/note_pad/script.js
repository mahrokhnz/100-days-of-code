const notePad = document.querySelector('.notePad')
const form = document.querySelector('.form')
const title = document.querySelector('.title')
const description = document.querySelector('.description')
const submit = document.querySelector('.submit')
const color = document.querySelector('.color')

let notesData = []

if (localStorage.getItem('user-notes')) {
    notesData = JSON.parse(localStorage.getItem('user-notes'))

    notesData.map((noteData) => {
        addNote(noteData)
    })
}

function setLocalStorageHandler(data) {
    notesData.push(data)
    localStorage.setItem('user-notes', JSON.stringify(notesData))
}

function deleteHandler(node, nodeInfo) {
    node.remove()

    let nodeIndex = notesData.findIndex((noteData) =>
        noteData.title === nodeInfo.title && noteData.description === nodeInfo.description && noteData.color === nodeInfo.color)

    notesData.splice(nodeIndex, 1)
    localStorage.setItem('user-notes', JSON.stringify(notesData))
}

function addButtonsHandler(node, nodeInfo) {
    const buttonWrapper = document.createElement('div')
    node.appendChild(buttonWrapper)
    buttonWrapper.classList.add('buttonWrapper')

    const deleteButton = document.createElement('button')
    buttonWrapper.appendChild(deleteButton)
    deleteButton.textContent = 'Delete'

    const editButton = document.createElement('button')
    buttonWrapper.appendChild(editButton)
    editButton.textContent = 'Edit'

    deleteButton.addEventListener('click', (e) => {
        e.stopPropagation()
        deleteHandler(node, nodeInfo)
    })

    // TODO: Edit Handler
    // TODO: Fix Cache
}

function addNote(value) {
    const newNote = document.createElement('div')
    notePad.appendChild(newNote)
    newNote.classList.add('newNote')

    const newNoteHeader = document.createElement('header')
    newNote.appendChild(newNoteHeader)
    newNoteHeader.style.backgroundColor = value.color


    notePad.insertBefore(newNote, form.nextSibling)

    const newNoteTitle = document.createElement('h3')
    newNote.appendChild(newNoteTitle)
    newNoteTitle.textContent = value.title

    const newNoteDescription = document.createElement('p')
    newNote.appendChild(newNoteDescription)
    newNoteDescription.textContent = value.description

    addButtonsHandler(newNote, {title: newNoteTitle.textContent, description: newNoteDescription.textContent, color: value.color})

    title.textContent = ''
    description.textContent = ''
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    title.style.border = '1px gray solid'
    description.style.border = '1px gray solid'

    const newTitleText = title.textContent
    const newDescriptionText = description.textContent
    const newTextColor = color.value

    if (newTitleText.length > 0 && newDescriptionText.length > 0) {
        addNote({title: newTitleText, description: newDescriptionText, color:newTextColor})
        setLocalStorageHandler({title: newTitleText, description: newDescriptionText, color: newTextColor})
    } else {
        if (title.textContent.length === 0) {
            title.style.border = '1px red solid'
        } else {
            description.style.border = '1px red solid'
        }
    }
})