

let nextId = 1

function crearCliente(nom,ape,email,tel) {
    const cli = {}
    

    cli.nombre = nom
    cli.apellido = ape
    cli.email = email
    cli.tel=tel
    cli.id = nextId++

    return cli
}

module.exports = { crearCliente }