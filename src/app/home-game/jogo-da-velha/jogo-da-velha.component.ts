import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo-da-velha',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './jogo-da-velha.component.html',
  styleUrl: './jogo-da-velha.component.css'
})
export class JogoDaVelhaComponent {
  player1: string = '';
  player2: string = '';
  player1Error: string = '';
  player2Error: string = '';

  constructor(private router: Router) {}

  startGame(): void {
    this.player1Error = '';
    this.player2Error = '';

    if (!this.player1) {
      this.player1Error = 'Nome do Jogador 1 é obrigatório';
    }
    if (!this.player2) {
      this.player2Error = 'Nome do Jogador 2 é obrigatório';
    }

    if (this.player1 && this.player2) {
      this.router.navigate(['/home-game/jogo-da-velha'], {
        state: { player1: this.player1, player2: this.player2 }
      });
    }
  }
}