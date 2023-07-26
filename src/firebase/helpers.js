import { storage, db } from "../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export const uploadPhotoToDB = async (photoURI, directory) => {
  const response = await fetch(photoURI);
  const file = await response.blob();

  const uniqueImgId = Date.now().toString();
  const storageRef = ref(storage, `${directory}/${uniqueImgId}`);

  await uploadBytes(storageRef, file);

  const savedPhotoURL = await getDownloadURL(storageRef);
  return savedPhotoURL;
};

export const uploadDataToDB = async (collectionName, data) => {
  const newCollectionRef = collection(db, collectionName);
  const createdDoc = await addDoc(newCollectionRef, data);

  return createdDoc;
};

export const getAllCollection = async (collectionName, dataSetFunc) => {
  try {
    const collectionRef = collection(db, collectionName);
    onSnapshot(collectionRef, (data) => {
      const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dataSetFunc(posts);
    });
    return;
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionLength = async (collectionName, dataSetFunc) => {
  try {
    const collectionRef = collection(db, collectionName);
    onSnapshot(collectionRef, (data) => {
      const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dataSetFunc(posts.length);
    });
    return;

    return;
  } catch (error) {
    console.log(error);
  }
};
