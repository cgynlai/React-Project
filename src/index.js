import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function BookList () {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book /><Book /><Book /><Book />
      
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    
    </article>
  )
}

const Image = () => {
  return (
    <img className='isize' src="https://images-na.ssl-images-amazon.com/images/I/71UjpVwXWJL._AC_UL200_SR200,200_.jpg">
    </img>
  )
}

const Title = () => {
  return (
    <h2>How to Be Human: An Autistic Man's Guide to Life </h2>
  )
}

const Author = () => {
  return (
    <h5>Jory Fleming and Lyric Winik</h5>
  )
}


ReactDOM.render(<BookList />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
