export default async function handler(req, res) {
  try {
    const response = await fetch(
      "http://localhost:3001/api/v1/usuario/usersList"
    );
    const data = await response.json();
    const usuarios = data.records;

    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al procesar la lista de usuarios:", error);
    res.status(500).json({ error: "Error al cargar la lista de usuarios." });
  }
}
