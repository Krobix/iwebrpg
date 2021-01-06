class Entity {
    //an Entity is a living thing - enemy, party member, etc.
    constructor(name, attack, defense){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.blade_resistance = 0;
        this.blunt_resistance = 0;
        this.ranged_resistance = 0;
        this.inventory = new Array();
        this.main_weapon = null;
        this.armor_wearing = null;
    }
}