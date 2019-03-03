const people = [
    'alex',
    'elliott',
    'harvey',
    'sam',
    'sebastian',
    'shane',
    'abigail',
    'emily',
    'haley',
    'leah',
    'maru',
    'penny',
    'caroline',
    'clint',
    'demetrius',
    'evelyn',
    'george',
    'gus',
    'jas',
    'jodi',
    'kent',
    'lewis',
    'linus',
    'Marnie',
    'Pam',
    'Pierre',
    'Robin',
    'Sandy',
    'Vincent',
    'Willy'
];

const triggersSched = ['schedule', 'where'];
const triggersGifts = ['like', 'gift', 'get', 'favorite'];
const triggers = [...triggersGifts, ...triggersSched];

const seasons = ['summer', 'spring', 'winter', 'fall'];

const weather = ['rainy', 'rain', 'raining', 'sunny'];

const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
];

const listenForPhrases = [
    ...days,
    ...people,
    ...seasons,
    ...triggers
];

export {listenForPhrases};