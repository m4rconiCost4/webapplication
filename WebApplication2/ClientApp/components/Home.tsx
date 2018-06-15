import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { Alert, Button } from "react-bootstrap";
import * as HomeStore from '../store/Home';
type HomeProps =
    HomeStore.showAlert
    & typeof HomeStore.actionCreators
    & RouteComponentProps<{}>;

class Home extends React.Component<HomeProps, {}> {
    constructor() {
    super() 
        this.showHideAlert = this.showHideAlert.bind(this);
     }
    public showHideAlert() {
        (this.props.show ? this.props.hideAlert() : this.props.showAlert())
    }
    
    public render() {
        return <div className="buttonAlert">
            <Button bsStyle="warning" onClick={() => this.showHideAlert()}>ALERTA!</Button>
               {this.props.show == true ?
                <Alert bsStyle="danger">
                    <strong>Holy guacamole!</strong> I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, freedom, justice, and security to my new empire.
                   </Alert>
                   : null}
        </div>;
    }
}
export default connect(
    (state: ApplicationState) => state.show, // Selects which state properties are merged into the component's props
    HomeStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Home) as typeof Home;
