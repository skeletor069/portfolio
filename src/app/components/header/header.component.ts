import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menuHome') menuHome!:ElementRef
  @ViewChild('menuAbout') menuAbout!:ElementRef
  @ViewChild('menuWorks') menuWorks!:ElementRef
  @ViewChild('menuContact') menuContact!:ElementRef

  home:any;
  about:any;
  works:any;
  contact:any;

  activePage:string = 'home';


  constructor() { }

  ngOnInit(): void {
    this.home = document.getElementById('home');
    this.about = document.getElementById('about');
    this.works = document.getElementById('works');
    this.contact = document.getElementById('contact');
  }

  goTo(pageId:string){
    let element = document.getElementById(pageId);
    element?.scrollIntoView({behavior:"smooth", block:"start", inline: "nearest"});
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll(){
    const windowHeight = window.innerHeight;
    const boundingRectHome = this.home.getBoundingClientRect();
    const boundingRectAbout = this.about.getBoundingClientRect();
    const boundingRectWorks = this.works.getBoundingClientRect();
    const boundingRectContact = this.contact.getBoundingClientRect();
    console.info(boundingRectHome?.bottom, boundingRectAbout?.bottom);
    if(boundingRectContact?.bottom <= windowHeight){
      console.log('contact');
      this.activePage = 'contact';
    }else if(boundingRectWorks.bottom <= windowHeight){
      console.log('works');
      this.activePage = 'works';
    }else if(boundingRectAbout.bottom <= windowHeight){
      console.log('about');
      this.activePage = 'about';
    }else{
      console.log('home');
      this.activePage = 'home';
    }
  }

  isActive(pageId:string){
    return this.activePage == pageId;
  }


}
