import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const outlets: { name: string; description: string }[] = [
    { name: "Out1", description: "hellow" },
    { name: "Out2", description: "hellow" },
  ];

  await Promise.all(outlets.map((o) => prisma.outlet.create({ data: o })));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
