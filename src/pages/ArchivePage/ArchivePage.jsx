import { useLocation } from "react-router-dom";
import { useNote } from "../../contexts";
import { Sidebar, NoteCard } from "../../components";
import "../NotePage/note-page.css";

const ArchivePage = () => {
  const {
    noteState: { notesArchive },
} = useNote();

const { pathname } = useLocation();
return (
    <>
  <main className="note-container">
    
      <Sidebar />
<div className="notes-editor-container">
        <h1 className="h1">Archived Notes</h1>
        <section className="notes-display">
          {notesArchive.length > 0 ? (
            notesArchive.map((item) => <NoteCard note={item} key={item._id} pathname={pathname} />)
          ) : (
            <h3 className="h3">No archived notes</h3>
          )}
        </section>
    </div>
  </main>
  </>
);
};

export { ArchivePage };