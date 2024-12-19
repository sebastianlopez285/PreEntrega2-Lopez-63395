const products= [
    {
        name: "Mòdulo Motorola G",
        color: "Negro",
        price: 14000,
        category: "Mòdulos",
        image: "/public/moto1.webp" 
    },

    {
        name: "Mòdulo Motorola G2",
        color: "Negro",
        price: 16000,
        category: "Mòdulos",
        image: "/public/motog2.webp" 
    },

    {
        name: "Mòdulo Motorola G3",
        color: "Negro",
        price: 17000,
        category: "Mòdulos",
        image: "/public/motog3.webp" 
    },
    {
        name: "Mòdulo Motorola G4",
        color: "Negro",
        price: 18000,
        category: "Mòdulos",
        image: "/public/motog4.jpg" 
    },
    {
        name: "Mòdulo Motorola G5",
        color: "Negro",
        price: 19000,
        category: "Mòdulos",
        image: "/public/moto5.jpg" 
    },
    {
        name: "Mòdulo Motorola G5plus",
        color: "Negro",
        price: 20000,
        category: "Mòdulos",
        image: "/public/g5plus.jpg" 
    },
]


const getProducts = () => {
    return new Promise((resolve, reject) => {
        // simulamos un retraso de red 2 seg
        setTimeout(()=>{
            resolve(products)
        },2000 )
    })
} 
export { getProducts }