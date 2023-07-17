import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../src/pages/RootLayout";
import Dashboard from "../src/pages/Dashboard";

import ItemLayout from "./pages/Items/ItemLayout";
import ItemList from "../src/pages/Items/ItemList";
import NewItem from "../src/pages/Items/NewItem";
import ViewItem from "../src/pages/Items/ViewItem";
import UpdateItem from "../src/pages/Items/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "items",
        element: <ItemLayout />,
        children: [
          { index: true, element: <ItemList /> },
          { path: "new", element: <NewItem /> },
          { path: ":id", element: <ViewItem /> },
          { path: ":id/update", element: <UpdateItem /> },
        ],
      },
    ],
  },
]);

export default router;
