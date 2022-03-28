var quotes = [

'Don\'t just listen to my preachings, act on them, reflect on them, my preachings aren\'t meant to touch your ears, they are meant to touch you inside here.',
'Drip doesn\'t change people, it\'s the will the drip has to change you.',
'You can\'t keep blaming other people outside the community for the problems in the Muslim community, this problem is internal not external, we gotta address this stuff, if we don\'t then progression will just continue to slow down. These younger generation of Muslims are setting us 15 years back but no one is talking about Be better than that.',
'Success isn\'t guaranteed. Hard work doesn\'t guarantee success. You can work as hard as you want It doesn\'t mean you will get success. Drive gives success. You can work hard without having the drive too.',
'You got the Canadian mindset Bro I\'m more foreign than you. Cause You think rich I think poor. But I have the mentality For the grind to be rich. Which is superior to your way of thinking.',
'Y\'all just looking for a false future',
'So you want your enemy and rival to witness your progression? That gives them the drive to be better than you. Make them think you dumb and weak. Show up when needed.'
]

function newGenerational() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('generational').innerHTML = quotes[randomNumber];
}
