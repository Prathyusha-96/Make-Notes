
import { useState } from "react";
import { editNote } from "../../utilities";
import { useNote } from "../../contexts";
import "./modal.css";

const Modal = () => {
  const { noteState, noteDispatch } = useNote();
  const [editedTitle, setEditedTitle] = useState(noteState.noteToEdit.title);
  const [editedContent, setEditedContent] = useState(
    noteState.noteToEdit.content
  );

  const editedNote = {
    ...noteState.noteToEdit,
    title: editedTitle,
    content: editedContent,
  };

  return (
    
    <div className="editnote-wrapper">
        <div className="editnote-container">
        <div className="editnote-text-container">
          <input
            placeholder="Add title "
            className="add-note-title"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="add-note-content"
            placeholder="Enter note..."
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          ></textarea>
         </div>
         <div className="footer">
         <button
              className="edit-note"
              onClick={() => editNote(noteState, noteDispatch, editedNote)}>
              Edit Note
            </button>
          </div>
      </div>
    </div>
   
  );
};

export { Modal };