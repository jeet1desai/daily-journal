import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadDocument = (folder: string, file: any) => {
  return new Promise((resolve, reject) => {
    if (file === null) {
      resolve("");
    }

    const imageRef = ref(storage, `${folder}/${file.name} + ${Date.now()}`);
    uploadBytes(imageRef, file)
      .then((snapshot: any) => {
        getDownloadURL(snapshot.ref)
          .then((url: any) => {
            resolve(url);
          })
          .catch(reject);
      })
      .catch(reject);
  });
};
