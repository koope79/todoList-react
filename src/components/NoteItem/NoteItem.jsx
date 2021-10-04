import React, { useState } from 'react';
import s from './NoteItem.module.css';

const NoteItem = (props) => {

    let [editMode, setEditMode] = useState(false);
    const activeMode = () => {
        if(!editMode) setEditMode(true);
        else setEditMode(false);
    }
    
    return (
        <div className={s.content}>
            
            <div className={s.textNote + " " + (editMode && s.Line)} onClick={activeMode}>
                <span>{props.title}</span>
            </div>

            <div className={s.noteButton}>
                <button onClick={() => { props.deleteNote(props.id) }}><i className="fa fa-trash"></i></button>
            </div>

        </div>
    );
}

export default NoteItem;