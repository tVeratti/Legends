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
    public class ContractService
    {
        private IDbConnection _cnx;

        public ContractService(IDbConnection connection)
        {
            _cnx = connection;
        }

        public IEnumerable<Contract> Read()
        {
            var spr_name = "[Legends].[Sel_Contract]";
            using (var multi = _cnx.QueryMultiple(spr_name, commandType: CommandType.StoredProcedure))
            {
                // Read datasets
                var contracts = multi.Read<Contract>();

                return contracts;
            }
        }

        public Contract Read(long Id)
        {
            var spr_name = "[Legends].[Sel_Contract_Id]";
            var spr_prms = new { Id };
            using (var multi = _cnx.QueryMultiple(spr_name, spr_prms, commandType: CommandType.StoredProcedure))
            {
                // Read datasets
                var Contract = multi.Read<Contract>().FirstOrDefault();
                var Bids = multi.Read<Bid>();

                Contract.Bids = Bids;

                return Contract;
            }
        }

        public IEnumerable<Bid> CreateBid(long ContractId)
        {
            var spr_name = "[Legends].[Ins_Bid]";
            var spr_prms = new { ContractId };
            return _cnx.Query<Bid>(spr_name, spr_prms, commandType: CommandType.StoredProcedure);
        }

        public Contract Update(Contract Model)
        {
            throw new NotImplementedException();
        }

        public void Delete(long Id)
        {
            throw new NotImplementedException();
        }
    }
}
