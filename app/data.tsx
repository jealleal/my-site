import Link from 'next/link';
import { ProjectProp } from './components/projectCard.module';

/* eslint-disable @next/next/no-img-element */
const quaasr = (
    <>
        Мощный мультитул для{' '}
        <a href="https://roblox.com/" target="_blank">
            Roblox
        </a>
        , предоставляющий инструменты для работы с куки, обхода защиты, автоматизации и анализа аккаунтов.
    </>
);

const quaasr_more = (
    <>
        <p>Quasar — многофункциональный Python-инструмент для Roblox с возможностями:</p>
        <ul>
            <li>✅ Проверка и валидация cookies Roblox</li>
            <li>✅ Обход возрастных ограничений и 2FA</li>
            <li>✅ Массовая проверка cookies</li>
            <li>✅ Автоматический сбор бесплатных предметов</li>
            <li>✅ Поиск свободных групп</li>
            <li>✅ Инструменты для анализа аккаунтов</li>
            <li>✅ Обновление и рефреш cookies</li>
            <li>✅ Инъектор скриптов</li>
        </ul>
        <p>Интерфейс: консольное приложение с ASCII-артом, цветным меню и прогресс-барами.</p>
        <p>Технологии: Python, requests, threading, tqdm, rich console.</p>
    </>
);

export const projects = [
    {
        id: 'quasar',
        title: 'Quasar Multitool',
        creation_date: '01.06.2023',
        tags: ['Python', 'Roblox', 'Automation', 'Security', 'Multitool', 'Console'],
        icon: {
            url: '/static/quasar.jpg',
            color: '#53377a'
        },
        short_description: quaasr,
        full_description: quaasr_more,
        links: [
            {
                title: 'Сайт',
                url: 'https://quasar.gt.tc/'
            },
            {
                title: 'GitHub организации',
                url: 'https://github.com/QuasarRBX'
            },
            {
                title: 'Исходный код',
                url: 'https://github.com/QuasarRBX/Quasar'
            }
        ]
    }
];

export const projects: ProjectProp[] = [
    {
        id: 'quasar',
        title: 'Quasar Multitool',
        creation_date: '01.06.2023',
        tags: ['Python', 'Roblox', 'Cookie', 'Multitool'],
        icon: {
            url: '/static/quasar.jpg',
            color: '#53377a'
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

