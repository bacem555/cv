 
import './App.css';
//eslint-disable-next-line
// import aboutme from './aboutme'


function App() {
  const  trainings=['master s degree in telecommunications from fss','PHP Training','fulls stack js training']
  const pics=['html.png','css.png','js.png','Php.png','React.png','wordpress.png']
  const lang=['ara.png' ,'fra.jpg','eng.jpg']
  return (
    <div className="App">
      <header className='header'><div className='name'>Becem jarboui </div> <br />
      I am <span className='web'>web developper
      </span></header>
       
      <section className='about'>
       <h1>About me</h1> 
       <p>Passionate about web architecture and web 
        performance optimization, PHP, Wordpress,
         blogs, HTML and CSS are part
         of my daily reading.

. After following an intensive 6-month training 
in web development (HTML5, CSS3, JavaScript, 
PHP, MySQL), I participated in the development of a few websites

Why web development? Quite simply because creating websites in collaboration with designers, salespeople and programmers, constantly improving the user experience and conversion, testing, seeing what works and optimizing is what motivates me the most. I like being confronted with technical problems or difficulties, thinking about solutions and then solving them. I am passionate about all the new developments in HTML/CSS and enjoy implementing them when they bring real added value</p>
      </section>
      <section className='Training'>
        <h1>Training</h1>
        <ul>
        { trainings.map(i=><li>{i}</li>)}
        </ul>

      </section>
      <section className='Skills'>
        <h1>Skills</h1>
        <div className="box1">
         {
            pics.map(i=> <div className='box11'><img src={process.env.PUBLIC_URL+ i} alt="ft" id="img1" /> </div>)
          }
          
        </div>
      </section>
      <section className='languages'>
        <h1>Speaking languages</h1>
        <div className='box2'>
        {
            lang.map(i=><div className='box22'> <img src={process.env.PUBLIC_URL+ i} alt="fti"  id="img2"/> </div>)
          }
          </div>

      </section>
      <footer>
        <h1>contact me</h1>
        <img src={process.env.PUBLIC_URL+'tel.png'} alt=""  id="img3" /> <span className='tel'>25802578</span>
       <a href="https://www.google.com/intl/fr/gmail/about/" ><img src={process.env.PUBLIC_URL+'gmail.jpg'} alt="" id="img3" /></a> <span className='gmail'>bacembossed@gmail.com </span>
      </footer>
        
    </div>
  );
}

export default App;
