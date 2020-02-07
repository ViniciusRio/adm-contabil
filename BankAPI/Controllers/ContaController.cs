using Bank.Data;
using Bank.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using System.Web.Http.Cors;
using Bank.Models.Enums;
using System.Web.WebPages.Html;

namespace BankAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ContaController : ApiController
    {
        private BancoContexto _contexto = new BancoContexto();

        [Route("api/contas")]
        [HttpGet]
        public dynamic Index()
        {

            var contas = ((from a in _contexto.Conta select a).AsEnumerable().Select(t => new
            {
                Descricao = t.Descricao,
                Grupo = Enum.GetName(typeof(Grupo), t.Grupo)

            }).ToList());

            //TODO: Colocar todos os campos como terno 

            //var grupos = Enum.GetValues(typeof(Grupo)).Cast<Grupo>()
            //.Select(r => new { Value = (int)r, Name = r.ToString() }).ToList();

            //var contas = from conta in _contexto.Conta
            //             select new { Descricao = conta.Descricao, Grupo = grupos.FirstOrDefault(p => p.Value == 0) };

            //var contas = _contexto.Conta.Select(p => p.Grupo);
            //List<dynamic> teste = new List<dynamic>();
            //foreach (var item in grupos)
            //{
            //    teste.Add(from cont in _contexto.Conta
            //              select new { Descricao = cont.Descricao, Grupo = item.Name });
            //}
           

            //var contas = from c in _contexto.Conta
            //             .Select(x => new
            //             {
            //                 Descricao = x.Descricao,
            //                 NumeroEstruturado = x.NumeroEstruturado,
            //                 Grupo = ((Grupo)x.Grupo).ToString(),
            //                 TipoConta = x.TipoConta,
            //                 Empresa = x.Empresa
            //             })
            //             select new { c.Descricao };

            //var contas = _contexto.Conta.ToList();

            return contas;

        }

        [Route("api/contas")]
        [HttpPost]
        public HttpResponseMessage Create(JObject item)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "Criado com sucesso");
            ContaAnalitica conta = JsonConvert.DeserializeObject<ContaAnalitica>(item.ToString());

            if (conta.TipoConta == 0)
            {
                ContaSintetica contaSintetica = new ContaSintetica(conta.ID, conta.Descricao, conta.NumeroEstruturado, conta.Grupo, conta.TipoConta, conta.EmpresaID, conta.ContaPai_ID);

                _contexto.ContaSintetica.Add(contaSintetica);
                _contexto.SaveChanges();

                return response;

            }

            ContaAnalitica contaAnalitica = new ContaAnalitica(conta.ID, conta.Descricao, conta.NumeroEstruturado, conta.Grupo, conta.TipoConta, conta.EmpresaID, conta.ContaPai_ID);

            _contexto.ContaAnalitica.Add(contaAnalitica);
            _contexto.SaveChanges();

            return response;

        }

        [Route("api/conta/{id}/delete")]
        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var itemConta = _contexto.Conta.FirstOrDefault(conta => conta.ID == id);

            if (itemConta == null)
            {
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.NotFound, "Conta não encontrada");

                return response;

            }

            _contexto.Conta.Remove(itemConta);
            _contexto.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, "Conta excluída");
        }

        [Route("api/tipo-conta")]
        [HttpGet]
        public List<SelectListItem> TipoContaEnumerado()
        {
            var tipoContaNome = Enum.GetNames(typeof(TipoConta)).ToList();
            var tipoContaValor = Enum.GetValues(typeof(TipoConta)).Cast<int>().ToList();

            List<SelectListItem> selectLista = new List<SelectListItem>();
            foreach (var item in tipoContaValor.Zip(tipoContaNome, (a, b) => new { A = a, B = b }))
            {
                selectLista.Add(new SelectListItem { Value = item.A.ToString(), Text = item.B });
            }

            return selectLista;

        }
    }
}
