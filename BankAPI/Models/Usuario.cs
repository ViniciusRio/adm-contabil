using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BankAPI.Models
{
    public class Usuario
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        public string Senha { get; set; }
        public bool IsAdmin { get; set; }

        public Usuario()
        {
        }

        public Usuario(int id, string nome, string senha, bool isAdmin)
        {
            ID = id;
            Nome = nome;
            Senha = senha;
            IsAdmin = isAdmin;
        }

    }
}