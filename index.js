import express from "express";
import CRUDPJS from "./src/Services/ServicePersonajes.js"
import sql from 'mssql'

const app = express();
app.use(express.json());

/*app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'usuario' && password === 'contraseña') {
    const token = jwt.sign({ username }, 'secreto', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
}); */



async function getAll(){
  let svc = new CRUDPJS();
  let data
  data = await svc.get();
  console.log(data);
  return JSON.stringify(data)
}

/* db.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos: ', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
}); */

app.get('/characters', async function(req, res) {
  res.send(await getAll())
});

/* app.post('/characters', (req, res) => {
    const { Foto, Nombre, Edad, Peso, Historia } = req.body;
  
    const query = 'INSERT INTO Personajes (Foto, Nombre, Edad, Peso, Historia) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [Foto, Nombre, Edad, Peso, Historia], (err, result) => {
      if (err) {
        console.error('Error al crear el personaje: ', err);
      } else {
        res.json({ message: 'Personaje creado exitosamente' });
      }
    });
  });
  
  app.getById('/characters/:id', (req, res) => {
    const idPersonaje = req.params.id;
  
    const query = 'SELECT * FROM Personajes WHERE IdPersonaje = ?';
    db.query(query, [idPersonaje], (err, result) => {
      if (err) {
        console.error('Error al obtener el personaje: ', err);
      } else {
        res.json(result[0]);
      }
    });
  });

  app.put('/characters/:id', (req, res) => {
    const idPersonaje = req.params.id;
    const { Foto, Nombre, Edad, Peso, Historia } = req.body;
  
    const query = 'UPDATE Personajes SET Foto = ?, Nombre = ?, Edad = ?, Peso = ?, Historia = ? WHERE IdPersonaje = ?';
    db.query(query, [Foto, Nombre, Edad, Peso, Historia, idPersonaje], (err, result) => {
      if (err) {
        console.error('Error al actualizar el personaje: ', err);
      } else {
        res.json({ message: 'Personaje actualizado exitosamente' });
      }
    });
  });
  
  app.deleteC('/characters/:id', (req, res) => {
    const idPersonaje = req.params.id;
  
    const query = 'DELETE FROM Personajes WHERE IdPersonaje = ?';
    db.query(query, [idPersonaje], (err, result) => {
      if (err) {
        console.error('Error al eliminar el personaje: ', err);
      } else {
        res.json({ message: 'Personaje eliminado exitosamente' });
      }
    });
  });
  */
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

