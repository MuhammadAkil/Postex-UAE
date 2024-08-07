import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { WhyPostexComponent } from './sections/why-postex/why-postex.component';
import { TrustedClientsComponent } from './sections/trusted-clients/trusted-clients.component';
import { PotentialPlatformsComponent } from './sections/potential-platforms/potential-platforms.component';
import { AddingValueComponent } from './sections/adding-value/adding-value.component';
import { OptimizedDataComponent } from './sections/ecom-opprations/optimized-data.component';
import { FeaturesComponent } from './sections/features/features.component';

const routes:Routes=[
  {path:'', component:HomeComponent}
]
const components=[
  HeroSectionComponent,
  AddingValueComponent,
  FeaturesComponent,
  OptimizedDataComponent,
  PotentialPlatformsComponent,
  TrustedClientsComponent,
  WhyPostexComponent
  
]

@NgModule({
  declarations: [
    HeroSectionComponent,
    WhyPostexComponent,
    TrustedClientsComponent,
    PotentialPlatformsComponent,
    AddingValueComponent,
    OptimizedDataComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ...components
  ]
})
export class HomeModule { }
