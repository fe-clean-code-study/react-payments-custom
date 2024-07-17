import { Card } from "./components";
import { CardEdit, CardList } from "./pages";

function App() {
  return (
    <>
      <div className="root">
        <div className="app">
          <Card type="empty" />
          <Card
            type="filled"
            cardName="일반 카드"
            cardNumber={["1", "", "", "3453"]}
            userName=""
            expiredMonth=""
            expiredYear="22"
          />
        </div>
      </div>
      <CardEdit />
      <CardList />
    </>
  );
}

export default App;
