import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import Route from '../Route'
import { Router } from '../Router'
import useRouter from '../useRouter'

describe('라우팅 기능 테스트', () => {
  it('기본 라우트가 올바르게 렌더링되어야 합니다.', () => {
    render(
      <Router>
        <Route path='/' element={<div>Home Page</div>} />
      </Router>,
    )
    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })

  it('useRouter 훅이 작성한 경로로 페이지를 올바르게 이동시켜야 합니다.', () => {
    const HomeTest = () => {
      const { go } = useRouter()
      return (
        <div>
          Home Page
          <button onClick={() => go('/about')}>Go to About</button>
        </div>
      )
    }
    const AboutTest = () => {
      const { go } = useRouter()
      return (
        <div>
          About Page
          <button onClick={() => go('/123')}>Go to Item</button>
        </div>
      )
    }
    const ItemTest = () => {
      const { params } = useRouter()
      return <div>Param: {params.id}</div>
    }
    render(
      <Router>
        <Route path='/' element={<HomeTest />} />
        <Route path='/about' element={<AboutTest />} />
        <Route path='/:id' element={<ItemTest />} />
      </Router>,
    )

    act(() => {
      screen.getByText('Go to About').click()
    })
    expect(screen.getByText('About Page')).toBeInTheDocument()

    act(() => {
      screen.getByText('Go to Item').click()
    })
    expect(screen.getByText('Param: 123')).toBeInTheDocument()
  })
})
