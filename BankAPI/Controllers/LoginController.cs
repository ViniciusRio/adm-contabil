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
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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

        [Route("api/token")]
        [HttpGet]
        public Object GetToken()
        {
            string key = "m7MEsIg8Hu-JeeMF1N44NFwpwAx7sx0aaIDOCnzZtHw"; //Secret key which will be used later during validation    
            var issuer = "http://localhost:4200/";  //normally this will be your site URL    

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            //Create a List of Claims, Keep claims name short    
            var permClaims = new List<Claim>();
            permClaims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
            permClaims.Add(new Claim("valid", "1"));
            permClaims.Add(new Claim("userid", "1"));
            permClaims.Add(new Claim("name", "bilal"));

            //Create Security Token object by giving required parameters    
            var token = new JwtSecurityToken(issuer, //Issure    
                            issuer,  //Audience    
                            permClaims,
                            expires: DateTime.Now.AddDays(1),
                            signingCredentials: credentials);
            var jwt_token = new JwtSecurityTokenHandler().WriteToken(token);
            return new { data = jwt_token };
        }

        [Route("api/tokenjwt")]
        [HttpGet]
        public string GerarTokenJWT()
        {
            var issuer = "http://localhost:51159";
            var audience = "http://localhost:4200";
            var expiry = DateTime.Now.AddMinutes(120);
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("m7MEsIg8Hu-JeeMF1N44NFwpwAx7sx0aaIDOCnzZtHw"));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(issuer: issuer, audience: audience,
            expires: DateTime.Now.AddMinutes(120), signingCredentials: credentials);
            var tokenHandler = new JwtSecurityTokenHandler();
            var stringToken = tokenHandler.WriteToken(token);
            return stringToken;
        }
    }
}
