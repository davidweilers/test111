function calcTextDimensions(element) {
  var inner = element.querySelector('span');
  var text_content = element.innerText;

  if (!inner) {
    var inner = document.createElement('span');
    inner.setAttribute('style', 'display: inline-block; white-space: nowrap;')
    inner.append(text_content);
    element.innerHTML = '';
    element.appendChild(inner);
  }

  return {
    height: inner.offsetHeight,
    width: inner.offsetWidth,
    text_content: text_content
  }
}

function calcSVGDimensions(text_dimensions) {
  var C = text_dimensions.width;
  var r = C / (2 * Math.PI);
  var padding = text_dimensions.height;
  var side = 2 * r + 2 * padding;

  return {
    r: r,
    padding: padding,
    side: side
  }
}

function buildSVG(text, svg_dimensions, id) {
  if (!id) {
    id = '';
  }

  var template = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{{side}}" height="{{side}}" viewBox="0 0 {{side}} {{side}}"><path id="path_text{{id}}" transform="translate({{padding}} {{padding}})" data-name="path_text{{id}}" d="M{{r}},0A{{r}},{{r}},0,1,1,0,{{r}},{{r}},{{r}},0,0,1,{{r}},0Z" fill="none" /><text dy="0"><textPath xlink:href="#path_text{{id}}">{{text}}</textPath></text></svg>';

  template = template.replace(/\{\{side\}\}/gm, svg_dimensions.side);
  template = template.replace(/\{\{r\}\}/gm, svg_dimensions.r);
  template = template.replace(/\{\{padding\}\}/gm, svg_dimensions.padding);
  template = template.replace(/\{\{text\}\}/gm, text);
  template = template.replace(/\{\{id\}\}/gm, id);

  return template;
}

function circleize(selector) {
  var elements = document.querySelectorAll(selector);

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text_dimensions = calcTextDimensions(element);
    var svg_dimensions = calcSVGDimensions(text_dimensions);
    var template = buildSVG(text_dimensions.text_content, svg_dimensions, i);
    element.innerHTML = template;
  }
}

circleize('.circleize');