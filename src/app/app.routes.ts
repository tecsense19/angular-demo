import { Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { WalletComponent } from './wallet/wallet.component';
import { SecurityComponent } from './security/security.component';

export const routes: Routes = [
    { path: '', redirectTo: '/discover', pathMatch: 'full' },
    { path: 'discover', component: DiscoverComponent },
    { path: 'home', component: HomeComponent },
    { path: 'bank', component: BankComponent },
    { path: 'analysis', component: AnalysisComponent },
    { path: 'wallet', component: WalletComponent },
    { path: 'security', component: SecurityComponent },
];
