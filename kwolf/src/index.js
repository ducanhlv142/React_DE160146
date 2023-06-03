import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const myElement = <h1>I Love JSX ahihi!</h1>;
const myElement1 = <h1>React is {5 + 5} times better with JSX</h1>;
const myElement2 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
const myElement3 = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);
const myElement4 = (
  <>
    <p>I am a fear.</p>
    <p>I am a fear too.</p>
  </>
);
const myElement5 = <input type="text5" />;
const myElement6 = <h1 className="myclass">Hello World</h1>;
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}
const myElement7 = <h1>{text}</h1>;
const y = 5;
const myElement8 = <h1>{(y) < 10 ? "Goodbye" : "Hello"}</h1>;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const allElements = (
  <React.StrictMode>
    <App />
    {myElement}
    {myElement1}
    {myElement2}
    {myElement3}
    {myElement4}
    {myElement5}
    {myElement6}
    {myElement7}
    {myElement8}
  </React.StrictMode>
);
root.render(allElements);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
