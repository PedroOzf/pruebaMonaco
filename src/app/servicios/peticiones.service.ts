import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { HttpClientModule} from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable()
export class PeticionesService{
  public url: string;

  constructor(public _http:HttpClient) {
    this.url = "http://localhost:9000"
  }

  get(url){
    return this._http.get(this.url+url);
  }
}
