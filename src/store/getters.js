export const valorDoble = (state) => {
    return state.valor * 2
}


export const nombreInverso = (state) => {
    return state.nombre.split("").reverse().join("")
}


export const getComments = (state) => {
    return state.comentarios
}