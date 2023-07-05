import sql from 'mssql'
import dbConfig from '../../dbConfig.js';

class CRUDPJS
{

get = async() => {
  let returnArray = null;

  try {
    let pool  = await sql.connect(dbConfig)
    let result = await pool.request().query(`SELECT * FROM Personajes`)
    returnArray = result.recordset[0];

  } catch (error) {
    console.error('Error al obtener los personajes:', error.message);
  }
  return returnArray;
}

/* getById = async(id) => {
  try {
    const result = await sql.query`SELECT * FROM Personajes WHERE IdPersonaje = ${id}`;
    return result.recordset[0];
  } catch (error) {
    console.error('Error al obtener el personaje:', error.message);
    return null;
  }
}

post = async() => {
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

get = async(id, character) => {
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

deleteC = async(id) => {
  try {
    const result = await sql.query`DELETE FROM Personajes WHERE IdPersonaje = ${id};`;
    return true;
  } catch (error) {
    console.error('Error al eliminar el personaje:', error.message);
    return false;
  }
}
*/
}


export default CRUDPJS;