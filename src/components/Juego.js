import Card from 'react-bootstrap/Card'
import {React, Component} from 'react';

class JuegoComponent extends Component {

    render() {
        return (
        <div>
                <Card>
                <Card.Body>
                <Card.Title> 
                    { this.props.nombreJuego }
                    </Card.Title>
                    <p>
                    { this.props.sinopsis }
                    </p>
                </Card.Body>
                </Card>
                </div>
        )
    }
}

export default JuegoComponent;
