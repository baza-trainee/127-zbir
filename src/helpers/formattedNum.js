export function formatNumber(num) {
  const intPart = Math.trunc(num);
  return intPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
