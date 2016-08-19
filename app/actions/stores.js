import RNGeocoder from 'react-native-geocoder'
import { fetchStores } from '../api/stores'

function setStores (stores) {
    return {
        type: 'SET_STORES',
        stores,
    }
}

function setCurrent (current) {
    return {
        type: 'SET_CURRENT',
        current,
    }
}

function geocodeCoordinates (coordinates) {
    return new Promise((resolve, reject) => {
        RNGeocoder.geocodePosition({
            lat: coordinates[0],
            lng: coordinates[1]
        }).then(res => {
            resolve(res[0])
        }).catch(err => reject(err))
    })
}

export function fetchAndSetStores (distance) {
    return function (dispatch, getState) {
        return fetchStores(getState().location.position, distance)
            .then((res) => dispatch(setStores(res.data.data)))
            .catch((err) => console.log(err))
    }
}

export function setCurrentStore (store) {
    let coordinates = store._geolocation.coordinates
    return function (dispatch, getState) {
        return geocodeCoordinates(coordinates)
            .then((address) => store.address = address)
            .then(() => dispatch(setCurrent(store)))
            .catch((err) => console.log(err))
    }
}