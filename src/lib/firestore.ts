import { db } from "@/db/DB";
import { DocumentData, addDoc, collection, doc, setDoc } from "firebase/firestore";

// Define the type for the parameters
type UpdateDocumentParams = {
  collectionName: string;
  documentId: string;
  newValues: DocumentData;
};

// Function to update a document
export const updateDocument = async ({ collectionName, documentId, newValues }: UpdateDocumentParams) => {
  try {
    // Get a reference to the document
    const docRef = doc(db, collectionName, documentId);
    
    // Set the new values, merging with existing document
    await setDoc(docRef, newValues, { merge: true });
    
    console.log(`Document with ID ${documentId} in collection ${collectionName} updated successfully.`);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};





// Define the type for the parameters
type CreateDocumentParams = {
  collectionName: string;
  data: DocumentData;
};

// Function to create a new document
export const createDocument = async ({ collectionName, data }: CreateDocumentParams) => {
  try {
    // Get a reference to the collection
    const collectionRef = collection(db, collectionName);
    
    // Add a new document with a generated ID
    const docRef = await addDoc(collectionRef, data);
    
    console.log(`Document created with ID ${docRef.id} in collection ${collectionName}.`);
  } catch (error) {
    console.error("Error creating document: ", error);
  }
};
