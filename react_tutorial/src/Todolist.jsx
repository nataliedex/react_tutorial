export default function TodoList() {
    const avatar = 'https://i.imgur.com/yXOvdOSs.jpg';
    const description = 'Hedy Lamarr';

    const today = new Date();
    function formatDate(date){
        return new Intl.DateTimeFormat(
            'en-US',
            { weekday: 'long' },

        ).format(date);
    }

    return (
        <div>
            <h1>To Do List for { formatDate(today) }</h1>
            <img 
                src={ avatar }
                alt= { description }
                className="photo"
            />
            <ul style = {{
                backgroundColor: 'black',
                color: 'pink',
            }}
            >
                <li>{ description } Invent new traffic lights</li>
                <li>Rehearse a movie scene with { description }</li>
                <li>Improve { description }'s spectrum technology</li>
            </ul>


        </div>
    );
}