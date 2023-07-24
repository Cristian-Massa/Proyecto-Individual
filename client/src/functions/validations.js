const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
const regexLetras = /[a-zA-Z]/g;

function validation (obj) {
    const {name, image, height, weight, life_span, temperaments} = obj
    const errors = []
    const splitHeight = height?.metric.split(' ')
    const splitWeight = weight?.metric.split(' ')
    const splitAge = life_span?.split(' ')
    if(!name || !image || splitHeight[0].length === 0 || splitHeight[2].length === 0 || Number(splitWeight[0].length) === 0 || Number(splitWeight[2].length) === 0 || !weight || !life_span || !temperaments){
        errors.push("falta informacion")
    }else{
        if(!pattern.test(image.url)){
            errors.push("imagen invalida")
        }
        if(Number(splitHeight[0]) > Number(splitHeight[2])){
            errors.push("la medida minima no puede superar la maxima de la altura")
        }
        if(!weight.metric || !weight.imperial){
            errors.push("debes incluir ambas medidas del peso")
        }
        if(Number(splitWeight[0]) > Number(splitWeight[2])){
            errors.push("la medida minima no puede superar la maxima del peso")
        }
        if(regexLetras.test(weight.metric)){
            errors.push("no puedes usar letras")
        }
        if(regexLetras.test(height.metric)){
            errors.push("no puedes usar letras")
        }
        if(splitAge[2].length < 1 || splitAge[0].length < 1){
            errors.push("deberias de completar el rango de vida del animal")
        }
        if(Number(splitAge[0]) > Number(splitAge[2])){
            errors.push("la medida minima no puede superar la maxima del rango de vida")
        }
    }
    return errors
}

export default validation