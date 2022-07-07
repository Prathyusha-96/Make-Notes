import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
      to="/label"
      className="menu-link">
      <i className="fas fa-tag"></i> Label 
      </Link>
      </li>
      <li className="sidebar-link">
      <Link 
      to="/archive"
      className="menu-link">
         <i className="fas fa-archive"></i> Archive
      </Link>
      </li>
      <li className="sidebar-link">
      <Link 
      to="/trash"
      className="menu-link">
        <i className="fas fa-trash"></i> Trash
      </Link>
      </li>
    </ul>
 
  </aside>
  </>
    );
  };

export { Sidebar };