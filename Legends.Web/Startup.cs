using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Legends.Web.Startup))]
namespace Legends.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
