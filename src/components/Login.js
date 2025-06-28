import { checkValidData } from "../utils/checkValidData";
import Header from "./Header";
import { useRef, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(" ");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  const handleBtn = (e) => {
    e.preventDefault();
    const msg = checkValidData(email.current.value, "@Pass123");
    setErrMsg(msg);
    if (msg) return;

    if (!isSignInForm) {
      const msg = checkValidData(email.current.value, password.current.value);
      setErrMsg(msg);
      if (msg) return ;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/Browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // console.log(user);

          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          if (errorMessage.includes("invalid-credential"))
            setErrMsg("invalid credential");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);

          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          if (errorMessage.includes("invalid-credential"))
            setErrMsg("invalid credential");
          // setErrMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  
  return (
    <div>
      <Header />
      <div className=" bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg)] flex justify-center items-center h-screen w-screen">
        <div className=" border-2 border-black p-2 relative  rounded-xl m-0 bg-black/80 min-w-fit min-h-fit h-3/5 w-72 flex justify-center items-center">
          <form>
            <div className="h-22 w-60 p-2 m-2">
              <img
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                alt="profile"
                className="object-cover size-20 rounded-full mx-auto"
              ></img>
            </div>

            <div className="text-white">
              {!isSignInForm && (
                <>
                  <input
                    ref={name}
                    type="text"
                    placeholder="full name"
                    required
                    className="border-2 w-60 bg-gray-700 border-black rounded p-1 my-1 text-white"
                  />
                  <br />
                </>
              )}
              <input
                ref={email}
                type="email"
                placeholder="email - test@test.com"
                className="border-2 w-60 bg-gray-700 border-black rounded p-1 my-1 "
              ></input>
              <br></br>
              <input
                ref={password}
                type="password"
                placeholder="password - @Pass123"
                className="border-2 w-60 border-black  rounded p-1 my-1 bg-gray-700"
              ></input>
              <br></br>
              <span>
                <a href="#.com" className="text-white">
                  {isSignInForm ? "forgot password?" : ""}
                </a>
              </span>
              <p className="text-red-700">{errMsg}</p>
            </div>

            <div
              className="w-60 h-10 my-6 rounded bg-red-600 box-border p-1 cursor-pointer"
              onClick={handleBtn}
            >
              <button className="ml-24 box-border border-black text-white">
                {isSignInForm ? "login" : "sign up"}
              </button>
            </div>
            {isSignInForm && (
              <>
                <label className="text-white">
                  <input type="checkbox" />
                  Remember me
                </label>
                <br />
              </>
            )}
            <button
              className="mt-4 p-1  border-black mx-auto cursor-pointer text-white"
              onClick={handleClick}
            >
              {isSignInForm ? "sign up" : "sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
