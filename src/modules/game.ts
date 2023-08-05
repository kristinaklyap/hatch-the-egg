// game.ts
import { Egg, EggState } from './egg.js'
interface GameParams {
    eggElement: HTMLImageElement
    counterElement: HTMLParagraphElement
}

interface IGame extends GameParams {}

export class Game {
    counterElement: HTMLParagraphElement | null = null
    eggElement: HTMLImageElement | null = null
    eggInstance: Egg = new Egg()
    stopWatch: number | null = null
    secondsPassed: number = 0

    init(params: GameParams) {
        if (!params.counterElement || !params.eggElement) {
            //union type
            throw new Error('One of elements not found')
        }

        this.counterElement = params.counterElement
        this.eggElement = params.eggElement
        this.displayEggClicks()
        this.mountEgg()
    }

    displayEggClicks() {
        if (!this.counterElement) {
            throw new Error('One of elements not found')
        }
        this.counterElement.innerText = `${this.eggInstance.eggClicks}`
    }

    mountEgg() {
        if (!this.eggElement) {
            throw new Error('Egg of elements not found')
        }

        const eggImageSrc = this.eggInstance.assets.get(EggState.Egg)
        if (!eggImageSrc) {
            throw new Error('no image was not found')
        }

        this.eggElement.src = eggImageSrc
        this.eggElement.addEventListener('click', () => {
            this.eggInstance.tapEgg()
            this.displayEggClicks()
            if (!this.stopWatch) {
                this.startStopWatch()
            }
        })
    }

    startStopWatch() {
        this.stopWatch = setInterval(() => {
            this.secondsPassed++
            console.log('stopwatch started', this.secondsPassed)
        }, 1000)
    }
}
