app.component('aside-component', {
    props: {
        classes: {
            type: Object,
            required: true
        },
        tool: {
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
    <aside>
        <div id="classes" style="text-align: center;">
            <h4 class="mb-4">Fall 2022 Class Schedule:</h4>
            <h5 style="color: white;" v-for="item in classes">
                {{ item.name }} at {{ item.time }} on {{ item.days }} with {{ item.instructer }}
            </h5>
        </div>
        <div v-if="contact" class="contactInfo">
            <p> Email: &emsp;
                <a href="mailto:sgk0711@gmail.com">
                sgk0711@gmail.com
                </a>
                <br>
                Phone: &emsp;
                <a href="tel:7063467899">
                    706-346-7899
                </a>
            </p>
        </div>
    </aside>
    `
});
