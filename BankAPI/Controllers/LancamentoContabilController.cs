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
using System.Web.WebPages.Html;


namespace BankAPI.Controllers
{
    public class LancamentoContabilController : ApiController
    {
        private BancoContexto _contexto = new BancoContexto();

        [Route("api/lancamentos")]
        [HttpPost]
        public HttpResponseMessage Create(JObject item)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "Criado com sucesso");
            LancamentoContabil lancamento = JsonConvert.DeserializeObject<LancamentoContabil>(item.ToString());

            LancamentoContabil novoLancamento = new LancamentoContabil(lancamento.ID, lancamento.Data, lancamento.Historico);

            _contexto.LancamentoContabil.Add(novoLancamento);
            _contexto.SaveChanges();

            return response;

        }

        [Route("api/lancamentos")]
        [HttpGet]
        public IQueryable Index()
        {

            var lancamentos = from lancamento in _contexto.LancamentoContabil
                              select new { lancamento.ID, lancamento.Data, lancamento.Historico };

            return lancamentos;

        }

        [Route("api/lancamentos-contabeis")]
        [HttpGet]
        public List<SelectListItem> LancamentosContabeis()
        {
            List<SelectListItem> selectLista = new List<SelectListItem>();
            foreach (var item in _contexto.LancamentoContabil)
            {
                selectLista.Add(new SelectListItem { Value = item.ID.ToString(), Text = item.Historico });
            }

            return selectLista;

        }

        [Route("api/lancamento/{id}/delete")]
        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var item = _contexto.LancamentoContabil.FirstOrDefault(lancamento => lancamento.ID == id);

            if (item == null)
            {
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.NotFound, "Lançamento Contábil não encontrada");

                return response;

            }

            _contexto.LancamentoContabil.Remove(item);
            _contexto.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, "Lançamento excluído");
        }
    }
}
