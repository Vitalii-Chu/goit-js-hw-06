const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

[...categoriesEl].map(element => {
    const titleEl = element.querySelectorAll('h2');

    [...titleEl].map(title => {
        console.log(`Category ${title.textContent}`);
    })
    console.log("Elements:", element.querySelectorAll('li').length);

});





