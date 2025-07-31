import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open a database connection and export it
const db = await open({
  filename: ':memory:', // or './data.db' if you want to persist it
  driver: sqlite3.Database,
});

// Initialize the schema
await db.exec(`
  CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
  )
`);

await db.exec(`
  CREATE TABLE todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      task TEXT,
      completed BOOLEAN DEFAULT 0,
      FOREIGN KEY(user_id) REFERENCES users(id)
  )
`);

export default db;
