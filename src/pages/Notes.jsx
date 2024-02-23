import { useEffect, useState } from "react"
import { Container } from "@mui/material"
import { Masonry } from "@mui/lab" 
import NoteCard from "../components/NoteCard"

export default function Notes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })

        const newNotes = notes.filter(note => note.id != id)

        setNotes(newNotes)
    }

    return (
        <Container>
            <Masonry columns={3} spacing={2}>
                {notes.map(note => (
                    <NoteCard 
                        key={note.id}
                        note={note} 
                        handleDelete={handleDelete} 
                    />
                ))}
            </Masonry>
        </Container>
    )
}