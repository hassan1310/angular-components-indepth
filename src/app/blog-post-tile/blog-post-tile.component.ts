import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: BlogPost
  fullSuammary: string;
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit(): void {
    this.fullSuammary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 5);
  }

  getAllSummary(){
    this.post.summary=this.fullSuammary
  }
}
