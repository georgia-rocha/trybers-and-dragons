import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _monsters: Fighter[] | SimpleFighter[];

  constructor(player1: Fighter, monster: Fighter[] | SimpleFighter[]) {
    super(player1);
    this._player1 = player1;
    this._monsters = monster;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (this._player1.lifePoints > 0 && monster.lifePoints > 0) {
        this._player1.attack(monster);

        if (monster.lifePoints > 0) {
          monster.attack(this._player1);
        }
      }
    });
    return super.fight();
  }
}