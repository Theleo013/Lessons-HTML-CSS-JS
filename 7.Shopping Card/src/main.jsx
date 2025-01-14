import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, persistStore } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import LoadingData from "@/components/loadingData";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingData />} persistor={persistStore}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
