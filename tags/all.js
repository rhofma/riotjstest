riot.tag('hello-form', '<form onsubmit="{sayHello}"> <input type="text" name="greet"> <button>say yow</button> </form> <hello-world show="{this.greeting}" greet="{this.greeting}"></hello-world>', function(opts) {
        this.sayHello = function() {
            this.greeting = this.greet.value;
            this.greet.value = '';
        }.bind(this);
         
    
});
riot.tag('hello-world', '<h3>Hello {opts.greet}</h3>', function(opts) {

});