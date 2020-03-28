using ApiNetCore.Models;
using System.Collections.Generic;

namespace ApiNetCore.Services
{
    public interface IUserService
    {
        User Authenticate(string userName, string password);
        IEnumerable<User> GetAll();
    }
}
