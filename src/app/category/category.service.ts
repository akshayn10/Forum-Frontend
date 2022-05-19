import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from './category-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllcategorys(): Observable<Array<CategoryModel>> {
    return this.http.get<Array<CategoryModel>>('http://localhost:8080/api/category');
  }

  createcategory(categoryModel: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>('http://localhost:8080/api/category',
      categoryModel);
  }
}
