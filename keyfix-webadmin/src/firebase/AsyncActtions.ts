import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db, database } from "./cofig";
import { ref, set, update } from "firebase/database";

export const writeDataFireStore = async (
  data: any,
  fieldName: string,
  index: any
) => {
  await setDoc(doc(db, fieldName, `${index}`), data);
};

export const WriteDataGenerateID = async (data: any, fieldName: string) => {
  await setDoc(doc(collection(db, fieldName)), data);
};

export const UpdateData = async (data: any, fieldName: string, index: any) => {
  await updateDoc(doc(db, fieldName, `${index}`), data);
};

export const writeUserRTDatabase = (userId: string, data: any) => {
  set(ref(database, "Keyers/" + userId), {
    ...data,
  });
};
export const updateUserRTDatabase = (userId: string, data: any) => {
  const postData = {
    ...data,
  };
  const updates: any = {};
  updates["Keyers/" + userId] = postData;

  update(ref(database), updates);
};
