import { createInertiaApp } from '@inertiajs/svelte'
import { mount } from 'svelte'
import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
import VerticalLayout from './Layouts/VerticalLayout/Index.svelte'
import HorizontalLayout from './Layouts/HorizontalLayout/Index.svelte'
import en from '../lang/en.json';
import './bootstrap'
import '@sweetalert2/themes/wordpress-admin/wordpress-admin.scss';

addMessages('en', en);

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.svelte', { eager: true });  
    //Eligir el layout dependiendo de la ruta
    let layout;  
    let page = pages[`./Pages/${name}.svelte`];

    if(name.startsWith('Public/')){
      layout = HorizontalLayout;
    }else{
      layout = VerticalLayout;
    }

    return {default: page.default, layout: layout};
  },
  setup({ el, App, props }) {
    mount(App, { target: el, props })
  },
});

document.getElementById('app').removeAttribute("data-page");