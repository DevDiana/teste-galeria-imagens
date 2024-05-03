import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { Galeria } from '../app/modelo/galeria.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoGalleryService {

  private apiUrl = 'http://localhost:3000/galerias';

  constructor(private http: HttpClient) { }


  getCardList(): Observable<Galeria[]> {
    console.log('Fazendo solicitação para:', this.apiUrl);
    return this.http.get<Galeria[]>(this.apiUrl).pipe(
      tap(data => console.log('Resposta da solicitação:', data)),
      catchError(error => {
        console.error('Erro na solicitação:', error);
        return of([]);
      })
    );
  }
  searchGallery(termo: string): Observable<Galeria[]> {
    const url = `${this.apiUrl}?title=${termo}`;
    return this.http.get<Galeria[]>(url);
  }
  excluirItem(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(
      tap(() => console.log(`Item com ID ${id} excluído com sucesso`)),
      catchError(error => {
        console.error(`Erro ao excluir item com ID ${id}:`, error);
        return throwError(error);
      })
    );
  }

}
