import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addNewLink = (username, title, url) => {
  const docRef = doc(db, "users", username);

  return updateDoc(docRef, { [title]: url });
};

export const getLinks = async (username) => {
  const docRef = doc(db, "users", username);
  const userDoc = await getDoc(docRef);

  return userDoc.data();
};

export const updateLink = (username, title, url) => {
  const docRef = doc(db, "users", username);

  return setDoc(docRef, { [title]: url });
};
