
import { useState } from "react";
import { editNote } from "../../utilities";
import { useNote } from "../../contexts";
import { ColorPalette } from "../../components";
import "./modal.css";

const Modal = () => {
  const { noteState, noteDispatch } = useNote();
  const [editedTitle, setEditedTitle] = useState(noteState.noteToEdit.title);
  const [editedContent, setEditedContent] = useState(
    noteState.noteToEdit.content
  );
  const [editedColor, setEditedColor] = useState(
    noteState.noteToEdit.noteColor
  );
  const [editedLabel, setEditedLabel] = useState(
    noteState.noteToEdit.noteLabel
  );
  const editedNote = {
    ...noteState.noteToEdit,
    title: editedTitle,
    content: editedContent,
    noteColor: editedColor,
    noteLabel: editedLabel,
   
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
            className="add-note-content p-3"
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
            <span
               className="icons-display"
               onClick={() =>
                 noteDispatch({
                 type: "SHOW_COLOR_PALETTE_MODAL",
                 payload: !noteState.pickColorModal,
               })
            }>
            <i className="fas fa-palette"></i>
        </span>
        {noteState.pickColorModal && (
        <ColorPalette setNoteColor={setEditedColor} />
        )}
        <label htmlFor="select-label">
           <select
            id="select-label"
            value={editedLabel}
            className="select-label"
             onChange={(e) => setEditedLabel(e.target.value)}
            >
            {noteState.labels.map((labelOption) => {
            return <option value={labelOption} key={labelOption}>{labelOption}</option>;
           })}
           </select>
           </label>
        </div>
          </div>
          </div>
    );
};

export { Modal };