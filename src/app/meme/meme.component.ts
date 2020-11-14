import { Component, OnInit, Input } from '@angular/core';
import { MemeService } from './meme.service';


@Component({
  selector: 'fc-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  @Input() description = "";
  @Input() url = "";

  constructor(private memeService : MemeService) {
   }

  ngOnInit() {
  }

}
