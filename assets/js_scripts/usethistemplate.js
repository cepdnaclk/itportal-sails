var app;

document.addEventListener("DOMContentLoaded", function(event) {

app = new Vue({
    el: '#app',
    data: {
        message: 'Not Implemented'
    },
    methods: {
        getResults: function() {
            this.message = 'Not Implemented [Vue app mounted]'
        },
    },
    mounted: function() {
        this.getResults();
    }
});

});

