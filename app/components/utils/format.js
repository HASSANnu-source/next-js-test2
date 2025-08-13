export default function toPersianNumber(number) {
  return new Intl.NumberFormat('fa-IR').format(number);
}