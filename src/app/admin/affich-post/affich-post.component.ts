import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/ghof/post';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-affich-post',
  templateUrl: './affich-post.component.html',
  styleUrls: ['./affich-post.component.css',
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
export class AffichPostComponent implements OnInit {
  public cmtform: FormGroup;
  post:Post;
  nbrlike:Number
  nbrdislike:Number;
  isReady:boolean=false;
  listofpost:Post[];


  constructor(private ps : PostServiceService,private router: ActivatedRoute,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.getpost(this.router.snapshot.params?.['id'])
    this.initForm()
  }
  initForm() {
    this.cmtform = this.formBuilder.group({
      content: ['', Validators.required],

  });

  this.cmtform.valueChanges.subscribe(
    data=>{console.log(this.cmtform)}
  )
}
getpost(id:Number){
  this.ps.getPostbyId(id).subscribe(
    data=>{
      this.post=data;
      this.isReady=true;
      this.ps.getlike(data.postId).subscribe(
        res=>{
          
          this.nbrlike=res;
        }
      )
      this.ps.getdislike(data.postId).subscribe(
        res=>{
          this.nbrlike=res;
        }
      )
    }
  )
}
ajouter(post:Number){
  console.log(this.cmtform.value);
  this.ps.addcomentaire(post,1,this.cmtform.value).subscribe(
  data=>{
    window.location.reload();
      }
   
  );

}

supprimer(post :any){

  this.ps.deletePost(post.postId).subscribe(()=>this.ps.getPost().subscribe(
    data=>{
      this.listofpost=data
      
    }
  )
  );
}

addlike(post:Post){
  this.ps.addlike(post.postId,1,post).subscribe(
    data=>{

        this.ps.getlike(post.postId).subscribe(
          res=>{
            console.log(this.nbrlike)

            this.nbrlike=res;
          }
        )
        this.ps.getdislike(post.postId).subscribe(
          res=>{

            this.nbrdislike=res;

          }
        )
      }
  )
}

adddislike(post:Post){
  this.ps.addDislike(post.postId,1,post).subscribe(
    data=>{

        this.ps.getdislike(post.postId).subscribe(
          res=>{

            this.nbrdislike=res;

          }
        )
        this.ps.getlike(post.postId).subscribe(
          res=>{
            
            this.nbrlike=res;
          }
        )
      }
  )
}
}
