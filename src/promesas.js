const fs = require('fs')

function leerDir(){
    return new Promise((resolve, reject) => {
        fs.readdir('.', (err, contenido) => {
            if (err) {
                reject(err)
            } else {
                resolve(contenido)
            }
        })
    })
}

async function main() {
    const contenido = await leerDir()
    console.log(contenido)
}

main()