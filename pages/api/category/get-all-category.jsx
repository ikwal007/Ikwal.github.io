import { getAllCategory } from "@/libs/firebase/category";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const data = await getAllCategory();
    res
      .status(200)
      .json({ status: true, message: "berhasil mengambil data", data: data });
  } catch (error) {
    res
      .status(500)
      .json({ status: error, message: error.message, category: null });
  }
}
