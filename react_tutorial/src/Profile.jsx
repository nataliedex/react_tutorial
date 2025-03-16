import { getImageUrl } from './utils'
import { people } from './data'

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  }
}



const chemists = people.filter(person => 
  person.profession === "chemist"
);

const listItems = chemists.map(person => 
  <li>
    <img 
      src={getImageUrl(person)}
      alt={person.name}
    />
    <p>
      <b>{person.name}</b>
      {' ' + person.profession + ' '}
      known for {person.accomplishment}
    </p>
  </li>
);

function Avatar(){

  return (
    <>
      <ul>{listItems}</ul>
    </>
    
  );
}

export default function Profile() {
    return (
      <>
        <div style={ person.theme }>
          <h1>{ person.name }</h1>
          <img 
            className="avatar"
            src="https://i.imgur.com/7vQD0fPs.jpg"
            alt="image of { person.name }"
          />
          <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
          </ul>
        </div>


        
        
        <Avatar />
  

      </>
      
    );
  }