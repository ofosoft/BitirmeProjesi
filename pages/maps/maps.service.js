var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NgZone } from "@angular/core";
import { Observable } from 'rxjs/Observable';
var GoogleMapsService = (function () {
    // There are some issues with async observers (https://gist.github.com/endash/1f961830d0c5b744598a)
    //    - That's why we need to use ngZones
    // Here's another post explaining the issue (http://stackoverflow.com/a/38100262/1116959)
    //    - Seems that google.maps API is not patched by Angular's zone
    function GoogleMapsService(zone) {
        this.zone = zone;
        this._AutocompleteService = new google.maps.places.AutocompleteService();
        this._Geocoder = new google.maps.Geocoder;
        // As we are already using a map, we don't need to pass the map element to the PlacesServices (https://groups.google.com/forum/#!topic/google-maps-js-api-v3/QJ67k-ATuFg)
        this._PlacesService = new google.maps.places.PlacesService(document.createElement("div"));
        this._DirectionsService = new google.maps.DirectionsService;
        this._DistanceMatrixService = new google.maps.DistanceMatrixService;
    }
    // Caveat:  As we are using Observable.create don't forget a well-formed finite Observable must attempt to call
    //          either the observer’s onCompleted method exactly once or its onError method exactly once, and must not
    //          thereafter attempt to call any of the observer’s other methods.
    //    - http://reactivex.io/documentation/operators/create.html
    //    - http://stackoverflow.com/a/38376519/1116959
    // https://developers.google.com/maps/documentation/javascript/reference#AutocompletePrediction
    GoogleMapsService.prototype.getPlacePredictions = function (query) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._AutocompleteService.getPlacePredictions({ input: query }, function (places_predictions, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    _this.zone.run(function () {
                        observer.next([]);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.next(places_predictions);
                        observer.complete();
                    });
                }
            });
        });
    };
    GoogleMapsService.prototype.geocodePlace = function (placeId) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._Geocoder.geocode({ 'placeId': placeId }, function (results, status) {
                if (status.toString() === 'OK') {
                    if (results[0]) {
                        _this.zone.run(function () {
                            observer.next(results[0].geometry.location);
                            observer.complete();
                        });
                    }
                    else {
                        _this.zone.run(function () {
                            observer.error(new Error("no results"));
                        });
                    }
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error"));
                    });
                }
            });
        });
    };
    // https://developers.google.com/maps/documentation/javascript/reference#PlaceResult
    GoogleMapsService.prototype.getPlacesNearby = function (location) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._PlacesService.nearbySearch({
                location: location,
                radius: 500,
                types: ['restaurant']
            }, function (results, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    _this.zone.run(function () {
                        observer.next([]);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.next(results);
                        observer.complete();
                    });
                }
            });
        });
    };
    // https://developers.google.com/maps/documentation/javascript/reference#DirectionsResult
    GoogleMapsService.prototype.getDirections = function (origin, destination) {
        var _this = this;
        var _origin = {
            location: origin
        }, _destination = {
            location: destination
        }, route_query = {
            origin: _origin,
            destination: _destination,
            travelMode: google.maps.TravelMode.WALKING
        };
        return Observable.create(function (observer) {
            _this._DirectionsService.route(route_query, function (route, status) {
                if (status.toString() === 'OK') {
                    _this.zone.run(function () {
                        // Yield a single value and complete
                        observer.next(route);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error due to " + status));
                    });
                }
            });
        });
    };
    GoogleMapsService.prototype.getDistanceMatrix = function (origin, destination) {
        var _this = this;
        var _origin = {
            location: origin
        }, _destination = {
            location: destination
        }, distance_query = {
            origins: [_origin],
            destinations: [_destination],
            travelMode: google.maps.TravelMode.WALKING,
            unitSystem: google.maps.UnitSystem.METRIC
        };
        return Observable.create(function (observer) {
            _this._DistanceMatrixService.getDistanceMatrix(distance_query, function (distance, status) {
                if (status.toString() === 'OK') {
                    _this.zone.run(function () {
                        // Yield a single value and complete
                        observer.next(distance);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error due to " + status));
                    });
                }
            });
        });
    };
    return GoogleMapsService;
}());
GoogleMapsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NgZone])
], GoogleMapsService);
export { GoogleMapsService };
//# sourceMappingURL=maps.service.js.map