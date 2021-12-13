const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>Home page</p>' }
const Detail = { template: '<p>Detail page</p>' }

const routes = {
    '/': Home,
    '/details': Detail
}

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    render (h) { return h(this.ViewComponent)}
})

var app = new Vue({
    el: '#app2',
    data: {
        projects: [
            { 
                title: "Portfolio Website",
                image: 'images/portfolio_screenshot_3.png',
                description: "Here is a description"
            },
            { 
                title: "Placeholder",
                description: "Here is a description"
            },
            { 
                title: "Placeholder",
                description: "Here is a description"
            },
            { 
                title: "Placeholder",
                description: "Here is a description"
            },
            { 
                title: "Placeholder",
                description: "Here is a description"
            },
            { 
                title: "Placeholder",
                description: "Here is a description"
            }
        ]
    }
})