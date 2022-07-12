import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteField,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

// Add New Link
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

// Get all links for a user
export const getLinks = async (username) => {
  const docRef = doc(db, "users", username);
  const userDoc = await getDoc(docRef);

  return userDoc.data();
};

// Update a link
export const updateLink = (username, title, url) => {
  const docRef = doc(db, "users", username);

  return updateDoc(docRef, { [title]: url });
};

// Delete a link from a user
export const deleteLink = (username, title) => {
  const docRef = doc(db, "users", username);

  return updateDoc(docRef, {
    [title]: deleteField(),
  });
};

// Delete a user
export const deleteUser = (username) => {
  const docRef = doc(db, "users", username);

  return deleteDoc(docRef);
};
