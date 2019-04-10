import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post = null;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setTimeout(() => {
      // Synchronizacja: Model -> View
      this.changeDetector.detectChanges();
    }, 500);
  }

  getAuthorLink() {
    return `/users/${this.post.author.id}`;
  }

  getPostLink() {
    return `/posts/${this.post.id}`;
  }

}
