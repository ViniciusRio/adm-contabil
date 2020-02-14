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
using System.Web.WebPages.Html;
using BankAPI.Data;
using BankAPI.Models;
using BankAPI.Models.Enums;
using System.Web;

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
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Unauthorized, "Não autorizado");

            var url = Request.RequestUri;
            string token = HttpUtility.ParseQueryString(url.Query).Get("token");
            var sessaoValida = _contexto.SessaoAtiva.FirstOrDefault(s => s.Token == token);
            if (sessaoValida != null)
            {
                var contas = ((from a in _contexto.Conta select a).AsEnumerable().Select(t => new
                {
                    ID = t.ID,
                    Descricao = t.Descricao,
                    Empresa = t.Empresa,
                    TipoConta = Enum.GetName(typeof(TipoConta), t.TipoConta),
                    Grupo = Enum.GetName(typeof(Grupo), t.Grupo),
                    NumeroEstruturado = t.NumeroEstruturado,
                    ContaPai = t.ContaPai == null ? null : t.ContaPai.Descricao

                }).ToList());

                return contas;
            }

            return response;

        }

        [Route("api/contas")]
        [HttpPost]
        public HttpResponseMessage Create(JObject item)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "Criado com sucesso");
            ContaAnalitica conta = JsonConvert.DeserializeObject<ContaAnalitica>(item["conta"].ToString());

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

        [Route("api/conta-pai")]
        [HttpGet]
        public List<SelectListItem> ContaPai()
        {
            List<SelectListItem> selectLista = new List<SelectListItem>();
            foreach (var item in _contexto.Conta)
            {
                selectLista.Add(new SelectListItem { Value = item.ID.ToString(), Text = item.Descricao });
            }

            return selectLista;

        }

        [Route("api/contas-analiticas")]
        [HttpGet]
        public List<SelectListItem> ContasAnaliticas()
        {
            List<SelectListItem> selectLista = new List<SelectListItem>();
            foreach (var item in _contexto.ContaAnalitica)
            {
                selectLista.Add(new SelectListItem { Value = item.ID.ToString(), Text = item.Descricao });
            }

            return selectLista;

        }
    }
}
