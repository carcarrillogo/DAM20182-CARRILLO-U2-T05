import {Injectable} from "@angular/core";
import {Http} from "@angular/http"
@Injectable()
export class ApiRest{
  public alumnos:any;

  constructor(private http:Http){

}
getUsers():void{
  this.http.get("http://127.0.0.1:8080/alumnos.json")
  .subscribe(
    (res) => { 
      this.alumnos = res.json();
      console.log(this.alumnos);
    },
    function(err) {
      console.log(err);
    }
  );
}
}
