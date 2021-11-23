// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    this.randomSaxon = this.saxonArmy[saxonIndex];
    this.randomViking = this.vikingArmy[vikingIndex];

    const result = this.randomSaxon.receiveDamage(this.randomViking.attack());

    if (this.randomSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter((item, index) => {
        return index !== saxonIndex;
      });
    }

    return result;
  }

  saxonAttack() {
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    this.randomViking = this.vikingArmy[vikingIndex];
    this.randomSaxon = this.saxonArmy[saxonIndex];

    const result = this.randomViking.receiveDamage(this.randomSaxon.attack());

    if (this.randomViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter((item, index) => {
        return index !== saxonIndex;
      });
    }

    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
