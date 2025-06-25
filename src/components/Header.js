import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/const";
import { changeLanguage } from "../utils/configSlice";
import Search from "./Search";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successfull
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        //user sign in / sign out
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  

  return (
    <div className="fixed bg-gradient-to-b from-black w-full p-2 flex justify-between z-50 text-white">
      {/* <img src="https://ibb.co/8q1Fzjy" alt="logo"></img> */}

      <img
        src={LOGO}
        alt="logo"
        className="h-6 mx-1 md:h-12 md:mx-10 md:w-auto"
        onClick={() => navigate("/")}
      ></img>
      {user && <Search />}

      {user && (
        <div className="text-sm md:text-base flex -mt-2 p-0 md:flex justify-between md:p-2  font-semibold">
          {/* <select
            className="bg-transparent font-bold mx-4"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                className="text-white bg-gray-900"
                key={lang.identifier}
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select> */}
          <p className="flex justify-center items-center my-2 mx-3">{user?.displayName}</p>
          <button className="font-semibold" onClick={handleSignOut}>
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
