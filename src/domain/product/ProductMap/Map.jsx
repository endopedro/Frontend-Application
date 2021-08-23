import React from 'react'
import { useSelector } from 'react-redux'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const MapContainer = ({ google }) => {
  const product = useSelector((state) => state.product.data)

  return (
    <Map
      google={google}
      zoom={10}
      initialCenter={{
        lat: product.company.address.latitude,
        lng: product.company.address.longitude,
      }}
      zoomControl={false}
      mapTypeControl={false}
      scaleControl={false}
      streetViewControl={false}
      panControl={false}
      rotateControl={false}
      fullscreenControl={false}
    >
      <Marker
        name={'Current location'}
        position={{
          lat: product.company.address.latitude,
          lng: product.company.address.longitude,
        }}
      />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer)
