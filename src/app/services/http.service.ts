import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpService {
    DOMAIN: string;

    constructor(private http: HttpClient) {
        this.initialiseDomain();
    }

    private initialiseDomain(): void {
        this.DOMAIN = "https://localhost:44345/api/";
    }

    protected get<TRequest, TResponse>(request: TRequest, path: string): Observable<TResponse> {
        return this.http.get<TResponse>(this.DOMAIN + path, request);
    }

    protected post<TRequest, TResponse>(request: TRequest, path: string): Observable<TResponse> {
        return this.http.post<TResponse>(this.DOMAIN + path, request);
    }

    protected put<TRequest, TResponse>(request: TRequest, path: string): Observable<TResponse> {
        return this.http.put<TResponse>(this.DOMAIN + path, request);
    }

    protected delete<TRequest, TResponse>(request: TRequest, path: string): Observable<TResponse> {
        return this.http.delete<TResponse>(this.DOMAIN + path, request);
    }
}