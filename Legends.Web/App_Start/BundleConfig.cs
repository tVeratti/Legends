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
                // jQuery
                "~/Scripts/Vendor/jquery-{version}.js",
                // React
                "~/Scripts/Vendor/react-{version}.js",
                "~/Scripts/Vendor/react-dom-{version}.js",
                // React-Router
                "~/Scripts/Vendor/react-router-{version}.js",
                // React-Select
                "~/Scripts/Vendor/classnames.js",
                "~/Scripts/Vendor/react-input-autosize.js",
                "~/Scripts/Vendor/react-select.min.js",
                // Other
                "~/Scripts/Vendor/moment-{version}.js",
                "~/Scripts/Vendor/pubsub-{version}.js"));

            bundles.Add(new BabelBundle("~/bundles/main").Include(
                // Stores
                "~/Scripts/Stores/*.jsx",
                // Components
                "~/Scripts/Components/Common/*.jsx",
                "~/Scripts/Components/Work/*.jsx",
                "~/Scripts/Components/Profile/*.jsx",
                "~/Scripts/Components/*.jsx"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
