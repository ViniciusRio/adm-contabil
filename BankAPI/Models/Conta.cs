using Bank.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Bank.Models
{
    public abstract class Conta
    {
        public int ID { get; set; }
        [Display(Name = "Descrição")]
        public string Descricao { get; set; }
        [Display(Name = "Numeração estrutural")]
        public string NumeroEstruturado { get; set; }
        public Grupo Grupo { get; set; }
        public TipoConta TipoConta { get; set; }
        [Display(Name = "Empresa")]
        public int EmpresaID { get; set; }
        [ForeignKey("EmpresaID")]
        public virtual Empresa Empresa { get; set; }
        [Display(Name = "Conta de referência")]
        public int? ContaPai_ID { get; set; }
        [ForeignKey("ContaPai_ID")]
        public Conta ContaPai { get; set; }

        public Conta()
        {
        }

        public Conta(int id, string descricao, string numeroEstruturado, Grupo grupo, TipoConta tipoConta, int empresaId, int? contaPai)
        {
            ID = id;
            Descricao = descricao;
            NumeroEstruturado = numeroEstruturado;
            Grupo = grupo;
            EmpresaID = empresaId;
            TipoConta = tipoConta;
            ContaPai_ID = contaPai == 0 ? null : contaPai;
        }
    }
}