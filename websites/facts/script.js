const factButton = document.getElementById("random-fact-button");
const output = document.getElementById("output");

async function loadJson(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw Error(response.status);
        return await response.json();
    } catch (error) {
        console.error("Failed to load external sites:", error);
        return [];
    }
}

let tableOfRandom = {
    "factsOfThings": {
        "facts": [
            "\"We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.\" {urlLink:https://constitutioncenter.org/the-constitution/preamble,text:-U.S. Constitution Preamble}",
            "Honey never spoils; archaeologists have found edible honey in ancient Egyptian tombs.",
            "The heart of a shrimp is located in its head.",
            "A snail can sleep for up to three years.",
            "The fingerprints of koalas are so close to humans' that they have been mistaken at crime scenes.",
            "Sloths can hold their breath longer than dolphins can.",
            "It takes about 8 minutes for light from the Sun to reach Earth.",
            "A group of flamingos is called a 'flamboyance'.",
            "Octopuses have three hearts and blue blood.",
            "Venus is the only planet that rotates clockwise.",
            "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
            "A small child could swim through the veins of a blue whale.",
            "Bananas are berries, but strawberries are not.",
            "There are more trees on Earth than stars in the Milky Way.",
            "The word 'muscle' comes from a Latin term meaning 'little mouse'.",
            "Wombat poop is cube-shaped to keep it from rolling away.",
            "Cows have best friends and get stressed when they are separated.",
            "A jiffy is an actual unit of time: 1/100th of a second.",
            "Humans share 50% of their DNA with bananas.",
            "Butterflies taste with their feet.",
            "The Moon is slowly drifting away from Earth at a rate of 3.8 cm per year.",
            "Otters hold hands while sleeping so they don't drift apart.",
            "Bees can fly higher than Mount Everest.",
            "A bolt of lightning is five times hotter than the surface of the sun.",
            "Polar bear skin is actually black, and their fur is transparent.",
            "Tigers have striped skin, not just striped fur.",
            "Sharks have been around longer than trees.",
            "The total weight of all the ants on Earth is roughly equal to the weight of all humans.",
            "An ostrich's eye is bigger than its brain.",
            "Rabbits cannot vomit.",
            "A cloud can weigh more than a million pounds.",
            "Water can boil and freeze at the same time (known as the triple point).",
            "Sea lions are the only animals that can clap to a beat.",
            "The Great Wall of China is not visible from the Moon with the naked eye.",
            "Pigs are incapable of looking up into the sky.",
            "The dot over the letter 'i' and 'j' is called a tittle.",
            "Elephants are the only animals that can't jump.",
            "A rhinoceros's horn is made of hair (keratin).",
            "Most of the dust in your home is actually dead skin.",
            "Apple seeds contain a tiny amount of cyanide.",
            "It is impossible to hum while holding your nose.",
            "A crocodile cannot stick its tongue out.",
            "Your nose can remember 50,000 different scents.",
            "The average person spends 6 months of their life waiting for red lights to turn green.",
            "There are no clocks in Las Vegas gambling casinos.",
            "The king of hearts is the only king without a mustache on a standard deck of cards.",
            "A strawberry has an average of 200 seeds.",
            "Lizards use their tongues to smell.",
            "The Sahara Desert can sometimes experience snow.",
            "Kangaroos cannot walk backward.",
            "A cat has 32 muscles in each ear.",
            "An airplane can fly for over 5 hours after one engine fails.",
            "Hippopotamus sweat is pink.",
            "Jupiter is twice as massive as all the other planets combined.",
            "The first orange ever grown wasn't orange; it was green.",
            "A small amount of stress can actually help you perform better.",
            "Dolphins give each other names.",
            "A single strand of spaghetti is called a 'spaghetto'.",
            "The moon has moonquakes.",
            "An individual blood cell takes about 60 seconds to make a complete circuit of the body.",
            "Gorillas burp when they are happy.",
            "There are more possible iterations of a game of chess than there are atoms in the observable universe.",
            "Squirrels plant thousands of new trees each year simply by forgetting where they put their acorns.",
            "A blue whale's tongue weighs as much as an elephant.",
            "Your skeleton renews itself completely every 10 years.",
            "The inventor of the Pringles can is now buried in one.",
            "The surface of Mars is lower in gravity; you could jump three times as high there.",
            "A teaspoonful of a neutron star would weigh 6 billion tons.",
            "Pineapples take about two years to grow.",
            "Dogs' nose prints are as unique as human fingerprints.",
            "The shortest war in history lasted 38 minutes between Britain and Zanzibar.",
            "Some turtles can breathe through their butts.",
            "A flamingo can only eat when its head is upside down.",
            "The heart of a blue whale is the size of a bumper car.",
            "There is a species of jellyfish that is biologically immortal.",
            "Apples float in water because they are 25% air.",
            "The smell of freshly cut grass is actually a plant distress call.",
            "One quarter of the bones in your body are in your feet.",
            "The average lead pencil can draw a line 35 miles long.",
            "Your stomach acid is strong enough to dissolve razor blades.",
            "Earth is the only planet not named after a god.",
            "A hummingbird weighs less than a penny.",
            "Antarctica is the largest desert in the world.",
            "Cats spend 70% of their lives sleeping.",
            "A 'moment' was historically a medieval unit of time equal to 90 seconds.",
            "The unicorn is the national animal of Scotland.",
            "The first computer was invented in the 1940s and was the size of a large room.",
            "You can't lick your own elbow.",
            "Rubber bands last longer when refrigerated.",
            "Most lipsticks contain fish scales.",
            "The shark is the only fish that can blink with both eyes.",
            "A shrimp's heart is in its head.",
            "The wood frog can hold its pee for up to eight months.",
            "Rain contains vitamin B12.",
            "Chewing gum while peeling onions will keep you from crying.",
            "The moon is 400 times smaller than the sun, but also 400 times closer to Earth.",
            "Human teeth are as strong as shark teeth.",
            "An owl has three eyelids: one for blinking, one for sleeping, and one for keeping the eye clean.",
            "Gold is edible.",
            "A cockroach can live for several weeks without its head.",
            "You are taller in the morning than you are at night."
        ],
        
        "amendments": null,
    },

    "funfacts": [
        "A day on Venus is longer than a year on Venus.",
        "Honey never spoils; archaeologists have found 3,000-year-old honey that is still edible.",
        "India was the first country to mine diamonds.",
        "The heart of a shrimp is located in its head.",
        "A snail can sleep for up to three years.",
        "The fingerprints of koalas are so similar to humans' that they have been mistaken at crime scenes.",
        "Sloths can hold their breath underwater longer than dolphins can.",
        "The world's highest cricket ground is in Chail, India, at an altitude of 2,444 meters.",
        "Octopuses have three hearts and blue blood.",
        "Venus is the only planet in our solar system that rotates clockwise.",
        "The Eiffel Tower can grow by 15 cm during the summer due to thermal expansion.",
        "Shampoo originated in India; the word comes from the Sanskrit word 'Champu' meaning to massage.",
        "Bananas are berries, but strawberries are not.",
        "There are more trees on Earth than stars in the Milky Way galaxy.",
        "The game of 'Snakes and Ladders' originated in ancient India as a lesson on morality.",
        "Wombat poop is cube-shaped to prevent it from rolling away.",
        "Cows have 'best friends' and experience stress when separated from them.",
        "A 'jiffy' is an actual unit of time equal to 1/100th of a second.",
        "Humans share about 50% of their DNA with bananas.",
        "Butterflies taste their food using their feet.",
        "The Moon is slowly moving away from Earth at a rate of 3.8 cm per year.",
        "Sea otters hold hands while sleeping so they don't drift apart.",
        "Bees can fly higher than Mount Everest.",
        "A bolt of lightning is five times hotter than the surface of the Sun.",
        "Polar bear skin is actually black, and their fur is transparent, not white.",
        "Tigers have striped skin, not just striped fur.",
        "Sharks have existed for longer than trees have.",
        "The total weight of all ants on Earth is roughly equal to the weight of all humans.",
        "An ostrich's eye is larger than its entire brain.",
        "Rabbits are physically unable to vomit.",
        "A single fluffy cloud can weigh over a million pounds.",
        "Water can exist in three states (solid, liquid, gas) at the same time, called the 'triple point'.",
        "Sea lions are the only animals capable of clapping to a musical beat.",
        "The Kumbh Mela gathering in India is so large it is visible from space.",
        "Pigs are physically unable to look straight up into the sky.",
        "The dot over the letter 'i' and 'j' is officially called a 'tittle'.",
        "Elephants are the only mammals that cannot jump.",
        "A rhinoceros's horn is made of keratin, the same protein found in human hair and nails.",
        "Chess was invented in India around the 6th century.",
        "It is impossible to hum while holding your nose closed.",
        "A crocodile cannot stick its tongue out.",
        "Your nose can remember and recognize up to 50,000 different scents.",
        "The average person spends about 6 months of their life waiting at red traffic lights.",
        "India has the largest postal network in the world, including a floating post office in Dal Lake.",
        "The 'King of Hearts' is the only king in a standard deck of cards without a mustache.",
        "An average strawberry has about 200 seeds on its surface.",
        "Lizards use their tongues to 'smell' their surroundings.",
        "The Sahara Desert experiences snowfall once every few decades.",
        "Kangaroos cannot walk backward.",
        "A cat has 32 muscles in each of its ears.",
        "India is the world's largest producer of milk.",
        "Hippopotamus sweat is naturally pink.",
        "Jupiter is more than twice as massive as all the other planets combined.",
        "Oranges were originally green; the first ones imported to the West stayed green even when ripe.",
        "Dolphins have specific 'names' (whistles) for each other.",
        "A single strand of spaghetti is called a 'spaghetto'.",
        "The Moon experiences 'moonquakes' caused by Earth's gravitational pull.",
        "A red blood cell takes about 60 seconds to travel through the entire human body.",
        "Gorillas burp when they are feeling happy or content.",
        "There are more possible iterations of a chess game than there are atoms in the observable universe.",
        "Squirrels accidentally plant thousands of trees every year by forgetting where they hid their nuts.",
        "A blue whale's tongue weighs as much as an entire elephant.",
        "Your skeleton completely replaces its cells every 10 years.",
        "The inventor of the Pringles can was buried in one.",
        "Gravity on Mars is 38% of Earth's; you could jump nearly three times as high there.",
        "A teaspoon of a neutron star would weigh about 6 billion tons.",
        "It takes nearly two years for a pineapple to grow to full size.",
        "Dogs' nose prints are as unique as human fingerprints.",
        "The shortest war in history lasted only 38 minutes (Britain vs. Zanzibar).",
        "Some species of turtles can breathe through their butts during hibernation.",
        "A flamingo can only eat when its head is held upside down.",
        "The heart of a blue whale is the size of a bumper car.",
        "There is a 'biologically immortal' jellyfish that can restart its life cycle.",
        "Apples float because they are composed of 25% air.",
        "The smell of freshly cut grass is a chemical 'distress signal' from the plants.",
        "One quarter of all the bones in your body are located in your feet.",
        "A standard lead pencil can draw a continuous line 35 miles long.",
        "Stomach acid is strong enough to dissolve stainless steel razor blades.",
        "Earth is the only planet in our solar system not named after a Greek or Roman god.",
        "A hummingbird weighs less than a single U.S. penny.",
        "Antarctica is technically the largest desert in the world.",
        "Cats spend approximately 70% of their lives asleep.",
        "A 'moment' was a medieval unit of time equal to exactly 90 seconds.",
        "The unicorn is the official national animal of Scotland.",
        "The first computer, ENIAC, weighed 27 tons and took up 1,800 square feet.",
        "You are physically unable to lick your own elbow.",
        "Rubber bands last significantly longer when stored in a refrigerator.",
        "Many lipsticks contain fish scales (pearl essence) to create shimmer.",
        "The shark is the only fish that can blink with both eyes simultaneously.",
        "The wood frog can hold its urine for up to eight months to survive winter.",
        "Rainwater contains small traces of Vitamin B12.",
        "Chewing gum while peeling onions can prevent you from crying.",
        "The Sun is 400 times larger than the Moon, but also 400 times further away, making them look the same size.",
        "Human teeth are roughly as strong as the teeth of a Great White Shark.",
        "Owls have three eyelids: one for blinking, one for sleeping, and one for cleaning.",
        "Pure gold is non-toxic and technically edible.",
        "A cockroach can survive for several weeks without its head.",
        "You are about 1 cm taller in the morning than you are in the evening.",
        "Mawsynram in Meghalaya, India, is the wettest inhabited place on Earth.",
        "India has the world's second-largest population of English speakers.",
        "Facts inform, while fun facts entertain!"
    ],
};

// Fun Fact: Facts inform, while fun facts entertain!

function getRandomString(data) {
    if (typeof data === "string") {
        return data;
    }
    
    if (!data) {
        return "";
    }

    if (Array.isArray(data)) {
        if (data.length === 0) return "";
        const randomItem = data[Math.floor(Math.random() * data.length)];
        return getRandomString(randomItem); 
    }

    if (typeof data === "object") {
        const keys = Object.keys(data);
        if (keys.length === 0) return "";
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return getRandomString(data[randomKey]); 
    }

    return "";
}

let lastFact = "";

function getFact(initString) {
    let newFact = "";
    let attempts = 0;

    while ((newFact === "" || newFact === lastFact) && attempts <= 50) {
        newFact = getRandomString(tableOfRandom);
        attempts++;
    }

    lastFact = newFact;

    let factText = typeof initString === "string" ? initString + newFact : newFact;

    const linkRegex = /\{urlLink:(.*?),text:(.*?)\}/g;
    let formattedHtml = factText.replace(linkRegex, '<a href="$1" target="_blank">$2</a>');

    if (formattedHtml.includes('<br>')) {
        formattedHtml = formattedHtml
            .split('<br>')
            .map(segment => `<p>${segment.trim()}</p>`)
            .join('');
    } else {
        formattedHtml = `<p>${formattedHtml.trim()}</p>`;
    }

    console.log(formattedHtml);
    output.innerHTML = formattedHtml;
}

document.addEventListener("DOMContentLoaded", async () => {
    tableOfRandom.factsOfThings.amendments = await loadJson("AmendmentWordings.json");

    const args = window.location.search;
    const searchParams = new URLSearchParams(args);

    if (searchParams.get('m')) {
        output.textContent = searchParams.get('m');
    } else {
        getFact("Initial (Fun) Fact: ");
    }
});
