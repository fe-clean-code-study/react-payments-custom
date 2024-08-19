import { act, fireEvent, render, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import useForm from '../useForm'

interface TestFormValues {
  firstName: string
  lastName: string
}

describe('useForm 훅', () => {
  it('기본값으로 폼 값을 초기화해야 합니다.', () => {
    const { result } = renderHook(() =>
      useForm<TestFormValues>({
        defaultValues: { firstName: 'John', lastName: 'Doe' },
      }),
    )

    expect(result.current.getValues()).toEqual({
      firstName: 'John',
      lastName: 'Doe',
    })
  })

  it('input 변경 시 값이 업데이트되어야 합니다.', () => {
    const { result } = renderHook(() => useForm<TestFormValues>())
    const firstNameInput = result.current.register('firstName')

    act(() => {
      firstNameInput.onChange({
        target: { value: 'Jane' },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.getValue('firstName')).toBe('Jane')
  })

  it('폼 제출 시 입력 데이터와 함께 handleSubmit이 호출되어야 합니다.', () => {
    const mockSubmitFn = vi.fn()

    const { result } = renderHook(() =>
      useForm<TestFormValues>({
        defaultValues: { firstName: 'John', lastName: 'Doe' },
      }),
    )

    const formElement = render(
      <form
        onSubmit={result.current.handleSubmit(mockSubmitFn)}
        data-testid='form'
      />,
    ).getByTestId('form')

    fireEvent.submit(formElement)

    expect(mockSubmitFn).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
    })
  })

  it('폼 값이 올바르게 유효성 검사를 통과해야 합니다.', () => {
    const { result } = renderHook(() =>
      useForm<TestFormValues>({
        formOptions: {
          firstName: {
            check: (value) => value.length > 0,
          },
        },
      }),
    )

    result.current.register('firstName')
    result.current.register('lastName')

    const isFirstNameValid = result.current.checkValue('firstName')
    expect(isFirstNameValid).toBe(false)

    act(() => {
      result.current.setValue('firstName', 'Jane')
    })

    expect(result.current.checkValue('firstName')).toBe(true)
  })

  it('nextField가 지정된 경우에는 유효성 검사를 통과하면 다음 필드로 포커스를 이동시켜야 합니다.', () => {
    const { result } = renderHook(() =>
      useForm<TestFormValues>({
        formOptions: {
          firstName: {
            check: (value) => value.length > 3,
            nextField: 'lastName',
          },
        },
      }),
    )

    const firstNameInput = render(
      <input
        {...result.current.register('firstName')}
        data-testid='first-name'
      />,
    ).getByTestId('first-name')

    const lastNameInput = render(
      <input
        {...result.current.register('lastName')}
        data-testid='last-name'
      />,
    ).getByTestId('last-name')

    const focusSpy = vi.spyOn(lastNameInput, 'focus')
    fireEvent.change(firstNameInput, { target: { value: 'Jane' } })

    expect(focusSpy).toHaveBeenCalled()
  })
})
