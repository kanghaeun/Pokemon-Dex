import { React, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { Router } from "./router/Router.jsx";
import toast, { Toaster } from "react-hot-toast";
import configStore from "./redux/config/configStore.js";

function ToastHandler() {
  const error = useSelector((state) => state.pokemon.error);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return null;
}

function App() {
  return (
    <Provider store={configStore}>
      <Toaster position="top-center" reverseOrder={false} />
      <ToastHandler />
      <Router />
    </Provider>
  );
}

export default App;
