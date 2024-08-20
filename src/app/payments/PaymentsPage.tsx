import { Route, Router } from '../../libs/router'
import Header from '../../components/Header.tsx'
import { PaymentsProvider } from './paymentsContext.tsx'
import CreatePage from './create/CreatePage.tsx'
import ListPage from './list/ListPage.tsx'
import EditPage from './edit/EditPage.tsx'

export default function PaymentsPage() {
  return (
    <div className='app'>
      <PaymentsProvider>
        <Router>
          <Header className='page-title' />
          <Route path='/' element={<ListPage />} />
          <Route
            path='/create'
            element={<CreatePage />}
            data={{ title: '카드 추가' }}
          />
          <Route path='/:id' element={<EditPage />} />
        </Router>
      </PaymentsProvider>
    </div>
  )
}
