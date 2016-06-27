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
    public class WorkService
    {
        private IDbConnection _cnx;
        private string _name;

        public WorkService(IDbConnection connection)
        {
            _cnx = connection;
            _name = "Work";
        }

        public Work Create(Work Model)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Work> Read()
        {
            var spr_name = $"{_name}_Select";
            using (var multi = _cnx.QueryMultiple(spr_name, commandType: CommandType.StoredProcedure))
            {
                // Read datasets
                var work = multi.Read<Work>().ToList();
                var contracts = multi.Read<Contract>();

                // Nest Contracts within their Work parents.
                work.ForEach(w => w.Contracts = contracts.Where(c => c.WorkId == w.Id));

                return work;
            }
        }

        public Work Read(long Id)
        {
            var spr_name = $"{_name}_Select_Id";
            var spr_prms = new { Id };
            using (var multi = _cnx.QueryMultiple(spr_name, spr_prms, commandType: CommandType.StoredProcedure))
            {
                // Read datasets
                var work = multi.Read<Work>().FirstOrDefault();
                var contracts = multi.Read<Contract>();

                // Nest Contracts within their Work parents.
                work.Contracts = contracts;

                return work;
            }
        }

        public Work Update(Work Model)
        {
            throw new NotImplementedException();
        }

        public void Delete(long Id)
        {
            throw new NotImplementedException();
        }
    }
}
