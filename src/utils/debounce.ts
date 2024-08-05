export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;

    const later = () => {
      timeout = null;
      callback.apply(context, args);
    };

    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);
  };
}
