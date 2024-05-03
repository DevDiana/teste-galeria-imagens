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
    this.galerias$ = this.photoGallery.getCardList();
  }

  pesquisar(termoPesquisa: string): void {
    if (termoPesquisa && termoPesquisa.trim()) {
      this.galerias$ = this.photoGallery.searchGallery(termoPesquisa);
    } else {
      this.getCardList();
    }
  }
  excluirItem(id: number): void {
    this.photoGallery.excluirItem(id).subscribe(
      () => {
        this.getCardList();
      },
      error => {
        console.error('Erro ao excluir item:', error);
      }
    );
  }

}
