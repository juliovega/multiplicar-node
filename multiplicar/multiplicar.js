const fs = require('fs');
const colors = require('colors');


let listar = (base, limite = 20) => {


    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }
        console.log("===========");
        console.log(`Tabla de ${base}`.green);
        console.log("===========");
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} =  ${base * i}`);
        }
    })
}

let crearArchivo = (base, limite) => {
        return new Promise((resolve, reject) => {

                    if (!Number(base)) {
                        reject(`El valor ${base} no es un número`);
                        return;
                    }
                    let data = ''
                    for (let i = 1; i <= limite; i++) {
                        data += `${base} * ${i} =  ${base * i} \n`;
                    }

                    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                                if (err)
                                    reject(err)
                                else
                                    resolve(`El archivo ${ colors.green(`tabla-${base}.txt`)} ha sido creado`);
        });
    })
};

module.exports = {
    crearArchivo,
    listar
}