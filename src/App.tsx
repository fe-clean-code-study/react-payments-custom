import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { CardEdit, CardList, CardNicknameEdit } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/react-payments" replace />,
  },
  {
    path: "/react-payments",
    children: [
      {
        index: true,
        element: <CardList />,
      },
      {
        path: "card-edit",
        children: [
          {
            index: true,
            element: <CardEdit />,
          },
          {
            path: ":id",
            element: <CardNicknameEdit />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="root">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
