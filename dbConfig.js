import 'dotenv/config'

const dbConfig = {
    user: 'usuario',
    password: 'usuario',
    server: 'localhost', 
    database: 'prsonajes',
    
    options: {
      trustServerCertificate    : true,
      trustedConnection         : true
    },
  };

  export default dbConfig 