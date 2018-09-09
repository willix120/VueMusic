import config from "./config"

const { uri } = config

export default function getArtistas (pais_seleccionado) {
	const url_final = uri.replace('{pais_seleccionado}', pais_seleccionado)
	return fetch(url_final)
		.then(function (rsp) {
			return rsp.json();
		})
		.then(function (json) {
			return json.topartists.artist
		})
}