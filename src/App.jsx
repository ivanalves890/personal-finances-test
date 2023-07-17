import { RouterProvider } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";
import router from "./router";

export default function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppContextProvider>
  );
}
