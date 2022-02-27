function getInfo() {

    // Выбор корма:

    let checkboxes = document.querySelectorAll('input[name="feed"]:checked');
    let values = [];
        
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });

    // Выбор пола:

    let sex = document.querySelectorAll('input[name="sex"]:checked');
    let values1 = [];
        
    sex.forEach((radio) => {
        values1.push(radio.value);
    });

    // Класс Cat:

class Cat {
    constructor (nick, breed, feed, sex) {
        this.nick = nick;
        this.breed = breed;
        this.feed = feed;
        this.sex = sex;
    }
}

    // Объект:

let cat1 = new Cat (document.getElementById("nick").value, document.getElementById("breed").value, values.join(", "), values1.join(" "));

console.log(cat1);
}




