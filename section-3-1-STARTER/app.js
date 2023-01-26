let vm = Vue.createApp({
    data() {
        return {
            // perspective: 0, - me
            perspective: 100, // - from course
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            copyBtn: 'Copy',
            resetBtn: 'Reset'
        }
    },
    methods: {
        reset() {
            this.perspective = 0
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
            this.copyBtn = 'Copy'
            this.resetBtn = 'Reset done!'
            setTimeout(() => {
                this.resetBtn = 'Reset'
            }, 1000)
        },
        async copyAllValues() {
            // From Me
            // const text = JSON.stringify(this.boxStyle).trim()
            // text.replaceAll('\n', '')
            const text = `transform: ${this.boxStyle.transform}`
            await navigator.clipboard.writeText(text)
            this.copyBtn = 'Copied!'
            setTimeout(() => {
                this.copyBtn = 'Copy'
            }, 1000)

            // From the Course
            // const el = document.createElement('textarea')
            // el.setAttribute('readonly', '')
            // el.style.position = 'absolute'
            // el.style.left = '-9999px'
            // el.value = `transform: ${this.boxStyle.transform}`
            // document.body.appendChild(el)
            // el.select()
            // document.execCommand('copy')
            // document.body.removeChild(el)
        },
    },
    computed: {
        boxStyle() {
            return {
                transform: `
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg) 
                    rotateY(${this.rotateY}deg) 
                    rotateZ(${this.rotateZ}deg)
                `
            }
        },
    }
}).mount('#app')
