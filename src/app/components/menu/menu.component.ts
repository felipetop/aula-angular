import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  isMenuOpen = false;

  /**
   * Responsável pelo controle de abrir e fechar o menu
   */
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
