app.component('header-component', {
    props: {
        home: {
            type: Boolean,
            required: false
        },
        about: {
            type: Boolean,
            required: false
        },
        work: {
            type: Boolean,
            required: false
        },
        contact: {
            type: Boolean,
            required: false
        }
    },
    template: /* html */
    `
    <header class="bg-dark row header">
        <navigation :home="home" :about="about" :work="work" :contact="contact"></navigation>
    </header>
    `
})