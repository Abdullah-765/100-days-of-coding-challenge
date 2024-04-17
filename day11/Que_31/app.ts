// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let usersArray: string[] = [`Admin Eric`, `Rowan`, `Adam`, `Admin Ellie`, `Admin David`, `Lee`, `Mark`, `Joe`];

if(usersArray.length === 0){

    console.log(`We need to find some users!`)
    
}else{

    for(const usernames of usersArray){
        if(usernames.toLowerCase().includes(`admin`))
    
        {
           const adminNames = usernames.split(` `)[1];
            console.log(`Hello admin ${adminNames}, would you like to see a status report?`);
        }else{
            console.log(`Hello ${usernames}, thank you for logging in again.`);
        }
    }

}

while(usersArray.length > 0){
    usersArray.pop();
}
if(usersArray.length === 0){
    console.log(`We need to find some users!`)
}else{
    console.log(`there are still users in list`)
}


