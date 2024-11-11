import firebaseConfigInstance from './FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

class FinalizarCompra {
    async finalizarCompra(compra) {
        const db = firebaseConfigInstance.getDatabase();
        try {
            const docRef = await addDoc(collection(db, "comprasFinalizadas"), compra);
            console.log("Compra finalizada com ID:", docRef.id);
            return docRef.id;
        } catch (e) {
            console.error("Erro ao finalizar compra: ", e);
        }
    }
}