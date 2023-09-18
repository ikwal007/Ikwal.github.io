import { getPaginationArtikel } from "@/libs/firebase/artikel";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const data = await axios.get('http://localhost:1337/api/blogs');
    res
      .status(200)
      .json({ status: true, message: "berhasil mengambil data", data: 'data' });
  } catch (error) {
    res
      .status(500)
      .json({ status: error, message: error.message, category: null });
  }
}
