import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm: FormGroup;  

  constructor(private fb: FormBuilder) {  
    this.myForm = this.fb.group({  
      name: ['', Validators.required], // Validación de campo requerido  
      email: ['', [Validators.required, Validators.email]], // Validación de email  
    });  
  }  

  onSubmit() {  
    if (this.myForm.valid) {  
      alert('Formulario valido:');  
    } else {  
      alert('Formulario inválido');  
    }  
  }  
}
