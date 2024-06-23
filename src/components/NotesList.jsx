import PropTypes from 'prop-types'
import Note from './Note';

function NotesList({ notes, onDelete }) {
  
    return (
        <ul className="notes-list">
            {notes.map((note, i) => 
                <li>
                    <Note key={Date.now() + i*3} note={note} onDelete={onDelete} />
                </li>
            )}
        </ul>
    )
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default NotesList