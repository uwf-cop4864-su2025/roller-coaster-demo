import "./App.css";
import { AppNavbar } from "./components/AppNavbar";
import { CoasterForm } from "./components/CoasterForm";
import { CoasterList } from "./components/CoasterList";
import { useState, useEffect } from "react";
import { MySignInScreen } from "./components/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseApp } from "./firebase.config";
import { coasterStore } from "./coasterStore";

function App() {
  const auth = getAuth(firebaseApp);

  const [coasters, setCoasters] = useState();
  const [user] = useAuthState(auth);

  // Takes in a coaster object and adds it to the coasters array
  const addCoaster = (coaster) => {
    coasterStore.saveCoaster(coaster);
  };

  const deleteCoaster = (coasterId) => {
    coasterStore.deleteCoaster(coasterId);
  };

  //effect hook
  useEffect(() => {
    // When the coaster store detects a change, update the state
    coasterStore.onCoastersChange(setCoasters);
  }, []);

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      //firebaseUser defined: is logged in
      console.log("logged in", firebaseUser.displayName);
      //do something with firebaseUser (e.g. assign to a state variable)
    } else {
      //firebaseUser is undefined: is not logged in
      console.log("logged out");
    }
  });

  if (!user) {
    return <MySignInScreen />;
  } else {
    return (
        <div className="App">
          <AppNavbar />
          <div className="container mt-4">
            <p className="lead">
              Hi, {user.displayName}. Gee I sure do love roller coasters. Oh yeah!!!
            </p>

            <CoasterForm addCoaster={addCoaster} />
            <CoasterList coasters={coasters} deleteCoaster={deleteCoaster} />
          </div>
        </div>
    );
  }
}

export default App;
