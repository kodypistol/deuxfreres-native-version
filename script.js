import {gsap} from './node_modules/gsap/index.js';

const loadPage = () =>
{
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
        transform: 'translate(calc(0vw - 50%), -50%)',
        ease: "power3.out",
        duration: 1.3
    })

    gsap.to(dll, {
        delay: 2,
        transform: 'translate(calc(0vw - 50%), -50%)',
        ease: "power3.out",
        duration: 1
    })

    gsap.to(lmc, {
        delay: 2,
        transform: 'translate(calc(0vw - 50%), -50%)',
        ease: "power3.out",
        duration: 1.3
    })

    gsap.to(qlf, {
        delay: 2,
        transform: 'translate(calc(0vw - 50%), -50%)',
        ease: "power3.out",
        duration: 1
    })

    const titleContainerH1 = document.querySelector('.title-container > h1');
    const titleContainerH1SpanLast = document.querySelector('.title-container > h1 > span:last-child');
    const titleContainerH1AllSpans = document.querySelectorAll('.title-container > h1 span');

    gsap.to(df, {
        delay: 4,
        transform: 'translate(-50%, -50%) rotateY(-35deg)',
        ease: "power3.out",
        duration: 1.3
    })

    gsap.to(dll, {
        delay: 4,
        transform: 'translate(-20%, -50%) rotateY(-35deg)',
        ease: "power3.out",
        duration: 1.3
    })

    gsap.to(lmc, {
        delay: 4,
        transform: 'translate(20%, -50%) rotateY(-35deg)',
        ease: "power3.out",
        duration: 1.3
    })

    gsap.to(qlf, {
        delay: 4,
        transform: 'translate(70%, -50%) rotateY(-35deg)',
        ease: "power3.out",
        duration: 1.3
    })

    gsap.to(titleContainerH1, {
        delay: 4,
        transform: 'rotateY(-35deg) translateX(-20%)',
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
        transform: 'translateX(-24%) translateZ(200px)',
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
        transform: 'rotateY(-35deg) translateX(-30%)',
        ease: "power3.out",
        duration: 1.3
    })


    gsap.to(df, {
        delay: 5.4,
        transform: 'translate(-60%, -50%) rotateY(-35deg)',
        ease: "power3.out",
        duration: 1.3
    })

    gsap.to(dll, {
        delay: 5.4,
        transform: 'translate(-30%, -50%) rotateY(-35deg)',
        ease: "power3.out",
        duration: 1.3
    })

    gsap.to(lmc, {
        delay: 5.4,
        transform: 'translate(10%, -50%) rotateY(-35deg)',
        ease: "power3.out",
        duration: 1.3
    })
    const initCameraControl = () =>
    {
        let cursor = {
            x:0,
            y:0
        }

        window.addEventListener('mousemove', (e) =>
        {
            const allContainer = document.querySelector('.all-container');


            cursor.x = (e.clientX / window.innerWidth - 0.5) * 2;
            cursor.y = -(e.clientY / window.innerHeight - 0.5) * 2;

            allContainer.style.transform = 'translateX(' + cursor.x + '%) translateY(' + cursor.y + '%)';
        });

        const imgs = document.querySelectorAll('.imgs-parent img');
        const blockColor = (color) =>
        {
            body.style.background = color;
        }
        let hoveringElement = false;
        imgs.forEach((img) =>
        {
            img.addEventListener('mouseover', (e) =>
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
                            transform: 'translate(-70%, -50%) rotateY(-35deg)',
                        })

                        break;
                    case document.querySelector('#df') :
                        gsap.to(body, {
                            background: 'radial-gradient(circle, rgba(161,97,184,1) 45%, rgba(37,93,162,1) 81%)',
                            duration: 0.6,
                        });
                        gsap.to(df, {
                            transform: 'translate3d(10%, -50%, 20px) translate(-313.2px, 0px) rotateY(-35.0002deg)'
                        })
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
                            transform: 'translate(-70%, -50%) rotateY(-35deg)',
                        })
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

                        gsap.to(dll, {
                            transform: 'translate3d(-40%, -50%, 20px) rotateY(-35deg)'
                        });
                        gsap.to(df, {
                            transform: 'translate(-70%, -50%) rotateY(-35deg)',
                        })
                        gsap.to(lmc, {
                            transform: 'translate(0%, -50%) rotateY(-35deg)',
                        })

                        break;
                    default:

                        break;
                }
            })

            img.addEventListener('mouseout', (e) =>
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
                } else
                if (e.toElement === document.querySelector('#df'))
                {
                    gsap.to(dll, {
                        transform: 'translate3d(-30%, -50%, 0px) rotateY(-35deg)'
                    });
                } else
                if (e.toElement === document.querySelector('#dll'))
                {
                    gsap.to(lmc, {
                        transform: 'translate3d(10%, -50%, 0px) rotateY(-35deg)'
                    })
                } else
                if (e.toElement === document.querySelector('#lmc'))
                {
                    gsap.to(qlf, {
                        transform: 'translate(60%, -50%) rotateY(-35deg)'
                    })
                }

            })
        });


    }
    gsap.to(qlf, {
        delay: 5.4,
        transform: 'translate(60%, -50%) rotateY(-35deg)',
        ease: "power3.out",
        duration: 1.3,
        onComplete: initCameraControl,

    })

};

window.onload = loadPage;




