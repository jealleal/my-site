import { NextResponse } from 'next/server';

const capitalize = (str: string) =>
    String(str).charAt(0).toUpperCase() + String(str).slice(1);

export async function GET() {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather` +
            `?lat=55.19` +
            `&lon=30.23` +
            `&appid=9112eb3568f9caa8e4407f7e348fcb71` +
            `&units=metric` +
            `&lang=ru`,
        {
            cache: 'force-cache',
            next: {
                revalidate: 300
            }
        }
    );

    if (!response.ok) throw Error('Cannot fetch weather');
    const json = await response.json();

    return NextResponse.json({
        temp: json.main.temp,
        condition: capitalize(json.weather[0].description),
        icon: json.weather[0].icon.slice(0, 2)
    });
}
