import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ErrorStateMatcher, MatButtonModule,MatCardModule,MatDatepicker,MatDatepickerModule,MatIconModule,MatInputModule, MatMenuModule, MatNativeDateModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule, MatTableModule, MatToolbarModule, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { RegisterlistComponent } from './registerlist/registerlist.component';
import { MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterlistComponent
  ],
  imports: [
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,  
    BrowserAnimationsModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,  
    MatNativeDateModule, 
    MatRadioModule, 
    MatSelectModule,  
    MatOptionModule,  
    MatSlideToggleModule ,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule
  
  ],
  exports: [  
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,  
    BrowserAnimationsModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,  
    MatNativeDateModule,
    MatRadioModule,    
    MatSelectModule,  
    MatOptionModule,  
    MatSlideToggleModule,
    MatTableModule  
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
