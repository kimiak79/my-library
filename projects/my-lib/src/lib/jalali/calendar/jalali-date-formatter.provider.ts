import { Injectable } from '@angular/core';
import { CalendarDateFormatterInterface, DateAdapter, DateFormatterParams } from 'angular-calendar';
import moment from 'moment-jalaali';
import { formatDate } from '@angular/common';

@Injectable()
export class CalendarJalaliDateFormatter    implements CalendarDateFormatterInterface {
    constructor(
        protected dateAdapter: DateAdapter
    ) { }

    /**
     * The month view header week day labels
     */
    public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
        return formatDate(date, 'EEEE', locale);
    }

    /**
     * The month view cell day number
     */
    public monthViewDayNumber({ date, locale }: DateFormatterParams): string {
        return moment(date)
            .locale(locale)
            .format('jD');
    }

    /**
     * The month view title
     */
    public monthViewTitle({ date, locale }: DateFormatterParams): string {
        const m = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان',
            'آذر', 'دی', 'بهمن', 'اسفند',
        ]
        return m[moment(date).format('jM') - 1]+ ' ' + moment(date).format('jYYYY');
    }

    /**
     * The week view header week day labels
     */
    public weekViewColumnHeader({ date, locale }: DateFormatterParams): string {
        return formatDate(date, 'EEEE', locale);
    }

    /**
     * The week view sub header day and month labels
     */
    public weekViewColumnSubHeader({
        date,
        locale
    }: DateFormatterParams): string {
        const m = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان',
            'آذر', 'دی', 'بهمن', 'اسفند',
        ]
        return moment(date).format('jD') + ' ' + m[moment(date).format('jM') - 1] ;
    }

    /**
     * The week view title
     */
    public weekViewTitle({
        date,
        locale,
        weekStartsOn,
        excludeDays,
        daysInWeek
    }: DateFormatterParams): string {
        weekStartsOn = 6;
        const m = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان',
            'آذر', 'دی', 'بهمن', 'اسفند', 
        ]
        const format = d => {
            return moment(d).format('jD') + ' ' + m[moment(d).format('jM') - 1] + ' ' + moment(d).format('jYYYY');
        }
        return format(moment(date).startOf('week').isoWeekday(weekStartsOn).toDate()) + ' - ' + format(moment(date).endOf('week').isoWeekday(weekStartsOn).toDate())
    }

    /**
     * The time formatting down the left hand side of the week view
     */
    public weekViewHour({ date, locale }: DateFormatterParams): string {
        return formatDate(date, 'h a', locale);
    }

    /**
     * The time formatting down the left hand side of the day view
     */
    public dayViewHour({ date, locale }: DateFormatterParams): string {
        return formatDate(date, 'h a', locale);
    }

    /**
     * The day view title
     */
    public dayViewTitle({ date, locale }: DateFormatterParams): string {
        const m = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان',
            'آذر', 'دی', 'بهمن', 'اسفند',
        ]
        return formatDate(date, 'EEEE, ', locale)+moment(date).format('jD') + ' ' + m[moment(date).format('jM') - 1] + ' ' + moment(date).format('jYYYY');
    }
}
