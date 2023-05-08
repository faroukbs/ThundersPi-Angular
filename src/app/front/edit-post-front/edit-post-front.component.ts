import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileDB } from 'src/app/models/ghof/fileDB';
import { Post } from 'src/app/models/ghof/post';
import { PostServiceService } from 'src/app/services/post-service.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { EditorComponent, EditorModule } from '@tinymce/tinymce-angular';
@Component({
  selector: 'app-edit-post-front',
  templateUrl: './edit-post-front.component.html',
  styleUrls: ['./edit-post-front.component.css',
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
export class EditPostFrontComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: any;
  post: Post;
  file: FileDB;
  listfile: FileDB;
  isReady: boolean = false;
  public postform: FormGroup;
  constructor(private ps: PostServiceService, private router: ActivatedRoute, private route: Router, 
    private formBuilder: FormBuilder,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.get(this.router.snapshot.params?.['id']);
    this.ps.getFilesdevoyage(this.router.snapshot.params?.['id']).subscribe(
      data => {
        console.log('data', data);
        this.listfile = data;

      }
    );
  }
  initForm(data: Post) {
    this.postform = this.formBuilder.group({
      title: [data?.title, Validators.required],
      content: [data?.content, Validators.required],
    });

    this.postform.valueChanges.subscribe(
      data => { console.log(this.postform) }
    )
  }
  get(id: number) {
    this.ps.getPostbyId(id).subscribe(
      data => {
        console.log(data)
        this.post = data;
        this.isReady = true;
        this.initForm(data)

      }
    );
  }
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  upload(): FileDB {
    this.currentFile = this.selectedFiles.item(0);
    console.log(this.selectedFiles)
    console.log(this.currentFile)
    this.ps.upload(this.currentFile).subscribe(

      event => {

        console.log("file", event)

        this.ps.getFilesdetail(event).subscribe(
          data => {
            this.file = data;
            this.ps.affecterfileaupost(this.post.postId,this.file.id,this.post).subscribe(
              res=>{
               this.listfile=this.file;
             
              }
           
          );
            console.log('file', this.file)


          }
        );


      }
    );
    return this.file;
  }

  modifier() {
    this.ps.updatePost(this.router.snapshot.params?.['id'], this.postform.value).subscribe(
      data => {
        
        console.log(this.postform.value);
  
        this.post = data;
        Swal.fire({
          'icon': 'success',
          'text': 'Post Modified Successfully !'
        });
            
       // this.route.navigate(["/listPost"]);
      }
    );
  }
  
   
  supprimer(files: Number) {
    this.ps.deletefile(files,this.post.postId).subscribe(
      () => {
        this.ps.getFilesdevoyage(this.router.snapshot.params?.['id']).subscribe(
          data => {
            console.log(data)
            this.listfile = data
          }
        )
      }
    );
  }
}
