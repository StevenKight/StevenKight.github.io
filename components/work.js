app.component('work-component', {
    props: {
        work: {
            type: Object,
            required: true
        }
    },
    template: /* html */
    `
    <div v-for="item in work" class="section">
        <h3>
            <img :src="item.icon" class="black" width="100" :alt="item.name">
            {{ item.name }}
        </h3>
        <h5 class="workLearnMore"><a href="">Learn More &#62;</a></h5>
    </div>
    `
});