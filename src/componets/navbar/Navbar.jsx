import './../navbar/Navbar.css';
import NavLogo from './../navbar/navlogo.png';
import mainImage from './main-Image.jpeg';
import Cow from './cow.png';
import Earth from './earth.png';
import Flower from './flower.png';
import Farmer from './farm.png';
import Vegetables from './vegetable.png';
import Trak from './tract.png';
import Choose from './leaf.png';


export default function Navbar() {
    return(
      <div>
          <div className='nav-Div'>
               <span><img src={NavLogo}className='nav-Logo logo '></img></span>
          <div className='nav-section'>
            <span className='nav-Head'><a href=''className='re-line'>Home</a></span>
            <span className='nav-Head'><a href=''className='re-line'>Services</a></span>
            <span className='nav-Head'><a href=''className='re-line'>About</a></span>
            <span className='nav-Head'><a href=''className='re-line'>Bolgs</a></span>
          </div>
         </div>        
    </div>   
);
}
export function MainImage(){
    return(
        <div>
            <img src={mainImage} className='main-Image'></img>
        <div className='hero-Container'>

        <div className='hero-Text'>
          <span className='hero-head'>Agrimart<br></br> Farm Fresh Products </span>
        </div>

        <div className='hero-Content'>
          <span className='hero-paragraph'>Fresh agri products bring the goodness of nature straight to your table, ensuring quality, nutrition, and flavor in every bite .</span><br></br>
          <span className='hero-Paragraph'>Our website connects you directly with local farmers, offering a range of farm-fresh organic products delivered straight to your door.We ensure quality, sustainability, and fair pricing.</span>



          <div className='section-Icons'>
            <img src={Earth} className='hero-Icons'></img>
            <img src={Cow} className='hero-Icons'></img>
            <img src={Vegetables} className='hero-Icons'></img>
            <img src={Farmer} className='hero-Icons'></img>
            <img src={Flower} className='hero-Icons'></img>
            <img src={Trak} className='hero-Icons'></img>
          </div>

          <div className='section-Texts'>
            <p className='section-Text'>Organic<br></br>
              Farming</p>
            <p className='section-Text'>Diffrent<br></br>
              Livestock</p>
            <p className='section-Text'>Fresh<br></br>
              Vegetables</p>
            <p className='section-Text'>Farm<br></br>
              Fresh</p>
            <p className='section-Text'>Beautiful<br></br>
              Flowers</p>
            <p className='section-Text'>Modern<br></br>
              Equipment</p>
          </div>
        </div>
      </div>
      </div>
    );
}

export  function Chooseus(){
  return(
    <div>
       <div className='choose-Section'>
            <img src={Choose} className='choose-Icons'></img>
            <div className=''>
              <span className='choose'>Why  Choose Us ? </span>
              <span className='choose-Text'>By building a culture of sustainability and wholesome living, we strive for a <br></br>
                healthier you and a healthier planet.</span><br></br>
              <a href='#'className='re-line'><button type='button' className='choose-Btn'>Know more</button></a>
            </div>
            <img src={Choose} className='choose-Icons'></img>
           </div>  
    </div>
  )
} 