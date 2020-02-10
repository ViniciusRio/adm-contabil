using Bank.Data;
using Bank.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BankAPI.Controllers
{
    public class DetalheLancamentoController : ApiController
    {
        private BancoContexto _contexto = new BancoContexto();

        [Route("api/detalhes-lancamento")]
        [HttpPost]
        public HttpResponseMessage Create(JObject item)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            DetalheLancamento detalhe = JsonConvert.DeserializeObject<DetalheLancamento>(item.ToString());

            DetalheLancamento novoDetalhe = new DetalheLancamento(detalhe.ID, detalhe.Valor, detalhe.Tipo, detalhe.LancamentoContabilID, detalhe.ContaAnaliticaID);

            _contexto.DetalheLancamento.Add(novoDetalhe);
            _contexto.SaveChanges();

            return response;
        }

        [Route("api/detalhes-lancamento")]
        [HttpGet]
        public dynamic Index()
        {

            var detalhes = ((from a in _contexto.DetalheLancamento select a).AsEnumerable().Select(detalhe => new
            {
                ID = detalhe.ID,
                Valor = detalhe.Valor,
                Tipo = detalhe.Tipo,
                LancamentoContabil = detalhe.LancamentoContabil == null ? null : detalhe.LancamentoContabil.Historico,
                ContaAnalitica = detalhe.ContaAnalitica == null ? null : detalhe.ContaAnalitica.Descricao,

            }).ToList());

            return detalhes;

        }
    }
}
