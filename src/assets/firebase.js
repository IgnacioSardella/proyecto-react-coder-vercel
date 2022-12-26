import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc,} from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "proyecto-react-coder-a81be.firebaseapp.com",
    projectId: "proyecto-react-coder-a81be",
    storageBucket: "proyecto-react-coder-a81be.appspot.com",
    messagingSenderId: "50815636350",
    appId: "1:50815636350:web:f85bc0a499f473f007992f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            tipo: prod.tipo,
            stock: prod.stock,
            precio: prod.precio,
            idCategory: prod.idCategory,
            img: prod.img
        })
    })
}

const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
}

const getProducto = async (id) => {
    const prod = await getDoc(doc(db, "productos",id))
    const item = {...prod.data(), id: prod.id}
    return item
}

const createOrdenCompra = async (cliente, preTotal) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: cliente.nombre,
        dni: cliente.dni,
        email: cliente.email,
        direccion: cliente.direccion,
        telefono: cliente.phone,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra = async(id) => {
    const item = await getDoc(doc(db, "ordenCompra", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}

export {cargarBDD, getProductos, getProducto, getOrdenCompra, createOrdenCompra}