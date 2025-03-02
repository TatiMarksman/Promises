import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((parsedData) => {
        const saving = JSON.parse(parsedData);
        return new GameSaving(saving.id, saving.created, saving.userInfo);
      });
  }
}