const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb://eduardo:I03cLnE5gnoV8JPu@ac-c0pfbt6-shard-00-00.xlmhjcx.mongodb.net:27017,ac-c0pfbt6-shard-00-01.xlmhjcx.mongodb.net:27017,ac-c0pfbt6-shard-00-02.xlmhjcx.mongodb.net:27017/?ssl=true&replicaSet=atlas-xw5ill-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Conectado!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
