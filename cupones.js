const coupons = [
  {
    name: 'JuanDC_es_Batman',
    discount: 10,
  },
  {
    name: 'pero_no_le_digas_a_nadie',
    discount: 30,
  },
  {
    name: 'es_un_secreto',
    discount: 20,
  },
];

function calcularPrecioConDescuento(price, discount) {
  return (price * (100 - discount)) / 100;
}

function onclickValidarCupon() {
  let discount;
  const inputPrice = document.getElementById('InputPrice').value;
  const inputCupon = document.getElementById('InputCupon').value;
  const resultP = document.getElementById('resultP');

  const validCoupon = (coupon) => coupon.name === inputCupon; // se valida si el cupón es igual al del array coupons
  const userCoupon = coupons.find(validCoupon); // se recorre array buscando el validCoupon

  if (!userCoupon) {
    alert(`El cupón ${inputCupon} no es válido`);
    discount = 0;
    resultP.innerText = `El precio a pagar es: $ ${calcularPrecioConDescuento(
      inputPrice,
      discount,
    )}`; // se evalua opción negativa del cupón y se imprime
  } else {
    discount = userCoupon.discount;
    resultP.innerText = `El precio a pagar con descuento es: $ ${calcularPrecioConDescuento(
      inputPrice,
      discount,
    )}`; // se evalúa opción positiva del cupón y se imprime
  }
}
