import {run} from '@cycle/core';
import {h, makeDOMDriver} from '@cycle/dom';
import {integer, nat, nearray, sampler} from 'jsverify';
import {Observable} from 'rx';
import {create} from 'virtual-dom';

import {sparklineDriver} from './cycle-sparkline';

function main({DOM, sparkline}) {
    const intent = Observable.interval(1000);
    const watline = sparkline('.wat');
    watline(intent.map(n => sampler(nat)(Math.min(60, n))));
    const wutline = sparkline('.wut', {
        chartRangeMin: 0,
        height: 100,
        type: 'line',
        width: 400,
    });
    wutline(intent.map(n => sampler(integer(225, 235))(60)));

    return {
        DOM: intent.map(_ =>
            h('div', [
                h('div.wat'),
                h('div.wut'),
            ])
        ),
    };
}

const drivers = {
    DOM: makeDOMDriver('#content'),
    sparkline: sparklineDriver,
};

run(main, drivers);
