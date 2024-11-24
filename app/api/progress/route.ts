import { getSession } from "next-auth/react";
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = session.user.id;

  if (req.method === "POST") {
    const { moduleId } = req.body;

    const progress = await prisma.userProgress.upsert({
      where: { userId_moduleId: { userId, moduleId } },
      update: { completed: true },
      create: { userId, moduleId, completed: true },
    });

    res.json(progress);
  } else if (req.method === "GET") {
    const progress = await prisma.userProgress.findMany({
      where: { userId },
      include: { module: true },
    });

    res.json(progress);
  }
}
