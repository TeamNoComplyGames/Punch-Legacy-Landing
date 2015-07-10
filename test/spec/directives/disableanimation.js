'use strict';

describe('Directive: disableAnimation', function () {

  // load the directive's module
  beforeEach(module('punchLegacyLandingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<disable-animation></disable-animation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the disableAnimation directive');
  }));
});
