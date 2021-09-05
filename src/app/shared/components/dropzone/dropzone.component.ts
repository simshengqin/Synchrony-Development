import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {
  files: File[] = [];
  @Input() acceptMultipleFiles;
  @Input() label: string;
  @Input() acceptedFileTypes: string; // .pdf,.mp4
  @Output() fileEmit = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event: any): void {
    if (!this.acceptMultipleFiles) {
      this.files = [];
    }
    this.files.push(...event.addedFiles);
    this.fileEmit.emit(this.files);
  }

  onRemove(event: any): void {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
