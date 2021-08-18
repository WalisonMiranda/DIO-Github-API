import App from './App';
import GithubProvider from './providers/github-provider';
import { GlobalStyle } from './styles/globalStyles';


function Providers() {
    return (
        <main>
            <GithubProvider>
                <GlobalStyle />
                <App />
            </GithubProvider>
        </main>
    )
}

export default Providers;
