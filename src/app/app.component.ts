import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMenuOpen = false;

  /**
   * Responsável pelo controle de abrir e fechar o menu
   */
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
