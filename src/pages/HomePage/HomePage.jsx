import "./home-page.css";
import { Link } from "react-router-dom";
import { LandingImage } from "../../assets";
import { useAuth } from "../../contexts";

const HomePage = () => {
  const { auth, setAuth } = useAuth()
  return (
    <>
    <main className="page-container">
      <div className="container-landing ">
      <img src={LandingImage} alt="img" className="img-landing" />
         <div className="container-landing-text">
          <div className="heading-main">
            <h1 className="h1">
             A Better Way To Track Your Tasks
            </h1>
          </div>
          <div className="subheading-main">
           Storing the data of your thoughts/ reminders in a place where we can access digitally
            through Make- Notes
          </div>
          <div className="button-landing">
            {auth.isAuth === true ? (
        <Link to="/addnote" >
              <button className="btn note-btn btn-primary">
                Start Taking Notes
              </button>
            </Link>
            ) : (
              <Link to="/login" >
              <button className="btn note-btn btn-primary">
                Start Taking Notes
              </button>
            </Link>
            )}
            </div>
            </div>
        </div>
       
      
    </main>
    </>
  );
};

export { HomePage };