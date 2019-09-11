import {Component, OnInit, ViewChild} from '@angular/core';
import {IProduct} from './iProduct';
import {ProductService} from './product.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DecimalPipe} from '@angular/common';
import {FormControl} from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [DecimalPipe]


})
export class ProductListComponent implements OnInit {
  title = 'Sofka';
  errorMessage: string;
  sofkiano: IProduct;
  filterSofkiano: any;
  filter = new FormControl('');
  delete: boolean;
  displayedColumns: string[] = ['name',
    'precio',
    'descripcion',
    'talla'
  ];
  dataSource: MatTableDataSource<IProduct>;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  constructor(private productService: ProductService,
              private modalService: NgbModal) {
  }


  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {
        this.dataSource = new MatTableDataSource(products);
        this.dataSource.sort = this.sort;
      },
      error => this.errorMessage = error
    );


  }

  remove(id: string) {
    console.log(id);
    this.delete = window.confirm('¿Seguro deseas eliminar este producto?');
    console.log(this.delete);
    if (this.delete) {
      this.productService.deleteProducts(id).subscribe();
      window.location.reload();
    }
  }
  update(sofkiano: IProduct) {
    this.productService.updateProduct(sofkiano).subscribe(products => this.sofkiano = products);
    window.alert('el producto a sido actualizado');
  }

  create(products: IProduct) {
    // @ts-ignore
    this.sofkianoService.create(products).subscribe(productSave => {
        console.log(productSave);
        window.alert('el producto a sido creado con éxito');
      },
      error => console.log(error));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
