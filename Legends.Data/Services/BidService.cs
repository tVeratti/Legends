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
using Legends.Models.Filters;

namespace Legends.Data.Services
{
    public class BidService
    {
        private IDbConnection _cnx;

        public BidService(IDbConnection connection)
        {
            _cnx = connection;
        }

        public IEnumerable<Bid> Read(BidFilter filters)
        {
            var spr_name = "[Legends].[Sel_Bid]";
            using (var multi = _cnx.QueryMultiple(spr_name, filters, commandType: CommandType.StoredProcedure))
            {
                // Read datasets
                var bids = multi.Read<Bid>();

                return bids;
            }
        }

        public IEnumerable<Bid> Create(Bid Model)
        {
            var spr_name = "[Legends].[Ins_Bid]";
            var spr_prms = new
            {
                BidId = Model.Id,
                TierId = Model.TierId,
                Offer = Model.Offer,
                Description = Model.Description,
                Quantity = Model.Quantity
            };
            return _cnx.Query<Bid>(spr_name, spr_prms, commandType: CommandType.StoredProcedure);
        }

        public Bid Update(Bid Model)
        {
            throw new NotImplementedException();
        }

        public void Delete(long Id)
        {
            throw new NotImplementedException();
        }
    }
}
