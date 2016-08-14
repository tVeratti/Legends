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
            var statusesDatatable = (filters.Statuses ?? new List<int>()).ToDataTable_Value();

            var spr_name = "[Legends].[Sel_Bids]";
            var spr_prms = new
            {
                ContractId = filters.ContractId,
                Filter = filters.Filter,
                MinimumTier = filters.MinimumTier,
                MaximumTier = filters.MaximumTier,
                Statuses = statusesDatatable,
                SortBy = filters.SortBy,
                SortOrder = filters.SortOrder
            };

            return _cnx.Query<Bid>(spr_name, spr_prms, commandType: CommandType.StoredProcedure);
        }

        public IEnumerable<Bid> Create(Bid Model)
        {
            var spr_name = "[Legends].[Ins_Bid]";
            var spr_prms = new
            {
                ContractId = Model.ContractId,
                TierId = Model.TierId,
                Offer = Model.Offer,
                Description = Model.Description,
                Quantity = Model.Quantity,
                CreatedById = Model.CreatedById
            };
            return _cnx.Query<Bid>(spr_name, spr_prms, commandType: CommandType.StoredProcedure);
        }

        public IEnumerable<Bid> UpdateStatus(IEnumerable<long> Ids, int StatusId, long UserId)
        {
            var spr_name = "[Legends].[Upd_Bids_Status]";
            var spr_prms = new
            {
                Ids = Ids.ToDataTable_Value(),
                StatusId = StatusId,
                UserId = UserId
            };

            return _cnx.Query<Bid>(spr_name, spr_prms, commandType: CommandType.StoredProcedure);
        }

        public void Delete(long Id)
        {
            throw new NotImplementedException();
        }
    }
}
