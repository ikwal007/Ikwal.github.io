import app from "@/libs/firebase/init";
import { getStorage } from "firebase/storage";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const storage = getStorage(app);
    const file = req.files.image;
    const fileBuffer = file.data;
    const fileExtension = file.name.split(".").pop();
    const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExtension}`;
    
    // Simpan gambar ke Firebase Storage
    const storageRef = storage.ref();
    const imageRef = storageRef.child(`images/${uniqueFileName}`);
    await imageRef.put(fileBuffer);

    // Dapatkan URL gambar yang telah diunggah
    const imageUrl = await imageRef.getDownloadURL();

    res.status(200).json({ status: true, url: imageUrl });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ status: false, message: "Gagal mengunggah gambar" });
  }
}
