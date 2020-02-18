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
        public Object Login(JObject item)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "Login não efetuado");
            Usuario usuario = JsonConvert.DeserializeObject<Usuario>(item["usuario"].ToString());

            var usuarioItem = _contexto.Usuario.FirstOrDefault(u => u.Senha == usuario.Senha && u.Nome == usuario.Nome);

            if (usuarioItem != null)
            {
                string key = "coB_mtdXwvi9RxSMzbIey8GVVQLv9qQrBUqmc1qj9Bs";    
                var issuer = "http://localhost:4200/";

                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var permClaims = new List<Claim>();
                permClaims.Add(new Claim(JwtRegisteredClaimNames.Sub, usuarioItem.ID.ToString()));
                permClaims.Add(new Claim("name", usuarioItem.Nome));
                permClaims.Add(new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToString()));
                permClaims.Add(new Claim("admin", usuarioItem.IsAdmin.ToString()));


                //Create Security Token object by giving required parameters    
                var token = new JwtSecurityToken(issuer, //Issure    
                                issuer,  //Audience    
                                permClaims,
                                expires: DateTime.Now.AddDays(1),
                                signingCredentials: credentials);
                var jwt_token = new JwtSecurityTokenHandler().WriteToken(token);

                //response = Request.CreateResponse("token", jwt_token);
                return new { token = jwt_token };

            }

            return response;
        }


        [Route("api/tokenjwt")]
        [HttpGet]
        public string GerarTokenJWT()
        {
            var issuer = "http://localhost:51159";
            var audience = "http://localhost:4200";
            var expiry = DateTime.Now.AddMinutes(120);
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("coB_mtdXwvi9RxSMzbIey8GVVQLv9qQrBUqmc1qj9Bs"));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(issuer: issuer, audience: audience,
            expires: DateTime.Now.AddMinutes(120), signingCredentials: credentials);
            var tokenHandler = new JwtSecurityTokenHandler();
            var stringToken = tokenHandler.WriteToken(token);
            return stringToken;
        }
    }
}
