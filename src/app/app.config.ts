import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BadgePipe } from './pipe/badge.pipe';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes)]
};
