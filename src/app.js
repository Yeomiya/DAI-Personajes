const sql = require('mssql');

const dbConfig = {
  user: 'usuario',
  password: 'usuario',
  server: 'localhost', 
  database: 'prsonajes',
  options: {
    enableArithAbort: true,
  },
};


async function get() {
  try {
    const result = await sql.query`SELECT * FROM Personajes`;
    return result.recordset;
  } catch (error) {
    console.error('Error al obtener los personajes:', error.message);
    return [];
  }
}

async function getById(id) {
  try {
    const result = await sql.query`SELECT * FROM Personajes WHERE IdPersonaje = ${id}`;
    return result.recordset[0];
  } catch (error) {
    console.error('Error al obtener el personaje:', error.message);
    return null;
  }
}

async function post(character) {
  try {
    const { Foto, Nombre, Edad, Peso, Historia } = character;
    const result = await sql.query`
      INSERT INTO Personajes (Foto, Nombre, Edad, Peso, Historia)
      VALUES (${Foto}, ${Nombre}, ${Edad}, ${Peso}, ${Historia});
      SELECT SCOPE_IDENTITY() AS IdPersonaje;
    `;
    return result.recordset[0].IdPersonaje;
  } catch (error) {
    console.error('Error al crear el personaje:', error.message);
    return null;
  }
}

async function put(id, character) {
  try {
    const { Foto, Nombre, Edad, Peso, Historia } = character;
    const result = await sql.query`
      UPDATE Personajes
      SET Foto = ${Foto}, Nombre = ${Nombre}, Edad = ${Edad}, Peso = ${Peso}, Historia = ${Historia}
      WHERE IdPersonaje = ${id};
    `;
    return true;
  } catch (error) {
    console.error('Error al actualizar el personaje:', error.message);
    return false;
  }
}

async function deleteC (id) {
  try {
    const result = await sql.query`DELETE FROM Personajes WHERE IdPersonaje = ${id};`;
    return true;
  } catch (error) {
    console.error('Error al eliminar el personaje:', error.message);
    return false;
  }
}

