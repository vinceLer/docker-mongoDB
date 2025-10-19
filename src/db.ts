import { MongoClient, Db } from "mongodb";

const uri = "mongodb://root:example@localhost:27017";
const client = new MongoClient(uri);

let db: Db | null = null;

export async function connectDB(): Promise<Db> {
  if (!db) {
    await client.connect();
    db = client.db("myBase");
  }
  return db;
}

export async function closeDB() {
  await client.close();
  db = null;
}
