import { storage } from "../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadPhotoToDB = async (photoURI, directory) => {
  const response = await fetch(photoURI);
  const file = await response.blob();

  const uniqueImgId = Date.now().toString();
  const storageRef = ref(storage, `${directory}/${uniqueImgId}`);

  await uploadBytes(storageRef, file);

  const savedPhotoURL = await getDownloadURL(storageRef);
  return savedPhotoURL;
};
