namespace BankAPI.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Bank.Models;
    using Bank.Models.Enums;

    internal sealed class Configuration : DbMigrationsConfiguration<Bank.Data.BancoContexto>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Bank.Data.BancoContexto context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.

            context.Empresa.AddOrUpdate(x => x.EmpresaID,
                new Empresa() { EmpresaID = 1001, RazaoSocial = "Riogel" },
                new Empresa() { EmpresaID = 1002, RazaoSocial = "Dunlop" },
                new Empresa() { EmpresaID = 1003, RazaoSocial = "Edifier" }
                );
        }
    }
}
