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
    public class LancamentoAnaliticoController : ApiController
    {
        private BancoContexto _contexto = new BancoContexto();

        [Route("api/analiticos")]
        [HttpPost]
        public HttpResponseMessage Create(JObject item)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            LancamentoAnalitico lancamento = JsonConvert.DeserializeObject<LancamentoAnalitico>(item.ToString());

            LancamentoAnalitico novoLancamento = new LancamentoAnalitico(lancamento.ID, lancamento.Valor, lancamento.Tipo, lancamento.LancamentoContabilID, lancamento.ContaAnaliticaID);

            _contexto.LancamentoAnalitico.Add(novoLancamento);
            _contexto.SaveChanges();

            return response;
        }

        [Route("api/analiticos")]
        [HttpGet]
        public dynamic Index()
        {

            var lancamentos = ((from a in _contexto.LancamentoAnalitico select a).AsEnumerable().Select(t => new
            {
                ID = t.ID,
                Valor = t.Valor,
                Tipo = t.Tipo,
                LancamentoContabil = t.LancamentoContabil == null ? null : t.LancamentoContabil.Historico,
                ContaAnalitica = t.ContaAnalitica == null ? null : t.ContaAnalitica.Descricao,

            }).ToList());

            return lancamentos;

        }
    }
}
