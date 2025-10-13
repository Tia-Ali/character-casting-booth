# JavaScript DOM Manipulation Guide

## What is the DOM?

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects, allowing JavaScript to interact with the page.

## Basic DOM Manipulation

### Selecting Elements

```javascript
// By ID
const header = document.getElementById('header');

// By class name (returns HTMLCollection)
const items = document.getElementsByClassName('item');

// By tag name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName('p');

// Modern methods (returns NodeList)
const queryDivs = document.querySelectorAll('div.container');
const firstMatch = document.querySelector('.special');
```

### Modifying Content

```javascript
// Change text content
element.textContent = 'New text';

// Change HTML content (be careful with XSS)
element.innerHTML = '<strong>Bold text</strong>';

// Change attributes
imgElement.src = 'new-image.jpg';
linkElement.href = 'https://example.com';
```

### Changing Styles

```javascript
// Direct style modification
element.style.color = 'blue';
element.style.backgroundColor = '#f0f0f0';

// Using classList
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('visible');

// Multiple styles at once
element.style.cssText = 'color: red; font-size: 20px;';
```

## Creating and Modifying Elements

### Creating New Elements

```javascript
// Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World!';

// Append to existing element
document.body.appendChild(newDiv);

// Insert before another element
parentElement.insertBefore(newDiv, referenceElement);

// Clone existing element
const clonedElement = existingElement.cloneNode(true);
```

### Removing Elements

```javascript
// Remove child element
parentElement.removeChild(childElement);

// Modern way (IE11+)
element.remove();
```

## Working with Events

### Event Listeners

```javascript
// Remove child element
parentElement.removeChild(childElement);

// Modern way (IE11+)
element.remove();
```

#### Common Event Types

- click - Mouse click
- dblclick - Double click
- mouseenter/mouseleave - Hover effects
- keydown/keyup - Keyboard input
- submit - Form submission
- load - Page or image loaded
- scroll - Page scrolling

## Forms and Input Handling

### Accessing Form Data

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload
  
  // Get form values
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  
  console.log({ username, password });
});
```

### Input Events

```javascript
const input = document.querySelector('input');

input.addEventListener('input', (e) => {
  console.log(`Current value: ${e.target.value}`);
});

input.addEventListener('change', (e) => {
  console.log('Final value:', e.target.value);
});
```

## Practical DOM Example - Interactive List

```javascript
<ul id="myList">
  <li>First item</li>
</ul>
<input type="text" id="newItem">
<button id="addButton">Add Item</button>

<script>
  const list = document.getElementById('myList');
  const newItemInput = document.getElementById('newItem');
  const addButton = document.getElementById('addButton');

  addButton.addEventListener('click', () => {
    if (newItemInput.value.trim()) {
      const li = document.createElement('li');
      li.textContent = newItemInput.value;
      list.appendChild(li);
      newItemInput.value = '';
    }
  });
</script>
```

### DOM Cheat Sheet

|Action|Method/Property|
|---|---|
|Select by ID|document.getElementById()|
|Select by class|document.getElementsByClassName()|
|Select by tag|document.getElementsByTagName()|
|Query selector|document.querySelector()|
|Query all|document.querySelectorAll()|
|Create element|document.createElement()|
|Add class|element.classList.add()|
|Remove class|element.classList.remove()|
|Toggle class|element.classList.toggle()|
|Get/set text|element.textContent|
|Get/set HTML|element.innerHTML|
|Get/set attribute|element.getAttribute()/setAttribute()|
|Add event listener|element.addEventListener()|
|Remove event listener|element.removeEventListener()|
|Append child|parent.appendChild()|
|Remove child|parent.removeChild()|
