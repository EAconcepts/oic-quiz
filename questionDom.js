const questionDom = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
      "Digital Object Model",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Which method is used to select an element by its ID in the DOM?",
    options: [
      "getElementByClass",
      "selectElement",
      "getElementById",
      "queryId",
    ],
    answer: "getElementById",
  },
  {
    question: "What is the root element of an HTML document in the DOM?",
    options: ["html tag", "body tag;", "head tag;", "document tag"],
    answer: "html tag",
  },
  {
    question:
      "Which property is used to change the content of an HTML element?",
    options: ["innerHTML", "innerText", "textContent", "textValue"],
    answer: "innerHTML",
  },
  {
    question:
      "How can you create a new HTML element in the DOM using JavaScript?",
    options: ["createElement", "newElement", "makeElement", "addElement"],
    answer: "createElement",
  },
  {
    question:
      "Which DOM method is used to remove a child node from its parent?",
    options: ["removeChild", "deleteNode", "removeNode", "detachNode"],
    answer: "removeChild",
  },
  {
    question:
      "How do you change the CSS style of an element in the DOM using JavaScript?",
    options: ["styleProperty", "modifyStyle", "setStyle", "style"],
    answer: "style",
  },
  {
    question:
      "Which method is used to append a child node to another node in the DOM?",
    options: ["appendChild", "insertChild", "addToParent", "appendNode"],
    answer: "appendChild",
  },
  {
    question: "What does the `querySelector` method do in the DOM?",
    options: [
      "Selects the first element that matches a CSS selector",
      "Selects all elements in the DOM",
      "Selects elements by their class name",
      "Selects elements by their tag name",
    ],
    answer: "Selects the first element that matches a CSS selector",
  },
  {
    question: "How do you add an event listener to an HTML element in the DOM?",
    options: ["addEventListener", "attachEvent", "listenEvent", "bindEvent"],
    answer: "addEventListener",
  },
  {
    numb: 4,
    question: "4. How do you add an item to an array in JavaScript?",
    options: [
      "array.addItem(item)",
      "array.push(item)",
      "array.insert(item)",
      "array.append(item)",
    ],
    answer: "array.push(item)",
  },
  {
    numb: 5,
    question:
      "5. Which method removes the last element from an array in JavaScript?",
    options: [
      "array.removeLast()",
      "array.pop()",
      "array.deleteLast()",
      "array.splice()",
    ],
    answer: "array.pop()",
  },
  // {
  //   question: "What is the purpose of the `window.onload` event in the DOM?",
  //   options: [
  //     "It triggers when the window is closed",
  //     "It triggers when the page is loaded",
  //     "It triggers when a button is clicked",
  //     "It triggers when the mouse moves",
  //   ],
  //   answer: "It triggers when the page is loaded",
  // },
  // {
  //   question:
  //     "What is the purpose of the `event.preventDefault()` method in the DOM?",
  //   options: [
  //     "Prevents the default behavior of an event",
  //     "Stops the event from firing",
  //     "Cancels all event listeners",
  //     "Stops the propagation of an event",
  //   ],
  //   answer: "Prevents the default behavior of an event",
  // },
  {
    question: "What is the purpose of the `event.target` property in the DOM?",
    options: [
      "It returns the event type",
      "It returns the event source element",
      "It returns the event timestamp",
      "It returns the event coordinates",
    ],
    answer: "It returns the event source element",
  },
  // {
  //   question: "What method is used to make an XMLHttpRequest in the DOM?",
  //   options: ["fetch()", "sendRequest()", "makeRequest()", "xhrRequest()"],
  //   answer: "fetch()",
  // },
  {
    question: "What is the purpose of the `localStorage` object in the DOM?",
    options: [
      "To store data locally in the browser",
      "To fetch data from a server",
      "To delete data from the DOM",
      "To store data on the server",
    ],
    answer: "To store data locally in the browser",
  },
  // {
  //   question:
  //     "What is the purpose of the `getElementByTagName` method in the DOM?",
  //   options: [
  //     "It selects elements by their class name",
  //     "It selects elements by their ID",
  //     "It selects elements by their tag name",
  //     "It selects elements by their attribute",
  //   ],
  //   answer: "It selects elements by their tag name",
  // },
  // {
  //   question: "What is the purpose of the `window.location` object in the DOM?",
  //   options: [
  //     "It represents the current browser's location",
  //     "It represents the page's content",
  //     "It represents the window size",
  //     "It represents the DOM structure",
  //   ],
  //   answer: "It represents the current browser's location",
  // },
  {
    question:
      "What is the purpose of the `document.title` property in the DOM?",
    options: [
      "It sets the document's background color",
      "It changes the document's font size",
      "It sets the document's title displayed in the browser tab",
      "It hides the document's content",
    ],
    answer: "It sets the document's title displayed in the browser tab",
  },
  // {
  //   question:
  //     "Which method is used to check if an element has a specific CSS class in the DOM?",
  //   options: ["hasClass", "containsClass", "checkClass", "hasCSSClass"],
  //   answer: "hasClass",
  // },
  // {
  //   question: "What does the term 'DOM traversal' refer to in JavaScript?",
  //   options: [
  //     "Navigating through the DOM tree to find elements",
  //     "Modifying the document's structure",
  //     "Changing the document's colors",
  //     "Styling elements with CSS",
  //   ],
  //   answer: "Navigating through the DOM tree to find elements",
  // },
];
