const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>Home page</p>' }
const Detail = { template: '<p>Detail page</p>' }

const routes = {
    '/': Home,
    '/details': Detail
}

var app = new Vue({
    el: '#app',
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