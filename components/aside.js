app.component('aside-component', {
    props: {
        classes: {
            type: Object,
            required: true
        },
        tool: {
            type: Boolean,
            required: false
        }
    },
    template: /* html */
    `
    <aside>
        <div id="classes" style="text-align: center;">
            <h4 style="margin-bottom: 1em;">Fall 2022 Class Schedule:</h4>
            <h5 style="color: white;" v-for="item in classes">
                {{ item.name }} at {{ item.time }} on {{ item.days }} with {{ item.instructer }}
            </h5>
        </div>
        <div id="tools" :style= "[tool ? { 'visibility': 'visible' } : { 'visibility': 'hidden' }]"> 
            <h3 style="margin-bottom: 1em;">Tools I Love Using</h3>
            <div id="logos">
                <div style="margin-bottom: 2em;">
                    <a href="https://www.python.org/" target="blank">
                        <img class="img-fluid" src="./images/logos/python.png" alt="Python logo" 
                            width="60" style="margin-right: 20px">
                    </a>
                    <a href="https://scikit-learn.org/stable/" target="blank">
                        <img class="img-fluid rounded" src="./images/logos/scikitlearn.png" alt="Scikitlearn logo" 
                            width="70" style="margin-right: 20px">
                    </a>
                    <a href="https://www.tensorflow.org/" target="blank">
                        <img class="img-fluid" src="./images/logos/tensorflow.png" alt="Tensorflow logo" 
                            width="60" style="margin-right: 20px">
                    </a>
                    <a href="https://keras.io/" target="blank">
                        <img class="img-fluid" src="./images/logos/keras.png" alt="Keras logo" 
                            width="60" style="margin-right: 20px">
                    </a>
                    <img class="img-fluid" src="./images/logos/web.png" alt="HTML CSS and JavaScript logos" 
                        width="140" style="margin-right: 20px">
                </div>
                <div style="padding-bottom: 2em;">
                    <a href="https://pandas.pydata.org/" target="blank">
                        <img class="img-fluid rounded" src="./images/logos/pandas.png" alt="Pandas logo" 
                            width="60" style="margin-right: 20px">
                    </a>
                    <a href="https://matplotlib.org/" target="blank">
                        <img class="img-fluid" src="./images/logos/matplotlib.svg" alt="Matplotlib logo" 
                            width="140" style="margin-right: 20px">
                    </a>
                    <img class="img-fluid" src="./images/logos/sql.png" alt="SQL logo" 
                        width="70" style="margin-right: 20px">
                    <a href="https://www.mysql.com/" target="blank">
                        <img class="img-fluid" src="./images/logos/mysql.svg" alt="MySQL logo" 
                            width="160" style="margin-right: 20px">
                    </a>
                    <a href="https://www.microsoft.com/en-us/microsoft-365/excel" target="blank">
                        <img class="img-fluid" src="./images/logos/excel.png" alt="Excel logo" 
                            width="60" style="margin-right: 20px">
                    </a>
                </div>
            </div>
        </div>
    </aside>
    `
});

// change structure of tools from nested divs to be a grid layout of 5 columns