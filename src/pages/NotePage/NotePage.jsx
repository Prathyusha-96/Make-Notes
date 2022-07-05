import React from "react"
import { useNote } from "../../contexts";
import { Sidebar, NoteCard, AddNote } from "../../components";
import "./note-page.css";

const NotePage = () => {
    const {
      noteState: { notes },
      }  = useNote();
  return (
    <>
  <main className="note-container">
    <Sidebar />
     <div className="notes-editor-container">
        <AddNote />
          <section className="notes-display">
          {notes.length > 0 ? (
              notes.map((item) => <NoteCard note={item} key={item._id} />)
            ) : (
              <h3 className="h3">Saved Notes appear here</h3>
            )}
          </section>
        </div>
    
    </main>
    </>
    
  );
};

export { NotePage };