const defaultOptions = {
  storageKey: 'kokoro-store',
  audioTagId: 'kokoro-sevice'
}

export class Kokoro {
  get ref () {
    return this._ref
  }

  constructor (options) {
    const op = Object.assign({}, defaultOptions, options)
    this._storageKey = op.storageKey
    this._mount(op.audioTagId)
  }

  destroy () {
    this._destroyed = true
    this._unmount()
  }

  _mount (id) {
    this._ref = document.createElement('audio')
    if (id) this._ref.id = id
    document.body.appendChild(this._ref)
  }

  _unmount () {
    this._ref.remove()
  }
}

export default Kokoro

export * from './constants'
export * as actions from './actions'
export * as helpers from './helpers'
