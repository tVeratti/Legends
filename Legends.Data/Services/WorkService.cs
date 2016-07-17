using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Legends.Models;
using Legends.Data;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using Dapper;

namespace Legends.Data.Services
{
    public class WorkService
    {
        private IDbConnection _cnx;

        public WorkService(IDbConnection connection)
        {
            _cnx = connection;
        }

        public Work Create(Work Model)
        {
            var spr_name = "[Legends].[Ins_Work]";
            var spr_prms = new
            {
                Description = Model.Description,
                Contracts = Model.Contracts
                    .Cast<Table_Contract>()
                    .ToDataTable(),
                CreatedById = 1
            };

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

        public IEnumerable<Contract> Read()
        {
            var spr_name = "[Legends].[Sel_Work]";
            using (var multi = _cnx.QueryMultiple(spr_name, commandType: CommandType.StoredProcedure))
            {
                // Read datasets
                var contracts = multi.Read<Contract>();

                return contracts;
            }
        }

        public Work Read(long Id)
        {
            var spr_name = "[Legends].[Sel_Work_Id]";
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
