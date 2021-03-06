﻿using ApiNetCore.Models;
using ApiNetCore.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApiNetCore.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost, Route("Login")]
        public ActionResult<User> Authenticate(User user)
        {
            var authUser = _userService.Authenticate(user.UserName, user.Password);

            if (authUser == null)
            {
                return BadRequest("Not ...");
            }

            return authUser;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            return Ok(_userService.GetAll());
        }

        [AllowAnonymous]
        [HttpPost, Route("Register")]
        public ActionResult<User> Register(User user)
        {
            if (_userService.Register(user))
            {
                return Ok();
            }

            return BadRequest();
        }
    }
}