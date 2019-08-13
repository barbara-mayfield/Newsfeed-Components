/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


  // Step 1: Write a function that will create a menu component as seen below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>  
  
  function createMenu(array){
    // Pass the function an array as it's only argument.
    const menu = document.createElement('div');
    const menuUl = document.createElement('ul');
    menu.classList.add('menu');
    
    // Step 2: Iterate over the array creating a list item <li> element for each item in the array. Add those items to the <ul>
    for (i = 0; i < array.length; i++){
      const menuLi = document.createElement('li');
      menuLi.textContent = array[i];
      menuUl.appendChild(menuLi);
    }
    
    // Step 3: Using a DOM selector, select the menu button currently on the DOM.
    const menuButton = document.querySelector('.menu-button')

    // Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
    menuButton.addEventListener('click', e => {e.target.classList.toggle('menu--open')});
    
    menuButton.appendChild(menu);
    menu.appendChild(menuUl);

    // Step 5: return the menu component.
    return menu;
  }

  // Step 6: add the menu component to the DOM.
  
  createMenu(menuItems);
  console.log(createMenu(menuItems));
  
  
  
  


  