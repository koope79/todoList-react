import React from 'react';
import './App.css';
import ListContainer from './components/List/ListContainer';


class App extends React.Component {

  state = {
    noteData: [
      { id: 4, title: "Написать логику" },
      { id: 3, title: "Стилизовать" },
      { id: 2, title: "Задеплоить todoList" },
      { id: 1, title: "Залить в GitHub" }
    ],
  };

  addNote = (title) => {
    let lastId = this.state.noteData[0] ? this.state.noteData[0].id + 1 : 1;
    this.setState({ noteData: [{ id: lastId, title: title }, ...this.state.noteData] });
  }

  deleteNote = (idNote) => {
    this.setState(
      {
        noteData: this.state.noteData.filter(id => id.id !== idNote)
      }
    );
  }

  render() {
    return (
      <div className="app-wrapper">
        <ListContainer data={this.state.noteData} addNote={this.addNote} deleteNote={this.deleteNote}/>
      </div>
    );
  }
}

export default App;
