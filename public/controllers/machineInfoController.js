app.controller('machineInfoController', function($scope, $http) {
  console.log("machineInfoController activated!");

  const location = getParams();
  console.log(location);

  $http.post(`/info?loc=${location.loc}`, {query: location.loc})
  .then(function(httpResponse, err) {
    if (err) throw err;
    console.log(httpResponse.data);

    $scope.id = location.loc;
    $scope.name = httpResponse.data[0].properties.name;
    $scope.nick = 'Nicknames: ' + httpResponse.data[0].properties.nick;
    $scope.desc = httpResponse.data[0].properties.description;
    $scope.monHours = httpResponse.data[0].room.hours.mon;
    $scope.tuesHours = httpResponse.data[0].room.hours.tues;
    $scope.wedHours = httpResponse.data[0].room.hours.weds;
    $scope.thurHours = httpResponse.data[0].room.hours.thurs;
    $scope.friHours = httpResponse.data[0].room.hours.fri;
    $scope.satHours = httpResponse.data[0].room.hours.sat;
    $scope.sunHours = httpResponse.data[0].room.hours.sun;
    $scope.permissions = httpResponse.data[0].room.permissions;
    $scope.machines = httpResponse.data[0].contents.machines;
    $scope.materials = httpResponse.data[0].contents.materials;
    $scope.equipment = httpResponse.data[0].contents.equipment;
  })
});
