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
  try {
    const docRef = doc(db, "users", username);
    const userDoc = await getDoc(docRef);
    const linksObject = userDoc.data();
    let links = [];

    if (linksObject) {
      links = Object.keys(linksObject).map((key) => {
        return {
          title: key,
          url: linksObject[key],
        };
      });
    }

    return links;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Update a link
export const updateLink = (username, title, url) => {
  try {
    const docRef = doc(db, "users", username);

    return updateDoc(docRef, { [title]: url });
  } catch (err) {
    console.log(err);
    return null;
  }
};

// Delete a link from a user
export const deleteLink = (username, title) => {
  try {
    const docRef = doc(db, "users", username);

    return updateDoc(docRef, {
      [title]: deleteField(),
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};

// Delete a user
export const deleteUser = (username) => {
  try {
    const docRef = doc(db, "users", username);

    return deleteDoc(docRef);
  } catch (err) {
    console.log(err);
    return null;
  }
};

// Get particular link for a user
export const getUserLink = async (username, title) => {
  try {
    const docRef = doc(db, "users", username);
    const userDoc = await getDoc(docRef);
    const linksObject = userDoc.data();

    return linksObject[title] || null;
  } catch (err) {
    console.log(err);
    return null;
  }
};
