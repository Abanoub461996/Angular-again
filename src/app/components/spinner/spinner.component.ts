import { Component } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  loading:boolean;
  constructor(public loader: LoaderService) { 
    this.loading = this.loader.getLoading();
  }
}
