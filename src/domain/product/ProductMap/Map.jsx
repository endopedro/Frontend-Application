import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const MapContainer = ({ google, address }) => {
  return (
    <Map
      google={google}
      zoom={10}
      initialCenter={{
        lat: address.latitude,
        lng: address.longitude,
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
        position={{ lat: address.latitude, lng: address.longitude }}
      />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer)
