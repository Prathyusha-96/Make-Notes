import "./sidebar.css";
import { useNote } from "../../contexts";
import { useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const { noteState, noteDispatch } = useNote();
  const [ addLabel, setAddLabel ] = useState("");
  const [error, setError] = useState("");

  const createNewLabel = () => {
    addLabel !== ""
    ? noteDispatch({ type: "CREATE_LABEL", payload: addLabel})
    : setError("Can't add empty label");

    setTimeout(() => {
      setAddLabel("");
      setError("");
    }, 2000);
  }
 return (
  <>
<aside className="sidebar">
    <ul className="sidebar-heading">
      <li className="sidebar-link">
      <Link 
      to="/addnote"
      className="menu-link">
        <i className="fas fa-book"></i> Notes
        </Link>
        </li>
      <li className="sidebar-link">
      <Link 
      to="/archive"
      className="menu-link">
        <i class="fas fa-archive"></i> Archive
      </Link>
      </li>
      <li className="sidebar-link">
      <Link 
      to="/trash"
      className="menu-link">
        <i className="fas fa-trash"></i> Trash
      </Link>
      </li>
      <li className="sidebar-link">
      <div className="menu-link">
      <i className="fas fa-tag"></i> Label 
      </div>
      <div className="flex-col">
          {noteState.labels.map((label) => (
            <div key={label} className="label-nav-item m-1">
              {label}
            </div>
          ))}
        </div>
        <div className="flex-row create-label-row">
          <input
            className="create-label"
            placeholder="create label..."
            value={addLabel}
            onChange={(e) => setAddLabel(e.target.value)}
          />
          <button
            onClick={createNewLabel}
            className="button btn-solid button-primary"
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </li>
    </ul>
 </aside>
  </>
    );
  };

export { Sidebar };