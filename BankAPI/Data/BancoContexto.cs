using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Bank.Models;

namespace Bank.Data
{
    public class BancoContexto : DbContext
    {
    
        public BancoContexto() : base("name=BankContexto")
        {
        }

        public DbSet<Bank.Models.Conta> Conta { get; set; }
        public DbSet<Bank.Models.ContaSintetica> ContaSintetica { get; set; }
        public DbSet<Bank.Models.ContaAnalitica> ContaAnalitica { get; set; }
        public DbSet<Bank.Models.Empresa> Empresa { get; set; }
        public DbSet<Bank.Models.LancamentoContabil> LancamentoContabil { get; set; }
        public DbSet<Bank.Models.DetalheLancamento> DetalheLancamento { get; set; }

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