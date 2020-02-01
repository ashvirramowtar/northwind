import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetProductsRequest } from '../models/GetProductsRequest';
import { GetProductsResponse } from '../models/GetProductsResponse';

@Injectable()
export class ProductService extends HttpService {

    PATH: string;

    constructor(http: HttpClient) {
        super(http);
        this.initialisePath();
    }

    private initialisePath(): void {
        this.PATH = "products";
    }

    public getProducts(): Observable<GetProductsResponse> {
        let request = new GetProductsRequest();
        return super.get(request, this.PATH);
    }
 }