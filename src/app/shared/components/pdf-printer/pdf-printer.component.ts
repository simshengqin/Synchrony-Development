import { Component, OnInit, Input } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-pdf-printer',
  templateUrl: './pdf-printer.component.html',
  styleUrls: ['./pdf-printer.component.scss']
})
export class PdfPrinterComponent implements OnInit {

  @Input() query_by_year_month;
  @Input() instructor_name;
  @Input() instructor_school;
  @Input() dataSource;
  @Input() display_accumulated_time;

  constructor() { }

  ngOnInit(): void {
  }

   // Method: Create PDF
   createPdf() {

    var duration_range = ""
    if (this.query_by_year_month.length == 0){
      duration_range = "All"
    } else {
      var index = 0;
      for(var ele of this.query_by_year_month){
        if(index > 0){
          duration_range += ", " + ele
        } else {
          duration_range += ele
        }
      }
    }
    
    var doc = new jsPDF();
    doc.setFontSize(14);
    doc.text('ACTIVITY LOG: ' + this.instructor_name + ", " + this.instructor_school.toUpperCase(), 11, 8);
    doc.setFontSize(8);
    doc.setTextColor(100);

    let headerData:any[] = [["No.","Assignment Name", "Student Name", "Student Surname", "Feedback Date", "Duration(Minutes)"]];
    let bodyData:any[] = this.getBodyPDF(duration_range);
    
    (doc as any).autoTable({
      head: headerData,
      body: bodyData,
      theme: 'plain',
      didDrawCell: data => {
        // console.log(data.column.index)
      }
    })
    doc.save("Activity Log - " + this.instructor_name + " - " + this.instructor_school + ".pdf")
  }
  // Method: manipulate PDF Body result
  private getBodyPDF(duration_range:string){
    var result:any[] = []
    var index:number = 0;
    for(var ele of this.dataSource){
      index += 1
      result.push([ index, ele["name"], ele["first_name"], ele["last_name"], ele["date"], parseFloat((ele["seconds"] / 60).toFixed(3)) ])
    }
    result.push([" "," "," "," ","TOTAL TIME:", this.display_accumulated_time + " Mins"])
    result.push([" "," "," "," ","DURATION RANGE:", duration_range ])
    result.push([" "," "," "," "," ", " " ])
    result.push([" "," "," "," "," ", " " ])
    result.push([" "," "," "," "," ", " " ])
    result.push([" "," "," ","SIGNATURE: "," ___________________", " " ])
    return result
  }

}
