using ApiNetCore.Models;
using System.Collections.Generic;

namespace ApiNetCore.Services
{
    public interface IUserService
    {
        User Authenticate(string userName, string password);
        bool Register(User user);
        IEnumerable<User> GetAll();
    }
}
