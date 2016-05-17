using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Legends.Data
{
    public interface IService<Entity>
        where Entity : class
    {
        Entity Create(Entity Model);
        IEnumerable<Entity> Read();
        Entity Read(long Id);
        Entity Update(Entity Model);
        void Delete(long Id);
    }

    public class Service<Entity> :IService<Entity>
        where Entity : class
    {
        private IDbConnection _cnx;
        private string _name;

        public Service(string connectionString)
        {
            _cnx = new SqlConnection(connectionString);
            _name = typeof(Entity).Name;
        }

        public Entity Create(Entity Model)
        {
            var spr_name = $"[{_name}_Create]";
            //return _cnx.Query<Entity>(spr_name, Model, commandType: CommandType.StoredProcedure).FirstOrDefault();
            return Model;
        }

        public void Delete(long Id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Entity> Read()
        {
            throw new NotImplementedException();
        }

        public Entity Read(long Id)
        {
            throw new NotImplementedException();
        }

        public Entity Update(Entity Model)
        {
            throw new NotImplementedException();
        }
    }
}
