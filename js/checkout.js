const cryptoResultado = document.querySelector('#crypto-result');
let totalActual = 150;
let solicitudActual = 0;
let cotizacionActual = null;

async function mostrarConversion(totalUSD) {
    const solicitud = ++solicitudActual;
    cryptoResultado.textContent = 'Loading BTC / ETH conversion...';
    const resultado = await convertirACrypto(totalUSD);
    if (solicitud !== solicitudActual) return;
    cotizacionActual = resultado;
    if (!resultado) {
        cryptoResultado.textContent = 'Live conversion unavailable. Please try again later.';
        return;
    }
    cryptoResultado.textContent = `${resultado.btc} BTC  ·  ${resultado.eth} ETH  (estimated)`;
}

document.addEventListener('ticket:change', evento => {
    totalActual = evento.detail.totalUSD;
    if (cotizacionActual && cotizacionActual.precioBTC > 0 && cotizacionActual.precioETH > 0) {
        cryptoResultado.textContent = `${(totalActual / cotizacionActual.precioBTC).toFixed(8)} BTC  ·  ${(totalActual / cotizacionActual.precioETH).toFixed(8)} ETH  (estimated)`;
    }
});

document.querySelector('#refresh-crypto').addEventListener('click', () => mostrarConversion(totalActual));
document.querySelector('#crypto-checkout').addEventListener('click', () => {
    document.querySelector('#checkout-message').textContent = 'Demo only: payment processing is not connected yet.';
});
mostrarConversion(totalActual);
