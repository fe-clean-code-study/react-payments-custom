import {Route, RouterProvider} from "../../libs/router";
import ListPage from "./list/ListPage.tsx";
import CreatePage from "./create/CreatePage.tsx";
import EditPage from "./edit/EditPage.tsx";
import Header from "../../components/Header.tsx";

export default function PaymentsPage () {
  return (
    <RouterProvider>
      <Header />
      <Route path='/' element={<ListPage/>} title='보유 카드'/>
      <Route path='/create' element={<CreatePage/>} title='카드 추가'/>
      <Route path='/edit' element={<EditPage/>} title='별칭 수정'/>
    </RouterProvider>
  )
}