"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JalaliAdapter = void 0;
var moment_jalaali_1 = require("moment-jalaali");
var JalaliAdapter = /** @class */ (function () {
    function JalaliAdapter() {
    }
    JalaliAdapter.prototype.max = function (dates) {
        return moment_jalaali_1.default.max(dates.map(function (date) { return moment_jalaali_1.default(date); })).toDate();
    };
    JalaliAdapter.prototype.addDays = function (date, amount) {
        return moment_jalaali_1.default(date)
            .add(amount, 'days')
            .toDate();
    };
    JalaliAdapter.prototype.addHours = function (date, amount) {
        return moment_jalaali_1.default(date)
            .add(amount, 'hours')
            .toDate();
    };
    JalaliAdapter.prototype.addMinutes = function (date, amount) {
        return moment_jalaali_1.default(date)
            .add(amount, 'minutes')
            .toDate();
    };
    JalaliAdapter.prototype.addSeconds = function (date, amount) {
        return moment_jalaali_1.default(date)
            .add(amount, 'seconds')
            .toDate();
    };
    JalaliAdapter.prototype.differenceInDays = function (dateLeft, dateRight) {
        return moment_jalaali_1.default(dateLeft).diff(moment_jalaali_1.default(dateRight), 'days');
    };
    JalaliAdapter.prototype.differenceInMinutes = function (dateLeft, dateRight) {
        return moment_jalaali_1.default(dateLeft).diff(moment_jalaali_1.default(dateRight), 'minutes');
    };
    JalaliAdapter.prototype.differenceInSeconds = function (dateLeft, dateRight) {
        return moment_jalaali_1.default(dateLeft).diff(moment_jalaali_1.default(dateRight), 'seconds');
    };
    JalaliAdapter.prototype.endOfDay = function (date) {
        return moment_jalaali_1.default(date)
            .endOf('day')
            .toDate();
    };
    JalaliAdapter.prototype.endOfMonth = function (date) {
        return moment_jalaali_1.default(date)
            .endOf('jMonth')
            .toDate();
    };
    JalaliAdapter.prototype.endOfWeek = function (date, options) {
        if (options.weekStartsOn)
            return moment_jalaali_1.default(date).isoWeekday(options.weekStartsOn).endOf('week').toDate();
        return moment_jalaali_1.default(date)
            .endOf('week')
            .toDate();
    };
    JalaliAdapter.prototype.getDay = function (date) {
        return moment_jalaali_1.default(date).day();
    };
    JalaliAdapter.prototype.getMonth = function (date) {
        return moment_jalaali_1.default(date).jMonth();
    };
    JalaliAdapter.prototype.isSameDay = function (dateLeft, dateRight) {
        return moment_jalaali_1.default(dateLeft).isSame(moment_jalaali_1.default(dateRight), 'day');
    };
    JalaliAdapter.prototype.isSameMonth = function (dateLeft, dateRight) {
        return moment_jalaali_1.default(dateLeft).isSame(moment_jalaali_1.default(dateRight), 'jMonth');
    };
    JalaliAdapter.prototype.isSameSecond = function (dateLeft, dateRight) {
        return moment_jalaali_1.default(dateLeft).isSame(moment_jalaali_1.default(dateRight), 'second');
    };
    //max(...dates: Array<Date | string>): Date {
    //    return moment.max(dates.map(date => moment(date))).toDate();
    //}
    JalaliAdapter.prototype.setHours = function (date, hours) {
        return moment_jalaali_1.default(date)
            .hours(hours)
            .toDate();
    };
    JalaliAdapter.prototype.setMinutes = function (date, minutes) {
        return moment_jalaali_1.default(date)
            .minutes(minutes)
            .toDate();
    };
    JalaliAdapter.prototype.startOfDay = function (date) {
        return moment_jalaali_1.default(date)
            .startOf('day')
            .toDate();
    };
    JalaliAdapter.prototype.startOfMinute = function (date) {
        return moment_jalaali_1.default(date)
            .startOf('minute')
            .toDate();
    };
    JalaliAdapter.prototype.startOfMonth = function (date) {
        return moment_jalaali_1.default(date)
            .startOf('jMonth')
            .toDate();
    };
    JalaliAdapter.prototype.startOfWeek = function (date, options) {
        if (options.weekStartsOn)
            return moment_jalaali_1.default(date).startOf('week').isoWeekday(options.weekStartsOn).toDate();
        return moment_jalaali_1.default(date)
            .startOf('week')
            .toDate();
    };
    JalaliAdapter.prototype.getHours = function (date) {
        return moment_jalaali_1.default(date).hours();
    };
    JalaliAdapter.prototype.getMinutes = function (date) {
        return moment_jalaali_1.default(date).minutes();
    };
    JalaliAdapter.prototype.addWeeks = function (date, amount) {
        return moment_jalaali_1.default(date)
            .add(amount, 'week')
            .toDate();
    };
    JalaliAdapter.prototype.addMonths = function (date, amount) {
        return moment_jalaali_1.default(date)
            .add(amount, 'jMonth')
            .toDate();
    };
    JalaliAdapter.prototype.subDays = function (date, amount) {
        return moment_jalaali_1.default(date)
            .subtract(amount, 'days')
            .toDate();
    };
    JalaliAdapter.prototype.subWeeks = function (date, amount) {
        return moment_jalaali_1.default(date)
            .subtract(amount, 'week')
            .toDate();
    };
    JalaliAdapter.prototype.subMonths = function (date, amount) {
        return moment_jalaali_1.default(date)
            .subtract(amount, 'jMonth')
            .toDate();
    };
    JalaliAdapter.prototype.getISOWeek = function (date) {
        return moment_jalaali_1.default(date).isoWeek();
    };
    JalaliAdapter.prototype.setDate = function (date, dayOfMonth) {
        return moment_jalaali_1.default(date)
            .jDate(dayOfMonth)
            .toDate();
    };
    JalaliAdapter.prototype.setMonth = function (date, month) {
        return moment_jalaali_1.default(date)
            .jMonth(month)
            .toDate();
    };
    JalaliAdapter.prototype.setYear = function (date, year) {
        return moment_jalaali_1.default(date)
            .jYear(year)
            .toDate();
    };
    JalaliAdapter.prototype.getDate = function (date) {
        return moment_jalaali_1.default(date).date();
    };
    JalaliAdapter.prototype.getYear = function (date) {
        return moment_jalaali_1.default(date).year();
    };
    return JalaliAdapter;
}());
exports.JalaliAdapter = JalaliAdapter;
//# sourceMappingURL=jalali-date-adapter.provider.js.map