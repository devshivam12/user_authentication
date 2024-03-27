import { Client, Databases, Account } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65fed51213ecc7b4ac6f");

export const account = new Account(client);

export const databases = new Databases(client, "65fed5a78e400e0fa0da");
