import axios from "axios";

export async function callCountries () {

    try {
        var countries = await axios.get(`http://battuta.medunes.net/api/country/all/?key={4f8ea9254afd1f3c39c57485a9a283b0}`)
        return countries

    }catch(err){
        alert("se produjo un error cargando los paises: ", err.message)
        return
    }
}


export async function callRegion (country) {

    try {
        var regions = await axios.get(`http://battuta.medunes.net/api/region/${country.code}/all/?key={4f8ea9254afd1f3c39c57485a9a283b0}`)
        return regions

    }catch(err){
        alert("se produjo un error cargando las regiones: ", err.message)
        return
    }
}

export async function callCity (region) {

    try {
        var regions = await axios.get(`http://battuta.medunes.net/api/city/search/?region=${region.name}&key={4f8ea9254afd1f3c39c57485a9a283b0}`)
        return regions

    }catch(err){
        alert("se produjo un error cargando las regiones: ", err.message)
        return
    }
}