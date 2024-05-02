/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotoGalleryService } from './photo-gallery.service';

describe('Service: PhotoGallery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoGalleryService]
    });
  });

  it('should ...', inject([PhotoGalleryService], (service: PhotoGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
