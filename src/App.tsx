import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { CardEdit, CardList, CardNicknameEdit } from "./pages";
import { CardInfoListProvider } from "./context";

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
      <CardInfoListProvider>
        <RouterProvider router={router} />
      </CardInfoListProvider>
    </div>
  );
}

export default App;
