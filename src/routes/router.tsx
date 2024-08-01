import { createBrowserRouter, Navigate } from "react-router-dom";
import { CardEditPage, CardListPage, CardNicknameEditPage } from "../pages";

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
        element: <CardListPage />,
      },
      {
        path: "card-edit",
        children: [
          {
            index: true,
            element: <CardEditPage />,
          },
          {
            path: ":id",
            element: <CardNicknameEditPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
