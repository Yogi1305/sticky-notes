
import './App.css';
import NotesContainer from './component/NoteContainer/NotesContainer';
import Sidebar from './component/Sidebar/Sidebar';



function App() {
  return (
    <div className="App">
      <Sidebar/>
    <NotesContainer/>
    </div>
  );
}

export default App;
