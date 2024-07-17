import { Card } from "./components";
import { CardEdit, CardList } from "./pages";

function App() {
  return (
    <>
      <div className="root">
        <div className="app">
          <Card />
        </div>
      </div>
      <CardEdit />
      <CardList />
    </>
  );
}

export default App;
