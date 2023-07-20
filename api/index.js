//*Se importa el servidor, la base de datos y se conectan ambos

const server = require("./src/app");
const { conn } = require("./src/db.js");
const PORT = /* process.env.PORT || */ 3001;
const { testDataUploader, testDataCheck } = require('./src/utils/testDataUpload');


conn.sync({ force: true }).then(async () => {

  // const { eBookCheck, publisherCheck } = await testDataCheck();
  
  // console.log(eBookCheck, publisherCheck);
    
  // if( eBookCheck === 0 && publisherCheck === 0){
  //     await testDataUploader()
  // } else {
  //     console.log('Los datos ya estaban cargados');
  // }

  await testDataUploader();
  
  server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`); // eslint-disable-line no-console

  });
});


