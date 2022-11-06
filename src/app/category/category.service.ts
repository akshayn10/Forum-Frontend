import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from './category-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly postServerUrl = environment.postServerUrl;

  constructor(private http:HttpClient) { }

  getAllcategorys(): Observable<Array<CategoryModel>> {
    return this.http.get<Array<CategoryModel>>(this.postServerUrl+'category');
  }

  createcategory(categoryModel: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.postServerUrl+'category',
      categoryModel);
  }
}
