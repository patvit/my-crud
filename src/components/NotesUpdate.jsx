import PropTypes from 'prop-types'

function NotesUpdate({ onUpdate }) {

    return (
        <div className="update-box">
            <h1 className="update-title">Notes</h1>
            <button className="update-btn" onClick={onUpdate} ><span className="update"></span></button>
        </div>
    );
}

NotesUpdate.propTypes = {
    onUpdate: PropTypes.func.isRequired
}

export default NotesUpdate