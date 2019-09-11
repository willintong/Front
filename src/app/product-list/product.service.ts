import {Injectable} from '@angular/core';
import {IProduct} from './iProduct';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'http://localhost:8082/api/products';
  private productService: ProductService;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe();
  }

  deleteProducts(id: string): Observable<IProduct> {
    const url = `${this.productUrl}/${id}`;
    return this.http.delete<IProduct>(url ).pipe();
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(this.productUrl, product).pipe();
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.productUrl, product).pipe();
  }

}
