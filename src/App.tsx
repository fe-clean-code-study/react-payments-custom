import { RouterProvider } from "react-router-dom";
import { CardInfoProvider } from "./contexts";
import { router } from "./routes";

function App() {
  return (
    <div className="root">
      <CardInfoProvider>
        <RouterProvider router={router} />
      </CardInfoProvider>
    </div>
  );
}

export default App;
