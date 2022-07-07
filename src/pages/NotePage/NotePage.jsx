import React from "react"
import { useNote } from "../../contexts";
import { Sidebar, NoteCard, AddNote, Modal } from "../../components";
import "./note-page.css";

const NotePage = () => {
    const {
      noteState: { notes, showModal },
      }  = useNote();
  return (
    <>
  <main className="note-container">
    <Sidebar />
    
     <section className="notes-editor-container">
        <AddNote />
          <section className="notes-display">
          {notes.length > 0 ? (
              notes.map((item) => <NoteCard note={item} key={item._id} />)
            ) : (
              <h3 className="h3">Saved Notes appear here</h3>
            )}
          </section>
          </section>

        {showModal && <Modal />}
        
    
    </main>
    </>
    
  );
};

export { NotePage };