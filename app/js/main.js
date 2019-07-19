const homeTitle = new TypeIt('#home-title', {
    strings: 'Clément Pétillant',
    speed: 50,
    waitUntilVisibile: true
})
.pause(300)
.delete(9)
.type('Petignat')
.go();

const homeDesc = new TypeIt('#home-desc', {
    strings: 'Full Stack Software Developer',
    speed: 50,
    startDelay: 2000,
    waitUntilVisibile: true
}).go();