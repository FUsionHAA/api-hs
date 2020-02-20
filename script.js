$(document).ready(function () {

    const card = $.ajax({
        url: "https://api.hearthstonejson.com/v1/25770/enUS/cards.collectible.json",
        async: false,
        dataType: 'json'
    }).responseJSON;

    let cardSpell = (x) => {
        let ele = `
            <ul class="card">
                <li>Name: <b>${card[x].name}</b></li>
                <li>Type: <b>${card[x].type}</b></li>
                <li>Cost: <b>${card[x].cost}</b></li>
                <li><b>${card[x].text}</b></li>
                <img 
                    src="https://art.hearthstonejson.com/v1/orig/${card[x].id}.png"
                    width="200px"
                    height="200px"
                />
                <li><a target="_blank" rel="noopener noreferrer" href="https://art.hearthstonejson.com/v1/orig/${card[x].id}.png">https://art.hearthstonejson.com/v1/orig/${card[x].id}.png</a></li>
            </ul>
        `;
        $(".cardInfo").append(ele);
    }

    let cardMinion = (x) => {
        let ele = `
            <ul class="card">
                <li>Name: <b>${card[x].name}</b></li>
                <li>Type: <b>${card[x].type}</b></li>
                <li>Cost: <b>${card[x].cost}</b></li>
                <li>Attack: <b>${card[x].attack}</b></li>
                <li>Health: <b>${card[x].health}</b></li>
                <li><b>${card[x].text}</b></li>
                <img 
                    src="https://art.hearthstonejson.com/v1/orig/${card[x].id}.png"
                    width="200px"
                    height="200px"
                />
                <li><a target="_blank" rel="noopener noreferrer" href="https://art.hearthstonejson.com/v1/orig/${card[x].id}.png">https://art.hearthstonejson.com/v1/orig/${card[x].id}.png</a></li>
            </ul>
        `;
        $(".cardInfo").append(ele);
    }

    let cardWeapon = (x) => {
        let ele = `
            <ul class="card">
                <li>Name: <b>${card[x].name}</b></li>
                <li>Type: <b>${card[x].type}</b></li>
                <li>Cost: <b>${card[x].cost}</b></li>
                <li>Attack: <b>${card[x].attack}</b></li>
                <li>Durability: <b>${card[x].durability}</b></li>
                <li><b>${card[x].text}</b></li>
                <img 
                    src="https://art.hearthstonejson.com/v1/orig/${card[x].id}.png"
                    width="200px"
                    height="200px"
                />
                <li><a target="_blank" rel="noopener noreferrer" href="https://art.hearthstonejson.com/v1/orig/${card[x].id}.png">https://art.hearthstonejson.com/v1/orig/${card[x].id}.png</a></li>
            </ul>
        `;
        $(".cardInfo").append(ele);
    }

    function loadCards(count) {
        let load = count + 10;
        for (let x = count; x < load; x++) {
            if (card[x].type === "SPELL") {
                cardSpell(x);
            } else if (card[x].type === "MINION") {
                cardMinion(x);
            } else if (card[x].type === "WEAPON") {
                cardWeapon(x);
            }
        }
    }
    
    /*function loadCards(count) {
        let load = count + 10;
        for (let x = count; x < load; x++) {
            const cardEle = `
                <ul class="card">
                    <li>${card[x].name}</li>
                    <li>${card[x].type}</li>
                    <li>${card[x].text}</li>
                    <img 
                        src="https://art.hearthstonejson.com/v1/orig/${card[x].id}.png"
                        width="200px"
                        height="200px"
                    />
                    <li><a href="https://art.hearthstonejson.com/v1/orig/${card[x].id}.png">https://art.hearthstonejson.com/v1/orig/${card[x].id}.png</a></li>
                </ul>
                `
            $(".cardInfo").append(cardEle);
        }
    }*/

    let count = 0;

    loadCards(count);

    $(".nextPage").click(function () {
        $(".cardInfo").empty();
        count += 10;
        count >= card.length ? count = card.length - 10 : count;
        loadCards(count);
    });

    $(".prevPage").click(function () {
        $(".cardInfo").empty();
        count -= 10;
        count < 0 ? count = 0 : count;
        loadCards(count);
    });




});