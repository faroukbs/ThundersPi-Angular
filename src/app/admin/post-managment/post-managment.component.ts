import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/ghof/post';
import { PostServiceService } from 'src/app/services/post-service.service';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-managment',
  templateUrl: './post-managment.component.html',
  styleUrls: ['./post-managment.component.css',
  '../../../assets/front/css/style.css',
  '../../../assets/front/css/slick.css',
  '../../../assets/front/css/responsive.css',
  '../../../assets/front/css/nice-select.css',
  '../../../assets/front/css/magnific-popup.css',
  '../../../assets/front/css/jquery.nice-number.min.css',
  '../../../assets/front/css/font-awesome.min.css',
  '../../../assets/front/css/default.css',
  '../../../assets/front/css/bootstrap.min.css',
  '../../../assets/front/css/animate.css']
})
export class PostManagmentComponent implements OnInit {
  listofpost:Post[];
  constructor(private ps:PostServiceService) { }

  ngOnInit(): void {
    this.getallpost();
  }
getallpost(){
  this.ps.getPost().subscribe(
    data=>{
      console.log(data)
      this.listofpost=data;
    }
  )
}
supprimer(post :any){
  this.ps.deletePost(post.postId).subscribe(()=>this.ps.getPost().subscribe(
    data=>{
      this.listofpost=data
      
    }
  )
  );
}
}
