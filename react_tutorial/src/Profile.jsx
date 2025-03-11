import { getImageUrl } from './utils'

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  }
}

function Avatar(props){

  let person = props.person;
  let size = props.size;

  return (
    <img 
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
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