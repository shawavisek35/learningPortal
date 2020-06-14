const { GoogleSpreadsheet } = require("google-spreadsheet");
const { promisify } = require("util");

const creds = require("./config/client_secret.json");

const doc = new  GoogleSpreadsheet('1_yKS0AoAG4oS2JfDGvFLTyFRfi8wB2bD988qR4qFEUI');

function printStudent(student) {
    console.log(`Name : ${student.Name}`);
    console.log(`Email : ${student.Email}`);
    console.log(`Comments : ${student.Comments}`);

}

async function accessSpreadsheet() {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });
  
    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
  
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    console.log(sheet.title);
    console.log(sheet.rowCount);
  
    const rows = await sheet.getRows({
        offset : 0
    });
    
    rows.forEach(row => {
        printStudent(row);
    });
}
accessSpreadsheet();