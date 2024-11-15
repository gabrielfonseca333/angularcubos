import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetalleCuboComponent } from './components/detalle-cubo/detalle-cubo.component';
import { CrearCuboComponent } from './components/crear-cubo/crear-cubo.component';
import { FormsModule } from '@angular/forms';
import ServiceCubos from './services/service.cubos';
import { MarcasCubosComponent } from './components/marcas-cubos/marcas-cubos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrearCompraComponent } from './components/crear-compra/crear-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    DetalleCuboComponent,
    CrearCuboComponent,
    MarcasCubosComponent,
    PerfilComponent,
    CrearCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
