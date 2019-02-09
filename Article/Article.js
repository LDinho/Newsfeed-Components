// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

/*
To add the new HTML content, had to add the new added code on top here
before the class Article so the newDiv can inherit
all the proper CSS styling (especially for the expand button).
 */

const selectOne = tag => document.querySelector(tag);
const selectAll = tag => document.querySelectorAll(tag);
const createEle = tag => document.createElement(tag);

const articleContainer = selectOne('.articles');

const createElementAndAppend = ({tag, attributes = {}, content, targetElement, styles = {}}) => {
  const newElement = createEle(tag);
  Object.keys(attributes).forEach((propName) => {
    newElement.setAttribute(propName, attributes[propName]);
  });
  newElement.textContent = content;
  Object.keys(styles).forEach((propName) => {
    newElement.style[propName] = styles[propName];
  });
  targetElement.appendChild(newElement);
}

createElementAndAppend({
  tag: 'div',
  attributes: {
    class: 'article',
  },
  targetElement: articleContainer,
});

const allArticles = selectAll('.article');
console.log('allArticles', allArticles);
console.log(allArticles[4]);

const newDiv = allArticles[4];

createElementAndAppend({
  tag: 'h2',
  content: 'First Added Article',
  targetElement: newDiv,
});

createElementAndAppend({
  tag: 'p',
  attributes: {
    class: 'date',
  },
  content: 'Nov 18th, 2020',
  targetElement: newDiv,
});

createElementAndAppend({
  tag: 'p',
  content: 'Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom.',
  targetElement: newDiv,
});

createElementAndAppend({
  tag: 'span',
  attributes: {
    class: 'expandButton',
  },
  targetElement: newDiv,
});

class Article {
  constructor(article) {
    // console.log(article);
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.article.querySelector('.expandButton');
    // console.log('ExpandButton:',this.expandButton)
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.

    // Using .bind()
    // this.expandButton.addEventListener('click', this.expandArticle.bind(this))

    // Using arrow function
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('article-open');
  }
}

/* START HERE:

- Select all classes named ".article" and assign that value to the articles variable.

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article')
                       .forEach(article => new Article(article));
