import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/localStorageService/localStorage.service';

@Component({
  selector: 'app-csv-form',
  templateUrl: './csv-form.component.html',
  styleUrls: ['./csv-form.component.scss']
})
export class CsvFormComponent  {

allString:any = []
allArrayText:any = []
alltext:any [] = []
count:any  = []
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
          this.allArrayText.push(text.split(","))
        }
        this.createArray()
         };
         myReader.readAsText(file);
  }



  createArray(){
    // Создание массива объектов
       let o:any = new Object()
   
       for (let alltext of this.allArrayText){
         let c = alltext[1]
         o = {}
         o.parent = c
         o.childs = []
         this.count.push(o)
   
         this.filterText(alltext, o)  
       

       }
       
     }
     filterText(alltext:any, o:any){
       let a = alltext[0]
       for (let file of this.allArrayText){
         if (a === file[2]) {  
             let child:any = new Object( )
             child.text = file[1]
             child.id = file[0]
             child.parentId = file[2]
             o.childs.push(child)
             this.getAllCategory(file)
         }else{}
         
     }
   }
  getAllCategory(child:any){
    let tree: any[] = [], map = new Map();
    createTree(child)
    function createTree(arr:any) {
      if (!arr || !arr.length) {
         return []; 
        }
      for (var i = 0, len = arr.length; i < len; ++i) {
        var item = arr[i];
        var mapItem = map.get(item.id);
        if (!mapItem || Array.isArray(mapItem)) {
          if (mapItem) {
            item.children = mapItem;
          }
          map.set(item.id, item);
        }
        if (item.parentId == null) {
          tree.push(item);  
        } else {
          var parentItem = map.get(item.parentId);
          if (!parentItem) {
            map.set(item.parentId, [item]);
            
          } else {
            var children = Array.isArray(parentItem) ? parentItem : (parentItem.children = parentItem.children || []);
            children.push(item);
          }
        }
      }
      return tree;
    }
    
   
    
  }  
}
