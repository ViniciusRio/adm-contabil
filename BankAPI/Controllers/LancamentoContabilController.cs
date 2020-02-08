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
    }
}
