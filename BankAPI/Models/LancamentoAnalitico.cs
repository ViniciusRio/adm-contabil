using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Bank.Models
{
    public class LancamentoAnalitico
    {
        public int ID { get; set; }
        public int LancamentoAnaliticoID { get; set; }
        public int ContaAnaliticaID { get; set; }
        public double Valor { get; set; }
        public string Tipo { get; set; }
        [ForeignKey("LancamentoAnaliticoID")]
        public LancamentoContabil LancamentoContabil { get; set; }
        [ForeignKey("ContaAnaliticaID")]
        public ContaAnalitica ContaAnalitica { get; set; }
    }
}