using Legends.Data.Services;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Legends.Data
{
    public class DataContext
    {
        private IDbConnection _cnx;

        public DataContext()
        {
            // Get connection string from Web.Config.
            var connectionString = ConfigurationManager.ConnectionStrings["Legends00"].ConnectionString;

            // Set working variables.
            _cnx = new SqlConnection(connectionString);
        }

        private LookupService _lookups;
        private WorkService _work;
        private ContractService _contracts;
        private BidService _bids;

        public LookupService Lookups
        {
            get { return _lookups ?? new LookupService(_cnx); }
        }

        public WorkService Work
        {
            get { return _work ?? new WorkService(_cnx); }
        }

        public ContractService Contracts
        {
            get { return _contracts ?? new ContractService(_cnx); }
        }

        public BidService Bids
        {
            get { return _bids ?? new BidService(_cnx); }
        }

    }
}
