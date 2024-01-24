import {useParams} from 'react-router-dom';
export default function Profile() {
     const { name } = useParams();

    return (
        <div>
            <h1>perfil de {name}</h1>
        </div>
    );
};
