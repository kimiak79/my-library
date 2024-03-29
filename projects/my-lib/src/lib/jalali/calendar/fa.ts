/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

const u = undefined;

function plural(n: number): number {
    let i = Math.floor(Math.abs(n));
    if (i === 0 || n === 1) return 1;
    return 5;
}

export default [
    'fa',
    [['ق', 'ب'], ['ق.ظ.', 'ب.ظ.'], ['قبل\u200cازظهر', 'بعدازظهر']],
    u,
    [
        ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
        ['یکشنبه', 'دوشنبه', 'سه\u200cشنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'], u,
        ['۱ش', '۲ش', '۳ش', '۴ش', '۵ش', 'ج', 'ش']
    ],
    u,
    [
        ['ب', 'اس', 'ف', 'ار', 'خ', 'ت', 'م', 'ش', 'م', 'آب', 'آذ', 'د'],
        [
            'بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان',
            'آذر', 'دی'
        ],
        u
    ],
    [
        ['ب', 'اس', 'ف', 'ار', 'خ', 'ت', 'م', 'ش', 'م', 'آب', 'آذ', 'د'],
        [
            'بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان',
            'آذر', 'دی'
        ],
        u
    ],
    [['ق', 'م'], ['ق.م.', 'م.'], ['قبل از میلاد', 'میلادی']],
    6,
    [5, 5],
    ['y/M/d', 'd MMM y', 'd MMMM y', 'EEEE d MMMM y'],
    ['H:mm', 'H:mm:ss', 'H:mm:ss (z)', 'H:mm:ss (zzzz)'],
    ['{1}،\u200f {0}', u, '{1}، ساعت {0}', u],
    ['.', ',', ';', '%', '\u200e+', '\u200e−', 'E', '×', '‰', '∞', 'ناعدد', ':'],
    ['#,##0.###', '#,##0%', '\u200e¤ #,##0.00', '#E0'],
    'IRR',
    'ریال',
    'ریال ایران',
    {
        'AFN': ['؋'],
        'CAD': ['$CA', '$'],
        'CNY': ['¥CN', '¥'],
        'HKD': ['$HK', '$'],
        'IRR': ['ریال'],
        'MXN': ['$MX', '$'],
        'NZD': ['$NZ', '$'],
        'THB': ['฿'],
        'XCD': ['$EC', '$']
    },
    'rtl',
    plural
];