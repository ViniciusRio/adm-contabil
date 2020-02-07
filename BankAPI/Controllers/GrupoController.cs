using Bank.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.WebPages.Html;

namespace BankAPI.Controllers
{
    public class GrupoController : ApiController
    {
        [Route("api/grupos")]
        [HttpGet]
        public List<SelectListItem> GrupoEnumerado()
        {
            var grupoNome = Enum.GetNames(typeof(Grupo)).ToList();
            var grupoValor = Enum.GetValues(typeof(Grupo)).Cast<int>().ToList();

            List<SelectListItem> selectLista = new List<SelectListItem>();
            foreach (var item in grupoValor.Zip(grupoNome, (a, b) => new { A = a, B = b }))
            {
                selectLista.Add(new SelectListItem { Value = item.A.ToString(), Text = item.B });
            }

            return selectLista;
        }
    }
}
