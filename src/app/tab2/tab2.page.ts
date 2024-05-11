import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Card } from '../models/card';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {

  constructor() { }

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  index = 0;

  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
  }


  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;

  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }


  contents: Card[] = [
    {
      title: 'Computer',
      description: 'Description about computer...',
      url: 'https://picsum.photos/id/1/640/480',
    },
    {
      title: 'Building',
      description: 'Building description...',
      url: 'https://picsum.photos/id/101/640/480',
    }, {
      title: 'Glass over a computer',
      description: 'Description of a glass over a computer',
      url: 'https://picsum.photos/id/201/640/480',
    }, {
      title: 'Autumn',
      description: 'Description about autumn leaves',
      url: 'https://picsum.photos/id/301/640/480',
    }, {
      title: 'Balloon',
      description: 'Coloured balloon',
      url: 'https://picsum.photos/id/401/640/480',
    },
  ];

}


