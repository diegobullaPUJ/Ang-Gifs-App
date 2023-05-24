import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public urlImage!: string;

  @Input()
  public alt: string = "";

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if( !this.urlImage ) throw new Error('URL property is required');
  }

  onLoad(): void {
    setTimeout(( ) => {
    this.hasLoaded = true;
    }, 1000);
  }


}
