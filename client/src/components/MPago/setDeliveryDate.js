
export default function setDeliveryDate () {

    const hoy = new Date ()
    const formato = "dd/mm/yy"

    function formatoFecha(fecha, formato) {
        const map = {
            dd: fecha.getDate() + 3,
            mm: fecha.getMonth() + 1,
            yy: fecha.getFullYear().toString().slice(-2),
            
        }
    
        // return formato.replace(/dd|mm|yy/gi, matched => map[matched])
        var preFormato = formato.replace(/dd|mm|yy/gi, matched => map[matched])
        return preFormato.split("/").join("-")
    }

    return formatoFecha(hoy, formato);
}


