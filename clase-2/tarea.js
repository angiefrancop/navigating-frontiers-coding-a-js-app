import fs from 'fs';
import os from 'os';
import psList from 'ps-list';
let content;

function parseBytesToGB(bytes) {
  const kiloBytes = 1024;
  const megaBytes = os.freemem() / Math.pow(kiloBytes, 3);
  return megaBytes.toFixed(2) + 'GB';
}

const getCpuUsageByProcess = async () => {
  const processList = await psList();
  processList.sort((a, b) => b.cpu - a.cpu);

  return processList;
};

async function getData() {
  const processData = await getCpuUsageByProcess();
  console.log('processData--', processData);
  const userInfo = os.userInfo();
  const cpuInfo = os.cpus();
  content = {
    properties: {
      owner: userInfo.username,
      ram: parseBytesToGB(os.freemem()),
      cpu: cpuInfo[0].model,
      processData: {
        pid: processData[0].pid,
        name: processData[0].name,
        cpu: processData[0].cpu
      }
    }
  };

  writeData();
}

function writeData() {
  console.log(JSON.stringify(content));
  const dataToFile = JSON.stringify(content);
  fs.writeFile('./test.txt', dataToFile, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log('The file was saved!');
  });

  readData();
}

function readData() {
  fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('This is the data read from the file');
    console.log(JSON.parse(data));
  });
}
getData();
