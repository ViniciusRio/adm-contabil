using BankAPI.Data;
using BankAPI.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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


                HttpContext.Current.Response.Cookies.Add(new HttpCookie("guid", Guid.NewGuid().ToString()));
                response = Request.CreateResponse(HttpContext.Current.Request.Cookies["guid"].Value);

                //var resp = new HttpResponseMessage();

                //var cookie = new CookieHeaderValue("guid", "12345");
                //cookie.Expires = DateTimeOffset.Now.AddDays(1);
                //cookie.Domain = Request.RequestUri.Host;
                //cookie.Path = "/";

                //resp.Headers.AddCookies(new CookieHeaderValue[] { cookie });
                //return resp;

                //HttpCookie userInfo = new HttpCookie("userInfo");
                //userInfo["UserName"] = "Annathurai";
                //userInfo["UserColor"] = "Black";
                //userInfo.Expires.Add(new TimeSpan(0, 1, 0));
                //HttpContext.Current.Response.Cookies.Add(userInfo);  
                //HttpCookie loginCookie1 = new HttpCookie("loginCookie");
                //HttpContext.Current.Response.Cookies["loginCookie1"].Value = "teste"; // <--- strange!!!!
                //HttpContext.Current.Response.Cookies.Add(loginCookie1);
                //HttpContext.Current.Response.Cookies.Set(new HttpCookie("guid", Guid.NewGuid().ToString()));


                //var resp = new HttpResponseMessage();

                //var cookie = new CookieHeaderValue("teste-cookie", "12345");
                //cookie.Expires = DateTimeOffset.Now.AddDays(1);
                //cookie.Domain = Request.RequestUri.Host;
                //cookie.Path = "/";
                //cookie.Domain = "http://localhost:4200";

                //resp.Headers.AddCookies(new CookieHeaderValue[] { cookie });
                //return resp;
                return response;

            }

            return response;
        }
    }
}
