const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}