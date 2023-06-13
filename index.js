document.getElementById('main').remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.setAttribute('id','victory');
document.body.appendChild(newHeader);


const newName= document.getElementById('victory');
newHeader.textContent = "Felix is the champion";