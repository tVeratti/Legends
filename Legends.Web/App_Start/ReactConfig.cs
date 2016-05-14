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
                .AddScript("~/Scripts/Components/Home/*.jsx")
                .AddScript("~/Scripts/Components/Home/Orders/*.jsx")
                .AddScript("~/Scripts/Components/Home/Profile/*.jsx")
                .AddScript("~/Scripts/Components/*.jsx");
        }
	}
}