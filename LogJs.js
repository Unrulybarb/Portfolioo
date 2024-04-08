let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"The best way to find yourself is to lose yourself in the service of others."' ,
    person: 'Mahatma Gandhi'
}, {
    quote: '"It does not matter how long it takes to reach your destination, just make sure you get there."' ,
    person: 'Aristotle'
}, {
    quote: '"A stitch in time saves more than just nine."',
    person: 'Burger'
}, {
    quote: '"Man is more than what he sees, he is a product of what he can not see nor control"' ,
    person: 'Socrates'
}, {
    quote: '"We all want something real and genuine until we are asked to be real, then we flee because we hate our reflection."' ,
    person: 'Rando Somon'
}, {
    quote: '"Humans keep asking where the good people are just so they could take advantage of them."' ,
    person: 'Aristotle'
}, {
    quote: '"If you want to live a happy life, tie it to a goal not to people or things."' ,
    person: 'Albert Einstein'
}, {
    quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."' ,
    person: 'Benjamin Franklin'
}, {
    quote: '"People are cunts! I just want to run them over with my van. Hihihi."' ,
    person: 'Boo Bear'
}, {
    quote: '"Humans are not as dumb as you would like to think they are, we all know what we are doing."' ,
    person: 'Riley'
}, ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})