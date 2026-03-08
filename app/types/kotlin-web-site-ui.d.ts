declare module '@jetbrains/kotlin-web-site-ui/dist/header.js' {
    import type {ComponentType} from 'react';
    interface GlobalHeaderProps {
        productWebUrl?: string;
        hasSearch?: boolean;
        dropdownTheme?: string;
        currentUrl?: string;
    }
    const GlobalHeader: ComponentType<GlobalHeaderProps>;
    export default GlobalHeader;
}

declare module '@jetbrains/kotlin-web-site-ui/dist/footer.js' {
    import type {ComponentType} from 'react';
    const GlobalFooter: ComponentType<Record<string, unknown>>;
    export default GlobalFooter;
}
