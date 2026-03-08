interface CardData {
    id: number;
    title: string;
    subTitle: string;
    link: string;
    img: string;
}

export const cardsData: CardData[] = [
    {
        id: 1,
        title: 'Multiplatform Mobile',
        subTitle: 'Share the logic of your Android and iOS apps while keeping UX native',
        link: '#',
        img: '/images/index/good-for/mobile.svg',
    },
    {
        id: 2,
        title: 'Server-side',
        subTitle: 'Modern development experience with familiar JVM technology',
        link: '#',
        img: '/images/index/good-for/server-side.svg',
    },
    {
        id: 3,
        title: 'Web Frontend',
        subTitle: 'Extend your projects to web',
        link: '#',
        img: '/images/index/good-for/web.svg',
    },
    {
        id: 4,
        title: 'Android',
        subTitle: 'Recommended by Google for building Android apps',
        link: '#',
        img: '/images/index/good-for/android.svg',
    },
];
