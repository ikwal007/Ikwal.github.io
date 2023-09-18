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

const getAllArtikelLimit = async (countLimit) => {
  const q = query(
    collection(firestore, "post"),
    orderBy("id", "desc"),
    limit(countLimit)
  );

  const snapshot = await getDocs(q);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

const getRekomendasiForYou = async (countLimit) => {
  const q = query(
    collection(firestore, "post"),
    orderBy("id", "asc"),
    limit(countLimit)
  );

  const snapshot = await getDocs(q);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

const getShowDetailArtikel = async (slug) => {
  const q = query(collection(firestore, "post"), where("slug", "==", slug));

  const snapshot = await getDocs(q);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data[0];
};

const getPaginationArtikel = async (id, action) => {
  if (action === "next") {
    const q = query(
      collection(firestore, "post"),
      orderBy("id", "desc"),
      startAfter(id),
      limit(3)
    );

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } else {
    const q = query(
      collection(firestore, "post"),
      orderBy("id", "asc"),
      startAfter(id),
      limit(3)
    )

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    return data
  }
};

export {
  getAllArtikelLimit,
  getRekomendasiForYou,
  getShowDetailArtikel,
  getPaginationArtikel,
};









// import { getFirestore, collection, query, orderBy, startAfter, endBefore, limit, getDocs } from "firebase/firestore";
// import app from "@/libs/firebase/init";

// const firestore = getFirestore(app);

// // Fungsi untuk melakukan paginasi
// export const paginateData = async (pageAction, cursor = null) => {
//   try {
//     const pageSize = 3; // Jumlah item per halaman

//     // Buat query dasar
//     let baseQuery = query(collection(firestore, "post"), orderBy("id"));

//     // Jika ada cursor, sesuaikan query berdasarkan tindakan halaman
//     if (cursor) {
//       if (pageAction === "next") {
//         baseQuery = query(baseQuery, startAfter(cursor.data().id));
//       } else if (pageAction === "previous") {
//         baseQuery = query(baseQuery, endBefore(cursor.data().id));
//       }
//     }

//     // Batasi jumlah hasil dengan pageSize
//     const paginatedQuery = limit(baseQuery, pageSize);

//     // Eksekusi query
//     const snapshot = await getDocs(paginatedQuery);
//     const data = snapshot.docs.map((doc) => doc.data());

//     // Tentukan cursor berdasarkan tindakan halaman
//     let nextCursor = null;
//     let previousCursor = null;

//     if (snapshot.docs.length > 0) {
//       nextCursor = snapshot.docs[snapshot.docs.length - 1];
//       previousCursor = snapshot.docs[0];
//     }

//     return { data, nextCursor, previousCursor };
//   } catch (error) {
//     console.error("Error paginating data:", error);
//     throw error;
//   }
// };
