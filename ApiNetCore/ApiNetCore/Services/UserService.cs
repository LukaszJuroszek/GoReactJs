using ApiNetCore.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace ApiNetCore.Services
{
    public class UserService : IUserService
    {
        private readonly AppSettings _appSettings;
        private readonly UserDbContext _dbContext;

        public UserService(IOptions<AppSettings> appSettings, UserDbContext dbContext)
        {
            _dbContext = dbContext;
            if (_dbContext.Users.Any() == false)
            {
                _dbContext.Users.Add(new User { Id = 1, FirstName = "Test", LastName = "User", UserName = "test", Password = "test" });
                _dbContext.Users.Add(new User { Id = 2, FirstName = "Test1", LastName = "User1", UserName = "test1", Password = "test" });
                _dbContext.SaveChanges();
            }
            _appSettings = appSettings.Value;
        }

        public User Authenticate(string username, string password)
        {
            var user = _dbContext.Users.SingleOrDefault(x => x.UserName == username && x.Password == password);

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                    new Claim("LastName", user.FirstName),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            // remove password before returning
            user.Password = null;

            return user;
        }

        public IEnumerable<User> GetAll()
        {
            // return users without passwords
            return _dbContext.Users.AsParallel().Select(x =>
            {
                x.Password = null;
                return x;
            });
        }

        public bool Register(User user)
        {
            //validate

            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();

            return true;
        }
    }
}