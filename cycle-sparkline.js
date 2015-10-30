import $ from 'jquery';
import sparkline from 'jquery-sparkline';

// sparklineDriver : () -> (String, SparklineOpts) -> Observable [Number] -> ()
export const sparklineDriver = _ => (selector, options) => values$ => {
    values$.forEach(values => $(selector).sparkline(values, options));
}
