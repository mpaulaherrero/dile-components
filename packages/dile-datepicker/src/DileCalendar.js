import { css } from 'lit';
import { LionCalendar } from '@lion/calendar';

export class DileCalendar extends LionCalendar {
    static get styles() {
        return [
            super.styles,
            css`
                .calendar__day-button {
                    min-width: 26px;
                    min-height: 26px;
                    background-color: var(--dile-calendar-day-background-color, rgba(90, 90, 90, 0.08));
                    color: var(--dile-calendar-day-text-color, #303030);
                    border-radius: var(--dile-calendar-day-border-radius, 2px);
                }
                .calendar__day-button[today] {
                    background-color: var(--dile-calendar-today-background-color, rgba(90, 90, 90, 0.20));
                }
                .calendar__day-button[next-month], .calendar__day-button[previous-month] {
                    color: var(--dile-calendar-out-day-text-color, #777);
                    opacity: 0.6;
                }
                .calendar__next-button , .calendar__previous-button{
                    background-color: transparent;
                    color: var(--dile-calendar-nav-buttons-color, #303030);
                    font-size: 1.1em;
                }
                @media(min-width: 350px) {
                    .calendar__day-button {
                        min-width: var(--dile-calendar-day-size, 28px);
                        min-height: var(--dile-calendar-day-size, 28px);
                    }
                }
                @media(min-width: 400px) {
                    .calendar__day-button {
                        min-width: var(--dile-calendar-day-size, 32px);
                        min-height: var(--dile-calendar-day-size, 32px);
                    } 
                }
                @media(min-width: 500px) {
                    .calendar__day-button {
                        min-width: var(--dile-calendar-day-size, 36px);
                        min-height: var(--dile-calendar-day-size, 36px);
                    } 
                }
            `
        ];
    }
}