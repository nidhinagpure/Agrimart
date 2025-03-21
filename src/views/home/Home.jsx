import './../home/Home.css';
import Cards , { FreshFood } from '../../componets/homecards/HomeCard';
import Pear from '../../componets/homecards/pear.png';
import Grapes from '../../componets/homecards/grape.png';
import Peach from '../../componets/homecards/peach.png';
import Apple from '../../componets/homecards/apple.png';
import Brocoli from '../../componets/homecards/brocoli.png';
import Strawberi from '../../componets/homecards/straw..png';
import lettuce from '../../componets/homecards/lettuce..png';


export default function HomeCard(){
    return(
        <div>
       <div className="Cards">
        <Cards name = "Pear" image ={Pear} title= "Pears are juicy and sweet, a healthy and delicious snack that you can enjoy anytime."/>
        <Cards name = "Grapes" image ={Grapes} title= "Grapes are small, round fruits that come in bunches. They are perfect for snacking or making wine."/>
        <Cards name = "Peach" image ={Peach} title= "Peaches are soft and sweet with a fuzzy skin, commonly used in desserts, jams, and summer treats."/>
        <Cards name = "Apple" image ={Apple} title= "Apples are crisp and refreshing, available in many varieties. They are used in a wide range of recipes."/>
        </div> 
        <div className='fresh-Cards'>
        <FreshFood name = "Fresh Food" title ="Healthy Food" image = {Brocoli} heading ="Get special discount on" headings="A healthy vegetable"/>
        <FreshFood name = "Fresh Food" title ="Healthy Food" image = {Strawberi} heading ="Get special discount on"headings="A delicious fruit"/>
        <FreshFood name = "Fresh Food" title ="Healthy Food" image = {lettuce} heading ="Get special discount on"headings="A healthy vegetable"/>
        </div>
      </div>
    )
}