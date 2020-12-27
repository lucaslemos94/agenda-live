import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  constructor(private liveService:LiveService, private sanitizer:DomSanitizer) { }

  previousLives: Live[];
  nextLives: Live[];

  next:boolean = false;
  previous: boolean = false;
  


  ngOnInit(): void {
    this.getPreviousLives();
    this.getNextLives();
    
  }

  
  getPreviousLives(){


    this.liveService.getLives('previous').subscribe(data =>{
      
      this.previousLives = data.content;
      this.previousLives.forEach(live =>{
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink)
      });
      this.previous = true;
    });
  }


  getNextLives(){
    this.liveService.getLives('next').subscribe(data =>{
      this.nextLives = data.content;
      this.nextLives.forEach(live =>{
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink)
      });
      this.next = true;
    });
  }

}
