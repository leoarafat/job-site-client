import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { auth } from "./firebase/firebase.config";
import { setUser, toggleLoading } from "./pages/features/auth/authSlice";
import routes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user)
      if (user) {
        dispatch(setUser(user?.email));
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
