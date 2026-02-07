import Link from 'next/link';
import { ProjectProp } from './components/projectCard.module';

/* eslint-disable @next/next/no-img-element */
const quaasr = (
    <>
        Хороший мультитул для{' '}
        <a href="https://roblox.com/" target="_blank">
            Roblox
        </a>{' '}
        который позволяет хорошо отрабатывать ваши куки.
    </>
);
const quaasr_more = (
    <>
        Lorem ipsum
    </>
);

export const projects: ProjectProp[] = [
    {
        id: 'quasar',
        title: 'Quasar Multitool',
        creation_date: '01.06.2023',
        tags: ['Python', 'Roblox', 'Cookie', 'Multitool'],
        icon: {
            url: '/static/ppl.png',
            color: '#a0a0a0'
        },
        short_description: quaasr,
        full_description: quaasr_more,
        links: [
            {
                title: 'Сайт',
                url: 'https://quasar.gt.tc/'
            },
            {
                title: 'Сборник всех репозиториев',
                url: 'https://github.com/QuasarRBX'
            }
        ]
    }
];

