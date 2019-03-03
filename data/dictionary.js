const universalLoves = 'golden pumpkin, pearl, prismatic shard, rabbit\'s foot';
const universalLikes = 'all artisan goods except for oil and void mayonnaise, all cooking except for fried egg, bread, and strange bun, all flowers except for poppy, all foraged minerals except for quartz, all fruit tree fruits, all gems, all vegetables except for wheat and hops, life elixir, maple syrup';

const dictionary = {
    alex: {
        dataType: 'person',
        likes: 'Alex loves complete breakfast, salmon dinner, Alex likes all eggs except void eggs.',
        schedule: {
            spring: {
                rainy: '8am home, 1:00pm his room, 4:00pm dog pen, 6:30pm home, 8:00pm room',
                wednesday: '',
                regular: '8am tree outside home, 1pm his room, 4pm dog pen outside home, 6:30pm home, 8:00pm his room'
            }
        }
    },
    spring: {
        dataType: 'season'
    },
    where: {
        dataType: 'trigger'
    },
    wednesday: {
        dataType: 'day'
    },
    like: {
        dataType: 'trigger'
    },
    get: {
        dataType: 'trigger'
    }
};

export {dictionary};