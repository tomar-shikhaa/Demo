const fs = require('fs')
fs.writeFileSync("hello.txt", "by me") //ye new file banane ke liye use hota h
// or
const ab = require(fs).writeFileSync
ab("hii.txt", "hii")


/*
// _____________modules
Modules woh blocks hote hain jo code ko encapsulate(band karna) karte hain aur unka related functionality ke basis par kisi external application ke saath communication karte hain. Modules ek single file ya phir ek collection of multiple files/folders ho sakte hain. Programmers modules par zyada dependent hote hain kyunki unki reusability hoti hai aur ek complex piece of code ko manageable chunks mein divide karne ki capability hoti hai.
3 types
1- core 
2- local modules
3- third-party 

1- core =Core modules Node.js ke integral part hote hain jo pre-installed hote hain aur Node.js installation ke saath aate hain.
1.1- core modeules types
1.1.1- this is a globle core modules
fs (File System): Ye module file system interactions ke liye hota hai jaise ki file create, read, update, delete karna. Ismein alag-alag functions hote hain jaise readFile(), writeFile(), readdir() etc.

http: Ye module HTTP server aur client banane ke liye hota hai. Iske functions se HTTP requests receive aur send kiya ja sakta hai.

path: Ye module file paths ko manipulate karne ke liye hota hai. Ismein functions hote hain jo paths ko join karna, resolve karna aur normalize karna sikhaate hain.

os (Operating System): Ye module operating system information provide karta hai jaise ki CPU architecture, free memory, aur network interfaces.

events: Ye module events ke management ke liye hota hai. Ismein EventEmitter class hoti hai jisse events create kiya ja sakta hai aur unka handling kiya ja sakta hai.

util: Ye module utility functions provide karta hai jaise ki logging, object inspecting, aur inheritance.

crypto: Ye module cryptographic operations ke liye hota hai jaise ki encryption, decryption, hashing, aur secure random number generation.

1.1.2- non globle - isko import karna padta h

2.1-  Local Modules:
Local modules Node.js mein khud banaye gaye modules hote hain jo hum apne project ke andar banate hain aur phir apne project ke alag-alag files mein unhe require karke istemal karte hain. 

// exampleModule.js file
module.exports = {
  greet: function() {
    console.log('Hello from local module!');
  }
};


3.1. Third-Party Modules:
Third-party modules Node.js ke ecosystem mein available hote hain jo kisi aur developer ya community ke dwara banaye gaye hote hain.  In modules ko npm (Node Package Manager) ke through install kiya ja sakta hai aur phir unhe require karke apne project mein use kiya ja sakta hai.
example= npm install <module-name>

*/