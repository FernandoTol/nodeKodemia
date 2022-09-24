const goToSuperMarket = (callback) => {
    console.log('llegando al seper mercado...')
    setTimeout(() => {
        // ,En la firma del callback se manda el error y los datos
        callback(null, 'Ya llogue al super mercado')
    }, 5000);
}

goToSuperMarket((error, mensaje) => {
    if (error) {
        console.log('Ah ocurrido algo:', error);
        return
    }
    console.log(mensaje);
})