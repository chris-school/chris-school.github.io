var app2 = new Vue({
    el: '#app2',
    data: {
        message1: "Message 1",
        message2: "Message 2",
        message3: "Message 3"
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        todos: [
            { text: "Todo 1" },
            { text: "Here this text is different" },
            { text: "Todo 3" }
        ]
    }
})