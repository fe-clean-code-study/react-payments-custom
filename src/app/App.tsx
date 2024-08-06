import { Route, Router } from '../libs/router'
import PaymentsPage from './payments/PaymentsPage.tsx'
import Home from './Home.tsx'
import Example from '../components/Example.tsx'

export default function App() {
  return (
    <div className='root'>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/payments' element={<PaymentsPage />} />
        <Route path='/example' element={<Example />} />
      </Router>
    </div>
  )
}
