//EXCERCISES PART 3 (STEAM FUNCTIONALITY)
//c) Declare a class: SteamUser, that takes one argument in it's constructor ,balance and sets this property on the user, as well as an empty array games.
//c) Write a function on that SteamUser class that lets a user purchase a game, if they have enough balance to afford the price of the game.
//If they can not afford it, throw an error. 

const allGamesArray = require("../games/allgames");


class SteamUser {
    constructor (name, balance){
        this.name = name;
        this.balance = balance;
        this.games = [];
        this.wishlist = [];
    }

  
}