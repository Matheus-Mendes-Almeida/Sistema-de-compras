import firebaseConfigInstance from './FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

class CadastroCliente {
    async cadastrarCliente(cliente) {
        const db = firebaseConfigInstance.getDatabase();
        try {
            const docRef = await addDoc(collection(db, "clientes"), cliente);
            console.log("Cliente cadastrado com ID:", docRef.id);
            return docRef.id;
        } catch (e) {
            console.error("Erro ao adicionar documento: ", e);
        }
    }
}