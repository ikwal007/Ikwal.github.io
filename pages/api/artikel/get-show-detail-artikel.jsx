import { getShowDetailArtikel } from "@/libs/firebase/artikel";

export default async function handler(req, res) {
    const { query } = req;
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        const data = await getShowDetailArtikel(query.slug);
        res
            .status(200)
            .json({ status: true, message: "berhasil mengambil data", data: data });
    } catch (error) {
        res
            .status(500)
            .json({ status: error, message: error.message, category: null });
    }
}