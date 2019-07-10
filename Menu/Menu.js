/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];



/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.*/

  const body = document.querySelector('body');

  body.appendChild(createMenu(menuItems));

  function createMenu(array) {
    //define new elements
    const menu = document.createElement('div');
    const menuList = document.createElement('ul');
    

    //add structure of elements
    body.appendChild(menu);
    menu.appendChild(menuList);

    //set class names
    menu.classList.add('menu');
    

    //iterate over array
    array.forEach(item => {
      const menuLI = document.createElement('li');
      menuList.appendChild(menuLI);
      menuLI.classList.add('li');
      menuLI.textContent = item;
    });

    //select button
    const menuButton = document.querySelector('.menu-button');

    //add event handler to button
    menuButton.addEventListener('click', event => {
      menu.classList.toggle('menu--open');
    })

    return menu;

  }

 /* Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
