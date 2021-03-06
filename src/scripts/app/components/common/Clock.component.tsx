import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { useInterval } from "../../hooks/useInterval";
import {
    secondsToMilliseconds,
} from "../../utils/number";
import classNames from "classnames";
import { Moon, Sun } from "react-feather";


const Clock: React.FC = () => {
    const [time, setTime] = React.useState<Dayjs>(dayjs());
    const night_time = 20;
    const is_night = time.hour() >= night_time;

    console.log(is_night);
    useInterval(() => {
        setTime(dayjs());
    }, secondsToMilliseconds(1));

    return (
        <div className={`clock`}>
            <h1>{time.format("HH:mm:ss")}</h1>
            <h3>{time.format("YYYY-MM-DD")}</h3>
            <span>{is_night && <Moon />}</span>
            <span>{!is_night && <Sun />}</span>

        </div>
    );
};

export default Clock;