﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Legends.Models
{
    public class User
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public DateTime CreatedDateTime { get; set; }
    }
}
