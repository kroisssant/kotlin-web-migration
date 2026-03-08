import type {ReactNode} from 'react';

import './index.scss';

export function Section({children, className}: {children: ReactNode; className?: string}) {
    return <section className={'kto-layout-section' + ' ' + className}>
        {children}
    </section>
}

export function Container({children}: {children: ReactNode}) {
    return <div className="kto-layout-container">
        {children}
    </div>
}
