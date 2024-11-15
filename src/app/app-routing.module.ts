import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetalleCuboComponent } from './components/detalle-cubo/detalle-cubo.component';
import { MarcasCubosComponent } from './components/marcas-cubos/marcas-cubos.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrearCompraComponent } from './components/crear-compra/crear-compra.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "detalle-cubo/:id", component: DetalleCuboComponent},
  {path: "marca/:nombre", component: MarcasCubosComponent},
  {path:"login", component: LoginComponent},
  {path:"perfil", component: PerfilComponent},
  {path:"comprarcubo", component: CrearCompraComponent},

    // {path:"/marca/:nombre", component: CubosMarcasComponent},
    // {path:"/login", component: LoginComponent},
    // {path:"/perfil", component: PerfilComponent},
    // {path:"/comprarcubo", component: ComprarCubo},
    // {path: "/register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
