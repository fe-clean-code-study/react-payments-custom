import {Route, RouterProvider} from "../../libs/router";
import ListPage from "./list/ListPage.tsx";
import CreatePage from "./create/CreatePage.tsx";
import EditPage from "./edit/EditPage.tsx";
import Header from "../../components/Header.tsx";
import PaymentsProvider from "./PaymentsProvider.tsx";

export default function PaymentsPage () {
  return (
    <div className='app'>
      <PaymentsProvider>
        <RouterProvider>
          <Header className='page-title'/>
          <Route path='/' element={<ListPage/>}/>
          <Route path='/create' element={<CreatePage/>} title='카드 추가'/>
          <Route path='/edit' element={<EditPage/>} title='별칭 수정'/>
        </RouterProvider>
      </PaymentsProvider>
    </div>
  )
}