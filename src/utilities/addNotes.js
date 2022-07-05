import axios from "axios";
const addNotes = async (noteDispatch, note) => {
    const authToken = JSON.parse(localStorage.getItem("AUTH_TOKEN"))
    const Headers = { authorization: authToken };
    try {
        const response = await axios.post(
            "/api/notes", 
            {note},
            { headers: Headers }   
        );
        if (response.status === 201) {
            noteDispatch({ type: "ADD_NOTE", payload: response.data.notes });
        }  else {
            throw new Error();
          }   
    } catch (error) {
        console.log(error.message);
      }
};
 
export { addNotes }