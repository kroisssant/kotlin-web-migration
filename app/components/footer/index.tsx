import GlobalFooter from '@jetbrains/kotlin-web-site-ui/dist/footer.js';
import '@jetbrains/kotlin-web-site-ui/dist/footer.css';
import { ThemeProvider } from '@rescui/ui-contexts';

// footer.js pre-bundle uses a separate @rescui/ui-contexts instance (CJS require);
// className forces dark background on SSR until ThemeProvider hydrates on the client.
const Footer = () => (
    <ThemeProvider theme="dark">
        <GlobalFooter className="ktl-footer-module_footer-dark-theme_1lVqh" />
    </ThemeProvider>
);

export default Footer;
