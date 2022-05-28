import {gsap} from "gsap";
import experienceManager from "./experienceManager";

const eventsManager = {
    initManager(){
        this.initMouseMove(this.initMouseClick.bind(this));
        this.initAnimationFrame();
    },
    initMouseMove(callback){
        this.cursor = {
            x:0,
            y:0
        }
        this.allContainer = document.querySelector('.all-container');
        this.pointer = document.querySelector('.cursor > div');
        this.pointerX = 0;
        this.pointerY = 0
        let mouseMoved = false;
        window.addEventListener('mousemove', (e) =>
        {

            if (!mouseMoved) {

                const displayPointer = () =>
                {
                    gsap.to(document.querySelector('.cursor'), {
                        delay: 0.4,
                        duration: 0.4,
                        ease: "power3.out",
                        opacity: '100%'
                    })
                }
                displayPointer();
                mouseMoved = true
            }

            this.cursor.x = (e.clientX / window.innerWidth - 0.5) * 2;
            this.cursor.y = -(e.clientY / window.innerHeight - 0.5) * 2;

            this.pointerX = e.clientX;
            this.pointerY = e.clientY;
        });
        callback();
    },
    initMouseClick(){
        window.addEventListener('click', (e) => {
            gsap.to(this.pointer, {
                duration: 0.2,
                scale: 0.6
            })
            gsap.to(this.pointer, {
                delay: 0.1,
                duration: 0.2,
                scale: 1
            })
            switch (e.path[0])
            {
                case document.querySelector('#df'):
                    experienceManager.showClickedCoverSection('#df')
                    break;
                case document.querySelector('#dll'):
                    experienceManager.showClickedCoverSection('#dll')
                    break;
                case document.querySelector('#lmc'):
                    experienceManager.showClickedCoverSection('#lmc')
                    break;
                case document.querySelector('#qlf'):
                    experienceManager.showClickedCoverSection('#qlf')
                    break;
            }
        });
        let scopeThis = this;
        this.initAnimationFrame(scopeThis)
    },
    initMouseOverAndOut(){
        const fadeScreen = document.querySelector('.fade-in-screen');
        const body = document.querySelector('body');
        const titleContainer = document.querySelector('.title-container');
        const df = document.querySelector('#df');
        const dll = document.querySelector('#dll');
        const lmc = document.querySelector('#lmc');
        const qlf = document.querySelector('#qlf');
        const titleContainerH1 = document.querySelector('.title-container > h1');
        const titleContainerH1SpanLast = document.querySelector('.title-container > h1 > span:last-child');
        const titleContainerH1AllSpans = document.querySelectorAll('.title-container > h1 span');
        const dfText = document.querySelector('.img-child:nth-of-type(1) > .hover-text-df-container > div');
        const dllText = document.querySelector('.img-child:nth-of-type(2) > .hover-text-dll-container > div');
        const lmcText = document.querySelector('.img-child:nth-of-type(3) > .hover-text-lmc-container > div');
        const qlfText = document.querySelector('.img-child:nth-of-type(4) > .hover-text-qlf-container > div');

        const imgs = document.querySelectorAll('.imgs-parent img');

        let hoveringElement = false;
        imgs.forEach((img) =>
        {
            img.addEventListener('mouseover', () =>
            {
                if (!document.querySelector('body').classList.contains('showSection'))
                {
                    hoveringElement = true;

                    switch (img) {
                        case document.querySelector('#dll') :
                            gsap.to(body, {
                                background: 'radial-gradient(circle, rgba(230,180,158,1) 45%, rgba(209,116,160,1) 81%)',
                                duration: 0.6,
                            });
                            gsap.to(dll, {
                                transform: 'translate3d(-20%, -50%, 20px) rotateY(-35deg)'
                            });
                            gsap.to(df, {
                                transform: 'translate3d(-70%, -50%, 0) rotateY(-35deg)',
                            })
                            gsap.to(dfText, {
                                opacity: '0',
                                transform: 'translate3d(-7vh, 0, 0)',
                                duration: 0.6
                            });
                            gsap.to(dllText, {
                                opacity: '100%',
                                transform: 'translate3d(7vh, 0, 0)',
                                duration: 0.6
                            });


                            break;
                        case document.querySelector('#df') :
                            gsap.to(body, {
                                background: 'radial-gradient(circle, rgba(161,97,184,1) 45%, rgba(37,93,162,1) 81%)',
                                duration: 0.6,
                            });
                            gsap.to(df, {
                                transform: 'translate3d(10%, -50%, 20px) translate(-313.2px, 0px) rotateY(-35.0002deg)'
                            })
                            gsap.to(dfText, {
                                opacity: '100%',
                                transform: 'translate3d(7vh, 0, 0)',
                                duration: 0.6
                            });
                            break;
                        case document.querySelector('#lmc') :
                            gsap.to(body, {
                                background: 'radial-gradient(circle, rgba(225,0,58,1) 30%, rgba(4,9,13,1) 83%)',
                                duration: 0.6,
                            });
                            gsap.to(lmc, {
                                transform: 'translate3d(15%, -50%, 20px) rotateY(-35.0002deg)',
                                duration: 0.6,
                            });
                            gsap.to(dll, {
                                transform: 'translate3d(-40%, -50%, 20px) rotateY(-35deg)'
                            });
                            gsap.to(df, {
                                transform: 'translate3d(-70%, -50%, 0) rotateY(-35deg)',
                            })
                            gsap.to(lmcText, {
                                opacity: '100%',
                                transform: 'translate3d(2vh, 0, 0)',
                                duration: 0.6
                            });
                            break;
                        case document.querySelector('#qlf') :
                            gsap.to(body, {
                                background: 'radial-gradient(circle, rgba(169,53,82,1) 13%, rgba(255,207,219,1) 96%)',
                                duration: 0.6,
                            });
                            gsap.to(qlf, {
                                transform: 'translate3d(70%, -50%, 20px) rotateY(-35deg)',
                                duration: 0.6,
                            });
                            gsap.to(qlfText, {
                                opacity: '100%',
                                transform: 'translate3d(2vh, 0, 0)',
                                duration: 0.6
                            });

                            gsap.to(dll, {
                                transform: 'translate3d(-40%, -50%, 20px) rotateY(-35deg)'
                            });
                            gsap.to(df, {
                                transform: 'translate3d(-70%, -50%, 0) rotateY(-35deg)',
                            })
                            gsap.to(lmc, {
                                transform: 'translate3d(0%, -50%, 0) rotateY(-35deg)',
                            })

                            break;
                        default:

                            break;
                    }
                }

            });

            img.addEventListener('mouseout',  (e) =>
            {
                if (!document.querySelector('body').classList.contains('showSection'))
                {
                    if (e.toElement === document.querySelector('.all-container'))
                    {
                        gsap.to(body, {
                            background: 'radial-gradient(circle, rgba(79,94,146,1) 45%, rgba(79,94,146,1) 81%)',
                            duration: 0.8,

                        });
                        gsap.to(df, {
                            transform: 'translate3d(-60%, -50%, 0px) rotateY(-35deg)'
                        });
                        gsap.to(dll, {
                            transform: 'translate3d(-30%, -50%, 0px) rotateY(-35deg)'
                        });
                        gsap.to(lmc, {
                            transform: 'translate3d(10%, -50%, 0px) rotateY(-35deg)'
                        });
                        gsap.to(qlf, {
                            transform: 'translate3d(60%, -50%, 0px) rotateY(-35deg)'
                        });
                        gsap.to(dfText, {
                            opacity: '0',
                            transform: 'translate3d(0vh, 0, 0)',
                            duration: 0.6
                        });
                        gsap.to(dllText, {
                            opacity: '0',
                            transform: 'translate3d(0vh, 0, 0)',
                            duration: 0.6
                        });
                        gsap.to(lmcText, {
                            opacity: '0',
                            transform: 'translate3d(-2vh, 0, 0)',
                            duration: 0.6
                        });
                        gsap.to(qlfText, {
                            opacity: '0',
                            transform: 'translate3d(-2vh, 0, 0)',
                            duration: 0.6
                        });
                    } else
                    if (e.toElement === document.querySelector('#df'))
                    {
                        gsap.to(dll, {
                            transform: 'translate3d(-30%, -50%, 0px) rotateY(-35deg)'
                        });
                        gsap.to(dllText, {
                            opacity: '0',
                            transform: 'translate3d(-7vh, 0, 0)',
                            duration: 0.6
                        });
                    } else
                    if (e.toElement === document.querySelector('#dll'))
                    {
                        gsap.to(lmc, {
                            transform: 'translate3d(10%, -50%, 0px) rotateY(-35deg)'
                        })
                        gsap.to(lmcText, {
                            opacity: '0',
                            transform: 'translate3d(-2vh, 0, 0)',
                            duration: 0.6
                        });
                    } else
                    if (e.toElement === document.querySelector('#lmc'))
                    {
                        gsap.to(qlf, {
                            transform: 'translate3d(60%, -50%, 0) rotateY(-35deg)'
                        })
                        gsap.to(dllText, {
                            opacity: '0',
                            transform: 'translate3d(-7vh, 0, 0)',
                            duration: 0.6
                        });
                        gsap.to(qlfText, {
                            opacity: '0',
                            transform: 'translate3d(-2vh, 0, 0)',
                            duration: 0.6
                        });
                    } else
                    if (e.toElement === document.querySelector('#qlf'))
                    {
                        gsap.to(lmcText, {
                            opacity: '0',
                            transform: 'translate3d(-2vh, 0, 0)',
                            duration: 0.6
                        });
                    }
                }


            });
        });
    },
    initAnimationFrame(scopeThis){
        window.requestAnimationFrame(function animation()
        {
            // container
            scopeThis.allContainer.style.transform = 'translate3d(' + scopeThis.cursor.x + '%, ' + scopeThis.cursor.y + '%, 0)';
            // cursor
            scopeThis.pointer.style.transform = 'translate3d(' + (scopeThis.pointerX * 2.9) + '%, '  + (scopeThis.pointerY * 2.9) + '%, 0)';
            window.requestAnimationFrame(animation);
        });
    },
    
}
export default eventsManager;