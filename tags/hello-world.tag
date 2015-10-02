<hello-world>
    <h3>Hello {opts.firstName}</h3>
    <input type="text" name="first_name">
    <button onclick="{updateName}">update</button>
    
    <script>
    
        updateName() {
            opts.firstName = this.first_name.value;
        }
    </script>
</hello-world>