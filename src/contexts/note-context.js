import { useState, createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers";

const NotesContext = createContext();


const NotesProvider = ({ children }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [noteState, noteDispatch] = useReducer(notesReducer, {
    notes: [],
    
});
  const { notes } = noteState

  return (
    <NotesContext.Provider value={{ note, notes, setNote, noteState, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
const useNote = () => useContext(NotesContext);

export { useNote, NotesProvider };