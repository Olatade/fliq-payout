
export default function addCommasToAmount(amount:any) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

