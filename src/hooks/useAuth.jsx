// REACT
import { useState } from "react";
// FIREBASE
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
// REDUX
import { useDispatch } from "react-redux";
import {
  login,
  signup,
  logout,
  checkAuth,
} from "../redux store/authStore/authSlice";

const useAuth = () => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  //   Signup function
  const Signup = (email, password, username) => {
    setPending(true);
    setError(null);
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password, username)
      .then((userCredential) => {
        const user = userCredential.user;
        updateCurrentUser(auth, { displayName: username });
        dispatch(signup(user));
        setError(null);
        setPending(false);
        setSuccess(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setPending(false);
        setSuccess(false);
      });
  };

  //   Login function
  const Login = (email, password) => {
    setPending(true);
    setError(null);
    setSuccess(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login(user));
        setError(null);
        setPending(false);
        setSuccess(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setPending(false);
        setSuccess(false);
      });
  };

  //   log out function
  const Logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   check if user is signed in
  const checkAuthState = () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(checkAuth(user));
    });
    unsubscribe();
  };

  return {
    error,
    pending,
    success,
    Signup,
    Login,
    Logout,
    checkAuthState,
    setError,
  };
};

export default useAuth;
