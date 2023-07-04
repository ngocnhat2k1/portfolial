import { type } from 'os'
import { useEffect } from 'react'

type UseImperativeDisableScrollProps = {
  element: HTMLElement | null
  disabled: boolean
}

function useImperativeDisableScroll({
  element,
  disabled,
}: UseImperativeDisableScrollProps) {
  useEffect(() => {
    if (!element) {
      return
    }

    element.style.overflowY = disabled ? 'hidden' : 'scroll'

    return () => {
      element.style.overflowY = 'scroll'
    }
  }, [disabled, element])
}
export default useImperativeDisableScroll
