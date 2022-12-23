import { createApp,h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import Layout from "./Shared/Layout";
import { Link } from '@inertiajs/inertia-vue3';

import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import Button from 'primevue/button';
import InputText from 'primevue/inputtext'


import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faTrophy} from "@fortawesome/free-solid-svg-icons/faTrophy";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faCircleHalfStroke} from "@fortawesome/free-solid-svg-icons/faCircleHalfStroke";
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

library.add(
    faTrophy,
    faXmark,
    faCircleHalfStroke,
    faMoon,
    faSun,
    faDesktop,
    );

createInertiaApp({
    resolve: async name => {
        let page = (await require(`./Pages/${name}`)).default;
        if(page.layout === undefined){
            page.layout = Layout;
        }
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue)
            .component('font-awesome-icon', FontAwesomeIcon)
            .component('Button',Button)
            .component("Link",Link)
            .component("InputText",InputText)
            .mount(el)
    },
})
