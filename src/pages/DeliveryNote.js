import React from 'react'

const DeliveryNote = () => {
    return (
      <section  className='pt-[250px] pb-[140px]'>
             <div  className="flex flex-col h-[300px] hero container max-w-screen-lg mx-auto pb-10  border shadow-xl justify-center p-8 bg-yellow-400">
          <h4 className='text-lg font-bold text-center' >Hi, thank you for ordering with us, Our Sales team will get in touch with you in a few </h4>
          <h3 className='text-red-600 text-center text-xl'>Please Note !</h3>
          <p>
            We deliver countrywide, We do same day delivery, Outside Nairobi
            Metropolitan products are received the next day.{" "}
            <span className="font-bold">
              PAYMENTS For products are Done After Delivery but NOTE
            </span>
            : In some case you may be required pay Delivery fee before the
            Product is Dispatched. At G4S
          </p>
    </div>
      </section>
     
  )
}

export default DeliveryNote 