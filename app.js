const argv = require('./config/yargs').argv
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        // console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err))
            // console.log('crear');
        break;
    default:
        console.log('comando no reconocido');

}

// console.log(argv);
// let base = '5';

// console.log(process.argv);

// let argv = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(argv.base);
// console.log('Límite', argv.limite);