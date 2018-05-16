import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';



import { AppComponent } from './app.component';
import { AbuteComponent } from './Abute/abute.component';
import { FAQComponent } from './abute/FAQ.component';
import { CommissionerComponent } from './commissioner/commissioner.component';
import { HomeComponent } from './home/home.component';
import { PartyComponent } from './party/party.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from './Shared/api.service';
import { Ledamot, LedamotProcent, Parti, PartiProcent, PersonR  } from './Shared/classes.service';
import { BarComponent  } from './Shared/bar.component';
import { PieComponent  } from './Shared/pie.component';
import { Pie2Component  } from './Shared/pie2.component';
import { DataManagerService  } from './Shared/dataManager.service';
import { PersonCardComponent } from './Shared/person-card.component';
import { FilterPipe} from './Shared/filter.pipe';
import { ListComponent } from './Shared/list.component';
import { PartyButtenComponent } from './Shared/partyButton.component';
import { FilterByPartyPipe} from './Shared/filterByParty.pipe';
import { FilterLimitToPipe} from './Shared/filterLimitTo.pipe';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'hem', component: HomeComponent},
  { path: 'hem/:selectedCommissioner', component: HomeComponent},
  { path: 'parti', component: PartyComponent},
  { path: 'parti/:selectedParty', component: PartyComponent},  
  { path: 'ledamot', component: CommissionerComponent},
  { path: 'ledamot/:selectedCommissioner', component: CommissionerComponent},
  { path: 'om', component: AbuteComponent},
  ]

@NgModule({
  declarations: [
    AppComponent,
    AbuteComponent,
    FAQComponent,
    CommissionerComponent,
    HomeComponent,
    PartyComponent,
    NavbarComponent,
    FooterComponent,
    BarComponent,
    PieComponent,
    PersonCardComponent,
    FilterPipe,
    Pie2Component,
    ListComponent,
    PartyButtenComponent,
    FilterByPartyPipe,
    FilterLimitToPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [ApiService, Ledamot, LedamotProcent, Parti, PartiProcent, PersonR, DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
