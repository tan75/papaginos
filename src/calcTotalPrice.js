const priceList = {
  basePrice: 200,
  largeSizeInc: 50, // Add 50 for size 35
  extrasPrice: 29, // Extras price
};

export const calcTotalPrice = (ord) => {
  let totPrice = priceList.basePrice;
  if (ord.size === 35) {
    totPrice += priceList.largeSizeInc;
  }

  // Price for extras
  const extrPrice =
    (ord.cheese.length + ord.veg.length + ord.meat.length) *
    priceList.extrasPrice;
  totPrice = totPrice + extrPrice;
  return totPrice;
};
