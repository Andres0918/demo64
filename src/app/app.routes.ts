import { Routes } from '@angular/router';
import { SumaComponent } from './pages/suma/suma.component';
import { RestaComponent } from './pages/resta/resta.component';
import { MultiplicacionComponent } from './pages/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './pages/division/division.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PostComponent } from './components/post/post.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { JavaComponent } from './components/java/java.component';



export const routes: Routes = [
    {path:"inicio", component: InicioComponent},
    {path:"suma", component: SumaComponent},
    {path:"resta", component: RestaComponent},
    {path:"multiplicacion", component: MultiplicacionComponent},
    {path:"division", component: DivisionComponent},
    {path:"acercade", component: AcercadeComponent},
    {path:"post", component: PostComponent},
    {path:"mensajes", component: MensajesComponent},
    {path:"serviceJava", component:JavaComponent},
];

