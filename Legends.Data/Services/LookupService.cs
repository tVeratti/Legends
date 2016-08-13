using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Legends.Models;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using Dapper;

namespace Legends.Data.Services
{
    public class LookupService
    {
        private IDbConnection _cnx;

        public LookupService(IDbConnection connection)
        {
            _cnx = connection;
        }

        public Lookups Read()
        {
            var spr_name = "[Legends].[Sel_Lookups]";
            using (var multi = _cnx.QueryMultiple(spr_name, commandType: CommandType.StoredProcedure))
            {
                // Read datasets
                var tiers = multi.Read<Tier>();
                var categories = multi.Read<Category>().ToList();
                var skills = multi.Read<Skill>();
                var durations = multi.Read<Duration>();
                var statuses = multi.Read<Status>();

                // Nest Skills within their Category parents.
                categories.ForEach(c => c.Skills = skills.Where(s => s.CategoryId == c.Id));

                return new Lookups()
                {
                    Tiers = tiers,
                    Categories = categories,
                    Skills = skills,
                    Durations = durations,
                    Statuses = statuses
                };
            }
        }
    }
}
