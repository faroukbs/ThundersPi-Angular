  import { Component, OnInit, ViewChild } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
  import { FileDB } from 'src/app/models/ghof/fileDB';
  import { Post } from 'src/app/models/ghof/post';
  import { PostServiceService } from 'src/app/services/post-service.service';
  import { EditorComponent, EditorModule } from '@tinymce/tinymce-angular';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
  
  
  @Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css',
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
  export class AddPosttComponent implements OnInit {
    public postform: FormGroup;
    currentFile: any;
    selectedFiles: FileList ;
    file: FileDB;
    post:Post;
   
  
    constructor(private ps:PostServiceService,private formBuilder: FormBuilder,private router:Router
      ,     private toastr: ToastrService) { }
  
    ngOnInit(): void {
  
        this.initForm();
      
      
    }
    initForm() {
      this.postform = this.formBuilder.group({
        title: ['', Validators.required],
        content: ['', Validators.required],
        file: [null, Validators.required],
    });
  
    this.postform.valueChanges.subscribe(
      data=>{console.log(this.postform)}
    )
  }
  
  ajouter(){
    console.log(this.postform.value);
    this.ps.ajoutPost(this.postform.value).subscribe(
    data=>{
      console.log('ssss',data)
      this.post=data;
      this.ps.affecterfileaupost(this.post.postId,this.file.id,this.post).subscribe(
        res=>{
          Swal.fire({
            'icon': 'success',
            'text': 'Post added successfully !'
          })
          this.router.navigateByUrl("/commentpost")
        }, err => {
          Swal.fire({
            'icon': 'error',
            'text': 'Missed Informations !'
          })
              
        }
     
    );
   }
  );
    
  }
  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }
  
    upload() :FileDB{
      this.currentFile = this.selectedFiles.item(0);
      console.log(this.selectedFiles)
      console.log(this.currentFile)
      this.ps.upload(this.currentFile).subscribe(
      
        event => {
          
                   console.log("file",event)
          
            this.ps.getFilesdetail(event).subscribe(
              data=>{
                this.file=data;
                console.log('file',this.file)
                       
                
              }
            );
      
          
        }
       );
      return this.file;
    }
  }
  