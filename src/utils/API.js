import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addNewLink = (username, title, url) => {
  const docRef = doc(db, "users", username);

  return setDoc(docRef, { [title]: url });
};
