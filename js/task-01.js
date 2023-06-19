//Скільки елем. в ul
const allCategoryEl = document.querySelectorAll('#categories .item');
// console.log(allCategoryEl);

const allCategoryLengthEl = allCategoryEl.length;
console.log(`Number of categories: ${allCategoryLengthEl}`)

//Заголовок і кількість li
allCategoryEl.forEach(li => {
    const title = li.querySelector('h2').textContent
    const countEl = li.querySelectorAll('li').length
    console.log(`Category: ${title}\nElements: ${countEl}`)
})