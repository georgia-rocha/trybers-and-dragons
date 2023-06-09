import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import randomNumber from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = randomNumber(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = randomNumber(1, 10);
    this._defense = randomNumber(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: randomNumber(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }
    
  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const attackPoints = this._strength;
    enemy.receiveDamage(attackPoints);
  }

  levelUp(): void {
    this._dexterity += randomNumber(1, 10);
    this._maxLifePoints += randomNumber(1, 10);
    this._strength += randomNumber(1, 10);
    this._defense += randomNumber(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * 2);
    console.log('Uno');
  }
}