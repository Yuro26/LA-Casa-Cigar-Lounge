// Simple note saving using localStorage
window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('noteForm');
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notesList');

    // Load notes from localStorage
    function loadNotes() {
        notesList.innerHTML = '';
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        notes.forEach(note => {
            const li = document.createElement('li');
            li.textContent = note;
            notesList.appendChild(li);
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const note = noteInput.value.trim();
        if (note) {
            const notes = JSON.parse(localStorage.getItem('notes') || '[]');
            notes.push(note);
            localStorage.setItem('notes', JSON.stringify(notes));
            noteInput.value = '';
            loadNotes();
        }
    });

    loadNotes();
});
