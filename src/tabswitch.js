export { setHomePage, setMenuPage, setupTabSwitch};

const context = document.querySelector('#content');

const homePage = `
<div>
    <h3>LOGO</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati et vero, veritatis harum modi iure, deleniti, omnis nihil adipisci quis? Eum placeat error sed odio a pariatur quidem repudiandae!</p>
    <img src="/src/images/drinks.jpg" alt="Image of drinks" width="400px">
</div>
`

const menuPage = `
<div>
    <h3>Item1</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus aperiam distinctio ratione eaque voluptate sapiente.</p>

    <h3>Item2</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, reprehenderit.</p>

    <h3>Item3</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, cupiditate ratione!</p>
</div>
`

/**
 * Converts strings to html
 * @param {String} html 
 * @returns html code
 */
function HTMLConverter(html) {
    const templete = document.createElement("template");
    templete.innerHTML = html.trim();
    return templete.content.firstElementChild;
}

function setHomePage(){
    context.textContent = '';
    const html = HTMLConverter(homePage);
    context.appendChild(html);
}

function setMenuPage(){
    context.textContent = '';
    const html = HTMLConverter(menuPage);
    context.appendChild(html);
}

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
/**
 * The function will set up the eventlisteners to reduce code in the main.js file
 */
function setupTabSwitch(){
    home.addEventListener('click',setHomePage);
    menu.addEventListener('click',setMenuPage);
}