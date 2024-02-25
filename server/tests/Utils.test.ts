import {color, mWhTokWhPrice, dateSlice, jsonToArray} from "../components/Utils";

describe('testing color',() => {
    it('checks color function output in different cases',() => {
        let price = 180;
        let min = 0;
        let max = 300;
        let data = color(price, min, max);
        expect(data).toBe('color: #FFF633');

        min = 180;
        data = color(price, min, max);
        expect(data).toBe('color: #3CFF33');

        price = 300;
        data = color(price, min, max);
        expect(data).toBe('color: #FF334F');
    })
})

describe('testing mWhTokWhPrice',() => {
    it('checks priceKWH and color',() => {
        const priceMWh = 1500;
        const minMWh = 100;
        const maxMWh = 2000;
        const data = mWhTokWhPrice(priceMWh, minMWh, maxMWh);
        expect(data.priceKWh).toBe(150);
        expect(data.color).toBe('color: #FFF633');
    })
})

describe('testing dateSlice', () => {
    it('checks that required characters are included',() => {
        const date = '2000-01-01T23:00:00:00';
        const data = dateSlice(date);
        expect(data).toBe('2000-01-01T23');
    })
})

describe('testing jsonToArray', () => {
    const myData = [{"date":"2024-01-07T22:00:00.000Z","value":77.698},
    {"date":"2024-01-07T23:00:00.000Z","value":99.126}];
    const data = jsonToArray(myData);
    expect(data[0]).toStrictEqual(['Aika', 'Hinta [c/kWh]', { role: 'style' }]);
    expect(data[1]).toStrictEqual([ '2024-01-07T22', 7.77, 'color: #3CFF33' ]);
    expect(data[2]).toStrictEqual([ '2024-01-07T23', 9.91, 'color: #FF334F' ]);   
})