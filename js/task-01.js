const message = document.querySelectorAll(".item");
console.log("Number of categories: " + message.length);

message.forEach((category) => {
    console.log("Category: " + category.querySelector('h2').textContent);
    console.log("Elements: " + category.querySelectorAll('li').length);
 })