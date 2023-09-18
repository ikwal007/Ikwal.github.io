import {getRekomendasiForYou} from "@/libs/firebase/artikel";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const data = await getRekomendasiForYou(3);
    res
      .status(200)
      .json({ status: true, message: "berhasil mengambil data", data: data });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
}
