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
        public DbSet<Bank.Models.LancamentoAnalitico> LancamentoAnalitico { get; set; }



        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Conta>().ToTable("Conta");
            modelBuilder.Entity<ContaSintetica>().ToTable("ContaSintetica");
            modelBuilder.Entity<ContaAnalitica>().ToTable("ContaAnalitica");
            modelBuilder.Entity<Empresa>().ToTable("Empresa");
            modelBuilder.Entity<LancamentoContabil>().ToTable("LancamentoContabil");
            modelBuilder.Entity<LancamentoAnalitico>().ToTable("LancamentoAnalitico");

            //modelBuilder.Entity<LancamentoContabil>()
            //    .HasMany(a => a.LancamentosAnaliticos)
            //    .WithMany(b => b.LancamentoContabil)
            //    .Map(lc =>
            //    {
            //        lc.MapLeftKey("LancamentoAnaliticoID");
            //        lc.MapRightKey("ContaAnaliticaID");
            //        lc.ToTable("LacamentoAnaliticos");
            //    });
        }
    }
}