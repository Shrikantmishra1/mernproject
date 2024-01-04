import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const {currentUser}=useSelector(state=>state.user.user);

  return (
    <div className=" shadow-lg bg-three ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="font-bold"> MERN APP</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            {" "}
            <li className="hover:bg-four   ">Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="hover:bg-four  " >About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile'
className="h-7 w-7 rounded-full object-cover"

              />
            ):(
              <li className="hover:bg-four    "  >sign In</li>
            )}

           
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
