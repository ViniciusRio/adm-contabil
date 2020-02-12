using BankAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BankAPI.Models
{
    public class ContaAnalitica : Conta
    {
        public ICollection<DetalheLancamento> DetalhesLancamento { get; set; }


        public ContaAnalitica()
        {
        }

        public ContaAnalitica(int id, string descricao, string numeroEstruturado, Grupo grupo, TipoConta tipoConta, int empresaId, int? contaPai)
            : base(id, descricao, numeroEstruturado, grupo, tipoConta, empresaId, contaPai)
        {
        }
    }
}