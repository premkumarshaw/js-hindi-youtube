🟩➡️What is JavaScript & Why it was made.

Answer:
JavaScript is a high-level, dynamically typed scripting language used to make web pages interactive and dynamic. It runs mainly in the browser and can also run on servers using environments like Node.js.

🟩➡️Why it was made

JavaScript was created in 1995 by Brendan Eich to add interactivity to websites, because earlier web pages built with HTML and CSS were static.

🟩➡️Examples of interactivity:
Form validation
Button click actions
Dynamic content updates

🟩➡️Example:
id="js_intro_example"
document.getElementById("btn").onclick = function() {
  alert("Button clicked!");
};

---This makes a webpage respond to user actions, which was the main reason JavaScript was created.

------------------------------------------------------------------------------------------------------
Topic: What is Dynamically Typed and Statically Typed language

1️⃣Answer
A statically typed language requires the datatype of a variable to be declared before compilation, and the type cannot change later. The type checking happens at compile time.

A dynamically typed language does not require declaring the datatype of a variable. The datatype is determined at runtime, and the variable’s type can change during execution.

2️⃣ Key Point
JavaScript is a dynamically typed language.
In dynamic typing, the same variable can store different types of values at different times.

3️⃣ Example
🟩➡️Dynamically Typed (JavaScript)

let value = 10;      // number
value = "Hello";     // now string
value = true;        // now boolean

Here the same variable changes its datatype, which is allowed in dynamic typing.

🟩➡️Statically Typed (Example: Java / C++)
int number = 10;
number = "Hello"; // Error: cannot change type

Here the variable must stay the same datatype, otherwise the program will give an error.
------------------------------------------------------------------------------------------------------

1️⃣ Topic: Scripting Language
Answer
A scripting language is a programming language used to automate tasks and control other software. It usually runs inside another program or environment, such as a browser.

JavaScript is called a scripting language because it runs inside the web browser to control webpage behavior.

Key Point:
Scripting languages are generally interpreted, not compiled, and are used for automation and quick execution.

Example:
JavaScript script inside a webpage:

document.getElementById("btn").onclick = function() {
  alert("Hello User!");
};

This script runs inside the browser and performs an action when the user clicks a button.

2️⃣ Topic: Node.js (What is Node.js)
Answer:
Node.js is a runtime environment that allows JavaScript to run outside the browser, mainly on servers.
It uses the V8 JavaScript engine from Chrome to execute JavaScript code.

Key Point:
Before Node.js, JavaScript could only run in browsers. Node.js made it possible to use JavaScript for backend development.

Example

Simple Node.js server:

const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from Node.js server");
}).listen(3000);

This creates a server running on port 3000.

3️⃣ Topic: Server-Side Programming
Answer
Server-side programming refers to writing code that runs on the server instead of the user's browser. It handles tasks like database operations, authentication, and business logic.

Key Point
Server-side code processes requests from clients and sends back responses.

Common server-side languages include:
JavaScript (Node.js)
Python
Java
PHP

Example Flow:
User → Request → Server-side code runs → Database → Response → User

Example with Node.js:

app.get("/users", (req, res) => {
  res.send("User data from server");
});

4️⃣ Topic: Uses of JavaScript
Answer:

JavaScript is used to create dynamic and interactive web applications.

Key Uses:
Web Development – Adding interactivity to websites
Backend Development – Using Node.js
Mobile App Development – Using frameworks like React Native
Game Development – Browser-based games
Desktop Applications – Using Electron
API Development – Building backend services

Example:
Form validation using JavaScript:

function validate() {
  let name = document.getElementById("name").value;
  if(name === "") {
    alert("Name cannot be empty");
  }
}

This checks user input before submitting a form.
------------------------------------------------------------------------------------------------------
⚙️ JavaScript Engine:
Answer:

A JavaScript Engine is a program that executes JavaScript code.
It reads the JavaScript code, converts it into machine code, and then runs it so the computer can understand and execute it.

JavaScript engines are built inside browsers and runtime environments.

Key Point:
Each browser has its own JavaScript engine to execute JavaScript code.

Example:
When a browser loads a webpage containing JavaScript:

console.log("Hello JavaScript");

The JavaScript engine inside the browser reads and executes this code, and the message appears in the console.

🟩➡️Topic: Popular JavaScript Engines
Answer:
Different browsers use different JavaScript engines to run JavaScript code.

Popular JavaScript Engines

Engine	                    Used In
V8	                        Google Chrome, Node.js
SpiderMonkey	              Mozilla Firefox
JavaScriptCore (Nitro)	    Safari
Chakra	                    Microsoft Edge (older versions)
Key Point

Among these, V8 is the most widely used engine, especially because Node.js uses V8 to run JavaScript on servers.

🟩➡️Short Interview Line (Very Useful)
You can say this in interviews:

A JavaScript engine is a program that executes JavaScript code by converting it into machine code. Popular engines include V8 used in Chrome and Node.js, SpiderMonkey used in Firefox, and JavaScriptCore used in Safari.
------------------------------------------------------------------------------------------------------
📜 ECMAScript
📌 Definition:
ECMAScript is the official standard (specification) that defines how the JavaScript language should work.
It sets the rules, syntax, and features that JavaScript engines must follow.

🧠 Interview Answer:
ECMAScript is the standard specification for JavaScript.
It ensures that JavaScript behaves consistently across different browsers and environments.

JavaScript is an implementation of the ECMAScript standard.

🚀 Key Point:
ECMAScript is the standard
JavaScript is the language that follows this standard

⚡ Quick Note
ECMAScript versions introduce new features and improvements to JavaScript.
Examples: ES6, ES7, ES8 … ES13

🚀 ES6 (ECMAScript 2015)
📌 Definition:
ES6 is a major update to JavaScript released in 2015 that introduced many modern features to make JavaScript easier and more powerful.

🧠 Interview Answer:
ES6 (ECMAScript 2015) introduced modern features like let, const, arrow functions, classes, promises, modules, and template literals, which improved JavaScript development.

🔥 Important Features:
🆕 let and const
⚡ Arrow Functions
🧩 Classes
📦 Modules (import / export)
🧵 Promises
🪄 Template Literals
🎯 Destructuring

💻 Example
const greet = (name) => {
  return `Hello ${name}`;
};
console.log(greet("Prem"));

⚡ Arrow functions and template literals are ES6 features.


🆕 ES13 (ECMAScript 2022)
📌 Definition:
ES13 is the ECMAScript version released in 2022, introducing new features that improve developer productivity and code readability.

🧠 Interview Answer
ES13 added useful features like Array.at(), Object.hasOwn(), top-level await, and improvements to classes and error handling.

🔥 Important Features
📍 Array.at()
🔍 Object.hasOwn()
⏳ Top-level await
🧩 Class field improvements
⚠️ Error cause property

💻 Example
const numbers = [10, 20, 30, 40];
console.log(numbers.at(-1));

✅ Output:
40

⚡ at() allows accessing elements using negative indexing.

🎯 One-Line Summary:
ECMAScript is the official standard for JavaScript, and versions like ES6 and ES13 introduce new features and improvements to the language over time.
-----------------------------------------------------------------------------------------------------------------
▶️ Where We Can Run JavaScript Code
📌 Definition
JavaScript code can run in two main environments:
1️⃣ Web Browsers
2️⃣ Server-side environments

🧠 Interview Answer
JavaScript can run inside web browsers using a JavaScript engine and outside the browser using runtime environments like Node.js.
Browsers execute JavaScript to make web pages interactive, while server environments run JavaScript for backend development.

🚀 Main Places Where JavaScript Runs:
Environment	                        Description
🌐 Web Browser	                    Runs JavaScript to control web pages
🖥️ Node.js	                        Runs JavaScript outside the browser on servers
📱 Mobile Frameworks	              Used in apps like React Native
💻 Desktop                         Apps	Used with tools like Electron


🌐 Running JavaScript in Browser
JavaScript runs inside browsers like:

🌍 Google Chrome
🦊 Mozilla Firefox
🍏 Safari
🔵 Microsoft Edge

💻 Example (Browser)
console.log("Hello from Browser");

This code runs in the browser console.

You can open it by pressing:
F12 → Console

🖥️ Example (Node.js)
console.log("Hello from Node.js");

Run it using terminal:

node app.js

⚡ Quick Note:
JavaScript originally ran only in browsers, but after Node.js (2009) it can now run on servers, desktop apps, and mobile apps.

🎯 One-Line Interview Summary:
JavaScript can run in browsers using JavaScript engines and outside the browser using runtime environments like Node.js.
