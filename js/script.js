/**
 * Functions
 */
const printAll = (object) => {
    object.forEach((element) => {
        const { name, family, prefix, category,color} = element;

        switch (category) {
            case "food":
                main.innerHTML += `
            <div class="boxIcon">
                <p><i class="${family} ${prefix}${name}" style="color:${color};"></i></p>
                <span>${name}</span>
            </div>
            `;
                break;
            case "beverage":
                main.innerHTML += `
            <div class="boxIcon">
                <p><i class="${family} ${prefix}${name}" style="color:${color};"></i></p>
                <span>${name}</span>
            </div>
            `;
                break;
            case "animal":
                main.innerHTML += `
            <div class="boxIcon">
                <p><i class="${family} ${prefix}${name}" style="color:${color};"></i></p>
                <span>${name}</span>
            </div>
            `;
                break;

        }
    });
};
const printFood = (object) => {
    object.forEach((element) => {
        const { name, family, prefix, category,color} = element;

        switch (category) {
            case "food":
                main.innerHTML += `
            <div class="boxIcon">
                <p><i class="${family} ${prefix}${name}" style="color:${color};"></i></p>
                <span>${name}</span>
            </div>
            `;
                break;
        }
    });
}
const printBeverage = (object) => {
    object.forEach((element) => {
        const { name, family, prefix, category,color} = element;

        switch (category) {
            case "beverage":
                main.innerHTML += `
            <div class="boxIcon">
                <p><i class="${family} ${prefix}${name}" style="color:${color};"></i></p>
                <span>${name}</span>
            </div>
            `;
                break;
        }
    });
}
const printAnimal = (object) => {
    object.forEach((element) => {
        const { name, family, prefix, category,color} = element;

        switch (category) {
            case "animal":
                main.innerHTML += `
            <div class="boxIcon">
                <p><i class="${family} ${prefix}${name}" style="color:${color};"></i></p>
                <span>${name}</span>
            </div>
            `;
                break;
        }
    });
}



/**
 * Main code
 */
const icons = [
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'ice-cream',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'lemon',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'hamburger',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'pizza-slice',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'beer',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'glass-whiskey',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'wine-bottle',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'cocktail',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'coffee',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'glass-martini',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'dragon',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'kiwi-bird',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'frog',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'hippo',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'otter',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'horse',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
];

const colors = {
    "food": 'yellow',
    "beverage": 'red',
    "animal": 'green'
}

const main = document.getElementById(`main`);
const select = document.getElementById(`selectType`);

const iconColored = icons.map(
    (element) => {
        return {
            ...element,
            color: colors[element.category]
        }
    }
)

const iconCategories = [];
iconColored.forEach(
    (element) => {
        if ( iconCategories.includes(element.category) == false) {
            iconCategories.push(element.category);
        }
    }
);
iconCategories.forEach(
    (element) => {
        select.innerHTML += `<option value="${element}">${element}</option>`
    }
);

//Stampo tutti gli elementi
printAll(iconColored);

//Evento per cambiare la stampa con il cambiamento della select
select.addEventListener(`change`, 
    () => {
        document.querySelectorAll('.boxIcon').forEach(e => e.remove());
        const selectValue = document.getElementById(`selectType`).value;
        switch (selectValue) {
            case "all":
                printAll(iconColored);
                break;
            case "food":
                printFood(iconColored);
                break;
            case "beverage":
                printBeverage(iconColored);
                break;
            case "animal":
                printAnimal(iconColored);
                break;
        }
    }
);