import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addNewLink = async (username, title, url) => {
  const docRef = doc(db, "users", username);
  try {
    return await updateDoc(docRef, { [title]: url });
  } catch (err) {
    // console.log(err);
    if (err.code === "not-found") {
      return await setDoc(docRef, { [title]: url });
    }
  }
};

export const getLinks = async (username) => {
  const docRef = doc(db, "users", username);
  const userDoc = await getDoc(docRef);

  return userDoc.data();
};

export const updateLink = (username, title, url) => {
  const docRef = doc(db, "users", username);

  return updateDoc(docRef, { [title]: url });
};
