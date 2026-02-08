import { PrismaClient, QuestDifficulty } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Player One"
    }
  });

  const categories = await prisma.category.createMany({
    data: [
      { name: "Body" },
      { name: "Mind" },
      { name: "Craft" },
      { name: "Community" },
      { name: "Wealth" }
    ]
  });

  const categoryRecords = await prisma.category.findMany();

  await prisma.checkIn.create({
    data: {
      sleep: 4,
      energy: 3,
      mood: "😊",
      focusHours: 3.5,
      stress: 2,
      userId: user.id
    }
  });

  await prisma.quest.create({
    data: {
      title: "Ship one meaningful artifact",
      xp: 180,
      estimateMin: 60,
      difficulty: QuestDifficulty.MODERATE,
      recovery: false,
      userId: user.id,
      categoryId: categoryRecords.find((category) => category.name === "Craft")?.id
    }
  });

  await prisma.habit.create({
    data: {
      title: "Daily movement",
      target: "30 min",
      progress: 0.6,
      recovery: false,
      userId: user.id,
      categoryId: categoryRecords.find((category) => category.name === "Body")?.id
    }
  });

  await prisma.calendarBlock.create({
    data: {
      title: "Deep work: product",
      startsAt: new Date(),
      endsAt: new Date(Date.now() + 90 * 60 * 1000),
      xp: 120,
      userId: user.id
    }
  });

  console.log({ user, categories });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
