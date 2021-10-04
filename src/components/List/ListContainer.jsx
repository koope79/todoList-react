import React from 'react';
import Header from '../Header/Header';
import NoteItem from '../NoteItem/NoteItem';
import s from './ListContainer.module.css';

const ListContainer = (props) => {
    let note = props.data.map((n) => (<NoteItem key={n.id} id={n.id} title={n.title} deleteNote={props.deleteNote}/>));

    return (
        <div className={s.content}>
            <div className={s.headerList}>
                <Header addNote={props.addNote}/>
            </div>
            
            <div className={s.noteList}>

                {note}

            </div>
        </div>
    );
}

export default ListContainer;