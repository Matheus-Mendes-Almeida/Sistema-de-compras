import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

class FirebaseConfig {
    constructor() {
        if (!FirebaseConfig.instance) {
            const firebaseConfig = {
                apiKey: "",
                authDomain: "",
                projectId: "",
                storageBucket: "",
                messagingSenderId: "",
                appId: ""
            };

            this.app = initializeApp(firebaseConfig);
            this.db = getFirestore(this.app);

            FirebaseConfig.instance = this;
        }
        return FirebaseConfig.instance;
    }

    getDatabase() {
        return this.db;
    }
}

const firebaseConfigInstance = new FirebaseConfig();
export default firebaseConfigInstance;