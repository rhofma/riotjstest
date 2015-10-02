riot.tag('contact-list', '<h1>Contacts</h1> <ul> <li each="{person in opts.people}"> {person.first} {person.last} </li> </ul>', function(opts) {
        
        this.on('mount', function () {
            opts.callback(this);
            
        });
        
        this.on('data-loaded', function (peeps) {
            opts.people = peeps;
            this.update();
        });
    
});
riot.tag('hello-form', '<form onsubmit="{sayHello}"> <input type="text" name="greet"> <button>say yow</button> </form> <hello-world show="{this.greeting}" greet="{this.greeting}"></hello-world>', function(opts) {
        this.sayHello = function() {
            this.greeting = this.greet.value;
            this.greet.value = '';
        }.bind(this);
         
    
});
riot.tag('hello-world', '<h3>Hello {opts.firstName}</h3> <input type="text" name="first_name"> <button onclick="{updateName}">update</button>', function(opts) {
    
        this.updateName = function() {
            opts.firstName = this.first_name.value;
        }.bind(this);
    
});