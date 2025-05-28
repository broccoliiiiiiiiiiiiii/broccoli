export const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

export const toPersianNumber = (n: string | number | undefined): any => {
  if (typeof n === 'undefined') {
    return ''
  }
  n = n.toString()

  return n.replace(/\d/g, (x: any) => farsiDigits[x])
}
