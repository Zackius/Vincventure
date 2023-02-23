import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Popup = () => {
  return (
    <div>
    <Popup trigger=
        {<button> Click to open modal </button>}
        modal nested>
        {
            close => (
                <div className='modal'>
                    <div className='content'>
                     Thank you for making your order with us, Our sales team will get intouch with you shortly.
                    </div>
                    <div>
                        <button onClick=
                            {() => close()}>
                               Close
                        </button>
                    </div>
                </div>
            )
        }
    </Popup>
</div>
  )
}

export default Popup