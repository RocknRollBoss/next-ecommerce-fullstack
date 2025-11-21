require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const categoriesList = ["electronics", "books", "clothing"];
  const categoriesMap = {};

  for (const name of categoriesList) {
    let category = await prisma.category.findUnique({ where: { name } });
    if (!category) {
      category = await prisma.category.create({ data: { name } });
      console.log("Category created:", name);
    }
    categoriesMap[name] = category;
  }

  const userAlex = await prisma.user.findUnique({
    where: { email: "alex@gmail.com" },
  });
  const userMaria = await prisma.user.findUnique({
    where: { email: "maria@gmail.com" },
  });

  if (!userAlex || !userMaria) {
    throw new Error(
      "Не найдены пользователи alex@gmail.com или maria@gmail.com!"
    );
  }

  const productsData = [
    {
      name: "Krux Mouse Pad Space",
      price: 20,
      imageUrl:
        "https://content2.rozetka.com.ua/goods/images/big_tile/397880816.jpg",
      rating: 2,
      description: "MAX (KRX0021)",
      userId: userAlex.id,
      categoryId: categoriesMap["electronics"].id,
    },
    {
      name: "Gigabyte PCI-Ex GeForce RTX 5070 Ti",
      price: 1000,
      imageUrl: "https://content.rozetka.com.ua/goods/images/big/509711106.jpg",
      rating: 2,
      description: "Windforce OC SFF 16GB GDDR7",
      userId: userAlex.id,
      categoryId: categoriesMap["electronics"].id,
    },
    {
      name: "AMD Ryzen 5 5600X 3.7GHz/32MB",
      price: 120,
      imageUrl:
        "https://content1.rozetka.com.ua/goods/images/big_tile/177840606.jpg",
      rating: 3,
      description: "(100-000000065) sAM4 OEM",
      userId: userAlex.id,
      categoryId: categoriesMap["electronics"].id,
    },
    {
      name: "AMD Ryzen 7 5700X 3.4GHz/32MB",
      price: 150,
      imageUrl:
        "https://content1.rozetka.com.ua/goods/images/big/368596049.jpg",
      rating: 1,
      description: "(100-000000926) sAM4 Tray",
      userId: userAlex.id,
      categoryId: categoriesMap["electronics"].id,
    },
    {
      name: "Workbook and Grammar Book",
      price: 10,
      imageUrl:
        "https://content.rozetka.com.ua/goods/images/big_tile/13273412.jpg",
      rating: 4,
      description: "Interesting book",
      userId: userMaria.id,
      categoryId: categoriesMap["books"].id,
    },
    {
      name: "Next Move 3 Students book",
      price: 8,
      imageUrl:
        "https://content.rozetka.com.ua/goods/images/big_tile/13273412.jpg",
      rating: 5,
      description: "Fiona Beddall, Jayne Wildman",
      userId: userMaria.id,
      categoryId: categoriesMap["books"].id,
    },
    {
      name: "English Grammar",
      price: 7,
      imageUrl:
        "https://content2.rozetka.com.ua/goods/images/big_tile/323205101.jpg",
      rating: 3,
      description: "Edition with Answers",
      userId: userMaria.id,
      categoryId: categoriesMap["books"].id,
    },
    {
      name: "Floyd Kent XS",
      price: 30,
      imageUrl:
        "https://content2.rozetka.com.ua/goods/images/big_tile/379784623.jpg",
      rating: 1,
      description: "Comfortable hudi",
      userId: userAlex.id,
      categoryId: categoriesMap["clothing"].id,
    },
    {
      name: "Adidas socks",
      price: 12,
      imageUrl:
        "https://content.rozetka.com.ua/goods/images/big_tile/456344860.jpg",
      rating: 4,
      description: "Set of socks",
      userId: userAlex.id,
      categoryId: categoriesMap["clothing"].id,
    },
    {
      name: "Fruit of the Loom Original",
      price: 25,
      imageUrl:
        "https://content.rozetka.com.ua/goods/images/big_tile/425267243.jpg",
      rating: 1,
      description: "T-shirt",
      userId: userAlex.id,
      categoryId: categoriesMap["clothing"].id,
    },
    {
      name: "Blue Golf",
      price: 20,
      imageUrl:
        "https://content.rozetka.com.ua/goods/images/big_tile/562969471.jpg",
      rating: 5,
      description: "G126 98 s",
      userId: userAlex.id,
      categoryId: categoriesMap["clothing"].id,
    },
  ];

  for (const p of productsData) {
    const existing = await prisma.product.findFirst({
      where: { name: p.name },
    });
    if (!existing) {
      await prisma.product.create({ data: p });
      console.log("Product added:", p.name);
    } else {
      console.log("Product already exists:", p.name);
    }
  }

  console.log("Seed finished!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
