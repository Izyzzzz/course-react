const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

class CalcCash {
    constructor(...everyCash) {
        this.everyCash = everyCash;
    }
    get total(){
        return this.everyCash[1].reduce(( accumulator, currentValue ) => accumulator + currentValue, this.everyCash[0]);
    }
}

const money = new CalcCash(null, cash);

export {eu, rus, CalcCash, money}