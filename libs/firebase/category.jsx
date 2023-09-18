import app from "./init";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  serverTimestamp,
  startAfter,
  startAt,
  where,
} from "firebase/firestore";

const firestore = getFirestore(app);

const getAllCategory = async () => {
  const q = query(collection(firestore, "category"));

  const snapshot = await getDocs(q);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return data
}

export {getAllCategory}