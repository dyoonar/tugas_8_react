import React from 'react';
import { Breadcrumb} from 'react-bootstrap';

function PageBC(){
    return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Berita
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
export default PageBC;