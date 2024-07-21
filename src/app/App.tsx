import Example from "../components/Example.tsx";
import { RouterProvider, Route }from "../libs/router";
import TestPage from "../components/TestPage.tsx";

export default function App() {
  return (
    <RouterProvider>
      <Route path='/example' element={<Example/>} title='example'/>
      <Route path={'/hello'} element={<div>hello</div>} title='hello'/>
      <Route path='/test' element={<TestPage/>} title='test'/>
    </RouterProvider>
  )
}
