import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotoGalleryComponent, HeaderComponent,
    HttpClientModule, CommonModule],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-anota-ai';
}
