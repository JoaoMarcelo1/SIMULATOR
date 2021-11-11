import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaJogoPageRoutingModule } from './tela-jogo-routing.module';

import { TelaJogoPage } from './tela-jogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaJogoPageRoutingModule
  ],
  declarations: [TelaJogoPage]
})
export class TelaJogoPageModule {}
