using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace STM.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Employee()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return RedirectToAction("About");

        }

        public ActionResult login1()
        {
            ViewBag.Message = "Your dasboard page.";

            return View();
        }
        public ActionResult settings()
        {
            ViewBag.Message = "Your dasboard page.";

            return View();
        }

        public ActionResult Dashboard => View();
        public ActionResult Register()
        {
            return View();
        }
        public ActionResult Employees()
        {
            return View();
        }
        public ActionResult AcceptReject()
        {
            return View();
        }
        public ActionResult Reimburesement()
        {
            return View();
        }
        public ActionResult Status()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult Dash()
        {
            return View();
        }
        
    }
}