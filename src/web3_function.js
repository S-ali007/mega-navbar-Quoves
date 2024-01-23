import Web3 from "web3";

const web3 = new Web3("http://127.0.0.1:8545");
const DegreeVerification = require("./contract/StudentRegistry.json");

// function hexToDecimal(hexString) {
//   return parseInt(hexString, 16);
// }

async function createContractInstance() {
  const account = await web3.eth.getAccounts();
  const networkId = await web3.eth.net.getId();
  const { address } = DegreeVerification.networks[networkId];
  const instance = new web3.eth.Contract(DegreeVerification.abi, address);
  return { instance, account };
}

async function connectWeb3Metamask() {
  const web3 = new Web3(Web3.givenProvider || window.ethereum);
  const account = await web3.eth.requestAccounts();
  console.log(account);
  const networkId = await web3.eth.net.getId();
  console.log("Network ID:", networkId);
  const { address } = DegreeVerification.networks[networkId];
  // console.log(address,"addddddddd")
  const instance = new web3.eth.Contract(DegreeVerification.abi, address);
  // console.log(instance,"instance");
  return { instance, account };
}

async function addFunction(
  contractInstance,
  account,
  name,
  fathername,
  cnic,
  serial,
  registration,
  course,
  session
) {
  try {
    const transaction = await contractInstance.methods
      .addStudent(name, fathername, cnic, serial, registration, course, session)
      .send({ from: account });
    //  .getStudentData(name, fathername, cnic, serial, registration, course, session)
    //   .call({ from: account });
    console.log(transaction, "Transaction");

    const receipt = transaction;
    // const userDegree=receipt[0].split(',')

    // let obj = {};

    // userDegree.map((name ,index )=>{
    //   const data=name.split(':');
    //   obj[data[0].trim()] = data[1]
    // })

    // console.log(obj.Name);

    // const events = receipt.events;
    // const studentAddedEvent = events.StudentAdded;

    // if (studentAddedEvent) {
    //   const result = studentAddedEvent.returnValues;
    //   console.log(result.blockhash, "Result");

    // Convert relevant fields to decimal
    // const studentSessionDecimal = hexToDecimal(result.session);

    // Access individual return values
    // const studentAddress = result.studentAddress;
    // const studentName = result.name;
    // const studentCourse = result.course;

    // console.log(
    //   studentAddress,
    //   studentName,
    //   studentCourse,
    //   studentSessionDecimal
    // );
    // } else {
    // console.error("StudentAdded event not found in the receipt");
    // }

    const logs = receipt.logs;
    console.log(logs, "Logs");

    const studentAddedLog = logs.find(
      (log) =>
        log.topics[0] ===
        web3.utils.sha3(
          "StudentAdded(address,string,string,uint256,string,bytes32)"
        )
    );
    console.log(studentAddedLog, "StudentAddedLog");
    return transaction;
  } catch (error) {
    console.error("Error in addFunction:", error);
    throw error;
  }
}

async function getFunction(
  contractInstance,
  account,
  name,
  fathername,
  cnic,
  serial,
  registration,
  course,
  session
  
) {
  try {
    const transaction = await contractInstance.methods
      // .addStudent(name, fathername, cnic, serial, registration, course, session)
      // .send({ from: account });
      .getStudentData(
        name,
        fathername,
        cnic,
        serial,
        registration,
        course,
        session
      )
      .call({ from: account });
    // console.log(transaction, "Transaction");

    const receipt = transaction;
    // console.log(receipt);

    // let obj1 = {};
    // const userDegree1 = transaction.split(",");

    // userDegree1.map((name) => {
    //   const data = name;
    //   obj1[data[0]] = data[1];
    // });


    let obj2 = {};
    const userDegree = receipt[1].split(",");
    userDegree.map((name, index) => {
      const data = name.split(":");
      obj2[data[0].trim()] = data[1];
    });

    // console.log(obj2);

    // const events = receipt.events;
    // const studentAddedEvent = events.StudentAdded;

    // if (studentAddedEvent) {
    //   const result = studentAddedEvent.returnValues;
    //   console.log(result.blockhash, "Result");

    //   // Convert relevant fields to decimal
    //   // const studentSessionDecimal = hexToDecimal(result.session);

    //   // Access individual return values
    //   const studentAddress = result.studentAddress;
    //   const studentName = result.name;
    //   const studentCourse = result.course;

    //   console.log(
    //     studentAddress,
    //     studentName,
    //     studentCourse,
    //     studentSessionDecimal
    //   );
    // } else {
    //   console.error("StudentAdded event not found in the receipt");
    // }

    // const logs = receipt.logs;
    // console.log(logs, "Logs");

    // const studentAddedLog = logs.find(
    //   (log) =>
    //     log.topics[0] ===
    //     web3.utils.sha3(
    //       "StudentAdded(address,string,string,uint256,string,bytes32)"
    //     )
    // );
    // console.log(studentAddedLog, "StudentAddedLog");
      const block_detail =[receipt,obj2];
    return block_detail ;
  } catch (error) {
    console.error("Error in addFunction:", error);
    throw error;
  }
}

async function getStudentWithAddress(
  contractInstance,
  account,
  studentAddress
) {
  try {
    const transaction = await contractInstance.methods
        .students(studentAddress)
        .call({ from: account });

      const receipt = transaction;
    // console.log(receipt);

    return receipt;

  } catch (error) {
    console.error("Error in getStudentWithAddress:", error);
    throw error;
  }
}
// async function addFunction(
//   contractInstance,
//   account,
//   name,
//   fathername,
//   cnic,
//   serial,
//   registration,
//   course,
//   session,
// ) {
//   try {
//     const transaction = await contractInstance.methods
//       .addStudent(name, fathername, cnic, serial, registration, course, session)
//       .send({ from: account });

//     console.log(transaction, "Transaction");

//     const receipt = transaction;

//     console.log(receipt);
//     const events = receipt.events;
//     const studentAddedEvent = events.StudentAdded;

//     if (studentAddedEvent) {
//       const result = studentAddedEvent.returnValues;
//       console.log(result, "Result");

//       // Access individual return values
//       const studentAddress = result.studentAddress;
//       const studentName = result.name;
//       const studentCourse = result.course;
//       const studentSession = result.session;

//       console.log(studentAddress, studentName, studentCourse, studentSession);
//     } else {
//       console.error("StudentAdded event not found in the receipt");
//     }

//     const logs = receipt.logs;
//     console.log(logs, "Logs");

//     const studentAddedLog = logs.find(log => log.topics[0] === web3.utils.sha3("StudentAdded(address,string,string,uint256,string,bytes32)"));
//     console.log(studentAddedLog, "StudentAddedLog");

//     return transaction;
//   } catch (error) {
//     console.error("Error in addFunction:", error);
//     throw error;
//   }
// }

// async function addFunction(
//   contractInstance,
//   account,
//   name,
//   fathername,
//   cnic,
//   serial,
//   registration,
//   course,
//   session,
// ) {
//   try {
//     const transaction = await contractInstance.methods
//       .addStudent(name, fathername, cnic, serial, registration, course, session)
//       .send({ from: account });
//       // .studentAddresses(cnic)
//       // .call();
//       // .getStudentData(name, fathername, cnic, serial, registration, course, session)
//       // .call({from: account});

//     console.log(transaction,"transation")

//     const receipt = await transaction ;

//     console.log(receipt);
//     const result =receipt.events.StudentAdded.returnValues;
//     console.log(result,"result");
//     const logs = receipt.logs;
//     console.log(logs,"looooooooooooooooooooooo")

//     const studentAddedLog = logs.find(log => log.topics[0] === web3.utils.sha3("StudentAdded(address,string,string,uint256,string,bytes32)"));
//     console.log(studentAddedLog,"999999999999999999")

//     return transaction;
//   } catch (error) {
//     console.error("Error in addFunction:", error);
//     throw error;
//   }
// }

async function getStudentAddresses(contractInstance, account, cnic) {
  try {
    const res = await contractInstance.methods
      .studentAddresses(cnic)
      .call({ from: account });
    return res;
  } catch (error) {
    console.error("Error in studentAddresses:", error);
    throw error;
  }
}

export { connectWeb3Metamask, addFunction, getStudentAddresses, getFunction , getStudentWithAddress};

// async function getAllStudentAddresses()
//   contractInstance,
//   account,
//   name,
//   fathername,
//   cnic,
//   serial,
//   registration,
//   course,
//   session
// ) {
//   try {
//     const res = await contractInstance.methods
//       .addStudent(name, fathername, cnic, serial, registration, course, session)
//       .send({ from: account[0] });
//       return res;
//   } catch (error) {
//     console.error("Error in addFunction:", error);
//     throw error;
//   }// }

// async function students(
//   contractInstance,
//   account,
//   name,
//   fathername,
//   cnic,
//   serial,
//   registration,
//   course,
//   session
// ) {
//   try {
//     const res = await contractInstance.methods
//       .addStudent(name, fathername, cnic, serial, registration, course, session)
//       .send({ from: account[0] });
//       return res;
//   } catch (error) {
//     console.error("Error in addFunction:", error);
//     throw error;
//   }
// }

// async function main() {
//   try {
//     const { instance, account } = await createContractInstance();
//     await addFunction(instance, account[0], "ali", "hassan", 1111, 222, 333, "cs", 2000);
//   } catch (error) {
//     console.error("Error in main:", error);
//   }
// }
