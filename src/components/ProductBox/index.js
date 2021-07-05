import React, {useState} from 'react'

export default function ProductBox({data}) {
    return (
        <div >
            {data.line_items.map((item) =>(
                <div key={item.id}>
                <div className="media-content">
                    <p className="product-title">{item.title}</p>
                    <p>{item.quantity}</p>
                    <p className="product-variants">{item.variant_title}</p>
                    <p>{item.name}</p>
                </div>
                    <div className="media-left">
                        <img className="image"
                            src={item.image}
                            alt={item.title}
                        />
                    </div>
                        <div className="media-right">
                             <p className="product-price">{item.price}</p>
                        </div>
                        </div>
                        ))}  
        </div>
    )
}