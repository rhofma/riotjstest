riot.tag('hello-form', '<form> <input type="text" name="greet"> <button>say yow</button> </form>', function(opts) {

});
riot.tag('hello-world', '<h3>Hello {opts.greet}</h3>', function(opts) {

});