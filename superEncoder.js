// 6- Import the encryptors functions :

const encryptors = require("./encryptors.js");
const { caesarCipher, symbolCipher, reverseCipher } = encryptors;

// 7- Use the encryptor functions :
const encodeMessage = (str) => {
  return caesarCipher(reverseCipher(str, 5));
  // return  reverseCipher(symbolCipher(caesarCipher(str,15)));
};

const decodeMessage = (str) => {
  return caesarCipher(reverseCipher(str, -5));
  // return  reverseCipher(symbolCipher(caesarCipher(str,-15)));
};

// User input / output :
const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);

// 8- test with these commands  :
// node superEncoder.js encode
// node superEncoder.js decode
