import "./../../componets/homecards/HomeCard.css";
export default function Cards(props) {
    const {name,image,title} = props

    return(
      <div>
        <div className="cards-Container">
          <p className="Card-name">{name}</p>
          <img src={image} className='card-Image'/>
          <p className='Card-Title'>{title}</p>
        </div>
      </div>
      
    );
  }

  export function FreshFood(props) {
    const {name,image,title,heading,headings} = props
    return (
       <div>
            <div className='container' >

                <div className='image-Container'>
                  <img src={image} className='image'></img> 
                </div>

                <div className='text-Container'>
                    <span className="name">{name} </span><br></br> 
                    <span className="title">{title}</span><br></br>
                    <span className="heading">{heading}</span><br></br>
                    <span className="heading">{headings}</span>
                    <div className="btn">
                    <button className='btn-Knowmore'>Know more</button>
                    </div>
                </div>
            </div>
           
       </div>
    );
}