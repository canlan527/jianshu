import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "iconfont"; /* Project id 3601999 */
    src: url('./iconfont.eot?t=1661395565129'); /* IE9 */
    src: url('./iconfont.eot?t=1661395565129#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
        url('./iconfont.ttf?t=1661395565129') format('truetype'),
        url('./iconfont.svg?t=1661395565129#iconfont') format('svg');
  }

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;






