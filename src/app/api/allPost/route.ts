export const dynamic = "force-dynamic";

import path from "path";
import { promises as fs } from "fs";
import CardProps from "@/cardProps";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "posts.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data = (await JSON.parse(jsonData)) as CardProps;
    return Response.json({
      succes: true,
      message: "Data Berhasil diambil",
      data: data,
      status: 200,
    });
  } catch (error) {
    return Response.json({
      succes: false,
      message: "Data Gagal diambil",
      data: error,
      status: 500,
    });
  }
}
