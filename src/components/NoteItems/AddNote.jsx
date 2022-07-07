import { addNotes } from "../../utilities";
import { useNote } from "../../contexts";

import "./add-note.css";
const AddNote = () => {
    const emptyNote = {
        title: "",
        content: "",
    };
    
    const { note,setNote, noteDispatch } = useNote();

    const addNoteHandler = (e) => {
        e.preventDefault();
        if(!(note.title === "" && note.content === "")) {
            addNotes(noteDispatch, { note: note});
            setTimeout(() => {
                setNote(emptyNote)
            }, 1500);
        }
    }

return (
  <main className="main-container">
   <form className="note"
      onSubmit={(e) => addNoteHandler(e)}>
      <div className="notes">
     <input
        placeholder="Add title"
        className="note-heading"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <span className="note-pinned">
      <i className="fas fa-thumbtack"></i>
      </span>
      </div>
      <textarea
        className="note-content"
        placeholder="Enter note..."
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      ></textarea>
      <div className="footer">
      <button type="submit" className="add-note">
          Save Note
          </button>
          <span className='note-button'>
                <input
                  value={note.backgroundColor}
                  className='note-color'
                  type='color'
                  onChange={(e) =>
                    setNote({
                      ...note,
                      backgroundColor: e.target.value,
                    })
                  }
                />
              </span> 
      </div>
      </form>
   </main>
    
   
   
  );
};

export { AddNote };
    
              
         
      