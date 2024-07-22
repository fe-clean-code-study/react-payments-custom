import { createBrowserRouter, Navigate } from "react-router-dom";
import { CardEdit, CardList } from "../pages";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
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
            element: <CardEdit />,
          },
        ],
      },
    ],
  },
]);

export default router;
