import * as SQLite from "expo-sqlite";

// Inicializa la base de datos de forma segura
async function initDB() {
  return SQLite.openDatabaseAsync("app.db");
}

export const initSQLiteDB = async () => {
  const db = await initDB();
  try {
    const createTable = await db.execAsync(
      "CREATE TABLE IF NOT EXISTS users (userId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);"
    );
    return createTable;
  } catch (error) {
    console.error("Error al crear la tabla:", error);
  }
};

export const insertSession = async ({ userId, email, token }) => {
  const db = await initDB();
  try {
    const session = await db.runAsync(
      "INSERT INTO users (userId, email, token) VALUES (?, ?, ?);",
      [userId, email, token]
    );
    return session;
  } catch (error) {
    console.error("Error al insertar sesión:", error);
  }
};

export const getSession = async () => {
  const db = await initDB();
  try {
    const data = await db.getFirstAsync("SELECT * FROM users;");
    return data;
  } catch (error) {
    console.error("Error al obtener la sesión:", error);
  }
};

export const deleteSession = async () => {
  const db = await initDB();
  try {
    const deleteSession = await db.runAsync("DELETE FROM users;");
    console.log("Sesión eliminada correctamente:", deleteSession);
    return deleteSession;
  } catch (error) {
    console.error("Error al eliminar la sesión:", error);
  }
};
