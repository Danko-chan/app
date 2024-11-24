const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const modules = [
    {
      title: "Introduction to Phishing",
      description: "Learn the basics of phishing attacks and how they work.",
      content:
        "Phishing is a type of cyber attack that uses disguised email as a weapon...",
      slug: "introduction-to-phishing",
      icon: "Shield",
    },
    {
      title: "Identifying Suspicious Emails",
      description: "Discover key indicators of phishing attempts in emails.",
      content:
        "Key indicators include unexpected attachments, urgent language...",
      slug: "identifying-suspicious-emails",
      icon: "Mail",
    },
    {
      title: "Safe Browsing Practices",
      description:
        "Explore techniques for safe browsing to avoid phishing traps.",
      content:
        "Use secure networks, update your browser, and verify website security...",
      slug: "safe-browsing-practices",
      icon: "Globe",
    },
    {
      title: "Password Security",
      description:
        "Learn how to create and manage secure passwords to prevent unauthorized access.",
      content:
        "Create strong, unique passwords and implement two-factor authentication...",
      slug: "password-security",
      icon: "Key",
    },
  ];

  for (const module of modules) {
    await prisma.learningModule.upsert({
      where: { slug: module.slug },
      update: {},
      create: module,
    });
  }

  console.log("Learning modules seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
