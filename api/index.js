//*Se importa el servidor, la base de datos y se conectan ambos

const server = require("./src/app");
const { conn } = require("./src/db.js");
const PORT = /* process.env.PORT || */ 3001;
const { testDataUploader, testDataCheck } = require('./src/utils/testDataUpload');


conn.sync({ force: true }).then(async () => {

  const { BookCheck, publisherCheck } = await testDataCheck();
  
  console.log('Este es el valor de book: ', BookCheck, 'Este es el valor de publisher: ', publisherCheck);
    
  //  

  if(BookCheck === 0 && publisherCheck === 0){
      await testDataUploader()
  } else {
      console.log('Los datos ya estaban cargados');
  }

  server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`); // eslint-disable-line no-console

  });
});


