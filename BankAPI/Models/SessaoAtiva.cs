using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BankAPI.Models
{
    public class SessaoAtiva
    {
        public int ID { get; set; }
        public string Token { get; set; }
        public int UsuarioID { get; set; }
        [ForeignKey("UsuarioID")]
        public virtual Usuario Usuario { get; set; }

        public SessaoAtiva()
        {
        }

        public SessaoAtiva(string token, int usuarioId)
        {
            Token = token;
            UsuarioID = usuarioId;
        }
    }
}