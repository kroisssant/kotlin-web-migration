import GlobalHeader from '@jetbrains/kotlin-web-site-ui/dist/header.js';
import '@jetbrains/kotlin-web-site-ui/dist/header.css';

interface HeaderProps {
    productWebUrl?: string;
    hasSearch?: boolean;
    dropdownTheme?: string;
    currentUrl?: string;
}

const Header = (props: HeaderProps) => {
    return <GlobalHeader {...props} />;
};

export default Header;
