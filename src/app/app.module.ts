import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import {InterpolateComponent} from "./interpolate/interpolate.component";
import {InterpolateExtendComponent} from "./interpolate/interpolate-extend.component";
import { InterpolateOptionalComponent } from './interpolate-optional/interpolate-optional.component';
import {BindingComponent} from './binding/binding.component';
import { EvenementComponent } from './evenement/evenement.component';
import { VariableComponent } from './variable/variable.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { SwitchComponent } from './switch/switch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    InterpolateExtendComponent,
    InterpolateOptionalComponent,
    BindingComponent,
    EvenementComponent,
    VariableComponent,
    IfComponent,
    ForComponent,
    SwitchComponent,
    NgstyleComponent,
    PipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
