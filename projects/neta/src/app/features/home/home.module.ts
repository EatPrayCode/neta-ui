import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LazyElementsModule } from '@angular-extensions/elements';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '../../shared/shared.module';
import { environment } from '../../../environments/environment';

import { FEATURE_NAME, reducers } from './home.state';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AppointmentsContainerComponent } from './appointments/components/appointments-container.component';
import { TicketsEffects } from './appointments/appointments.effects';
import { AppointmentsService } from './appointments/appointments.service';
import { HomeEffects } from './home.effects';
import { ApiService } from '../../core/api/api.service';
import { CommonModule } from '@angular/common';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/home/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    LazyElementsModule,
    SharedModule,
    HomeRoutingModule,
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([
      HomeEffects,
      TicketsEffects
    ])
  ],
  declarations: [
    HomeComponent,
    AppointmentsContainerComponent,
  ],
  providers: [
    AppointmentsService,
    ApiService
  ]
})
export class HomeModule {
  constructor() {}
}
