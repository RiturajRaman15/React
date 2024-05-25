// import Button from 'react-bootstrap/Button';
// or
import {Button} from 'react-bootstrap';

export default function Bootstrap() {
    return (
        <>
            <h1>Bootstrap</h1>
            <h3>Run <code>npm install react-bootstrap bootstrap</code> in terminal to install Bootstrap library.</h3>
            <h3>Add <code>import 'bootstrap/dist/css/bootstrap.min.css';</code> to 'main.jsx' file.</h3>
            <h3>You need to import the component in order to use it.</h3>
            <h3>Just for example, to use Button you need to import the button component <code>import Button from
                'react-bootstrap/Button';</code></h3>
            <Button>This is Bootstrap Button</Button>{' '}
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </>
    )
}