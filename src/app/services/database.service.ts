import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



@Injectable()
export class DatabaseService {

  constructor(private sqlite: SQLite) {}

  public getDB() {
    return this.sqlite.create({
      name: 'login.db',
      location: 'default'
    });
  }
  public createDatabase(){
    return this.getDB()
    .then((db: SQLiteObject) =>{
       this.createTables(db);
       this.insertDefaultItems(db);
    })
    .catch(e => console.log(e));
  }
   private createTables(db: SQLiteObject){
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS login (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, password integer)'],

    ])
    .then(() => console.log('Tabelas criadas'))
    .catch(e => console.error('Erro ao criar as tabelas', e));
   }

   private insertDefaultItems(db: SQLiteObject){
    db.executeSql('select COUNT(id) as qtd from login',[])
    .then((data: any) => {
      //Se não existe nenhum registro
      if (data.rows.item(0).qtd == 0) {

        //criando tabelas
      db.sqlBatch([


      ])
      .then(() => console.log('Dados padrões incluídos'))
      .catch(e => console.error('Erro ao incluir dados padrões', e));
    }
  })
  .catch(e => console.error('Erro ao consultar a qtd de logins cadastrados', e));
}
}
