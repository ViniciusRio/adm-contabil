using Bank.Data;
using Bank.Models;
using Bank.Models.Enums;
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
    public class EmpresaController : ApiController
    {
        private BancoContexto _contexto = new BancoContexto();

        [Route("api/empresas")]
        [HttpPost]
        public HttpResponseMessage Create(JObject item)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            Empresa empresa = JsonConvert.DeserializeObject<Empresa>(item.ToString());

            Empresa novaEmpresa = new Empresa(empresa.EmpresaID, empresa.RazaoSocial);

            _contexto.Empresa.Add(novaEmpresa);
            _contexto.SaveChanges();

            return response;

        }

        [Route("api/empresas")]
        [HttpGet]
        public List<SelectListItem> Empresas()
        {
            List<SelectListItem> selectLista = new List<SelectListItem>();
            foreach (var item in _contexto.Empresa)
            {
                selectLista.Add(new SelectListItem { Value = item.EmpresaID.ToString(), Text = item.RazaoSocial });
            }

            return selectLista;

        }

        [Route("api/empresa/{id}/delete")]
        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var item = _contexto.Empresa.FirstOrDefault(empresa => empresa.EmpresaID == id);

            if (item == null)
            {
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.NotFound, "Empresa não encontrada");

                return response;

            }

            _contexto.Empresa.Remove(item);
            _contexto.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, "Empresa excluída");
        }
    }  
}
