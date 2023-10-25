// Utility function to format a number with commas for thousands separation
function formatNumberWithCommas(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default formatNumberWithCommas;