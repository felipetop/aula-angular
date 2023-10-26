import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  public isLoading$ = this.loadingService.isLoading$;

  /**
   *
   * @param loadingService Serviço de loading
   */
  constructor(private loadingService: LoadingService) { }

}
