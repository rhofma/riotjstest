<contact-list>
    <h1>Contacts</h1>
    
    <ul>
        <li each={person in opts.people}>
            {person.first} {person.last}
        </li>
    </ul>
    
    <script>
        
        this.on('mount', function () {
            opts.callback(this);
            
        });
        
        this.on('data-loaded', function (peeps) {
            opts.people = peeps;
            this.update();
        });
    </script>
</contact-list>