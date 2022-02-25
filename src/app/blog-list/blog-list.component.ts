import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {BlogPost} from "../blog-post";
import { BlodDataService } from '../blod-data.service';



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPost:BlogPost[][];
  currentPageNumber:number;

  constructor(private blogData: BlodDataService) { }
 
  ngOnInit(): void {
    this.currentPageNumber=0;
    this.blogPost=this.blogData.getData();
    

  }

  

  updatePage(pageNumber){
    this.currentPageNumber=pageNumber;
  }
}
