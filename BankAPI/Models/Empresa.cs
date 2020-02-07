using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Bank.Models
{
    public class Empresa
    {
        public int EmpresaID { get; set; }
        [Display(Name = "Nome da empresa")]
        public string RazaoSocial { get; set; }
        public virtual ICollection<Conta> Contas { get; set; }

        public Empresa()
        {
        }

        public Empresa(int id, string razaoSocial)
        {
            EmpresaID = id;
            RazaoSocial = razaoSocial;
        }
    }
}