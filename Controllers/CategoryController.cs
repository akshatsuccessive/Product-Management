﻿using Microsoft.AspNetCore.Mvc;

namespace Product_Management.Controllers
{
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
