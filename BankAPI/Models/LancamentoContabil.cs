using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Bank.Models
{
    public class LancamentoContabil
    {
        public int ID { get; set; }
        [DataType(DataType.Date)]
        public DateTime Data { get; set; }
        public string Historico { get; set; }
        public virtual ICollection<DetalheLancamento> DetalhesLancamento { get; set; }

        public LancamentoContabil()
        {
        }

        public LancamentoContabil(int id, DateTime data, string historico)
        {
            ID = id;
            Data = data;
            Historico = historico;
        }

        public double TotalDetibo()
        {
            // TODO: Implementação
            return 0;
        }

        public double TotalCredito()
        {
            // TODO: Implementação
            return 0;
        }
    }
}