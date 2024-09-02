

function greet( name: string | null | undefined){
    if( name ){
        console.log(name.toLocaleUpperCase())

    }else{
        return console.log('Holla!')
    }
}

greet(null)

// to have use null without issues make the  strickNullChecks to false in the tsconfing but not advisable