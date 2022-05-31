import {gsap} from "gsap";
import eventsManager from "./eventsManager";

import 'vlitejs/dist/vlite.css';
import Vlitejs from 'vlitejs';
import VlitejsYoutube from 'vlitejs/dist/providers/youtube'

Vlitejs.registerProvider('youtube', VlitejsYoutube);

const audd = new Vlitejs(document.querySelector('#player'), {
    options: {
        controls: true,
        autoplay: true,
        playPause: false,
        progressBar: false,
        time: false,
        volume: false,
        fullscreen: false,
        poster: 'https://i3.ytimg.com/vi/BtyHYIpykN0/maxresdefault.jpg',
        bigPlay: false,
        playsinline: true,
        loop: true,
        muted: false,
        autoHide: true,
        providerParams: {}
    },
    provider: 'youtube',
    onReady: function (player) {
        console.log(player)

        player.on('play', () => console.log('play'))
        player.on('pause', () => console.log('pause'))
        player.on('progress', () => console.log('progress'))
        player.on('timeupdate', () => console.log('timeupdate'))
        player.on('volumechange', () => console.log('volumechange'))
        player.on('enterfullscreen', () => console.log('enterfullscreen'))
        player.on('exitfullscreen', () => console.log('exitfullscreen'))
        player.on('enterpip', () => console.log('enterpip'))
        player.on('leavepip', () => console.log('leavepip'))
        player.on('trackenabled', () => console.log('trackenabled'))
        player.on('trackdisabled', () => console.log('trackdisabled'))
        player.on('ended', () => console.log('ended'))
    }
})

const experienceManager = {
    initScene(){
        const fadeScreen = document.querySelector('.fade-in-screen');
        const body = document.querySelector('body');

        gsap.to(fadeScreen, {
            opacity: 0,
            duration: 2,
            delay: 0.5
        });

        gsap.to(body, {
            delay: 2.5,
            duration: 0,
            background: 'radial-gradient(circle, rgba(46,57,96,1) 45%, rgba(46,57,96,1) 81%)'
        })

        const titleContainer = document.querySelector('.title-container');

        gsap.to(titleContainer, {
            transform: 'scale(0.9)',
            ease: "power3.out",
            duration: 4
        })

        const df = document.querySelector('#df');
        const dll = document.querySelector('#dll');
        const lmc = document.querySelector('#lmc');
        const qlf = document.querySelector('#qlf');

        gsap.to(df, {
            delay: 2,
            transform: 'translate3d(calc(0vw - 50%), -50%, 0)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(dll, {
            delay: 2,
            transform: 'translate3d(calc(0vw - 50%), -50%, 0)',
            ease: "power3.out",
            duration: 1
        })

        gsap.to(lmc, {
            delay: 2,
            transform: 'translate3d(calc(0vw - 50%), -50%, 0)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(qlf, {
            delay: 2,
            transform: 'translate3d(calc(0vw - 50%), -50%, 0)',
            ease: "power3.out",
            duration: 1
        })

        const titleContainerH1 = document.querySelector('.title-container > h1');
        const titleContainerH1SpanLast = document.querySelector('.title-container > h1 > span:last-child');
        const titleContainerH1AllSpans = document.querySelectorAll('.title-container > h1 span');
        const dfText = document.querySelector('.img-child:nth-of-type(1) > .hover-text-df-container > div')
        const dllText = document.querySelector('.img-child:nth-of-type(2) > .hover-text-dll-container > div')
        const lmcText = document.querySelector('.img-child:nth-of-type(3) > .hover-text-lmc-container > div')
        const qlfText = document.querySelector('.img-child:nth-of-type(4) > .hover-text-qlf-container > div')

        gsap.to(df, {
            delay: 4,
            transform: 'translate3d(-50%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(dll, {
            delay: 4,
            transform: 'translate3d(-20%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(lmc, {
            delay: 4,
            transform: 'translate3d(20%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(qlf, {
            delay: 4,
            transform: 'translate3d(70%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(titleContainerH1, {
            delay: 4,
            transform: 'rotateY(-35deg) translate3d(-20%, 0, 0)',
            ease: "power3.out",
            duration: 1.3
        })

        titleContainerH1AllSpans.forEach((span) =>
        {
            gsap.to(span, {
                delay: 4,
                color: 'white',
                ease: "power3.out",
                duration: 1.3
            })
        })

        gsap.to(titleContainerH1SpanLast, {
            delay: 4,
            transform: 'translate3d(-24%, 0, 200px)',
            ease: "power3.out",
            duration: 1.3,
        })

        gsap.to(body, {
            delay: 5.4,
            background: 'radial-gradient(circle, rgba(79,94,146,1) 45%, rgba(79,94,146,1) 81%)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(titleContainerH1, {
            delay: 5.4,
            transform: 'rotateY(-35deg) translate3d(-30%, 0, 0)',
            ease: "power3.out",
            duration: 1.3
        })


        gsap.to(df, {
            delay: 5.4,
            transform: 'translate3d(-60%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(dll, {
            delay: 5.4,
            transform: 'translate3d(-30%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(lmc, {
            delay: 5.4,
            transform: 'translate3d(10%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(qlf, {
            delay: 5.4,
            transform: 'translate3d(60%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3,
            onComplete: eventsManager.initMouseOverAndOut,

        });
    },
    initFirstScene(){
        const body = document.querySelector('body');
        const df = document.querySelector('#df');
        const dll = document.querySelector('#dll');
        const lmc = document.querySelector('#lmc');
        const qlf = document.querySelector('#qlf');
        const titleContainerH1SpanLast = document.querySelector('.title-container > h1 > span:last-child');
        const titleContainerH1AllSpans = document.querySelectorAll('.title-container > h1 span');
        const titleContainerH1 = document.querySelector('.title-container > h1');

        gsap.to(body, {
            background: 'radial-gradient(circle, rgba(79,94,146,1) 45%, rgba(79,94,146,1) 81%)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(titleContainerH1, {
            transform: 'rotateY(-35deg) translate3d(-20%, 0, 0)',
            opacity: 1,
            ease: "power3.out",
            duration: 1.3
        })

        titleContainerH1AllSpans.forEach((span) =>
        {
            gsap.to(span, {
                color: 'white',
                opacity: 1,
                ease: "power3.out",
                duration: 1.3
            })
        })

        gsap.to(titleContainerH1SpanLast, {
            transform: 'translate3d(-24%, 0, 200px)',
            opacity: 1,
            ease: "power3.out",
            duration: 1.3,
        })


        gsap.to(df, {
            transform: 'translate3d(-60%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(dll, {
            transform: 'translate3d(-30%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(lmc, {
            transform: 'translate3d(10%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3
        })

        gsap.to(qlf, {
            transform: 'translate3d(60%, -50%, 0) rotateY(-35deg)',
            ease: "power3.out",
            duration: 1.3
        });

        gsap.to('.section-showed', {
            opacity: '0',
            ease: "power3.out",
            duration: 1.3
        });
    },
    showClickedCoverSection(sectionToShow){
        const body = document.querySelector('body');
        body.classList.add('showSection');


        const titleContainerH1 = document.querySelector('.title-container > h1');
        const titleContainerH1SpanLast = document.querySelector('.title-container > h1 > span:last-child');

        const imgs = document.querySelectorAll('.imgs-parent img');

        gsap.to(titleContainerH1, {
            duration: 1,
            transform: 'translate3d(0, 0, 0)',
            opacity: 0
        })

        gsap.to(titleContainerH1SpanLast, {
            duration: 1,
            transform: 'translate3d(0, 0, 0) rotateY(0)'
        })

        imgs.forEach((img) =>
        {
            if (img !== document.querySelector(sectionToShow))
            {
                switch (img) {
                    case document.querySelector('#df'):
                        gsap.to('#df', {
                            duration: 1,
                            transform: 'translate3d(-200vw, -50%, -70vw) rotateY(-35deg)'
                        })
                        break;
                    case document.querySelector('#dll'):
                        gsap.to('#dll', {
                            duration: 1,
                            transform: 'translate3d(210%, -50%, 0) rotateY(-35deg)'
                        })
                        break;

                    case document.querySelector('#lmc'):
                        gsap.to('#lmc', {
                            duration: 1,
                            transform: 'translate3d(-150vw, -50%, -70vw) rotateY(-35deg)'
                        })
                        break;
                    case document.querySelector('#qlf'):
                        gsap.to('#qlf', {
                            duration: 1,
                            transform: 'translate3d(400%, -50%, 0) rotateY(-35deg)'
                        })
                        break;
                }
            }
        });
        switch (sectionToShow) {

            case '#df':
                gsap.to(sectionToShow, {
                    duration: 1,
                    transform: 'translate3d(-5vw, -49vh, 0) scale(0.47)',
                    ease: "power4.out",
                })
                gsap.to('.hover-text-df-container > div', {
                    duration: 1,
                    transform: 'translate3d(17vh, 0, 0)',
                    opacity: 0,
                    ease: "power2.out",
                });
                document.querySelector('.dfSection').style.display = 'block';
                gsap.to('.dfSection', {
                    opacity: 1,
                    duration: 1
                })
                break;
        }

    }
}
export default experienceManager;