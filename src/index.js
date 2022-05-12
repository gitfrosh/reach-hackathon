import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './index.css';
import  { Root } from './Root';
import * as CreatorViews from './views/CreatorViews';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib("ALGO");
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect
}));

const { standardUnit } = reach;
// const defaultRequestStandard = '0.5';

function renderDOM() {
  ReactDOM.render(
    <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('root')
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'ConnectAccount' }
  }
  async componentDidMount() { // from mode: ConnectAccount
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({ mode: 'SelectRole', acc, bal });

  }
  render() {
    const { mode, role } = this.state;
    console.log(mode)
    const parent = this;
    return <Root mode={mode} parent={parent} acc={this.state.acc} />;
  }
}




renderDOM();
