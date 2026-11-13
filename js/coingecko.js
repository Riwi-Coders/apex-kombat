
const COINGECKO_API = "https://api.coingecko.com/api/v3/simple/price";

// Obtener precios actuales de Bitcoin y Ethereum
async function obtenerPrecios() {
    const url = `${COINGECKO_API}?ids=bitcoin,ethereum&vs_currencies=usd`;

    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const datos = await respuesta.json();

        return {
            bitcoin: datos.bitcoin.usd,
            ethereum: datos.ethereum.usd
        };

    } catch (error) {
        console.error("Error al consultar CoinGecko:", error);
        return null;
    }
}

// Convertir el precio de las entradas a criptomonedas
async function convertirACrypto(totalUSD) {
    const precios = await obtenerPrecios();

    if (!precios) {
        return null;
    }

    return {
        usd: totalUSD,
        btc: (totalUSD / precios.bitcoin).toFixed(8),
        eth: (totalUSD / precios.ethereum).toFixed(8),
        precioBTC: precios.bitcoin,
        precioETH: precios.ethereum
    };
}
