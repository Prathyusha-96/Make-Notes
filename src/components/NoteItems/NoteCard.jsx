import "./note-card.css";
const NoteCard = ({ note }) => {
  const { title, content } = note;
    return (
      <div  className="card card-note">
     <header className="card-heading">{title}</header>
      <p className="card-content">
        {content}
      </p>
      </div>
      
  );
};

export { NoteCard }; 