import { connectDB, closeDB  } from "./src/db";

interface User {
  nom: string;
  age: number;
  email: string;
}

(async () => {
  const db = await connectDB();

  // List of existing collections
  const collections = await db.collections();
  console.log("📂 Collection availables :", collections.map(c => c.collectionName));

  // Nom de la collection
  const collectionName = "users";

  // Create the collection if doesn't exist
  if (!collections.some(c => c.collectionName === collectionName)) {
    await db.createCollection(collectionName);
    console.log(`✅ Collection '${collectionName}' created`);
  } else {
    console.log(`ℹ️ Collection '${collectionName}' already exists`);
  }

  const usersCollection = db.collection<User>(collectionName);

  // Insert some users example
  const utilisateurs: User[] = [
    { nom: "Alice", age: 30, email: "alice@example.com" },
    { nom: "Bob", age: 25, email: "bob@example.com" },
    { nom: "Charlie", age: 35, email: "charlie@example.com" }
  ];

  // Pour éviter les doublons à chaque lancement, tu peux vider la collection d'abord (optionnel)
  await usersCollection.deleteMany({});

  const result = await usersCollection.insertMany(utilisateurs);
  console.log(`📥 ${result.insertedCount} users inserted`);

  const allUsers = await usersCollection.find().toArray();
  console.log("📋 Users in the collection :");
  console.log(allUsers);

  // If you want the connexion closed at the MongoDB client, add this line:
  // await db.client.close(); // but here client is not exposed, need to fix it in db.ts if needed
  await closeDB();
})();
