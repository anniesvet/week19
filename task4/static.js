class ValidatorStatic {
    static isEmail (str) {
        let isEmail = true;
        if (isEmail !== (str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
        isEmail = false;

        return isEmail;
    }

    static isDomain (str) {
        let isDomain = true;
        if (isDomain !== (str.indexOf('.ru') !== -1) || (str.indexOf('.com') !== -1))
        isDomain = false;

        return isDomain;
    }

    static isDate (str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }

    static isPhone (str) {
        let phone = str.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
        return phone === null ? false : true;
    }
}


console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));