export function formatNumberWithCommas(number: number): string {
  const parts = number.toString().split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join('.');
}


