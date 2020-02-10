using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Bank.Models
{
    public class DetalheLancamento
    {
        public int ID { get; set; }
        public double Valor { get; set; }
        public string Tipo { get; set; }
        public int LancamentoContabilID { get; set; }
        [ForeignKey("LancamentoContabilID")]
        public virtual LancamentoContabil LancamentoContabil { get; set; }
        public int ContaAnaliticaID { get; set; }
        [ForeignKey("ContaAnaliticaID")]
        public virtual ContaAnalitica ContaAnalitica { get; set; }

        public DetalheLancamento()
        {
        }

        public DetalheLancamento(int iD, double valor, string tipo, int lancamentoContabilID, int contaAnaliticaID)
        {
            ID = iD;
            Valor = valor;
            Tipo = tipo;
            LancamentoContabilID = lancamentoContabilID;
            ContaAnaliticaID = contaAnaliticaID;
        }
    }
}