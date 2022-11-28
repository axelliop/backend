const fs = require('fs');

class Contenedor {
    constructor(archivotxt){

    this.archivotxt = archivotxt
    }


save(producto){
    //recibe un objeto, lo guarda en el  archivo, devuelve el id asignado
    this.getAll()
    .then((data) => {
        data.push({...producto, id: data.length + 1})
        fs.promises.writeFile(this.archivotxt, JSON.stringify(data)) // vuelvo la data en string
        console.log('producto guardado con id ' + (data.length))

    })
    .catch((e) => {
        producto.id = 1
        fs.writeFileSync(this.archivotxt, `[${JSON.stringify(producto)}]` )
        console.log('producto guardado con id: 1 ')
    })


    return
}

getById(numero){
    //recibe un id y devuelve el objeto con ese id, o null si no está
    this.getAll().then((data) => console.log(data.find(item => item.id === numero))) /* me busca solo el id del ITEM, si lo encuentra aplica el then. */
    .catch((e) => console.log('no se encontro el archivo')) /* en caso de que no, me aparece que no se encontro el archivo  */

}

getAll(){
    //me tiene que devolver un array con los objetos del archivo 
    return new Promise((resolve, reject) => {
        fs.promises.readFile(this.archivotxt, 'utf-8') /* leo el archivo */
        .then((data) => resolve(JSON.parse(data))) /* me devuelve un entero */ 
        .catch((e) =>{
            fs.writeFileSync(this.archivotxt, '[]'); /* escribo en el archivo */
            reject()
        })
    })
}

deleteById(numero){
    //elimina del archivo el objeto con el id buscado
    this.getAll().then((data) => { 
        const itemFind = data.find(item => item.id == numero); //busca el id del item para deletearlo
        const itemPosition = data.indexOf(itemFind) // retorna la posicion en la que se encuentra el elemento en el array
        itemPosition !== -1 ? data.splice(itemPosition, 1) : console.log('Item no encontrado'); /* splice cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. */
        fs.promises.writeFile(this.archivotxt, '[]') /* agrego otro array */ 
    } ).catch((e) => console.log('no se encontro el archivo'))
    
}

deleteAll(){
    //elimina todos los obj. del archivo
    fs.promises.writeFile(this.archivotxt, '[]') //pongo un array vacio para que resetee todo
}

}

//genero un nuevo archivo

const producto1 = new Contenedor('./nuevosProductos.txt')

producto1.getAll() //llamo funciones hechas 
    .then((response) => console.log(response))
    .catch((error) => console.log('no se encontro el archivo y se creo uno nuevo'))

    producto1.save({
        id: 1,
        title: 'helado vainilla',
        price: 700,
        thumbnail: ''
    },
    {
        id: 2,
        title: 'helado cereza',
        price: 700,
        thumbnail: ''},
        
        {
        id: 3,
        title: 'helado chocolate',
        price: 700,
        thumbnail: ''})

    producto1.getById(1)
    producto1.deleteById(1)
    producto1.deleteAll()


