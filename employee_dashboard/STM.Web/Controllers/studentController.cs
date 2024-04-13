using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace STM.Web.Controllers
{
    public class studentController : Controller
    {
        // GET: student
        public PartialViewResult login()
        {
            return PartialView("_student");
        }
        public ActionResult login1()
        {
            return View();
        }
    }
}