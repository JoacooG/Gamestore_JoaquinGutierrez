const productos = [
    {id:'01', name:'Borderlands 3', price: 4500, stock:10, img:'/imgs/borderlands.jpg', description: "¡Vuelve el padre de los shooter-looter, con tropecientas mil armas y una aventura caótica! Arrasa a tus enemigos y descubre mundos inéditos con uno de los cuatro nuevos buscacámaras. Juega solo o con amigos para derribar a adversarios increíbles, hacerte con montones de botín y salvar tu hogar de la secta más cruel de la galaxia.", category:'FPS'},
    {id:'02', name:'Gta V', price: 1500, stock:15, img:'/imgs/gtav.jpg', description: "Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.", category:'Accion'},
    {id:'03', name:'Battlefield 2042', price: 5500, stock:8, img:'/imgs/bf2042.jpg', description: "Battlefield™ 2042 es un shooter en primera persona que marca el regreso a la emblemática guerra total de la franquicia. Adáptate y sobrevive en un mundo en un futuro cercano transformado por el desorden. Forma tu patrulla y utiliza un arsenal de vanguardia en campos de batalla en constante cambio con 128 jugadores, una escala sin precedentes y una destrucción épica.", category:'FPS'},
    {id:'04', name:'Cod Modern Warfare 2', price: 9500, stock:5, img:'/imgs/codmw2.jpg', description: "En Call of Duty®: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global sin precedentes que incluye el regreso de Operadores icónicos de la fuerza operativa 141. Desde operaciones tácticas de infiltración a pequeña escala hasta misiones altamente secretas, los jugadores se desplegarán con amigos en una experiencia inmersiva.", category:'FPS'},
    {id:'05', name:'Lost Ark', price: 2500, stock:3, img:'/imgs/lostark.jpg', description: "Embárcate en una odisea en el gigantesco y vibrante mundo de Lost Ark: explora lugares desconocidos, busca tesoros perdidos y ponte a prueba con su emocionante acción y combate. En este juego de rol gratuito repleto de acción, tu clase y clase avanzada definirán tu estilo de lucha, que además podrás personalizar con diversas habilidades, armas y equipo para desatar todo tu poder contra hordas de enemigos, jefes colosales y las fuerzas de la oscuridad que buscan el poder del Arca.", category:'RPG'}
]


export const getData = new Promise((resolve, reject) =>{
    let condition = true
    setTimeout (() => {
        if (condition) {
            resolve (productos)
        }else{
            reject ('rechazado')
        }
    },2000)
})