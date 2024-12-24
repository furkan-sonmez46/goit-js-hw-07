let categories = document.querySelectorAll('li.item');
categories = [...categories];

console.log(`Number of categories : ${categories.length}`);

categories.forEach(item => {
  const category = item.querySelector('h2').textContent;

  const elementCount = item.querySelectorAll('li').length;

  console.log(`Category: ${category}`);
  console.log(`Elements: ${elementCount}`);
});
