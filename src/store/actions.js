export const prueba = (context, payload) => {
    setTimeout(() => {
        context.commit('incrementar')
        context.commit('incrementarPor', payload)
    }, 3000)

}

export const updateComments = (context, payload) => {
    context.commit('updateComments', payload)
}