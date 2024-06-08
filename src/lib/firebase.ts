// utils/firebase.ts
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/db/DB";
import { collection, addDoc, setDoc } from 'firebase/firestore';


export const addItemToArray = async (
  collectionName: string,
  docId: string,
  item: string
) => {
  const docRef = doc(db, collectionName, docId);
  try {
    const res = await getDoc(docRef);
    let data = res.data();
    if (data?.sounds) {
      await updateDoc(docRef, {
        sounds: [...data?.sounds, item], // Add your item here
      });
    }

    console.log("Item added successfully");
  } catch (err: any) {
    console.error("Error adding item:", err.message);
  }
};


interface DocumentData {
  // Define the structure of your document data here
  [key: string]: any;
}

export const addDocument = async (collectionName: string, data: DocumentData) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (err) {
    console.error('Error adding document: ', err);
  }
};
//    addSubcollectionDocument
export const addSubcollectionDocument = async (collectionName: string, docId: string, subcollectionName: string, data: DocumentData) => {
  try {
    const subcollectionRef = collection(db, collectionName, docId, subcollectionName);
    const subDocRef = await addDoc(subcollectionRef, data);
    console.log('Subcollection document written with ID: ', subDocRef.id);
    return subDocRef.id;
  } catch (err) {
    console.error('Error adding subcollection document: ', err);
  }
};
