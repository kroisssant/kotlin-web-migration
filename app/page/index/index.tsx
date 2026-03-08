import '@rescui/typography/lib/font-jb-sans-auto.css';

import {ThemeProvider} from '@rescui/ui-contexts';

import {HeaderSection} from './header-section/index';
import {LatestFromKotlinSection} from './latest-from-kotlin-section/index';
import {WhyKotlinSection} from './why-kotlin-section/index';
import {UsageSection} from './usage-section/index';
import {StartSection} from './start-section/index';

import './index.scss';
import '../../css/grid.scss';

function OverviewPageContent() {
    return <div className="overview-page">
        <HeaderSection/>
        <LatestFromKotlinSection/>
        <WhyKotlinSection/>
        <UsageSection/>
        <StartSection/>
    </div>
}

export function OverviewPage() {
    return (
        <ThemeProvider theme="dark">
            <OverviewPageContent/>
        </ThemeProvider>
    );
}
