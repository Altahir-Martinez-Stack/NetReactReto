
import React, { useRef } from 'react';
import useReactToPrint from 'react-to-print';

const PdfPrint = ( item) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: ()=> alert('Print success')
    });

    return (
        <>
            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
                <h1 className="text-center my-3 border py-2">test data</h1>
                holas
            </div>
            <button onClick={handlePrint }>Print this out</button>
        </>
    );
}

export default PdfPrint;