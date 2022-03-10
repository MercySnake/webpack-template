import '../css/index.css';
import img from '../images/blank.gif';

const names = 'webpack';
const str = `你好 ${names} !`;
console.log(str);

const myimg = new Image();
myimg.src = img;
document.body.appendChild(myimg);
