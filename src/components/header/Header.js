import { useState } from 'react';
import Wrapper from './style';
import useGithub from '../../hooks/github-hooks';

export default function Header() {
    const { getUser } = useGithub();
    const [ username, setUsername ] = useState();


    const handleSubmit = () => {
        if(!username) return;

        return getUser(username);
    };

    return (
        <header>
            <Wrapper>
                <input 
                    type="text"
                    placeholder="Digite o username para pesquisar..."
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit} >Buscar</button>
            </Wrapper>
        </header>
    )
}
