import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomeComponent } from './containers/home/home.component';
import { TransactionComponent } from './containers/transaction/transaction.component';
import { HistoryComponent } from './containers/history/history.component';
import { Routes, RouterModule } from '@angular/router';
import { SenderComponent } from './containers/sender/sender.component';
import { ReceiverComponent } from './containers/receiver/receiver.component';
import { TransComponent } from './containers/trans/trans.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'transaction/sender', component: SenderComponent},
  { path: 'transaction/receiver', component: ReceiverComponent},
  { path: 'transaction/trans', component: TransComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HomeComponent,
    TransactionComponent,
    HistoryComponent,
    SenderComponent,
    ReceiverComponent,
    TransComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
