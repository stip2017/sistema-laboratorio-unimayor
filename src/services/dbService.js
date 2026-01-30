import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    query,
    orderBy
} from "firebase/firestore";

// Configuración de Firebase (proporcionada por el usuario)
const firebaseConfig = {
    apiKey: "AIzaSyCVADuLmucWG4RIYADi_JMg_jAgHAQ79zY",
    authDomain: "laboratorio-unimayor-2026.firebaseapp.com",
    projectId: "laboratorio-unimayor-2026",
    storageBucket: "laboratorio-unimayor-2026.firebasestorage.app",
    messagingSenderId: "430422238191",
    appId: "1:430422238191:web:27731512801650ae6a0c1a",
    measurementId: "G-WLWHV6XF4J"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Determinar si estamos en modo Firebase
// Si la URL contiene 'web.app' o 'firebaseapp.com', usamos Firebase.
// De lo contrario (incluyendo localhost y Render), usamos la API de MongoDB.
const isFirebaseMode = window.location.hostname.includes('web.app') ||
    window.location.hostname.includes('firebaseapp.com');

const API_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/api'
    : '/api';

console.log(`🚀 Sistema funcionando en modo: ${isFirebaseMode ? 'FIREBASE' : 'MONGODB/RENDER'}`);

export const dbService = {
    // --- RESERVAS ---
    getReservations: async () => {
        if (isFirebaseMode) {
            const q = query(collection(db, "reservations"), orderBy("fecha"), orderBy("horaInicio"));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } else {
            const response = await fetch(`${API_URL}/reservations`);
            return await response.json();
        }
    },

    addReservation: async (data) => {
        if (isFirebaseMode) {
            try {
                const docRef = await addDoc(collection(db, "reservations"), {
                    ...data,
                    createdAt: new Date()
                });
                return { id: docRef.id, ...data };
            } catch (e) {
                console.error("Error adding document: ", e);
                throw e;
            }
        } else {
            const response = await fetch(`${API_URL}/reservations`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Error al crear la reserva');
            }
            return await response.json();
        }
    },

    deleteReservation: async (id) => {
        if (isFirebaseMode) {
            await deleteDoc(doc(db, "reservations", id));
        } else {
            await fetch(`${API_URL}/reservations/${id}`, { method: 'DELETE' });
        }
    },

    // --- PRÉSTAMOS ---
    getPrestamos: async () => {
        if (isFirebaseMode) {
            const q = query(collection(db, "prestamos"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } else {
            const response = await fetch(`${API_URL}/prestamos`);
            return await response.json();
        }
    },

    addPrestamo: async (data) => {
        if (isFirebaseMode) {
            try {
                const docRef = await addDoc(collection(db, "prestamos"), {
                    ...data,
                    createdAt: new Date()
                });
                return { id: docRef.id, ...data };
            } catch (e) {
                throw e;
            }
        } else {
            const response = await fetch(`${API_URL}/prestamos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error al registrar préstamo');
            return await response.json();
        }
    },

    deletePrestamo: async (id) => {
        if (isFirebaseMode) {
            await deleteDoc(doc(db, "prestamos", id));
        } else {
            await fetch(`${API_URL}/prestamos/${id}`, { method: 'DELETE' });
        }
    }
};
