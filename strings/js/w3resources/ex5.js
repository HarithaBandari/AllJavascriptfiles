function protect_email (user_email) {
    var splitted,p1,p2;
    splitted=user_email.split("@");
    p1=splitted[0];
    p1=p1.substring(0,p1.length/2);
    p2=splitted[1];
    return p1+"...@"+p2;
    };
    console.log(protect_email("robin_singh@gmail.com"))