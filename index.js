var qouts=[
    {'quote':'Be yourself; everyone else is already taken.' ,
      'auther':  'Oscar Wilde'  },
      {'quote':'So many books, so little time.' ,
      'auther':  'Frank Zappa'  },
      {'quote':'A room without books is like a body without a soul.' ,
      'auther':  'Marcus Tullius Cicero'  },
      {'quote':'Be yourself; everyone else is already taken.' ,
      'auther':  'Oscar Wilde'  },
      {'quote':'You only live once, but if you do it right, once is enough.' ,
      'auther':  ' Mae West'  }

];

function generate(){
    const randomquote=Math.floor(Math.random()*qouts.length);
    document.getElementById('qoute').textContent = qouts[randomquote].quote ;
    document.getElementById('auther').textContent= '-- ' + qouts[randomquote].auther;
   
   
}

