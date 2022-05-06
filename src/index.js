import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './index.css';
import * as AppViews from './views/AppViews';
import * as CreatorViews from './views/CreatorViews';
import * as SubscriberViews from './views/SubscriberViews';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib("ALGO");
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect
}));

const { standardUnit } = reach;
const defaultInfo = 'cats are frens';
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
    // const addr = await acc.networkAccount.getAddress();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({ mode: 'SelectRole', acc, bal });

  }
  selectRole(role) { this.setState({ mode: 'RunRole', role }); } // from mode: SelectRole
  selectSubscriber() { this.selectRole(<Subscriber acc={this.state.acc} />); }
  selectCreator() { this.selectRole(<Creator acc={this.state.acc} />); }
  render() {
    const { mode, role } = this.state;
    const parent = this;
    let app = null;
    if (mode === 'ConnectAccount') {
      app = <AppViews.ConnectAccount />

    } else if (mode === 'SelectRole') {
      app = <AppViews.SelectRole {...{ parent }} />
    } else { // 'RunRole'
      app = role;
    }
    return <AppViews.Wrapper {...{ app }} />;
  }
}

class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'Deploy' };
  }
  async deploy() { // from mode: Deploy
    const ctc = this.props.acc.contract(backend); // deploys contract
    this.setState({ mode: 'EnterInfo', ctc });
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({ ctcInfoStr });
  }
  enterInfo(meow) { this.setState({ mode: 'RunBackend', meow }); } // from mode: EnterInfo
  async runBackend() {
    const { ctc, meow } = this.state;
    this.setState({ mode: 'BackendRunning' });
    console.log(meow)
    await backend.Creator(ctc, { meow });
    this.setState({ mode: 'BackendRan' });
  }
  render() {
    let alice = null;
    const parent = this;
    const { mode, ctcInfoStr, requestStandard, meow } = this.state;
    if (mode === 'Deploy') {
      alice = <CreatorViews.Deploy {...{ parent }} />;
    } else if (mode === 'EnterInfo') {
      alice = <CreatorViews.EnterInfo {...{ parent, defaultInfo }} />;
    } else if (mode === 'RunBackend') {
      alice = <CreatorViews.RunBackend {...{ parent, meow, requestStandard, standardUnit }} />;
    } else if (mode === 'BackendRunning') {
      alice = <CreatorViews.BackendRunning {...{ ctcInfoStr }} />;
    } else { // 'BackendRan'
      alice = <CreatorViews.BackendRan />;
    }
    return <CreatorViews.CreatorWrapper {...{ alice }} />
  }
}

class Subscriber extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'RunBackend' };
  }
  async runBackend(ctcInfoStr) { // from mode: RunBackend
    const ctcInfo = JSON.parse(ctcInfoStr);
    const ctc = this.props.acc.attach(backend, ctcInfo);
    const interact = {
      got: (infoBytes) => {
        console.log(infoBytes)
        this.setState({ info: infoBytes })
      },
    };
    await backend.Subscriber(ctc, interact);
    this.setState({ mode: 'DisplayInfo'})
  }
  render() {
    let bob = null;
    const parent = this;
    const { mode, info } = this.state;
    if (mode === 'RunBackend') {
      bob = <SubscriberViews.RunBackend {...{ parent }} />
    } else { 
      bob = <SubscriberViews.DisplayInfo {...{ info }} />
    }
    return <SubscriberViews.SubscriberWrapper {...{ bob }} />;
  }
}

renderDOM();