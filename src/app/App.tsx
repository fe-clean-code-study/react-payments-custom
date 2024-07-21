import { RouterProvider, Route }from "../libs/router";
import PaymentsPage from "./payments/PaymentsPage.tsx";

export default function App() {
  return (
    <RouterProvider>
      <Route path='/' element={<div>home</div>} />
      <Route path='/payments' element={<PaymentsPage/>} />
    </RouterProvider>
  )
}
