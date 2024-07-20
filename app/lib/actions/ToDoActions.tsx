'use server'
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export const addToDo = async (userId: string,FormData: FormData) => {
    let todo = FormData.get('todo');
    let app: any = await getApp();
    if(!app) return;
    const db = getFirestore(app);
    const todoRef = collection(db, 'users', userId, 'todos');
    await addDoc(todoRef, {
        todo,
        timestamp: new Date().getTime(),
        complete: false
    });
}

export const updateToDo = async(userId: string, docId: string, newVal: string) => {
    let app: any = await getApp();
    if(!app) return;
    const db = getFirestore(app);
    let docRef = doc(db, "users", userId, 'todos', docId);
    await updateDoc(docRef, { todo: newVal});
}

export const updateStatus = async(userId: string, docId: string, status: boolean) => {
    let app: any = await getApp();
    if(!app) return;
    const db = getFirestore(app);
    let docRef = doc(db, "users", userId, 'todos', docId);
    await updateDoc(docRef, { complete: status});
}

export const deleteToDo = async (userId: string, docId: string) => {
    let app: any = await getApp();
    if(!app) return;
    const db = getFirestore(app);
    const docRef = doc(db, 'users', userId, 'todos', docId);
    await deleteDoc(docRef);
}

function getApp() {
    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
      };
      

    return new Promise((resolve, reject) => {
        try {
            //Initialize Firebase
            const app = initializeApp(firebaseConfig);
            resolve(app);
        } catch (error) {
            resolve(null);
        }
    })
}