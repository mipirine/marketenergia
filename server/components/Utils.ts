
/**
 * color function is comparing price with min and max values
 * @param {*} result 
 * @param {*} min 
 * @param {*} max 
 * @returns color codes for different price types
 */
const color = (price, min, max) => {
    if (price === min){
        return '#3CFF33';
    } else if(price === max){
        return '#FF334F';
    } else {
        return '#FFF633';
    }
  }

  /**
   * mWhTokWhPrice function calculates kWh prices and gets color code definition
   * @param {*} value 
   * @param {*} min 
   * @param {*} max 
   * @returns priceKWh, color
   */
  const mWhTokWhPrice = (priceMWh, minMWh, maxMWh) => {
    const minKWh = +(minMWh/10).toFixed(2);
    const maxKWh = +(maxMWh/10).toFixed(2);
    const priceKWh = +(priceMWh/10).toFixed(2);
    return {
        priceKWh: priceKWh,
        color: color(priceKWh, minKWh, maxKWh)
    } 
  }


/**
 * dateSlice function shortens date parameter into shorter format
 * @param {*} date 
 * @returns data in year-month-date-hour format
 */
  const dateSlice = (date) => {
    return date.slice(0, 13);
  }

 
/**
 * jsonToArray function changes json data into array format for React Chart
 * @param {*} myData 
 * @returns data array, each row with three parameters: Data, price, css color definition 
 */
  const jsonToArray = (myData) => {
    let data = [["Aika",  "Hinta [c/kWh]", { role: 'style' }]];
    const min = Math.min(...myData.map(item => item.value));
    const max = Math.max(...myData.map(item => item.value));
    for(let i = 0; i < myData.length; i++){
        let row = [];
        row.push(dateSlice(myData[i].date));
        row.push(mWhTokWhPrice(myData[i].value, min, max).priceKWh);
        row.push(mWhTokWhPrice(myData[i].value, min, max).color);
        data.push(row);
    }   
    return data;
  }

 //export default jsonToArray;
 export {color, mWhTokWhPrice, dateSlice, jsonToArray};

  