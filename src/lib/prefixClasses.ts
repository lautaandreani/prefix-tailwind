export const prefix = (...classes: string[]) => {
  return classes
    .map((cls) =>
      cls
        .split(' ')
        .map((className) => `pr-${className}`)
        .join(' ')
    )
    .join(' ')
}
