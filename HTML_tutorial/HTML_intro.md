# Introduction to HTML

HTML (HyperText Markup Language) is the standard language used to create webpages. It structures content on the web using elements that describe the different parts of a document — such as headings, paragraphs, links, images, and more.

This guide will walk you through the basics of HTML with simple examples you can try out in any text editor and browser.

### Basic HTML Page Structure

Every HTML document starts with a basic structure. This sets up the webpage so the browser knows how to interpret and display it.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first webpage using HTML.</p>
  </body>
</html>
```

### Headings and Paragraphs

HTML uses six levels of headings `<h1>` to `<h6>` to define titles and subtitles. Paragraphs are written using the `<p>` element.

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph of text under the subheading.</p>
```

### Links
Use the `<a>` tag to create hyperlinks that navigate to other pages or websites.

```html
<a href="https://www.example.com">Visit Example.com</a>
```

### Images

The `<img>` tag displays images. It requires the `src` attribute (image URL or file path) and an `alt` attribute (text shown if image can't load).

```html
<img src="https://via.placeholder.com/150" alt="Placeholder image">
```

### Lists

HTML supports ordered lists `<ol>` (numbered) and unordered lists `<ul>` (bullets), with each item inside a 'list item' `<li>` tag.

```html
<h3>Shopping List</h3>
<ul>
  <li>Bread</li>
  <li>Milk</li>
  <li>Eggs</li>
</ul>

<h3>Steps to Bake a Cake</h3>
<ol>
  <li>Preheat the oven</li>
  <li>Mix ingredients</li>
  <li>Bake for 30 minutes</li>
</ol>
```

### Formatting Text

You can add emphasis to text using tags like `<strong>`, `<em>`, and others.

```html
<p>This is <strong>important</strong> text.</p>
<p>This is <em>italicized</em> for emphasis.</p>
```

### Adding Line Breaks and Horizontal Rules

Use `<br>` to insert a line break and `<hr>` to insert a horizontal line.

```html
<p>First line.<br>Second line.</p>
<hr>
<p>Text after the horizontal rule.</p>
```

### Comments

Comments help you add notes in your HTML code that won’t show up on the webpage

```html
<!-- This is a comment -->
<p>This content is visible.</p>
```

### Tables

Tables organize data into rows and columns. The basic structure includes:

- `<table>`: The table itself
- `<tr>`: A table row
- `<td>`: A table cell (data)
- `<th>`: A table header cell (bold and centered by default)

```html
<h2>Class Schedule</h2>
<table border="1">
  <tr>
    <th>Day</th>
    <th>Subject</th>
    <th>Time</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Math</td>
    <td>10:00 AM</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>Science</td>
    <td>11:00 AM</td>
  </tr>
</table>
```

### Forms

Forms allow users to input data. Common elements include:

- `<input>`: For text, email, checkboxes, etc.
- `<textarea>`: For longer text.
- `<label>`: For describing inputs.
- `<select>` and `<option>`: For dropdowns.
- `<button>` or `<input type="submit">`: To submit the form.

```html
<h2>Contact Form</h2>
<form action="/submit" method="post">
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name"><br><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br><br>

  <label for="message">Message:</label><br>
  <textarea id="message" name="message" rows="4" cols="40"></textarea><br><br>

  <label for="topic">Topic:</label><br>
  <select id="topic" name="topic">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="javascript">JavaScript</option>
  </select><br><br>

  <input type="checkbox" id="subscribe" name="subscribe">
  <label for="subscribe">Subscribe to newsletter</label><br><br>

  <input type="submit" value="Send">
</form>
```

>HTML forms are commonly integrated with Query String Parameters to send user input to a server using the GET method. They are key-value pairs added to the end of a URL to pass data between web pages or to a server. They follow a question mark (?) and are separated by ampersands (&). For example, in the URL `https://example.com/search?query=books&page=2`, `query=books` and `page=2` are query string parameters. [Click here for a guide on using forms with query string parameters](tbc)



### Nesting Elements

HTML elements can be nested inside each other to build complex structures

```html
<div>
  <h2>My Favorite Book</h2>
  <p><em>The Hobbit</em> by J.R.R. Tolkien</p>
</div>
```

[Click here for an HTML Cheat Sheet for quick reference for a range of tags](HTML_tags_cheatsheet.md)