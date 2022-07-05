import { collection, doc, getDocs, setDoc } from '@firebase/firestore/lite';
import { FirebaseDB } from '../../../firebase/firebaseConfig';
import { addNewProduct, setActiveProduct, savingProduct, setProducts } from './productsSlice';

export const startNewProduct = () => {
    return async (dispath, getState) => {

        // Ejecutar el dispatch para deshabilitar el boton add.
        dispath(savingProduct());

        // Recuperar el UID en el state del usuario logueado.
        const { uid } = getState().auth;

        // Objeto que se va armando para enviarse al backend(Firebase).
        const newProduct = {
            name: 'Producto 1',
            description: 'Realizando pruebas del Backend.',
        }
        // Constante que almacena la ruta de referencia en Firebase para insertar.
        const docRef = doc(collection(FirebaseDB, `Products`));
        // Enviar y guardar en Firebase la collection enviada
        await setDoc(docRef, newProduct);

        // Agregar id de Firebase al producto.
        newProduct.id = docRef.id;

        // Realizar el dispatch de agregar nuevo producto.
        dispath(addNewProduct(newProduct));
        dispath(setActiveProduct(newProduct));
    }
}

export const startLoadingProducts = () => {
    return async (dispatch, getSatete) => {
        // La función collection permite obtener datos de Firebase.
        const collectionRef = collection(FirebaseDB, 'Products');
        // La función getDocs permite traer todos los documentos de una collection.
        const docs = await getDocs(collectionRef);
        // Se crea una const de tipo arreglo para almacenar la data devuelta de Firebase.
        const products = [];
        // Se recorre la respuesta de docs y hacer el push de cada registro en el arreglo de products.
        docs.forEach((res) => {
            products.push({ id: res.id, ...res.data() })
        });
        dispatch(setProducts(products));
    }
}