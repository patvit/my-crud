import { useEffect, useState } from 'react';
import './App.css';
import NotesUpdate from './components/NotesUpdate';
import NotesList from './components/NotesList';
import NotesAdd from './components/NotesAdd';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        onUpdate();
    };
    fetchData();
  }, []);

  const onUpdate = async () => {
    const request = await fetch('http://localhost:7070/notes/', {
      method: 'GET'
    });
    const response = await request.json();
    setNotes([...response])
  }

  const addNotes = async (content) => {
    await fetch(`http://localhost:7070/notes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    });
    onUpdate();
  }

  const onDelete = async (id) => {
    await fetch(`http://localhost:7070/notes/${id}`, {
      method: 'DELETE'
    });
    onUpdate();
  }

  return (
    <>
      <NotesUpdate onUpdate={onUpdate} />
      <NotesList notes={notes} onDelete={onDelete} />
      <NotesAdd addNotes={addNotes} />
    </>
  );
}

export default App