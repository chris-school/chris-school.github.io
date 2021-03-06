Vue.component('portfolio-project', {
    props: ['project'],
    template: `
        <div class="item">
            <h3>{{ project.title }}</h3>

            <img v-if="project.image" v-bind:src="project.image" alt="Project image">

            <p v-if="!seen">{{project.description}}</p>

            <a v-if="!seen && project.github" v-bind:href="project.github">Github link</a>

            <div class="d-grid gap-2 col-6 mx-auto info-btn">
                <button v-on:click="toggleInfo" class="btn btn-dark" type="button">{{this.button.text}}</button>
            </div>
        </div>
    `,
    methods: {
        toggleInfo: function() {
            this.seen = !this.seen
            this.button.text = this.seen ? 'Show more' : 'Show less'
        }
    },
    data() {
        return {
            seen: true,
            button: {
                text: 'Show more'
            }
        }
    }
}) 

{/* <button v-on:click="toggleInfo" class="btn btn-dark" type="button">{{ button.text }}</button> */}

var app = new Vue({
    el: '#app',
    data: {
        projects: [
            { 
                id: 0,
                title: "Portfolio Website",
                image: 'images/portfolio_screenshot_3.png',
                description: "To create this website I learned the basics of Vue.js and used sass for the styling as I dislike css quite a bit.",
                github: "https://github.com/chris-school/chris-school.github.io"
            },
            { 
                id: 1,
                title: "Placeholder",
                description: "Here is a description"
            },
            { 
                id: 2,
                title: "Placeholder",
                description: "Here is a description"
            },
            { 
                id: 3,
                title: "Placeholder",
                description: "Here is a description"
            },
            { 
                id: 4,
                title: "Placeholder",
                description: "Here is a description"
            },
            { 
                id: 5,
                title: "Placeholder",
                description: "Here is a description"
            }
        ],
    }
})