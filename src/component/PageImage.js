import React from 'react';
import {Figure} from 'react-bootstrap';

function PageImage(){
    return(
        <>
            {/* <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" rounded height="30px"/> */}
            <Figure>
                <Figure.Image
                    width={70}
                    height={70}
                    alt="171x180"
                    src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                />
                <Figure.Caption className="text-light">
                    Kristian Singo.
                </Figure.Caption>
            </Figure>
        </>
    )
}
export default PageImage;
