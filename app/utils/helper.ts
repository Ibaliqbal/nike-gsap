function convertToDolar(price) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

const cubicAnimation = "0.24, 0.43, 0.15, 0.97"

export { convertToDolar, cubicAnimation };
