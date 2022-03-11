import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/Categories/categories.service';

@Component({
  selector: 'app-upload-category',
  templateUrl: './upload-category.component.html',
  styleUrls: ['./upload-category.component.css']
})
export class UploadCategoryComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient, private categoryservice: CategoriesService) { }

  ngOnInit(): void {
  }

  uploadCategory() {
    //this.http.post(this.categoryservice.UploadCategory).subscribe();
  }
}
