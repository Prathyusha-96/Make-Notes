const notesReducer = (noteState, { type, payload }) => {
    switch (type) {
      case "ADD_NOTE":
        return {
          ...noteState,
          notes: [...payload],
        };
  
      default:
        return noteState;
    }
  };
  
  export { notesReducer };