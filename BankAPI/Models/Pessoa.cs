﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BankAPI.Models
{
    public class Pessoa
    {
        public string Nome { get; set; }

        public Pessoa(string nome)
        {
            Nome = nome;
        }
    }
}