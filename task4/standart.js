
class Validator {
    constructor(str) {

    }
    isEmail(str) {
        return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    isDomain(str) {
        return ((str.indexOf('.ru') !== -1) || (str.indexOf('.com') !== -1))
    }
    isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    isPhone(str) {
        let phone = str.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
        return phone === null ? false : true;
    }

}
let validator = new Validator();
console.log(validator.isEmail('svetlova@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('27.02.2022'));
console.log(validator.isPhone('+7(977)23-14-014'));