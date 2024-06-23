import {useState} from "react";
import PropTypes from 'prop-types'

function NotesAdd({ addNotes }) {
    const [value, setValue] = useState('');
  
    const onChange = (e) => {
        setValue(e.target.value);
    }
  
    const onSubmit = (e) => {
        e.preventDefault();
        if (value === '') return;
        addNotes(value);
        setValue('');
    }
  
    return (
        <form onSubmit={onSubmit} className="add-form form">
            <h3 className="add-form-title">New Note</h3>
            <textarea
                className="add-form-textarea"
                value={value}
                onChange={onChange}
                name="text" cols="30" rows="10" 
            />
            <button className="add-form-btn" />
        </form>
    );
}

NotesAdd.propTypes = {
    addNotes: PropTypes.func.isRequired
}

export default NotesAdd