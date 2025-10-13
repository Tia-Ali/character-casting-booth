# JavaScript Practical Lab

## Setup Your HTML Page

Create a file called index.html and paste this starter code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Practice</title>
</head>
<body>
  <h1>Welcome to JavaScript!</h1>
  <p id="demo">Click the button to change this text.</p>
  <button onclick="changeText()">Click Me</button>

  <script>
    function changeText() {
      document.getElementById("demo").innerHTML = "You clicked the button!";
    }
  </script>
</body>
</html>
```

## Add a Calculator

Add the following below your previous code, but still within the `body` tags.

```html
<h2>Simple Calculator</h2>
<input type="number" id="num1" placeholder="Number 1">
<input type="number" id="num2" placeholder="Number 2">
<button onclick="addNumbers()">Add</button>
<p id="result"></p>

<script>
  function addNumbers() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let sum = a + b;
    document.getElementById("result").innerHTML = "Sum: " + sum;
  }
</script>
```

## Toggle Visibility

```html
<h2>Toggle Message</h2>
<p id="message">Hello, this is a hidden message!</p>
<button onclick="toggleMessage()">Toggle</button>

<script>
  function toggleMessage() {
    let msg = document.getElementById("message");
    if (msg.style.display === "none") {
      msg.style.display = "block";
    } else {
      msg.style.display = "none";
    }
  }
</script>

```

## Form Validation

```html
<h2>Form Validation</h2>
<form onsubmit="return validateForm()">
  <input type="text" id="username" placeholder="Enter username">
  <input type="submit" value="Submit">
</form>
<p id="formMessage"></p>

<script>
  function validateForm() {
    let user = document.getElementById("username").value;
    if (user === "") {
      document.getElementById("formMessage").innerHTML = "Username cannot be empty!";
      return false;
    }
    document.getElementById("formMessage").innerHTML = "Form submitted!";
    return true;
  }
</script>
```

## Challenge Section

Try these on your own:

- Create a button that changes the background color of the page.
- Make a dropdown menu that shows a message based on the selected option.
- Build a mini quiz with one question and feedback.
