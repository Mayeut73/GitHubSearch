import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
    private username:string;
    private client_id = 'f739a3ed0612e17e2b82';
    private client_secret= '49b751394bd35af92ff01902364eff20051715e5';

    constructor(private _http: Http){
        console.log('GitHubService Ready');
        this.username = 'Mayeut73';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username+ '?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username+ '/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }

}