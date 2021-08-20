import axios from "axios";

export async function callCountries (resolve, reject) {

    try {
        var countries = await axios.get(`http://battuta.medunes.net/api/country/all/?key=4f8ea9254afd1f3c39c57485a9a283b0`)
        // console.log("countries tiene:" , Object.keys(countries))
        // console.log("countries.data: " , countries.data)
        
        return countries.data

    }catch(err){
        alert("se produjo un error cargando los paises: ", err.message)
        
    }
}


export async function callRegion (countryCode) {

    try {
        var regions = await axios.get(`http://battuta.medunes.net/api/region/${countryCode}/all/?key=4f8ea9254afd1f3c39c57485a9a283b0`)
        return regions.data

    }catch(err){
        alert("se produjo un error cargando las regiones: ", err.message)
        return
    }
}

export async function callCity (region, country) {

    region = region.replace("Province", "").toLowerCase()
    // region =(region.replace(" ", "")).toLowerCase()
    region= region.replace("provincia", "")


    country = country.split(",")[1]
    console.log("esto voy a buscar en ciudades: " , region)

    try {
        var city = await axios.get(`http://battuta.medunes.net/api/city/${country}/search/?region=${region}&key=4f8ea9254afd1f3c39c57485a9a283b0`)
console.log("esto es lo que encuentra como ciudades: " , city)
        return city.data

    }catch(err){
        alert("se produjo un error cargando las regiones: ", err.message)
        return
    }
}

// "http://battuta.medunes.net/api/city/search/?region={REGION_NAME_HINT}&city={CITY_NAME_HINT}&key={YOUR_API_KEY}