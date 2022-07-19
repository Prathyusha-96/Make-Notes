import { useState } from "react";
import { addNotes } from "../../utilities";
import { useNote } from "../../contexts";
import { ColorPalette } from "../../components";
import "../../styles/main.css";
import "./add-note.css";

const AddNote = () => {
 
    const emptyNote = {
        title: "",
        content: "",
        noteColor: "",
    };
    
    const { note,setNote, noteState, noteDispatch } = useNote();
    const [noteColor, setNoteColor] = useState("var(--note-color)");
    const [noteLabel, setNoteLabel] = useState("no-label");

  const noteDate = new Date().toLocaleString();

    const addNoteHandler = (e) => {
        e.preventDefault();
        if(!(note.title === "" && note.content === "")) {
            addNotes(noteDispatch, { 
              note: {
                ...note,
                createdOn: noteDate,
                noteColor: noteColor,
                noteLabel: noteLabel,
              },
            });
            setTimeout(() => {
                setNote(emptyNote);
                setNoteColor("var(--note-color)");
                setNoteLabel("no-label");
            }, 1500);
        }
    };
    const noteFormColor =
    noteColor === "var(--note-color)" ? "white" : noteColor;

return (
<form className="add-note-container"
      onSubmit={(e) => addNoteHandler(e)}
      style={{
        backgroundColor: noteFormColor,
        boxShadow:
          "0px 0px 20px 0px rgba(0, 0, 0, 0.2), 15px 17px 60px var(--grey-bg)",
          position: "relative",
      }}
      >
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
        <span 
          className="icons-display"
          onClick={() =>
            noteDispatch({
              type: "SHOW_COLOR_PALETTE",
              payload: !noteState.pickColor,
            })
          }>
          <i class="fas fa-palette"></i>
              </span> 
              {noteState.pickColor && (
              <ColorPalette setNoteColor={setNoteColor} />
            )} 
             <label htmlFor="select-label">
          <select
              id="select-label"
              value={noteLabel}
              className="select-label"
              onChange={(e) => setNoteLabel(e.target.value)}
            >
              {noteState.labels.map((labelOption) => (
                <option value={labelOption} key={labelOption}>
                  {labelOption}
                </option>
              ))}
            </select> 
            </label>
            
      </div>
      </form>
    
   
  );           
 }

export { AddNote };
    
              
         
      