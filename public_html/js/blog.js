$(function (){
    var APPLICATION_ID = "0A62B1D0-15B8-F2F1-FF35-45FA80A78900",
        SECRET_KEY = "196BD88C-948D-1640-FFD5-1B9DFBED0000",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
    var user = new Backendless.user();
    user.email = "daniellefarias813@gmail.com";
    user.password = "Cinnamon";
    Backendless.userService.request(user);
    
});