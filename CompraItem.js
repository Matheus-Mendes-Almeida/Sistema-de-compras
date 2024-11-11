import firebaseConfigInstance from './FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

class CompraItem {
    async adicionarItemAoCarrinho(clienteId, itemId, quantidade) {
        const db = firebaseConfigInstance.getDatabase();
        try {
            const docRef = await addDoc(collection(db, "compras"), {
                clienteId,
                itemId,
                quantidade
            });
            console.log("Item adicionado ao carrinho com ID:", docRef.id);
            return docRef.id;
        } catch (e) {
            console.error("Erro ao adicionar item ao carrinho: ", e);
        }
    }
}
