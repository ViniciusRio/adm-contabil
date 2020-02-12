using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using BankAPI.Models;

namespace BankAPI.Data
{
    public class BancoContexto : DbContext
    {
    
        public BancoContexto() : base("name=BankContexto")
        {
        }

        public DbSet<Conta> Conta { get; set; }
        public DbSet<ContaSintetica> ContaSintetica { get; set; }
        public DbSet<ContaAnalitica> ContaAnalitica { get; set; }
        public DbSet<Empresa> Empresa { get; set; }
        public DbSet<LancamentoContabil> LancamentoContabil { get; set; }
        public DbSet<DetalheLancamento> DetalheLancamento { get; set; }
        public DbSet<Usuario> Usuario { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Conta>().ToTable("Conta");
            modelBuilder.Entity<ContaSintetica>().ToTable("ContaSintetica");
            modelBuilder.Entity<ContaAnalitica>().ToTable("ContaAnalitica");
            modelBuilder.Entity<Empresa>().ToTable("Empresa");
            modelBuilder.Entity<LancamentoContabil>().ToTable("LancamentoContabil");
            modelBuilder.Entity<DetalheLancamento>().ToTable("DetalheLancamento");

        }
    }
}