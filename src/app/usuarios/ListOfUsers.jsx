import { InputCheck } from "./InputCheck.jsx";
export async function ListOfUsers() {
  try {
    const response = await fetch(
      "http://localhost:3001/api/v1/usuario/usersList",
      {
        //{ cache: 'no-store' }
        next: {
          // incremental state generator
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json();

    const usuarios = data.records; // Accede a la propiedad records

    return usuarios.map((user, index) => (
      <tr key={index}>
        <td>{user.numdocumento}</td>
        <td>{`${user.nombreusuario} ${user.apellidousuario}`}</td>
        <td>{user.celular}</td>
        <td>{user.email || "N/A"}</td>
        <td>{user.estado ? "Activo" : "Inactivo"}</td>
        <td>
          <InputCheck id={user.idusuario}/>
        </td>
      </tr>
    ));
  } catch (error) {
    console.error("Error al procesar la lista de usuarios:", error);
    return <p>Error al cargar la lista de usuarios.</p>;
  }
}
