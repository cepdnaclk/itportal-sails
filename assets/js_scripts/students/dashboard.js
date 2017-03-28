var app;

document.addEventListener("DOMContentLoaded", function(event) {

app = new Vue({
    el: '#student_app',
    data: {
        user_email: null,
        student_profile: {},

        activeSection: 'personal_information',

    },
    methods: {
        getResults: function() {
            axios.get('/user?where={%22isStudent%22:%22true%22,%22email%22:%22' + this.user_email +'%22}&limit=100')
                .then(function(results) {
                    console.log(results);
                    app.student_profile = results.data[0]
                })
                .catch(function(err) {
                    console.log(err);
                })
        },
        setActiveSection: function(_activeSection){
            this.activeSection = _activeSection;
        }
    },
    mounted: function() {
        this.user_email = userEmail;
        this.getResults();
    }
});

});

