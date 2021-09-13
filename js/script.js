
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

const main = document.getElementById(`main`);

/* <div class="boxIcon">
    <p><i class="fab fa-apple"></i></p>
    <span>apple-alt</span>
</div> */

icons.forEach((element) => {
    const {name, family, prefix, category} = element;
    
    switch (category) {
        case "food":
            main.innerHTML += `
            <div class="boxIcon">
                <p><i class="${family} ${prefix}${name}" style="color:yellow;"></i></p>
                <span>${name}</span>
            </div>
            `;
            break;
        case "beverage":
            main.innerHTML += `
            <div class="boxIcon">
                <p><i class="${family} ${prefix}${name}" style="color:red;"></i></p>
                <span>${name}</span>
            </div>
            `;
            break;
        case "animal":
            main.innerHTML += `
            <div class="boxIcon">
                <p><i class="${family} ${prefix}${name}" style="color:green;"></i></p>
                <span>${name}</span>
            </div>
            `;
            break;
        
    }

    
});