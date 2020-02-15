import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PredictionService } from './prediction.service';
import { Predict } from './predict';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Heart Disease Prediction';
  userData;
  prediction;
  danger:boolean;
  displayAccuracy = false;
  constructor(
    private fb: FormBuilder,
    private _service: PredictionService
  ) { }

  ngOnInit() {
    this.userData = this.fb.group({
      age: [''],
      sex: [''],
      cp: [''],
      thal: [''],
      trestbps: [''],
      thalach: [''],
      fbs: ['']
    });
  }

  predict() {
    console.log(this.userData.value);
    this._service.makePrediction(this.userData.value).subscribe( (res:Predict) => {
      console.log(res);
      this.displayAccuracy = true;
      this.prediction = res.result;
      if(this.prediction == 0){
        this.danger = false;
      }else{
        this.danger = true;
      }
    }, err => {
      console.log(err);
    });
  }
}