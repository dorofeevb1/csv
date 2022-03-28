import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/localStorageService/localStorage.service';

@Component({
  selector: 'app-csv-form',
  templateUrl: './csv-form.component.html',
  styleUrls: ['./csv-form.component.scss']
})
export class CsvFormComponent  {

allString:any = []
allArray:any = []
tree:any  = []

  constructor() {
  }

  changeListener(file: any) {
        this.fileText(file.target);            
      }

  fileText(inputValue: any): void {
 // Получение данных из файла 
      var file: File = inputValue.files[0];
      var myReader: FileReader = new FileReader();
          myReader.onloadend = (e) => {
        
          let fileString:any;

          fileString = myReader.result as string;
          this.allString = fileString.split('\r\n')

        for (let text of this.allString) {
          this.allArray.push(text.split(","))
        }
        this.createArray()
         };
         myReader.readAsText(file);
  }

  createArray(){
    let o:any = new Object()
    for(let all of this.allArray ){  
      let childs:any = new Object()
      if (this.tree.length ) {
        if(childs.id){
          o.childs.forEach( (el: { id: number; }) => {
            if(el.id == Number(all[2]) && !undefined && !NaN){ 
              console.log(o.childs);
              
              tree(childs.id,all,childs)
              console.log(childs);
              }
          });
         
        }
        else{
          if(o.Id == Number(all[2]) && !undefined && !NaN){ 
          tree(o.Id,all,childs)
          o.childs.push(childs)
          console.log(o);
          }
        }
      }else{
        o = {}
        o.Id = Number(all[0])
        o.text = all[1]
        o.parentid = Number(all[2])
        o.childs=[]
        this.tree.push(o)
        tree(o.Id,all,childs)
      }
    }
  }
}

function tree( id:number ,all: string,childs:any ) {
      if(id == Number(all[2]) && !undefined && !NaN){ 
      childs.id = Number(all[0])
      childs.text = all[1]
      childs.parentid = Number(all[2]) 
    }
    else{}  
    
}
