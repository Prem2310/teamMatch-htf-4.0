import Navbar from "../components/Navbar";
import graphiics from "../assets/landing_graphics.png";
import { Link } from "react-router-dom";
import Typist from "react-typist";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header className="bg-green-100 flex-grow flex items-center justify-center  p-10">
        <div>
          <Typist>
            <h1 className="text-7xl mb-4   italic">Match Maker</h1>
          </Typist>
          <p className="text-xl mb-2">
            We connect professionals to build their dream teams and accomplish
            projects together.
          </p>
          <p className="text-xl mb-2">
            Professionals to build their dream teams and accomplish projects
          </p>
          <p className="text-xl mb-2 ">
            By leveraging advanced algorithms and intuitive user interfaces,
          </p>
          <p className="text-xl mb-8 ">
            Match Maker streamlines the process of finding compatible team
            members and fostering collaboration among participants.
          </p>
          <Link to="/login">
            <button className="bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 transition duration-500 ease-in-out">
              Get Started
            </button>
          </Link>
        </div>
        <div>
          <img
            src={graphiics}
            className=""
            style={{ height: "300px" }}
            alt="Graphics"
          />
        </div>
      </header>
      {/* ... rest of your component */}
    </div>
  );
};

export default Landing;
