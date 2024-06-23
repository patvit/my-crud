import PropTypes from 'prop-types'

function Note({note, onDelete}) {

    return (
      <li className="list-item item">
        <button onClick={() => onDelete(note.id)} className="list-item-btn">&#10006;</button>
        <div className="list-item-content">{note.content}</div>
      </li>
    )
}

Note.propTypes = {
    note: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Note