import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'CustomUser'})

export class CustomUserPipe implements PipeTransform {
  transform(value: string, Id: number) : string {
    // return value + "# POST " + Id.toString();

    var pos: string = "";

    if(value == "Anshu Beniwal") {
        pos = "CEO"
    }
    else if(value == "Sweta Kumari") {
        pos = "Manager"
    }
    else if(value == "Sheenam Bee") {
        pos = "Employee"
    }
    else if(value == "Isha Lingayat") {
        pos = "Employee"
    }
    else  {
        pos = "HR"
    }
    return value + " # POST"  + Id.toString() + "(" + pos +")";
  }
}