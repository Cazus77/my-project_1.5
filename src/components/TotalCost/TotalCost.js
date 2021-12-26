export default function TotalCost({ productsDay }) {
  const costSum = productsDay.reduce((sum, product) => {
    return +sum + +product.cost;
  }, 0);
  return costSum;
}
