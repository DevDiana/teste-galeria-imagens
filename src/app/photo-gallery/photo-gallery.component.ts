import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { PhotoGalleryService } from '../../service/photo-gallery.service';
import { BadgePipe } from '../pipe/badge.pipe';
import { Galeria } from '../modelo/galeria.model';
import { Observable } from 'rxjs';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
  standalone: true,
  imports:[HeaderComponent,CommonModule,BadgePipe, FormsModule],
     providers:[PhotoGalleryService]

})
export class PhotoGalleryComponent implements OnInit {
  galleryItems: Galeria[] = [];
  galerias$: Observable<Galeria[]> = new Observable<Galeria[]>();
  termoPesquisa: string = '';

  constructor(private photoGallery: PhotoGalleryService) { }

  ngOnInit() {
    this.getCardList();
  }

  getCardList() {
    this.photoGallery.getCardList().subscribe(
      (data: Galeria[]) => {
        console.log('Dados da galeria:', data);
        this.galleryItems = data;
      },
      (error) => {
        console.log('Erro ao obter a lista de imagens:', error);
      }
    );
  }

  pesquisar(termoPesquisa: string): void {
    console.log('Função pesquisar() chamada com termo:', termoPesquisa);
    if (termoPesquisa && termoPesquisa.trim()) {
      this.galerias$ = this.photoGallery.searchGallery(termoPesquisa);
    } else {
      this.getCardList();
    }
  }

}
