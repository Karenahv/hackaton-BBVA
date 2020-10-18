
const URL_BASE = 'http://d811e445999a.ngrok.io '

export async function getResumenDia(fecha) {
    const request = await fetch(`${URL_BASE}/${fecha}`, {

        method: 'GET'
    });

    const json = await request.json();

    return json
}