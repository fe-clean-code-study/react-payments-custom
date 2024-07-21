import RouterProvider from "../libs/router/RouterProvider.tsx";
import Route from "../libs/router/Route.tsx";
import useRouter from "../libs/router/useRouter.ts";

export default function TestPage() {
  const router = useRouter()
  console.log(router)

  return (
    <div>
      <h1>Route Test</h1>
      <RouterProvider>
        <Route path='/item1' element={<div>item1</div>}/>
        <Route path='/item2' element={<div>item2</div>}/>
      </RouterProvider>
    </div>
  )
}