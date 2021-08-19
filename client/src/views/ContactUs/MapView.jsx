import React from "react";

import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import Icon from "./Icon";


const position = [-26.7323594,-65.255898]

const MapView = () => {
    return <MapContainer center={position}  zoom={13} scrollWheelZoom={false}>
         <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     <Marker position={position} icon={Icon} >
      <Popup>
      Uttinger 110 4103 Tafí Viejo, Tucuman, Argentina
      </Popup>
    </Marker>
        </MapContainer>
}

export default MapView;