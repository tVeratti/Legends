using System.Web;
using System.Web.Optimization;
using System.Web.Optimization.React;

namespace Legends.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
                "~/Scripts/Vendor/jquery-{version}.js",
                "~/Scripts/Vendor/react-{version}.js",
                "~/Scripts/Vendor/react-dom-{version}.js",
                "~/Scripts/Vendor/react-router-{version}.js"));

            bundles.Add(new BabelBundle("~/bundles/main").Include(
                "~/Scripts/Stores/*.jsx",

                "~/Scripts/Components/Home/*.jsx",
                "~/Scripts/Components/Home/Orders/*.jsx",
                "~/Scripts/Components/Home/Profile/*.jsx",
                "~/Scripts/Components/*.jsx"));
        }
    }
}
