
export const URL_BASE = 'https://1a016720bde1.ngrok.io'

export async function getResumenDia(fecha) {
    const request = await fetch(`${URL_BASE}/${fecha}`, {

        method: 'GET'
    });

    const json = await request.json();

    return json
}