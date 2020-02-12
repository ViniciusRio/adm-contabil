using BankAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BankAPI.Models
{
    public class ContaSintetica : Conta
    {
        public int ContaSinteticaID { get; set; }
        //public ICollection<Conta> Contas { get; set; }

        public ContaSintetica()
        {
        }

        public ContaSintetica(int id, string descricao, string numeroEstruturado, Grupo grupo, TipoConta tipoConta, int empresaId, int? contaPai)
            : base(id, descricao, numeroEstruturado, grupo, tipoConta, empresaId, contaPai)
        {
            ContaSinteticaID = id;
        }
    }
}