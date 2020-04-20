// create superheroes array
var superheroes = [
    { id: "18", name: "Alien" },
    { id: "30", name: "Ant-Man" },
    { id: "38", name: "Aquaman" },
    { id: "48", name: "Atlas" },
    { id: "60", name: "Bane" },
    { id: "61", name: "Banshee" },
    { id: "62", name: "Bantam" },
    { id: "63", name: "Batgirl" },
    { id: "69", name: "Batman" },
    { id: "75", name: "Beast" },
    { id: "91", name: "Birdman" },
    { id: "106", name: "Black Panther" },
    { id: "107", name: "Black Widow" },
    { id: "112", name: "Blade" },
    { id: "127", name: "Boba Fett" },
    { id: "128", name: "Bolt" },
    { id: "131", name: "Boomer" },
    { id: "136", name: "Brainiac" },
    { id: "138", name: "Brother Voodoo" },
    { id: "142", name: "Bumblebee" },
    { id: "146", name: "Callisto" },
    { id: "149", name: "Captain America" },
    { id: "154", name: "Captain Hindsight" },
    { id: "156", name: "Captain Marvel" },
    { id: "160", name: "Captain Planet" },
    { id: "165", name: "Catwoman" },
    { id: "170", name: "Chameleon" },
    { id: "172", name: "Cheetah" },
    { id: "176", name: "Chuck Norris" },
    { id: "185", name: "Colossus" },
    { id: "186", name: "Copycat" },
    { id: "194", name: "Cyborg" },
    { id: "196", name: "Cyclops" },
    { id: "203", name: "Darkman" },
    { id: "207", name: "Darth Maul" },
    { id: "208", name: "Darth Vader" },
    { id: "209", name: "Dash" },
    { id: "210", name: "Data" },
    { id: "213", name: "Deadpool" },
    { id: "222", name: "Doctor Doom" },
    { id: "225", name: "Doctor Octopus" },
    { id: "228", name: "Donatello" },
    { id: "230", name: "Doomsday" },
    { id: "233", name: "Dr Manhattan" },
    { id: "236", name: "Elastigirl" },
    { id: "238", name: "Elektra" },
    { id: "245", name: "Ethan Hunt" },
    { id: "263", name: "Flash" },
    { id: "264", name: "Flash Gordon" },
    { id: "273", name: "Galactus" },
    { id: "274", name: "Gambit" },
    { id: "275", name: "Gamora" },
    { id: "276", name: "Garbage Man" },
    { id: "280", name: "Ghost Rider" },
    { id: "285", name: "Gladiator" },
    { id: "287", name: "Godzilla" },
    { id: "290", name: "Goliath" },
    { id: "299", name: "Green Goblin" },
    { id: "303", name: "Groot" },
    { id: "307", name: "Han Solo" },
    { id: "308", name: "Hancock" },
    { id: "309", name: "Harley Quinn" },
    { id: "310", name: "Harry Potter" },
    { id: "313", name: "Hawkeye" },
    { id: "322", name: "Hellboy" },
    { id: "325", name: "Hercules" },
    { id: "332", name: "Hulk" },
    { id: "339", name: "Iceman" },
    { id: "341", name: "Indiana Jones" },
    { id: "344", name: "Invisible Woman" },
    { id: "346", name: "Iron Man" },
    { id: "348", name: "Isis" },
    { id: "349", name: "Jack Bauer" },
    { id: "352", name: "James Bond" },
    { id: "353", name: "James T. Kirk" },
    { id: "354", name: "Jar Jar Binks" },
    { id: "355", name: "Jason Bourne" },
    { id: "356", name: "Jean Grey" },
    { id: "357", name: "Jean-Luc Picard" },
    { id: "361", name: "Jessica Jones" },
    { id: "370", name: "Joker" },
    { id: "372", name: "Jubilee" },
    { id: "373", name: "Judge Dredd" },
    { id: "374", name: "Juggernaut" },
    { id: "379", name: "Kang" },
    { id: "383", name: "Kick-Ass" },
    { id: "389", name: "King Kong" },
    { id: "391", name: "Kingpin" },
    { id: "393", name: "Kool-Aid Man" },
    { id: "398", name: "Kylo Ren" },
    { id: "404", name: "Leonardo" },
    { id: "405", name: "Lex Luthor" },
    { id: "414", name: "Loki" },
    { id: "416", name: "Luke Cage" },
    { id: "418", name: "Luke Skywalker" },
    { id: "423", name: "Magneto" },
    { id: "431", name: "Mantis" },
    { id: "438", name: "Maverick" },
    { id: "441", name: "Medusa" },
    { id: "450", name: "Michelangelo" },
    { id: "476", name: "Mr Incredible" },
    { id: "479", name: "Mysterio" },
    { id: "480", name: "Mystique" },
    { id: "489", name: "Nick Fury" },
    { id: "490", name: "Nightcrawler" },
    { id: "491", name: "Nightwing" },
    { id: "496", name: "Nova" },
    { id: "498", name: "Odin" },
    { id: "506", name: "Osiris" },
    { id: "510", name: "Paul Blart" },
    { id: "514", name: "Penguin" },
    { id: "522", name: "Poison Ivy" },
    { id: "527", name: "Professor X" },
    { id: "533", name: "Q" },
    { id: "538", name: "Ra's Al Ghul" },
    { id: "540", name: "Rambo" },
    { id: "542", name: "Raven" },
    { id: "555", name: "Rey" },
    { id: "558", name: "Riddler" },
    { id: "561", name: "Robin" },
    { id: "567", name: "Rogue" },
    { id: "568", name: "Ronin" },
    { id: "569", name: "Rorschach" },
    { id: "570", name: "Sabretooth" },
    { id: "574", name: "Sauron" },
    { id: "576", name: "Scarecrow" },
    { id: "579", name: "Scarlet Witch" },
    { id: "586", name: "Shadowcat" },
    { id: "591", name: "Shocker" },
    { id: "592", name: "Shriek" },
    { id: "596", name: "Silk Spectre" },
    { id: "598", name: "Silver Surfer" },
    { id: "609", name: "Solomon Grundy" },
    { id: "611", name: "Space Ghost" },
    { id: "612", name: "Spawn" },
    { id: "613", name: "Spectre" },
    { id: "614", name: "Speedball" },
    { id: "620", name: "Spider-Man" },
    { id: "627", name: "Spock" },
    { id: "630", name: "Star-Lord" },
    { id: "636", name: "Stephanie Powell" },
    { id: "638", name: "Storm" },
    { id: "639", name: "Stormtrooper" },
    { id: "644", name: "Superman" },
    { id: "645", name: "Swamp Thing" },
    { id: "649", name: "T-1000" },
    { id: "655", name: "Thanos" },
    { id: "658", name: "Thing" },
    { id: "659", name: "Thor" },
    { id: "669", name: "Titan" },
    { id: "670", name: "Toad" },
    { id: "678", name: "Two-Face" },
    { id: "680", name: "Ultron" },
    { id: "684", name: "Valkyrie" },
    { id: "687", name: "Venom" },
    { id: "693", name: "Vindicator" },
    { id: "708", name: "Wasp" },
    { id: "717", name: "Wolverine" },
    { id: "720", name: "Wonder Woman" },
    { id: "729", name: "Yoda" }
];

// select target html elements
var selectPlayerOne = $('#select-player-one');
var selectPlayerTwo = $('#select-player-two');
var playerOne = $('#player-one');
var playerTwo = $('#player-two');
var playerOnePoints = $('#player-one-points');
var playerTwoPoints = $('#player-two-points');
var result = $('#result');
var randomizeButton = $('#randomize');
var fightButton = $('#fight');
var resetButton = $('#reset');

// create state variables
var playerOneCharacterData = {};
var playerTwoCharacterData = {};
var record = [];


// SELECT FUNCTIONS
// ----------------
function setSelectOptions(targetElement) {
    // iterate through the superheroes array
    for (var i = 0; i < superheroes.length; i++) {
        // create a new option element
        var option = $('<option>');

        // set the value for each option element using the current superhero id
        option.val(superheroes[i].id);

        // set the text for each option element using the current superhero name
        option.text(superheroes[i].name);

        // append each option element to the select element
        targetElement.append(option);
    }

    // select random superhero
    selectRandomSuperhero(targetElement);
}

function selectRandomSuperhero(targetElement) {
    // generate random number
    index = Math.floor(Math.random() * superheroes.length);

    // select corresponding option
    targetElement.val(index);

    // re-initialize materialize plugin
    $('select').formSelect();

    // trigger change event
    targetElement.trigger("change");
}


// EVENT HANDLER FUNCTIONS
// -----------------------
function handleOptionChange(event) {
    // destructure event object
    var selectElement = event.target;

    // get select element data-target
    var targetElement = $(selectElement).attr('data-target')
    // get select element value
    var characterId = $(selectElement).val();

    // get superhero data
    getSuperheroData(targetElement, characterId);

    // reset scores
    playerOnePoints.text('0');
    playerTwoPoints.text('0');

    // reset result
    result.find('h5').text('');
}

function handleRandomizeClick() {
    // select random superheroes
    selectRandomSuperhero(selectPlayerOne);
    selectRandomSuperhero(selectPlayerTwo);
}

function handleFightClick() {
    // generate random numbers
    var playerOneOdds = Math.random();
    var playerTwoOdds = Math.random();

    // calculate total powerstats
    var playerOneTotalPowerstats = calculateTotalPowerstats(playerOneCharacterData);
    var playerTwoTotalPowerstats = calculateTotalPowerstats(playerTwoCharacterData);

    // calculate score
    var playerOneScore = Math.floor(playerOneOdds * playerOneTotalPowerstats);
    var playerTwoScore = Math.floor(playerTwoOdds * playerTwoTotalPowerstats);

    // set player scores
    playerOnePoints.text(playerOneScore);
    playerTwoPoints.text(playerTwoScore);

    // determine winner
    var winner = '';
    var message = '';
    if (playerOneScore > playerTwoScore) {
        winner = 'Player 1';
        message = 'Player 1 Wins!';
    } else if (playerTwoScore > playerOneScore) {
        winner = 'Player 2';
        message = 'Player 2 Wins!';
    } else {
        winner = 'Tie';
        message = "It's a tie!";
    }

    // set result
    result.find('h5').text(message);

    // update local storage
    setLocalStorageData(playerOneCharacterData.name, playerTwoCharacterData.name, winner);
}

function handleResetClick() {
    // remove 'fantasyFighter' from local storage
    localStorage.removeItem('fantasyFighter');

    // reset player scores
    playerOnePoints.text('0');
    playerTwoPoints.text('0');

    // reset result
    result.find('h5').text('');

    // update record content
    getLocalStorageData();
}


// API FUNCTIONS
// -------------
function getSuperheroData(targetElement, characterId) {
    // configure request url
    var url = 'https://fantasy-fighter.herokuapp.com/' + characterId;

    // send get request to server
    $.get(url, function (characterData) {
        // parse response
        var parsedCharacterData = JSON.parse(characterData);

        // set super hero content
        setSuperHeroContent(targetElement, parsedCharacterData);
    });
}

function setSuperHeroContent(targetElement, characterData) {
    console.log(characterData)
    if (targetElement === '#player-one') {
        playerOneCharacterData = characterData;
    } else {
        playerTwoCharacterData = characterData;
    }

    // destructure character data
    var characterName = characterData.name;
    var characterImage = characterData.image.url;
    var characterIntelligence = characterData.powerstats.intelligence;
    var characterStrength = characterData.powerstats.strength;
    var characterSpeed = characterData.powerstats.speed;
    var characterDurability = characterData.powerstats.durability;
    var characterPower = characterData.powerstats.power;
    var characterCombat = characterData.powerstats.combat;

    // select corresponding player div
    var playerDiv = $(targetElement);

    // set background image
    playerDiv.css('background-image', "url('" + characterImage + "')");
    // set name
    playerDiv.find('.character-name').text(characterName);
    // set image
    playerDiv.find('.character-image').attr("src", characterImage);
    // set intelligence
    playerDiv.find('.character-intelligence').text(characterIntelligence);
    // set strength
    playerDiv.find('.character-strength').text(characterStrength);
    // set speed
    playerDiv.find('.character-speed').text(characterSpeed);
    // set durability
    playerDiv.find('.character-durability').text(characterDurability);
    // set power
    playerDiv.find('.character-power').text(characterPower);
    // set combat
    playerDiv.find('.character-combat').text(characterCombat);
}


// LOCAL STORAGE FUNCTIONS
// -----------------------
function getLocalStorageData() {
    // get data from local storage
    var fantasyFighter = JSON.parse(localStorage.getItem('fantasyFighter'));

    // update record if data exists
    if (fantasyFighter !== null) {
        record = fantasyFighter;
    } else {
        record = [];
    }

    // update record content
    updateRecord();
}

function setLocalStorageData(playerOne, playerTwo, winner) {
    // create new fight result object
    var newFightResult = {
        playerOne: playerOne,
        playerTwo: playerTwo,
        winner: winner
    };

    // add fight result to record array
    record.push(newFightResult);

    // update local storage
    localStorage.setItem('fantasyFighter', JSON.stringify(record));

    // update record content
    updateRecord();
}


// FIGHT RECORD FUNCTIONS
// ----------------------
function calculateTotalPowerstats(characterData) {
    // destructure character data
    var powerstats = characterData.powerstats

    // destructure powerstats
    var intelligence = powerstats.intelligence
    var strength = powerstats.strength
    var speed = powerstats.speed
    var durability = powerstats.durability
    var power = powerstats.power
    var combat = powerstats.combat

    // calculate total powerstats
    var totalPowerstats = 0;

    if (intelligence !== 'null') {
        totalPowerstats += parseInt(intelligence);
    }
    if (strength !== 'null') {
        totalPowerstats += parseInt(strength);
    }
    if (speed !== 'null') {
        totalPowerstats += parseInt(speed);
    }
    if (durability !== 'null') {
        totalPowerstats += parseInt(durability);
    }
    if (power !== 'null') {
        totalPowerstats += parseInt(power);
    }
    if (combat !== 'null') {
        totalPowerstats += parseInt(combat);
    }

    return totalPowerstats;
}

function updateRecord() {
    // reset record content
    $('#player-one-wins').text('0');
    $('#player-two-wins').text('0');
    $('#ties').text('0');
    $('#record').find('tbody').html('');

    // create counter variables
    var playerOneWins = 0;
    var playerTwoWins = 0;
    var ties = 0;

    // iterate through the record array
    for (var i = record.length - 1; i >= 0; i--) {
        // destructure current object
        var playerOne = record[i].playerOne;
        var playerTwo = record[i].playerTwo;
        var winner = record[i].winner;

        // create new <tr> element
        var row = $('<tr>');

        // create new <td> elements
        var roundData = $('<td>');
        var playerOneData = $('<td>');
        var playerTwoData = $('<td>');
        var winnerData = $('<td>');

        // append text to <td> elements
        roundData.text(i + 1);
        playerOneData.text(playerOne);
        playerTwoData.text(playerTwo);
        winnerData.text(winner);

        // increment counter variables
        if (winner === 'Player 1') {
            playerOneWins++;
            playerOneData.attr('class', 'light-green-text');
            playerOneData.attr('style', 'font-weight: bold');
        } else if (winner === 'Player 2') {
            playerTwoWins++;
            playerTwoData.attr('class', 'light-green-text');
            playerTwoData.attr('style', 'font-weight: bold');
        } else {
            ties++;
        }

        // append <td> elements to <tr> element
        row.append(roundData);
        row.append(playerOneData);
        row.append(playerTwoData);
        row.append(winnerData);

        // append <tr> element to the DOM
        $('#record').find('tbody').append(row);
    }

    // Set Player One Score
    $('#player-one-wins').text(playerOneWins);
    // Set Player Two Wins
    $('#player-two-wins').text(playerTwoWins);
    // Set Ties
    $('#ties').text(ties);
}


// INIT FUNCTION
// -------------
function init() {
    // attach change event handlers to select elements
    selectPlayerOne.on('change', handleOptionChange);
    selectPlayerTwo.on('change', handleOptionChange);

    // attach click event handlers to button elements
    randomizeButton.on('click', handleRandomizeClick);
    fightButton.on('click', handleFightClick);
    resetButton.on('click', handleResetClick);

    // set select options
    setSelectOptions(selectPlayerOne);
    setSelectOptions(selectPlayerTwo);

    // get data from local storage
    getLocalStorageData();
}


// INITIALIZE APP
// --------------
$(document).ready(function () {
    // initialize app
    init();

    // initialize materialize plugins
    $('select').formSelect();
});
