declare module 'highlight.js/lib/core' {
    import hljs from 'highlight.js';
    export default hljs;
}

declare module 'highlight.js/lib/languages/kotlin' {
    import {LanguageFn} from 'highlight.js';
    const kotlin: LanguageFn;
    export default kotlin;
}
