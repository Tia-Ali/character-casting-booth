# Introduction to JavaScript: A Beginner's Guide

## What is JavaScript?

JavaScript is a programming language that makes websites interactive. It runs directly in web browsers (like Chrome, Firefox) and can also be used on servers (with Node.js). JavaScript allows you to create dynamic content, control multimedia, animate images, and much more.

JavaScript can be implemented into a website in several ways, each suited to different use cases depending on the complexity, performance needs, and structure of the project. Here's an overview of the main methods:

**1. Inline JavaScript** - JavaScript code can be written directly within an HTML element using the `onclick`, `onload`, or other event attributes.

```html
<button onclick="alert('Hello!')">Click Me</button>
```

✅ Quick and simple for small tasks  
❌ Not ideal for maintainability or scalability

**2. Internal JavaScript** - (Embedded in your HTML) You can include JavaScript within a `<script>` tag inside the HTML file, usually in the `<head>` or at the end of the `<body>`.

```html
<head>
    <script>
    function greet() {
        alert("Welcome!");
    }
    </script>
</head>
```

✅ Keeps everything in one file  
❌ Can clutter HTML and reduce readability

**3. External JavaScript File** - JavaScript can be placed in a separate .`.js` file and linked to the HTML using the `<script src="...">` tag.

```html
<script src="script.js"></script>
```

✅ Best for organisation, reusability, and performance  
✅ Enables caching and easier debugging  
❌ Requires an extra HTTP request (unless bundled)

**4. JavaScript Frameworks and Libraries** - Modern web development often uses frameworks like **React**, **Vue**, or **Angular**, which compile or render JavaScript in more structured ways.

✅ Great for building complex, interactive UIs  
❌ Requires build tools and deeper knowledge

## Getting Started

You can begin writing JavaScript with just a text editor (*NOT a word processor*) and a web browser, try copying the following into a text file, save the file as [file_name].html, then double click the same file to view it in your default browser:

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    // Your JavaScript code here
    console.log("Hello World!");
  </script>
</body>
</html>
```

>The above code shows a blank screen - where is "Hello World!"?

Of course, it's much more convenient to edit HTML in VSC, even better if you have the *Live Preview* extension installed to see changes in real time.

### Variables

Variables in JavaScript are used to store data values. You can declare them using `var`, `let`, or `const`, with let and const being the modern, block-scoped options. Variables can hold any data type, such as numbers, strings, or even complex objects.

```javascript
let message = "Hello";  // String
let count = 10;         // Number
let isActive = true;    // Boolean
const PI = 3.14;        // Constant
```

#### Data Types

JavaScript has several basic data types:

- Strings: "text"
- Numbers: 10, 3.14
- Booleans: true, false
- Null: null
- Undefined: undefined
- Objects: { key: "value" }
- Arrays: [1, 2, 3]

### Conditional Statements

Conditional statements like `if`, `else if`, and `else` allow JavaScript to make decisions based on certain conditions. They control the flow of the program by executing different blocks of code depending on whether a condition evaluates to true or false.

```javascript
let age = 18;

if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}
```

>If you haven't figured it out, in your browser of choice right click the page and choose `inspect`, you should then have an option to view the console output.

### Loops

Loops let you repeat a block of code multiple times. JavaScript supports several types of loops, including `for`, `while`, and `do...while`. These are useful for iterating over arrays, processing data, or performing repetitive tasks efficiently.

```javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let x = 0;
while (x < 3) {
  console.log(x);
  x++;
}
```

### Functions

Functions are reusable blocks of code designed to perform a specific task. They can take inputs (parameters), process them, and return a result. Functions help organize code, reduce repetition, and improve readability.

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function (ES6+)
const add = (a, b) => a + b;
```

### Objects

Objects are collections of key-value pairs and are fundamental to JavaScript. They can represent real-world entities and store related data and functions (called methods). You can access or modify object properties using dot or bracket notation.

```javascript
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello!");
  }
};

// Access properties
console.log(person.name); // "Alice"
person.greet();           // Calls the method
```

## Practical Lab

[Click here for a practical JS lab](JS_Lab.md)

### DOM Manipulation Basics

DOM (Document Object Model) The DOM is a programming interface that represents the structure of a web page. JavaScript can interact with the DOM to dynamically change content, styles, and structure—allowing developers to create interactive and responsive web experiences.

```javascript
<button id="myButton">Click Me</button>
<p id="output"></p>

<script>
  document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("output").textContent = "Button clicked!";
  });
</script>
```

[Click here for a detailed guide on working with the DOM](DOM_manipulation.md)

### Example

Review the sample `.html`, `.css`, and `.js` files in the `Dark_mode` directory for a practical example you can copy, test, and improve.
