import WrapperLayout from './style';

import Header from '../header/Header';

export default function Layout({ children }) {
    return (
        <WrapperLayout>
            <Header />
            { children }
        </WrapperLayout>
    )
}
