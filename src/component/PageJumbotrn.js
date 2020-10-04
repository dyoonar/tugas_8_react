import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

function PageJumbotrn(){
    return(
        <div>
            <Jumbotron>
                <h1>DIVISI PRIMERA</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Read more</Button>
                </p>
            </Jumbotron>
        </div>
    )
}
export default PageJumbotrn;