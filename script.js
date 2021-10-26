   var User=require('./user');
   var user=new User('Alex','Novikov');
   console.log('firstname:'+user.first);
   console.log('lastname:'+user.last);
   user.fullName();
