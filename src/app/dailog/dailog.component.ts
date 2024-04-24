import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Define an interface for the dialog data
export interface DialogData {
  elementData: any; // Adjust this type according to your data structure
}

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData // Inject the dialog data
  ) {
    console.log(this.data.elementData)
  }

  ngOnInit(): void {
    // Implement initialization logic here if needed
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
