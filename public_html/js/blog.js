$(function (){
    var APPLICATION_ID = "0A62B1D0-15B8-F2F1-FF35-45FA80A78900",
        SECRET_KEY = "196BD88C-948D-1640-FFD5-1B9DFBED0000",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
    //var user = new Backendless.User();
    //user.email = "daniellefarias813@gmail.com";
    //user.password = "Cinnamon";
    //Backendless.UserService.register(user);  
    var dataScore = Backendless.Persistence.of(Posts);
    var post = new Posts({title: "My First Blog Post", content:"My first blog post content", authorEmail:"email@email.com"});
    dataScore.save(post);
});

    function Posts(args){
        args = args || {};
        this.title = args.title || "";
        this.content = args.content || "";
        this.authorEmail = args.authorEmail || "";
    }