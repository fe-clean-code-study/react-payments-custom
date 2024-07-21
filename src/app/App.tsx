import { RouterProvider, Route }from "../libs/router";
import PaymentsPage from "./payments/PaymentsPage.tsx";
import Example from "../components/Example.tsx";

export default function App() {
  return (
    <div className='root'>
      <RouterProvider>
        <Route path='/' element={<div>home</div>} />
        <Route path='/payments' element={<PaymentsPage/>} />
        <Route path='/example' element={<Example/>} />
      </RouterProvider>
    </div>
  )
}
