using BankAPI.Data;
using BankAPI.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;

namespace BankAPI.Controllers
{
    public class LoginController : ApiController
    {
        private BancoContexto _contexto = new BancoContexto();

        [Route("api/registro")]
        [HttpPost]
        public HttpResponseMessage Registrar(JObject item)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "Registro adicionado");

            Usuario usuario = JsonConvert.DeserializeObject<Usuario>(item["usuario"].ToString());

            Usuario novoUsuario = new Usuario(usuario.ID, usuario.Nome, usuario.Senha, usuario.IsAdmin);

            _contexto.Usuario.Add(novoUsuario);
            _contexto.SaveChanges();

            return response;
        }

        [Route("api/login")]
        [HttpPost]
        public HttpResponseMessage Login(JObject item)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "Login não efetuado");
            Usuario usuario = JsonConvert.DeserializeObject<Usuario>(item["usuario"].ToString());

            var usuarioItem = _contexto.Usuario.FirstOrDefault(u => u.Nome == usuario.Nome);

            if (usuarioItem != null)
            {
                var cookie = new HttpCookie("guid", Guid.NewGuid().ToString());
                if (usuarioItem.IsAdmin)
                {
                    cookie.Values["admin"] = "1";
                }
                HttpContext.Current.Response.Cookies.Add(cookie);
                response = Request.CreateResponse(HttpContext.Current.Request.Cookies["guid"]);

                SessaoAtiva novaSessao = new SessaoAtiva(cookie.Value, usuarioItem.ID);
                _contexto.SessaoAtiva.Add(novaSessao);
                _contexto.SaveChanges();

            }

            return response;
        }
    }
}
