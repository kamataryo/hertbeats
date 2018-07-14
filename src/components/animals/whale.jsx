import React from 'react'
import PropTypes from 'prop-types'

/**
 * Whale svg wrapped component
 * @type {function}
 */
export default class Whale extends React.Component {
  /**
   * [slug description]
   * @type {string}
   */
  static slug = 'whale'

  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    scaleEnabled: PropTypes.bool.isRequired,
    // width: PropTypes.number.isRequired,
  }

  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate() {
    return false
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const {
      scaleEnabled,
      // width
    } = this.props
    const width = 1024
    return (
      <div style={ { position: 'relative' } }>
        <svg
          width={ scaleEnabled ? width : 1024 }
          viewBox={ '0 0 2999 706' }
          version={ '1.1' }
          xmlns={ 'http://www.w3.org/2000/svg' }
          xmlnsXlink={ 'http://www.w3.org/1999/xlink' }
        >
          <title>{'whale'}</title>
          <g>
            <path
              d={ `M1,224
                C10.3500524, 263.267907
                113.370662, 613.267559
                829.773336, 694.115809
                C1400.0511, 758.473413
                2028.71463, 539.147204
                2348.96052, 404.285969
                C1743.05956, 537.623195
                1438.60128, 440.821313
                1236.04409, 375.188023
                C1242.55892, 393.618329
                1253.18495, 413.772034
                1270.14493, 435.043122
                C1330.3454, 510.546085
                1382.56252, 561.594271
                1249.87443, 507.132246
                C1143.85066, 463.614629
                1059.06358, 387.317532
                1022.05109, 325.536157
                C826.805825, 299.681244
                804.491535, 214.125989
                429.676343, 243.017994
                C228.298919, 258.540837
                89.1060195, 242.9921
                1,224
                Z` }
              fill={ '#D8D8D8' }
            />
            <path
              d={ `M1786.94762,60.4007718
                C1615.14985,49.3550959
                1411.54093,45.8956302
                1157.39978,50.4073013
                C411.293378,63.6526436
                0,220.949855
                0,220.949855
                C0,220.949855
                0.212193381,222.121349
                0.739221948,224.349814
                C88.7942408,243.433368
                228.259283,259.147721
                430.350404,243.569864
                C805.165596,214.67786
                827.479886,300.233114
                1022.72515,326.088027
                C1059.73764,387.869403
                1144.52472,464.1665
                1250.54849,507.684116
                C1383.23658,562.146141
                1331.01946,511.097956
                1270.81899,435.594993
                C1253.85901,414.323905
                1243.23299,394.170199
                1236.71815,375.739893
                C1439.05934,441.303193
                1743.08439,537.968643
                2347.69726,405.263616
                C2454.40272,360.361011
                2527.05445,324.752335
                2552.16854,311.970943
                C2581.29197,297.369647
                2631.52571,318.321627
                2707.51402,338.754646
                C2783.50233,359.187664
                2905.59493,358.105761
                2979.96892,358.105761
                C3054.34292,358.105761
                2882.02339,301.151911
                2838.43311,265.528267
                C2794.84283,229.904623
                2695.21985,236.687622
                2734.20097,229.904623
                C2773.18208,223.121625
                2779.37702,220.010893
                2896.67996,104.658929
                C3013.9829,-10.6930344
                2797.79577,98.9503502
                2746.70003,115.900168
                C2695.60429,132.849985
                2616.87164,171.948034
                2562.82828,207.038502
                C2382.28708,147.805317
                2211.97619,104.373901
                1986.17477,78.0955476
                C1934.0564,44.1350096
                2011.0247,6.25793585
                2011.0247,6.25793585
                C2011.0247,6.25793585
                1952.40361,-23.3475329
                1816.41275,46.2286269
                C1805.91757,51.598212
                1796.11042,56.2984844
                1786.94762,60.4007718
                Z` }
              fill={ '#4A4A4A' }
            />
            <ellipse fill={ '#D8D8D8' } cx={ 934 } cy={ 221 } rx={ 25 } ry={ 25 } />
            <ellipse
              fill={ '#4A4A4A' }
              cx={ 931.5 }
              cy={ 224.5 }
              rx={ 12.5 }
              ry={ 12.5 }
            />
          </g>
        </svg>
      </div>
    )
  }
}
