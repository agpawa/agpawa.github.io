(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.timeline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// minutes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgaAuQgKgMAAgkQAAgZAKgQQAKgPARAAQASAAAJANQAJANAAAgQAAAbgKAQQgJAQgSAAQgRAAgJgNgAgUgBQAAAvAUAAQALAAAFgLQAGgKgBgaQAAgSgCgJQgBgIgGgEQgEgFgIAAQgVAAABAsg");
	this.shape.setTransform(970.7,49.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgjAJQAAgTAPgWQAPgWAPgEIAIAIQgHADgMAQQgNAPgBAJQAGgGALAAQAPAAAJAJQAJAJAAARQAAARgJAKQgKAKgOAAQglAAAAgygAgSAVQAAAZATAAQAIAAAGgGQAEgHAAgKQABgLgGgHQgFgFgIAAQgTAAAAAVg");
	this.shape_1.setTransform(962.35,49.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgbAuQgJgMAAgkQAAgZAKgQQAKgPARAAQASAAAJANQAJANAAAgQAAAbgKAQQgJAQgSAAQgRAAgKgNgAgUgBQAAAvAUAAQALAAAFgLQAGgKgBgaQAAgSgCgJQgBgIgGgEQgEgFgIAAQgVAAABAsg");
	this.shape_2.setTransform(809.6,49.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AggAxIAHgNQALAJAJAAQAVAAAAgbQAAgZgVAAQgKAAgJAIIgEgDIAAg3IA4AAIAAANIgqAAIAAAcQAGgEAIAAQAQAAAIAJQAJAKgBAQQAAArglAAQgQAAgLgJg");
	this.shape_3.setTransform(801.3,49.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgaAuQgKgMAAgkQAAgZAKgQQAKgPARAAQASAAAJANQAJANAAAgQAAAbgJAQQgKAQgSAAQgRAAgJgNgAgVgBQAAAvAVAAQAKAAAGgLQAFgKABgaQgBgSgBgJQgDgIgFgEQgEgFgHAAQgWAAAAAsg");
	this.shape_4.setTransform(648.55,49.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AANA6IAAggIgzAAIAAgJIA8hJIAGAAIAABHIALAAIAAALIgLAAIAAAggAgUAPIAhAAIAAgog");
	this.shape_5.setTransform(640.125,49.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgbAuQgJgMAAgkQAAgZAKgQQAKgPARAAQASAAAJANQAJANAAAgQAAAbgKAQQgJAQgSAAQgRAAgKgNgAgUgBQgBAvAVAAQAKAAAGgLQAGgKAAgaQgBgSgCgJQgCgIgEgEQgFgFgIAAQgUAAAAAsg");
	this.shape_6.setTransform(487.5,49.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgUA4QgHgDgEgDIAHgNQAIAJAMAAQAUAAAAgVQAAgKgGgGQgHgHgJAAIgCAAIAAgLIABAAQAUAAAAgSQAAgRgSgBQgLABgFAGIgHgKQAHgKARAAQAOAAAJAIQAKAIgBANQAAAJgEAIQgGAHgHADQAKACAFAHQAHAIAAALQAAAPgKAKQgLAIgRAAQgHAAgIgDg");
	this.shape_7.setTransform(479.05,49.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgaAuQgKgMAAgkQAAgZAKgQQAKgPARAAQASAAAJANQAJANAAAgQAAAbgJAQQgKAQgSAAQgRAAgJgNgAgVgBQABAvAUAAQALAAAFgLQAFgKAAgaQAAgSgBgJQgDgIgFgEQgEgFgHAAQgWAAAAAsg");
	this.shape_8.setTransform(326.45,49.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AghA6IAAgDIAjg3QALgQgBgMQAAgQgRAAQgFAAgGADQgGAEgCAFIgKgJQADgHAHgFQAIgEALAAQAPAAAKAHQAJAIAAAOQAAANgMASIgZApIAsAAIAAAOg");
	this.shape_9.setTransform(317.9,49.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgbAuQgJgMAAgkQAAgZAKgQQAKgPARAAQASAAAJANQAJANAAAgQAAAbgKAQQgJAQgSAAQgRAAgKgNgAgUgBQgBAvAVAAQALAAAFgLQAGgKAAgaQAAgSgDgJQgCgIgEgEQgFgFgIAAQgUAAAAAsg");
	this.shape_10.setTransform(165.4,49.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AAEA6IAAhXIgWAOIAAgOQAIgFAKgIQAJgIAGgGIAFAAIAAByg");
	this.shape_11.setTransform(156.35,49.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgaAuQgKgMAAgkQAAgZAKgQQAKgPARAAQASAAAJANQAJANAAAgQAAAbgJAQQgKAQgSAAQgRAAgJgNgAgVgBQABAvAUAAQALAAAFgLQAFgKAAgaQAAgSgBgJQgDgIgFgEQgEgFgHAAQgWAAAAAsg");
	this.shape_12.setTransform(0.2,49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// minute_label
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglAzIAIgTQARAKAKABQASgBAAgQQAAgLgRgIQgOgHgFgCQgFgDgEgEQgDgEgCgFQgCgFAAgFQAAgPAKgIQALgHAPgBQANABATAHIgGATQgMgKgMAAQgGAAgFAEQgGADABAGQAAAKAMAHIAOAGQANAGAHAHQAFAIABALQAAAQgMAJQgKAJgSAAQgTgBgQgIg");
	this.shape_13.setTransform(516.05,86.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjAtQgRgRAAgbQAAgbASgSQAPgPAUAAQAYAAAOAOQAOANAAAXQAAAGgBAFIhTAAQAAAUAMALQAJAKAOAAQASgBAMgJIAJAOQgFAEgKAEQgMAFgPAAQgVAAgPgPgAAggMQABgMgIgJQgJgIgOgBQgNABgJAIQgJAJgBAMIA+AAIAAAAg");
	this.shape_14.setTransform(505.65,86.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNBBQgJgLAAgPIAAhBIgOAAIAAgPIAOAAIAAgZIAUgIIAAAhIAfAAIAAAPIgfAAIAAA5QAAAOAEAGQAFAHALAAQAHAAAJgFIADASQgNAEgPAAQgNgBgJgJg");
	this.shape_15.setTransform(495.475,85.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkAwQgKgLAAgUIAAhKIAVAAIAABIQAAAaAXABQAJAAAIgHQAJgFACgIIAAhPIAVAAIAABxIgVAAIAAgPQgDAGgLAGQgKAGgJAAQgTAAgKgLg");
	this.shape_16.setTransform(484.975,87);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAZA6IAAhCQABgSgGgHQgGgIgNAAQgGAAgHAFQgIAEgEAGIAABUIgVAAIAAhxIAOAAIAHAOQAKgRAWAAQAmAAAAAvIAABFg");
	this.shape_17.setTransform(472.95,86.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDBPIAAhhIgQAAIAAgRIAkAAIAABygAgBg5QgDgDAAgGQAAgFADgEQADgDAFAAQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_18.setTransform(463.525,84.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgCBQIgjhmIgSBkIgUAAIAdidIAKAAIAkByIAjhyIAJAAIAhCdIgVAAIgThkIgiBmg");
	this.shape_19.setTransform(452.95,84.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,2,1).p("AAAiIIAAER");
	this.shape_20.setTransform(885.25,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy_copy_copy
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,2,1).p("AAAiIIAAER");
	this.shape_21.setTransform(724.25,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy_copy
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,2,1).p("AAAiIIAAER");
	this.shape_22.setTransform(241.4,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,2,1).p("AAAiIIAAER");
	this.shape_23.setTransform(402.35,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer_2_copy_copy_copy_copy_copy_copy
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,2,1).p("AAAiIIAAER");
	this.shape_24.setTransform(563.3,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer_2_copy_copy_copy_copy_copy
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,2,1).p("AAAiIIAAER");
	this.shape_25.setTransform(80.45,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer_3
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2,2,1).p("AAAivIAAFf");
	this.shape_26.setTransform(965.8,16.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer_2_copy_copy_copy_copy_copy
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2,2,1).p("AAAivIAAFf");
	this.shape_27.setTransform(0,16.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer_2_copy_copy_copy
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2,2,1).p("AAAivIAAFf");
	this.shape_28.setTransform(321.9,16.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer_2_copy_copy
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,2,1).p("AAAivIAAFf");
	this.shape_29.setTransform(482.85,16.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer_2_copy
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,2,1).p("AAAivIAAFf");
	this.shape_30.setTransform(643.8,16.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer_2_copy_copy_copy_copy
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,2,1).p("AAAivIAAFf");
	this.shape_31.setTransform(160.95,16.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer_2
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,2,1).p("AAAivIAAFf");
	this.shape_32.setTransform(804.75,16.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// horiz
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2,2,1).p("EhLcAAAMCW5AAA");
	this.shape_33.setTransform(482.9,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timeline, new cjs.Rectangle(-6,-2.4,983.1,102), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBCQAQgSAAgyQAAgrgQgWIAAgGQAOAGAJAWQAKAWAAAVQAAAYgJAVQgIAUgQALg");
	this.shape.setTransform(171.525,12.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAfQAAgLAGgHQAGgIAKAAQAJAAAGAIQAGAGAAANQAAANgGAHQgGAHgKAAQgVAAAAgcgAAMATQgDAEAAAJQAAAJADAFQADAFAFAAQANAAAAgTQAAgTgMAAQgFAAgEAGgAgoA7IBEh1IAKAAIhEB1gAgqggQAAgMAGgHQAHgHAJAAQAKAAAGAHQAFAHAAANQAAANgGAGQgGAIgJAAQgWAAAAgcgAgdgtQgDAFAAAJQAAAJADAEQADAGAFgBQANAAAAgSQAAgTgMAAQgFAAgEAFg");
	this.shape_1.setTransform(163.525,11.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA6IAAgDIAjg3QALgQAAgMQABgQgSAAQgFAAgHADQgFAEgDAFIgKgJQADgHAIgFQAIgEALAAQAQAAAIAHQAKAIAAAOQAAANgMASIgZApIArAAIAAAOg");
	this.shape_2.setTransform(154.4,11.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAzQAHgDAMgQQANgPABgJQgGAGgLAAQgPAAgJgJQgJgJAAgRQAAgRAJgKQAJgKAPAAQAkAAAAAyQAAATgOAWQgPAWgQAEgAgOgnQgEAHAAAKQAAALAFAHQAFAFAIAAQATAAAAgVQAAgZgTAAQgJAAgFAGg");
	this.shape_3.setTransform(146.175,11.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHArQgJgVAAgYQAAgVAKgWQAJgWAOgGIAAAGQgQAWAAArQAAAyAQASIAAAIQgQgLgIgUg");
	this.shape_4.setTransform(139.375,12.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAlIAFgOQAMAIAIAAQANAAAAgMQAAgIgMgGIgOgGQgEgCgCgEQgDgDgBgDQgCgEAAgEQAAgKAIgGQAHgFALAAQAKAAAOAFIgFAOQgJgHgIAAQgFAAgDADQgEACAAAEQAAAIAJAEIAKAFQAKAEAEAFQAEAGAAAIQAAAMgHAGQgIAGgNAAQgOAAgLgGg");
	this.shape_5.setTransform(128.175,12.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAhQgNgMAAgUQAAgUANgMQAMgLAOAAQARAAALAKQAKAJAAAQIgBAIIg8AAQAAAPAJAIQAGAHALAAQAMAAAJgIIAGALQgEAEgGACQgKADgKAAQgPAAgLgKgAAYgIQAAgJgFgGQgHgHgKAAQgJAAgHAGQgGAHgCAJIAuAAIAAAAg");
	this.shape_6.setTransform(120.6,12.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAvQgHgHAAgMIAAguIgKAAIAAgMIAKAAIAAgRIAPgGIAAAXIAWAAIAAAMIgWAAIAAAoQAAALADAEQADAFAIAAQAGAAAGgDIACANQgJACgLAAQgJAAgHgHg");
	this.shape_7.setTransform(113.225,11.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAjQgHgIAAgPIAAg2IAPAAIAAA0QAAAUARAAQAGAAAGgEQAGgEACgGIAAg6IAPAAIAABTIgPAAIAAgMQgCAFgIAEQgHAEgHABQgNgBgIgHg");
	this.shape_8.setTransform(105.625,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASArIAAgwQAAgOgEgFQgEgFgJAAQgEAAgGADQgFADgDAFIAAA9IgPAAIAAhTIAKAAIAFALQAHgNAQAAQAbABAAAgIAAA0g");
	this.shape_9.setTransform(96.925,12.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCA6IAAhGIgLAAIAAgNIAZAAIAABTgAAAgpQgDgDAAgDQAAgEADgDQABgDAEAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAQgEAAgBgDg");
	this.shape_10.setTransform(90.075,11.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBA6IgahKIgNBJIgPAAIAWhyIAHAAIAbBSIAYhSIAHAAIAYByIgPAAIgNhJIgZBKg");
	this.shape_11.setTransform(82.35,11.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAxIAFgNQALAJAKAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgGgDIAAg3IA4AAIAAANIgpAAIAAAcQAGgEAIAAQAQAAAIAJQAJAKAAAQQAAArgmAAQgQAAgKgJg");
	this.shape_12.setTransform(67.75,11.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAxIAGgNQAKAJAKAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgGgDIAAg3IA5AAIAAANIgqAAIAAAcQAGgEAIAAQAQAAAIAJQAIAKAAAQQAAArglAAQgQAAgKgJg");
	this.shape_13.setTransform(59.4,11.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggATIAAgLIBBAAIAAALgAgggHIAAgLIBBAAIAAALg");
	this.shape_14.setTransform(46.225,12.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAjIAAheIAOAAIAABbQAAAHADAEQAFAEAFAAIAAANQgbAAAAgZg");
	this.shape_15.setTransform(35.1,11.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWApQgEgDgCgGQgJALgSAAQgKAAgHgHQgHgHAAgLQAAgMALgIQALgJARAAQAEAAAGACQAAgUgRAAQgOAAgHAHIgHgMQAFgEAHgCQAIgCAGAAQASAAAIAIQAIAIAAASIAAAdQAAALAHAEIAAAHQgJAAgFgCgAgNAFQgHAGAAAIQAAANAPAAQAKAAAJgLIAAgUIgKgBQgKAAgHAFg");
	this.shape_16.setTransform(28.325,12.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAvQgHgHAAgMIAAguIgKAAIAAgMIAKAAIAAgRIAPgGIAAAXIAWAAIAAAMIgWAAIAAAoQAAALADAEQADAFAIAAQAGAAAGgDIACANQgJACgLAAQgJAAgHgHg");
	this.shape_17.setTransform(21.075,11.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAgQgKgMAAgUQAAgTALgMQAKgLAQAAQASAAAKALQAKALAAAUQAAAUgLAMQgKALgRAAQgRAAgKgLgAgPgWQgHAIABAOQAAAfAVAAQAKAAAHgIQAFgJAAgOQAAgegWAAQgJAAgGAIg");
	this.shape_18.setTransform(13.55,12.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIA5IAAhjIgkAAIAAgOIBZAAIAAAOIgmAAIAABjg");
	this.shape_19.setTransform(6.65,11.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.4,22.6);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA6IgahKIgNBJIgPAAIAVhyIAHAAIAaBSIAahSIAHAAIAWByIgOAAIgOhJIgZBKg");
	this.shape.setTransform(122.9,11.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA6IgHgYIgqAAIgIAYIgSAAIAuhzIAEAAIArBzgAARAWIgQgxIgRAxIAhAAg");
	this.shape_1.setTransform(112.525,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAxIAFgNQAMAJAJAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgGgDIAAg3IA4AAIAAANIgpAAIAAAcQAGgEAIAAQAQAAAIAJQAIAKAAAQQAAArglAAQgQAAgKgJg");
	this.shape_2.setTransform(99.8,11.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAxIAHgNQAKAJAKAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgGgDIAAg3IA5AAIAAANIgqAAIAAAcQAGgEAIAAQAQAAAIAJQAIAKAAAQQAAArglAAQgQAAgLgJg");
	this.shape_3.setTransform(91.45,11.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAoQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDgAgHgWQgEgEAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_4.setTransform(84.125,12.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAaQAAgKAGgJQAGgIAIgEQgHgEgFgHQgEgHAAgIQAAgMAJgHQAIgIANAAQAPAAAIAIQAIAHAAAMQAAAIgFAIQgFAIgHAEQAVAKAAATQAAAPgJAJQgKAJgQAAQgiAAAAghgAgTAaQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgDgFQgEgGgNgHQgSAJAAAQgAgPgfQAAALATAKQALgKAAgLQAAgGgEgEQgEgEgHAAQgPAAAAAOg");
	this.shape_5.setTransform(77.225,11.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAHIAAgNIAhAAIAAANg");
	this.shape_6.setTransform(65.275,12.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBA6IgahKIgMBJIgQAAIAWhyIAHAAIAaBSIAahSIAHAAIAWByIgOAAIgOhJIgZBKg");
	this.shape_7.setTransform(51.9,11.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdA6IgHgYIgqAAIgIAYIgSAAIAuhzIAEAAIArBzgAARAWIgQgxIgRAxIAhAAg");
	this.shape_8.setTransform(41.525,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAxIAGgNQAKAJAKAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgGgDIAAg3IA5AAIAAANIgqAAIAAAcQAGgEAIAAQAQAAAIAJQAIAKAAAQQAAArglAAQgQAAgKgJg");
	this.shape_9.setTransform(28.8,11.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiA6IAAgDIAjg3QALgQAAgMQABgQgSAAQgGAAgGADQgFAEgDAFIgKgJQADgHAIgFQAIgEALAAQAPAAAJAHQAKAIAAAOQAAANgMASIgZApIAsAAIAAAOg");
	this.shape_10.setTransform(20.2,11.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAoQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDgAgHgWQgEgEAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_11.setTransform(13.125,12.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAaQAAgKAGgJQAGgIAIgEQgHgEgFgHQgEgHAAgIQAAgMAJgHQAIgIANAAQAPAAAIAIQAIAHAAAMQAAAIgFAIQgFAIgHAEQAVAKAAATQAAAPgJAJQgKAJgQAAQgiAAAAghgAgTAaQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgDgFQgEgGgNgHQgSAJAAAQgAgPgfQAAALATAKQALgKAAgLQAAgGgEgEQgEgEgHAAQgPAAAAAOg");
	this.shape_12.setTransform(6.225,11.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.8,22.6);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA6IgahKIgNBJIgPAAIAVhyIAHAAIAaBSIAahSIAHAAIAWByIgOAAIgOhJIgZBKg");
	this.shape.setTransform(122.9,11.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA6IgHgYIgqAAIgIAYIgSAAIAuhzIAEAAIArBzgAARAWIgQgxIgRAxIAhAAg");
	this.shape_1.setTransform(112.525,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAuQgKgNAAgjQAAgZAKgPQAKgQARAAQASAAAJANQAJANAAAgQAAAbgJAQQgKAQgSAAQgRAAgJgNgAgVgBQABAvAUAAQALAAAFgLQAGgLgBgZQAAgSgCgJQgBgIgGgEQgEgEgHgBQgWABAAArg");
	this.shape_2.setTransform(99.75,11.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA5QgHgDgFgFIAIgLQAHAIAMAAQAVAAAAgWQAAgJgGgGQgHgGgJAAIgCAAIAAgMIABAAQAUAAgBgSQABgSgTAAQgKAAgGAHIgGgLQAHgJARAAQAOAAAJAIQAJAIAAAMQAAAKgEAHQgGAIgHACQAKADAGAHQAFAIABALQAAAPgLAJQgJAJgSAAQgHAAgIgCg");
	this.shape_3.setTransform(91.3,11.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAoQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDgAgHgWQgEgEAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_4.setTransform(84.125,12.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAaQAAgKAGgJQAGgIAIgEQgHgEgFgHQgEgHAAgIQAAgMAJgHQAIgIANAAQAPAAAIAIQAIAHAAAMQAAAIgFAIQgFAIgHAEQAVAKAAATQAAAPgJAJQgKAJgQAAQgiAAAAghgAgTAaQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgDgFQgEgGgNgHQgSAJAAAQgAgPgfQAAALATAKQALgKAAgLQAAgGgEgEQgEgEgHAAQgPAAAAAOg");
	this.shape_5.setTransform(77.225,11.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAHIAAgNIAhAAIAAANg");
	this.shape_6.setTransform(65.275,12.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBA6IgahKIgMBJIgQAAIAWhyIAHAAIAaBSIAahSIAHAAIAWByIgOAAIgOhJIgZBKg");
	this.shape_7.setTransform(51.9,11.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdA6IgHgYIgqAAIgIAYIgSAAIAuhzIAEAAIArBzgAARAWIgQgxIgRAxIAhAAg");
	this.shape_8.setTransform(41.525,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAuQgKgNAAgjQAAgZAKgPQAKgQARAAQASAAAJANQAJANAAAgQAAAbgJAQQgKAQgSAAQgRAAgJgNgAgUgBQAAAvAUAAQALAAAFgLQAGgLgBgZQAAgSgCgJQgBgIgGgEQgEgEgIgBQgVABABArg");
	this.shape_9.setTransform(28.75,11.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAuQgJgNAAgjQAAgZAKgPQAKgQARAAQASAAAJANQAJANAAAgQAAAbgKAQQgJAQgSAAQgRAAgKgNgAgUgBQgBAvAVAAQAKAAAGgLQAGgLAAgZQgBgSgCgJQgCgIgEgEQgFgEgIgBQgUABAAArg");
	this.shape_10.setTransform(20.4,11.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAoQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDgAgHgWQgEgEAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_11.setTransform(13.125,12.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAaQAAgKAGgJQAGgIAIgEQgHgEgFgHQgEgHAAgIQAAgMAJgHQAIgIANAAQAPAAAIAIQAIAHAAAMQAAAIgFAIQgFAIgHAEQAVAKAAATQAAAPgJAJQgKAJgQAAQgiAAAAghgAgTAaQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgDgFQgEgGgNgHQgSAJAAAQgAgPgfQAAALATAKQALgKAAgLQAAgGgEgEQgEgEgHAAQgPAAAAAOg");
	this.shape_12.setTransform(6.225,11.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.8,22.6);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBCQAQgSAAgyQAAgrgQgWIAAgGQAOAGAJAWQAKAWAAAVQAAAYgJAVQgIAUgQALg");
	this.shape.setTransform(224.975,12.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAhQgNgMAAgUQAAgUANgMQALgLAPAAQASAAAKAKQAKAJAAAQIgBAIIg8AAQAAAPAJAIQAHAHAKAAQAMAAAJgIIAGALQgEAEgGACQgKADgKAAQgPAAgLgKgAAYgIQAAgJgFgGQgHgHgKAAQgJAAgHAGQgGAHgCAJIAuAAIAAAAg");
	this.shape_1.setTransform(217.45,12.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAvQgHgHAAgMIAAguIgKAAIAAgMIAKAAIAAgRIAPgGIAAAXIAWAAIAAAMIgWAAIAAAoQAAALADAEQADAFAIAAQAGAAAGgDIACANQgJACgLAAQgJAAgHgHg");
	this.shape_2.setTransform(210.075,11.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAhQgMgMAAgUQAAgUAMgMQALgLAPAAQARAAALAKQAJAJAAAQIgBAIIg7AAQAAAPAIAIQAIAHAJAAQAOAAAIgIIAGALQgDAEgIACQgIADgLAAQgPAAgLgKgAAYgIQAAgJgFgGQgHgHgLAAQgJAAgGAGQgGAHgCAJIAuAAIAAAAg");
	this.shape_3.setTransform(202.45,12.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAjIAAheIANAAIAABbQAAAHAFAEQADAEAHAAIAAANQgcAAAAgZg");
	this.shape_4.setTransform(196,11.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA7IAAh0IAOAAIAAAHQAJgIAMAAQAQAAALALQAJALABAWQgBARgJAMQgKANgTAAQgFgBgGgCQgGgBgCgCIAAAlgAgOgrQgEACgDACIAAAwQACACAEACQAFACAEAAQAbAAAAgeQAAgQgHgIQgGgGgOgBQgDAAgFADg");
	this.shape_5.setTransform(189.2,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApArIAAg1QAAgTgRAAQgFAAgFADQgFAEgCAEIAAA9IgOAAIAAg7QABgGgFgEQgFgDgIAAQgEAAgFADQgFADgCAFIAAA9IgPAAIAAhTIAJAAIAGAKQAJgMAMAAQASAAAHAMQACgGAHgCQAGgDAHgBQANAAAIAIQAHAHAAAPIAAA3g");
	this.shape_6.setTransform(177.9,12.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAgQgKgMAAgUQAAgTAKgMQALgLAQAAQASAAAKALQAKALAAAUQAAAUgLAMQgKALgRAAQgRAAgKgLgAgPgWQgHAIABAOQAAAfAVAAQAKAAAHgIQAFgJAAgOQAAgegWAAQgJAAgGAIg");
	this.shape_7.setTransform(167,12.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcArQgMgQAAgbQAAgYANgRQAOgRAUAAQATAAALAGIgGANQgHgFgQAAQgOAAgJANQgJANAAATQAAAUAJAMQAKAMANAAQAQAAAJgLIAIAMQgNANgWAAQgVAAgNgQg");
	this.shape_8.setTransform(157.95,11.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAfQAAgLAGgHQAGgIAKAAQAJAAAGAIQAGAGAAANQAAANgGAHQgGAHgKAAQgVAAAAgcgAAMATQgDAEAAAJQAAAJADAFQADAFAFAAQANAAAAgTQAAgTgMAAQgFAAgEAGgAgoA7IBEh1IAKAAIhEB1gAgqggQAAgMAGgHQAHgHAJAAQAKAAAGAHQAFAHAAANQAAANgGAGQgGAIgJAAQgWAAAAgcgAgdgtQgDAFAAAJQAAAJADAEQADAGAFgBQANAAAAgSQAAgTgMAAQgFAAgEAFg");
	this.shape_9.setTransform(143.525,11.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUA5QgHgDgFgFIAIgLQAHAIAMAAQAVAAAAgWQAAgJgGgGQgHgGgJAAIgCAAIAAgMIABAAQAUAAgBgSQABgSgTAAQgKAAgGAHIgGgLQAHgJARAAQAOAAAJAIQAJAIAAAMQAAAKgEAHQgGAIgHACQAKADAGAHQAFAIABALQAAAPgLAJQgJAJgSAAQgHAAgIgCg");
	this.shape_10.setTransform(134.5,11.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiAaQAAgKAGgJQAGgIAIgEQgHgEgFgHQgEgHAAgIQAAgMAJgHQAIgIANAAQAPAAAIAIQAIAHAAAMQAAAIgFAIQgFAIgHAEQAVAKAAATQAAAPgJAJQgKAJgQAAQgiAAAAghgAgTAaQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgDgFQgEgGgNgHQgSAJAAAQgAgPgfQAAALATAKQALgKAAgLQAAgGgEgEQgEgEgHAAQgPAAAAAOg");
	this.shape_11.setTransform(126.275,11.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHArQgJgVAAgYQAAgVAKgWQAJgWAOgGIAAAGQgQAWAAArQAAAyAQASIAAAIQgQgLgIgUg");
	this.shape_12.setTransform(119.375,12.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAlIAFgOQAMAIAIAAQANAAAAgMQAAgIgMgGIgOgGQgEgCgCgEQgDgDgBgDQgCgEAAgEQAAgKAIgGQAHgFALAAQAKAAAOAFIgFAOQgJgHgIAAQgFAAgDADQgEACAAAEQAAAIAJAEIAKAFQAKAEAEAFQAEAGAAAIQAAAMgHAGQgIAGgNAAQgOAAgLgGg");
	this.shape_13.setTransform(108.175,12.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAhQgMgMAAgUQAAgUAMgMQAMgLAOAAQARAAALAKQAKAJAAAQIgCAIIg7AAQAAAPAJAIQAGAHALAAQANAAAIgIIAGALQgEAEgGACQgKADgLAAQgOAAgLgKgAAYgIQAAgJgGgGQgGgHgLAAQgIAAgHAGQgGAHgBAJIAtAAIAAAAg");
	this.shape_14.setTransform(100.6,12.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAvQgHgHAAgMIAAguIgKAAIAAgMIAKAAIAAgRIAPgGIAAAXIAWAAIAAAMIgWAAIAAAoQAAALADAEQADAFAIAAQAGAAAGgDIACANQgJACgLAAQgJAAgHgHg");
	this.shape_15.setTransform(93.225,11.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAjQgHgIAAgPIAAg2IAPAAIAAA0QAAAUARAAQAGAAAGgEQAGgEACgGIAAg6IAPAAIAABTIgPAAIAAgMQgCAFgIAEQgHAEgHABQgNgBgIgHg");
	this.shape_16.setTransform(85.625,12.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASArIAAgwQAAgOgEgFQgEgFgJAAQgEAAgGADQgFADgDAFIAAA9IgPAAIAAhTIAKAAIAFALQAHgNAQAAQAbABAAAgIAAA0g");
	this.shape_17.setTransform(76.925,12.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCA6IAAhGIgLAAIAAgNIAZAAIAABTgAAAgpQgDgDAAgDQAAgEADgDQABgDAEAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAQgEAAgBgDg");
	this.shape_18.setTransform(70.075,11.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBA6IgahKIgMBJIgQAAIAWhyIAHAAIAaBSIAZhSIAIAAIAWByIgOAAIgOhJIgYBKg");
	this.shape_19.setTransform(62.35,11.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbAuQgJgNAAgjQAAgZAKgPQAKgQARAAQASAAAJANQAJANAAAgQAAAbgJAQQgKAQgSAAQgRAAgKgNgAgVgBQAAAvAVAAQAKAAAGgLQAFgLABgZQAAgSgCgJQgCgIgFgEQgFgEgHgBQgWABAAArg");
	this.shape_20.setTransform(47.7,11.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgfAxIAFgNQALAJAKAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgFgDIAAg3IA3AAIAAANIgpAAIAAAcQAGgEAIAAQAQAAAIAJQAJAKAAAQQAAArgmAAQgQAAgKgJg");
	this.shape_21.setTransform(39.4,11.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggATIAAgLIBBAAIAAALgAgggHIAAgLIBBAAIAAALg");
	this.shape_22.setTransform(26.225,12.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNAjIAAheIANAAIAABbQAAAHAFAEQADAEAHAAIAAANQgcAAAAgZg");
	this.shape_23.setTransform(15.1,11.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAWApQgEgDgCgGQgJALgSAAQgKAAgHgHQgHgHAAgLQAAgMALgIQALgJARAAQAEAAAGACQAAgUgRAAQgOAAgHAHIgHgMQAFgEAHgCQAIgCAGAAQASAAAIAIQAIAIAAASIAAAdQAAALAHAEIAAAHQgJAAgFgCgAgNAFQgHAGAAAIQAAANAPAAQAKAAAJgLIAAgUIgKgBQgKAAgHAFg");
	this.shape_24.setTransform(8.325,12.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJAvQgHgHAAgMIAAguIgKAAIAAgMIAKAAIAAgRIAPgGIAAAXIAWAAIAAAMIgWAAIAAAoQAAALADAEQADAFAIAAQAGAAAGgDIACANQgJACgLAAQgJAAgHgHg");
	this.shape_25.setTransform(1.075,11.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbAgQgKgMAAgUQAAgTALgMQAKgLAQAAQASAAAKALQAKALAAAUQAAAUgKAMQgKALgSAAQgRAAgKgLgAgPgWQgHAIAAAOQABAfAVAAQAKAAAHgIQAFgJAAgOQAAgegWAAQgJAAgGAIg");
	this.shape_26.setTransform(-6.45,12.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIA5IAAhjIgkAAIAAgOIBZAAIAAAOIgmAAIAABjg");
	this.shape_27.setTransform(-13.35,11.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,0,249.9,22.6);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA6IgahKIgNBJIgPAAIAVhyIAHAAIAaBSIAahSIAHAAIAWByIgOAAIgOhJIgZBKg");
	this.shape.setTransform(122.9,11.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA6IgHgYIgqAAIgIAYIgSAAIAuhzIAEAAIArBzgAARAWIgQgxIgRAxIAhAAg");
	this.shape_1.setTransform(112.525,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAxIAFgNQAMAJAJAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgGgDIAAg3IA4AAIAAANIgpAAIAAAcQAGgEAIAAQAQAAAIAJQAIAKAAAQQAAArglAAQgQAAgKgJg");
	this.shape_2.setTransform(99.8,11.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAxIAHgNQAKAJAKAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgGgDIAAg3IA5AAIAAANIgqAAIAAAcQAGgEAIAAQAQAAAIAJQAIAKAAAQQAAArglAAQgQAAgLgJg");
	this.shape_3.setTransform(91.45,11.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAoQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDgAgHgWQgEgEAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_4.setTransform(84.125,12.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAaQAAgKAGgJQAGgIAIgEQgHgEgFgHQgEgHAAgIQAAgMAJgHQAIgIANAAQAPAAAIAIQAIAHAAAMQAAAIgFAIQgFAIgHAEQAVAKAAATQAAAPgJAJQgKAJgQAAQgiAAAAghgAgTAaQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgDgFQgEgGgNgHQgSAJAAAQgAgPgfQAAALATAKQALgKAAgLQAAgGgEgEQgEgEgHAAQgPAAAAAOg");
	this.shape_5.setTransform(77.225,11.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAHIAAgNIAhAAIAAANg");
	this.shape_6.setTransform(65.275,12.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBA6IgahKIgMBJIgQAAIAWhyIAHAAIAaBSIAahSIAHAAIAWByIgOAAIgOhJIgZBKg");
	this.shape_7.setTransform(51.9,11.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdA6IgHgYIgqAAIgIAYIgSAAIAuhzIAEAAIArBzgAARAWIgQgxIgRAxIAhAAg");
	this.shape_8.setTransform(41.525,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAxIAGgNQAKAJAKAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgGgDIAAg3IA5AAIAAANIgqAAIAAAcQAGgEAIAAQAQAAAIAJQAIAKAAAQQAAArglAAQgQAAgKgJg");
	this.shape_9.setTransform(28.8,11.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiA6IAAgDIAjg3QALgQAAgMQABgQgSAAQgGAAgGADQgFAEgDAFIgKgJQADgHAIgFQAIgEALAAQAPAAAJAHQAKAIAAAOQAAANgMASIgZApIAsAAIAAAOg");
	this.shape_10.setTransform(20.2,11.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAoQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDgAgHgWQgEgEAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_11.setTransform(13.125,12.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAaQAAgKAGgJQAGgIAIgEQgHgEgFgHQgEgHAAgIQAAgMAJgHQAIgIANAAQAPAAAIAIQAIAHAAAMQAAAIgFAIQgFAIgHAEQAVAKAAATQAAAPgJAJQgKAJgQAAQgiAAAAghgAgTAaQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgDgFQgEgGgNgHQgSAJAAAQgAgPgfQAAALATAKQALgKAAgLQAAgGgEgEQgEgEgHAAQgPAAAAAOg");
	this.shape_12.setTransform(6.225,11.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.8,22.6);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA6IgahKIgNBJIgPAAIAVhyIAHAAIAaBSIAahSIAHAAIAWByIgOAAIgOhJIgZBKg");
	this.shape.setTransform(122.9,11.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA6IgHgYIgqAAIgIAYIgSAAIAuhzIAEAAIArBzgAARAWIgQgxIgRAxIAhAAg");
	this.shape_1.setTransform(112.525,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAuQgKgNAAgjQAAgZAKgPQAKgQARAAQASAAAJANQAJANAAAgQAAAbgJAQQgKAQgSAAQgRAAgJgNgAgVgBQABAvAUAAQALAAAFgLQAGgLgBgZQAAgSgCgJQgBgIgGgEQgEgEgHgBQgWABAAArg");
	this.shape_2.setTransform(99.75,11.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA6IAAgDIAjg3QAMgQgBgMQABgQgSAAQgGAAgFADQgGAEgCAFIgKgJQACgHAIgFQAIgEALAAQAPAAAKAHQAJAIAAAOQAAANgMASIgZApIAsAAIAAAOg");
	this.shape_3.setTransform(91.2,11.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAoQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDgAgHgWQgEgEAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_4.setTransform(84.125,12.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAaQAAgKAGgJQAGgIAIgEQgHgEgFgHQgEgHAAgIQAAgMAJgHQAIgIANAAQAPAAAIAIQAIAHAAAMQAAAIgFAIQgFAIgHAEQAVAKAAATQAAAPgJAJQgKAJgQAAQgiAAAAghgAgTAaQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgDgFQgEgGgNgHQgSAJAAAQgAgPgfQAAALATAKQALgKAAgLQAAgGgEgEQgEgEgHAAQgPAAAAAOg");
	this.shape_5.setTransform(77.225,11.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAHIAAgNIAhAAIAAANg");
	this.shape_6.setTransform(65.275,12.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBA6IgahKIgMBJIgQAAIAWhyIAHAAIAaBSIAahSIAHAAIAWByIgOAAIgOhJIgZBKg");
	this.shape_7.setTransform(51.9,11.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdA6IgHgYIgqAAIgIAYIgSAAIAuhzIAEAAIArBzgAARAWIgQgxIgRAxIAhAAg");
	this.shape_8.setTransform(41.525,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAuQgKgNAAgjQAAgZAKgPQAKgQARAAQASAAAJANQAJANAAAgQAAAbgJAQQgKAQgSAAQgRAAgJgNgAgUgBQAAAvAUAAQALAAAFgLQAGgLgBgZQAAgSgCgJQgBgIgGgEQgEgEgIgBQgVABABArg");
	this.shape_9.setTransform(28.75,11.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAuQgJgNAAgjQAAgZAKgPQAKgQARAAQASAAAJANQAJANAAAgQAAAbgKAQQgJAQgSAAQgRAAgKgNgAgUgBQgBAvAVAAQAKAAAGgLQAGgLAAgZQgBgSgCgJQgCgIgEgEQgFgEgIgBQgUABAAArg");
	this.shape_10.setTransform(20.4,11.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAoQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDgAgHgWQgEgEAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_11.setTransform(13.125,12.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAaQAAgKAGgJQAGgIAIgEQgHgEgFgHQgEgHAAgIQAAgMAJgHQAIgIANAAQAPAAAIAIQAIAHAAAMQAAAIgFAIQgFAIgHAEQAVAKAAATQAAAPgJAJQgKAJgQAAQgiAAAAghgAgTAaQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgDgFQgEgGgNgHQgSAJAAAQgAgPgfQAAALATAKQALgKAAgLQAAgGgEgEQgEgEgHAAQgPAAAAAOg");
	this.shape_12.setTransform(6.225,11.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.8,22.6);


(lib.session1text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBCQAQgSAAgyQAAgrgQgWIAAgGQAOAGAJAWQAKAWAAAVQAAAYgJAVQgIAUgQALg");
	this.shape.setTransform(335.725,12.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAhQgMgMAAgUQAAgUAMgMQAMgLAOAAQARAAALAKQAKAJgBAQIgBAIIg7AAQAAAPAJAIQAGAHALAAQAMAAAJgIIAGALQgDAEgIACQgIADgMAAQgOAAgLgKgAAYgIQAAgJgGgGQgGgHgLAAQgIAAgHAGQgGAHgBAJIAtAAIAAAAg");
	this.shape_1.setTransform(328.2,12.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAvQgHgHAAgMIAAguIgKAAIAAgMIAKAAIAAgRIAPgGIAAAXIAWAAIAAAMIgWAAIAAAoQAAALADAEQADAFAIAAQAGAAAGgDIACANQgJACgLAAQgJAAgHgHg");
	this.shape_2.setTransform(320.825,11.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAhQgNgMAAgUQAAgUANgMQAMgLAOAAQARAAALAKQAKAJAAAQIgBAIIg8AAQAAAPAJAIQAGAHALAAQAMAAAJgIIAGALQgEAEgGACQgKADgKAAQgPAAgLgKgAAYgIQAAgJgFgGQgHgHgKAAQgJAAgHAGQgGAHgCAJIAuAAIAAAAg");
	this.shape_3.setTransform(313.2,12.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAjIAAheIAPAAIAABbQAAAHADAEQAFAEAFAAIAAANQgcAAAAgZg");
	this.shape_4.setTransform(306.75,11.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkA7IAAh0IAQAAIAAAHQAIgIAMAAQAQAAAKALQAKALAAAWQAAARgKAMQgKANgSAAQgFgBgGgCQgGgBgBgCIAAAlgAgNgrQgFACgCACIAAAwQABACAFACQAEACAEAAQAbAAAAgeQAAgQgGgIQgIgGgNgBQgDAAgEADg");
	this.shape_5.setTransform(299.95,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApArIAAg1QAAgTgRAAQgGAAgFADQgEAEgBAEIAAA9IgOAAIAAg7QgBgGgEgEQgFgDgIAAQgEAAgFADQgFADgCAFIAAA9IgPAAIAAhTIAKAAIAEAKQAKgMAMAAQASAAAGAMQADgGAGgCQAHgDAIgBQANAAAGAIQAIAHAAAPIAAA3g");
	this.shape_6.setTransform(288.65,12.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAgQgKgMAAgUQAAgTALgMQAKgLAQAAQASAAAKALQAKALAAAUQAAAUgKAMQgLALgRAAQgRAAgKgLgAgPgWQgGAIgBAOQAAAfAWAAQALAAAFgIQAGgJAAgOQAAgegWAAQgJAAgGAIg");
	this.shape_7.setTransform(277.75,12.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcArQgNgQAAgbQAAgYAOgRQAOgRAVAAQASAAALAGIgFANQgIgFgQAAQgOAAgJANQgKANAAATQAAAUAKAMQAJAMAOAAQAQAAAJgLIAJAMQgOANgVAAQgWAAgNgQg");
	this.shape_8.setTransform(268.7,11.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAfQAAgLAGgHQAGgIAKAAQAJAAAGAIQAGAGAAANQAAANgGAHQgGAHgKAAQgVAAAAgcgAAMATQgDAEAAAJQAAAJADAFQADAFAFAAQANAAAAgTQAAgTgMAAQgFAAgEAGgAgoA7IBEh1IAKAAIhEB1gAgqggQAAgMAGgHQAHgHAJAAQAKAAAGAHQAFAHAAANQAAANgGAGQgGAIgJAAQgWAAAAgcgAgdgtQgDAFAAAJQAAAJADAEQADAGAFgBQANAAAAgSQAAgTgMAAQgFAAgEAFg");
	this.shape_9.setTransform(254.275,11.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghA6IAAgDIAjg3QAKgQABgMQgBgQgQAAQgHAAgGADQgFAEgCAFIgLgJQAEgHAHgFQAIgEALAAQAPAAAKAHQAJAIAAAOQAAANgNASIgYApIArAAIAAAOg");
	this.shape_10.setTransform(245.15,11.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAzQAHgDAMgQQANgPABgJQgGAGgLAAQgPAAgJgJQgJgJAAgRQAAgRAJgKQAJgKAPAAQAkAAAAAyQAAATgOAWQgPAWgQAEgAgOgnQgEAHAAAKQAAALAFAHQAFAFAIAAQATAAAAgVQAAgZgTAAQgJAAgFAGg");
	this.shape_11.setTransform(236.925,11.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQAHIAAgNIAhAAIAAANg");
	this.shape_12.setTransform(225.075,12.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAlIAFgOQAMAIAIAAQANAAAAgMQAAgIgMgGIgOgGQgEgCgCgEQgDgDgBgDQgCgEAAgEQAAgKAIgGQAHgFALAAQAKAAAOAFIgFAOQgJgHgIAAQgFAAgDADQgEACAAAEQAAAIAJAEIAKAFQAKAEAEAFQAEAGAAAIQAAAMgHAGQgIAGgNAAQgOAAgLgGg");
	this.shape_13.setTransform(214.125,12.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAhQgNgMAAgUQAAgUANgMQAMgLAOAAQARAAALAKQAKAJAAAQIgBAIIg8AAQAAAPAJAIQAGAHALAAQAMAAAJgIIAGALQgEAEgGACQgKADgKAAQgPAAgLgKgAAYgIQAAgJgFgGQgHgHgKAAQgJAAgHAGQgGAHgBAJIAtAAIAAAAg");
	this.shape_14.setTransform(206.55,12.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAvQgHgHAAgMIAAguIgKAAIAAgMIAKAAIAAgRIAPgGIAAAXIAWAAIAAAMIgWAAIAAAoQAAALADAEQADAFAIAAQAGAAAGgDIACANQgJACgLAAQgJAAgHgHg");
	this.shape_15.setTransform(199.175,11.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAjQgHgIAAgPIAAg2IAPAAIAAA0QAAAUARAAQAGAAAGgEQAGgEACgGIAAg6IAPAAIAABTIgPAAIAAgMQgCAFgIAEQgHAEgHABQgNgBgIgHg");
	this.shape_16.setTransform(191.575,12.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASArIAAgwQAAgOgEgFQgEgFgJAAQgEAAgGADQgFADgDAFIAAA9IgPAAIAAhTIAKAAIAFALQAHgNAQAAQAbABAAAgIAAA0g");
	this.shape_17.setTransform(182.875,12.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCA6IAAhGIgLAAIAAgNIAZAAIAABTgAAAgpQgDgDAAgDQAAgEADgDQABgDAEAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAQgEAAgBgDg");
	this.shape_18.setTransform(176.025,11.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AApArIAAg1QAAgTgRAAQgFAAgGADQgEAEgBAEIAAA9IgPAAIAAg7QAAgGgEgEQgFgDgIAAQgEAAgFADQgFADgCAFIAAA9IgPAAIAAhTIAKAAIAEAKQAJgMANAAQASAAAHAMQACgGAHgCQAHgDAGgBQAOAAAGAIQAIAHAAAPIAAA3g");
	this.shape_19.setTransform(167.35,12.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfAxIAFgNQALAJAKAAQAVAAAAgbQAAgZgUAAQgLAAgJAIIgEgDIAAg3IA3AAIAAANIgpAAIAAAcQAGgEAIAAQAQAAAIAJQAJAKAAAQQAAArgmAAQgQAAgKgJg");
	this.shape_20.setTransform(151.8,11.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgfAxIAFgNQAMAJAJAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgGgDIAAg3IA4AAIAAANIgpAAIAAAcQAGgEAIAAQAQAAAIAJQAIAKAAAQQAAArglAAQgQAAgKgJg");
	this.shape_21.setTransform(143.45,11.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHArQgJgVAAgYQAAgVAKgWQAJgWAOgGIAAAGQgQAWAAArQAAAyAQASIAAAIQgQgLgIgUg");
	this.shape_22.setTransform(136.525,12.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAA6IgahKIgNBJIgPAAIAVhyIAHAAIAaBSIAahSIAHAAIAWByIgOAAIgOhJIgZBKg");
	this.shape_23.setTransform(122.9,11.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAdA6IgHgYIgqAAIgIAYIgSAAIAuhzIAEAAIArBzgAARAWIgQgxIgRAxIAhAAg");
	this.shape_24.setTransform(112.525,11.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAxIAFgNQAMAJAJAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgGgDIAAg3IA4AAIAAANIgpAAIAAAcQAGgEAIAAQAQAAAIAJQAIAKAAAQQAAArglAAQgQAAgKgJg");
	this.shape_25.setTransform(99.8,11.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AggAxIAHgNQAKAJAKAAQAVAAAAgbQAAgZgUAAQgLAAgIAIIgGgDIAAg3IA5AAIAAANIgqAAIAAAcQAGgEAIAAQAQAAAIAJQAIAKAAAQQAAArglAAQgQAAgLgJg");
	this.shape_26.setTransform(91.45,11.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAoQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDgAgHgWQgEgEAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_27.setTransform(84.125,12.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiAaQAAgKAGgJQAGgIAIgEQgHgEgFgHQgEgHAAgIQAAgMAJgHQAIgIANAAQAPAAAIAIQAIAHAAAMQAAAIgFAIQgFAIgHAEQAVAKAAATQAAAPgJAJQgKAJgQAAQgiAAAAghgAgTAaQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgDgFQgEgGgNgHQgSAJAAAQgAgPgfQAAALATAKQALgKAAgLQAAgGgEgEQgEgEgHAAQgPAAAAAOg");
	this.shape_28.setTransform(77.225,11.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQAHIAAgNIAhAAIAAANg");
	this.shape_29.setTransform(65.275,12.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgBA6IgahKIgMBJIgQAAIAWhyIAHAAIAaBSIAahSIAHAAIAWByIgOAAIgOhJIgZBKg");
	this.shape_30.setTransform(51.9,11.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAdA6IgHgYIgqAAIgIAYIgSAAIAuhzIAEAAIArBzgAARAWIgQgxIgRAxIAhAAg");
	this.shape_31.setTransform(41.525,11.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaAuQgKgNAAgjQAAgZAKgPQAKgQARAAQASAAAJANQAJANAAAgQAAAbgJAQQgKAQgSAAQgRAAgJgNgAgUgBQAAAvAUAAQALAAAFgLQAGgLgBgZQAAgSgCgJQgBgIgGgEQgEgEgIgBQgVABABArg");
	this.shape_32.setTransform(28.75,11.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgbAuQgJgNAAgjQAAgZAKgPQAKgQARAAQASAAAJANQAJANAAAgQAAAbgKAQQgJAQgSAAQgRAAgKgNgAgUgBQgBAvAVAAQAKAAAGgLQAGgLAAgZQgBgSgCgJQgCgIgEgEQgFgEgIgBQgUABAAArg");
	this.shape_33.setTransform(20.4,11.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgHAoQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDgAgHgWQgEgEAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_34.setTransform(13.125,12.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgiAaQAAgKAGgJQAGgIAIgEQgHgEgFgHQgEgHAAgIQAAgMAJgHQAIgIANAAQAPAAAIAIQAIAHAAAMQAAAIgFAIQgFAIgHAEQAVAKAAATQAAAPgJAJQgKAJgQAAQgiAAAAghgAgTAaQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgDgFQgEgGgNgHQgSAJAAAQgAgPgfQAAALATAKQALgKAAgLQAAgGgEgEQgEgEgHAAQgPAAAAAOg");
	this.shape_35.setTransform(6.225,11.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.session1text, new cjs.Rectangle(0,0,340.6,22.6), null);


(lib.sessionbar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5E8257","#1B4926"],[0,1],0,-50,0,50).s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sessionbar, new cjs.Rectangle(0,0,100,100), null);


(lib.overlayButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF33").s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");
	this.shape.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


// stage content:
(lib.lcmsreporting = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,15,61,71,178,239,262,356,434];
	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		_root = this;
		
		this.overlayButton.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			_root.play();
		}
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_61 = function() {
		this.stop();
	}
	this.frame_71 = function() {
		this.stop();
	}
	this.frame_178 = function() {
		this.stop();
	}
	this.frame_239 = function() {
		this.stop();
	}
	this.frame_262 = function() {
		this.stop();
	}
	this.frame_356 = function() {
		this.stop();
	}
	this.frame_434 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(46).call(this.frame_61).wait(10).call(this.frame_71).wait(107).call(this.frame_178).wait(61).call(this.frame_239).wait(23).call(this.frame_262).wait(94).call(this.frame_356).wait(78).call(this.frame_434).wait(6));

	// button
	this.overlayButton = new lib.overlayButton();
	this.overlayButton.name = "overlayButton";
	this.overlayButton.setTransform(512,384,1,1,0,0,0,512,384);
	this.overlayButton.alpha = 0;
	new cjs.ButtonHelper(this.overlayButton, 0, 1, 2, false, new lib.overlayButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.overlayButton).wait(440));

	// Layer_16
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(477.85,564.85,1,1,0,0,0,88.2,11.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(411).to({_off:false},0).to({y:574.85,alpha:1},19).wait(10));

	// Layer_15
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.setTransform(669.95,471.3,1,1,0,0,0,65.3,11.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(336).to({_off:false},0).to({y:481.3,alpha:1},18).wait(6).to({startPosition:0},0).to({alpha:0},16).to({_off:true},1).wait(63));

	// Layer_14
	this.instance_2 = new lib.Symbol4("synched",0);
	this.instance_2.setTransform(268.15,564.85,1,1,0,0,0,65.3,11.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(288).to({_off:false},0).to({y:574.85,alpha:1},18).wait(54).to({startPosition:0},0).to({alpha:0},16).to({_off:true},1).wait(63));

	// Layer_13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_312 = new cjs.Graphics().p("Egr0AURMAAAgohMBXpAAAMAAAAohg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(312).to({graphics:mask_graphics_312,x:708.45,y:527.2}).wait(128));

	// Layer_11
	this.instance_3 = new lib.sessionbar();
	this.instance_3.setTransform(-55.05,451.4,4.8291,0.6,0,0,0,0.5,0.1);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(312).to({_off:false},0).to({x:430.95},23).wait(51).to({y:544.95},20).wait(34));

	// Layer_12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_264 = new cjs.Graphics().p("EgvGARbMAAAgi1MBeNAAAMAAAAi1g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(264).to({graphics:mask_1_graphics_264,x:326.5,y:508.425}).wait(176));

	// Layer_10
	this.instance_4 = new lib.sessionbar();
	this.instance_4.setTransform(-455.85,544.95,4.8291,0.6,0,0,0,0.5,0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(264).to({_off:false},0).to({x:29.15},23).wait(153));

	// Layer_9
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.setTransform(434.15,564.85,1,1,0,0,0,98.4,11.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(223).to({_off:false},0).to({y:574.85,alpha:1},15).wait(5).to({startPosition:0},0).to({alpha:0},18).to({_off:true},1).wait(178));

	// Layer_8
	this.instance_6 = new lib.Symbol2("synched",0);
	this.instance_6.setTransform(669.15,464.85,1,1,0,0,0,65.3,11.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({_off:false},0).to({y:474.85,alpha:1},16).wait(6).to({startPosition:0},0).to({alpha:0},12).to({_off:true},1).wait(246));

	// Layer_7
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(188.15,564.85,1,1,0,0,0,65.3,11.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(103).to({_off:false},0).to({y:574.85,alpha:1},16).wait(62).to({startPosition:0},0).to({alpha:0},12).to({_off:true},1).wait(246));

	// mask_idn_copy_copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_127 = new cjs.Graphics().p("EgKxAv5MAAAhGkMBYRAAAMAAABGkg");
	var mask_2_graphics_198 = new cjs.Graphics().p("EgdhAv5MAAAhGkMBn5AAAMAAABGkg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(127).to({graphics:mask_2_graphics_127,x:495.9851,y:306.498}).wait(71).to({graphics:mask_2_graphics_198,x:475.9953,y:306.498}).wait(242));

	// Layer_6_copy
	this.instance_8 = new lib.sessionbar();
	this.instance_8.setTransform(-59.85,444.95,4.8291,0.6,0,0,0,0.5,0.1);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(127).to({_off:false},0).to({x:430.15},30).wait(43).to({x:350.15,y:544.95},20).wait(23).to({alpha:0},18).to({_off:true},1).wait(178));

	// mask_idn_copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_72 = new cjs.Graphics().p("EhJlAv5MAAAhGkMCXFAAAMAAABGkg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_3_graphics_72,x:495.9745,y:306.501}).wait(368));

	// Layer_6
	this.instance_9 = new lib.sessionbar();
	this.instance_9.setTransform(-301.1,544.95,3.2124,0.6,0,0,0,0.4,0.1);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(72).to({_off:false},0).to({x:28.9},30).wait(141).to({alpha:0},18).to({_off:true},1).wait(178));

	// mask_idn (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_20 = new cjs.Graphics().p("EhJCAPtIAA/ZMCSFAAAIAAfZg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_4_graphics_20,x:492.475,y:522.425}).wait(51).to({graphics:null,x:0,y:0}).wait(369));

	// Layer_4
	this.instance_10 = new lib.session1text();
	this.instance_10.setTransform(468.7,564.85,1,1,0,0,0,170.3,11.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(52).to({_off:false},0).to({y:574.85,alpha:1},9).wait(2).to({alpha:0},7).to({_off:true},1).wait(369));

	// session
	this.instance_11 = new lib.sessionbar();
	this.instance_11.setTransform(-871.5,544.95,8.8753,0.6,0,0,0,0.4,0.1);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({_off:false},0).to({x:28.5},32).wait(11).to({alpha:0},7).to({_off:true},1).wait(369));

	// timeline
	this.instance_12 = new lib.timeline();
	this.instance_12.setTransform(509.4,623,1,1,0,0,0,482.9,0);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:643,alpha:1},15).wait(425));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,512,384);
// library properties:
lib.properties = {
	id: 'DDAB21235B3D412AA69AF1D7886C4D2F',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DDAB21235B3D412AA69AF1D7886C4D2F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;