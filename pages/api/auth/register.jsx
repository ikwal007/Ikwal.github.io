import { signUp } from "@/libs/firebase/service";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    await signUp(req.body, (result) => {
      if (result) {
        res
          .status(200)
          .json({ status: result.status, message: result.message });
      } else {
        res
          .status(400)
          .json({ status: result.status, message: result.message });
      }
    });
  } catch (error) {
    res.status(500).json({status: error, message: error.message})
  }
}
