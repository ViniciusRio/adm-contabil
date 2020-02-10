import { Component, OnInit, Injectable } from '@angular/core';
import { LancamentoContabilService } from 'src/app/services/lancamento-contabil/lancamento-contabil.service';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import {
  NgbDateAdapter,
  NgbDateStruct,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';


/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string): NgbDateStruct {
    let result: NgbDateStruct = null;
    if (value) {
      let date = value.split(this.DELIMITER);
      result = {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return result;
  }

  toModel(date: NgbDateStruct): string {
    let result: string = null;
    if (date) {
      result = date.day + this.DELIMITER + date.month + this.DELIMITER + date.year;
    }
    return result;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct {
    let result: NgbDateStruct = null;
    if (value) {
      let date = value.split(this.DELIMITER);
      result = {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return result;
  }

  format(date: NgbDateStruct): string {
    let result: string = null;
    if (date) {
      result = date.day + this.DELIMITER + date.month + this.DELIMITER + date.year;
    }
    return result;
  }
}

@Component({
  selector: 'app-novo-lancamento-contabil',
  templateUrl: './novo-lancamento-contabil.component.html',
  styleUrls: ['./novo-lancamento-contabil.component.css'],

  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]

})
export class NovoLancamentoContabilComponent implements OnInit {
  form;
  model;
  model1: string;
  model2: string;
  showMsg = false;


  constructor(
    private lancamentoService: LancamentoContabilService,
    private formBuilder: FormBuilder
  ){ 
    this.form = this.formBuilder.group({
      data: '',
      historico: ''
    });
  }

  ngOnInit() {
  }

  criarLancamento() {
    this.lancamentoService.addLancamento(
      moment(this.form.value.data, "DD-MM-YYYY").format("YYYY-MM-DD"),
      this.form.value.historico
    ).then(() => {
      this.form.reset();
      this.showMsg = true;
    });
  }

}
