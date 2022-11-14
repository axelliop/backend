class Usuario {
    constructor(nombre,apellido,libros,mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

/* obtener nombre */



    getFullName(){
      return this.nombre + this.apellido/* siempre return */
    }

    /* obtener nombre */


    /* contar mascotas (error) */

    countMascotas(){
       return this.mascotas.length
    }

/*contar mascotas (error) */

/* obtener nombres de libros */

getBookNames(){
    return this.libros.libros1  /* llamo a libros la constructora y entro a libros uno y libros dos, sus dos objetos */
}

/* obtener nombres de libros */


/* añadir mascotas */

addMascota(mascotas){
 this.mascotas.push(mascotas)
}


/* añadir mascotas */


}


const admin = new Usuario('Axel ', 'Lima ',
 {libros1: 'efecto mariposa ',
libros2: 'stephen king'
}, 
['perros', 'gatos']
)


admin.addMascota('cocodrilo')
const names = admin.getFullName()
const contarMascotas = admin.countMascotas()

const libritos = admin.getBookNames()



/* pushear libros */
admin.libros.libros3 = 'asdasda' 
/* pushear libros */







console.log(`su nombre es ${names}`)
console.log(`sus mascotas son ${contarMascotas}`)
console.log(`las mascotas se llaman ${admin.mascotas}`)
console.log(`los libros son ${libritos}`)




