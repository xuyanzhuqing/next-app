import { useEffect } from "react";
import React from "react";
import Image from 'next/image'
import Script from 'next/script'
import imageLoader from './image.loader'
import style from './index.module.scss'
interface Props {

}

export interface State {
  TILECOL: number;
  TILEROW: number
}

export type StateKey = keyof State;

export default class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      TILECOL: 6744,
      TILEROW: 3105
    }
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.keydown.bind(this))
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.keydown)
  }

  public mapLoaded () {
    console.info('done')
    var map;
    var zoom = 12;
    map = new T.Map('mapDiv');
    map.centerAndZoom(new T.LngLat(116.40769, 39.89945), zoom);
  }

  public keydown(evt: KeyboardEvent) {
    switch (evt.type) {
      case 'keyup': this.add('TILEROW')
        break
      case 'keydown': this.reduce('TILEROW')
        break
      case 'keyleft': this.reduce('TILECOL')
        break;
      case 'keyright': this.add('TILECOL')
        break;
      default:
    }

    return false
  }

  public add (key: StateKey) {
    this.setState({
      [key]: this.state[key] + 1
    } as Pick<State, StateKey>)
  }

  public reduce (key: StateKey) {
    this.setState({
      [key]: this.state[key] - 1
    } as Pick<State, StateKey>)
  }

  render() {
    return (
      <>
        <Script
          src="http://api.tianditu.gov.cn/api?v=4.0&tk=0af08991b225a26ae6ce8db20e528541"
          strategy="afterInteractive"
          onReady={this.mapLoaded}></Script>
        <div style={{position: 'relative', height: '400px'}}>
          <div id="mapDiv" style={{
            position:'absolute',
            width:'500px',
            height:'400px'
          }}></div>
        </div>
        <Image
          src="https://t6.tianditu.gov.cn/cva_w/wmts"
          alt="tianditu"
          width={256}
          height={256}
          loader={(args) => imageLoader({...args, ...this.state})}
        />
        <br />
        <div className={style['handle-box']}>
          <button type="button" onClick={this.add.bind(this, 'TILEROW')}>row add</button>
          <div className={style['handle-box-col']}>
            <button type="button" onClick={this.add.bind(this, 'TILECOL')}>col add</button>
            <button type="button" onClick={this.reduce.bind(this, 'TILECOL')}>col reduce</button>
          </div>
          <button type="button" onClick={this.reduce.bind(this, 'TILEROW')}>row reduce</button>
        </div>
      </>
    );
  }

  static getLayout (page) {
    return page
  }
}