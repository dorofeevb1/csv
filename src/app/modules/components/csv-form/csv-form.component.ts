import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from '../dialog/mat-dialog/mat-dialog.component';

interface ITree {
  id: string;
  name: string;
  parentId: string;
  childNodes?: ITree[];
  comments?: string
}
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  id: number;
  comments:string;
}

@Component({
  selector: 'app-csv-form',
  templateUrl: './csv-form.component.html',
  styleUrls: ['./csv-form.component.scss']
})
export class CsvFormComponent  {
allString:any = []
allArray: Array<[string, string, string]> = []
tree: any  = []

  constructor(public dialog: MatDialog) {}

  private _transformer = (node: ITree, level: number) => {
    return {
      id: Number(node.id),
      expandable: !!node.childNodes && node.childNodes.length > 0,
      name: node.name,
      level: level,
      comments: '',
    };
  };
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.childNodes,
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


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
   const createDataTree = (dataset: Array<[string, string, string]>) => {
      const hashTable = Object.create(null);
      dataset.forEach((aData) => {
        const [id, name, parentId] = aData;
        hashTable[id] = { id, name, parentId, childNodes: [] };
      });
      const dataTree: ITree[] = [];
      dataset.forEach((aData) => {
        const [id, _, parentId] = aData;
        if (parentId !== "-1") {
          hashTable[parentId].childNodes.push(hashTable[id]);
        } else {
          dataTree.push(hashTable[id]);
        }
      });
      return dataTree;
    };
    this.tree = createDataTree(this.allArray.slice(0, this.allArray.length - 1))
    this.dataSource.data = this.tree;
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  createComments(node:ExampleFlatNode){
  
    let dialogRef = this.dialog.open(MatDialogComponent, {
      data: [
        node
      ],
    });

    dialogRef.afterClosed().subscribe((value) =>  {
      node.comments = value
    })

    
  }
}
