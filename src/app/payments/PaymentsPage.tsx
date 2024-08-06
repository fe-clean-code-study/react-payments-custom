import { Route, Router } from '../../libs/router'
import ListPage from './list/ListPage.tsx'
import EditPage from './edit/EditPage.tsx'
import Header from '../../components/Header.tsx'
import { PaymentsProvider } from './paymentsContext.tsx'
import { CreatePage } from './create'

export default function PaymentsPage() {
  return (
    <div className='app'>
      <PaymentsProvider>
        <Router>
          <Header className='page-title' />
          <Route path='/' element={<ListPage />} />
          <Route path='/create' element={<CreatePage />} title='카드 추가' />
          <Route path='/edit' element={<EditPage />} title='별칭 수정' />
        </Router>
      </PaymentsProvider>
    </div>
  )
}
