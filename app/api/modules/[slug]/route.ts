import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method === "GET") {
    const module = await prisma.learningModule.findUnique({
      where: { slug },
    });

    if (!module) {
      return res.status(404).json({ error: "Module not found" });
    }

    res.json(module);
  }
}
