const deck = [];
for (let counter = 0; counter < 52; counter++){
    const card = {
        value : counter
    }
    console.log(card)
    deck.push( card )
}
console.log('deck size : ' , deck.length)