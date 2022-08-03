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
    </aside>
    `
});
