import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { SelectorPage } from '../pages/selector/selector';
import { PopularPage } from '../pages/popular/popular';
import { BuilderComponent } from '../components/builder/builder';
import { MarketsComponent } from '../components/markets/markets';
import { BetslipComponent } from '../components/betslip/betslip';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    SelectorPage,
    PopularPage,
    BuilderComponent,
    MarketsComponent,
    BetslipComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    SelectorPage,
    PopularPage,
    BuilderComponent,
    MarketsComponent,
    BetslipComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
