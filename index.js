const btnCalcular = document.getElementById('btn-calcular')
let vlrTotalCompra, descuento, vlrPagar, vlrPC = 820000

btnCalcular.addEventListener('click', function () {
  let cantidad = parseInt(document.querySelector('#cantidad').value)
  let vlrCompra = document.querySelector('input[name="compra"]')
  let vlrDescuento = document.querySelector('input[name="descuento"]')
  let vlrTotal = document.querySelector('input[name="total"]')
  let msgDescuento = document.querySelector('#mensaje-descuento')
  msgDescuento.style.color = 'red'
  vlrTotalCompra = cantidad * vlrPC;
  
  if (vlrTotalCompra >= 1640000 && vlrTotalCompra <= 3280000) {
    descuento = vlrTotalCompra * 0.15;
    vlrPagar = vlrTotalCompra - descuento
    vlrCompra.value = vlrTotalCompra
    vlrDescuento.value = descuento
    vlrTotal.value =  vlrPagar
    msgDescuento.innerHTML = `<h2 color=red>Su descuento fue del 15%</h2>`
  } else {
    if (vlrTotalCompra > 3280000 && vlrTotalCompra <= 6560000) {
      descuento = vlrTotalCompra * 0.25;
      vlrPagar = vlrTotalCompra - descuento
      vlrCompra.value = vlrTotalCompra
      vlrDescuento.value = descuento
      vlrTotal.value =  vlrPagar
      msgDescuento.innerHTML = `<h2 color=red>Su descuento fue del 25%</h2>`
    } else {
      if (vlrTotalCompra > 6560000 && vlrTotalCompra <= 9840000) {
        descuento = vlrTotalCompra * 0.35;
        vlrPagar = vlrTotalCompra - descuento
        vlrCompra.value = vlrTotalCompra
      vlrDescuento.value = descuento
      vlrTotal.value =  vlrPagar
        msgDescuento.innerHTML = `<h2 color=red>Su descuento fue del 35%</h2>`
      } else {
        descuento = vlrTotalCompra * 0;
        vlrPagar = vlrTotalCompra - descuento
        vlrCompra.value = vlrTotalCompra
        vlrDescuento.value = descuento
        vlrTotal.value =  vlrPagar
        msgDescuento.innerHTML = `<h2 color=red>No hay descuento para esta compra</h2>`
      }
    }
  }
});
