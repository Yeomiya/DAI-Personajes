import sql from 'mssql'
import dbConfig from '../../dbConfig.js';

class CRUDPJS
{

listarPj = async() => {
  let returnArray = null;
  try {
  let pool  = await sql.connect(dbConfig)
  let result = await pool.request().query(`SELECT foto, nombre, IdPersonaje FROM Personajes`)
  returnArray = result.recordset[0];
  } catch (error) {
  console.error('Error al obtener los personajes:', error.message);
  }
  return returnArray;
}

getPjs = async() => {
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

getByIdPjs = async(id) => {
  let returnArray = null;

  try {
    let pool  = await sql.connect(dbConfig)
    let result = await pool.request().query(`SELECT * FROM Personajes WHERE IdPersonaje = ${id}`)
    returnArray = result.recordset[0];

  } catch (error) {
    console.error('Error al obtener los personajes:', error.message);
  }
  return returnArray;
}

postPjs = async (Personajes) => {
  let rowsAffected = 0;

  try {
      let pool = await sql.connect(dbConfig);
      let result = await pool.request()
          .input('Pfoto'        , sql.VarChar , Personajes?.foto ?? '')
          .input('Pnombre'      , sql.VarChar , Personajes?.nombre ?? '')
          .input('Pedad'        , sql.Int     , Personajes?.edad ?? 0)
          .input('Ppeso'        , sql.Int     , Personajes?.peso ?? 0)
          .input('Phistoria'    , sql.VarChar , Personajes?.historia ?? '')
          .query(`INSERT INTO Personajes (foto, nombre, edad, peso, historia) VALUES (@Pfoto, @Pnombre, @Pedad, @Ppeso, @Phistoria)`);
      rowsAffected = result.rowsAffected;
  } catch (error) {
      console.log(error);
  }
  return rowsAffected;
}

updatePjs = async (Personajes) => {
  let rowsAffected = 0;
  try {
      let pool = await sql.connect(dbConfig);
      let result = await pool.request()
          .input('Pfoto'        , sql.VarChar , Personajes?.foto ?? '')
          .input('Pnombre'      , sql.VarChar , Personajes?.nombre ?? '')
          .input('Pedad'        , sql.Int     , Personajes?.edad ?? 0)
          .input('Ppeso'        , sql.Int     , Personajes?.peso ?? 0)
          .input('Phistoria'    , sql.VarChar , Personajes?.historia ?? '')
          .input('pId'          , sql.Int     , Personajes?.IdPersonaje ?? 0)
          .query(`UPDATE Personajes SET foto = @Pfoto, nombre=@Pnombre, edad=@Pedad, peso=@Ppeso, historia=@Phistoria WHERE IdPersonaje=@pId`);
      rowsAffected = result.rowsAffected;
  } catch (error) {
      console.log(error);
  }
  return rowsAffected;
}

deletePjs = async (id) => {
  let rowsAffected = 0;
  try {
      let pool   = await sql.connect(dbConfig);
      let result = await pool.request()
                          .input('IdPersonaje', sql.Int, id)
                          .query('DELETE FROM Personajes WHERE IdPersonaje = ${id};');
      rowsAffected = result.rowsAffected;
  } catch (error) {
      console.log(error);
  }
  return rowsAffected;
}
}

export default CRUDPJS;