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

    init(params: GameParams) {
        if (!params.counterElement || !params.eggElement) {
            //union type
            throw new Error('One of elements not found')
        }

        this.counterElement = params.counterElement
        this.eggElement = params.eggElement
        this.displayEggClicks()
        this.displayEgg()
        console.log(this)
        console.log('Game started')
    }

    displayEggClicks() {
        if (!this.counterElement) {
            throw new Error('One of elements not found')
        }
        this.counterElement.innerText = `${this.eggInstance.eggClicks}`
    }

    displayEgg() {
        if (!this.eggElement) {
            throw new Error('Egg of elements not found')
        }

        const eggImageSrc = this.eggInstance.assets.get(EggState.Egg)
        if (!eggImageSrc) {
            throw new Error('no image was not found')
        }

        this.eggElement.src = eggImageSrc
    }
}
