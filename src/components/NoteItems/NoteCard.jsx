import { useNote } from "../../contexts";
import { trashNote, archiveNote, restoreNote, trashArchivedNote } from "../../utilities";
import "./note-card.css";

const NoteCard = ({ note, pathname }) => {
  const { noteState, noteDispatch } = useNote();
  const editNoteHandler = () => {
    noteDispatch({ type: "SHOW_MODAL", payload: !noteState.showModal });
    noteDispatch({ type: "SET_NOTE_TO_EDIT", payload: note });
  };
const { title, content, createdOn, noteColor, noteLabel } = note
    return (
      <div  className="card card-note flex-col p-4 m-4" 
      style={{backgroundColor:noteColor}}>
        <p className="txt-small note-label">{noteLabel}</p>
    <p className="card-heading">{title}
     {(pathname !== "/trash" && pathname !== "/archive") && (
          <span className="note-pinned">
           <i className='fas fa-thumbtack'></i>
            </span>
        )}</p>
      <p className="card-content"> {content} </p>
      <p className="card-place">{createdOn}</p>
        {pathname !== "/trash" && (
          <div className="footer-icon">
            {pathname !== "/archive" && (
              <span
                className="icons-display"
                onClick={editNoteHandler}>
                 <i className="fas fa-pen"></i>
                </span>
                )}
                {noteState.notesArchive.includes(note) ? (
               <>
                <span
                  className="icons-display"
                  onClick={() => restoreNote(noteDispatch, note)}>
            <i class="fas fa-arrow-up"></i>
                  </span>
                  <span
                  className="icons-display"
                  onClick={() => trashArchivedNote(noteDispatch, note)}>
                    <i className="fas fa-trash"></i>
                  </span>
             </>
            ) : (
              <>
                <span
                  className="icons-display"
                  onClick={() => archiveNote(noteDispatch, note)}>
                <i class="fas fa-archive"></i>
                  </span>
               
                <span
                  className="icons-display"
                  onClick={() => trashNote(noteState, noteDispatch, note)}>
                       <i className="fas fa-trash"></i>
                  </span>
                 </>
            )}
          </div>
        )}
      </div>
     );

};

export { NoteCard }; 