import "./home-page.css";
import { Link } from "react-router-dom"
import { LandingImage } from "../../assets";

const HomePage = () => {
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
          <div className="note-btn">
        <Link to="/" >
              <button className="btn btn-primary">
                Start Taking Notes
              </button>
            </Link>
            </div>
            </div>
        </div>
       
      
    </main>
    </>
  );
};

export { HomePage };