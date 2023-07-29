//*Se importa el servidor, la base de datos y se conectan ambos

const server = require("./src/app");
const { conn } = require("./src/db.js");
const PORT = /* process.env.PORT || */ 3001;
const { testDataUploader, testDataCheck } = require('./src/utils/testDataUpload');


conn.sync({ force: false }).then(async () => {

  const { BookCheck, publisherCheck } = await testDataCheck();
  
  console.log('Value of Book: ', BookCheck, 'Value of Publisher: ', publisherCheck);
    
  //  

  if(BookCheck === 0 && publisherCheck === 0){
      await testDataUploader()
  } else {
    console.log('Data was already loaded');
  }

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // eslint-disable-line no-console
  });
});


