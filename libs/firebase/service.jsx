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
import app from "./init";
import bcrypt from "bcrypt";
import { ulid } from "ulid";

const firestore = getFirestore(app);

// Fungsi untuk menghasilkan slug yang unik
async function generateUniqueSlug(collectionName, slug) {
  const q = query(
    collection(firestore, collectionName),
    where("slug", "==", slug)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return slug; // Slug belum ada, gunakan slug aslinya
  } else {
    // Slug sudah ada, tambahkan angka acak ke akhir slug
    const randomSuffix = Math.floor(Math.random() * 1000);
    const newSlug = `${slug}-${randomSuffix}`;
    return generateUniqueSlug(collectionName, newSlug); // Rekursi sampai menemukan slug yang unik
  }
}

async function createUniqueSlug(collectionName, slug) {
  const isSlugUnique = await generateUniqueSlug(collectionName, slug);
  return isSlugUnique;
}

export async function retrieveData(collectionName) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataByCategory(collectionName, category) {
  const snapshot = await getDocs(
    query(
      collection(firestore, collectionName),
      where("category", "==", category),
      orderBy("createdAt", "desc")
    )
  );

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function getPaginatedDataByCategory(
  collectionName,
  category,
  page,
  itemsPerPage,
  id
) {
  if (page > 1 && id) {
    let q = query(
      collection(firestore, collectionName),
      where("category", "==", category),
      orderBy("id", "desc"),
      startAfter(id),
      limit(itemsPerPage)
    );
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } else {
    let q = query(
      collection(firestore, collectionName),
      where("category", "==", category),
      orderBy("id", "desc"),
      limit(itemsPerPage)
    );
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  }
}

export async function createData(collectionName, newData, callback) {
  const newId = ulid();
  try {
    newData.createdAt = serverTimestamp();

    // Cek dan dapatkan slug yang unik
    const uniqueSlug = await createUniqueSlug(collectionName, newData.slug);
    newData.slug = uniqueSlug;
    newData.id = newId;

    await addDoc(collection(firestore, collectionName), newData);

    callback({
      status: true,
      message: "New Artikel Has Been Created",
      category: newData.category,
    });
  } catch (error) {
    callback({ status: false, message: error.message, category: null });
  }
}

export async function signIn(userData) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(userData, callback) {
  const { pathname, ...userDataWithoutPathname } = userData;
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userDataWithoutPathname.email)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback({ status: false, message: "Email telah ada" });
  } else {
    userDataWithoutPathname.password = await bcrypt.hash(
      userDataWithoutPathname.password,
      10
    );
    userDataWithoutPathname.profile = null;
    pathname !== "/auth/admin/signup"
      ? (userDataWithoutPathname.role = "member")
      : (userDataWithoutPathname.role = "admin");
    await addDoc(collection(firestore, "users"), userDataWithoutPathname)
      .then(() => {
        callback({ status: true, message: "Register Berhasil" });
      })
      .catch((error) => {
        callback({ status: false, message: error });
      });
  }
}
