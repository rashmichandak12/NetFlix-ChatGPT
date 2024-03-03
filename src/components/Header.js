import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const defaultlang = useSelector(store => store.config.lang);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const authSubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => authSubscriber();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const languageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img src={NETFLIX_URL} alt="logo" className="w-44" />
      {user && (
        <div className="flex p-2">
          {showGptSearch &&
            <select className="px-2 m-2 bg-gray-900 text-white" onChange={languageChange} defaultValue={defaultlang}>
              {SUPPORTED_LANGUAGES.map((lang => <option value={lang.id}>{lang.name}</option>))}
            </select>
          }
          <button
            className="rounded-lg py-2 px-4 my-2 mx-4 text-black bg-blue-200 cursor-pointer"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img src={user.photoURL} alt="usericon" className="w-12 h-12 m-2" />
          <button
            onClick={handleSignout}
            className="rounded-lg text-white font-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
