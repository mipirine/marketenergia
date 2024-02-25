/**
 * 
 * @param {*} n 
 * @returns 
 */
function getPastDateInDays(n) {
    let date = new Date(); // get the current date
    date.setDate(date.getDate() - n); // subtract 'n' days
    return date;
}

/**
 * 
 * @returns string api, which includes address with start and end times for query 
 */
const defineApiParameters = () => {
    /**
     * Example, how to get prices from sahkotin.fi
     * const api = 'https://sahkotin.fi/prices?vat&start=2024-01-07T22:00:00.000Z&end=2024-01-11T13:00:00.000Z';
     */
  
    const start = 7; 
    const startYear = getPastDateInDays(start).getFullYear();
    const startMonth = getPastDateInDays(start).getMonth() + 1;
    const startDay = getPastDateInDays(start).getDate();

    const end = 1;
    const endYear = getPastDateInDays(end).getFullYear();
    const endMonth = getPastDateInDays(end).getMonth() + 1;
    const endDay = getPastDateInDays(end).getDate()
    
    const twoDigits = (number) => (number < 10 ? `0${number}` : `${number}`); 
    const startDate = `${startYear}-${twoDigits(startMonth)}-${twoDigits(startDay)}`;
    const endDate = `${endYear}-${twoDigits(endMonth)}-${twoDigits(endDay)}`;

    const api = 'https://sahkotin.fi/prices?vat&start=' + startDate + 'T00:00:00.000Z&end='
     + endDate + 'T23:00:00.000Z';
    
    return api;
}

export default defineApiParameters;
export {getPastDateInDays};