import {gsap} from './node_modules/gsap/index.js';
import experienceManager from "./experienceManager";
import eventsManager from "./eventsManager";


const loadPage = () =>
{
    experienceManager.initScene();
    eventsManager.initManager();
};

window.onload = loadPage;
//


