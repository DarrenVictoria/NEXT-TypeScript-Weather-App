import React from 'react'
import Container from './Container'
import WeatherIcon from './WeatherIcon'
import WeatherDetails, { WeatherDetailProps } from './WeatherDetails';
import { convertKelvintoCelcius } from '@/utils/convertKelvintoCelcius';

type Props = {}

export interface ForecastWeatherDetailProps extends WeatherDetailProps {
    weatherIcon: string;
    date: string;
    day: string;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    description: string;
}

export default function ForecastWeatherDetail(props: ForecastWeatherDetailProps) {
    const {
        weatherIcon = "01d",
        date = "2021-09-04 18:00:00",
        day = "Monday",
        temp = 30,
        feels_like = 30,
        temp_min = 30,
        temp_max = 30,
        description = "clear sky",
    } = props;
    
    return (
        <Container className="gap-4">
            <section className="flex gap-4 items-center px-4">
                <div className=" flex flex-col gap-1 items-center">
                    <WeatherIcon IconName={weatherIcon} />
                    <p>{date}</p>
                    <p className="text-sm">{day}</p>

                    <div className="flex flex-col px-4">
                        <span className="text-5xl">{convertKelvintoCelcius(temp ?? 0)}°</span>
                        <p className="text-xs space-x-1 whitespace-nowrap">
                            <span> Feels like</span>
                            <span>{convertKelvintoCelcius(feels_like ?? 0)}°</span>
                        </p>

                        <p className="capitalize"> {description}</p>
                    </div>
                </div>
            </section>

            {/* right */}
            <section className="overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10">
                <WeatherDetails {...props} />
            </section>
        </Container>
    );
}
