// Your tasks:
// 1. Find the parent element of a cat and log it to the console.
let cat = document.querySelector('.cat');
console.log(cat.parentElement);
// 2. List all the children of the cat’s parent and log them.
let catParent = cat.parentElement;
let parentChildren = Array.from(catParent.children);
parentChildren.forEach(c => console.log(c));
// 3. Identify the cat’s parent's next sibling in the tree and log it.
console.log(catParent.nextElementSibling);
