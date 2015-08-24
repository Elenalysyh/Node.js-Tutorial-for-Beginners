//module.exports = {};

function printAvatar () {
    console.log("Avatar: P0-13");
}

function printChappie() {
    console.log("Chappie: R");
}

module.exports.avatar = printAvatar;
module.exports. chappie = printChappie;


// the same Lesson 9

module.exports = {
    printAvatar: function  () {
    console.log("Avatar: P0-13");
    },

    printChappie: function () {
    console.log("Chappie: R");
    },
    favMovie : "The Matrix"
};