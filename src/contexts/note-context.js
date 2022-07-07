import { useState, createContext, useContext, useReducer } from "react";
import { useAuth } from "./auth-context";
import { NotesReducer } from "../reducers";

const NotesContext = createContext();
const NotesProvider = ({ children }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [noteState, noteDispatch] = useReducer(NotesReducer, {
    notes: [],
    showModal: false,
    noteToEdit: {},
    notesTrash: [],
    notesArchive: [],
});

  return (
    <NotesContext.Provider value={{ note, setNote, noteState, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
const useNote = () => useContext(NotesContext);

export { useNote, NotesProvider };