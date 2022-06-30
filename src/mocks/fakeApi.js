const productos = [
    {id:'01', name:'Borderlands 3', price: 4500, stock:10, img:'/imgs/borderlands.jpg'},
    {id:'02', name:'Gta V', price: 1500, stock:15, img:'/imgs/gtav.jpg'},
    {id:'03', name:'Battlefield 2042', price: 5500, stock:8, img:'/imgs/bf2042.jpg'},
    {id:'04', name:'Cod Modern Warfare 2', price: 9500, stock:5, img:'/imgs/codmw2.jpg'},
    {id:'05', name:'Lost Ark', price: 2500, stock:3, img:'/imgs/lostark.jpg'}
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