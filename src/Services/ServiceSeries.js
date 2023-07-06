import sql from 'mssql'
import dbConfig from '../../dbConfig.js';

class CRUDSeries
{

listarSeries = async() => {
  let returnArray = null;
  try {
  let pool  = await sql.connect(dbConfig)
  let result = await pool.request().query(`SELECT foto, titulos, Fecha, id FROM Personajes`)
  returnArray = result.recordset[0];
  } catch (error) {
  console.error('Error al obtener las series:', error.message);
  }
  return returnArray;
}

getSeries = async() => {
  let returnArray = null;

  try {
    let pool  = await sql.connect(dbConfig)
    let result = await pool.request().query(`SELECT * FROM Series`)
    returnArray = result.recordset[0];
  } catch (error) {
    console.error('Error al obtener las series:', error.message);
  }
  return returnArray;
}

getByIdSeries = async(id) => {
  let returnArray = null;

  try {
    let pool  = await sql.connect(dbConfig)
    let result = await pool.request().query(`SELECT * FROM series WHERE id = ${id}`)
    returnArray = result.recordset[0];

  } catch (error) {
    console.error('Error al obtener la serie:', error.message);
  }
  return returnArray;
}

postSeries = async (series) => {
  let rowsAffected = 0;

  try {
      let pool = await sql.connect(dbConfig);
      let result = await pool.request()
          .input('sFoto'                 , sql.VarChar  , series?.foto ?? '')
          .input('sTitulos'              , sql.VarChar  , series?.titulos ?? '')
          .input('sFecha'                , sql.Date     , series?.fecha ?? 0)
          .input('sClasificacion'        , sql.VarChar  , series?.clasificacion ?? 0)
          .query(`INSERT INTO series (foto, titulos, fecha, clasificacion) VALUES (@sFoto, @sTitulos, @sfecha, @sClasificacion)`);
      rowsAffected = result.rowsAffected;
  } catch (error) {
      console.log(error);
  }
  return rowsAffected;
}

updateSeries = async (series) => {
  let rowsAffected = 0;
  try {
      let pool = await sql.connect(dbConfig);
      let result = await pool.request()
          .input('sFoto'                 , sql.VarChar  , series?.foto ?? '')
          .input('sTitulos'              , sql.VarChar  , series?.titulos ?? '')
          .input('sFecha'                , sql.Date     , series?.fecha ?? 0)
          .input('sClasificacion'        , sql.VarChar  , series?.clasificacion ?? 0)
          .input('sId'                   , sql.Int      , series?.id ?? 0)
          .query(`UPDATE series SET foto = @sFoto, titulos=@sTitulos, fecha=@sFecha, clasificacion=@sClasificacion WHERE id=@sId`);
      rowsAffected = result.rowsAffected;
  } catch (error) {
      console.log(error);
  }
  return rowsAffected;
}

deleteSeries = async (id) => {
  let rowsAffected = 0;
  try {
      let pool   = await sql.connect(dbConfig);
      let result = await pool.request()
                          .input('id', sql.Int, id)
                          .query('DELETE FROM series WHERE id = ${id};');
      rowsAffected = result.rowsAffected;
  } catch (error) {
      console.log(error);
  }
  return rowsAffected;
}
}

export default CRUDSeries;