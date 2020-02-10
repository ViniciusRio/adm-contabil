namespace BankAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Conta",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Descricao = c.String(),
                        NumeroEstruturado = c.String(),
                        Grupo = c.Int(nullable: false),
                        TipoConta = c.Int(nullable: false),
                        EmpresaID = c.Int(nullable: false),
                        ContaPai_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Conta", t => t.ContaPai_ID)
                .ForeignKey("dbo.Empresa", t => t.EmpresaID, cascadeDelete: true)
                .Index(t => t.EmpresaID)
                .Index(t => t.ContaPai_ID);
            
            CreateTable(
                "dbo.Empresa",
                c => new
                    {
                        EmpresaID = c.Int(nullable: false, identity: true),
                        RazaoSocial = c.String(),
                    })
                .PrimaryKey(t => t.EmpresaID);
            
            CreateTable(
                "dbo.DetalheLancamento",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Valor = c.Double(nullable: false),
                        Tipo = c.String(),
                        LancamentoContabilID = c.Int(nullable: false),
                        ContaAnaliticaID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.ContaAnalitica", t => t.ContaAnaliticaID, cascadeDelete: true)
                .ForeignKey("dbo.LancamentoContabil", t => t.LancamentoContabilID, cascadeDelete: true)
                .Index(t => t.LancamentoContabilID)
                .Index(t => t.ContaAnaliticaID);
            
            CreateTable(
                "dbo.LancamentoContabil",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Data = c.DateTime(nullable: false),
                        Historico = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.ContaAnalitica",
                c => new
                    {
                        ID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Conta", t => t.ID)
                .Index(t => t.ID);
            
            CreateTable(
                "dbo.ContaSintetica",
                c => new
                    {
                        ID = c.Int(nullable: false),
                        ContaSinteticaID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Conta", t => t.ID)
                .Index(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ContaSintetica", "ID", "dbo.Conta");
            DropForeignKey("dbo.ContaAnalitica", "ID", "dbo.Conta");
            DropForeignKey("dbo.DetalheLancamento", "LancamentoContabilID", "dbo.LancamentoContabil");
            DropForeignKey("dbo.DetalheLancamento", "ContaAnaliticaID", "dbo.ContaAnalitica");
            DropForeignKey("dbo.Conta", "EmpresaID", "dbo.Empresa");
            DropForeignKey("dbo.Conta", "ContaPai_ID", "dbo.Conta");
            DropIndex("dbo.ContaSintetica", new[] { "ID" });
            DropIndex("dbo.ContaAnalitica", new[] { "ID" });
            DropIndex("dbo.DetalheLancamento", new[] { "ContaAnaliticaID" });
            DropIndex("dbo.DetalheLancamento", new[] { "LancamentoContabilID" });
            DropIndex("dbo.Conta", new[] { "ContaPai_ID" });
            DropIndex("dbo.Conta", new[] { "EmpresaID" });
            DropTable("dbo.ContaSintetica");
            DropTable("dbo.ContaAnalitica");
            DropTable("dbo.LancamentoContabil");
            DropTable("dbo.DetalheLancamento");
            DropTable("dbo.Empresa");
            DropTable("dbo.Conta");
        }
    }
}
