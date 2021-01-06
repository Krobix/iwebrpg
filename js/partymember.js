class PartyMember extends Entity {
    //self explanatory
    constructor(name, attack, defense, is_main_player){
        Entity.call(this, name, attack, defense);
        this.is_main_player = is_main_player;
        this.player_relationship = 100;
    }
}