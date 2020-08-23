import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MaterialCollectionModule } from ".././material-collection/material-collection.module";
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.componet';
import { CurrencyListComponent } from './currency/currency-list/currency-list.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, CurrencyListComponent],
  imports: [
    CommonModule,
    MaterialCollectionModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [MatConfirmDialogComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}
