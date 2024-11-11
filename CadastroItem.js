import firebaseConfigInstance from './FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

class CadastroItem {
    async cadastrarItem(item) {
        const db = firebaseConfigInstance.getDatabase();
        try {
            const docRef = await addDoc(collection(db, "itens"), item);
            console.log("Item cadastrado com ID:", docRef.id);
            return docRef.id;
        } catch (e) {
            console.error("Erro ao adicionar documento: ", e);
        }
    }
}