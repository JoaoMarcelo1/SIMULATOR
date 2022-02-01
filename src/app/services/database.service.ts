import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseService {

  constructor(private sqlite: SQLite) {}

  public getDB() {
    return this.sqlite.create({
      name: 'products.db',
      location: 'default'
    });
  }
}