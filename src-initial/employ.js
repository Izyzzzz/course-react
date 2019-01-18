class Employ {
    constructor(){
        this.employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
    }
    get empl(){
        return this.employers.filter(elem => elem.length > 0).map(elem => elem.toLowerCase().trim());        
    }

}
const employ = new Employ();

export {employ, Employ}