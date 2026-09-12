(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Path_0 = function() {
	this.initialize(img.Path_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,788,70);


(lib.bag = function() {
	this.initialize(img.bag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,183);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.bwheel = function() {
	this.initialize(img.bwheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,102);


(lib.cleanb = function() {
	this.initialize(img.cleanb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,269);


(lib.cleanh = function() {
	this.initialize(img.cleanh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,401,356);


(lib.cook = function() {
	this.initialize(img.cook);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,310);


(lib.egg = function() {
	this.initialize(img.egg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,43);


(lib.f01 = function() {
	this.initialize(img.f01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.f3 = function() {
	this.initialize(img.f3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,31);


(lib.fl2 = function() {
	this.initialize(img.fl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,45);


(lib.h11 = function() {
	this.initialize(img.h11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,229);


(lib.h2 = function() {
	this.initialize(img.h2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,108);


(lib.h3 = function() {
	this.initialize(img.h3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,75);


(lib.h4 = function() {
	this.initialize(img.h4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,107);


(lib.milk = function() {
	this.initialize(img.milk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,161);


(lib.nb = function() {
	this.initialize(img.nb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,97);


(lib.nb1 = function() {
	this.initialize(img.nb1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,54);


(lib.po = function() {
	this.initialize(img.po);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,74);


(lib.spoon = function() {
	this.initialize(img.spoon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,188);


(lib.swheel = function() {
	this.initialize(img.swheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.v03 = function() {
	this.initialize(img.v03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,42);


(lib.v04 = function() {
	this.initialize(img.v04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,52);


(lib.v05 = function() {
	this.initialize(img.v05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,63);


(lib.v06 = function() {
	this.initialize(img.v06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,46);


(lib.v1 = function() {
	this.initialize(img.v1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,74);


(lib.v2 = function() {
	this.initialize(img.v2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,76);


(lib.v7 = function() {
	this.initialize(img.v7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,36);


(lib.wtach = function() {
	this.initialize(img.wtach);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,48);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjVSsQhNgXgrg/QhhAPhcgnQhegpg5hUQgKgNgKgTQg2ABgygdQgzgfgfg2QgXgpgGgvIgJgBQiDgOhShuQhShuAPiMQAOh6BRhVQgygeggg2QgqhJARhPQAQhOBCglQAXgMAdgFQgag6gFhBQgFhDAShCQAchkBKhHQBHhEBegVQAjhzBig/QBig/BuAVQAPgeAcgXQAdgYAkgMQA2gRA0ALQAMg3AxgkQAzgkBCAAQA7ABAuAeQAbgbAmgPQAmgPArAAQAoAAAmANQAyAQAlAiQAkAhARAqQA8gWBBAVQAtAOAhAfQAfAeAOAnQBWgTBVAhQBWAiA0BNQAoA6AKBFQAJBDgWBAIAGAJQAkANAdAbQAfAdAQAnQAXA2gLA3QgKA2gmAhQA6AlAcBDQAXA4gHA7IgBAiQgHA8gkA2QA4AxAbBDQAcBFgIBKQgJBVg2BDQg1BChQAfQAWBFgWA/QgXBAg6AeQgaAMgcAEQgJBihEBJQhKBRhrANQhqAOhUg8QgeAngsAdQhRA2hjABQhgABhUgwQglAmg6AMQgXAEgYAAQgjAAgkgLg");
	mask.setTransform(165.1,162.3);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E20011","#E00011","#DE0011","#DE0011"],[0,0.561,0.659,1],3.4,-0.6,0,3.4,-0.6,120.6).s().p("A5qR3MAHjgrVMAryAHoMgHjArVg");
	this.shape.setTransform(164.3,163.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#E20011","#E00011","#DE0011","#DE0011"],[0,0.561,0.659,1],0,0,0,0,0,121.1).s().p("AjVSsQhNgXgrg/QhhAPhcgnQhegpg5hUQgKgNgKgTQg2ABgygdQgzgfgfg2QgXgpgGgvIgJgBQiDgOhShuQhShuAPiMQAOh6BRhVQgygeggg2QgqhJARhPQAQhOBCglQAXgMAdgFQgag6gFhBQgFhDAShCQAchkBKhHQBHhEBegVQAjhzBig/QBig/BuAVQAPgeAcgXQAdgYAkgMQA2gRA0ALQAMg3AxgkQAzgkBCAAQA7ABAuAeQAbgbAmgPQAmgPArAAQAoAAAmANQAyAQAlAiQAkAhARAqQA8gWBBAVQAtAOAhAfQAfAeAOAnQBWgTBVAhQBWAiA0BNQAoA6AKBFQAJBDgWBAIAGAJQAkANAdAbQAfAdAQAnQAXA2gLA3QgKA2gmAhQA6AlAcBDQAXA4gHA7IgBAiQgHA8gkA2QA4AxAbBDQAcBFgIBKQgJBVg2BDQg1BChQAfQAWBFgWA/QgXBAg6AeQgaAMgcAEQgJBihEBJQhKBRhrANQhqAOhUg8QgeAngsAdQhRA2hjABQhgABhUgwQglAmg6AMQgXAEgYAAQgjAAgkgLg");
	this.shape_1.setTransform(165.1,162.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(43.6,41.6,243.1,241.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AieG4IgLgJQgTAGgWgFQgWgGgRgQQgNgMgIgRIgDAAQgyAJgqgfQgqgfgKg1QgIguAUgoQgVgFgSgQQgYgXgCgfQgDgeAUgUQAJgIAJgFQgigmgBg0QAAgoATghQATghAggSQAAguAdgiQAdghArgEQAFgbAZgSQASgMAVgCQgCgVAOgSQAOgTAZgHQAVgHAVAGQAKgSAUgLQAUgLAYAAIAEAAQApABAXAdQAUgOAaAAQAlABAUAbQAegQAjADQAjADAcAWQAVARALAZQAKAXgBAZIADADQAgABAVAaQAPASACAVQACAVgKAQQAZAHASAVQAPATADAWIADAMQAFAXgIAYQAaAMARAVQASAWAFAbQAGAggMAfQgMAdgaAUQAPAXgBAaQgCAagSARQgHAHgKAFQADARiDAfQiCAegkgIQgQAcgIAKQgSAUgVgBQgGAAgXAOIgwAdQgtAagbAKQgUAHgOAAQgNAAgHgGg");
	mask.setTransform(48.1,44.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E20011","#E00011","#DE0011","#DE0011"],[0,0.561,0.659,1],0.2,-0.6,0,0.2,-0.6,45.6).s().p("AneHFIAAuJIO9AAIAAOJg");
	this.shape.setTransform(47.9,45.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0.9,0,94.3,89.3), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAZDGQgWgWgDgfQgEgeAOgaQgNgSgCgYQgVAKgXgEQgXgDgRgRQgRgSgEgXQgggLgVgcIgFgGIgCgFQgHgMgEgNQgJghALghQAMghAcgVQAdgWAlAAQAaAAAXAMQAYAMAQAWQANASAFAVQAZgHAYAHQAZAJAQAVQAMASADAVQACAVgIAUQAYAHAPAUQAPAUgBAaQAAAZgQAVQAPAagDAeQgEAfgXAWQgbAbgmAAQgmAAgbgbg");
	mask_1.setTransform(19.4,22.6);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E20011","#E00011","#DE0011","#DE0011"],[0,0.561,0.659,1],0.1,-0.4,0,0.1,-0.4,20.5).s().p("AjADmIAAnLIGBAAIAAHLg");
	this.shape_2.setTransform(19.3,23);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0.8,0,37.2,45.1), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhiB5QgaAAgVgPQgWgPgJgZQgMggAOgfQAPgfAggMQAPgGARABQAAgTAKgQQALgRATgGQAPgGAQADQAQACALAKQAKgQASgGQAJgEAKAAQAdAAASAXQAWgFAVAJQAWAJALAVQAOAZgIAbQgIAbgZAOQgUALgXgDQgXgDgQgRQgPAGgSgDQADARgHAQQgIAQgPAJQgRAIgQgCQgPAVgZAKIgFABIgBABIgDABQgKACgHAAIgDAAg");
	mask_2.setTransform(24,19.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#E20011","#E00011","#DE0011","#DE0011"],[0,0.561,0.659,1],0,0.5,0,0,0.5,15.4).s().p("AjuBvIA+kyIGfBUIg+Eyg");
	this.shape_3.setTransform(23.9,19.6);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(5.8,7.5,36.5,24.2), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AFPFVIgTgBQhWgIhBg1Qg3AXg5gPQg3gNgmgsQglgrgGg4QgxAbg5gHQglBChEAeQhFAehLgRQhagWgxhQQgxhQAWhZQAShLA8gwQA6gvBLgDQAWg5A1ghQA1gjA/AGQA9AFAuApQAcgmAqgXQAqgWAwAAIARABQBAAFAwAqQAwApAPA9QAzgQA2AEQBwAKBJBWQBJBWgKBwQgHBWg3BCQg2BAhQAWQggALgiAAg");
	mask_3.setTransform(91.1,85.1);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#E20011","#E00011","#DE0011","#DE0011"],[0,0.561,0.659,1],1.4,4.5,0,1.4,4.5,49.4).s().p("AuIDIIIZwaIT4KLIoZQag");
	this.shape_4.setTransform(90.5,85.1);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(29.9,51,122.3,68.2), null);


(lib.您 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag9GAQg8AAgpglQgWgZgCglQgFhDAIhIQAGgFAFgKIAHAAQAYAbARAcQAPA8AGA4IAaAeQAcAYAmAEQBpAHBpgSQAEgiAKghIAMgVQAOAjALAmIgJAaQgqAWgwAFIgzAAQhUAAhNgDgAieCwIAHAAIgEgJIgDgCgAisCZIAHAAIgFgHIgCgBgAkyE5IgFgOIAsiZIADAAIACAJIAOAJQAUA9gIA/QgJAYgOAQQgHACgGAAQgVAAgNgRgAkiEnIAJALIAMAAIgQgMIgCgCgAAjEPIgLgMIgKgCQgbgngMgzQgKgRAFgXQAtAeAwAmQAfAqgjAiQgGADgGAAQgGAAgGgDgAgECuIAAgJIgEgBQgFAIAJACgAEQEDQgfgqgRg0QgLgGgDgLIAKgHQAVAHAYAEIA2AdIAXAXQAGAZgKAXIgRAOIgJAAQgVAAgTgHgAD2C1IAEAAIAAgKIgHgGIgJAAgAArBlQgMgIALgJQANAHAQgHQgJhvgNhxIAMgaIAKAAIAcAMQAmAkAKAyQAJBigcBaIgLABQgmAAgkgUgABEiAIAHgOIgHgHIgHAAgAjGBeIgFgNQgFhagNhfQglAgguAUQgVAHgTgJQAihHA1hKQAeg+APhCIAFANIAFACIAOgPIgPgLIgCgHIAHgFIAIACIAUAMQAkArAAA5QgDAfgOAZQgXAWgQAaQAQAbAJAfQAHBZgXBRQgDACgEAAQgFAAgFgEgAkzhOIAAAJIAUgMIACgZIgCgBgAi3i4IAAAHIAJgHQATgcAAgkIgFAAQgJAjgOAdgAhUAuQAagvAJg6IAMgHQAOgBAOAIQAJAYAAAaQgJAmgaAaIgXARIgOACQgPgJADgTgAD4AnIgxhNIgFgXIAHAEIAEgFIAPgJQAdAFAbAQQAUAVAJAdQgCATgMALIghAOgADXgvIAJALIAKgJIgDgDIgNgCgADliEIgEgKQAOgyACg2Qg/AIgwAIIiCAAIglBDIgmAoIgOAAQAFg0AQg7QAAg9AIhAIAGgBIAFAuIADAAIAHg0IgOgNIAGgHQASABANAOQAQAcAHAhIAAA5QByAJBvgcIAJgQIAVgMQAUgDAVAIQAUAjgJAmQgbA5gkAqgAEEi2IAEAAIABgKIgFAAgAg2i4IADAAIAAgDIgCgCgAEIjFIADAAIACgOIgEgCgAEjj4IAEAEIABgZIgFgKIgFAAQAEAUABALgAECkXQgBAHAFADIAIgNIgBgCgAgOkSIABgbIgDAAQgGAPAIAMg");
	this.shape.setTransform(0,0,0.866,0.866);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.您, new cjs.Rectangle(-29.8,-33.5,59.7,67.1), null);


(lib.左手指 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383231").s().p("Ag5BQQgxgLgUgtQgKgXgBgUIABgKQABgiAWgTQAmgjBcAfIAMAGIACABQAIAFAEAEIADADIAYAbIAhA0IAiBGQAGAMgeAGQgLABgPAAQgyAAhegVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.左手指, new cjs.Rectangle(-13.8,-10.1,27.6,20.3), null);


(lib.左手 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383231").s().p("AgiBwIgQgBIgRgDIgCgBIgLgFQhJgtAcgiQAOgSAmgQQg8g8ALgbQAEgKANgCQAMgCALAGIA9AhQApAWAFgEQAHAVAFAGQAIAKAGAPQATAmBAAuIg6AQIgUAEIhIALg");
	this.shape.setTransform(-19.4,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AiMDRQhFgygQgiQgGgNgHgLQgFgGgGgWIFLkcQADA1BRAOQAoAHAogEQgNAYgGAnQgMBOAjBMQi0BWjXAyIAFgDg");
	this.shape_1.setTransform(7.9,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.左手, new cjs.Rectangle(-32.8,-22.5,65.8,45.1), null);


(lib.左耳 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AjBBTQgcgqAVgzQAXg4BCgbQBHgcBugDQB4gEAQAlQAIASgKAGIgmANQhSAahHBaQgsA5hCAGIgMAAQg3AAgdgqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.左耳, new cjs.Rectangle(-20.9,-12.5,42,25.1), null);


(lib.媽2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRA7IgBgNQgFgDgCgFIgBgQIAJhOIgDgCIAAgEIAFgBQAPAJALAQIAKAFQAFATABASQgHAkgZAXIgFABQgFAAgCgFg");
	this.shape.setTransform(27.8,16.9,0.879,0.878);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQA7IgBgNQgGgDgCgFIgBgQIAJhOIgEgCIAAgEIAFgBQAQAJALAQIAKAFQAEAQACAVQgHAkgZAXIgFABQgEAAgCgFg");
	this.shape_1.setTransform(19.2,16.9,0.879,0.878);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRA7IgBgNQgFgDgCgFIgBgQIAJhOIgEgCIAAgEIAGgBQAOAIAMARIAKAFQAFATABASQgHAkgZAXIgFABQgFAAgCgFg");
	this.shape_2.setTransform(10.3,16.9,0.879,0.878);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghA2IADgNQgEgFAAgFIAFgPIAjhGIgDgEIABgDIAFABQALANAGAUIAJAIQgDATgFARQgTAhggAMIgCAAQgHAAAAgIg");
	this.shape_3.setTransform(-0.7,16.1,0.879,0.878);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTCwQAAgugDiKQgDhzACg4IAwABQABC0gUCyg");
	this.shape_4.setTransform(24.1,-10.8,0.879,0.878);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiUBfIgTjHQAFAdANAaQB3AECAgEIARgRQAPgKASAIIASATIABAPQglAPgogDIjwgGQgHA1AKAyQB1ARB3gTQAEgOAOgMIATABIARATQADARgNAIIhqANg");
	this.shape_5.setTransform(22.6,-12.1,0.879,0.878);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AE9GrIgGgIIg0gyIgCgMIA2AQIAIgEQAag5AQhHQAOhUAIhXQibgIicACQgQAXgXgIIgPgVQAlh9ATjKIAPgJIAOAAIAXARQAQAaAFAvQAFAtgHAgQgcBOgcBGQCZAACPAHIAJgJQAogQApAMQASBUgUBUQgoBxhGBcIgXANQgCAKgJAHgAGYBsIALgoIgLAAQgIAVAIATgAG3A0IAPAIIAAgKIgFgBQgFAAgFADgABIAEIACgJIgEgCQgGAHAIAEgABKgHQATgsACgyIgEAAQgRAwAAAugAB4jXIACgHIgCgCgABdjkIAIgKIANAGIACgGIgTgVIgGgCQgGATAIAOgAhvGMQhAgggug5IgXAXQgrAdgwAbIgLgIIgEgNIAEAAIAbgZIA6hRQhDhJgehQIASASIALACIBjBLQAYgpAUgyQAVhTAAhUIhkAGIgwBUIgZAfQgMALgMgJQgLALgKAAIgIgEQgFgWANgYQAEACAGgGIAZhMQhGAAg/gZIgCgIQBJAGA+AAIAIgEQAOg3ALhGQgChgARhgIAIAEIADAOQAAgOAOgLIgHgIIgMgEIgCgGIAIgHIAPACIAbAVQAjBNACBTQgIBXghBRQAsAEAvgIQgEgRAOgKIANAAIAhAnQATA2gDA1QgWByhBBeIAJAKIB4BTIAXAnIgEATQgVAPgXAAQgUAAgVgLgAhUFWIAEgEIgEgCgAhXFSIAAgEIgGAAgAiRhWIAFgGIgJAAgAkBkCIAFAAIAAheIgFAAgAEzCZIAGADQgDAKgIAEQgIgIANgJgAFakfQiIACiUgJQg2AAgvgQQgGgGAMgJQC0APCygGQALgUASgQIAfgMQAOAEASACIAOANQAKAeABAiQAAACgMAAQgWAAg+gIgAFck8IAGgFIAAgEIgCgCQgGAEACAHgAF1lDIAKACIAFgIIgLgCg");
	this.shape_6.setTransform(0,0,0.879,0.878);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.媽2, new cjs.Rectangle(-42.5,-38.1,85,76.2), null);


(lib.媽1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQA7IgCgNQgFgDgCgFIgBgQIAJhOIgEgDIAAgDIAGgBQAPAJALAQIAKAFQAEAPACAVQgHAlgZAXIgFABQgEAAgCgFg");
	this.shape.setTransform(25.8,15.8,0.817,0.817);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRA7IgBgNQgFgDgCgFIgBgQIAJhOIgDgDIAAgDIAFgBQAOAJAMAQIAKAFQAFATABARQgHAlgZAXIgFABQgFAAgCgFg");
	this.shape_1.setTransform(17.8,15.8,0.817,0.817);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRA7IgBgNQgFgDgCgFIgBgQIAJhOIgDgDIAAgDIAFgBQAOAIAMARIALAFQAEAUABAQQgHAlgZAXIgFABQgEAAgDgFg");
	this.shape_2.setTransform(9.5,15.8,0.817,0.817);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghA2IAEgNQgFgEAAgGIAFgPIAjhGIgDgEIABgDIAFAAQAMAOAFAUIAIAIQgBATgGARQgTAgggANQgJAAAAgIg");
	this.shape_3.setTransform(-0.7,15,0.817,0.817);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTCwQAAgrgDiNQgDhyACg5IAwABQABC3gVCug");
	this.shape_4.setTransform(22.4,-10,0.817,0.817);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiUBgIgSjIQAEAeAOAZQB2AFB/gEIASgSQAQgKARAHIASAUIABAPQgnAOgmgCIjvgGQgIA3AKAwQB0ARB4gTQAFgOANgMIATABIARATQADARgMAIIhqANg");
	this.shape_5.setTransform(21,-11.2,0.817,0.817);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AE9GrIgGgIIg0gxIgCgNIA2AQIAIgDQAcg/ANhDQAQhYAHhRQicgIibACQgRAWgWgIIgPgVQAkh4AUjPIAPgIIAOAAIAXAQQAQAaAFAwQAFAsgHAgQgYBCggBTQCTgBCVAHIAIgIQAogRApAMQATBWgVBSQgmBwhIBeIgWAMQgCAKgJAHgAGYBsIAKgoIgKAAQgJAWAJASgAG3A0IAPAIIAAgKIgGgBQgFAAgEADgABIAEIACgJIgEgCQgGAHAIAEgABKgHQATgtACgxIgEAAQgRAwAAAugAB4jXIACgGIgCgCgABdjkIAIgKIAMAGIADgGIgTgVIgGgCQgHASAJAPgAhwGNQhBgjgtg3IgWAXQgyAhgqAXIgKgIIgEgNIAEAAIAbgYIA6hRQhChKgghQIATATIALACIBjBKQAXgpAVgyQAUhVAAhSIhjAGIgwBUIgZAgQgMAKgNgJQgKALgKAAIgJgEQgEgXANgXQAEACAGgGIAZhMQhIAAg9gZIgCgIQBCAGBFAAIAIgEQAPg/AKg+QgChjARhdIAIAEIADAOQgBgOAOgLIgGgIIgMgEIgCgHIAIgFIAPACIAaAUQAkBNACBTQgIBWgiBSQAtAEAvgIQgFgRAPgKIAMAAIAiAnQATA2gDA1QgWBxhBBeIAIALIB5BTIAXAnIgFATQgVAPgXAAQgUAAgVgKgAhVFXIAEgFIgEgCgAhXFSIAAgEIgGAAgAiRhWIAEgHIgIAAgAkBkCIAEAAIAAhdIgEAAgAEyCaIAHABQgDAMgIADQgIgIAMgIgAFakfQiPACiNgJQg2AAgvgQQgGgGAMgIQC2AOCwgHQAJgRAUgRIAfgNQATAFAMABIAPAMQALAiAAAfQAAADgLAAQgWAAg/gJgAFck9IAGgEIAAgDIgCgDQgHAFADAFgAF1lCIAKABIAEgIIgKgCg");
	this.shape_6.setTransform(0,0,0.817,0.817);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.媽1, new cjs.Rectangle(-39.5,-35.4,79,70.9), null);


(lib.右耳 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("ABHCMQhAgRgig/Qg3hlhMgoIgjgTQgJgIAKgQQAXghB2AYQBrAWBCAnQA8AlANA6QAMA3gjAlQgcAdgoAAQgQAAgRgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.右耳, new cjs.Rectangle(-19.8,-14.4,39.7,28.9), null);


(lib.字 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB4F4F").s().p("AgHE+IgVgPIAAgnIAQgCIABAAIgNjeQhXhzhIiDQgYgbAFggIACgRIBQAAIAFALQAIAOgFAOIgBACIAXAcQAsBHAwBBQAkgzAcgvIAthdIgDgCQgJgKADgMQACgMANgKIAGgDIAaADIA3AVIgCAQQgEAjgSAfQhTCVg2BbQAKB1ADBuIAEAFQAMANgBAPQgBAOgMALIgGAEg");
	this.shape.setTransform(11.5,21.5,0.208,0.208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB4F4F").s().p("AjUEmIgGgBIgagZIAWgdIAKAAIAGgBQBQjuBVjkQgFgZAHgaIADgKIAYgKIAHADQAIACAIAAIAEAAIAcAOIASAiIAAACQAcB6AmByIA5CiIAKAAIABATQABAXAHAbIAgAGIAEAIQAIANgDAMQgDANgLAIIgEACIgFABQg6AHg8gEIgFAAIgVgLIgIgcIAbgVIAHABIggheQhTADhSgQQgUAwgSA/IAdACIAqAdIghAgIgHABQgSACgYAAQgmAAgfgGgAhLBAQAVADAWAAIABAAQAjADAsgDQgchVghhwg");
	this.shape_1.setTransform(2.7,21.8,0.208,0.208);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB4F4F").s().p("AiTFLIgDgEIgMgrIAAgCQgCjUgPjjQgNhPAUhNIAJghIAbAaIAHADQAgAAAvADIADABQAzAQAwAgIACABQBMBHApBgIACADQAMA5AAA7IAAADQgUCQhuBeQgwAkgzASIgDABIggABIgDAGIgBACQgQAUgSAAQgRAAgNgQgAhLAjQAKBsAABtQANgCARgIQAygbAogsQAhgsAWg2QAOg0gDg2QgShRg3hAQgngngvgYQgSgGgYgDg");
	this.shape_2.setTransform(-5.9,21.6,0.208,0.208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB4F4F").s().p("AAVE/QhAgJg7geQhEgig0gvIgEgEIgIgXIAEgIIABgFIgFgFIAFgCIAAgDIgBgMIAKgHQAfgUAmAJIAHACIAVAbIAAAHQgCAVADAOQA1AjA+AVQAwARAwgYQARgNAJgYQABgdgEgjQgUgegbgZQhUgnhegyIgCgBIg5grQgzguARhFQANgzAkgqIABgBQA2g2BMgJIACAAQBJgBBFAVIASgOIAGgBQAYgEAbAKIAFADIAVAdIAAA4IgiAbIgMgIQg6gkhCgNQg2gJgsAYQgnAnAFA3QACAdAVAWIAyAsQBAA1BRAmIADADIA0ApQAiAjAKAwIAAACQAHA3gkAoIgBACQgrAlg1ARIgDABIgXABQgigBgbgEg");
	this.shape_3.setTransform(32.6,0,0.208,0.208);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB4F4F").s().p("AgwB5QgFgGAFgJQAEgGAMgNQATgTAAgGIAAAAQgOgCgSgHQgTgIgIgJIgCgCQgYgkAIgvQAJgnAfgaIAEgDIAcgKIAsAHQAaAKAVAVIACACQAXAhgHAmIgBACQgQA2gmAsIgkAiQgMAJgOABQgNAAgJgHg");
	this.shape_4.setTransform(24.7,-4.4,0.208,0.208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB4F4F").s().p("ABWEyQgggkgQgsQgrhagbhfIgsAEIgCC0QALADAKAGIAIAFIABAJQADATgKANIgGAIIgJAAQg1AEg0gJIgGgBIgFgFQgKgKACgMQABgOAOgJIAGgEIAHABQgEhugNhpIAAgCIAAgCQAMh8gEiEIgagBIgGgHQgHgLACgKQACgMANgKIAFgDIAFAAQAPgCAPgIIAEgCIAFAAQBNgCBHAHIABAAQBaAVBIA2IAEADQAiAoAMA0IAAADIAAAEQgFAogXAhIgCADIgmAhQgoAYgvARQAmBmAhBrIABADQADAeAAAdIAAARIgoAGgAhNilIAAACQgDBHAIBKQBngFBYg8QAfgXgCgnQgNgXgSgSQgqgegvgRQgygLgygEIgPAAg");
	this.shape_5.setTransform(16.8,0.1,0.208,0.208);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB4F4F").s().p("AiMEpIgIAIIgbAAIgbgbIAAgJQgDjIgGj3IAEhWQAFgUAOgPIAJgIIAhALIAWAbIDBAGQAXACATgCQgDgRAMgOIAFgHIAbgDIAeAMIAcAbIABAHQAFAggZAQIgDACIgDAAQhMAThPgHQhFgCg7gFIABCmIDJADQAGgUAMgOIAGgIIAgAAIAuAxIABAFQAGAZgQARIgFAFIgHABQhSAMhRgFQg/gHg6AAQgDA5gIBlIgBAEQgHAagBAWIDuADQAEgSAKgPIAGgJIAgAAIAgAxQALAbgRAYIgGAHIgJABQg4ADg3AAQhtAAhmgLg");
	this.shape_6.setTransform(7.2,0,0.208,0.208);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BB4F4F").s().p("AiXExIgEgBIgOAHIgKgMQgaghAEgtQgPj/AGkBIABgKIAYgPIAVAEIAbANQAXATAKAcIACAEIAAAEQgFBXAIBRIA/AFQBDAGBFgEQABhcALhcIABgGIABgCQgEgLACgMIABgKIAbgOIApAcIADAFQAnBGgOBbQgJBYAABjIAAACQgMBigXBhIgCAGIgYAWQgMAHgLgDQgMgDgHgLIgCgDIgLgsIAAgDQAJh2AEh4Ih+gFIhGgGIgDEFIgDAEQgMAWgFASIgIAXg");
	this.shape_7.setTransform(-2.5,0.1,0.208,0.208);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BB4F4F").s().p("AgvEpQgRgnABgvQgNjZgFjIQg/gJg+gTIgBAAQgPgGgCgMQgEgNAKgMIAHgJIAMABQBkAOBqAJQA/AGA+gGQABgKADgOIACgGIAagSIAWAFIAEAFQARASAPAVIADAFIABAEQADAZgPARIgDADIgEACQgpASgrgEIhdgBQAIAYABAXIAAADQgMBzADBvIgFBkIgBACQgLAhgCAgIAAAGIgDAEQgIANAAAPIgBAPIgnAIg");
	this.shape_8.setTransform(-12.1,0,0.208,0.208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BB4F4F").s().p("AgIEuQhRgBg7g4IgBgBQglgngPg0QgShOAHhPQAGhHAXhCQAYg5AogwIACgCIAogiIACgBQAigNAhgFIAEgBQArADAoASIAEADIACACQAyA2AfA7IABACQAeBFAQBHIAAADQAEBIgHBEIgBADQgaBUhBA2QgyAog9AAgAgGjcIgsAdQgZAVgKAbQgZBAgFA9QgFA9AHA6QAKAtAeAmQAaAXAjALQAaAGAcADQAZgJAVgSQAegfAWgmQAVhPgNhUQgUhFgkhCIgvg2IgRgHQgQABgSAHg");
	this.shape_9.setTransform(-20.5,-0.2,0.208,0.208);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BB4F4F").s().p("ACQFCIgHgCIgFgFQgKgNACgNQADgOAOgIIAHgEIAKACQgcjRgYjfQglBNghBBIgQAlIgEAEQgXATgZgDIgHgBIgFgEQgfgegPgtIgqhjIhGGEIAGABIAFAFQAKANAAANQgBAJgEAHIgDAFIgSALIg6gFIgCAAQgRgGgEgOQgDgOAKgNIAFgGIAIgCIAHgBQAskMAnkPIABgGIAagaIAaAKIAWAeQA7B2AoBUIBfjDQgFgPAKgRIAEgIIAcgGIANANIA2AfIABADQAWAcACAiQAQC/AXDQIADBTIANAFIAPAXIgPAhIguACQgtAAgogGg");
	this.shape_10.setTransform(-31.5,0.2,0.208,0.208);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BB4F4F").s().p("AgHE/IgVgQIAAgmIARgEIAAAAIgNjcQhXh0hIiDQgYgaAFghIACgRIBQAAIAGALQAHAQgGAOIAXAdQAwBMAsA7QAhguAfg0IAthcIgDgEQgIgJACgMQACgNANgJIAGgEIAbAEIA2AWIgCAOQgEAlgSAeQhFB9hEBzQAKB3ADBsIAEAFQAMANgBAPQgBAOgMAKIgFAGg");
	this.shape_11.setTransform(16,-21.9,0.208,0.208);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BB4F4F").s().p("AhHFUIgygEIgDgBQgOgHgDgNQgCgNAJgLIAFgGIAGgBQggj0gVjmIgJh2IgBgJIAXgXIAMAFQAWAIAUADIALACIAIAQQBDAFBHAPIACABQAzAUApAgIACABQApAqABA1IABACQgGBLgyA2QgrAsg2AWIgCABQgqANgoAHQABBfARBaQAKgCANAAIANAAIALAiIgQAYIgFADQggAQggAAgAg+iIIALCVQBFgHA5gwQAngkAKg2QgCgagPgUQgigcgngPQg1gOg6gFg");
	this.shape_12.setTransform(7.8,-21.7,0.208,0.208);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BB4F4F").s().p("AhHFUIgygEIgCgBQgOgHgDgNQgDgNAJgLIAFgGIAGgBQgfjtgWjtQgGhBgDg1IAAgJIAWgXIAMAFQAWAIAUADIALACIAIAQQBDAFBHAPIACABQAzAUApAgIACABQApApABA2IAAACQgFBLgyA2QgrAsg2AWIgCABQgqANgoAHQABBfARBaQAKgCANAAIANAAIALAiIgQAYIgEADQghAQgfAAgAg+iIIALCVQBFgHA6gwQAmgkAKg2QgBgagQgUQgigcgngPQg2gOg5gFg");
	this.shape_13.setTransform(-0.8,-21.7,0.208,0.208);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BB4F4F").s().p("AjUEmIgGgBIgagZIAWgdIAKAAIAGgBQBOjqBXjoQgFgZAHgaIADgKIAYgKIAHADQAIACAIAAIAEAAIAcAOIASAiIAAACQAcB7AmBxIA5CiIAKAAIABATQABAWAHAcIAgAGIAEAIQAIANgDAMQgDAMgLAIIgEADIgFABQg+AHg4gEIgFAAIgVgLIgIgcIAbgVIAHABIggheQhTADhSgRQgUA0gSA8IAdACIAqAdIghAgIgHABQgSACgYAAQghAAgkgGgAhLBAQAVADAWAAQAlADArgDQgchVghhwg");
	this.shape_14.setTransform(-9.9,-21.5,0.208,0.208);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BB4F4F").s().p("AiXExIgDgBIgPAHIgKgNQgagfAEguQgQkAAIkAIAAgLIAZgOIAUAEIAbANQAXAUALAbIABAEIAAAEQgEBWAHBRIBAAGQBCAGBFgFQABhbALhbIABgHIACgCQgFgLACgMIABgLIAbgNIAqAdIACADQAoBIgPBaQgJBgAABbIAAACQgLBhgYBiIgBAGIgZAVQgMAIgLgDQgMgDgHgLIgBgDIgMgsIAAgEQAJhqAEiDIjEgLIgDEFIgCAEQgMAWgGASIgIAXg");
	this.shape_15.setTransform(-18.7,-21.6,0.208,0.208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.字, new cjs.Rectangle(-37.5,-28.8,75,57.7), null);


(lib.watch_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wtach();
	this.instance.parent = this;
	this.instance.setTransform(-9.5,-10.6,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.watch_1, new cjs.Rectangle(-9.5,-10.6,19,21.2), null);


(lib.v7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v7();
	this.instance.parent = this;
	this.instance.setTransform(-16,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v7_1, new cjs.Rectangle(-16,-18,32,36), null);


(lib.v06_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v06();
	this.instance.parent = this;
	this.instance.setTransform(-6.6,-10.2,0.445,0.445);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v06_1, new cjs.Rectangle(-6.6,-10.2,13.4,20.5), null);


(lib.v05_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v05();
	this.instance.parent = this;
	this.instance.setTransform(-17,-15.3,0.486,0.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v05_1, new cjs.Rectangle(-17,-15.3,34,30.6), null);


(lib.v04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v04();
	this.instance.parent = this;
	this.instance.setTransform(-9.3,-12.4,0.479,0.479);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v04_1, new cjs.Rectangle(-9.3,-12.4,18.7,24.9), null);


(lib.v03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v03();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,-10.2,0.489,0.489);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v03_1, new cjs.Rectangle(-17.1,-10.2,34.2,20.5), null);


(lib.v2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v2();
	this.instance.parent = this;
	this.instance.setTransform(-7.8,-18.5,0.487,0.487);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v2_1, new cjs.Rectangle(-7.8,-18.5,15.6,37), null);


(lib.v1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v1();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-17.7,0.478,0.478);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v1_1, new cjs.Rectangle(-16.5,-17.7,33,35.4), null);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008485").s().p("AgNAhQgagXgHgpIgBgoIAjA1QAlA8AXAeQgSgCgrglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-7.2,9.5,14.4);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008485").s().p("AgNAhQgagXgHgpIgBgoIAjA1QAlA8AXAeQgSgCgrglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-7.2,9.5,14.4);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008485").s().p("AhFA2QAIgWANgUQArg/BRgUIiXCPIAGgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.1,15.1,14.4);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008485").s().p("AhFA2QAIgWANgUQArg/BRgUIiXCPIAGgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.1,15.1,14.4);


(lib.腳 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383231").s().p("AgSBpQg+gUg0huIgKgWQAtAKAxgGQBGgKBxg2QAKAqgDAsQgDAygUAfQgPAYgaAJQgpAPgdAAQgOAAgMgDg");
	this.shape.setTransform(-23.1,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AhMD3QgRgpgTg6QhDjXgWi9QDKApC0AMIAFClQAHC+AIAfIAAAEQgcAPglAQQhLAhgqAFIgTABQggAAgsgKg");
	this.shape_1.setTransform(-29.7,-7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383231").s().p("AhSBdQgZgKgOgZQgTgggCgxQgBgtALgpQByA6BDALQAtAIAxgIIgJATIgBACQg4Btg/ARQgLADgLAAQgfAAgrgRg");
	this.shape_2.setTransform(21.5,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231815").s().p("AgbD8QgrgGhIgjIhCgiIABgDQAOgzASlPQCzgGDNgiQgaC6hNDWQgUA4gSAqQgqAHgcAAQgOAAgLgBg");
	this.shape_3.setTransform(29.1,-6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.腳, new cjs.Rectangle(-49.9,-33.3,99.9,66.7), null);


(lib.swheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.swheel();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,-6.5,0.371,0.371);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.swheel_1, new cjs.Rectangle(-6.5,-6.5,13,13), null);


(lib.spoon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spoon();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-40.3,0.43,0.429);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spoon_1, new cjs.Rectangle(-27.5,-40.3,55,80.8), null);


(lib.po_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.po();
	this.instance.parent = this;
	this.instance.setTransform(-41,-30.6,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.po_1, new cjs.Rectangle(-41,-30.6,82,61.3), null);


(lib.nb1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nb1();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-13.8,0.514,0.514);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nb1_1, new cjs.Rectangle(-46.5,-13.8,93,27.8), null);


(lib.nb_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nb();
	this.instance.parent = this;
	this.instance.setTransform(-42,-21.2,0.438,0.438);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nb_1, new cjs.Rectangle(-42,-21.2,84.2,42.5), null);


(lib.milk_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.milk();
	this.instance.parent = this;
	this.instance.setTransform(-29,-30.5,0.379,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-30.5,58,61.1);


(lib.葉子 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008485").s().p("AgCAMIgJgFQgGgEgCgDIgBgDQAAgFAFAAIAIAEQgFgGgBgEQAAgDACgCQABgDADAAQADAAAEAEIAEAIIgBgJQABgEAFgBQAEAAACAEQABADABAEIABASQgBAHAEAMIAAABIgCAAQgOgHgHgGg");
	this.shape.setTransform(-10.5,-6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008485").s().p("AgiAdQAFgRAJgVQAGgPAIgGIAEgBIACAEQABANgEALQARgOAOAFIADABQACADgEAEQgJAJgLAHQAQgDAHACQAFADAAAEIgBACQgEAFgMACQgaAFgeAAg");
	this.shape_1.setTransform(9.3,-6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008485").s().p("AgNAtQgLgUgLgbQgHgTACgMQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgBAEADQAMAKAGAOQAEgdAPgHIAEgBQAEABAAAHQAAARgDAPQALgQAJgEQAHgDADAEQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQABAIgIAMQgTAZgbAcg");
	this.shape_2.setTransform(-0.1,-15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.葉子, new cjs.Rectangle(-12.6,-20.5,25.6,17.7), null);


(lib.h11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.h11();
	this.instance.parent = this;
	this.instance.setTransform(-43.6,-64.9,0.567,0.567);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.h11_1, new cjs.Rectangle(-43.6,-64.9,87.4,129.9), null);


(lib.h4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.h4();
	this.instance.parent = this;
	this.instance.setTransform(-45.6,-27.4,0.512,0.512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.h4_1, new cjs.Rectangle(-45.6,-27.4,91.2,54.8), null);


(lib.h3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.h3();
	this.instance.parent = this;
	this.instance.setTransform(-57.3,-18.4,0.492,0.492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.h3_1, new cjs.Rectangle(-57.3,-18.4,114.7,36.9), null);


(lib.h2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.h2();
	this.instance.parent = this;
	this.instance.setTransform(-51.5,-26.1,0.484,0.484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.h2_1, new cjs.Rectangle(-51.5,-26.1,103,52.3), null);


(lib.框 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al6OHQjXhyiOjIIl/AQIDglyQgbhzAAh4QAAjPBPi+QBOi3COiNQCNiNC3hOQC+hQDOAAQDQAAC+BQQC3BOCNCNQCOCNBOC3QBPC+AADPQAADQhPC9QhOC4iOCNQiNCNi3BOQi+BQjQAAQj8AAjgh2g");
	this.shape.setTransform(-4.1,1.6,0.446,0.446,-22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.框, new cjs.Rectangle(-45.5,-45.5,91,91), null);


(lib.fl2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fl2();
	this.instance.parent = this;
	this.instance.setTransform(-16.7,-13.2,0.588,0.588);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fl2_1, new cjs.Rectangle(-16.7,-13.2,33.5,26.5), null);


(lib.f3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.f3();
	this.instance.parent = this;
	this.instance.setTransform(-10.1,-9.5,0.613,0.613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.f3_1, new cjs.Rectangle(-10.1,-9.5,20.2,19), null);


(lib.f01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.f01();
	this.instance.parent = this;
	this.instance.setTransform(-4.5,-4.5,0.529,0.529);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.f01_1, new cjs.Rectangle(-4.5,-4.5,9,9), null);


(lib.egg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.egg();
	this.instance.parent = this;
	this.instance.setTransform(-10,-10,0.465,0.465);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.egg_1, new cjs.Rectangle(-10,-10,20,20), null);


(lib.cook_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cook();
	this.instance.parent = this;
	this.instance.setTransform(-82,-66,0.426,0.426);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cook_1, new cjs.Rectangle(-82,-66,164,132.1), null);


(lib.cleanh_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cleanh();
	this.instance.parent = this;
	this.instance.setTransform(-83.5,-74.1,0.417,0.416);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cleanh_1, new cjs.Rectangle(-83.5,-74.1,167,148.3), null);


(lib.cleanb_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cleanb();
	this.instance.parent = this;
	this.instance.setTransform(-44.5,-51.8,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cleanb_1, new cjs.Rectangle(-44.5,-51.8,89,103.6), null);


(lib.c手 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AiJD8QgRgUgEgHQgIgOgLgPQgagkgaheQA+hPCBh+QBDhDAzgtQgRBKA8BLQAfAmAhAXQgHAdABAkQADBLAuAmIi6A6QiyA5gDAAIAAAAg");
	this.shape.setTransform(3.9,-5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383231").s().p("AgUCPQgrgZgUheIgBgNIAAgDIABgQIAJgeIACgFQACgHAEgHIAKgUIApg+IAJgMQAXBYAdApQALAPAHANQAEAJASATQgrAzAJAVQAKAOgPAPIgSANQgKAEgKAAQgOAAgPgJg");
	this.shape_1.setTransform(-18.2,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.c手, new cjs.Rectangle(-26.8,-31,53.7,62), null);


(lib.b身體1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E20011","#E00011","#DE0011","#DE0011"],[0,0.561,0.659,1],0,0,0,0,0,47.8).s().p("AgLG7QgfgEgVgUQgkAMgmgJQgogIgcgbIgJgKQgVAEgWgIQgWgHgPgSQgNgOgEgQIhagqQggABgZgTQgagUAAggQgGgUAXgfQAWgcATgGQgWgIgPgRQgWgYABgdQACgdAXgQQAHgGAMgEQgegpAFgxQAEgmAYgeQAXgdAjgOQAGgrAigdQAigcAsAAQAJgZAbgOQASgJAXABQAAgVARgQQARgQAagEQAWgDAVAIQANgRAWgJQAXgIAZAEQArAGATAeQAWgLAbADQAnAEAQAdQAhgMAjAHQAjAGAaAZQATASAJAYQAHAYgEAYIADADQAgAFATAbQANASgBAUQAAAUgMAOQAYAKAQAWQAMASACAWIABANQACAXgKAVQAYANAQAWQAPAXACAbQACAfgQAcQgQAbgdAQQANAXgEAYQgFAZgUAOQgIAGgMADQACAVg/AxQhCAzgggOQgJAPgPAOQgcAYgmAHQglAGgkgMQgMAQgWAIQgRAGgRAAIgMgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.b身體1, new cjs.Rectangle(-48.6,-44.4,97.3,88.9), null);


(lib.b左腳 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373231").s().p("AgWAgQgWgOgJguIAAgBIgBgGIAAgCQASAJARACQAZADAxgJQAAAQgGAQQgFASgLAKQgJAIgKABIgLABQgQAAgJgGg");
	this.shape.setTransform(-1.2,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221714").s().p("AggBqQgMgBgXgLQgCgNgCgcQgEhUAKhMQBEAjBGAXIgOA9QgQBJgBAMIAAABQgkAJgYAAIgOgBg");
	this.shape_1.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b左腳, new cjs.Rectangle(-7.2,-13.8,14.6,27.7), null);


(lib.b左手1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383231").s().p("AAAAlIgEgBIgBgBIgFgCIgGgCIgBgBIgLgIIgSgRIgBgBIgEgEQAggCAOgIQAUgLAXgPIANAnIAAACQACAKgFAHQgKAOghABg");
	this.shape.setTransform(4.7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("Ag7AAIggg6QAZALAbgRQAPgIAJgLIAVAGQAaADAPgOIAtCMQgdATgOAIQgOAGggAEQgYgcgmg9g");
	this.shape_1.setTransform(-0.6,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b左手1, new cjs.Rectangle(-9.8,-10.7,19.8,21.4), null);


(lib.b左手 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373231").s().p("AgQAtIgPgaIgHgPIgBgBIgDgMIAAgBIgBgFIAAgBIABgEQAHgeARgBQAJgBAJAHIADACIApAjQgVAMgPAMQgLAKgIAbg");
	this.shape.setTransform(-6.1,-8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221714").s().p("Ahag2IAEAFQAIgcALgJQAFgEAfgUIB6BuQgyA4gHA3QhVhogng9g");
	this.shape_1.setTransform(1.4,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b左手, new cjs.Rectangle(-10.4,-13.2,21,26.5), null);


(lib.b左耳 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AhGAnQgMgPAGgVQAHgVAYgNQAagOAqgFQAvgGAIANQADAHgDACIgPAHQgeANgYAlQgPAYgZAFIgKABQgSAAgLgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.b左耳, new cjs.Rectangle(-7.9,-5.3,15.9,10.6), null);


(lib.b右腳 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373231").s().p("AgDA6IgDgCIgpgbQAagWARgSQAMgPAOgiIADAFIABACIAGALIALAXIACAHIABABIABAGIAAABIABAFIAAAIIgBAFQgMAlgSAIQgFACgEAAQgGAAgFgDg");
	this.shape.setTransform(6.1,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221714").s().p("AiLgzQgCg+BPgBQAUAAAkADQAaACABgIIAtAzQA0A/AWAkIgDgFQgOAlgMANQgLAMggAcg");
	this.shape_1.setTransform(-5.4,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b右腳, new cjs.Rectangle(-19.4,-13.4,30.4,26.8), null);


(lib.b右手1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383231").s().p("AgwATQgFgJADgJIABgBIASgmQAZAVAOAKQAOAIAeAHIgEADIgBABIgZASIgCABIgGAEIgFABIgBAAQgCACgDAAIgBAAIgJABQghgFgIgPg");
	this.shape.setTransform(-5.4,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("Ag3BLQgNgJgbgWIgBADQASglArhjQANAPAYAAQANAAAKgEIAVAWQAaATAZgHQhABhgsAlQgggHgMgIg");
	this.shape_1.setTransform(0.9,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b右手1, new cjs.Rectangle(-10.6,-10.5,21.3,21.2), null);


(lib.b右耳 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AAiAzQgZgEgPgXQgZgkgggNIgOgGQgEgDAEgGQAHgOAvAFQAqAEAaANQAZAMAIAVQAHAVgNAPQgLAPgTAAIgIgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.b右耳, new cjs.Rectangle(-8,-5.1,16.1,10.4), null);


(lib.bwheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bwheel();
	this.instance.parent = this;
	this.instance.setTransform(-19,-19.1,0.376,0.376);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bwheel_1, new cjs.Rectangle(-19,-19.1,38,38.3), null);


(lib.bh1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAdQgRgJABgUQABgLAJgJQAIgIAMgCQALgDALAFQAKgBACgDQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIADABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgDAEgKAAQAFAEADAGQAIAMgEAMQgDAKgKAIIgJAGIgGACIgGAAQgJAAgKgGg");
	this.shape.setTransform(13.6,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAiIgGgCQgEgBgFgEQgKgIgEgKQgEgLAHgNQAEgGAEgEQgIABgFgEIAAgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACAEAJAAQALgGALADQAMACAJAIQAJAJABALQACATgRAKQgKAHgKAAIgFgBg");
	this.shape_1.setTransform(-11.2,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAYIgDgYQgJgCgGgGQgGgHABgHIABgGQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADACQABAHAHAEQAHAFAJAAQAJABAHgEQAIgEACgGIACgCQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAAGQAAAIgGAGQgGAFgKABIgFAYQAAAGgGAAQgGgBABgGg");
	this.shape_2.setTransform(1.2,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#E20011","#E00011","#DE0011","#DE0011"],[0,0.561,0.659,1],0.3,2.6,0,0.3,2.6,19.8).s().p("ABKBzQgVALgXgDQgcgDgRgYQgYAcgYgGQgWgKgFgBQgfAfgrgGQgkgFgXgfQgWgfAFgmQAEgeAWgWQAVgVAegEQAGgZATgQQAUgQAZAAQAYAAAUAOQAKgSASgLQASgLAUAAQAZgBAVAQQAUAOAJAZQATgJAVAAQAtgBAgAgQAgAgABAuQABAjgUAdQgSAdgfAMQgNAGgNABIgDABIgJAAQgjAAgbgTg");
	this.shape_3.setTransform(1,-11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231815").s().p("AgEDHQg8gHgwguQgzgygghdQgahIAxhBQAtg9A/gBIB8gCQA/gBAwA7QAyBAgXBKQgfBhgwA0QgwAzg7ABg");
	this.shape_4.setTransform(0.8,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231815").s().p("AhCBVQgMgOgNgaQgPgfABgRQACgmAagXQAagXAqAAIAWABQAmAFAdAjQAcAkgCAoIgBAIQgBAGgGACQgHABgDgGQgKgPgQgKQgQgJgTgBQgegCgXATQgXATgBAbIAAAJQAAAIgGACIgDAAIgBAAQgEAAgCgDg");
	this.shape_5.setTransform(24.4,-7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231815").s().p("AA7BXQgGgCAAgHIAAgKQgCgbgYgSQgXgSgeADQgTABgQAKQgQAKgJAQQgDAFgHgBQgGgBgBgGIgBgIQgEgpAcgkQAbgkAmgGIAWgCQAqAAAbAWQAaAWAEAlQABARgOAgQgMAagLAPQgEAEgEAAg");
	this.shape_6.setTransform(-24.4,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bh1, new cjs.Rectangle(-34.9,-24.4,69.9,48.9), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,1920,1080), null);


(lib.beye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AgKAWQgIgEgEgNQgEgMAIgJQAFgEAFgCQAMgFAJAGQAJAGACAMQADAKgLAJQgJAJgHAAQgGAAgEgDg");
	this.shape.setTransform(12.5,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AgGAXQgGgBgGgLQgIgLAFgJQAGgLAJgDQAJgDAMAIQAEADADAFQAFAKgHALQgHALgIACIgDABIgIgCg");
	this.shape_1.setTransform(-12.6,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beye, new cjs.Rectangle(-14.9,-2.7,29.9,5.4), null);


(lib.bag_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag();
	this.instance.parent = this;
	this.instance.setTransform(-48.6,-44.3,0.484,0.484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bag_1, new cjs.Rectangle(-48.6,-44.3,97.3,88.6), null);


(lib.b1左腳 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383231").s().p("AACAuQgYgEgcgnIAAgBIgEgEIgBgCQAUABARgGQAYgHApgdQAHAPABARQADATgGANQgEAKgJAGQgUALgOAAIgDAAg");
	this.shape.setTransform(4.1,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AgKBfQgIgNgMgWQgohNgVhIQBUACBBgHIANA/QAQBIAEALIABACQgoAfgaAHQgKADgRAAIgJAAg");
	this.shape_1.setTransform(-0.4,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b1左腳, new cjs.Rectangle(-9.6,-12,19.3,24.1), null);


(lib.b1右腳 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383231").s().p("AggAkQgKgEgFgJQgIgNAAgTQAAgRAFgQQAuAYAXAEQASADATgDIgBACIgDAHQgXApgYAGIgIABQgMAAgRgHg");
	this.shape.setTransform(-2.9,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AgMBhQgQgCgdgOIgZgOIABgBQAFgUAJiCQBEgBBSgMQgMBIgfBTQgJAZgHANQgQACgJAAIgLgBg");
	this.shape_1.setTransform(0.3,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b1右腳, new cjs.Rectangle(-8.4,-12.5,17,25.2), null);


(lib.眼 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AgZA6QgSgHgHgKQgMgRAEgiQAEgiAcgLQAPgGAMABQAjAEAPAXQAOAUgHAfQgFAagjALQgRAGgLAAQgJAAgGgDg");
	this.shape.setTransform(32.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AgaAzQghgRgBgbQgBgfARgSQATgUAiACIAbAJQAaAQgCAiQgBAigQAPQgIAIgTAFIgHABQgNAAgWgLg");
	this.shape_1.setTransform(-32.7,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.眼, new cjs.Rectangle(-38.8,-8.9,77.7,18), null);


(lib.感 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNGFQgzACgnghQgWgagGgjQgHhIgBhEIAEgHQAcAFAcAQIAWATIAIATQgCA4AHAwQAZAXAhADQBnAJBqgLIAEgRIgGgxIALgHIAKAGQAJAUACAaQgCAegOAVQhTAbhaAAQgmAAgngFgAkRFdQgFhTALhVIAGAFIACgHQgNAAgIgHQgFgEAHgGIAMgDQAbABAXASQAQAcAAAdQgOBAghA3IgOAHgAEeE3QgPhAgSg9IAFgHQAoAEAhAcQAOAVAAAWQgEAagPARIgXASQgEACgEAAQgFAAgEgGgABHEOIgSAAQgRg5gOg6IAFgKQAXAMAZADIAbAVQASAagDAeQgEAYgQARIgPACgAk/BEIAIhHQgMicAciQIAMgCQATAQAYAHIAJAPIBaALQBUAKBbgDQgPg1ADg5IAMgKQAhAKAiATIANBZIAGAFIBFgDIADgEIA2gmIAWAAQAVARAaAMQADAPgJAFQgtADgsAKIhnAHQAKBWAeBSQALgSAKgVIATg9QAIgJAMACIAbAYQAhAegPApQgdAygkA1QAXAnAbAgIANAHIAChRIAFgLIAMgBQAMA0gFA7IgHANQgTAIgQgOIgbgZIgwg0QgjAfgqASQgXAFgQgKIAAgLIAQgIQAhglAcgwIgmhMQgghLgWhLQiGgEiBgVQgBBEABBHIgIBAQgRBkg0BTIgVAOIgLAKIgKAFQAHgwASgzgADSiCIAFgDIAAgHIgFAAgAiWAuQgSAJgQgCQgShEgBhJIAGgJQAWgCAXAHIAQAQQA3AOA7gLIAVgUQASgCAcADQAOA6gGA9IgIAMQgOAAgHAJQgWADgWAFQgUACgTAAQgwAAgrgMgAiDgoIgIBFIAYAHQA0AFA5gLIADhSIgFgFIgMAFIhhgFIgOAAgAhph7Qg2gEgugWIgLgKQBNAOBNAFIAtgaIAJAAIAbAOQAHAKgFAKQgrALgtAAQgTAAgTgCgAgXiOIAFAEIAFgGIgEgBgADAkvIgbgyIAAgQIgJgFQgKgLANgIIAZADIAuATIAOAQQAEAUgLASIgUARQgGADgFAAQgHAAgHgGgADMlgIAEgDIgLgFIgIAAQAFAIAKAAg");
	this.shape.setTransform(0,0,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.感, new cjs.Rectangle(-28.8,-32.9,57.6,65.9), null);


(lib.謝 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADwFWQgggagGgnQANAKAUAAQgIhrAEhxIgKhNQhEAChCgMIgFAEQACCCAHCMQgCAogQAhQgXAVgXgPIgdgdQgKgOAHgPIAeATIAHAAQAKhAgBhEQgWAXgTAcIgvAmQgZAUgegCQgJgKAKgOIAJgFQApgpAjg1Ih3gGQgfAAgcgNIgCgGIA+gEQgIhxgQhvQgJgqAXggIAVAEIAJgTQANg+AXhPIAKgJIAOAAIATAMQAaAWAEAhQgJA/gtApIgxAfIAEALIAoABQAsABApgLIgKgJQACgPAOgNQAQgEAPAIQATAhADAnIAEBEICEAAQgEhDgHhGIAAhWIAEgCIADAGQAMgBALAEQATAeAMAfQARBKAEBNQARAFARgIQAAgPALgMIAKgCIAaAGIAMALQACAQgEAMIgKAGQgzAEgbAEQAAB/gFCIQgHA0gJApIgHAEgAABCXIAFgFIgFgBgAhcBhQgIAJADALQBHAHBDgQIAAgpIgGgLQg0ALg2gJIgTAAgAhcAgIAEAHQA/AHA8gLIACgEIgFg5IhwAAIgKgCgAgOhyIhTAEQAAAhAHAiQA2AHA4gHIAKgHIgHhHIgCgCgAFagtIANAAIgHgHIgGAAgAh4g3IAEAAIAAgVIgCgCgAh4hOIAAggIgDgCQgHATAKAPgAAuhtIADAAIAAgSIgCgBgAh/iEIACgDIgCgBgAAiibQgIAOASAIIACgDIgEgVIgBgCgAiViVIAKgRIgHgCQgKAKAHAJgAgqjxIAEAEIACgGIgCgBgAghj2IACgIIgEgCQgFAHAHADgAgfkGIADAAIAAgLIgDAAgAg4kRIAGAAIAAgwIgEgBgAhMlLIAFAEIACgGIgCgBgAj2FNQgjhkAChwIAAi5QgzAEgwgOQgFgDAHgGIBvgHIAYgMQALAAAMADQAOASADAXQgDA2gHA3QgFBwAPBsIARgPIAQgVIAMgDQgFA9gtAnIgMAJgAkHgqIADAAIACgXIgFgCgACUDDQgTgkgFgrQABgagFgXIAHgGQALAHAMAEQAZAcAQAkQAHAcgFAYQgQAMgTAAgACIBZIACgDIgCgCgAkVifQgjgwgdg6IAAgIIAMAIQAAgLAKgKIgfgJIgCgEIAMgGQAdADAZAKIAoAWQAbAVAJAgQgBATgHASQgVAKgVAAIgFALgAj7jJIABgEIgBgBgAkJjVIAFgEIgVgUQgBASARAGg");
	this.shape.setTransform(0,0,0.869,0.869);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.謝, new cjs.Rectangle(-33.1,-30.2,66.2,60.4), null);


(lib.逗點 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7BgIARgNQAUgVAPgkQgYgHgHgFQgVgOAEgnQADgfAdgVQAQAAARgGQAPADANAFQAfAkgNAsIgeAyQgRAagUATQgIAHgPADIgNACQgHAAgFgCg");
	this.shape.setTransform(0,0,0.912,0.916);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.逗點, new cjs.Rectangle(-5.4,-8.9,11,17.9), null);


(lib.小標 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABCBTIgCgPQgoAChZAOQgIACgDgDQgDgBACgFIAUg0QABgDAFABQAFAEgBADIgPAoQgCAFAEgCIA0gIQgBgIAFhEIgcAEIgGACIgEAEQgGABgBgGIAAgHIgJgsQAAgFAFgCQAFAAACADIAHAtIAjgGIABg6QAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQABgEAEAAQAGABAAAGIgCA5IAkgGIABAAQAEgQACgUQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQAEAAACAEIgLAwQAAAGgFAAQgEABgCgFIABgDIgFABIgdAEIgCBIIAAAFIA1gHIAGAAQgDgUgFgOQgDgGAAgBQABgDADgBQAEgBACADQADACAEAQIALAzQgBAEgFABQgGAAgBgFg");
	this.shape.setTransform(232,0,0.974,0.974);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAuBXQgGgIgGgCIgfgWQgJgHAAgCQgCgGAJgFQAZgQASgOIADgDIABglIgrAJQgRAEgOAFIgEAAQgEgCAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQABgDAigIQAYgGAXgEIACgkQACgHAGgBQAFACgCAGIgDAiIAdgEQAGABgBAGQgCAFgEAAQgLAAgSADQgCAoACA+QAAALACAGQABAGgEACIgDABQgFAAgDgEgAANApIgEAFIAdATQAIAFABAAQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBg4gAg/BUQgIgBAEgOIACgoQADgcAAgQQgBgFgBgBIgBgBIgSAZQgEADgCgCQgFgDADgEIATgZQASgcAIgbQABgEAEACQADAAABAFIgCAIQgGASgOAWQAHADAAARIgDA2QgCAOABABQAFAHgGAQQgCAEgDAAIgBAAg");
	this.shape_1.setTransform(210.6,0.6,0.974,0.974);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtBQQgOgKgOgYIgKARIgBAFIgBADQgFADgCgCQgFgBABgIIANgWIAEgIIABgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAGAAAAADQAGAPAJAKQABABAAABQABAAAAABQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBggABgmIgYAHIgLABQgFAAAAgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQABgCALgCIAcgGIACgbIgBgGQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAHgBADAFIgBAHIgCAXIAXgFQAEgCAFAAQAFABABADIgBAGIgEACIgiAGQgCAnACApQAAADADAHQAAAEgFACIgCAAIgCAAgABbBOQgEgBgOgOIgGgIIgEgEQgcAOgaAKQgEABgCgCQgDgCAAgDQAAgDACgEIAchbQAGgQACgMQgBgIACgBQAEgBACACQADABAAAGQAAAJgRAxIgSA8QAEABAZgLIATgLQADgDAEABQADACACAFIAHAJIARATQABADgBADIgDABIgDgBgAgHAhQgOgJgFgCIgFgCQgFgEAEgFQADgCADABQAJACARANQADAEgDAFIgDABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAhHg9QAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAHgBIAqgLQAFABABADQABAEgCACIgCABIgJACIghAIIgHABQgDgBgBgDg");
	this.shape_2.setTransform(189.7,0.1,0.974,0.974);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVBhIgCgDIgCgDIgKgLQgDgFADgDQABgDAEABQAHAEAKAOQACAEgFAEIgDACIgCgBgABVBfQgPgKgGgCIgEgCQgGgEAFgFQACgDAEACQAIACASANQAEAFgDAFIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBgAhcBRQgCgDADgCQACgCAFAAIAEACIALAIIAHAFQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgEACQgPgBgMgNgAAQBbIgCgCIgBgDIgHgIQgDgFACgCQADgDADABQAFACAIALQACAEgFAEIgDACIgCgBgAhNA2QgBgFAFgCQAJgGBAgHIAUgCIABgDQANgWAEgPIgaABIAAARIAAAIIAAAFQgBAGgEAAQgFAAgCgGIACgeIgBAAIgPACIAAAXIABAGQgCAFgEABQgFAAgCgGIABgcIgTADIAGAfQgBAFgFABQgGAAgBgGIgEgeQgRADgJAEQgFAAgBgEQgBgEAFgCQAFgDAVgEIgDgNQgDgGABgBQAAgCADgCQAFgBACADQACADADAOIABAEIAVgDQABgNgBgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQABgEAFAAQAFABABAGIAAAPIAQgCIAAgQQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQABgEAFAAQAGABAAAGIgBAQIAegBIAEgQQACgJgCgLQACgEAEABQADABABADQACAJgDARIgCAIIAWABQAGABABAEQABAHgIABQgGgCgTgBIgGALQgHATgGAKIAqAAQAGABABAFQAAAGgGABQgMgFg9ADQgwAGgYAJQgEAAgCgEgAhDgjQgFgDADgFIANgQQAMgQAHgTQABgDAFABQADABABAEIgCAFIgIAQIAMgBQAkgFAdgIQAEgBADAFQABAEgEADIgPADQggAHgcADIgJABIgDgBIgSAZIgEABIgCgBg");
	this.shape_3.setTransform(168.7,-0.1,0.974,0.974);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBYQgCgCAAgEQANgPAMgaIgGABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgGAAAAgFIAAg2IABgqQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAgEAGAAQAEACABADIALgDQAUgFARgBQAHgBADAEQACABgBAIQgCAPAAAcQAAAcACAaQgCAEgEAAQgEAAgCgFIgBgFIgGABIgXAEIAAACQgNAcgPATIgEABIgDgBgAALgxIAABEIAAAMIACAAIAsgIIABAAIAAAAIABhSIgDAAQgLAAgiAKgAgtBYIgGgFQgKgFgJgLIgBgBIgCACQgJAKgHADIgEABQgEgCADgEIAEgDQAJgIAIgOIABAAIACABQADAFAHAIIAIAHQAEABgBgEIgBgmIgYAHIgLABQgFgBAAgDQAAgBAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQABgCAKgBIAWgFIAGgCIAAgUIgUAFIgJABQgEAAAAgEIAAgDQABgBAJgCIALgDIgEgGQgEgIgCgOQAAgEADgBQACgCADACIACACQADASAGAGIABABIAAAEIADgBQAHgIAIgPIAEgGIADgEQAEgDAEACQAEAEgDAEIgGAGIgNAQIgCABIATgFQAFABACADQABAEgCACQgBABAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAIgVAEIABACIgCASIASgFQADgBAFAAQAFABABADQABAEgCACQAAABgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgcAFIgBAEQAAAWAEAcQAAADgGADgAAlBPIACghQAAgFAFgBQAEAAADAGIgCADIAAACIgBAVQgBAGAGgBQAJgCAUAAQAAAAABAAQABAAAAgBQAAAAAAgBQAAgBAAgBIgBgNQABgEAEACQADADAGAVQgBAFgEABIgYgBIgYADQgHgCAAgHgAgLA+IgNgHIgEgCQgFgEAEgFQACgCAEABQAHABALAJQAFAFgDAEIgEACQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAgAAQAFQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAIAEgBIAXgGIADAAQAEAAACAEQAAACgBACIgBABIgGABIgUAFIgEABQgFgBAAgEgAARgXQgBgDABgCIAbgHIADgBQAEABACADQAAADgBADIgBAAIgZAGIgFABQgEgBAAgDgAhVgsQAAgFAEgDIAjgIIgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgCgEIgKgLQgDgFADgDQACgDADACQAHADAJAPQADAEgFAEQALgCAMgEQAFAAADAEQABAGgEACIgJAAIg6AOIgBAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBgBAAAAg");
	this.shape_4.setTransform(147.7,-0.2,0.974,0.974);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAYBOIAAgBIABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAgBAAAAIACgPQglgCgeAAQgUABgMAEIgFAEIgEAAQgEgCAAgDQgBgCACgFIAEgJIAQgqQgNADgHAEQgGADgEgEQgCgDACgEQAFgGAdgGIAIgXQAJgdAEgXIACgCIACAAQAEABABADQACAFgTA9IgCAGQARgEAagDIAxgDQAFgZAJghIggAFQgRADgKAHIgCADQgEABgCgCQgDgFADgEQANgNA4gEQAGgCADADQADADgDAHQgGAVgIAjIAeAAQAIABAAAHQgBAGgHAAQgRgCgQAAQgHAggFAcIATABQAGAAACAHIAAADQAAADgEAAIgGgBIgDgBQgDgCgNgBIgDAYQgBAEgFAAQgGgBAAgKgAAeAzIAMg7QgOAAggADIgwAGIgRAyQAPgCARAAIAQAAQAbAAAYACgAADAeQgJgJgOgBQgJAAABgHQAAgGAJABIAPAFQAJAEADAIQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAgAABgdIgJgHIgEgCQgFgFAEgEQACgCAEAAQAFACAKAJQAEAFgDAEIgEACQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_5.setTransform(126.6,0.1,0.974,0.974);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABOBfQgQgDgWgUQgBAAAAgBQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQARAIAMADIgBgYQgBglACgpIABgXQACgDgEABQgDgBgYAGIgeAIIgBAAIgHAKQgEADgDgDQgDgDABgDQASgYAQgjQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBIAAgCQACgCADAAQAGAEAAAFQgLAYgKAQIArgKQARgEABADQAFADgCAKQgGA4ADBIQACAEgDAGQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCgBgAhMBBQgEg5gEgYIgCgKQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABgBQAEgBADADQAIgQAJgaIABgCIAAgCQACgCADAAQAFADAAAFQgGAUgLAVQAQgFAggEQAEgCAFADQACADgBAEQgFAegDAkIAAACQAFAAABAEQABAEgCACQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAIgKABIgqAMQAAAFgFABQgGAAgBgGgAgcAHQAAADgBADIgCABIgHACIgeAJIADAbIAAABIAlgKIABgGQADgfAFgfQglAEgNAJIgDACIADAYIAAAAIAjgLQAEABACADgAAhAbIgSgLIgEgCQgGgEAFgFQACgCAEABQAIACAQAMQAEAGgDAEIgDABQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_6.setTransform(105.3,-0.1,0.974,0.974);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVBhIgMgNQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIADgBIAFABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgXQgCgjABgWIABgMQABgEgFAAQgIgCgVAIIgGACIgFAAIAAAXIAcgIQAFABACADQAAAEgBACIgCABIgFABIgVAGIgEABIgCgBIgBAVIABAAIAZgHIAEAAQAFABABADIgBAGIgBABIgGAAIgbAHIgBAAIAAAaIAAAGQgBAFgEAAQgFAAgCgFIACg8IABguIgCgDQABgEAFgBQAGACAAAFIAEAAIAGgCQAWgIAQADQAHAAAAAGIAAAMQgCAeAEA8QAAAEACAEIAAACQgBADgFACIgBAAIgDgBgAAEBIQgBgDAFguIAAgHIAAgCQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIADAAQAFAAAAAMIgBAIIAPgFIAagHQACgBADAAQAFAAACAEQAAADgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAIgJACIglAKIgFABIgDASIAAAKQAAABABABQAAAAAAABQAAAAABAAQAAABABAAQAOABAggEIAYgFIABAAQAFAAACAEIAAAEQAAAEgEACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgNABQgbAEghAAQgLgBAAgNgAAKgPQAAgDAIgxIgBgIIABgCQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAIADAAQAFAAAAAMIgDAPIAfgKIAEgBQAFAAACAEQAAAEgCACIgBABIgIABIgcAJIgFABIgCAOQgCAIABAEQAAABAAAAQAAABABAAQAAABAAAAQABAAABAAQAKABAPgCIAOgDIABAAQAFAAABAEIABADQgBAEgEACIgBgBIgIABQgRADgSAAQgLgBgBgOgAgFgeQgEgBgFgFIgSgOIgyAQIgHACQgEgBAAgDQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAPgMAbgqQAEgFAFACQAEACgBAEQgHAHgVAdIgFAHIArgNQAEgBABADIAFAGQAIAIALAGQAEACgCAFQgBADgDAAIgCgBg");
	this.shape_7.setTransform(84.8,0,0.974,0.974);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABUBcIgFgBQg5gNgugTIgegKIgLgDIgBAAIgKAUIgDADQgDAGgFAAQgEAAAAgEQgBgCAEgFIACgEQANgTAHgWIAAgCQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAFAAABAFQAAAEgFANIARAEIABgwIgXAIIgLACQgEAAAAgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgDALgCIAbgJIABgbIgOAFIgHABQgEgBAAgDQAAgBAAgBQgBAAABgBQAAAAAAgBQAAAAAAgBQABgCAHAAIAOgFIADgBIAAgaQAAgBAAAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQABgEAFAAQAGABAAAGIgBAYIAKgDIAFgCQAFABABADQABAEgCACQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgSAEIAAAaIATgGIAHgCQAFABAAACIAAAGIgDADIgNACQgIACgIADIAAAZIATgIQAFABACADQAAADgBAEIgBAAIgFABIgTAHIgBAAIABATIAAABIARAGQA2AVAqAKIAIABQABAAABAAQABABAAAAQAAABAAAAQAAABAAABQgBAGgFAAIgCAAgAATA0QgFgZgHgOQgDgDAAgCQABgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAEgBADADIAEAFQASgGAfgFIAQgBQACABACACQABACgBADQACACgMARIgJAPIAJgBIAIABQAEAAABAFQgBAIgIgBQgHgDgYAEIgHABIgEgCQgDgFAFgCIAKgDQAGAAACgCIANgdQAAgBAAAAQABgBgBAAQAAAAgBAAQgBAAgBAAQgKAAgbAHIgLAEIAJAfQAAAFgFABQgGAAgBgGgAAFAAQgCgCADgGQARgZAMgdIgXAHQgFABgDgFQgBgEADgCQAygOASgDQAJgBADADQAEACgCAEQgHANgJAyQAAADgDACIgEAAQgFgEgFgHIgFgJQAAgBAAgBQgBgBABAAQAAgBAAAAQAAgBAAAAQADgBACADIAHAHQAGghAGgOQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgDAAQgJABgQAFIABADIgDAHQgLAYgNASIgHAKQgDADgDAAIgCAAg");
	this.shape_8.setTransform(63.2,0.1,0.974,0.974);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhABUQgIgBAEgOIADgoQAEgbgBgRIgBgGIgCgBIgUAcQgDACgCgCQgFgDADgEIASgZQARgZAKgeQABgEAEACQADABABAEIgCAIQgHASgMAUQAIACAAASIgFA2QgCAOABABQAFAHgGAQQgCAEgEAAIAAAAgAgsBHQgDgCACgEQAGgIA3gHIABgDQASggAMgnIAAgCQAAAAABgBQAAAAABAAQABAAAAAAQABgBABAAQAGADAAAGIgDAJQgKAcgOAWIgFAIQAdgCAgABQAHAAAAAHQAAAFgHAAQgdgEgmAFQgnAEgSAIIgEABQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBgAgHApQgIgIAAgVIgBgQQABgEAEAAQAFAAABAFIAAAQQABAJACAEIADAJIAAADIgBACQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBgAgigYQgEgBAAgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABgBAggHQAegGAqgGQAEgBABABQAFABgBAFQgBAFgEABQgXABgyAJIgdAHgAAOg2IgCgDIgCgEIgKgLQgCgFACgDQABgDAEABQAHAEAKAPQACAEgFAEIgEABIgBAAg");
	this.shape_9.setTransform(42.4,0.6,0.974,0.974);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAyBdIgMgNQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIACgCIAGACQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgYQgCgjABgXIABgNQAAgEgFAAQgNgCgfAKIgJADIgGAAIgDBOIAAAPIABAFQgCAFgEABQgFAAgCgGIADg7IABgtQgKAPgTAYIgGAHQgEAEgDgCQgDgDAAgEQAAgCADgDIAFgFIACgBQAeglAQgeIgVAEIgTABQgEgBAAgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgCASgBIAdgEIAFgNIABgJQACgEAFAAQAEACAAADQgBAIgDALIA4gIIAOgCQAFABABADQABAEgCACIgGACIhKAJQgIAPgKAQQABAAAAAAQABABAAAAQABAAAAABQABAAAAABIAEgBIAKgCQAhgKAWADQAHABAAAFIAAANQgCAjADA6IADALQgCADgEACIgBAAIgDgBgAgKAvQgBgDACgCIAFgCIAfgHQAFAAACAEQAAADgBADIgCABIgHABIgYAGIgFAAQgFAAAAgEgAgKAPQgBgDABgCIAGgBIAegIQAFABABADQABAEgCACIgBABIgHABIgXAGIgGABQgEgBAAgEg");
	this.shape_10.setTransform(20.3,0.2,0.974,0.974);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAYBYIAChBIABgxQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQABgEAGAAQAFABABAGIgCA/IACAAQAVAMAWgCQgIgVgYgXQgFgDAAgEQAAgDACgEQAJgYANgUQgTAEgZANQgGACgCgEQgCgEAEgDQATgLAjgJIAHgCQAEAAACADQACACgBAEIgHAJQgOATgIAXIgBACIACADQAYAZAKAXQAEAJgCADQgCADgGAAQgWACgcgSIAAAAIgBAnIABAGQgCAFgEAAQgFAAgBgFgAg4BOQgCgegDgOIgXAfQgEAEgEgCQgDgDACgFIADgDQAbgjAVgfQgIABgHADQgPAFgMAEIgEAAQgEgCAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgCAegJIAOgEIACgfIgNAEIgHABQgFgBAAgDQgBgDACgCQAAgBAHgBIARgFIABgXIgBgDQABgEAFAAQAGABAAAGIgBAVIAPgEQAFAAABAEQABAEgCACIgCABIgJABIgKADIgCAcIABACIADgBQAOgTATggIACgGQADgCADACQAFACgCAGQgLASgRAbIAVgEIAGgBQAFACgBAFQgBAFgFABQgLAAgXAGIgVAdQANgFAWgDIAQABQAEABACADQABAFgCADQgIAegCARIADABQADABABAEQgBAGgEAAIgDAAIgGAAQgKAAgRAEQgGABAAgFQAAgFAEgBQALgDAKgBIAFgBIAAAAQABgLAHggQADgHgGABQgJgDgWAHQgGACgGAFIgBAAIAHAwQgBAGgFAAQgGgBgBgFgAgvAxQAAgFAEgBIANgFIAJgCIAGABQACACAAADQAAAFgEABIgCAAIgEAAQgIAAgKAFIgCAAQgEAAAAgEg");
	this.shape_11.setTransform(0.1,0.4,0.974,0.974);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJAUIACgFIAGgPQgKgBAAgKQAAgEADgEQAEgDAEAAQAFAAADADQAEADAAAFIgEAOQgEALgDAEQgDAFgDAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAgBg");
	this.shape_12.setTransform(-20.9,0.5,0.974,0.974);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNBjQgMgFgFgIQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAIAMAFQAHgBADgiIABgQQAAgSgngJQgHAIgNALIgOALQgDABgDgDQgEgFAFgDQAegUAZgdIAEgGIgZAGQgUAFgLAEIgEAAQgEgCAAgDQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgCAjgJQAfgIAugHIAHAAQAEABAAAGQgBAEgFABQgOAAgcAGIgBAFIgYAZIAGABQAjAJAAAYIAEABIABAAIAEgCQAggdABgGQACgGAEAAQAIADgDAGQgCAHgcAZIgIAIIgBAAIA1AkIAGADIAHADQADAEgCAGQgBADgEgBQgEgBgHgGQgbgUghgTIgGgEIgFAlQgCAMgFACIgDAAIgDAAgAhKBaQgDgDACgEQASgKATgPIATgSQADgBADACQAEACgCAFQgTATgeATIgHAFIgDABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAhIA+QgDgEACgEIAWgPIAMgLQAEgCADACQADACgBAFQgKAKgUAPIgFADIgEABQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAgAhCglQgDgTgEgLQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAABAAQAAgCADgCQAFgBACADQACABABAFIBngQQAIAAAAAGQABADgJAKIgMANQgEAGgEgCQgDgDAFgGIAGgNQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAABIhWAPIAEASQgBAFgEABQgGgBgBgFgAgShOIgCgCQgCgFgDgCQgCgGACgEQABgBAEAAIAEACIAEAMIAAACQABAEgDABIgCAAIgCgBg");
	this.shape_13.setTransform(-40.7,-0.1,0.974,0.974);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABNBfQgPgDgWgUQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAPAIAOADIgBgYQgBgtACghIABgXQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgDgBgYAGIgeAIIgBAAIgHAKQgEADgDgDQgDgDABgDQASgYAQgjIABgFQABgCAEAAQAGADAAAGQgMAZgKAPIArgKQARgEACADQAFADgCAKQgHA4AEBIQACAEgDAGQgBAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAIgDgBgAhMBBQgDg0gGgdIgBgKQAAgBAAAAQAAAAAAgBQABAAABgBQAAAAABgBQAEgBACADQALgTAHgXIAAgCIAAgCQACgCADAAQAFADABAFQgJAagIAPQAQgGAggDQAEgCAEADQADADgBAEQgEAYgEAqIAAACQAEABACADQABAEgCACQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgJABIgqAMQAAAFgFABQgGAAgBgGgAgcAHQAAAEgBACIgCABIgHACIgeAJIADAbIAAABIACAAIAQgFIATgFIABgGQAEgpAEgVQglAEgNAJIgDACIADAYIAAAAIAigLQAFABACADgAAhAbIgSgLIgEgCQgGgEAFgFQACgCAEABQAIACAQAMQAEAGgDAEIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_14.setTransform(-63.2,-0.1,0.974,0.974);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAFBiQgEgCACgEIABgCIADgBQADgBAQgUIgNgGQgIgEgKgDIgCgBIgRAYQgEADgDgCQgDgCAAgEIADgEIAEgFIABAAQAWghAHgQIgMAFQgGACgIAAQgEgBAAgDQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgDANgBIAWgHIAHgRIABgFIgRAGIgIABQgFAAAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgCAJgCIAQgFIAPgPIgBgCQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgLgKQgDgEACgDQADgDADABQAHAEAJALIAWgbQAEgDAFADQADADgCAFIglAlIAPgFIAGgCQAFABACADQAAAEgBACIgDACIgbAGIAAACQAAAIgFANIAjgKQAGgCAEAAQAGABAAADQABAEgCACQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBABIgQABIgkAKIgPAaQAcgLAegFQAGAAACADQACADgBAEQgBACgIAJIgRAUIAbANIAYANQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAIgBAFQgBADgEAAIgIgDIgSgLIgegOIgQAUIgGAGIgFACIgDgBgAAIAwIAZAKIAUgYQgSACgbAMgAhVAwQgDgxgHgdQgCgIABgCQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAEgBACADQADADADAVIACARIAXgHQAFABACADIgBAFIgCAAIgFABIgUAHIgBAAIAEAbIAAABIAXgIIABgCIACgKQABgcADgZQABgGgEACIgPAFIgMADQgGADgCgDQgCgDABgEQACgDAHgCIAegHQAEgCAEABQAEABACAGIgDAKQgEAkgBAaQAEABACACQAAAFgBACIgCABIgHABIgaAIIgFABQAAAGgFAAQgGAAgBgGgAAFgiIgNgJIgEgCQgGgEAEgFQADgCADAAQAIADAMAKQAEAFgDAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAgAgOg9QgCgDAGgCQAhgeALgBQAFgBAEAEQABAEgCACQgCACgDABIgEABQgHADgVAMIgMAJIgEAAIgDgBg");
	this.shape_15.setTransform(-83.8,0.2,0.974,0.974);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgwBRQgDgDADgDQAEgEAdgFQgEgGgIgTQgCgLgDgJQgCgFABgCQABgEAFABQADABACADIAAACIARgEQAugLAjABQAGAAACADQADADgDAFIgYAuIAaAAQAGAAABAHQgBAFgGAAQgbgEgpAFQgpAEgRAFIgEACQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBgAgBAYIgQAFIgCABQAFAQALATIAJgCQgDgIgBgQIgBgPgAAMAVIAAASIACANIAEAKIAEAAQALgZAFgTIAAgCgAAyAPIAAABQAAAFgEAMQgGAOgJAOIAQgBIADgEQALgUAIgWgAhWBKQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQgCgEACgCQAPgJAagfQADgEAEABQAEAEgGAHIgcAgIgJAIIgEAAIAAAAgAg8AGIgZgKQgEgEADgFQADgCAEABQAKACAPAKQAFAEgDAEQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgCAAgDgCgAgKgKQgEgkgIgTQgDgGABgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAEgBADADIACAEIAfgHQASgEAUgCQAHACADAEQABAEgDADIgRA4QgDADgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIgFAAIgdAHIgEAAQgBADgDABQgFAAgCgGgAgJg8IAJApIAAACIABAAIAmgJIADABIADgLIAHghQADgDgFAAIgTADIABAEIgIAPQAGABAIAFQAEACgCAFQgBAEgEgBIgEgDIgLgFIgBAAIgLARQgCACgDgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAGgMIAPgbgAg2gnQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIgQgNQgDgFADgDQACgCAEABQAJAEAOARQADAEgGAEIgDABIgCAAg");
	this.shape_16.setTransform(-105.2,0.6,0.974,0.974);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhBBUIADhDIABgzIAAgBIgSAVQgDACgEgCQgDgDABgDQAbgaATglIAAgCIABgCQABgCAEAAQAFACABAGQgKASgQAWQAGABAAAGIgEBfIABAYQgBAEgEABQgGgBgBgFgABQBXIgMgMIAAgEIACgBIAFABQAAABABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABgGgCgdQgDgtACgnIABgTQAAgBgBgBQAAAAAAgBQgBAAAAgBQgBAAgBAAQgNgCghAJIgJACIgHAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBQgCgEAEgDIAQgCQAkgJAUACQAHACAAAFIgCASQgCAxAFBSIACAHIAAACQAAACgFADIgBAAIgDgBgAgZBOIADhOIABg7QAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQABgDAFAAQAGABAAAGIgDCAIAAAAQANgDAbgCIAdgCIAFAAQACACABAEQAAAEgEACIgHgBIgMAAQgUABggAEIgCAAQgBAFgEAAQgFAAgCgFgAAIAsQgDgUgFgMQAAgBAAgBQAAgBgBgBQAAAAAAAAQAAgBABAAQAAgCACgBQAEgBADACIABADIASgEQAMgDAMgBQAIABAEAEQACAEgDADIgOATIABAAIAGAAQACABAAAEQAAAFgDABIgFgBIgGAAQgJABgQAFQgBADgEAAQgFABgBgHgAAeANIgRAFIAEASIASgEIACAAIALgTQACgDgFAAIgPADgAAUgDIADgSIgOAEIgJABQgDAAgBgEQgBgDACgCQABgBAHgBIASgEIACAAIADgTQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBIAFgBQAFAAAAAEIgBAFIgCAMIAWgFQAEABACADIgBAFIgDABIgaAFIgEATQAAAFgFAAIgBAAQgEAAAAgEg");
	this.shape_17.setTransform(-126.6,0.6,0.974,0.974);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AARBVIABgBIABAAIABgCIACgKQgagBgdAAQgQAAgOAGIgFADQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQgDgCgCgDQgBgCADgFIARgoIgTAGQgFADgEgEQgCgEACgDQAEgEAegGIAHgRQAHgSAFgUIACgCIADgBQAEABAAAEQACADgSAuIgBADIAmgFIAogCQAFgTAIgYIgeAEQgPADgJAFIgDACQgEABgCgCQgDgEAEgEQAMgKA0gFQAHgBACADQADAEgDAHQgIAYgFAQIAhAAQAHAAAAAHQgBAGgGAAQgQgCgUAAIgKAsIADABIAUABQAGACACAGIAAADQAAADgEAAQgCABgEgCIgDgBIgSgEIgDAAIgCAQIAAAEQgCADgEAAQgIgBABgKgAgDAWIgrAEIgPAmQAPgDAOgBQAYgBAgADIAKgrIglADgAADAxQgJgFgMgCQgJAAABgGQABgHAIACIAOADQAIADACAHIABAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAgAAGABIgQgGQgGgFAFgEQACgCAEAAQAGACALAHQAEAFgDADIgDACIgEgCgAg+gZQgEAAgBgEIAEgIIADgDQATgYAJgaIABgCQAAgBABgBQAAAAAAAAQABgBAAAAQABAAABAAQAEAAACAFQgBAIgIAQIBlgLQAFABABACQABAEgCADIgFABIhaAJIgQABIgBgBIgOAVIgEAGQgEAFgDAAIgBAAg");
	this.shape_18.setTransform(-147.6,0,0.974,0.974);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIAUIABgFIAGgPQgKgBAAgKQAAgFAEgDQADgDAEAAQAGAAADADQADAEAAAEQAAAGgEAIQgCAIgFAHQgCAFgDAAQgEAAAAgDg");
	this.shape_19.setTransform(-168.4,0.5,0.974,0.974);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABHBkQgkgJgkgPQgZATgSAFQgGAAgBgDQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAOgCAXgTIgDgBIgZgJIgJgCIgCgCIgSAUQgFAEgCAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQgBgDACgEIAFgEQAogqACgHQACgHADAAQAIACgCAHQgCAGgNAPQAlgQAmgCQAGABABAEQABAGgDACIgDACIgEADIgcAYIgBABQAkANAfAIIAGABQABAAABAAQABABAAAAQAAABAAAAQAAABAAABQgCAHgGAAgAgfA0IAeALIABgCIAagYQgXABgiAOgAhAASQABgIAcgkQADgCADACQAEACgBADIgCACQgFAGgNATQgEAFgBAFIABADQgCAEgGAAIgBAAQgEAAgBgFgAgRAMQgLgDgDgLQgCgGAEgCQAEgBABABIACAEQACAGAFABQAHADAWAAIADgBQADgCAAgEQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQADAEgBAEQgBAKgLAAIgGAAQgPAAgMgCgAhJACQgEgDgDgPIgDgNIAAgFQABgEAFABQABAAABABQAAAAABAAQAAABABAAQAAABAAAAIAAAAQAQgGAPgDIgLgGQgGgEAEgEQADgDADABQAHACANAJIABABIAQgDQAKgIAIgLQALgNAJgGQAFgEAFAEQADADgCAEQgJAGgJAJIgPANQAfgEAcAAIAGgBQAGABAAAHQgBAEgEADIgaAYIARAKQAEAFgDAEQgDADgEgDQgUgLgHgCIgFgCQgFgEAEgFQADgDADACIAIACIAAAAIASgVQABgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgXAAgfAEQgoAIgbALIgDABQADAMAFAJQABADgEADIgDABQgDAAgBgDgAACgGIgBgCQgEgIgFgFQgCgFACgDQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIADACQAGAFADALIABADQAAADgEABIgBAAIgDgBgAgNg7IgGgEIgEgCQgFgDADgFQADgCAEAAQAGADAGAEQAEAFgDAEIgDABIgFgBgAg9g9QgDgEAGgCQAmgfAMgCQAFgBADAEQABAEgBACQgCACgEABIgEACQgKADgUANIgPAJIgEAAIgCAAg");
	this.shape_20.setTransform(-189.5,0,0.974,0.974);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA0BiQgGgJgBgFQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAFADQABAAAAAAQAAABABgBQAAAAAAAAQAAAAAAgBIATg5QABgEgFAAQgRgDgpAHQgRADgJAEIgOAGQgFABAAgGQAAgEADgDIAGgDIATgGIAXgEIADgFIAPgYQABAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIg3APQgGAAAAgFQAAgEAEgCIAlgJIAAgCIADgCIACgFIAOgXQgMAAggALQgVAlguBVQgDAFgEgBQgFgBABgMQAAgKADgBQADAAADACIAJgPIAuhVIgIADQgbAHgFAAQgHABgBgGQgCgEAEgBIAGAAQAIAAAjgLIAEgBIAXgoIAEgJQABgCAFAAQAFAAgBAHIgXAoQAbgIAJgBQAFgBAFACIADAFIAAADIAAABIgBACIgNAVIgDAGIATgFQAHAAAAAGQABADgIAJIgTAYIAcgCIAPAAIALAAQAIADgDAHQgOAfgMAsIgDAEIgCAAQgEAAgBgDgAgwBPQgEgBgBgEQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgCAXgGQAVgFAfgGIAFAAQAEACAAAFQgBAEgFACQgQAAgjAJIgUAGIgCABIgCgBgAgeg9IgRgKQgFgDAEgFQADgCADAAQAIADALAJQAEAEgDAFIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBg");
	this.shape_21.setTransform(-210.6,0,0.974,0.974);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABDBbIgMgNIgBgDIADgBIAFABIABgBIgBgmQgDgzACgqIABgVQAAgDgEgBQgUgCgtANIgOADIgLABQgDAAgBgDQgBgFADgCIAKgBIAOgDQAvgOAdAEQAHAAAAAGIgBAUQgDA2AGBYIACAIQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBADgFACIgBABIgDgCgAhMBKQgBgGAFhMQACg4gBgHIgBgEQABgEAFAAQAGABABAHQgCA/gEA3IABAbQgBAFgEAAQgGAAgBgFgAgyBHQAAgFAFgDIAlgFQAMgBANAAIAHAAQADACAAAEQgBAGgDABIgIgBIgKAAQgYACgZAFQgGAAAAgFgAgiAlQgDgBAAgFIAFgIIABgBIASgkIgRAFIgLACQgEgBgBgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgDALgBIAagIIAGgUIABgHQAAgEAGABQAEABAAAEQAAAHgFAPIAXgHIAIgBQAFAAACAEQAAADgBADIgEACIgOACIgYAGIgDAKIADAAIAFADIAhAWIAHAEQAFADgCAHQgDAEgEgBQgDgBgEgDQgUgRgPgKIgGgDIAAAAIgUAkIgEACIgDgBg");
	this.shape_22.setTransform(-232.1,0.7,0.974,0.974);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.小標, new cjs.Rectangle(-239.6,-9.8,479.3,19.7), null);


(lib.有 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADWFcIgcgcIAAgMIAXgJQABgaAJgaQAFh/gBiGQiMAUiKgIIgeAbQAFANgBAPQAFAaAMATQBhgCBsgIIAOgQQAMgIAQAFIAPAPIACAMQggAOggAAIjIAFQgDAsAKArQBiAJBjgVQADgMAKgLIAQAAIAQAQQADAOgKAHIhZAPIiSAAIgFBgIgEAKQgPACgJAIIgHgDQgXiFgBiCIgFgGQhWA9hKAyQgWAAgSgCQgHgIAJgJIBQg5QBChFA7hUQAhgyAdg7IhegEQg5AAg3gRIgCgFIAHgGQBwANBpgJQAkhKAVhQIALgLIAFACQAMApAeAjIAWBaQBfAMBOg3QAiACAZAYIACAKIgFAHQh4AYh5gBQhEBIg0BIQBDAHBGgHIBsgLIAHgMIAwgOIAMAFQAeBfgJBpIgFA0QgUBJgQBNIgHAIQgGACgGAAQgNAAgKgKgADPE8IAHAGIAAgHIgDgCgAjCBdIAEgFIgEAAgAi+BWIAFAAIABgCQAogZAhgiIgDgCIhGA4IAAAFIgDgCgAiMASIAOgKIAAgFIgEgCQgKAHAAAKgABDjAIAFAAIAAgoIgFAAgAAkjmQAEgIACgGIgBgCQgJAHAEAJgAAwkVIAHAAIgHgVIgEAAQgHANALAIgAAek/IAEgDIgEgCg");
	this.shape.setTransform(0,0,0.824,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.有, new cjs.Rectangle(-27.2,-29.5,54.4,59), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,788,70), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC4949").s().p("AsRG5Qk4sYBGl6QAdidAxhUQBAhwB5gpQCNgwCEAVQCOAXBUBgQCkDIBPHGIAsEBQAVBeAfgcQAighBthvQBUhWA3guQCkiHC+gPQCyABBYCCQBRB3gUCvQgNByhEBxQg3BbhgBgQhOBNpYFxQktC4kcCoQirlAicmMg");
	this.shape.setTransform(104.1,115.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,208.2,231.5), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC4949").s().p("ADTGyQl5hei0hTQg5gagygjQhGgwgchFQgag/APhAQAPg7BFgZQA7gVBbAEQBNAEBoAjQA7AVB1AsIBYAeQgkiHgIgrQghikA+hbQB3hwCJBcQB0BNA8CcQAoCEgGFAQgECggLCGQiZgei9gvg");
	this.shape_1.setTransform(56.8,50.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,-0.1,113.7,102.1), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgKQALgLAOAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape.setTransform(-54.9,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgLAOAAQAPAAALALQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_1.setTransform(-36,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgKQALgMAOAAQAPAAALAMQAKAKAAAOQAAAPgKALQgLALgPAAQgOAAgLgLg");
	this.shape_2.setTransform(-18.6,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAaQgKgLgBgPQABgOAKgLQALgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_3.setTransform(11.5,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgKAOgBQAPABALAKQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgKgKg");
	this.shape_4.setTransform(-6.2,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAaQgKgLgBgPQABgOAKgKQALgLAOAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_5.setTransform(11.5,48.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgKgKg");
	this.shape_6.setTransform(0,37.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgKAOgBQAPABALAKQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgKgKg");
	this.shape_7.setTransform(-6.2,56.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAaQgMgLAAgPQAAgOAMgLQAKgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgKgKg");
	this.shape_8.setTransform(-23.5,58.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgLAOABQAPgBALALQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_9.setTransform(-18.6,41.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAaQgLgLABgPQgBgOALgLQALgKAOgBQAPABALAKQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgLgKg");
	this.shape_10.setTransform(-27.2,27.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAaQgLgLABgPQgBgOALgKQALgMAOAAQAPAAALAMQAKAKAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_11.setTransform(-33.4,44.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgKAOgBQAPABALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_12.setTransform(-45.5,25.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgLAOABQAPgBALALQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_13.setTransform(-51.3,41.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCD1CA").s().p("AhoEKQiwguhAidQg8iSAzjEILbC9Qg1DIh0BgQhaBKh0AAQgzAAg4gOg");
	this.shape_14.setTransform(-17.2,34.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ai2QtQhugUhthMQiKhghYieQh5jZCGkFQAuhaBah5ICMi5QB6iuCNmQQBGjIAtilIAaAHQhGCxhGDHQiNGPAEBvIKfCuQBAhrBGmbQAjjOAWi4IAjAJQgiCWghDJQhCGRACD6QABA9ASCqQASCggCBZQgHEnjOCAQiaBginARQgkADggAAQhcAAhOgag");
	this.shape_15.setTransform(-16.1,-17.8);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-0.8,7.3,1,1,0,0,0,164.3,163.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.1,-155.8,328.5,326.2);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgKQALgLAOAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape.setTransform(-54.9,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgLAOAAQAPAAALALQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_1.setTransform(-36,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgKQALgMAOAAQAPAAALAMQAKAKAAAOQAAAPgKALQgLALgPAAQgOAAgLgLg");
	this.shape_2.setTransform(-18.6,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAaQgKgLgBgPQABgOAKgLQALgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_3.setTransform(11.5,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgKAOgBQAPABALAKQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgKgKg");
	this.shape_4.setTransform(-6.2,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAaQgKgLgBgPQABgOAKgKQALgLAOAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_5.setTransform(11.5,48.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgKgKg");
	this.shape_6.setTransform(0,37.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgKAOgBQAPABALAKQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgKgKg");
	this.shape_7.setTransform(-6.2,56.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAaQgMgLAAgPQAAgOAMgLQAKgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgKgKg");
	this.shape_8.setTransform(-23.5,58.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgLAOABQAPgBALALQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_9.setTransform(-18.6,41.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAaQgLgLABgPQgBgOALgLQALgKAOgBQAPABALAKQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgLgKg");
	this.shape_10.setTransform(-27.2,27.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAaQgLgLABgPQgBgOALgKQALgMAOAAQAPAAALAMQAKAKAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_11.setTransform(-33.4,44.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgKAOgBQAPABALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_12.setTransform(-45.5,25.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgLAOABQAPgBALALQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_13.setTransform(-51.3,41.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCD1CA").s().p("AhoEKQiwguhAidQg8iSAzjEILbC9Qg1DIh0BgQhaBKh0AAQgzAAg4gOg");
	this.shape_14.setTransform(-17.2,34.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ai2QtQhugUhthMQiKhghYieQh5jZCGkFQAuhaBah5ICMi5QB6iuCNmQQBGjIAtilIAaAHQhGCxhGDHQiNGPAEBvIKfCuQBAhrBGmbQAjjOAWi4IAjAJQgiCWghDJQhCGRACD6QABA9ASCqQASCggCBZQgHEnjOCAQiaBginARQgkADggAAQhcAAhOgag");
	this.shape_15.setTransform(-16.1,-17.8);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-0.8,7.3,1,1,0,0,0,164.3,163.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.1,-155.8,328.5,326.2);


(lib.身體 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cleanh_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.身體, new cjs.Rectangle(-83.5,-74.1,167,148.3), null);


(lib.臉 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+BCQgogdAIgxQAFgeAZgUQAXgTAfgEQAfgDAaAPQAXACAIgJQAEgGAGABQAGABACADQACAGgFAFQgHAGgIABQgGABgNgBQAMALAHAPQARAjgOAeQgKAZgcARQgMAIgNAFIgPADIgIAAQgdAAgcgUg");
	this.shape.setTransform(32,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBbIgOgGQgKgFgMgMQgZgWgGgaQgIggAXggQAJgNANgJQgYgCgIgLIgCgDQgBgEACgEQADgDAFABQAGAAAEAGQAGALAXACQAdgMAdAKQAeAIAUAXQAVAYAAAdQgBA0gsAVQgYAMgXAAQgKAAgLgDg");
	this.shape_1.setTransform(-34.4,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTBRQgHAAgEgGQgDgFAAgGIgCg+QgWgJgMgRQgNgTAEgUQAAgHAEgHQACgEAEAAQAFABABAFQACARARAOQARAOAXADQAXAEAUgIQATgIAIgRQADgDAEAAQAEAAABAFQABAHgBAIQgDAUgRAOQgRAMgZADIgTA7QgBAGgFAEQgDADgFAAIgDgBg");
	this.shape_2.setTransform(-1,30.3);

	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(1.7,-28.2,1,1,0,0,0,90.5,85.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231815").s().p("AglICIgkgDQiNgPhqiKQhtiNg3j7QgrjCCFiaQA5hCBLgjQBKgkBGAGIEtAZQBGAGBEAwQBEAvAtBLQBqCuhLC4QhiDwiFB6Qh1BriAAAIgagBg");
	this.shape_3.setTransform(0.1,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231815").s().p("AisDcQgMgBgGgKQgbgpgZhDQgghUAIgtQAOhgBJgzQBJg0BqAJQAgADAZAGQBiAVA/BiQA/BhgQBoIgEAVQgEAQgQACQgQACgJgPQgUgqgngcQgngcgxgIQhNgMg/AqQg/ApgLBGQgCAQABAIQgBASgQAFIgFABIgEAAg");
	this.shape_4.setTransform(62.7,-17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231815").s().p("ACMDoQgEAAgFgDQgHgDgDgHQgEgHABgIQADgOAAgKQABhHg3gzQg4g0hNgBQgygBgrAVQgsAVgbAmQgJAOgQgFQgRgFgBgQIAAgVQABhpBPhWQBPhVBkgFQAbgCAdADQBsAJA/A/QA/A/gBBgQgBAugtBOQgkA+giAkQgHAIgKAAIgCAAg");
	this.shape_5.setTransform(-62.1,-25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.臉, new cjs.Rectangle(-89.5,-113.3,181.8,175.8), null);


(lib.影 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.571,0.571,0,0,0,394.1,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.影, new cjs.Rectangle(-225,-20,450.1,40), null);


(lib.h2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.h2_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.h2copy, new cjs.Rectangle(-51.5,-26.1,103,52.3), null);


(lib.b身體 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(8.6,-25,1,1,0,0,0,19.3,23);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAcQgDgFAEgEIARgRQgHgTANgKIAFgDQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgDAFABAJQAAAIAFAGQAFAIAIADQAIAEAGgDQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgEAEQgNAKgRgNIgVAKIgEACQgDAAgCgDg");
	this.shape.setTransform(-12.5,-19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221714").s().p("AgSAQQgFgFABgKQACgIAGgGQAJgIAKAAQAMABAFAKQAFAQgTALQgIAFgHAAQgHAAgEgGg");
	this.shape_1.setTransform(-12.1,-27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAiQgFgEgCgGIgCgFIgBgLQAAgMAGgIQAIgLAPgCQAFAAAGABQgFgHABgFIAAgCIADgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgCAEAGAIQAKAFAFALQAIAcgYAMQgKAFgIAAQgJAAgIgGg");
	this.shape_2.setTransform(-11.4,-27.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221714").s().p("AgKAVQgLgHgCgGQgDgIABgDQACgJAMgIQALgIALAGQAGADADAEQAIAMgDAKQgDAKgLAGQgEACgEAAQgGAAgHgEg");
	this.shape_3.setTransform(-0.7,-13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAiIgKgEIgFgEQgLgJgBgRQgCgTASgLQAKgGANACQALACAKAIQAKAJACAMQAFAHAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABAAgBAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgCAAQgFAAgGgIQAAAGgDAGQgGAPgNAEQgFACgFAAQgGAAgHgCg");
	this.shape_4.setTransform(0.8,-11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221714").s().p("Ag9DAQhHgLgigtIgIgKQgkgyAJg+QAJhIBHhMQA2g5BKgCQBHgCAiAuIBFBfQAjAwgSBJQgUBQhIAYQhEAYg6AAQgVAAgUgDg");
	this.shape_5.setTransform(-0.5,-18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221714").s().p("ABBAyIgMgIQgbgQgpACQgbACgRgRQgRgPAGgUQAFgSATgHQAUgHAXAMQAYANAbAdQAeAfgGAOQgDAFgDAAIgBAAg");
	this.shape_6.setTransform(-9.8,-37.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221714").s().p("AgWA+QgQgQAEgbQAIgqgPgaIgGgMQgBgFAHgDQAPgIAeAbQAdAZAKAYQAKAVgKAWQgJAVgTAHQgHACgHAAQgMAAgLgKg");
	this.shape_7.setTransform(11.7,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221714").s().p("AgcBiQgEgBgDgDIgBgDQgCgGAGgFIAHgFQAVgRABgeQACgcgUgXQgNgPgRgHQgRgIgSACQgGABgDgGQgDgGAFgEIAGgGQAfgaAtABQAsABAbAcIAOARQAZAigCAhQgDAjgcAYQgOALgiAHQgYAFgSAAIgEAAg");
	this.shape_8.setTransform(-3,-43.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221714").s().p("AAdBnQgFgFADgGQAHgQgCgTQgCgTgKgQQgQgYgcgIQgcgIgXAPIgHAFQgGAEgFgEIgDgCQgDgDACgEQAFgSANgZQARgfAPgJQAggUAgAIQAiAIAYAiIAMASQATAjgMAqQgNArgjAWIgHAEIgEABQgDAAgDgCg");
	this.shape_9.setTransform(26.5,-5.7);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,9.7,1,1,0,0,0,47.9,45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b身體, new cjs.Rectangle(-48,-53.6,95.8,108.5), null);


(lib.b右手 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(5.4,5.3,1,1,0,0,0,23.9,19.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373231").s().p("AgVAmIgSgZIgEgFIgBgCIgDgFIgBgGIAAgBIgBgGQABgmATgIQAKgFANAFIAEABIA0AZQgaAegJANQgJAOgGAkg");
	this.shape.setTransform(-18.7,-11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221714").s().p("AACBEQhHg4gjgiQADgkAKgPQAIgMAbgfIgCgBQA0AZBvA6QgrBUAFBEQgcgUglgeg");
	this.shape_1.setTransform(-8.1,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b右手, new cjs.Rectangle(-23.7,-17.2,53.1,42), null);


(lib.大愛 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.2,0.25,0.25,0,0,0,104.4,116.2);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.大愛, new cjs.Rectangle(-25.9,-28.8,52,57.8), null);


(lib.小愛 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.237,0.237,0,0,0,57.1,51.3);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.小愛, new cjs.Rectangle(-13.5,-12.1,27,24.2), null);


// stage content:
(lib.ecard_1920x1080 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 媽1
	this.instance = new lib.媽1();
	this.instance.parent = this;
	this.instance.setTransform(757.7,211.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({y:219.9,alpha:1},9,cjs.Ease.get(-1)).to({y:217.9},4,cjs.Ease.get(-1)).wait(126).to({y:211.9,alpha:0},5).wait(1));

	// 媽2
	this.instance_1 = new lib.媽2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(846.6,212.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:220.5,alpha:1},9,cjs.Ease.get(-1)).to({y:218.5},4,cjs.Ease.get(-1)).wait(126).to({y:212.5,alpha:0},5).wait(1));

	// 逗點
	this.instance_2 = new lib.逗點();
	this.instance_2.parent = this;
	this.instance_2.setTransform(915.2,218.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:226.5,alpha:1},9,cjs.Ease.get(-1)).to({y:224.5},4,cjs.Ease.get(-1)).wait(126).to({y:218.5,alpha:0},5).wait(1));

	// 感
	this.instance_3 = new lib.感();
	this.instance_3.parent = this;
	this.instance_3.setTransform(968.4,210.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({y:218.7,alpha:1},9,cjs.Ease.get(-1)).to({y:216.7},4,cjs.Ease.get(-1)).wait(126).to({y:210.7,alpha:0},5).wait(1));

	// 謝
	this.instance_4 = new lib.謝();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1038.2,211.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({y:219.3,alpha:1},9,cjs.Ease.get(-1)).to({y:217.3},4,cjs.Ease.get(-1)).wait(126).to({y:211.3,alpha:0},5).wait(1));

	// 有
	this.instance_5 = new lib.有();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1104.3,209.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({y:217.3,alpha:1},9,cjs.Ease.get(-1)).to({y:215.3},4,cjs.Ease.get(-1)).wait(126).to({y:209.3,alpha:0},5).wait(1));

	// 您
	this.instance_6 = new lib.您();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1172.3,210.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({y:218.1,alpha:1},9,cjs.Ease.get(-1)).to({y:216.1},4,cjs.Ease.get(-1)).wait(126).to({y:210.1,alpha:0},5).wait(1));

	// 小標
	this.instance_7 = new lib.小標();
	this.instance_7.parent = this;
	this.instance_7.setTransform(958.9,147.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:155.6,alpha:1},9,cjs.Ease.get(-1)).to({y:153.6},4,cjs.Ease.get(-1)).wait(129).to({y:147.6,alpha:0},5).wait(1));

	// 字
	this.instance_8 = new lib.字();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1151,449.8,0.064,0.064);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(98).to({_off:false},0).to({scaleX:1.12,scaleY:1.12,x:1199.6,y:403.6,alpha:1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:1194.1,y:408.9},5,cjs.Ease.get(1)).wait(35));

	// 框
	this.instance_9 = new lib.框();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1148.1,452.6,0.064,0.064,0,0,0,-45.1,45.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(98).to({_off:false},0).to({regX:-45.5,regY:45.5,scaleX:1.12,scaleY:1.12,x:1148,alpha:1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(35));

	// 大愛
	this.instance_10 = new lib.大愛();
	this.instance_10.parent = this;
	this.instance_10.setTransform(943.7,330.3,0.394,0.394,0,0,0,-25.9,28.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:936.8,y:329.2,alpha:1},11,cjs.Ease.get(0.2)).to({scaleX:1.13,scaleY:1.13,y:329.3},11,cjs.Ease.get(0.2)).to({regY:29,scaleX:1.23,scaleY:1.23,x:936.6,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(7).to({_off:false,regY:28.9,scaleX:0.39,scaleY:0.39,x:943.7,y:330.3},0).to({scaleX:1,scaleY:1,x:936.8,y:329.2,alpha:1},11,cjs.Ease.get(0.2)).to({scaleX:1.13,scaleY:1.13,y:329.3},11,cjs.Ease.get(0.2)).to({regY:29,scaleX:1.23,scaleY:1.23,x:936.6,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(7).to({_off:false,regY:28.9,scaleX:0.39,scaleY:0.39,x:943.7,y:330.3},0).to({scaleX:1,scaleY:1,x:936.8,y:329.2,alpha:1},11,cjs.Ease.get(0.2)).to({scaleX:1.13,scaleY:1.13,y:329.3},11,cjs.Ease.get(0.2)).to({regY:29,scaleX:1.23,scaleY:1.23,x:936.6,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,regY:28.9,scaleX:0.39,scaleY:0.39,x:943.7,y:330.3},0).to({scaleX:1,scaleY:1,x:936.8,y:329.2,alpha:1},11,cjs.Ease.get(0.2)).to({scaleX:1.13,scaleY:1.13,y:329.3},11,cjs.Ease.get(0.2)).to({regY:29,scaleX:1.23,scaleY:1.23,x:936.6,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// 小愛
	this.instance_11 = new lib.小愛();
	this.instance_11.parent = this;
	this.instance_11.setTransform(925.6,334.1,0.061,0.061,0,0,0,13.9,12.3);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({regX:13.6,regY:12.2,scaleX:1.02,scaleY:1.02,x:925.7,alpha:1},12,cjs.Ease.get(0.2)).to({regX:13.7,regY:12.3,scaleX:1.24,scaleY:1.24,x:925.8,y:334.3},12,cjs.Ease.get(0.2)).to({scaleX:1.38,scaleY:1.38,x:922.8,y:330.2,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(6).to({_off:false,regX:13.9,scaleX:0.06,scaleY:0.06,x:925.6,y:334.1},0).to({regX:13.6,regY:12.2,scaleX:1.02,scaleY:1.02,x:925.7,alpha:1},12,cjs.Ease.get(0.2)).to({regX:13.7,regY:12.3,scaleX:1.24,scaleY:1.24,x:925.8,y:334.3},12,cjs.Ease.get(0.2)).to({scaleX:1.38,scaleY:1.38,x:922.8,y:330.2,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(6).to({_off:false,regX:13.9,scaleX:0.06,scaleY:0.06,x:925.6,y:334.1},0).to({regX:13.6,regY:12.2,scaleX:1.02,scaleY:1.02,x:925.7,alpha:1},12,cjs.Ease.get(0.2)).to({regX:13.7,regY:12.3,scaleX:1.24,scaleY:1.24,x:925.8,y:334.3},12,cjs.Ease.get(0.2)).to({scaleX:1.38,scaleY:1.38,x:922.8,y:330.2,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(7).to({_off:false,regX:13.9,scaleX:0.06,scaleY:0.06,x:925.6,y:334.1},0).to({regX:13.6,regY:12.2,scaleX:1.02,scaleY:1.02,x:925.7,alpha:1},12,cjs.Ease.get(0.2)).to({regX:13.7,regY:12.3,scaleX:1.24,scaleY:1.24,x:925.8,y:334.3},12,cjs.Ease.get(0.2)).to({scaleX:1.38,scaleY:1.38,x:922.8,y:330.2,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(6));

	// b右手1
	this.instance_12 = new lib.b右手1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1154.4,524.6,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(72).to({rotation:0,x:1151.4,y:523.2},5).to({_off:true},1).wait(70));

	// b左手1
	this.instance_13 = new lib.b左手1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1116.1,525.5,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(72).to({rotation:0,x:1118.1,y:524},5).to({_off:true},1).wait(70));

	// nb1
	this.instance_14 = new lib.nb1_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1134.5,542.7,1.011,1.007,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(97).to({_off:true},1).wait(50));

	// b右手1 copy
	this.instance_15 = new lib.b右手1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1151.4,520.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(78).to({_off:false},0).to({y:523.2},3).to({rotation:15,x:1149.9,y:525.2},3).to({rotation:30,x:1148.5,y:520.7},3).to({rotation:15,x:1147,y:517},3).to({x:1140.5},3).to({_off:true},5).wait(50));

	// b左手1 copy
	this.instance_16 = new lib.b左手1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1118.1,520.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(78).to({_off:false},0).to({y:524},3).to({rotation:-15,x:1121.1,y:526},3).to({regX:-0.1,regY:0.1,rotation:-30,x:1122,y:524},3).to({regY:0.2,rotation:-45,x:1120.2,y:522.6},3).to({x:1113.7},3).to({_off:true},5).wait(50));

	// 兩梗 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#008485").ss(1.2,1,1).p("Ag9gTQABAAAZAbQAfAfAYAHQAHgeADgIQAJgWAXgf");
	this.shape.setTransform(1138,533.8);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#008485").ss(1.2,1,1).p("Ag9gSQABAAAaAbQAfAeAYAIQAFgaAEgLQAKgYAWgg");
	this.shape_1.setTransform(1136.9,530.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#008485").ss(1.2,1,1).p("Ag9gRQABAAAbAaQAfAdAYAKQAEgWAFgQQAKgaAVgf");
	this.shape_2.setTransform(1135.9,527.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#008485").ss(1.2,1,1).p("Ag9gPQAAAAAdAZQAgAcAXAKQACgQAGgUQAKgcAVgf");
	this.shape_3.setTransform(1134.8,524.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#008485").ss(1.2,1,1).p("Ag9gOQAAABAdAYQAgAaAXAMQABgMAHgYQALgeAUgf");
	this.shape_4.setTransform(1133.7,521.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#008485").ss(1.2,1,1).p("Ag7gHQAAAAAeAWQAiAYAYALQgBgMAGgYQAIgfASgg");
	this.shape_5.setTransform(1130.6,519.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#008485").ss(1.2,1,1).p("Ag6AAQABAAAgAUQAjAWAYAJQgBgMAEgYQAGggAQgg");
	this.shape_6.setTransform(1127.5,517.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#008485").ss(1.2,1,1).p("Ag4AGQAAAAAhATQAlAUAZAGQgCgLACgZQAEggAOgh");
	this.shape_7.setTransform(1124.4,515.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#008485").ss(1.2,1,1).p("Ag2ANQAAAAAjARQAmARAZAFQgCgLABgZQABggALgj");
	this.shape_8.setTransform(1121.3,513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},82).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},3).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(82).to({_off:false},0).wait(5).to({_off:true},1).wait(60));

	// 葉1 copy
	this.instance_17 = new lib.Tween19("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(1145.9,547.3,0.72,0.72,-30,0,0,0.1,0);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween20("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(1141.8,527.2,0.72,0.72,-20.5,0,0,0.1,0.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(82).to({_off:false},0).to({y:539.1},5).to({_off:true,regY:0.1,rotation:-20.5,x:1141.8,y:527.2},4).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(87).to({_off:false},4).to({rotation:-35.5,x:1131.5,y:517.5},4).to({_off:true},3).wait(50));

	// 葉2 copy
	this.instance_19 = new lib.Tween21("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(1138.9,551.5,0.72,0.72,-30,0,0,0.1,0.1);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween22("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(1134.8,530,0.72,0.72,-20.5,0,0,-0.1,0.1);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(82).to({_off:false},0).to({y:543.2},5).to({_off:true,regX:-0.1,rotation:-20.5,x:1134.8,y:530},4).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(87).to({_off:false},4).to({rotation:-35.5,x:1125.4,y:522},4).to({_off:true},3).wait(50));

	// 葉 copy
	this.instance_21 = new lib.葉子();
	this.instance_21.parent = this;
	this.instance_21.setTransform(1139.3,542,0.72,0.72,-14.3,0,0,0.1,0.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(82).to({_off:false},0).to({y:533.8},5).to({rotation:-20.5,x:1135.9,y:521.6},4).to({regY:0.2,rotation:-35.5,x:1124.4,y:513.6},4).to({_off:true},3).wait(50));

	// 主梗 copy
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#008485").ss(1.2,1,1).p("AgphlQAAAAAPBcAgag4QAXBnAtA3");
	this.shape_9.setTransform(1140.2,539.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#008485").ss(1.2,1,1).p("AgphqQAAAAAHAsQAIAnAOApAgdhGQAFAYAKAnQAUBHAkAr");
	this.shape_10.setTransform(1140.2,538.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#008485").ss(1.2,1,1).p("AgphvQAAAAAJA4QALA3AXAsAgghUQAEASALA1QAJAfAKAaQARAoAXAc");
	this.shape_11.setTransform(1140.2,538.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#008485").ss(1.2,1,1).p("AgphzQAAAAALBEQAMA2ATApAgjhiQADANAMBCQAJAkAMAfQAGANAGALQANAZAQAT");
	this.shape_12.setTransform(1140.2,537.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#008485").ss(1.2,1,1).p("AgnhvQADASAIA1QANA5AUArQAKAWALASQAIALAIAKAgnhvQACAGAOBPQAMAwAQAmAgph4IACAJ");
	this.shape_13.setTransform(1140.2,537.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#008485").ss(1.2,1,1).p("Agph9QAAAAAPBdQAXBnAtA3");
	this.shape_14.setTransform(1140.2,536.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#008485").ss(1.2,1,1).p("AgqiAQAAAAATBfQAaBqAoA4");
	this.shape_15.setTransform(1139.1,533.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#008485").ss(1.2,1,1).p("AgsiDQABABAWBhQAdBsAlA5");
	this.shape_16.setTransform(1138,531);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#008485").ss(1.2,1,1).p("AgsiGQAAAAAbBkQAgBwAfA5");
	this.shape_17.setTransform(1136.9,528.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#008485").ss(1.2,1,1).p("AguiJQABAAAeBnQAkByAaA6");
	this.shape_18.setTransform(1135.7,525.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#008485").ss(1.2,1,1).p("Ag2iFQAAABAlBjQArBwAdA3");
	this.shape_19.setTransform(1133.1,523.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#008485").ss(1.2,1,1).p("Ag/iBQABABArBhQAyBrAhA2");
	this.shape_20.setTransform(1130.4,521.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#008485").ss(1.2,1,1).p("AhIh9QABAAAyBfQA5BoAlAz");
	this.shape_21.setTransform(1127.8,519.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#008485").ss(1.2,1,1).p("AhQh4QABAAA4BbQBABlAoAx");
	this.shape_22.setTransform(1125.1,517.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},82).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[]},3).wait(50));

	// f01 copy
	this.instance_22 = new lib.f01_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(1128.1,537.1,0.72,0.72,-14.1,0,0,0.1,0.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(82).to({_off:false},0).to({y:528.8},5).to({rotation:-20.5,x:1124.3,y:517.9},4).to({rotation:-35.5,x:1112.1,y:513},4).to({_off:true},3).wait(50));

	// fl2 copy
	this.instance_23 = new lib.fl2_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(1135.2,523.1,0.72,0.72,-14.1,0,0,0.2,0.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(82).to({_off:false},0).to({y:514.9},5).to({regX:0,rotation:-20.5,x:1129.7,y:503.3},4).to({regX:0.1,regY:0.3,rotation:-35.5,x:1113.7,y:497.6},4).to({_off:true},3).wait(50));

	// f3 copy
	this.instance_24 = new lib.f3_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(1148.7,531.9,0.72,0.72,-14.1,0,0,0.1,0.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(82).to({_off:false},0).to({y:523.6},5).to({rotation:-20.5,x:1144.2,y:510.4},4).to({rotation:-35.5,x:1129.4,y:500.6},4).to({_off:true},3).wait(50));

	// b1右腳
	this.instance_25 = new lib.b1右腳();
	this.instance_25.parent = this;
	this.instance_25.setTransform(1153.3,558.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({rotation:-30,x:1157.3,y:557.7},6).to({rotation:0,x:1153.3,y:558.7},13).to({rotation:-30,x:1157.3,y:557.7},13).wait(15).to({rotation:0,x:1153.3,y:558.7},13).wait(37).to({_off:true},1).wait(50));

	// b1左腳
	this.instance_26 = new lib.b1左腳();
	this.instance_26.parent = this;
	this.instance_26.setTransform(1120.4,559.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({regX:0.1,regY:0.1,rotation:45,x:1114.6,y:557.8},6).to({regX:0,regY:0,rotation:0,x:1120.4,y:559.3},13).to({regX:0.1,regY:0.1,rotation:45,x:1114.6,y:557.8},13).wait(15).to({regX:0,regY:0,rotation:0,x:1120.4,y:559.3},13).wait(37).to({_off:true},1).wait(50));

	// beye
	this.instance_27 = new lib.beye();
	this.instance_27.parent = this;
	this.instance_27.setTransform(1133.2,484);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(82).to({x:1134.5,y:485.5},1).to({x:1133.5},10).to({x:1133.2,y:484},3).to({_off:true},2).wait(50));

	// bh1
	this.instance_28 = new lib.bh1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(1133.1,476.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(96).to({_off:true},2).wait(50));

	// b右耳
	this.instance_29 = new lib.b右耳();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1154.2,477.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({rotation:-30,x:1154.9},1).to({rotation:0,x:1154.2},3,cjs.Ease.get(0.1)).to({rotation:-30,x:1154.7},6,cjs.Ease.get(0.1)).to({rotation:0,x:1154.2},5,cjs.Ease.get(0.1)).to({rotation:-30,x:1154.9},8).to({rotation:0,x:1154.2},6,cjs.Ease.get(0.1)).to({rotation:-30,x:1154.7},6,cjs.Ease.get(0.1)).to({rotation:0,x:1154.2},5,cjs.Ease.get(0.1)).to({rotation:-30,x:1154.9},12).to({rotation:0,x:1154.2},6,cjs.Ease.get(0.1)).to({rotation:-30,x:1154.7},6,cjs.Ease.get(0.1)).to({rotation:0,x:1154.2},5,cjs.Ease.get(0.1)).wait(13).to({_off:true},16).wait(50));

	// b左耳
	this.instance_30 = new lib.b左耳();
	this.instance_30.parent = this;
	this.instance_30.setTransform(1113.1,478.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({rotation:30,x:1113.3},1).to({rotation:0,x:1113.1},3,cjs.Ease.get(0.1)).to({rotation:30},6,cjs.Ease.get(0.1)).to({rotation:0},5,cjs.Ease.get(0.1)).to({rotation:30,x:1113.3},8).to({rotation:0,x:1113.1},6,cjs.Ease.get(0.1)).to({rotation:30},6,cjs.Ease.get(0.1)).to({rotation:0},5,cjs.Ease.get(0.1)).to({rotation:30,x:1113.3},12).to({rotation:0,x:1113.1},6,cjs.Ease.get(0.1)).to({rotation:30},6,cjs.Ease.get(0.1)).to({rotation:0},5,cjs.Ease.get(0.1)).wait(13).to({_off:true},16).wait(50));

	// b身體1
	this.instance_31 = new lib.b身體1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(1137.4,504.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(96).to({_off:true},2).wait(50));

	// nb
	this.instance_32 = new lib.nb_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(1142.1,538.3,1,1,3.4);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(98).to({_off:false},0).to({rotation:0},7).to({rotation:3.4},5).to({rotation:0},5).wait(33));

	// b右手
	this.instance_33 = new lib.b右手();
	this.instance_33.parent = this;
	this.instance_33.setTransform(1116.5,508.8,1,1,-12.5,0,0,2.9,3.9);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(98).to({_off:false},0).to({regX:2.8,regY:3.8,rotation:0,x:1110.4,y:503.7},7).to({regX:2.9,regY:3.9,rotation:-12.5,x:1116.5,y:508.8},5).to({regX:2.8,regY:3.8,rotation:0,x:1110.4,y:503.7},5).wait(33));

	// 兩梗
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#008485").ss(1.2,1,1).p("AhShEQAAABALA0QAQA6AZAZQAdgfAIgHQAbgWAxgV");
	this.shape_23.setTransform(1094.1,475.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#008485").ss(1.2,1,1).p("AhThDQABABANAzQARA5AZAaQAagdAKgKQAbgYAwgX");
	this.shape_24.setTransform(1093.6,474.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#008485").ss(1.2,1,1).p("AhUhCQABABAPAyQAUA4AYAaQAXgbAMgNQAbgZAvgY");
	this.shape_25.setTransform(1093.1,474.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#008485").ss(1.2,1,1).p("AhUhBQAAABARAxQAWA3AZAaQASgZAOgPQAcgbAuga");
	this.shape_26.setTransform(1092.6,473.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#008485").ss(1.2,1,1).p("AhVhAQAAABATAxQAYA1AZAaQAPgWAQgTQAcgcAtgc");
	this.shape_27.setTransform(1092.1,473.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#008485").ss(1.2,1,1).p("AhWg/QAAABAVAwQAaA0AZAaQAMgUARgVQAdgfArgd");
	this.shape_28.setTransform(1091.6,473);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#008485").ss(1.2,1,1).p("AhXg+QAAAAAYAvQAcA0AYAaQAJgSATgYQAdggAqge");
	this.shape_29.setTransform(1091.1,472.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#008485").ss(1.2,1,1).p("AhYg9QABABAZAtQAeAzAYAaQAGgPAUgbQAegjApgf");
	this.shape_30.setTransform(1090.6,472.2);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#008485").ss(1.2,1,1).p("AhXg+QABAAAWAwQAbAzAZAaQAKgSASgXQAdggArgd");
	this.shape_31.setTransform(1091.3,472.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#008485").ss(1.2,1,1).p("AhWhAQABABATAwQAZA1AYAaQAPgVAQgTQAcgdAtgc");
	this.shape_32.setTransform(1092,473.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#008485").ss(1.2,1,1).p("AhUhBQAAAAAQAyQAWA3AYAaQAUgZANgPQAdgaAtgb");
	this.shape_33.setTransform(1092.7,474);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#008485").ss(1.2,1,1).p("AhThCQAAAAAOAzQATA4AYAaQAZgcALgLQAbgYAvgY");
	this.shape_34.setTransform(1093.4,474.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23}]},98).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},26).to({state:[{t:this.shape_30}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(105).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).wait(33));

	// 葉1
	this.instance_34 = new lib.Tween19("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(1097.6,486.7);
	this.instance_34._off = true;

	this.instance_35 = new lib.Tween20("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(1096.8,482.2);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(98).to({_off:false},0).to({_off:true,x:1096.8,y:482.2},7).to({_off:false,x:1097.6,y:486.7},5).to({_off:true,x:1096.8,y:482.2},5).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(98).to({_off:false},7).to({_off:true,x:1097.6,y:486.7},5).to({_off:false,x:1096.8,y:482.2},5).wait(26).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(1));

	// 葉2
	this.instance_36 = new lib.Tween21("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(1086.3,486.8);
	this.instance_36._off = true;

	this.instance_37 = new lib.Tween22("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(1086.5,482.3);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(98).to({_off:false},0).to({_off:true,x:1086.5,y:482.3},7).to({_off:false,x:1086.3,y:486.8},5).to({_off:true,x:1086.5,y:482.3},5).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(98).to({_off:false},7).to({_off:true,x:1086.3,y:486.8},5).to({_off:false,x:1086.5,y:482.3},5).wait(26).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(1));

	// 葉
	this.instance_38 = new lib.葉子();
	this.instance_38.parent = this;
	this.instance_38.setTransform(1093.4,475.7,1,1,15.7);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(98).to({_off:false},0).to({rotation:0,x:1091.9,y:472},7).to({rotation:15.7,x:1093.4,y:475.7},5).to({rotation:0,x:1091.9,y:472},5).wait(33));

	// 主梗
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#008485").ss(1.2,1,1).p("AAfjrQAAAAgOAqQgQA1gLA4QgkCyAdCO");
	this.shape_35.setTransform(1092.9,485.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#008485").ss(1.2,1,1).p("AgPDtQgWh4AWiiQADgUAEgUQAJg6AOgzQANgqgBAA");
	this.shape_36.setTransform(1092.5,484.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#008485").ss(1.2,1,1).p("AgNDuQgThyAUipQACgVAEgUQAIg9AMgwQAKgpAAgB");
	this.shape_37.setTransform(1092.1,484.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#008485").ss(1.2,1,1).p("AgLDuQgQhsARixQACgUADgUQAHg/AKguQAJgpgBAA");
	this.shape_38.setTransform(1091.7,483.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#008485").ss(1.2,1,1).p("AgJDvQgOhnAPi4QACgVACgTQAGhBAIgtQAHgoAAAA");
	this.shape_39.setTransform(1091.3,482.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#008485").ss(1.2,1,1).p("AgHDwQgLhiAMi/QACgVACgUQAEhDAGgqQAGgogBAA");
	this.shape_40.setTransform(1090.9,482);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#008485").ss(1.2,1,1).p("AgFDxQgIhdAKjGQABgWABgTQAEhGADgnQAEgngBgB");
	this.shape_41.setTransform(1090.5,481.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#008485").ss(1.2,1,1).p("AAGjwQABAAgIC9QgHDOAFBW");
	this.shape_42.setTransform(1090,480.6);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#008485").ss(1.2,1,1).p("AgGDwQgJheALjEQABgVACgTQAEhFAEgoQAEgnAAgB");
	this.shape_43.setTransform(1090.6,481.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#008485").ss(1.2,1,1).p("AgJDvQgNhmAOi5QACgVACgUQAGhBAHgsQAHgnAAgB");
	this.shape_44.setTransform(1091.2,482.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#008485").ss(1.2,1,1).p("AgLDuQgShuASivQADgVADgTQAHg/AKguQAJgoAAgB");
	this.shape_45.setTransform(1091.8,483.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#008485").ss(1.2,1,1).p("AgODtQgWh2AWikQADgVADgUQAJg7ANgyQALgnABgC");
	this.shape_46.setTransform(1092.4,484.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#008485").ss(1.2,1,1).p("AgODtQgWh2AWikQADgVADgUQAJg7ANgyQAMgpAAAA");
	this.shape_47.setTransform(1092.4,484.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#008485").ss(1.2,1,1).p("AgLDuQgShuASivQADgVADgTQAHg/AKguQAJgpAAAA");
	this.shape_48.setTransform(1091.8,483.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#008485").ss(1.2,1,1).p("AgJDvQgNhmAOi5QACgVACgUQAGhBAHgsQAHgoAAAA");
	this.shape_49.setTransform(1091.2,482.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#008485").ss(1.2,1,1).p("AgGDwQgJheALjEQABgVACgTQAEhFAEgoQAEgoAAAA");
	this.shape_50.setTransform(1090.6,481.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35}]},98).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},26).to({state:[{t:this.shape_42}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(105).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).wait(33));

	// f01
	this.instance_39 = new lib.f01_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(1083.4,462.1,1,1,15.9,0,0,0.1,0.1);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(98).to({_off:false},0).to({regX:0,regY:0,rotation:0,x:1078.5,y:461.5},7).to({regX:0.1,regY:0.1,rotation:15.9,x:1083.4,y:462.1},5).to({regX:0,regY:0,rotation:0,x:1078.5,y:461.5},5).wait(33));

	// fl2
	this.instance_40 = new lib.fl2_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(1101.6,450.2,1,1,15.9,0,0,0.1,0);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(98).to({_off:false},0).to({regX:0,rotation:0,x:1092.8,y:445.2},7).to({regX:0.1,rotation:15.9,x:1101.6,y:450.2},5).to({regX:0,rotation:0,x:1092.8,y:445.2},5).wait(33));

	// f3
	this.instance_41 = new lib.f3_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(1111.9,470.2,1,1,15.9,0,0,0.1,0.1);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(98).to({_off:false},0).to({regX:0,regY:0,rotation:0,x:1108.1,y:461.5},7).to({regX:0.1,regY:0.1,rotation:15.9,x:1111.9,y:470.2},5).to({regX:0,regY:0,rotation:0,x:1108.1,y:461.5},5).wait(33));

	// b身體
	this.instance_42 = new lib.b身體();
	this.instance_42.parent = this;
	this.instance_42.setTransform(1136.9,501,1,1,0,0,0,-0.1,0.7);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(98).to({_off:false},0).to({rotation:2.2},7).to({rotation:0},5).to({rotation:2.2},5).wait(33));

	// b左手
	this.instance_43 = new lib.b左手();
	this.instance_43.parent = this;
	this.instance_43.setTransform(1104.9,485.9,1,1,-15);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(98).to({_off:false},0).to({rotation:0,x:1105.2,y:482.2},7).to({rotation:-15,x:1104.9,y:485.9},5).to({rotation:0,x:1105.2,y:482.2},5).wait(33));

	// b右腳
	this.instance_44 = new lib.b右腳();
	this.instance_44.parent = this;
	this.instance_44.setTransform(1164.6,553.4,1,1,30);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(98).to({_off:false},0).to({rotation:0,x:1167.9,y:551.6},7).to({rotation:30,x:1164.6,y:553.4},5).to({rotation:0,x:1167.9,y:551.6},5).to({regX:0.1,regY:0.1,rotation:30,x:1164.9,y:552.2},6).to({regX:0,regY:0,rotation:-15,x:1168.4,y:550.6},6).to({regX:0.1,regY:0.1,rotation:30,x:1164.9,y:552.2},7).to({regX:0,regY:0,rotation:-15,x:1168.4,y:550.6},7).wait(7));

	// b左腳
	this.instance_45 = new lib.b左腳();
	this.instance_45.parent = this;
	this.instance_45.setTransform(1130.1,560.2,1,1,0,0,0,0.1,0);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(98).to({_off:false},0).to({regX:0,rotation:-30,x:1136.2,y:560.1},7).to({regX:0.1,rotation:0,x:1130.1,y:560.2},5).to({regX:0,rotation:-30,x:1136.2,y:560.1},5).to({regX:0.1,regY:0.1,rotation:-45,x:1139.3,y:559.1},6).to({regX:0,regY:0,rotation:0,x:1136.2,y:560.1},6).to({regX:0.1,regY:0.1,rotation:-45,x:1139.3,y:559.1},7).to({regX:0,regY:0,rotation:0,x:1136.2,y:560.1},7).wait(7));

	// spoon
	this.instance_46 = new lib.spoon_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(787.3,463.6,1,1,-66,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({x:781.3},3,cjs.Ease.get(1)).to({x:787.3},3,cjs.Ease.get(1)).to({x:781.3},5,cjs.Ease.get(1)).to({rotation:-36.7,x:794.2,y:429.7},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:809.5,y:425.4},5).to({regX:-0.1,regY:0.1,rotation:-66,x:802.3,y:455.6},12).to({x:787.3,y:463.6},4).to({x:781.3},16,cjs.Ease.get(1)).to({rotation:-51,x:780.2,y:454},4,cjs.Ease.get(1)).to({rotation:-36.7,x:794.2,y:429.7},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:809.5,y:425.4},5).to({regX:-0.1,regY:0.1,rotation:-36.7,x:794.2,y:429.7},7).to({rotation:-66,x:787.3,y:463.6},5).to({x:781.3},4,cjs.Ease.get(1)).to({rotation:-36.7,x:794.2,y:429.7},4,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:809.5,y:425.4},5).wait(55).to({regX:-0.1,regY:0.1,rotation:-66,x:787.3,y:463.6},6).wait(1));

	// egg
	this.instance_47 = new lib.egg_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(755.5,509.9,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({rotation:-11,x:739.5,y:508.2},2,cjs.Ease.get(1)).to({rotation:-10.5,x:746,y:507.8},2,cjs.Ease.get(1)).to({rotation:-15,x:755.5,y:509.9},2,cjs.Ease.get(1)).to({x:745.9,y:495.8},5,cjs.Ease.get(1)).to({x:753.8,y:471.3},2,cjs.Ease.get(1)).to({rotation:22.2,x:731.3,y:440.3},5,cjs.Ease.get(1)).to({rotation:-15,x:757.3,y:468.4},4,cjs.Ease.get(1)).to({rotation:-18.7,x:759.1,y:470.9},3,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-33.4,x:758.4,y:489.3},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-15,x:755.5,y:509.9},4,cjs.Ease.get(1)).to({rotation:-11,x:739.5,y:508.2},4,cjs.Ease.get(1)).to({rotation:-15,x:746.5,y:507.9},2,cjs.Ease.get(1)).to({x:755.5,y:509.9},2,cjs.Ease.get(1)).to({x:745.9,y:495.8},4,cjs.Ease.get(1)).to({x:755.5,y:509.9},4,cjs.Ease.get(1)).to({x:745.9,y:495.8},4,cjs.Ease.get(1)).to({x:745.8,y:476.3},2,cjs.Ease.get(1)).to({rotation:22.2,x:731.3,y:440.3},5,cjs.Ease.get(1)).to({rotation:-15,x:754.3,y:477.4},4,cjs.Ease.get(1)).to({rotation:-18.7,x:755.1,y:478.9},3,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-33.4,x:751.4,y:504.3},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-15,x:755.5,y:509.9},4,cjs.Ease.get(1)).to({rotation:-3.5,x:746.8,y:476.4},4,cjs.Ease.get(1)).wait(61).to({rotation:-15,x:755.5,y:509.9},5,cjs.Ease.get(1)).wait(1));

	// Layer 5
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ACcD8QgugBhFgQQhJgShOg4QhNg3guhEQgrg9AAgxIABgNQAHg6BGgXIAigBQAsAFA3AhQAoAVAMgYQAEgHACgiQACgMANgVQARgaAXgLQAUgLAXAFQAwAJA9BLIATAfQAXAnAOAqQAIAaAFAZQAYBxg1BrQgCAPgaAKQgWAIghABIgBAAg");
	this.shape_51.setTransform(743.2,502.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ACPD9QgvgChEgUQhIgWhKg8QhKg7grhGQgog/ADgxQAAgHACgGQAKg6BHgTIAiAAQArAIA1AkQAnAXAOgXQAEgHADgiQACgMAPgUQASgZAYgKQAVgJAXAFQAvALA5BOIARAhQAVAoALArQAHAaAFAYQARBzg6BoQgEAPgZAJQgSAFgYAAIgOAAg");
	this.shape_52.setTransform(731.7,501.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("ACLD9QgvgDhEgVQhHgXhKg9QhJg9gqhHQgmg/AEgxIACgNQALg6BHgSIAiABQArAJA1AkQAmAYAOgXQAEgGAEgiQACgMAQgUQASgZAYgJQAVgJAXAGQAvAMA4BOIARAhQATApALArQAHAaAEAZQAPBzg8BnQgEAPgZAIQgRAFgWAAIgRgBg");
	this.shape_53.setTransform(727.8,501);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ACJD+QgvgEhDgWQhIgXhJg+QhIg9gqhHQgmhAAEgxIACgNQAMg5BIgSIAhABQArAJA1AlQAmAYAOgWQADgHAGgiQACgMAPgUQATgYAYgKQAVgJAXAGQAvANA3BPIARAhQATApALArQAGAaAEAYQAOB0g8BnQgEAOgaAJQgRAEgVAAIgSAAg");
	this.shape_54.setTransform(732.7,500.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("ACID+QgvgEhDgWQhHgYhJg+QhJg9gphHQgmhAAEgxIACgNQAMg5BIgSIAiACQAqAJA1AlQAmAYAOgXQADgHAGgiQACgLAQgUQATgZAXgJQAVgJAYAGQAuANA3BPIARAhQATApALArQAGAaAEAYQAOB0g9BnQgEAOgaAJQgRAEgVAAIgSAAg");
	this.shape_55.setTransform(734.3,500.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("ACXD8QgvgBhEgSQhIgThNg5QhMg5gthFQgpg+ABgwIABgNQAIg6BGgWIAiAAQAsAGA2AiQAoAVANgXQADgHADgiQACgMAOgUQARgaAXgLQAVgKAXAFQAwAJA7BMIASAgQAWAoANAqQAIAaAFAYQAVByg2BqQgDAPgaAKQgVAHgfAAIgEAAg");
	this.shape_56.setTransform(741,502.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AB6EFQgrgBg6gRQgfgJghgQQgtgWgsgjIgggcQg2gzgfg6IgDgEQgig/AHgyIADgNQANgyA8gUIAPgDIASAAIARACQAjAHAoAbIAXANIAQAFQAcAHAIgXIACgHQABgNAEgWQADgNAOgTIADgDQASgXAXgLQAPgHAQgBIAPAAQAhACAhAbQAZATAWAgIASAiIAFAMIAOAmIAKAmQAGAbACAaIABADQAJB1hABkQgHAQgXAMQgPAIgSAFQgJAEgNABIgLAAIgHAAg");
	this.shape_57.setTransform(740.9,498.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAFD5QgfgKgjgSQgugWgrgmQgQgOgPgQQg1g4gcg+IgDgEQgdhDAMgzQACgHADgGQASgxA/gSIAQgBIARABIATADQAjALAnAeQALAIAMAFQAJAEAIABQAbAFAGgbIACgHQABgQAGgUQAFgNAOgRIADgEQAUgWAYgLQAQgHAQgCIAPgBQAlgBAiAaQAaATAVAjIAQAjIAFANQAGATAFAUQAFAVADAUQAEAcgBAbIABADQgCB5hJBhQgLAPgTANQgPAKgSAIQgIAGgOACIgTACQgrAAg8gVg");
	this.shape_58.setTransform(739.1,495.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgGD+QgggMgkgSQgvgXgqgoQgQgPgPgRQg1g7gZhAIgCgFQgbhFARg0IAFgOQAWgvBBgQIAQAAIASABIATAFQAjAMAmAhQAMAJAMAFQAIADAJABQAbADAGgdIABgHQAAgSAIgSQAHgPANgPIAEgEQAVgVAZgMQAPgGARgDIAPgCQAogCAiAYQAcATATAkQAJARAHAUIAEANIAKApQAEAVABAWQADAcgDAcIABADQgJB8hQBdQgNAQgSAOQgPALgRALQgHAHgPADIgUACIgCAAQgqAAg7gWg");
	this.shape_59.setTransform(737.9,493.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgOEBQgggMglgTQgvgYgqgoQgPgQgPgSQg0g8gYhCIgCgEQgZhIATg1IAGgNQAYgvBCgPIARABIASABIATAGQAjANAlAiQAMAKAMAFQAJADAKABQAaACAFgfIABgHQAAgSAJgSQAHgPAOgPIAEgEQAVgVAagLQAPgHARgDIAQgCQApgEAiAXQAcAUATAlQAJARAGAUIAEAOIAJAqQADAVACAWQABAdgDAcIAAADQgNB+hUBcQgOAPgRAPQgPAMgRAMQgHAIgQADIgUACIgFABQgqAAg5gXg");
	this.shape_60.setTransform(737.2,492.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhVDjQhBghg3hCQg2hAgXhEQgZhJAUg0QAXg6BLgRIAjADQAsALAvArQAVARAWACQAdABADgmQAAgkAigiQAjghAtgJQAzgKAoAbQAvAfAUBNIAIAqQAIA0gGA0QgTCniQBqQgKAMghACIgEAAQhBAAhog2g");
	this.shape_61.setTransform(736.9,491.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ABEEOQhBgBhYgwIgHgEQg9ghgyg8IgEgEQgxg8gWhAIgBgFQgWhFATg0QAVg6BEgWIADgBIAdgHIAmgGQAdgDAdABQAVAAAVgDQAYgDATgKIAEgCQAdgNAhgIQAugIAmAHQAwAJAcAgQATAUALAeQAGAdAEAeIABACIADAqQADAwgFAsIgBAFQgWC5iEAvIgSAGQgRAGgXABIgHAAg");
	this.shape_62.setTransform(742.5,472.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AA/EPQhAgBhXgwQhAghg0g/Qgzg9gWhCQgWhHATg1QAUg7BEgYIBCgXQBQgZBFgJQDfgdAjCJIAHA8QAFBIgHA9QgXDGiGAcQgfAJggAAIgDAAg");
	this.shape_63.setTransform(744.4,466.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgTEZQgagLgbgPQg9ghgyg1IgLgLQgzg4gWg8IgFgNQgYhCAMg+QALhAAyglIALgJQAUgRAWgOQAcgRAegLQAsgOAtAAQAWgBAVADIAjAJQAxAPAdAhQAYAaAUASQAMALAKADQALAFAMAKIAOARIAOATQAKARAJATQAQAhADAmIABAIQAAAogOAmQgcBXheA6QgPAJgQAHQgeAPgbALIgdAKQgOAIgNgBIgIABQgIAAgMgDg");
	this.shape_64.setTransform(741.8,455.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgHEuQgbgMgagPQhAgjgzgzIgLgLQg3g6gWg7IgFgMQgZhBAEhEQAFhEAkgvIAIgMQAQgXATgRQAZgYAegMQArgSAwAEQAWACAWAGIAhAQQAqAZAVAuQASAjAUAQQANAKANgFQAOgDAQACIAWAIQAMAFALAHQARAKAQAQQAcAcAHAlIACAKQAEAlgSArQgaBHhpBNIgdAUQgcAUgXATIgXAWQgMAQgJADQgIAFgNAAIgHgBg");
	this.shape_65.setTransform(739.9,447.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AABE9QgbgMgagPQhCglgzgyIgMgLQg6g7gWg6IgFgNQgag+AAhJQAAhHAag3IAGgNQANgbARgVQAWgbAegPQAqgTAyAHQAWADAYAIIAgAWQAlAgAPA4QANAqAUANQAPAKAPgLQAOgJAUgDQANgBAQACQAOACAOAEQAWAHAVANQAkAXALAlIADALQAHAmgVArQgYA8hyBbIgcAXQgaAYgTAZQgLAOgJAPQgLAXgGAFQgJAJgRAAIgCAAg");
	this.shape_66.setTransform(738.6,442);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgvErQhCgng1gxIgLgLQg8g7gWg6IgFgNQgbg+gChKQgDhKATg6IAFgPQAMgeAPgWQAVgeAegPQAqgVAzAJQAWADAYAKIAfAZQAiAlALA9QAMAuATAMQAQAKAQgPQAPgNAXgFQAOgDARgBQARABAPACQAaAEAXAMQAqAVAMAlIAEALQAJAlgXAuQgYA0h2BkQgPAMgMAMQgZAagSAdQgJARgHARQgLAagEAHQgJAMgUAAQgbgNgagOg");
	this.shape_67.setTransform(737.7,438.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AikDWQhGhBgYg/QgghDgDhTQgFhTAXhCQAZhJAzgbQA7gfBQAhIAfAaQAhAnAKA/QALAvATALQAQAKAQgPQAagYAugCQAtgCAnATQArATAOAmQAQApgaA1QgYAyh4BmQg9AzgXBDQgKAbgEAHQgJANgUAAQhjgvhJhEg");
	this.shape_68.setTransform(737.4,437.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgKEoQgbgLgbgPQg/gjgzgzIgKgMQg3g5gWg7IgFgNQgYhBAGhCQAHhDAngsIAJgLQARgVAUgRQAagWAegMQArgRAvADQAWABAXAGIAhAOQAsAWAXArQAUAgATAQQANALANgDQAMgBAQAFIAUAKIAUAOQAPAMAOARQAZAdAGAlIABAKQAEAmgSApQgaBLhmBIIgeATIg0AkIgZASQgNAOgKACQgHADgKAAIgKgBg");
	this.shape_69.setTransform(742,448.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAFEVQgMAAgQgFQgagLgbgPQg9gggxg1IgKgLQgyg5gWg7IgFgNQgXhEANg7QAPg/A3ghIAMgHQAWgPAXgMQAdgPAfgKQAsgNAsgCQAVgBAVABIAkAHQA0AKAgAcQAaAWAUAUQALALAKAGQAKAIAKANIALAVIAKAXQAIASAGAUQALAlABAkIAAAJQgBAogNAlQgcBdhZAzQgQAIgQAGQgfANgdAIQgQAEgQACQgJACgJAAIgKAAg");
	this.shape_70.setTransform(745.2,456.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAdENQgQgBgPgFQgOgDgPgGQgagKgbgPQg7gfgwg2IgKgMQgvg3gWg8IgFgNQgXhFASg3QATg8BBgaIANgGIAygUQAggLAegIQAtgMAqgEQAWgDAUAAQATAAASABQA4AEAmATQAeAPAUAWQAKALAIAMQAJAOAGARIAFAcIAFAcIAFAtQADAogCAkIgBAIQgDApgLAiQgeBphRAmQgQAHgSAEQgfAKghACIgHAAQgOAAgOgCg");
	this.shape_71.setTransform(747.1,461.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhODlQhBgfg2g9Qg2g8gYhCQgYhFAQg2QATg8BDgaIBBgZQBPgcBEgLQDeglAoCHIAJA8QAHBHgEA9QgQDIiFAgQggALgiAAIgDAAQhAAAhVgqg");
	this.shape_72.setTransform(748.5,464.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AhIDoQhCgdg3g8Qg3g6gZhCQgbhEAQg3QARg8BDgcIBAgaQBPgeBDgNQDdgpAsCGIAKA7QAJBIgEA9QgLDIiEAjQggALgiABIgHAAQg/AAhTgng");
	this.shape_73.setTransform(748.9,465.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhGDpQhCgdg4g7Qg3g6gahBQgbhFAPg2QARg9BCgcIBBgbQBOgeBEgNQDcgsAtCHIAKA7QAKBHgDA9QgKDIiEAkQggAMgiABIgJABQg+AAhSgng");
	this.shape_74.setTransform(749.1,465.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgtD1QhFgWg9g2Qg7g0ggg+QgghBAJg3QALg9A/gjIA9gfQBLgmBDgTQDVhAA4CCIAQA5QAQBFACA9QAJDGh/AwQgeAOgiAFQgOACgPAAQg3AAhGgag");
	this.shape_75.setTransform(748.2,472.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgcD/QhGgRhAgyQg/gvgkg8QgmhAAGg2QAGg+A9gnIA7gkQBIgqBBgZQDPhOBCB8IAUA4QAVBEAHA+QAXDEh8A5QgdARghAHQgVAEgZAAQgxAAg9gRg");
	this.shape_76.setTransform(747.7,477.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgPEGQhHgOhDguQhCgsgog6Qgog+ADg3QADg/A7gpIA4goQBGguBAgcQDMhZBIB5IAXA3QAZBEAKA9QAiDDh6BAQgcASghAIQgbAIgiAAQgrAAg0gMg");
	this.shape_77.setTransform(747.3,481.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgIEKQhIgMhEgrQhEgrgpg5Qgqg9ABg3QABg/A6gsIA3gpQBFgwA/geQDKhgBMB3IAYA3QAbBDAMA9QAoDCh3BEQgcATghAKQgfAJgnAAQgoAAgvgJg");
	this.shape_78.setTransform(747.1,483.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgFELQhIgLhFgrQhEgqgqg4Qgrg9AAg3QABg/A5gsIA3gqQBFgxA/gfQDJhiBNB3IAZA2QAcBDAMA9QAqDCh3BFQgbATghAKQghAKgqAAQgmAAgsgIg");
	this.shape_79.setTransform(747,484.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAzEDQgegDgfgKQgzgNgygeQgQgJgQgLQg/gsgog3IgBgBQgqg9AAg0IAAAAIABgOQAGg2A3ggIALgGIAegMIASgGQAmgMAngBQAhAAAUgRIACgCQAMgJALgRIAXgVQAYgRAagHQAXgHAWADQA7AHAuA+IAGAJIASAiIAEAJQASAnAMAmQAHAYAFAXIABAEQAbCEg6BZQgJAQgVALQgHAEgHADQgSAJgVAFIgXAEQgSACgUAAQgaAAgdgEg");
	this.shape_80.setTransform(745.4,492.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAuD3QgegGgdgLQgwgSgxggIgegVQg8gtgng3IgBgBQgqg8ABgzIABgNQAGg1A5gcIALgFIAhgGIASgBQAlAAAqAOQAkAMAQgVIACgCQAHgKAFgYQAGgKANgRQAUgWAYgKQAWgIAXADQAzAIA0BBIAGAIIATAhIAFAJQASAlAMAlQAIAYAFAXIABAEQAZB6g3BjQgGAPgXALIgPAFQgSAGgWACQgLACgMAAIgIAAQglAAgvgJg");
	this.shape_81.setTransform(744.2,498);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("ACGD8QgogCg0gMQgdgHgcgMQgvgUgwghIgdgVQg6gvgmg3IgBgBQgpg8AAgxIABgNQAGg1A7gZIALgEIAigDIATADQAkAGArAXQAnATANgXIABgDQAEgJADgcQADgLANgUQASgaAXgKQAVgKAXAEQAvAIA3BDIAGAIIAUAgIAFAJQATAjAMAmQAIAXAFAXIABAEQAXBzg0BpQgEAPgZALQgHADgIABQgSAFgWAAIgIAAIgQAAg");
	this.shape_82.setTransform(743.5,501.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("ACVD8QgvgBhEgSQhJgVhLg6QhMg5gshGQgpg+ACgxQAAgHABgGQAJg6BGgUIAiAAQArAGA3AjQAnAWANgXQAEgHADgiQACgMAOgVQARgZAYgLQAVgKAXAGQAvAKA6BMIATAgQAVAoANArQAHAaAFAYQAUByg4BqQgDAPgZAJQgTAGgbAAIgKAAg");
	this.shape_83.setTransform(736.5,501.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("ACMD9QgvgDhEgUQhHgXhKg9QhJg8gqhHQgnhAAEgxIACgNQAKg5BIgSIAhABQArAIA1AkQAnAYAOgXQAEgHAEgiQACgLAPgUQASgZAYgKQAVgJAXAGQAvAMA4BOIARAhQAUApALArQAHAaAEAYQAPBzg7BoQgDAOgaAJQgRAFgWAAIgRgBg");
	this.shape_84.setTransform(728.7,501.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("ACYD8QgvgBhEgSQhJgThMg5QhNg5gthEQgpg+ABgxIABgNQAIg6BGgWIAiAAQArAGA3AiQAoAVAMgXQAEgHADgiQACgMANgVQASgaAXgKQAUgKAYAEQAvAKA7BMIATAgQAWAnANArQAIAZAFAZQAVByg1BqQgEAPgZAKQgVAHgfAAIgEAAg");
	this.shape_85.setTransform(732.6,500.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AApDrQhJgShNg4QhOg3guhEQgrg9AAgxIABgNQAHg6BGgXIAigBQAsAFA3AhQAoAVAMgYQAEgHACgiQACgMANgVQARgaAXgLQAUgLAYAFQAvAIA9BLIATAgQAXAnAOAqQAIAaAGAZQAXBxg0BrQgDAPgaAKQgWAIghAAQgvAAhFgQg");
	this.shape_86.setTransform(734.2,500.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AARD1QgfgKgigQQgtgWgsgkQgQgNgPgPQg2g1gfg7IgCgEQghhAAIgyQABgHADgGQAOgyA9gUIAPgCIASAAIASACQAjAJAnAbQAMAIALAFQAJAEAIACQAbAGAIgYIABgHQABgOAFgWQAEgNAOgSIADgDQASgXAYgLQAPgHAQgBQAHgBAIABQAiABAhAaQAaAUAVAhIASAiIAFAMQAHATAGATQAGATADAUQAGAbABAbIABADQAGB2hDBjQgIAPgVAMQgPAJgTAGQgIAEgOACIgSABQgqgBg7gSg");
	this.shape_87.setTransform(740.4,497.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgBD8QgggLgjgSQgvgXgqgmQgQgPgPgRQg1g5gbg/IgCgFQgchEAPg0IAFgNQAUgwBAgRIAQgBIASACIASAEQAkALAmAgQAMAJALAFQAJADAJABQAbAEAGgcIABgHQABgRAHgTQAGgOANgQIAEgEQAUgWAZgLQAPgHARgDIAPgBQAngBAhAYQAbAUAUAjQAJARAHATIAFANIALAoQAEAVACAVQADAcgBAcIAAADQgFB6hOBfQgLAQgTANQgPALgRAKQgIAGgPADQgIABgLAAIgCAAQgqAAg7gVg");
	this.shape_88.setTransform(738.4,494.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgMEBQgggNglgSQgvgYgqgoQgPgQgPgRQg1g9gYhCIgCgDQgZhIASg0IAGgOQAYgvBCgPIARAAIASACIASAFQAkAOAlAhQAMAKAMAFQAJADAJABQAaACAGgeIABgIQAAgSAJgSQAHgOAOgPIADgEQAWgVAZgMQAQgGARgEIAPgBQApgEAiAXQAcAUATAlQAJAQAGAVIAFANIAJAqIAEArQACAdgDAdIAAADQgMB9hUBcQgOAPgRAPQgPAMgQAMQgIAHgPADQgJACgLABIgGAAQgpAAg5gWg");
	this.shape_89.setTransform(737.3,492.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAJD4QgegLgjgRQgugWgrglIgfgeQg1g2geg9IgCgEQgfhCALgyIAEgOQARgxA+gSIAQgCIARABIASADQAjAJAoAdQALAIAMAGQAIADAIACQAcAFAGgaIACgHQABgPAGgUQAFgOANgRIADgEQAUgWAYgLQAPgHAQgCIAPAAQAkgBAiAaQAZAUAVAiQAJAQAIATIAFAMIAMAnIAJAoQAEAbAAAcIABADQABB3hHBiQgJAPgVANQgPAKgRAHQgJAFgNACIgTABQgrAAg8gTg");
	this.shape_90.setTransform(739.6,496.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("ACAECQgrgBg6gQQgegJghgQQgtgVgsgiIgggbQg2gxghg5IgDgEQgkg+AFgwQABgHACgGQALgzA7gVIAOgEIASAAIARABQAjAHApAYIAWANIAQAGQAbAIAJgWIACgHIAEgjQADgNAOgTIADgDQARgXAXgLQAPgHAQgBIAOAAQAgADAhAcQAYATAXAgIASAhIAGAMIAPAkIALAmQAGAaAEAaIAAADQANBzg8BmQgGAPgXAMQgPAHgTAEQgJADgNABIgIAAIgJAAg");
	this.shape_91.setTransform(741.6,499.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("ACJD9QgqgCg5gPQgggHgfgPQgsgUgsghQgRgMgQgNQg2gvgkg1IgDgFQgng7ACgwIABgNQAIgzA5gXIAOgFIARAAIARgBQAjAFApAXIAWAMIAPAGQAcAKAKgUIACgHIAEgjQACgMANgUIACgDQARgYAWgLQAOgHAQAAIAOABQAdAEAiAeQAWATAYAeIATAgIAGALQAJARAHATQAIARAFATQAIAZAFAZIABADQAUBxg2BpQgEAPgZAKQgPAGgTACIgVACIgRAAg");
	this.shape_92.setTransform(742.8,502);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgSEZQgbgLgagPQg+ghgyg1IgKgLQgzg4gWg8IgFgNQgYhCALg+QALhAAyglIALgJQAUgRAWgOQAcgRAfgLQAsgOAtAAQAWgBAUADIAjAJQAyAPAdAhQAXAaAUASQAMALALADQALAFALAKIAOARIAOATQALARAJATQAQAhACAmIABAIQAAAogOAmQgcBXheA6QgPAJgQAHQgdAPgcALIgdAKQgOAIgMgBIgIABQgJAAgLgDg");
	this.shape_93.setTransform(736.7,458.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgHEuQgbgMgbgPQg/gjgzgzIgLgLQg4g6gWg7IgFgMQgZhBAFhEQAFhEAjgvIAJgMQAQgXATgRQAZgYAdgMQArgSAwAEQAWACAXAGIAgAQQArAZAVAuQASAjATAQQAOAKANgFQANgDARACIAWAIQAMAFAKAHQASAKAPAQQAcAcAIAlIACAKQAEAlgSArQgaBHhpBNIgeAUQgbAUgXATIgXAWQgNAQgIADQgJAFgMAAIgHgBg");
	this.shape_94.setTransform(737.1,449.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAAE9QgagMgagPQhCglg0gyIgLgLQg6g7gWg6IgGgNQgZg+AAhJQAAhHAZg3IAHgNQANgbAQgVQAXgbAegPQAqgTAyAHQAWADAXAIIAhAWQAkAgAPA4QAOAqAUANQAOAKAPgLQAPgJAUgDQANgBAPACQAPACAOAEQAWAHAUANQAlAXALAlIADALQAHAmgVArQgZA8hxBbQgPALgNAMQgaAYgUAZQgKAOgJAPQgLAXgGAFQgJAJgSAAIgCAAg");
	this.shape_95.setTransform(737.3,442.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgvErQhDgng0gxIgLgLQg8g7gWg6IgGgNQgag+gChKQgEhKAUg6IAFgPQALgeAQgWQAVgeAegPQApgVA0AJQAWADAXAKIAgAZQAiAlALA9QAMAuATAMQAPAKAQgPQAQgNAWgFQAPgDARgBQARABAPACQAaAEAXAMQApAVANAlIAEALQAJAlgXAuQgYA0h3BkQgOAMgMAMQgaAagRAdQgKARgHARQgKAagEAHQgKAMgTAAQgbgNgagOg");
	this.shape_96.setTransform(737.4,438.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgKEoQgbgMgagOQhAgjgygzIgLgMQg2g5gWg7IgFgNQgZhBAHhCQAGhDAogtIAJgKQARgWAUgQQAZgWAegMQAsgRAvADQAWABAWAFIAhAPQAsAWAYArQATAgAUAQQANALAMgDQANgBAPAEIAUALQAKAGAKAHQAQANANAQQAZAeAGAlIACAKQADAmgRApQgbBLhmBIIgeATIg0AjIgZATQgMAOgKACQgIADgKAAIgKgBg");
	this.shape_97.setTransform(740.7,452.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAdENQgQgBgPgEIgegJQgZgLgbgPQg7gfgxg2IgKgLQgvg3gWg8IgEgNQgXhGASg3QATg8BBgaIANgFIAygVQAggLAegIQAtgLApgFQAWgCAVgBQATAAARACQA5ADAmATQAeAPAUAXQAKALAIALQAJAOAGARIAFAcIAFAcQADAXACAWQADAogCAlIgBAIQgEApgKAiQgeBohRAmQgQAHgSAEQgfALghABIgKAAQgMAAgNgCg");
	this.shape_98.setTransform(744.3,469.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AhODkQhBgeg2g9Qg2g8gYhCQgYhFAQg2QATg8BDgaIBBgZQBPgcBEgLQDeglAoCHIAJA8QAHBHgEA9QgQDIiFAgQggALgiAAIgDAAQhAAAhVgrg");
	this.shape_99.setTransform(745,473.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AhIDoQhCgdg4g8Qg2g6gahCQgahEAQg3QAQg8BDgcIBBgaQBOgdBEgNQDdgqArCGIAKA7QAJBIgDA9QgLDIiFAjQgfALgiABIgJAAQg+AAhSgng");
	this.shape_100.setTransform(745.1,473.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AA0DwQgzgGg6gZQgagLgZgOQglgXgigeQgpgkgcgoQgLgQgJgQQgig+AKgzIAAgBQALg6BEgbIAagJIAmgNIAwgOQAygOAtgIQAngHAjgBQBlgEA0ApQAYASAOAbQALAZAIAbIACAHIAIAsQAGAoABAkIAAAKQAAAggEAcQgNBIguAlQgTAQgXAKQgRAHgTAEIgYAFQgUADgUAAIgFAAQgQAAgRgDg");
	this.shape_101.setTransform(743.1,483.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("ABfDdIgmgDQgygHg3gWQgZgJgYgNQgngUghgaQgqgggfgkQgMgPgKgOQgng5AGgxIAAAAQAGg5BGgZIAZgIIAkgLIAvgMQAxgMAtgGQAmgGAigBQBhgDA2AgQAaAPARAXQAQAVAKAaIACAGIALAqQAJAoADAiIAAAKQACAggEAaQgJBGgzAhQgUANgXAIQgQAGgTADQgMACgNABIgcABIgKAAg");
	this.shape_102.setTransform(741.6,491);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("ABjDNIglgEQgygGg1gUQgYgJgZgMQgmgSgigXQgrgdghghQgNgOgKgNQgsg2AEgvQADg4BGgXIAZgHIAlgKIAugKQAwgLAsgFQAlgFAiAAQBegDA3AaQAcAMATAUQATATAMAZIACAGIANAoQALAoAEAhIABAJQADAggDAZQgIBFg2AdQgUAMgXAHQgQAEgTADIgYACIgJAAIgdgBg");
	this.shape_103.setTransform(740.5,496.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("ABlDDIgkgEQgygGg0gSQgYgJgZgLQgmgSgigUQgrgcgiggQgOgMgLgNQgtg0ABguQACg3BHgXIAYgGIAkgJIAugJQAwgKAsgEQAkgFAiAAQBcgDA4AXQAdALAUASQAUASAOAXIADAGIANAoQAMAnAFAgIABAKQAEAfgCAYQgHBEg5AcQgUALgXAGQgQADgTADIgYABIglgCg");
	this.shape_104.setTransform(739.8,499.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("ABCC8QhIgJhOgjQhZgog+g3QhGhCABg4QABg/BfgVIBRgRQBagRBIgBQBbgDA5AWQA9AWAaA0IAOAnQAOAtAFAkQAEAfgCAYQgGBEg6AbQgUALgXAFQgaAHghAAQggAAgpgGg");
	this.shape_105.setTransform(739.6,500.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("ACLDaQgbAAgigGQgYgDgZgGQgzgMg2gbQgWgMgVgNQg9glgtguIgVgZQgug4AAgwIABgNQAIg0BIgVIAOgCIASgDQAggCAiAEIAgAEQAiAHAUgMQAMgFAMgPIAXgQIAFgCQAUgKAVgEQAWgEAVAEQAfAFAdARQAdAPAYAaQALAOAKAPIAJAPIAQAoIAIAaQAIAZAEAXIABAIQAFAegCAbQgDBCgrAqQgJAKgKAIQgGAGgJAEIgTAGQgRAFgXAAIgOAAg");
	this.shape_106.setTransform(741.2,501.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("ACVDsQgcAAgjgFIgygKQg0gNg2geQgWgMgWgPQg9gpgrgxIgVgaQgsg7AAgxIABgNQAHg3BHgWIAPgBIATgCQAfABAkAMQAPAEAQAHQAlAOAQgSQAHgGAHgaQAFgJANgQIAFgFQARgQAVgHQAVgHAWAEQAdAFAeAWQAaASAaAdIAUAfIAIAPIASAoIAJAaQAIAZAFAYIABAIQAFAeAAAdQgBBBghA0IgPAXQgEAIgKAGQgHAEgKAEQgSAFgXABIgHABIgHgBg");
	this.shape_107.setTransform(742.3,502.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("ABbDyQgYgEgbgGQg0gNg2ggQgXgNgVgPQg+grgqgzQgLgNgJgPQgrg8gBgxIABgNQAIg5BGgXIAOAAIAUgCQAeAEAlAQQAPAGAQAJQAnATANgWQAFgHADggQADgLANgUIAFgGQAQgUAUgJQAVgKAWAFQAcAFAgAZQAYATAZAgIAUAfIAJAQIASAoIAJAaQAJAZAEAZIACAHQAFAfAAAdQABBAgbA8IgNAaQgCAIgKAHQgGAFgLAEQgRAHgYAAIgOABQgcAAgkgGg");
	this.shape_108.setTransform(743,502.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AApD4IgWgEQg+gPhLg4IgNgLQg7gsgog/IgLgRQgmg+gDg3IAAgOQABg7AtggIAKgIQAPgGARgEQAegGAnAJIAgANIAEACQAiASASgBQAGACAGgJIAEgBQAHAAAOgKIAAAAQAVgKAPgWIAFgGQAPgQAXgFQAIgCAIgBQAjgEApAWQAQAHAOALQAOALANAPIAJAMQAWAfALAoQAFAUAEAWIABALIADAdQACAxgMAxQgMA0gbAvQgHAQgVANQgVAPgeAJQgoAOg3AEIgKABIgJgBg");
	this.shape_109.setTransform(742,489.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAREAQg8gMhSg+IgNgLQg6gtgohGIgKgRQgjg/gGg8IgBgOQgCg/AigmIAKgKQANgKAQgIQAfgMAqAEIAhALIAEACQAeAQAWAOQAJAIAJAFIAFADQALAIAQgBIABgBQAYAAANgeIADgIQALgTAWgNIAQgHQAmgRAsAKQATADAQAIQARAJAPANIAKALQAZAeAKAsQAFAUADAXIAAALIACAeQgCA0gNAwQgQA2gdAvQgKARgSAPQgVATgaAPQgpAZg1APQgHADgMABIgYgDg");
	this.shape_110.setTransform(741.1,480.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAQEJQg7gKhVhBIgOgMQg5gtgphKIgJgSQghg+gIg/IgBgPQgEhBAcgpQAEgHAFgFQAMgNAQgJQAegQAsAAIAiAKIAFACQAbAPAZAYIAUAYIAHAGQANANARADIABAAQAaAFAMgjIACgIQAJgWAWgRIAPgLQAogXAuADQAUAAASAGQATAHAPANIAMALQAaAcALAvQAEAUACAXIAAAMIAAAfQgDA0gPAxQgRA3gfAuQgMASgQAQQgUAWgZATQgoAfg1AVQgHAFgMABQgLAAgOgCg");
	this.shape_111.setTransform(740.6,475);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAQENQhAgLhfhMQg5gtgphMQgohIgJhIQgKhNAegvQAig0BMgCIAiAKQAqATAlA0QARAVAVAGQAcAHALglQAHgjApgaQAogaAuAAQA0AAAiAjQAnAoAFBPIAAArQgEA0gPAyQg0CgiiBLQgJAHgRAAIgTgCg");
	this.shape_112.setTransform(740.4,473);
	this.shape_112._off = true;

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AASD7Qg9gNhPg8IgNgLQg6gsgohEQgGgIgFgJQgkg+gFg7IAAgOQgBg9AmgkIAKgJQANgKARgGQAegKApAGIAhAMIADACQAgAQAVAJQAIAGAIAAIAEACQAKAFAPgEIABgBQAXgDANgcIAEgHQANgSAWgKQAIgEAIgCQAlgMArAOQARAFAQAJQAQAJAOAOIAKAMQAYAeAKAqQAGAUACAXIABALIACAeQAAAygNAxQgOA1gdAvQgJARgTAOQgVASgbANQgpAVg1ALQgIACgMAAQgKAAgNgDg");
	this.shape_113.setTransform(741.4,484);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AApD2IgWgEQg9gQhKg3IgNgKQg7gtgog9IgLgRQgng9gDg3IAAgNQADg6AugeIALgIIAggJQAfgDAmAKIAgAOIADABQAjATARgFQAGAAAFgMIAEgCQAFgCAPgMIAAAAQATgMAQgVIAGgFQAPgPAXgEIARgBQAigBAoAZQAPAIAOALQANANANAOIAIANQAVAfAMAnQAFAUAEAWIACALIADAdQACAxgLAwQgLA0gbAvQgGAQgWANQgVANgeAHQgpAMg3ABIgHAAIgMgBg");
	this.shape_114.setTransform(742.2,492.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AA8D0IgSgDIgWgFQg+gShGg0IgNgJQg7gtgog4IgMgRQgpg9gBg0IAAgNQAGg3A1gaIALgGIAhgFQAeABAmANIAfAQIACABQAmAUAPgPQAEgDADgVIACgGQAEgHANgQIAAgBQARgSASgPIAFgFQATgMAXABIARACQAhAHAmAgQANAKANAOIAWAdIAIAOQASAgAMAlQAGAUAEAUIADALIADAbQAFAygJAvQgKAzgYAvQgFAQgYALQgWALgfADQgTACgWAAQgZAAgfgDg");
	this.shape_115.setTransform(742.8,497.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AA8DwIgTgEIgVgFQg+gUhEgxIgNgJQg7gsgog2IgMgRQgqg9AAgyQgBgHABgGQAGg1A5gYIANgFIAhgCQAfADAkAQQAPAHAPAJIACABQAoAVANgWQADgFADgZIABgIQACgLANgTIAAgBQAPgVASgMIAHgEQAUgLAXAEQAJABAIADQAgALAlAlQAMAMAMAOIAUAfIAIAOQARAhAMAjIALAoIADALIAEAbQAGAxgJAvQgIAxgYAwQgDAPgZALQgXAJghABIgHAAQgmAAgzgKg");
	this.shape_116.setTransform(743.1,501.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51}]}).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62,p:{x:742.5,y:472.9}}]},1).to({state:[{t:this.shape_63,p:{x:744.4,y:466.2}}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70,p:{x:745.2,y:456.4}}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_63,p:{x:747.9,y:463.3}}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74,p:{x:749.1,y:465.8}}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86,p:{x:734.2,y:500.7}}]},1).to({state:[{t:this.shape_86,p:{x:741,y:502.2}}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62,p:{x:736.5,y:476.7}}]},1).to({state:[{t:this.shape_63,p:{x:736.4,y:471.2}}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_70,p:{x:742.9,y:463.2}}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_63,p:{x:744.9,y:472.3}}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_74,p:{x:745.1,y:473.8}}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_51}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_51).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_112).wait(81).to({_off:false},0).wait(61).to({_off:true},1).wait(5));

	// v1
	this.instance_48 = new lib.v1_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(784.9,504.8,1,1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({regX:0.1,regY:0.1,rotation:9.5,x:769.2,y:505.3},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:10,x:775.6,y:505.1},2,cjs.Ease.get(1)).to({rotation:5.5,x:784.9,y:504.8},2,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:11.3,x:768.7,y:495.8},5,cjs.Ease.get(1)).to({rotation:-9.8,x:774.1,y:477.8},2,cjs.Ease.get(1)).to({regX:0,regY:0.2,rotation:-24.5,x:776.8,y:468.2},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-9.8,x:782.1,y:472.9},4,cjs.Ease.get(1)).to({rotation:-13.5,x:784.3,y:474},3,cjs.Ease.get(1)).to({regY:0.2,rotation:-28.3,x:783.5,y:485.9},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:5.5,x:784.9,y:504.8},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:9.5,x:769.2,y:505.3},4,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:5.5,x:775.9,y:502.8},2,cjs.Ease.get(1)).to({x:784.9,y:504.8},2,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:11.3,x:768.7,y:495.8},4,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:5.5,x:784.9,y:504.8},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:11.3,x:768.7,y:495.8},4,cjs.Ease.get(1)).to({rotation:-9.8,x:774.1,y:477.8},2,cjs.Ease.get(1)).to({regX:0,regY:0.2,rotation:-24.5,x:776.8,y:468.2},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-9.8,x:782.1,y:472.9},4,cjs.Ease.get(1)).to({rotation:-13.5,x:784.3,y:474},3,cjs.Ease.get(1)).to({regY:0.2,rotation:-28.3,x:783.5,y:485.9},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:5.5,x:784.9,y:504.8},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:22.8,x:779.1,y:482.9},4,cjs.Ease.get(1)).wait(61).to({regX:0,regY:0,rotation:5.5,x:784.9,y:504.8},5,cjs.Ease.get(1)).wait(1));

	// v2
	this.instance_49 = new lib.v2_1();
	this.instance_49.parent = this;
	this.instance_49.setTransform(763.9,484.9,1,1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).to({regX:0.1,regY:0.1,rotation:-5.5,x:749.7,y:484},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-5,x:756.3,y:483.6},2,cjs.Ease.get(1)).to({rotation:-9.5,x:763.9,y:484.9},2,cjs.Ease.get(1)).to({rotation:-3.7,x:749.7,y:482.1},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:742.6,y:448.2},2,cjs.Ease.get(1)).to({rotation:5.5,x:769,y:426.3},5,cjs.Ease.get(1)).to({rotation:-24.8,x:757.6,y:443.3},4,cjs.Ease.get(1)).to({rotation:-43.5,x:750.9,y:446.4},3,cjs.Ease.get(1)).to({regY:0.3,rotation:-73.3,x:744.3,y:467.9},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:763.9,y:484.9},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-5.5,x:749.7,y:484},4,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:754.9,y:482.9},2,cjs.Ease.get(1)).to({x:763.9,y:484.9},2,cjs.Ease.get(1)).to({rotation:-3.7,x:749.7,y:482.1},4,cjs.Ease.get(1)).to({rotation:-9.5,x:763.9,y:484.9},4,cjs.Ease.get(1)).to({rotation:-3.7,x:749.7,y:482.1},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:742.6,y:448.2},2,cjs.Ease.get(1)).to({rotation:-9.5,x:775,y:426.3},5,cjs.Ease.get(1)).to({rotation:-39.8,x:750.6,y:443.3},4,cjs.Ease.get(1)).to({rotation:-58.5,x:751,y:446.4},3,cjs.Ease.get(1)).to({regY:0.3,rotation:-58.3,x:749.3,y:473.9},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:763.9,y:484.9},4,cjs.Ease.get(1)).to({regY:0.1,rotation:-37.2,x:764.3,y:444.9},4,cjs.Ease.get(1)).wait(61).to({regY:0,rotation:-9.5,x:763.9,y:484.9},5,cjs.Ease.get(1)).wait(1));

	// v03
	this.instance_50 = new lib.v03_1();
	this.instance_50.parent = this;
	this.instance_50.setTransform(792.3,528.1,1,1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).to({rotation:-5.5,x:774.9,y:529},2,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-5,x:781.3},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:792.3,y:528.1},2,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-3.7,x:773.7,y:528},5,cjs.Ease.get(1)).to({rotation:-24.8,x:753.6,y:508.6},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:761.1,y:503.3},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-24.8,x:761.6,y:503.7},4,cjs.Ease.get(1)).to({rotation:-28.5,x:765.8,y:506.1},3,cjs.Ease.get(1)).to({regY:0.2,rotation:-43.3,x:773.7,y:521.7},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:792.3,y:528.1},4,cjs.Ease.get(1)).to({rotation:-5.5,x:774.9,y:529},4,cjs.Ease.get(1)).to({rotation:-9.5,x:783.3,y:526.1},2,cjs.Ease.get(1)).to({x:792.3,y:528.1},2,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-3.7,x:773.7,y:528},4,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:792.3,y:528.1},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-3.7,x:773.7,y:528},4,cjs.Ease.get(1)).to({rotation:-24.8,x:753.6,y:508.6},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:761.1,y:503.3},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-24.8,x:761.6,y:503.7},4,cjs.Ease.get(1)).to({rotation:-28.5,x:765.8,y:506.1},3,cjs.Ease.get(1)).to({regY:0.2,rotation:-43.3,x:773.7,y:521.7},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:792.3,y:528.1},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.2,rotation:7.8,x:768.7,y:511.6},4,cjs.Ease.get(1)).to({rotation:7.8},61,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:792.3,y:528.1},5,cjs.Ease.get(1)).wait(1));

	// v04
	this.instance_51 = new lib.v04_1();
	this.instance_51.parent = this;
	this.instance_51.setTransform(732,478.1,1,1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).to({rotation:-5.5,x:718.3,y:474.9},2,cjs.Ease.get(1)).to({rotation:-5,x:725,y:474.2},2,cjs.Ease.get(1)).to({rotation:-9.5,x:732,y:478.1},2,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-3.7,x:723.6,y:464.2},5,cjs.Ease.get(1)).to({rotation:5.2,x:722.7,y:435.9},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:747.7,y:400.6},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:730.7,y:431},4,cjs.Ease.get(1)).to({rotation:1.5,x:730.3,y:435.6},3,cjs.Ease.get(1)).to({regY:0.3,rotation:-13.3,x:721.4,y:462.6},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:732,y:478.1},4,cjs.Ease.get(1)).to({rotation:-5.5,x:718.3,y:474.9},4,cjs.Ease.get(1)).to({rotation:-9.5,x:723,y:476.1},2,cjs.Ease.get(1)).to({x:732,y:478.1},2,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-3.7,x:723.6,y:464.2},4,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:732,y:478.1},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-3.7,x:723.6,y:464.2},4,cjs.Ease.get(1)).to({rotation:5.2,x:722.7,y:435.9},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:747.7,y:400.6},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:730.7,y:431},4,cjs.Ease.get(1)).to({rotation:1.5,x:730.3,y:435.6},3,cjs.Ease.get(1)).to({regY:0.3,rotation:-13.3,x:721.4,y:462.6},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:732,y:478.1},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:7.8,x:731.3,y:441},4,cjs.Ease.get(1)).to({rotation:7.8},61,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:732,y:478.1},5,cjs.Ease.get(1)).wait(1));

	// v05
	this.instance_52 = new lib.v05_1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(711.9,487.2,1,1,50.5,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_52).to({regY:0,rotation:54.5,x:697.6,y:482.6},2,cjs.Ease.get(1)).to({regY:0.1,rotation:55,x:704.2,y:481.8},2,cjs.Ease.get(1)).to({rotation:50.5,x:711.9,y:487.2},2,cjs.Ease.get(1)).to({rotation:56.3,x:697.7,y:479.2},5,cjs.Ease.get(1)).to({rotation:65.2,x:702.5,y:453.1},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:715,y:387.5},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:65.2,x:710.5,y:448.2},4,cjs.Ease.get(1)).to({regX:0.2,rotation:61.5,x:711.3,y:454.1},3,cjs.Ease.get(1)).to({regX:0.3,rotation:46.7,x:707.7,y:485.2},5,cjs.Ease.get(1)).to({regX:0.1,rotation:50.5,x:711.9,y:487.2},4,cjs.Ease.get(1)).to({regY:0,rotation:54.5,x:697.6,y:482.6},4,cjs.Ease.get(1)).to({regY:0.1,rotation:50.5,x:702.9,y:485.2},2,cjs.Ease.get(1)).to({x:711.9,y:487.2},2,cjs.Ease.get(1)).to({rotation:56.3,x:697.7,y:479.2},4,cjs.Ease.get(1)).to({rotation:50.5,x:711.9,y:487.2},4,cjs.Ease.get(1)).to({rotation:56.3,x:697.7,y:479.2},4,cjs.Ease.get(1)).to({rotation:65.2,x:702.5,y:453.1},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:715,y:387.5},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:65.2,x:710.5,y:448.2},4,cjs.Ease.get(1)).to({regX:0.2,rotation:61.5,x:711.3,y:454.1},3,cjs.Ease.get(1)).to({regX:0.3,rotation:46.7,x:707.7,y:485.2},5,cjs.Ease.get(1)).to({regX:0.1,rotation:50.5,x:711.9,y:487.2},4,cjs.Ease.get(1)).to({regX:0.3,rotation:67.8,x:703,y:450.7},4,cjs.Ease.get(1)).wait(61).to({regX:0.1,rotation:50.5,x:711.9,y:487.2},5,cjs.Ease.get(1)).wait(1));

	// v06
	this.instance_53 = new lib.v06_1();
	this.instance_53.parent = this;
	this.instance_53.setTransform(768,513.3,1,1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).to({regY:0.1,rotation:-5.5,x:751.7,y:512.6},2,cjs.Ease.get(1)).to({regY:0,rotation:-5,x:758.2,y:512.2},2,cjs.Ease.get(1)).to({rotation:-9.5,x:768,y:513.3},2,cjs.Ease.get(1)).to({rotation:-3.7,x:744,y:514.8},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:726.1,y:490.2},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:744.7,y:474.5},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:734.1,y:485.3},4,cjs.Ease.get(1)).to({rotation:1.5,x:737.2,y:489.5},3,cjs.Ease.get(1)).to({regY:0.3,rotation:-13.3,x:741.8,y:513.1},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:768,y:513.3},4,cjs.Ease.get(1)).to({regY:0.1,rotation:-5.5,x:751.7,y:512.6},4,cjs.Ease.get(1)).to({regY:0,rotation:-9.5,x:759,y:511.3},2,cjs.Ease.get(1)).to({x:768,y:513.3},2,cjs.Ease.get(1)).to({rotation:-3.7,x:744,y:514.8},4,cjs.Ease.get(1)).to({rotation:-9.5,x:768,y:513.3},4,cjs.Ease.get(1)).to({rotation:-3.7,x:744,y:514.8},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:726.1,y:490.2},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:744.7,y:474.5},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:734.1,y:485.3},4,cjs.Ease.get(1)).to({rotation:1.5,x:737.2,y:489.5},3,cjs.Ease.get(1)).to({regY:0.3,rotation:-13.3,x:741.8,y:513.1},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:768,y:513.3},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:7.8,x:741.2,y:494.7},4,cjs.Ease.get(1)).to({rotation:7.8},61,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-9.5,x:768,y:513.3},5,cjs.Ease.get(1)).wait(1));

	// v7
	this.instance_54 = new lib.v7_1();
	this.instance_54.parent = this;
	this.instance_54.setTransform(780.8,519.8,0.486,0.486,-9.5,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).to({rotation:-5.5,x:764,y:519.9},2,cjs.Ease.get(1)).to({regY:0.2,rotation:-5,x:770.4,y:519.7},2,cjs.Ease.get(1)).to({regY:0.1,rotation:-9.5,x:780.8,y:519.8},2,cjs.Ease.get(1)).to({regX:0.2,regY:0.3,rotation:-3.7,x:756.1,y:522.5},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:733.3,y:497.2},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:756.2,y:482.9},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:741.3,y:492.3},4,cjs.Ease.get(1)).to({regY:0.2,rotation:1.5,x:744.8,y:496},3,cjs.Ease.get(1)).to({regY:0.4,rotation:-13.3,x:750.8,y:517.3},5,cjs.Ease.get(1)).to({regX:0,regY:0.1,rotation:-9.5,x:780.8,y:519.8},4,cjs.Ease.get(1)).to({rotation:-5.5,x:764,y:519.9},4,cjs.Ease.get(1)).to({rotation:-9.5,x:771.8,y:517.8},2,cjs.Ease.get(1)).to({x:780.8,y:519.8},2,cjs.Ease.get(1)).to({regX:0.2,regY:0.3,rotation:-3.7,x:756.1,y:522.5},4,cjs.Ease.get(1)).to({regX:0,regY:0.1,rotation:-9.5,x:780.8,y:519.8},4,cjs.Ease.get(1)).to({regX:0.2,regY:0.3,rotation:-3.7,x:756.1,y:522.5},4,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:733.3,y:497.2},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:756.2,y:482.9},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:5.2,x:741.3,y:492.3},4,cjs.Ease.get(1)).to({regY:0.2,rotation:1.5,x:744.8,y:496},3,cjs.Ease.get(1)).to({regY:0.4,rotation:-13.3,x:750.8,y:517.3},5,cjs.Ease.get(1)).to({regX:0,regY:0.1,rotation:-9.5,x:780.8,y:519.8},4,cjs.Ease.get(1)).to({regX:0.4,regY:0.4,rotation:7.8,x:751.6,y:504.7},4,cjs.Ease.get(1)).to({rotation:7.8},61,cjs.Ease.get(1)).to({regX:0,regY:0.1,rotation:-9.5,x:780.8,y:519.8},5,cjs.Ease.get(1)).wait(1));

	// soup
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FAC446").s().p("AEfDzQipgiishgQgegRhoguQhfgqgwgbQiYheA9hxIAfgPQAogQAsAAQCOABCGCYQBABKBpBDQA7AnBwA8QBcAxAWAUQAiAegkAXIgKAAQgwAAhMgPg");
	this.shape_117.setTransform(740.7,506.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FAC446").s().p("AEUD/QingrimhpQgegShmg0QhcgugugeQiThmBDhtIAggOQAogNAsACQCOAIB9CeQA9BOBkBJQA6AqBtBBQBZA2AVAVQAgAfglAVQgyAAhTgVg");
	this.shape_118.setTransform(728.7,504.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FAC446").s().p("AEQEDQimguilhrQgdgThlg2QhcgvgtgfQiRhpBFhsIAggNQAogNAsADQCOALB7CgQA7BPBjBKQA5ArBsBEQBYA3AVAVQAgAggmAVQgygBhTgXg");
	this.shape_119.setTransform(724.7,504.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FAC446").s().p("AEPEEQimguikhtQgdgThkg2QhcgwgtggQiQhpBFhsIAggNQAogMAtADQCNALB6CiQA7BPBjBLQA4ArBrBFQBYA3AVAWQAfAggmAUQgxgBhTgYg");
	this.shape_120.setTransform(729.6,503.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FAC446").s().p("AEPEEQimguikhuQgdgThkg2QhcgwgtggQiQhpBFhtIAhgMQAogNAtAEQCNALB5CjQA7BPBjBLQA4ArBrBFQBXA4AVAVQAgAhgmAUQgxgChTgYg");
	this.shape_121.setTransform(731.2,503.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FAC446").s().p("AEbD3QiogliqhjQgegRhngwQhegsgvgdQiWhgA/hwIAfgPQAogOAtAAQCNAECDCaQA/BMBnBFQA6AoBvA+QBbAzAWAUQAhAfgkAWIgFAAQgxAAhQgSg");
	this.shape_122.setTransform(738.3,505.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FAC446").s().p("ADnEQIgvgLQiggoiDhbQgSgOgdgTIgLgKIgOgPQgNgMgDADQgJgCgFACIgDAAQAAABgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQgegSglgpIgPgNQhvhkAnhtIAVgWQAdgbAmgLQAogLAvAGIASAGQAXAKAXASQA4ArAuBRQAVAjAXAlQAhA1AvAvQAyA8BhBAIAcATQA7AmAbATQAZAUgCAPIgNAGIgDAAQg2AAhPgPg");
	this.shape_123.setTransform(735.6,500.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FAC446").s().p("AC5EqIgwgLQirgrh2hiIgqgmIgJgMQgGgMgDgHIgBgGQgOgRgUgcIgNgRQhfhtAYhuQAGgPAIgNQAUgkAigSQAjgVAygBIATAHQAWAKAWAUQA0AvAkBbQAPAmAPAqQAWA+AkA2QArBMBVBDIAbAXQA0AmAiAVQAZARAJAMIgOAEQg7gBhOgQg");
	this.shape_124.setTransform(731.9,495.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FAC446").s().p("ACYE+IgwgLQiygththnQgTgSgUgXIgHgOQgFgPAAgIQAAgQAbAWIAZAbIAFAGQAFAGABgDQgFgKgthHIgNgSQhShzANhvQADgRAFgPQAOgqAfgZQAhgaA0gHIASAHQAXAKAVAWQAwAxAcBjQAMAoAKAuQANBDAcA8QAmBXBNBGIAaAYQAwAoAnAWIApAYIgOACQg/gChMgPg");
	this.shape_125.setTransform(729.2,491.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FAC446").s().p("ACFFJIgwgLQi4guhmhqQgUgUgRgXIgGgPQgFgQACgJQADgRAiAbQAPANAUAVIAHAHQAHAGACgCQABgHgvhPIgMgTQhMh4AHhvQACgSADgQQAKguAdgcQAfgeA1gKIATAHQAWAJAVAXQAuAzAYBnQAKApAGAyQAJBHAXA9QAjBfBHBIQAMANAOAMQAuAnApAYQAYANAWAIIgPAAQhAgChLgPg");
	this.shape_126.setTransform(727.6,489.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FAC446").s().p("ABOFCQjeg4hkiNIgFgQQgFgQACgJQAGgaBKBKIAHAHQAIAHACgCQAEgIg9hkQhJh4AFhxQAGiBB3gYIASAHQAXAKAUAXQBBBIARCvQAUDMCKB+QBGA+BBAVQhbAAhwgcg");
	this.shape_127.setTransform(727,489);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FAC446").s().p("ACeFKQhqgLhehYQgigfgdgmIgHgLIgDgGIgGgNQgFgNABgEIgDgTIAAgEIgBgFQgDgJgHgPQgPgdgPgiQgrhlAKhcQAMhqBUgdIAPgCQATgCAUAEIACACIAQAJQAVAQAQAbQAeAyAOBRQAKBDAJBMQAKBOAqBLQAYAqAeAmIAXAaQABAPAFAVQAIAcgIAIIgSABIgZgCg");
	this.shape_128.setTransform(710.5,463.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FAC446").s().p("AgXDvQgkgjgggsIgaglIgjhNQg+h/AQhvQASiBB5gLIASAHQAVANATAYQA4BPABCvQAABuBGB7QALATAoA9QAXAlACAOQgRADgSAAQhdAAhhheg");
	this.shape_129.setTransform(707.2,455.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FAC446").s().p("AgNDVQghgDgZgGIgGgBIgWgFIgagMIgBgBQgEgBgIgEQgKgHgMgXQgohggChXIAAgBQAAh8BPgzIAMgHIACgBQAJgCAIACIABAAQAVAEAKAnQAFANAEAQIACAJQABAGACACQAOAZAUgGQAPAHAPAZQALALAVARQAtAWA7BGIAMAPIAJAQQAIATAIAaIADAKQAMAjgFAVQg6AhhKABIgRAAQgiAAgfgGg");
	this.shape_130.setTransform(714.8,438);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FAC446").s().p("AiSDCQgvhigLhdIAAAAQgPiAA7hNIALgKIACgCQAIgFAIgBIABAAQAUgCAEAyQADAOAAASIABAKQAAAIADABQALANAegzQAVgcAbgKQATgMAdgDQBDgSBGBCIAPAPIAHAQQAIAWACAbIABAKQADAigMAcQgwAthLAiIhSAnQggATgXAUIgFAFQgLAKgIAKQgNASgGAUIgBABQgCAKgJACIgCAAQgMAAgQgbg");
	this.shape_131.setTransform(720.7,433.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FAC446").s().p("AiJETQg0hlgShfIAAgBQgZiDAthfIAJgMIACgDQAJgJAHgCIABAAQATgGAAA6IAAAjIgBAKQAAAJADABQAKAFAjhUQAZg2AjgiQAbgcAigSQBTguBOA+IAQAOIAHASQAHAWgCAdIgBALQgDAhgQAfQgqA6hMA3QgvAjgiAkQggAjgVAmIgFAKQgJATgHATQgMAjgCAnIgBACQAAARgLAHQgDABgDAAQgMAAgRgZg");
	this.shape_132.setTransform(725.1,425);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FAC446").s().p("AiEFHQg3hngXhhIAAgBQgeiEAkhrIAJgOIACgCQAIgLAHgDIABAAQATgJgDA/IgCAkIgBALQgBAKADAAQAJAAAnhnQAchGAogwQAegnAmgZQBchABTA8QAJAGAIAIIAHASQAGAXgEAeIgDALQgGAggTAiQglBAhOBGQgvAqghAvQggAtgUAxIgEAMQgJAYgGAZQgLAugBAxIAAAEQAAAVgLAJQgEADgEAAQgMAAgSgYg");
	this.shape_133.setTransform(727.7,419.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FAC446").s().p("AiCFYQg4hogYhiQggiGAghtIAJgOQAKgPAIgDQAYgLgMBnIgBAKQgBALADgBQAJgBAphtQAyiFBahCQBqhMBbBQIAHASQAGAYgFAeQgSBgh+B6QhbBYgoBsQgfBTABBZQABAWgMALQgEADgFAAQgNAAgRgYg");
	this.shape_134.setTransform(728.6,418);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FAC446").s().p("AiWC7QgthhgIhbIAAAAQgLiABAhGIAMgJIACgBQAIgEAIgBIABAAQAUAAAGAvQADAOACARIABAJQAAAJADAAQAMARAbgmQATgTAYAAQARgGAbACQA9gGBCBDIAOAPIAIARQAIAUAEAbIABAKQAGAhgKAaQgzArhLAYQgtAQglALQggANgYANIgFADQgLAGgIAIQgOAKgIANIgBABQgCAGgJABQgLAAgRgcg");
	this.shape_135.setTransform(722.6,431.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FAC446").s().p("ABDD3QgrgFgogSQgggMgbgQIgGgEIgXgOIgdggIgBgCIgMgLQgJgLgLgVQglhfADhVIAAAAQAEh8BYgoIAMgGIADAAQAJAAAIACIABAAQAVAHAMAiQAGAMAFAQIADAIQABAGACADQAPAcAPAMQAOAWALAmQAIAUARAZQAlAkA2BKIALAPIAJAQQAJASAKAYIAEAKQAPAkgDATQgqASgxAAQgVAAgWgDg");
	this.shape_136.setTransform(718.5,439.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FAC446").s().p("AA+EiQgqgSgpgkQghgbgcggIgHgIIgZgfIghhCIgCgDIgMgXQgIgQgHgSQgghbAJhUQAOh5BlgXIANgDIADgBIASAHIABAAQAVALAQAaQAIAMAGAOIADAIIAEAIQAQAkALArQAKAuADA8QACAkAMAlQAVBAAvBNIAKAQIAJAPIAYAoIAFAJQAWAmABAOQgXAGgYAAQgtAAgwgWg");
	this.shape_137.setTransform(716.1,447.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FAC446").s().p("AgRDyQgmgighgrIgbgjIgmhMQhDh9AMhwQAOiBB4gQIASAHQAWAMATAXQA7BOAICuQAEBuBKB5QAMASApA7QAZAlADANQgVAFgVAAQhaAAhghXg");
	this.shape_138.setTransform(716,453.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FAC446").s().p("AgODzQgmghgjgqIgcgjIgnhLQhFh8AJhvQALiCB4gSIASAGQAWALAUAYQA9BLALCvQAHBuBMB3QAMASArA6QAaAkADAOQgXAFgXAAQhYAAhghTg");
	this.shape_139.setTransform(716.5,454.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FAC446").s().p("AgNDzQgmghgjgqIgcgiIgohLQhGh7AIhwQAKiCB4gTIASAHQAWALAVAXQA9BLAMCvQAIBtBNB3QAMASAsA6QAZAkAEANQgXAHgYAAQhYAAhghTg");
	this.shape_140.setTransform(716.7,455.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FAC446").s().p("AACD1QgogdgngmIgfgfIgthHQhShzgBhwQgCiBB0gdIATAEQAXAJAWAVQBDBFAdCrQARBsBXBuQAOARAwA1QAdAhAEANQgeALghAAQhPAAhdhBg");
	this.shape_141.setTransform(716.2,465.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FAC446").s().p("AAPD2QgqgagqgjIgggdIgzhDQhZhtgKhvQgMiBBygmIATADQAYAIAYATQBIBAAoCpQAaBpBfBoQAOAQA0AxQAfAfAGANQglAQgpAAQhJAAhYg1g");
	this.shape_142.setTransform(715.7,473.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FAC446").s().p("AAYD2QgrgXgsgiIgigbIg2hAQhfhpgQhvQgSiABwgsIATACQAYAGAZASQBMA8AxCnQAfBpBkBjIBHA+QAgAdAGAMQgoAVgvAAQhFAAhVgtg");
	this.shape_143.setTransform(715.3,479.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FAC446").s().p("AAeD2QgsgWgtggIgjgaIg4g/QhjhngThuQgWiABvgvIATABQAZAFAZASQBOA5A2CnQAiBoBoBfQARAPA4AuQAhAcAHAMQgqAXgzAAQhDAAhTgog");
	this.shape_144.setTransform(715.1,483.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FAC446").s().p("AAgD2QgsgWgtggIgkgZQgdghgcgeQhkhmgUhuQgXiABugwIAUABQAYAFAaARQBPA5A4CmQAjBoBpBfQAQAOA5AtQAiAcAGAMQgrAZg0AAQhDAAhRgng");
	this.shape_145.setTransform(715,484.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FAC446").s().p("ACOD1Qhjgbhkg8QgXgOg4gcQg6glgkgdQh7hhAPhwQgGhMBFgeQAXgHAZABQBLADBJBMQBJBBBNB7QAuBLBsBPQAxAeAqAiQAiAdgMAQQggANgmAAQg3AAhHgbg");
	this.shape_146.setTransform(726.4,494);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FAC446").s().p("ADfD0QiKgfiMhQQgcgQhSglQhPgogqgdQiLhfAohwQAGgmAngSQAhgLAjAAQBxACBqB2IChCiQA1A3BvBEQBIApAfAaQAiAdgZAVQgVAFgZAAQgxAAhCgUg");
	this.shape_147.setTransform(734.4,500.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FAC446").s().p("AEPDzQihghikhbQgegRhigsQhbgqgvgbQiUheA4hyQANgPAVgKQAmgOAqAAQCGABCACPQBBBKBlBJQA6ArBwA+QBXAuAYAWQAiAeghAWIgYABQgvAAhGgQg");
	this.shape_148.setTransform(739.1,505);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FAC446").s().p("AEZD6QiogoiphkQgegShmgxQhegsgvgeQiVhiBBhvIAfgOQAogPAsACQCOAFCBCbQA+BNBnBGQA5ApBvA/QBaAzAWAVQAhAfglAWIgCAAQgxAAhSgTg");
	this.shape_149.setTransform(733.7,505.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FAC446").s().p("AERECQimguilhqQgegThlg1QhcgvgugfQiRhnBFhtIAfgNQAogNAtADQCNAKB8CgQA8BOBjBKQA5ArBsBDQBYA3AWAVQAgAfgmAVQgygBhTgWg");
	this.shape_150.setTransform(725.7,504.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FAC446").s().p("AEcD3QipgliqhjQgegRhngwQhfgsgvgcQiWhgA/hwIAfgPQAogPAtABQCNADCDCaQBABMBnBFQA6AoBvA9QBbAzAWAUQAiAeglAXIgHAAQgwAAhOgRg");
	this.shape_151.setTransform(730,504.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FAC446").s().p("ADaEXIgvgLQikgph/hdQgSgOgbgUIgLgLIgNgQQgKgNACAHQgGgBgCAFIgCABQABAAAAAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgagRgnguIgOgNQhqhoAihtIATgYQAbgdAlgNQAmgOAwAEIASAHQAXAKAXASQA3AsArBUIAoBLQAeA3AsAxQAwBABeBBIAcAUIBVA6QAaATABAOIgNAGQg5AAhQgQg");
	this.shape_152.setTransform(734.6,499.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FAC446").s().p("ACnE1IgwgLQivgthxhjIgogpIgIgNQgGgNgBgIQgCgPAVATIASAVIADAFQAFAFAAgDQgKgLgshBIgMgRQhYhxAShvQAEgQAGgOQARgnAggVQAigZAzgDIATAGQAWAKAWAVQAyAwAfBfQAOAnAMAtQARBAAgA6QAoBSBQBFIAbAXQAyAnAkAWQAZAPAOALIgPACQg9AAhNgQg");
	this.shape_153.setTransform(730.4,493.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FAC446").s().p("ACIFHIgvgKQi3gvhohoQgTgVgSgXIgGgPQgFgPABgJQADgRAhAbQANALAUAVIAHAHQAGAGACgCQAAgIgvhOIgMgSQhNh3AIhwQACgSAEgPQALgtAdgcQAfgeA1gIIASAGQAXAKAVAWQAvA0AYBlQAKApAHAxQAJBGAZA+QAjBdBJBIQAMAMANAMQAvAoApAXQAYANAVAJIgPAAQhAgBhMgQg");
	this.shape_154.setTransform(727.9,490.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FAC446").s().p("ADGEjIgvgLQiogqh6hgIgrglIgKgLIgGgJIABACIAAAAQgUgPgng1IgOgPQhjhrAchuIAQgaQAWghAjgQQAlgSAxABIASAGQAXAKAWATQA1AuAnBYIAiBPQAZA6AnA1QAtBHBYBDIAcAVQA2AnAgAUQAZASAGANIgOAEQg6AAhPgQg");
	this.shape_155.setTransform(732.9,496.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FAC446").s().p("AD4EGIgugLQidgniIhYQgRgMgfgTIgNgJIgQgNQgPgMgKgBQgNgEgKgCIgFgBIgFgCQgkgUgjghIgPgNQh1hhAshsIAYgUQAggYAogHQApgIAuAJIATAHQAXAKAXAQQA6AqAyBNQAXAiAaAjQAmAxAzAtQA1A1BlA/IAdASQA9AlAYATQAaAUgGARIgNAHIgGAAQg0AAhOgPg");
	this.shape_156.setTransform(737.2,502.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FAC446").s().p("AEWD3IgugKQiVgmiShUIgzgbIgOgHIgUgKQgUgKgVgJIgngRIgIgDIgJgEQgugWgfgWIgQgLQiBhbA3hsIAdgQQAlgRAsgCQAsgCAsANIASAHQAXAKAXAPQA9AnA7BGQAaAgAgAgQAtArA6AoQA5ArBuA8IAeARQBAAkAUARQAaAXgOATIgMAJIgIAAQgxAAhNgPg");
	this.shape_157.setTransform(739.8,505.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FAC446").s().p("AB+DGIgWgJQgugQhagoIgdgNQhGghgsgdQiChUAEhrIADgQQAFgKAIgHQAEgDAFgBQAegIArAcIACABIAIAEQAGAEADgBQAhAAAMghQAagYAsAIIAYgCQArgOBQAUQASAEAUAHIARAJQAUAOAUATQAcAaAcAiQA4A3AKAvQAFALACALQADAUgOASQgdAhgpATQgoAggaAPQgKANgLAAQgEAAgEgCg");
	this.shape_158.setTransform(730.4,493.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FAC446").s().p("ADLElQg5gQhSgkIgdgNQhCgggwghQh4hTgZhrIgBgRQACgOAGgHQADgFAFAAQAXgCArAwIAAABIAIAHQAGAGADgBQARgEgQhMQgJhEAYgtQAFgPAKgPQAhg/BTgBQATgBAVADIARAKQAUAOASAXQAXAfARArQAgA6AABFQACANAAAMQAAAUgGATQgOA3gKAsQgHBEAWA0QAZAxAaAQIgXgHg");
	this.shape_159.setTransform(724.5,479.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FAC446").s().p("ADSFnQhAgQhMghIgdgOQhAgfgzgkQhzhSgqhsIgCgRQAAgQAEgHQADgGAGABQASABAqA7IABABIAGAIQAGAIADgBQAIgHgihkQgdheALhNQAEgYAHgXQAbhdBWgOQATgDAWABIARAKQATAOAQAaQAVAhALAwQAQA+gFBRIgCAaIgCApQgGBDAIA9QAPBYAyBKQAwBEAzAeIgYgGg");
	this.shape_160.setTransform(726.1,470.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FAC446").s().p("AArFAQjOhkhGieIgCgRQgBgRADgIQALgXA6BVIAGAJQAGAIACgBQAGgHgohtQgviGAbhtQAfh+B6ABIARAKQAUAOAOAbQAxBUgSCuQgUDMBvCXQA4BLA7AiQhagShogxg");
	this.shape_161.setTransform(726.6,467.2);
	this.shape_161._off = true;

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FAC446").s().p("AC0D/Qg2gQhUgmIgdgNQhDgggvggQh8hUgPhqIABgQQADgNAGgHQAEgFAFAAQAZgEArApIABABIAIAGQAGAFADgBQAXgDgHg8QAEg0AfgbQAHgKALgKQAlguBSAGQASABAVAFIARAJQAUAOATAWQAZAdAUAoQAoA5AEA+QAEAMAAALQABAUgJATQgTAvgVAjQgSA3AFAnQAKAmANAJIgXgIg");
	this.shape_162.setTransform(725.4,484.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FAC446").s().p("ABhC4IgWgJQgrgRhcgpIgdgNQhHghgsgcQiDhUALhrIADgPQAHgKAIgGQAEgEAFgBQAfgJAsAXIACABIAIADQAGADAEAAQAkABAUgXQAigNAxAVIAaAFQAsgCBRAaIAlAMIARAKQAUANAVATQAdAYAeAgQA/A1AMAsQAGAKACALQAFAUgQARQghAbgxANQgxAXglAHQgKAEgLAAQgOAAgOgHg");
	this.shape_163.setTransform(732.3,495.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FAC446").s().p("AEGDWQhHAAhDgRQgygLgygaIgWgKIiGg9IgdgNQhIghgqgaQiJhWAdhpIAGgPQAJgIAJgGIAJgEQAkgMAsAKIACAAIAKACIAKABQAuADAlAFQA5AQA+A2QAOAMARAMQAzAdBPAnIAkASIAQAKIAsAbQAgAWAkAaQBPAzARAfQAJAKADAJQAHAUgVAQQghALgyAAIgcgBg");
	this.shape_164.setTransform(737,500.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FAC446").s().p("AEZDsQhVgNhUgfQhBgXhBgjIgVgLQgggRhnguIgcgMQhKgigpgYQiMhXAohoIAHgQIAVgLIAJgEQAmgPAtADIACAAIAKABIAKAAQA0AFAwAVQBGAgBGBLQAQASATAQQA2AxBOAuIAjAVIARAKIAsAaIBKArQBYAyAWAWQAKAKADAJQAIATgYAQIgbABQgpAAg8gKg");
	this.shape_165.setTransform(739.8,504.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117}]}).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129,p:{x:707.2,y:455.2}}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_129,p:{x:715.2,y:450.3}}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129,p:{x:707.2,y:455.2}}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_129,p:{x:715.2,y:450.3}}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_117}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_117).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:731.7,y:504.4},0).wait(1).to({x:738.5,y:505.9},0).wait(1).to({x:740.7,y:506.4},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_161).wait(81).to({_off:false},0).wait(61).to({_off:true},1).wait(5));

	// 左手指
	this.instance_55 = new lib.左手指();
	this.instance_55.parent = this;
	this.instance_55.setTransform(838.3,500.7,1,1,-30.7,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_55).to({x:828.3},2,cjs.Ease.get(1)).to({x:838.3},4,cjs.Ease.get(1)).to({x:828.3},5,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-8.2,x:810,y:509.9},2,cjs.Ease.get(1)).to({rotation:0,x:814.2,y:507},5,cjs.Ease.get(1)).to({rotation:-24.5,x:831.7,y:499},7,cjs.Ease.get(1)).to({regX:0.1,regY:0.3,rotation:-30.7,x:838.3,y:500.7},5,cjs.Ease.get(1)).wait(4).to({x:828.3},4,cjs.Ease.get(1)).to({x:838.3},4,cjs.Ease.get(1)).to({x:828.3},4,cjs.Ease.get(1)).to({x:838.3},4,cjs.Ease.get(1)).to({x:828.3},4,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-8.2,x:810,y:509.9},2,cjs.Ease.get(1)).to({rotation:0,x:814.2,y:507},5,cjs.Ease.get(1)).to({rotation:-24.5,x:831.7,y:499},7,cjs.Ease.get(1)).to({regX:0.1,regY:0.3,rotation:-30.7,x:838.3,y:500.7},5,cjs.Ease.get(1)).wait(4).to({rotation:-19.2,x:826.6,y:497.6},4,cjs.Ease.get(1)).wait(61).to({rotation:-30.7,x:838.3,y:500.7},5,cjs.Ease.get(1)).wait(1));

	// cook
	this.instance_56 = new lib.cook_1();
	this.instance_56.parent = this;
	this.instance_56.setTransform(771.8,488.4,1,1,-34.6,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_56).to({x:761.8},2,cjs.Ease.get(1)).to({x:771.8},4,cjs.Ease.get(1)).to({regY:0.3,scaleX:1,scaleY:1,x:762.3,y:488.5},4,cjs.Ease.get(1)).to({regY:0.1,scaleX:1,scaleY:1,x:761.8,y:488.4},1).to({regX:0,regY:0,rotation:-8.2,x:756.6,y:470.1},2,cjs.Ease.get(1)).to({rotation:0,x:767,y:460},5,cjs.Ease.get(1)).to({rotation:-21.4,x:770.9,y:471.1},7,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-34.6,x:771.8,y:488.4},5,cjs.Ease.get(1)).wait(4).to({x:761.8},4,cjs.Ease.get(1)).to({x:771.8},4,cjs.Ease.get(1)).to({x:761.8},4,cjs.Ease.get(1)).to({x:771.8},4,cjs.Ease.get(1)).to({x:761.8},4,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-8.2,x:756.6,y:470.1},2,cjs.Ease.get(1)).to({rotation:0,x:767,y:460},5,cjs.Ease.get(1)).to({rotation:-21.4,x:770.9,y:471.1},7,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-34.6,x:771.8,y:488.4},5,cjs.Ease.get(1)).wait(4).to({regY:0.2,rotation:-23.1,x:763.9,y:472.4},4,cjs.Ease.get(1)).wait(61).to({regY:0.1,rotation:-34.6,x:771.8,y:488.4},5,cjs.Ease.get(1)).wait(1));

	// 左手
	this.instance_57 = new lib.左手();
	this.instance_57.parent = this;
	this.instance_57.setTransform(856.9,480.5,1,1,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_57).to({x:846.9},2,cjs.Ease.get(1)).to({x:856.9},4,cjs.Ease.get(1)).to({x:846.9},5,cjs.Ease.get(1)).to({regY:0.1,rotation:6.8,x:837,y:495.4},2,cjs.Ease.get(1)).to({regY:0,rotation:0,x:840.2,y:491},5,cjs.Ease.get(1)).to({rotation:-9.5,x:854.8,y:479.9},7,cjs.Ease.get(1)).to({rotation:-13.2,x:856.9,y:480.5},5,cjs.Ease.get(1)).wait(4).to({x:846.9},4,cjs.Ease.get(1)).to({x:856.9},4,cjs.Ease.get(1)).to({x:846.9},4,cjs.Ease.get(1)).to({x:856.9},4,cjs.Ease.get(1)).to({x:846.9},4,cjs.Ease.get(1)).to({regY:0.1,rotation:6.8,x:837,y:495.4},2,cjs.Ease.get(1)).to({regY:0,rotation:0,x:840.2,y:491},5,cjs.Ease.get(1)).to({rotation:-9.5,x:854.8,y:479.9},7,cjs.Ease.get(1)).to({rotation:-13.2,x:856.9,y:480.5},5,cjs.Ease.get(1)).wait(4).to({regX:0.1,regY:0.1,rotation:-1.7,x:849,y:481.6},4,cjs.Ease.get(1)).to({rotation:-1.7},61,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-13.2,x:856.9,y:480.5},5,cjs.Ease.get(1)).wait(1));

	// 眼
	this.instance_58 = new lib.眼();
	this.instance_58.parent = this;
	this.instance_58.setTransform(963.2,422.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(10).to({x:960.2},8).wait(16).to({x:966.2,y:419.5},8).wait(21).to({x:960.2,y:422.5},7).wait(28).to({x:964.2,y:422},6).wait(38).to({x:963.2,y:422.5},5).wait(1));

	// 臉
	this.instance_59 = new lib.臉();
	this.instance_59.parent = this;
	this.instance_59.setTransform(965,377,1,1,0,0,0,1.3,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(148));

	// 右耳
	this.instance_60 = new lib.右耳();
	this.instance_60.parent = this;
	this.instance_60.setTransform(1014.7,407.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(108).to({rotation:-45,x:1017.7,y:407.4},4).to({rotation:0,x:1014.7,y:407.5},4).to({rotation:-45,x:1017.7,y:407.4},4).to({rotation:0,x:1014.7,y:407.5},4).wait(24));

	// 左耳
	this.instance_61 = new lib.左耳();
	this.instance_61.parent = this;
	this.instance_61.setTransform(909.2,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(108).to({rotation:45},4).to({rotation:0},4).to({rotation:45},4).to({rotation:0},4).wait(24));

	// c手
	this.instance_62 = new lib.c手();
	this.instance_62.parent = this;
	this.instance_62.setTransform(995.7,527);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).to({x:1005.7,y:525},7).to({x:995.7,y:527},11).wait(9).to({x:1005.7,y:525},10).to({x:995.7,y:527},11).to({x:1005.7,y:525},9).to({x:995.7,y:527},9).to({x:1005.7,y:525},10).to({x:995.7,y:527},12).to({x:1005.7,y:525},21).wait(33).to({x:995.7,y:527},5).wait(1));

	// cleanh
	this.instance_63 = new lib.身體();
	this.instance_63.parent = this;
	this.instance_63.setTransform(929,614.1);

	this.instance_64 = new lib.cleanh_1();
	this.instance_64.parent = this;
	this.instance_64.setTransform(938,613.1);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).to({_off:true,x:938,y:613.1},7).to({_off:false,x:929,y:614.1},11).wait(9).to({_off:true,x:938,y:613.1},10).to({_off:false,x:929,y:614.1},11).to({_off:true,x:938,y:613.1},9).to({_off:false,x:929,y:614.1},9).to({_off:true,x:938,y:613.1},10).to({_off:false,x:929,y:614.1},12).to({_off:true,x:938,y:613.1},21).wait(33).to({_off:false,x:929,y:614.1},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_64).to({_off:false},7).to({_off:true,x:929,y:614.1},11).wait(9).to({_off:false,x:938,y:613.1},10).to({_off:true,x:929,y:614.1},11).to({_off:false,x:938,y:613.1},9).to({_off:true,x:929,y:614.1},9).to({_off:false,x:938,y:613.1},10).to({_off:true,x:929,y:614.1},12).to({_off:false,x:938,y:613.1},21).wait(33).to({_off:true,x:929,y:614.1},5).wait(1));

	// bwheel
	this.instance_65 = new lib.bwheel_1();
	this.instance_65.parent = this;
	this.instance_65.setTransform(1143,668.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).to({rotation:360,x:1153},7,cjs.Ease.get(-1)).to({rotation:0,x:1143},11).wait(9).to({rotation:360,x:1153},10).to({rotation:0,x:1143},11).to({rotation:360,x:1153},9).to({rotation:0,x:1143},9).to({rotation:360,x:1153},10).to({rotation:0,x:1143},12).to({rotation:360,x:1153},21).wait(33).to({x:1143},5).wait(1));

	// cleanb
	this.instance_66 = new lib.cleanb_1();
	this.instance_66.parent = this;
	this.instance_66.setTransform(1097.5,631.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_66).to({x:1107.5},7).to({x:1097.5},11).wait(9).to({x:1107.5},10).to({x:1097.5},11).to({x:1107.5},9).to({x:1097.5},9).to({x:1107.5},10).to({x:1097.5},12).to({x:1107.5},21).wait(33).to({x:1097.5},5).wait(1));

	// 管子
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnEi1IBSgYQBmgdBkgUQFAhBC3AtQBJASAcAzQAuBShsCFQhrCFBSBZQApAsA/AR");
	this.shape_166.setTransform(1032.2,566.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnQjJIBNgWQBhgbBegTQEvg7CwAsQBJATAeA1QAwBUhpCDQhqCEBuBiQA4AxBMAW");
	this.shape_167.setTransform(1037.2,567.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#9D9D9C").ss(8,1,1).p("AndjdIBJgVQBbgZBZgRQEeg2CpAsQBJAUAfA2QAzBWhnCCQhpCDCMBrQBFA1BbAb");
	this.shape_168.setTransform(1042.3,569);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnpjxIBEgTQBVgXBUgPQENgxCiArQBJAVAhA4QA1BYhkB/QhoCDCoB0QBUA6BoAg");
	this.shape_169.setTransform(1047.3,570.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#9D9D9C").ss(8,1,1).p("An2kFIBAgRQBPgVBPgNQD9gsCbApQBJAYAjA5QA2BZhiB+QhmCCDEB9QBiA/B3Ak");
	this.shape_170.setTransform(1052.3,571.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoCkYIA7gQQBJgTBKgLQDsgmCVAoQBIAYAkA7QA5BbhfB8QhlCCDgCGQBxBDCEAp");
	this.shape_171.setTransform(1057.3,572.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoPksIA2gOQBFgRBEgKQDbghCOAoQBIAaAmA8QA7BdhdB5QhjCCD9CPQB+BICTAu");
	this.shape_172.setTransform(1062.3,573.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoblAIAxgMQA/gPA/gIQDKgcCIAnQBIAbAnA+QA9BfhaB3QhiCBEZCZQCNBMChAz");
	this.shape_173.setTransform(1067.4,574.7);
	this.shape_173._off = true;

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoUkzIA1gOQBCgQBDgJQDVgfCLAnQBIAaAnA9QA7BehbB4QhjCBEHCUQCEBJCYAw");
	this.shape_174.setTransform(1064.2,574);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoMknIA4gOQBGgRBGgLQDggiCPAnQBIAaAmA8QA6BchdB6QhkCCD1CNQB7BHCPAs");
	this.shape_175.setTransform(1061,573.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoDkaIA6gQQBJgSBJgMQDrglCUAoQBJAZAkA7QA5BbhfB7QhlCCDjCHQByBECGAp");
	this.shape_176.setTransform(1057.8,572.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#9D9D9C").ss(8,1,1).p("An8kNIA+gRQBNgUBMgNQD2gpCXApQBJAYAkA6QA3BahgB9QhmCCDRCBQBpBBB8Am");
	this.shape_177.setTransform(1054.6,571.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnzkBIBAgSQBRgVBQgNQEAgtCcAqQBJAXAiA5QA2BZhiB+QhmCCC+B8QBgA9B0Ak");
	this.shape_178.setTransform(1051.4,571);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#9D9D9C").ss(8,1,1).p("Ansj0IBDgTQBVgXBTgPQEKgvChAqQBJAWAhA4QA1BYhkB/QhnCDCtB1QBWA7BsAh");
	this.shape_179.setTransform(1048.2,570.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnkjoIBGgUQBZgXBWgQQEVgzClAqQBIAWAhA3QA0BWhmCBQhnCDCaBwQBNA4BjAd");
	this.shape_180.setTransform(1045,569.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnbjbIBJgVQBbgZBagRQEfg3CqArQBJAVAfA2QAyBVhnCCQhoCECIBqQBEA1BaAa");
	this.shape_181.setTransform(1041.8,568.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnTjOIBMgXQBfgaBdgSQEqg6CuAsQBJAUAeA1QAxBUhpCCQhpCFB2BkQA7AyBRAX");
	this.shape_182.setTransform(1038.6,568.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnMjCIBPgXQBjgcBggTQE1g9CyAtQBJASAeA0QAvBUhqCDQhqCFBkBeQAyAvBHAV");
	this.shape_183.setTransform(1035.4,567.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnMjDIBOgXQBigbBhgTQEzg9CyAsQBJATAeA0QAvBUhqCDQhqCFBmBfQAzAvBIAV");
	this.shape_184.setTransform(1035.7,567.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnVjRIBLgWQBfgaBcgSQEog5CtAsQBJAUAfA1QAxBUhpCDQhpCEB6BlQA9AzBSAY");
	this.shape_185.setTransform(1039.2,568.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnejfIBJgVQBagYBYgRQEdg1CoArQBJAUAfA3QAzBWhnCBQhoCDCOBsQBHA2BcAb");
	this.shape_186.setTransform(1042.8,569.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnnjtIBFgTQBXgYBVgPQEQgyCkArQBJAVAgA4QA0BXhkCAQhoCDCiByQBRA5BmAf");
	this.shape_187.setTransform(1046.3,569.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#9D9D9C").ss(8,1,1).p("Anvj6IBBgTQBTgWBRgOQEGguCeAqQBJAWAhA5QA2BYhjB/QhnCCC2B5QBbA8BwAi");
	this.shape_188.setTransform(1049.8,570.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#9D9D9C").ss(8,1,1).p("An4kIIA+gSQBPgUBOgNQD5gqCaApQBIAXAkA6QA3BahiB9QhmCCDKB/QBlA/B5Am");
	this.shape_189.setTransform(1053.3,571.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoBkWIA7gQQBLgTBKgMQDugnCVApQBIAYAkA7QA5BbhfB7QhmCCDeCGQBvBDCDAo");
	this.shape_190.setTransform(1056.8,572.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoKkkIA4gPQBHgRBGgLQDigjCQAoQBJAZAlA8QA6BchdB6QhlCCDyCMQB5BGCNAs");
	this.shape_191.setTransform(1060.3,573.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoTkyIA1gOQBDgQBDgJQDWgfCLAnQBJAaAmA9QA8BdhcB5QhiCBEECTQCDBJCXAv");
	this.shape_192.setTransform(1063.8,573.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnNjEIBOgXQBigcBfgTQEzg8CxAsQBJATAeA1QAvBThqCDQhqCFBpBgQA0AvBJAV");
	this.shape_193.setTransform(1036.1,567.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnXjUIBLgWQBdgZBcgSQElg4CtArQBIAUAfA2QAyBVhpCCQhpCEB/BnQA/AzBUAZ");
	this.shape_194.setTransform(1040,568.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnhjjIBHgVQBZgYBYgQQEYg0CnArQBJAVAgA2QAzBXhmCBQhoCDCUBuQBLA2BfAd");
	this.shape_195.setTransform(1043.9,569.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnrjzIBEgTQBVgWBTgPQELgwCiAqQBJAWAhA4QA1BXhkCAQhoCCCrB2QBWA6BqAg");
	this.shape_196.setTransform(1047.8,570.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#9D9D9C").ss(8,1,1).p("An0kCIBAgSQBQgVBPgOQD/gsCcAqQBIAXAjA5QA2BZhiB+QhmCCDBB8QBgA/B1Aj");
	this.shape_197.setTransform(1051.7,571.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#9D9D9C").ss(8,1,1).p("An+kSIA8gQQBMgUBMgMQDxgoCXApQBIAYAkA6QA4BbhgB8QhlCCDXCDQBrBCCAAo");
	this.shape_198.setTransform(1055.6,572);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoIkhIA4gPQBIgSBHgLQDlgkCRAoQBJAZAlA8QA5BcheB6QhkCCDtCKQB3BGCLAr");
	this.shape_199.setTransform(1059.6,572.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoSkxIA2gOQBDgQBDgJQDYggCLAnQBJAaAmA9QA8BdhcB5QhjCBECCSQCCBJCWAv");
	this.shape_200.setTransform(1063.4,573.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoUk0IA0gOQBCgQBCgJQDVgfCKAnQBJAbAmA9QA8BehcB4QhiCBEICUQCFBKCYAv");
	this.shape_201.setTransform(1064.4,574);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoNkoIA3gPQBGgRBFgKQDegiCOAoQBJAZAmA8QA6BdhdB6QhkCBD4COQB9BHCQAt");
	this.shape_202.setTransform(1061.5,573.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoGkeIA6gPQBJgSBIgMQDogkCSAoQBJAZAlA7QA5BchfB6QhkCCDnCJQB0BECIAr");
	this.shape_203.setTransform(1058.6,572.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#9D9D9C").ss(8,1,1).p("An3kGIA/gSQBQgUBOgOQD8grCaAqQBJAXAjA5QA2BahhB9QhmCCDGB+QBjA/B4Al");
	this.shape_204.setTransform(1052.7,571.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnojvIBFgUQBVgXBVgPQEOgxCjAqQBJAWAhA4QA0BXhkCAQhoCDClBzQBTA6BnAf");
	this.shape_205.setTransform(1046.9,570);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnajYIBLgVQBbgaBbgRQEig3CrArQBJAVAfA1QAyBWhnCCQhpCDCEBpQBCA0BXAa");
	this.shape_206.setTransform(1041,568.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnSjMIBMgXQBggaBegSQErg6CvArQBJAUAeA1QAxBUhpCCQhqCFB0BjQA5AyBPAX");
	this.shape_207.setTransform(1038.1,568);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnLjBIBPgXQBjgcBhgTQE2g9CyAsQBJATAeA0QAvBThqCEQhrCEBjBeQAxAvBHAU");
	this.shape_208.setTransform(1035.1,567.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnIi8IBRgXQBkgdBigTQE6g/C0AtQBJASAdA0QAvBShrCFQhrCEBcBcQAuAuBDAT");
	this.shape_209.setTransform(1033.9,567);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnMjCIBPgYQBigbBhgTQE0g9CyAsQBJATAdA0QAwBThrCEQhqCFBlBeQAzAvBIAV");
	this.shape_210.setTransform(1035.6,567.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnUjPIBMgXQBegaBdgSQEpg5CuAsQBJATAeA1QAxBVhoCCQhqCFB4BkQA8AyBRAY");
	this.shape_211.setTransform(1038.9,568.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnZjWIBLgWQBcgZBcgSQEjg3CrArQBJAUAfA2QAyBVhoCCQhpCECCBoQBBAzBVAa");
	this.shape_212.setTransform(1040.6,568.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#9D9D9C").ss(8,1,1).p("AnljqIBGgUQBXgXBWgQQESgyClAqQBJAVAgA4QA0BXhlCAQhoCDCeBxQBPA4BkAe");
	this.shape_213.setTransform(1045.6,569.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#9D9D9C").ss(8,1,1).p("Anuj4IBDgSQBTgWBTgPQEHgvCgAqQBJAWAhA5QA2BYhjB/QhnCCCwB3QBZA8BuAh");
	this.shape_214.setTransform(1049,570.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#9D9D9C").ss(8,1,1).p("Anxj+IBBgSQBRgWBRgNQECguCeAqQBIAXAjA4QA1BZhiB+QhnCDC7B6QBdA9ByAj");
	this.shape_215.setTransform(1050.6,570.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#9D9D9C").ss(8,1,1).p("An6kLIA+gRQBOgUBNgNQD3gqCZApQBIAYAkA6QA3BahhB9QhmCCDOCAQBnBAB7Am");
	this.shape_216.setTransform(1054,571.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoHkfIA5gPQBJgSBIgLQDmglCSAoQBJAZAkA8QA6BcheB6QhlCCDqCJQB1BFCKAr");
	this.shape_217.setTransform(1059,572.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoLkmIA4gOQBGgSBGgKQDhgjCQAoQBIAZAmA8QA6BdheB5QhkCCD0CNQB6BGCOAs");
	this.shape_218.setTransform(1060.7,573.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoTkzIA0gNQBDgQBCgKQDWgfCMAnQBIAaAmA9QA8BehbB5QhjCBEGCTQCDBJCXAv");
	this.shape_219.setTransform(1064,573.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#9D9D9C").ss(8,1,1).p("AoXk5IAzgNQBBgPBAgJQDQgeCKAnQBIAbAnA9QA8BfhbB3QhiCCEPCVQCIBLCcAx");
	this.shape_220.setTransform(1065.7,574.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_166}]}).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_173}]},33).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_166}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_166).to({_off:true},1).wait(17).to({_off:false},0).wait(9).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(58).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_173).wait(7).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).wait(33).to({_off:true},1).wait(5));

	// swheel
	this.instance_67 = new lib.swheel_1();
	this.instance_67.parent = this;
	this.instance_67.setTransform(1066.5,680.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).to({rotation:720,x:1076.5},7).to({x:1066.5},11).wait(9).to({rotation:1440,x:1076.5},10).to({x:1066.5},11).to({rotation:2160,x:1076.5},9).to({x:1066.5},9).to({rotation:2880,x:1076.5},10).to({x:1066.5},12).to({rotation:3600,x:1076.5},21).wait(33).to({x:1066.5},5).wait(1));

	// po
	this.instance_68 = new lib.po_1();
	this.instance_68.parent = this;
	this.instance_68.setTransform(938,533.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(148));

	// 身體
	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgKQALgLAOAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_221.setTransform(900.6,511.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgLAOAAQAPAAALALQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_222.setTransform(919.5,509.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgKQALgMAOAAQAPAAALAMQAKAKAAAOQAAAPgKALQgLALgPAAQgOAAgLgLg");
	this.shape_223.setTransform(936.9,516);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgZAaQgKgLgBgPQABgOAKgLQALgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_224.setTransform(967,530.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgKAOgBQAPABALAKQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgKgKg");
	this.shape_225.setTransform(949.3,524.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgZAaQgKgLgBgPQABgOAKgKQALgLAOAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_226.setTransform(967,548);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgKgKg");
	this.shape_227.setTransform(955.5,537);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgKAOgBQAPABALAKQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgKgKg");
	this.shape_228.setTransform(949.3,555.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgYAaQgMgLAAgPQAAgOAMgLQAKgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgKgKg");
	this.shape_229.setTransform(932,557.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgLAOABQAPgBALALQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_230.setTransform(936.9,540.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgZAaQgLgLABgPQgBgOALgLQALgKAOgBQAPABALAKQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgLgKg");
	this.shape_231.setTransform(928.3,526.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgZAaQgLgLABgPQgBgOALgKQALgMAOAAQAPAAALAMQAKAKAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_232.setTransform(922.1,544.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgKAOgBQAPABALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_233.setTransform(910,524.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgLAOABQAPgBALALQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_234.setTransform(904.2,540.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FCD1CA").s().p("AhoEKQiwguhAidQg8iSAzjEILbC9Qg1DIh0BgQhaBKh0AAQgzAAg4gOg");
	this.shape_235.setTransform(938.3,534);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("Ai2QtQhugUhthMQiKhghYieQh5jZCGkFQAuhaBah5ICMi5QB6iuCNmQQBGjIAtilIAaAHQhGCxhGDHQiNGPAEBvIKfCuQBAhrBGmbQAjjOAWi4IAjAJQgiCWghDJQhCGRACD6QABA9ASCqQASCggCBZQgHEnjOCAQiaBginARQgkADggAAQhcAAhOgag");
	this.shape_236.setTransform(939.4,481.7);

	this.instance_69 = new lib.ClipGroup();
	this.instance_69.parent = this;
	this.instance_69.setTransform(954.7,506.7,1,1,0,0,0,164.3,163.1);

	this.instance_70 = new lib.Tween1("synched",0);
	this.instance_70.parent = this;
	this.instance_70.setTransform(955.5,499.5);
	this.instance_70._off = true;

	this.instance_71 = new lib.Tween2("synched",0);
	this.instance_71.parent = this;
	this.instance_71.setTransform(955.5,499.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_69},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221}]}).to({state:[{t:this.instance_70}]},142).to({state:[{t:this.instance_71}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(142).to({_off:false},0).to({_off:true},5).wait(1));

	// h3
	this.instance_72 = new lib.h3_1();
	this.instance_72.parent = this;
	this.instance_72.setTransform(847.2,442.1,1,1,-21,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_72).to({x:841.2},3,cjs.Ease.get(1)).to({x:847.2},3,cjs.Ease.get(1)).to({x:841.2},5,cjs.Ease.get(1)).to({rotation:8.3,x:857,y:440.2},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:863.3,y:435.5},5).to({regX:0.1,regY:0.1,rotation:-21,x:862.2,y:434.1},12).to({x:847.2,y:442.1},4).to({x:841.2},16,cjs.Ease.get(1)).to({regX:0.2,rotation:-6,x:843.6,y:448.8},4,cjs.Ease.get(1)).to({regX:0.1,rotation:8.3,x:857,y:440.2},2,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:863.3,y:435.5},5).to({regX:0.1,regY:0.1,rotation:8.3,x:857,y:440.2},7).to({rotation:-21,x:847.2,y:442.1},5).to({x:841.2},4,cjs.Ease.get(1)).to({rotation:8.3,x:857,y:440.2},4,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:863.3,y:435.5},5).wait(56).to({regX:0.1,regY:0.1,rotation:-21,x:847.2,y:442.1},5).wait(1));

	// milk
	this.instance_73 = new lib.milk_1();
	this.instance_73.parent = this;
	this.instance_73.setTransform(1090,393.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(15).to({rotation:-0.8,x:1089.2,y:392.6},4).to({rotation:-5.5,x:1084.8,y:387.8},5).to({regX:0.1,regY:0.1,rotation:23.2,x:1105.2,y:414.9},8).to({regX:0,regY:0,rotation:0,x:1090,y:393.5},7).to({rotation:-0.8,x:1089.2,y:392.6},4).to({rotation:-5.5,x:1084.8,y:387.8},5).to({regX:0.1,regY:0.1,rotation:23.2,x:1105.2,y:414.9},8).to({regX:0,regY:0,rotation:0,x:1090,y:393.5},10).to({rotation:-0.8,x:1089.2,y:392.6},4).to({rotation:-5.5,x:1084.8,y:387.8},9).to({regX:0.1,regY:0.1,rotation:23.2,x:1105.2,y:414.9},8).to({regX:0,regY:0,rotation:0,x:1090,y:393.5},6).to({rotation:2,x:1084.8,y:390.2},7).wait(42).to({rotation:0,x:1090,y:393.5},5).wait(1));

	// Layer 19
	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AhABbQgWg4gvg2Qgxg4gCgGQgEgLAKgFQAHgDAZgDQBJgHArgSQAsgTAXADQAMACACAFIAPAPQAZATA2AYIAaATQAEADAFAIQAMAWgMAbQgKAVgeAgQhGBNg3ANQgKACgIAAQgrAAgSg2g");
	this.shape_237.setTransform(1097.6,406.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AhGBbQgVgygqgxQgsgzgBgFQgEgLAKgFQAIgFAXgIQA/gTAqgSQAogRAXAFQANADAFAHQANALAMAJQAZASAwAWIAZASQAFAFADAKQAKAXgNAaQgQAdghAfQhFBGgzAEIgJABQgvAAgSg2g");
	this.shape_238.setTransform(1097.5,405);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgHCRQg0gBgSg1QgTgtgmgsQgngtgBgGQgCgKAJgFIAegVQA2gfApgRQAlgPAVAGQAOAFAIAJQASAPASAKQAZASArATQARAMAFAFQAHAHABANQAIAWgPAbQgWAkgjAdQg/A8guAAIgGAAg");
	this.shape_239.setTransform(1097.5,403.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgTCRQgwgJgRgvQgSgnghgnQgigoAAgGQgBgJAJgFQAMgKAQgTQAtgrAngQQAigOAUAIQAQAIAJAKQAZATAXALQAYARAmARQAPAKAGAGQAHAJAAAPQAGAVgRAeQgcAqglAcQg2AvgoAAQgIAAgJgCg");
	this.shape_240.setTransform(1097.4,402.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgfCPQgsgQgQgoQgRgigbgiQgdgiAAgGQAAgJAIgFQAOgMANgYQAkg3AlgPQAfgNAVAJQAQAKALAMQAeAXAdAMQAYAQAgAPQAOAJAFAGQAJALgCARQADAWgSAeQghAxgpAaQgtAlgiAAQgOAAgNgHg");
	this.shape_241.setTransform(1097.4,401.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgrCNQgpgXgPgiQgPgdgWgcQgZgeABgFQACgIAIgGQAPgNAKgeQAahDAkgPQAcgLAUALQARAMAOANQAjAbAiAOQAXAPAcANQALAIAGAGQAKANgDATQABAVgUAgQgoA4grAYQglAbgdAAQgTAAgQgMg");
	this.shape_242.setTransform(1097.4,400.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("Ag4CLQglgfgNgbQgOgYgRgWQgUgaACgGQACgGAIgGQARgPAHgkQARhPAigNQAZgKATAMQATAOAPAPQApAfAoAPQAWAOAXALQAJAHAGAGQALAPgFAVQgBAWgWAgQgtA/guAXQgeATgYAAQgYAAgTgTg");
	this.shape_243.setTransform(1097.4,399.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AhECIQgigngMgVIgZgjQgPgVADgGQADgGAHgGQATgRAEgpQAIhbAggMQAWgJASAPQAVAQARAQQAvAjAsAQIAoAWQAIAFAFAHQAMARgGAWQgDAXgYAiQgzBFgwAVQgYANgTAAQgdAAgUgbg");
	this.shape_244.setTransform(1097.4,398.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AhRCEIgpg9IgSgYQgKgQADgGIALgMQAVgSABgvQgChnAfgLQASgHASAPIAqAkQA0AnAyASIAiATQAGAEAFAHQANATgHAYQgGAXgZAiQg5BMgzAUQgRAIgQAAQghAAgWglg");
	this.shape_245.setTransform(1097.4,397.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AhdB/Qgbg1gJgIQgKgIgCgGQgFgKADgGIAMgMQAWgVgBgzQgLhzAegLQAOgGARASIAuAnQA5ArA3ATIAcAQQAFADAFAHQAOAVgIAaQgJAXgaAkQg/BSg1ATQgNAEgLAAQgmAAgWgxg");
	this.shape_246.setTransform(1097.4,396.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AhcCEQgfgwgHgQIgLgVQgFgKAEgHIALgLQAUgTAAgtQgGhlAdgQQASgSATAQQAWARAVAVQAzAoAyAVIAhAbQAGAFAFAIQANASgIAYQgHAYgaAhQg5BKg0ATQgQAGgPAAQgmAAgXgpg");
	this.shape_247.setTransform(1099.1,400.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AhbCJQgjgqgFgYIgJgbQgFgLADgGQAEgHAGgGQATgPAAgoQAAhYAcgUQAWgfAUAPQAWAPASAVQAuAnAsAVIAmAnQAHAHAFAIQALAPgGAXQgGAYgZAfQgzBCgzATQgUAIgTAAQglAAgYgig");
	this.shape_248.setTransform(1100.9,404.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AhZCPQgnglgDgfQgGgbgDgIQgFgLADgGQAEgIAGgFQAQgNACgiQAFhKAbgZQAagrAWANQAVANAPAVQApAlAmAXQAZAfATATIANARQAKAOgGAUQgEAYgZAeQgtA5gxATQgbALgWAAQgkAAgXgbg");
	this.shape_249.setTransform(1102.6,407.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AhYCWQgrgggBgnQgEghgDgJQgFgLACgGQADgJAGgFQAPgKADgcQAKg9AagdQAeg4AYALQATALAOAWQAiAjAhAYQAbAmAXAYIANASQAIANgEASQgCAYgYAcQgpAxgvATQghAOgbAAQghAAgXgUg");
	this.shape_250.setTransform(1104.3,411.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AhXCbQgugaAAguQgDgogDgKQgFgLACgGQADgJAFgFQAOgIAEgVQAPgwAZgiQAihEAaAJQARAJANAWQAcAiAcAZQAbAtAbAcIAPAUQAHALgEAQQgBAYgXAaQgjApgtATQgpASghAAQgdAAgWgPg");
	this.shape_251.setTransform(1106,415.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AhVChQgzgVACg2QgBgugDgKQgFgMACgGQABgKAGgDQAMgHAFgPQAUgjAZglQAmhRAbAIQARAGAKAXQAXAgAVAZQAdA0AfAhIAPAXQAGAJgCANQAAAZgWAXQgdAhgsATQgzAWgnAAQgYAAgTgJg");
	this.shape_252.setTransform(1107.7,418.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AhUCmQg3gPAEg+QAAg0gDgMQgFgLABgGQACgKAFgEQAKgEAHgJQAZgVAYgrQAphdAdAGQAQAEAJAXIAgA6QAeA6AjAlIARAaQAEAHgBALQABAZgVAVQgYAZgqATQg+AbgsAAQgTAAgQgFg");
	this.shape_253.setTransform(1109.5,422.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AhTCrQg7gKAGhFQACg7gEgMQgFgMABgGQABgKAFgEIAQgFQAegIAYguQAthqAeAEQAQACAGAYIAVA4QAfBCAoAqIARAbQACAFABAJQADAZgVAUQgSAQgpATQhLAig0AAQgMAAgKgCg");
	this.shape_254.setTransform(1111.2,426.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AhFCoQg6gHAChFQgCg6gKgSQgLgRAAgHQAAgLAGgEIATgFQAkgHAagrQAthdAdAEQAPACAGAVIAUAyQAeA7AqAnIASAbQADAEABAJQAEAZgTAUQgRASgnAUQhPAqg0AAIgPgBg");
	this.shape_255.setTransform(1109.3,423.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("Ag3CkQg6gEgChEQgFg6gQgYQgSgXAAgHQgBgLAHgEIAVgFQAqgIAdgmQAuhRAbAEQAPACAFASIATAtQAeA0ArAmIAUAYQADAEABAJQAGAYgSAWQgQASglAWQhTAxg1AAIgHAAg");
	this.shape_256.setTransform(1107.3,420.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgoCgQg7AAgGhEQgIg5gXgfQgXgdgBgHQgBgLAHgEQAIgDAPgCQAxgIAggiQAthFAaAEQAOACAFAQIASAmQAdAuAtAjQARARAEAGQAEAEACAIQAHAYgRAXQgPATgkAYQhTA5g2AAIgBAAg");
	this.shape_257.setTransform(1105.4,417.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AheBcQgMg5gdgkQgeglAAgFQgDgMAIgEQAIgDARgCQA3gIAjgeQAtg4AZADQAOACAEANIARAhQAcAnAwAgIAWAWQADAFADAIQAIAWgPAYQgOATgiAbQhRA+g2ADIgFAAQg2AAgJhAg");
	this.shape_258.setTransform(1103.4,414.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AhUBcQgPg5gjgqQgkgrgBgGQgDgLAIgFQAIgDAUgCQA8gHAmgbQAsgrAZADQANACAEAKIAQAbQAbAgAyAeIAYAVQADAEAEAIQAJAWgOAYQgNAVghAcQhNBDg2AHIgKAAQgyAAgMg8g");
	this.shape_259.setTransform(1101.5,412);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AhKBbQgSg4gpgwQgrgygBgFQgEgMAJgFQAHgCAXgDQBDgHAogXQAsgfAYAEQANABADAIIAPAVQAbAaAzAbIAZATQAEAEAEAIQALAXgNAYQgLAVggAfQhKBHg3AKIgOACQguAAgPg6g");
	this.shape_260.setTransform(1099.5,409.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AhJCpQg7gJADhEQgBg7gHgQQgKgQABgGQAAgLAGgEIARgEQAjgIAZgsQAuhhAdAEQAPACAGAWIAUA0QAfA9ApAoIASAbQACAFABAIQAEAZgUAUQgRARgnAUQhPAog0AAIgQgBg");
	this.shape_261.setTransform(1109.9,424.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AhACmQg6gFABhFQgEg6gMgVQgOgTABgGQgBgLAHgFIATgEQAmgIAcgpQAthZAdAFQAOACAGATIAUAxQAeA4AqAnIATAZQADAEABAJQAFAZgTAVQgRARgmAVQhRAtg0AAIgMgBg");
	this.shape_262.setTransform(1108.5,422.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("Ag1CkQg7gEgChEQgGg6gQgZQgSgXAAgHQgBgLAHgEIAUgFQArgIAegmQAthPAcAEQAOABAFASIATAsQAeA0AsAlIATAYQADAFACAIQAGAZgSAVQgQASglAXQhTAyg1AAIgGAAg");
	this.shape_263.setTransform(1107.1,420.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgrChQg7gBgFhEQgIg5gVgeQgWgcAAgGQgCgLAHgFIAXgEQAvgIAfgjQAuhHAaAEQAOABAFAQIATAoQAdAvAtAkIAUAXQAEAEACAJQAGAYgRAWQgPATgkAYQhTA3g2AAIgCAAg");
	this.shape_264.setTransform(1105.8,418.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AhkBcQgJg5gagiQgbghgBgGQgBgLAIgEQAHgDARgCQAzgIAiggQAtg/AaAEQANACAFAOIASAkQAbAqAvAiIAWAXQADAEADAIQAHAXgQAXQgOATgjAaQhTA7g2ACIgDAAQg4AAgIhCg");
	this.shape_265.setTransform(1104.4,416.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AhcBcQgNg5geglQgfgmgBgGQgCgLAIgFQAIgDASgCQA4gHAjgeQAsg2AaAEQAOACAEAMIARAgQAbAmAwAfIAXAWQADAEADAJQAJAWgQAYQgNATgiAbQhQA/g2AEIgGAAQg1AAgKg/g");
	this.shape_266.setTransform(1103,414.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AhVBcQgPg4gigqQgkgrgBgFQgDgMAJgEQAHgDAUgDQA8gHAmgbQArgtAaAEQANACAEAKIAQAcQAbAhAxAeIAYAVQAEAEADAIQAJAWgOAYQgMAVgiAcQhNBCg2AGIgKABQgyAAgMg9g");
	this.shape_267.setTransform(1101.7,412.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AhOBcQgRg5gngtQgogvgBgGQgEgMAJgEQAIgDAVgDQBBgHAngYQAsgkAYADQANACADAJIAQAXQAbAdAzAbIAYAVQAEAEAEAIQAKAWgOAYQgLAVggAeQhMBGg1AIIgNABQgvAAgPg6g");
	this.shape_268.setTransform(1100.3,410.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AhHBbQgTg4gsgyQgsgzgBgGQgEgLAJgFQAHgDAYgDQBEgHAqgVQArgbAYADQAMABADAHIAQATQAaAYA0AaIAZAUQAEADAEAJQALAWgMAZQgLAVgfAfQhJBJg3ALQgHACgIAAQgtAAgQg5g");
	this.shape_269.setTransform(1099,408.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AhEBbQgVg0gtgzQgtg0gBgGQgEgLAKgFQAIgEAXgGQBCgQArgSQApgRAXAEQAMADAEAGIAXATQAZASAyAXIAZASQAFAFADAJQALAWgNAaQgOAbggAfQhFBJg1AHIgMABQgtAAgSg2g");
	this.shape_270.setTransform(1097.6,405.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AhJBbQgUgwgpgvQgqgxgBgFQgDgLAKgFQAJgGAVgKQA8gYApgRQAngRAWAGQAOAEAGAHQAPANAOAJQAZATAvAVQASAMAFAFQAGAGADALQAIAWgNAbQgTAfghAfQhEBDgyACIgFAAQgyAAgSg2g");
	this.shape_271.setTransform(1097.5,404.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgICRQgzgCgTg0QgTgtglgsQgngsAAgGQgCgKAJgFIAdgVQA2ggAogRQAmgQAUAHQAPAGAHAIQATAQASAKQAZARArAUQAQALAGAFQAHAIABAMQAHAXgPAbQgWAkgjAdQg/A7gtAAIgHAAg");
	this.shape_272.setTransform(1097.5,403.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgQCQQgxgHgSgvQgSgpghgoQgjgpgBgGQgBgKAJgFQALgJARgSQAvgoAogQQAjgOAUAHQAPAHAJAKQAXASAWALQAYARAnASQAQAKAGAGQAHAJAAAOQAGAWgQAcQgaApgmAcQg4AygpAAQgHAAgHgCg");
	this.shape_273.setTransform(1097.4,402.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgYCQQgvgMgQgsQgRglgfgkQgfgmAAgFQgBgKAJgFQANgKAOgWQApgwAmgQQAhgNAUAIQAQAJAKAKQAbAVAaAMQAYARAjAQQAPAKAFAGQAIAKAAAPQAEAWgRAeQgfAtgnAbQgyAqglAAQgLAAgKgEg");
	this.shape_274.setTransform(1097.4,402);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AghCPQgsgRgPgnQgRgigaggQgdgiABgGQAAgJAIgFQAOgMANgZQAig5AlgPQAfgMAUAJQAQAKAMAMQAfAYAdANQAYAPAgAPQANAJAFAGQAJAMgBARQACAVgSAfQgjAygoAaQgsAighAAQgPAAgOgHg");
	this.shape_275.setTransform(1097.4,401.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgpCOQgqgXgPgiQgPgegXgdQgZgeABgGQABgIAIgGQAPgNALgdQAbhBAkgPQAdgLATALQARALAOANQAjAaAhAOQAXAPAcAOQAMAHAGAHQAJAMgDATQACAVgUAgQgmA2grAZQgnAdgdAAQgTAAgPgLg");
	this.shape_276.setTransform(1097.4,400.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgyCMQgngbgOgfQgOgagUgZQgWgcACgFQACgHAHgGQAQgOAJghQAVhKAjgOQAagKAUAMQASANAPAOQAmAdAlAOQAXAPAZAMQAKAHAGAGQAKAOgEAUQAAAWgVAgQgqA7gtAYQgiAXgZAAQgXAAgRgQg");
	this.shape_277.setTransform(1097.4,399.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("Ag6CKQglgggNgbQgNgWgRgVQgSgZACgFQADgHAHgFQARgQAHglQAPhSAhgNQAYgKATANQAUAPAPAPQArAgAoAPQAXAOAVAKQAJAHAGAGQALAQgFAVQgCAWgWAhQguBAguAWQgeASgWAAQgaAAgSgVg");
	this.shape_278.setTransform(1097.4,399.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AhDCIQgigmgMgVIgZgkQgPgVACgGQADgHAHgGQATgQAEgpQAJhaAhgMQAVgJASAOQAVAQARAQQAuAiAtARIAnAWQAJAGAFAHQAMAQgGAWQgDAXgYAhQgzBFgvAWQgZANgTAAQgdAAgUgbg");
	this.shape_279.setTransform(1097.4,398.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AhMCFQgggqgLgSIgVgcQgLgSACgGIALgMQAUgRADgtQABhiAggMQATgIASAPIApAjQAyAlAwARIAjAUQAHAFAGAHQAMASgHAXQgEAXgZAiQg2BKgyAUQgUAKgRAAQggAAgVgig");
	this.shape_280.setTransform(1097.4,397.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AhVCCQgdgwgKgMQgLgMgFgJQgJgOADgGIAMgMQAVgTAAgxQgEhqAegMQARgGARAQIAsAlQA1AoA0ASIAgASQAGAEAFAHQANATgIAZQgGAXgaAjQg6BOg0AUQgQAGgOAAQgjAAgWgpg");
	this.shape_281.setTransform(1097.4,397.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AhDCnQg6gHABhEQgCg6gLgUQgMgSAAgGQAAgLAGgEIATgFQAlgIAbgqQAthbAdAEQAPACAFAVIAUAxQAeA6AqAnIATAaQADAFABAIQAEAZgTAVQgRARgnAVQhOArg1AAIgOgBg");
	this.shape_282.setTransform(1109,422.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgyCjQg6gDgEhEQgGg6gSgaQgUgZAAgHQgBgLAHgEIAWgFQAsgIAeglQAthNAcAEQAOACAFASIATAqQAdAyAsAlIAUAYQADAEACAJQAGAYgSAWQgPASglAXQhTA0g2AAIgEAAg");
	this.shape_283.setTransform(1106.7,419.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AhXBcQgPg5gggoQgigpgBgGQgDgLAIgFQAIgDATgCQA7gHAkgcQAsgwAaAEQANABAEALIARAdQAbAjAxAeIAXAWQAEAEADAIQAJAWgPAYQgNAVghAbQhPBCg2AFIgIAAQgzAAgLg9g");
	this.shape_284.setTransform(1102.1,412.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AhMBcQgSg5gogvQgpgwgCgGQgDgLAJgFQAHgDAWgDQBCgHAogXQAsghAYADQANACADAIIAQAWQAaAbAzAbQAUAPAFAFQAEAEAEAIQAKAXgNAYQgLAVggAeQhKBHg2AJIgOABQgvAAgPg5g");
	this.shape_285.setTransform(1099.9,409.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AhGBfQgVg3gqgwQgrgygCgFQgEgMAJgFQAHgDAWgDQBCgIAmgYQAnggAXABQANABAEAHIASAUQAdAXA2AZIAaASQAEAEAEAIQAMAWgLAZQgKAWgfAhQhGBMg3ANQgJACgIAAQgsAAgSg3g");
	this.shape_286.setTransform(1097.4,405.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AhMBjQgWg3gkgrQglgpgCgGQgEgLAIgFQAHgEAUgDQA7gKAhgcQAhguAYAAQANAAAGAJIAWAXQAhAdA1AYIAaATQAEADAFAJQAMAWgMAZQgLAWgeAgQhHBMg3AMQgIACgJAAQgsAAgRg3g");
	this.shape_287.setTransform(1097.2,404.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AhSBoQgVg4gfgkQgfgjgCgFQgEgMAHgFQAHgEASgDQA0gMAbghQAbg8AagBQANgBAHALIAaAcQAlAhA1AZIAaASQAEAEAEAIQAMAWgMAZQgKAWgfAhQhHBLg2AMQgJACgIAAQgtAAgRg3g");
	this.shape_288.setTransform(1096.9,403.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AhYBsQgVg4gYgdQgagcgCgGQgEgLAHgFQAHgEAOgEQAtgOAWgmQAVhJAcgDQAOgBAIANIAdAgQApAlA1AZIAaATQAEAEAEAIQAMAWgMAZQgLAWgeAgQhIBLg2AMQgJACgJAAQgsAAgRg4g");
	this.shape_289.setTransform(1096.7,402.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AheBxQgVg4gTgXQgUgWgCgGQgEgKAGgGQAHgEAMgEQAmgPAQgrQAQhYAdgEQAOgCALAPIAgAlQAtApA0AaIAaATQAEADAEAIQAMAWgMAaQgLAWgfAfQhIBLg2AMQgIACgIAAQgtAAgRg4g");
	this.shape_290.setTransform(1096.5,401.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AhkB1QgVg4gNgQQgOgQgCgGQgEgLAFgFIAQgJQAggQAKgwQAKhlAegFQAPgDAMARIAkApQAxAuA0AZIAaATQAEAEAEAIQAMAWgNAZQgLAWgeAgQhJBKg2AMQgJACgIAAQgtAAgQg5g");
	this.shape_291.setTransform(1096.2,401);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AhrB5QgUg4gHgJQgJgJgCgGQgDgLAEgGIANgKQAZgRAFg0QAEhzAfgHQAPgEAOATIAoAuQA0AyA1AaIAZATQAEADAEAJQAMAVgNAaQgLAWgfAfQhIBKg3AMIgPACQguAAgRg6g");
	this.shape_292.setTransform(1096,400.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AhiBzQgUg4gQgSQgQgTgCgGQgEgLAFgFIARgIQAjgQAMguQANhfAdgFQAPgDALAQIAjAoQAvAsA0AZIAaATQAEAEAEAIQAMAVgNAaQgKAWgfAgQhIBKg3AMQgIACgIAAQgtAAgRg5g");
	this.shape_293.setTransform(1096.3,401.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AhaBtQgUg4gYgbQgYgbgCgGQgEgLAGgGQAHgEAOgEQAsgNAUgnQAVhNAbgDQAOgBAKANIAdAiQAqAlA0AaIAaASQAEAEAFAIQAMAWgNAZQgKAWgfAgQhIBLg2AMQgJACgIAAQgsAAgSg4g");
	this.shape_294.setTransform(1096.7,402.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AhRBnQgVg4ggglQgggkgCgGQgEgLAHgFQAHgEASgEQA2gLAcggQAcg5AagBQANgBAHALIAZAbQAkAgA1AYIAaATQAEAEAEAIQAMAWgMAZQgKAWgeAgQhIBMg2AMQgJACgIAAQgsAAgSg3g");
	this.shape_295.setTransform(1097,403.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AhIBhQgWg4gngtQgpgvgCgFQgEgMAJgFQAHgDAVgDQA/gJAkgaQAlgmAXABQANABAFAIIAUAVQAeAZA2AZIAaASQAEAEAEAIQAMAWgLAZQgLAWgeAhQhHBMg2AMQgJADgJAAQgrAAgSg3g");
	this.shape_296.setTransform(1097.3,405.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_237}]}).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_292}]},42).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_237}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_237).wait(15).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).wait(1));

	// h1
	this.instance_74 = new lib.h11_1();
	this.instance_74.parent = this;
	this.instance_74.setTransform(1067.9,427);

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(15).to({regY:0.1,rotation:-8.2,x:1068,y:420},9).to({regX:0.1,regY:0.2,rotation:20.5,x:1075,y:435.1},8).to({regX:0,regY:0,rotation:0,x:1067.9,y:427},7).to({regY:0.1,rotation:-8.2,x:1068,y:420},9).to({regX:0.1,regY:0.2,rotation:20.5,x:1075,y:435.1},8).to({regX:0,regY:0,rotation:0,x:1067.9,y:427},10).to({regY:0.1,rotation:-8.2,x:1068,y:420},13).to({regX:0.1,regY:0.2,rotation:20.5,x:1075,y:435.1},8).to({regX:0,regY:0,rotation:0,x:1067.9,y:427},6).to({regY:0.1,rotation:-0.7,x:1064,y:420},7).wait(42).to({regY:0,rotation:0,x:1067.9,y:427},5).wait(1));

	// h2
	this.instance_75 = new lib.h2copy();
	this.instance_75.parent = this;
	this.instance_75.setTransform(1088.5,467.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(148));

	// watch
	this.instance_76 = new lib.watch_1();
	this.instance_76.parent = this;
	this.instance_76.setTransform(819.8,571.2,1.053,1.052,-9.5,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(36).to({regY:0,rotation:0,x:818,y:566.6},9).to({regY:0.1,rotation:-9.5,x:819.8,y:571.2},9).to({regY:0,rotation:0,x:818,y:566.6},9).to({regY:0.1,rotation:-9.5,x:819.8,y:571.2},9).to({regY:0,rotation:0,x:818,y:566.6},8).wait(10).to({regY:0.1,rotation:-9.5,x:819.8,y:571.2},9).to({regY:0,rotation:0,x:818,y:566.6},9).wait(34).to({regY:0.1,rotation:-9.5,x:819.8,y:571.2},5).wait(1));

	// bag
	this.instance_77 = new lib.bag_1();
	this.instance_77.parent = this;
	this.instance_77.setTransform(795.9,618.4,1,1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(36).to({rotation:0,x:786.7,y:609.3},9).to({rotation:-9.5,x:795.9,y:618.4},9).to({rotation:0,x:786.7,y:609.3},9).to({rotation:-9.5,x:795.9,y:618.4},9).to({rotation:0,x:786.7,y:609.3},8).wait(10).to({rotation:-9.5,x:795.9,y:618.4},9).to({rotation:0,x:786.7,y:609.3},9).wait(34).to({rotation:-9.5,x:795.9,y:618.4},5).wait(1));

	// h4
	this.instance_78 = new lib.h4_1();
	this.instance_78.parent = this;
	this.instance_78.setTransform(842.6,558,1,1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(36).to({rotation:0,y:557.4},9).to({rotation:-9.5,y:558},9).to({rotation:0,y:557.4},9).to({rotation:-9.5,y:558},9).to({rotation:0,y:557.4},8).wait(10).to({rotation:-9.5,y:558},9).to({rotation:0,y:557.4},9).wait(34).to({rotation:-9.5,y:558},5).wait(1));

	// 腳
	this.instance_79 = new lib.腳();
	this.instance_79.parent = this;
	this.instance_79.setTransform(944.9,636.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(148));

	// 影
	this.instance_80 = new lib.影();
	this.instance_80.parent = this;
	this.instance_80.setTransform(964.2,675.8);
	this.instance_80.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(148));

	// bg
	this.instance_81 = new lib.bg_1();
	this.instance_81.parent = this;
	this.instance_81.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(148));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Path_0.png?1555490645970", id:"Path_0"},
		{src:"images/bag.png?1555490645970", id:"bag"},
		{src:"images/bg.jpg?1555490645970", id:"bg"},
		{src:"images/bwheel.png?1555490645970", id:"bwheel"},
		{src:"images/cleanb.png?1555490645970", id:"cleanb"},
		{src:"images/cleanh.png?1555490645970", id:"cleanh"},
		{src:"images/cook.png?1555490645970", id:"cook"},
		{src:"images/egg.png?1555490645970", id:"egg"},
		{src:"images/f01.png?1555490645970", id:"f01"},
		{src:"images/f3.png?1555490645970", id:"f3"},
		{src:"images/fl2.png?1555490645970", id:"fl2"},
		{src:"images/h11.png?1555490645970", id:"h11"},
		{src:"images/h2.png?1555490645970", id:"h2"},
		{src:"images/h3.png?1555490645970", id:"h3"},
		{src:"images/h4.png?1555490645970", id:"h4"},
		{src:"images/milk.png?1555490645970", id:"milk"},
		{src:"images/nb.png?1555490645970", id:"nb"},
		{src:"images/nb1.png?1555490645970", id:"nb1"},
		{src:"images/po.png?1555490645970", id:"po"},
		{src:"images/spoon.png?1555490645970", id:"spoon"},
		{src:"images/swheel.png?1555490645970", id:"swheel"},
		{src:"images/v03.png?1555490645970", id:"v03"},
		{src:"images/v04.png?1555490645970", id:"v04"},
		{src:"images/v05.png?1555490645970", id:"v05"},
		{src:"images/v06.png?1555490645970", id:"v06"},
		{src:"images/v1.png?1555490645970", id:"v1"},
		{src:"images/v2.png?1555490645970", id:"v2"},
		{src:"images/v7.png?1555490645970", id:"v7"},
		{src:"images/wtach.png?1555490645970", id:"wtach"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;