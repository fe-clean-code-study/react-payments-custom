import { RouterProvider } from "react-router-dom";
import { CardInfoListProvider } from "./context";
import { router } from "./routes";

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
