import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss']
})
export class MatDialogComponent implements OnInit {
  commentEl:Array<[string, string, string]> = [] 

  commentForm!: FormGroup;
  get f() {
    return this.commentForm.controls;
  }

  constructor(
    public dialogRef: MatDialogRef<MatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,) {}

  ngOnInit(): void {

this.commentForm = this.fb.group({
  text: ['', [Validators.required]],
});

  }
  onSubmit(el:any) {

    
    this.dialogRef.close(this.commentForm.value);
  }

  delite(el:any){
    this.commentForm.value 
  
    this.dialogRef.close('');
    
  }
}
