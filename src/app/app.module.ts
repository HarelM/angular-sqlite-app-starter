import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLiteService } from './services/sqlite.service';
import { DetailService } from './services/detail.service';
import { InitializeSqliteService } from './services/initialize.sqlite.service';

import { MigrationService } from './services/migrations.service';
import { ProductRepository } from './repositories/product.repository';
import { DatabaseService } from './services/database.service';
import { ProductDefaultQueryRepository } from './repositories/product.default.query.repository';


export function initializeFactory(init: InitializeSqliteService) {
  return () => init.initializeApp();
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    SQLiteService,
    DetailService,

    DatabaseService,

    InitializeSqliteService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [InitializeSqliteService],
      multi: true
    },

    MigrationService,
    ProductRepository,
    ProductDefaultQueryRepository,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
