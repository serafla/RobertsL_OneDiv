import { gsap } from "gsap";

gsap.from("#egg", { duration: 3, x: -500});
gsap.to("#egg", {duration: 5.35, x: 360, rotation:740, scale: 2.5 })
gsap.to("#egg", {duration: 2, rotation: 700, delay:5.35})
gsap.to("#egg", {duration: 2, rotation: 720, delay:7.35})
gsap.to("#egg", {duration: 1, y: 30, scaleY: 2, scaleX: 3, delay:9.35})
gsap.to("#egg", {duration: 0.25, y: -150, delay:10.35, scale: 1.5, rotation: 180})
gsap.to("#egg", {duration: 0.5, y: -200, delay:10.60, scale: 1, rotation: 360})
gsap.to("#egg", {duration: 1, y: -200, delay:11.10, scaleY: 0.75, scaleX: 1.25})
gsap.to("#egg", {duration: .75, y: 100, delay:12.10, scale: 2.5 })
gsap.to("#egg", {duration: 0.5, delay:12.85, y: 100, scaleY: 1.5, scaleX: 3.5, repeat: 1, yoyo: true})
gsap.to("#egg", {duration: 0.5, delay:14, y: -30, repeat: 1, yoyo:true})
gsap.to("#egg", {duration: 1, rotation: 720, delay:14.5})
gsap.to("#egg", {duration: 2, rotation: 900, delay:15.25})


