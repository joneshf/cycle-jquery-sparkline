import $ from 'jquery';
import sparkline from 'jquery-sparkline';

export const sparklineDriver = (selector, options) => values$ =>
    values$.forEach(values => $(selector).sparkline(values, options))
