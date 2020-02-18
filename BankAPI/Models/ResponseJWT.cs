using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web;

namespace BankAPI.Models
{
    public class ResponseJWT
    {
        public static bool ResponseToken(HttpRequestMessage Request, out SecurityToken validatedToken)
        {
            try
            {
                IEnumerable<string> headerValues = Request.Headers.GetValues("Authorization");
                string headerValue = headerValues.FirstOrDefault();

                var handler = new JwtSecurityTokenHandler();
                string key = "coB_mtdXwvi9RxSMzbIey8GVVQLv9qQrBUqmc1qj9Bs";
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));


                handler.ValidateToken(headerValue, new TokenValidationParameters
                {
                    ValidAudience = "http://localhost:4200/",
                    ValidIssuer = "http://localhost:4200/",
                    IssuerSigningKey = securityKey
                }, out validatedToken);

                return true;
            }
            catch(Exception)
            {
                throw new Exception();
            }
        }
    }
}