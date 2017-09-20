console.log ('connected')

var myCircle = Circles.create({
  id:                  'circles-1',
  radius:              60,
  value:               3154,
  maxValue:            4000,
  width:               10,
  text:                function(value){return value;},
  colors:              ['#b4bfc8', '#48b3bd'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

var myCircle = Circles.create({
  id:                  'circles-2',
  radius:              60,
  value:               3154,
  maxValue:            4000,
  width:               10,
  text:                function(value){return value;},
  colors:              ['#b4bfc8', '#48b3bd'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});
