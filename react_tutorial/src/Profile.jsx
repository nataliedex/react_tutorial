import { getImageUrl } from './utils'

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  }
}

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

const chemists = people.filter(person => 
  person.profession === "chemist"
);

const listItems = chemists.map(person => 
  <li>
    <p>
      <b>{person.name}</b>
      {' ' + person.profession + ' '}
      known for {person.profession}
    </p>
  </li>
);

function Avatar(props){

  let person = props.person;
  let size = props.size;

  return (
    <>
      <img 
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
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


        
        
        <Avatar 
          person={{ name: 'Aklilu Lemma', imageId: 'lICfvbD' }}
          size={150}
        />
        <Avatar 
          person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
          size={200}
        />

      </>
      
    );
  }