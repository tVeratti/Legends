using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(Legends.Web.ReactConfig), "Configure")]

namespace Legends.Web
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            // If you want to use server-side rendering of React components, 
            // add all the necessary JavaScript files here. This includes 
            // your components as well as all of their dependencies.
            // See http://reactjs.net/ for more information. Example:
            ReactSiteConfiguration.Configuration
                // Dependencies
                .AddScript("~/Scripts/Vendor/moment-2.13.0.js")
                .AddScript("~/Scripts/Vendor/pubsub-1.4.2.js")

                // Components
                .AddScript("~/Scripts/Components/App.jsx")
                .AddScript("~/Scripts/Components/Common/*.jsx")

                .AddScript("~/Scripts/Components/Work/*.jsx")
                .AddScript("~/Scripts/Components/Work/Dialogs/*.jsx")
                .AddScript("~/Scripts/Components/Work/Grids/*.jsx")

                .AddScript("~/Scripts/Components/Profile/*.jsx");
        }
	}
}