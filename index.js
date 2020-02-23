(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:



(lib.ecran_partieGagnee = function() {
	this.initialize(img.ecran_partieGagnee);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,1201);


(lib.ecran_partiePerdue_sansTxt = function() {
	this.initialize(img.ecran_partiePerdue_sansTxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,1201);


(lib.fond_defilant_niveau1 = function() {
	this.initialize(img.fond_defilant_niveau1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4335,471);


(lib.fond_defilant_niveau2 = function() {
	this.initialize(img.fond_defilant_niveau2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4329,471);


(lib.interface_debutNiveau1 = function() {
	this.initialize(img.interface_debutNiveau1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,1201);


(lib.interface_debutNiveau2 = function() {
	this.initialize(img.interface_debutNiveau2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,1201);


(lib.page1_debutJeu = function() {
	this.initialize(img.page1_debutJeu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,1200);


(lib.page2_explications = function() {
	this.initialize(img.page2_explications);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib.table_niveau1 = function() {
	this.initialize(img.table_niveau1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,740);


(lib.table_niveau2 = function() {
	this.initialize(img.table_niveau2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,740);// helper functions:

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


(lib.projectile_langement_source_point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339999").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQAKALAAAOQAAAPgKALQgLALgPgBQgOABgLgLg");
	this.shape.setTransform(3.7,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.projectile_langement_source_point, rect = new cjs.Rectangle(0,0,7.3,7.3), [rect]);


(lib.projectile_lancement_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// masque (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgEB3IAAjtIAJAAIAADtg");
	var mask_graphics_1 = new cjs.Graphics().p("AgZB3IAAjtIAzAAIAADtg");
	var mask_graphics_2 = new cjs.Graphics().p("AgtB3IAAjtIBbAAIAADtg");
	var mask_graphics_3 = new cjs.Graphics().p("AhCB3IAAjtICFAAIAADtg");
	var mask_graphics_4 = new cjs.Graphics().p("AhXB3IAAjtICvAAIAADtg");
	var mask_graphics_5 = new cjs.Graphics().p("AhrB3IAAjtIDXAAIAADtg");
	var mask_graphics_6 = new cjs.Graphics().p("AiAB3IAAjtIEBAAIAADtg");
	var mask_graphics_7 = new cjs.Graphics().p("AiVB3IAAjtIErAAIAADtg");
	var mask_graphics_8 = new cjs.Graphics().p("AipB3IAAjtIFTAAIAADtg");
	var mask_graphics_9 = new cjs.Graphics().p("AipB3IAAjtIFTAAIAADtg");
	var mask_graphics_10 = new cjs.Graphics().p("AipB3IAAjtIFTAAIAADtg");
	var mask_graphics_11 = new cjs.Graphics().p("AipB3IAAjtIFTAAIAADtg");
	var mask_graphics_12 = new cjs.Graphics().p("AipB3IAAjtIFTAAIAADtg");
	var mask_graphics_13 = new cjs.Graphics().p("AipB3IAAjtIFTAAIAADtg");
	var mask_graphics_14 = new cjs.Graphics().p("AipB3IAAjtIFTAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.5,y:0.4}).wait(1).to({graphics:mask_graphics_1,x:1.3,y:0.4}).wait(1).to({graphics:mask_graphics_2,x:3.1,y:0.4}).wait(1).to({graphics:mask_graphics_3,x:4.9,y:0.4}).wait(1).to({graphics:mask_graphics_4,x:6.7,y:0.4}).wait(1).to({graphics:mask_graphics_5,x:8.5,y:0.4}).wait(1).to({graphics:mask_graphics_6,x:10.2,y:0.4}).wait(1).to({graphics:mask_graphics_7,x:12,y:0.4}).wait(1).to({graphics:mask_graphics_8,x:13.8,y:0.4}).wait(1).to({graphics:mask_graphics_9,x:13.8,y:0.4}).wait(1).to({graphics:mask_graphics_10,x:13.8,y:0.4}).wait(1).to({graphics:mask_graphics_11,x:13.8,y:0.4}).wait(1).to({graphics:mask_graphics_12,x:13.8,y:0.4}).wait(1).to({graphics:mask_graphics_13,x:13.8,y:0.4}).wait(1).to({graphics:mask_graphics_14,x:13.8,y:0.4}).wait(1));

	// etat_lancementProjectile_avant
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14484C").s().p("ABlBWQgPgCACgUQABgNgDgGQgFgMgTgJIgwgBQABAggPARQgLAOgXAAQgNAAgJgHQgIgGgCgJQgBgQAOgEIAHgBQAEAAAGACIAEABQAEAAAHgLIACgEQgBgCgIgCQgJgDgMAAIhIAAQgKAAAAgKIAAgaQAAgEADgDQADgDAEAAIBFAAQAVAAAEgFIAAgDIAAgCQgEgHgXgDQgKgBgGgHQgGgHAAgIQAAgJAFgEQAGgIAOAAIAKABQASAEAPAOQASASACAbIA0ABQAOAAAHgHQAEgGgCgHQgCgQAHgIQAEgFAJAAIAEAAQAKACAGAIQAHAIgBAKQAAAfgSAOQAFAEADAFQALAOAAAVQABALgCAJQgBAHgGAFQgHAIgLgBgAANANIAzABQAhAQABAZIgBAOQAAAHAFAAIAEAAQANAAACgLQADgPgDgOQgGgegdgCQAigDABgrQABgHgEgEQgEgGgHgBIgCAAQgKgBACATQADATgRAIQgIAEgLAAIg+gBQACghgXgSIgYgMIgIgBQgQAAABAKQABAMAMACQApAGgFATQAAAPgjAAIhFAAIAAAaIBIAAQAQAAALAEQATAHgJAPQgKAQgKAAQgJgDgFAAIgEABQgKADAGAKQAFAJAPAAIABAAQAdAAAGgfIABggg");
	this.shape.setTransform(13.2,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63DCE1").s().p("Ag2BDQgGgKAJgDQAHgCALAEQAKABAKgQQALgRgXgHIgagDIhHAAIAAgaIBGAAIARgBQASgEAAgKQAFgTgpgGQgNgBgBgMQAAgJAMgBIAMAAIAYAMQAXASgCAhIA+ABIATgDQARgIgDgUQgDgVANADQAGACAFAFQAEAFgBAGQgBArgjADQAeACAGAeQADAPgDAOQAAAEgDADQgGAGgKgCQgFAAAAgGIABgPQgBgZghgQQgrgBgSAAIgBAgQgGAggeAAQgPgBgFgJg");
	this.shape_1.setTransform(13.3,0.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-8.5,0,17.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(0,-8.5,26.5,17.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mcprojectileClipProjectile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// projectile
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#14484C").ss(1,1,1).p("AFUAAQAAAPhkALQhjALiNAAQiMAAhkgLQhjgLAAgPQAAgOBjgLQBkgLCMAAQCNAABjALQBkALAAAOg");
	this.shape.setTransform(34,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63DCE1").s().p("AjvAaQhkgLAAgPQAAgOBkgLQBjgLCMAAQCNAABjALQBkALAAAOQAAAPhkALQhjALiNAAQiMAAhjgLg");
	this.shape_1.setTransform(34,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcprojectileClipProjectile, rect = new cjs.Rectangle(-1,-4.6,70,9.4), [rect]);


(lib.ombre_pale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8CAC3").s().p("AlzBKQiZgfgBgrQABgqCZgfQCbgeDYgBQDaABCaAeQCZAfABAqQgBAriZAfQiaAfjagBQjYABibgfg");
	this.shape.setTransform(47.3,9.4,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,94.6,18.8);
p.frameBounds = [rect];


(lib.ombre_foncee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A57351").s().p("AlzBKQiZgfgBgrQABgqCZgfQCbgeDYgBQDaABCaAeQCZAfABAqQgBAriZAfQiaAfjagBQjYABibgfg");
	this.shape.setTransform(47.3,9.4,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,94.6,18.8);
p.frameBounds = [rect];


(lib.mcobstaclesClipObstacle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{baguettes_n1:0,sushi_n1:1,crayon_n2:2,blocnotes_n2:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// obstacle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3CFCD").s().p("AqXghIACgHIT4BJQAgADAVgHQgBALgYABg");
	this.shape.setTransform(-69.1,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2A59E").s().p("AmyAKQgKAAgLgFQgWgIgJgUQgEgRAFgNIAGgJQABANALAMQAUAXArADIN9BDIgBAHg");
	this.shape_1.setTransform(-184.3,-15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CEBFB6").s().p("Am1AVQgYgBgQgQQgQgOACgUQACgTATgNQASgNAZABIOXBJIgHBMg");
	this.shape_2.setTransform(-184,-16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#421D11").s().p("AxLAEQglgDgVgYQgRgUACgaQADgbAWgRQAXgSAfAAMAiPACsQAbACALADQATAEAJALQALANgCASQgEAogtAAgAxthjQgRANgCATQgCAUAQAPQAQAPAYACMAiUAB+IAaABQAOAAAGgEQAIgFABgNQACgSgUgGQgJgDgjgCMgiDgCsIgFAAQgXAAgRAMg");
	this.shape_3.setTransform(-117.9,-13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4EDE9").s().p("ARKBvMgiUgB+QgYgBgQgQQgQgPACgUQACgTATgNQASgNAZABMAiDACsQAjADAJADQAUAGgCARQgCASgPADIgNABIgZgBg");
	this.shape_4.setTransform(-117.9,-13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3CFCD").s().p("ApMAjIRrhKQAdgCAQgJQABALgVAEIyBBWg");
	this.shape_5.setTransform(-62.4,-20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2A59E").s().p("AnXAlQgSgNgCgUQgCgTAQgPQAQgPAYgCIOiAcIuZBDIgHAAQgUAAgQgLg");
	this.shape_6.setTransform(-185,-12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CEBFB6").s().p("AnXA9QgSgNgCgUQgCgUAQgOQAQgPAYgCIOagwIAIBLIuZBEIgHAAQgUAAgQgLg");
	this.shape_7.setTransform(-185,-14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#421D11").s().p("Ax7BsQgXgSgDgaQgCgaASgUQAWgZAjgCMAiPgBzIAZgBQA2AAADAoQADAUgLANQgJAJgPAEQgJACgWABMgicACiQgfAAgWgSgAQ/hoMgiKAByQgYACgQAPQgQAPACAUQACASARANQARANAXAAMAiVgChQAfgCAHgDQAOgFgCgSQgCgWgjAAIgdABg");
	this.shape_8.setTransform(-118.9,-18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4EDE9").s().p("AxsBfQgSgNgCgUQgCgUAQgPQAQgPAYgCMAiJgByQAigCALACQAUADACASQABASgNAFQgIADgfACMgiQAChIgHAAQgUAAgQgLg");
	this.shape_9.setTransform(-118.9,-18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D8CAC3").s().p("Am7AYQgZgCgQgRQgQgQACgWQACgWATgOQATgPAYACIOlBRIgHBUg");
	this.shape_10.setTransform(-185.1,-12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D8CAC3").s().p("ARZB7MgiygCMQgZgCgQgRQgQgQACgWQACgWATgPQATgOAYACMAiiAC/QAjACAKAEQAUAGgCAUQgCAUgPADIgLABIgcgBg");
	this.shape_11.setTransform(-118.1,-8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D8CAC3").s().p("AneBDQgSgOgCgWQgCgWAQgQQAQgRAYgBIOng2IAIBTIulBMIgFAAQgVAAgSgNg");
	this.shape_12.setTransform(-186.2,-10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D8CAC3").s().p("Ax8BoQgSgOgCgWQgCgWAQgRQAQgRAYgBMAiogB+QAjgDAKACQAVAEACATQABAUgOAGQgHADgfACMgivACzIgFABQgWAAgRgOg");
	this.shape_13.setTransform(-119.2,-14.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#81AD79").s().p("AgFhSQABgEADgBQADgCADACIAOAKQANAJgDAQIgcCMIgeABg");
	this.shape_14.setTransform(-31.4,-49.7,1.324,1.324);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A55D4C").s().p("AADgTQABAIAAAeIgHABg");
	this.shape_15.setTransform(-30.7,-40.7,1.324,1.324);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BC6D55").s().p("AhaAJIAAgUQBaAfBbgfIAAAUQgpADguAAQgtAAgxgDg");
	this.shape_16.setTransform(-42.3,-39.5,1.324,1.324);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D17661").s().p("AghAhQgDghAGgOQACgGANgOQAGATAUAWQAXAYABAEg");
	this.shape_17.setTransform(-49.8,-42.6,1.324,1.324);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FC9770").s().p("AhaApIAAgeQAAgVASgQQASgQAaAAIA5AAQAaAAASAQQASAQAAAVIAAAeQgpACguAAQgtAAgxgCg");
	this.shape_18.setTransform(-42.3,-43.6,1.324,1.324);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#475141").s().p("AAIgoIgDBQIgMABg");
	this.shape_19.setTransform(-30.2,-43.4,1.324,1.324);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#576054").s().p("AgHgEQAMAAAMgNIgOAiIgTABQAJgIAAgOg");
	this.shape_20.setTransform(-29,-40.4,1.324,1.324);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#18231B").ss(3).p("ABZhpIABAAIA6gNQA8gTAKgkQABAAAAABIAAEqQAAAHgEAFQgEAEgHABQiBAUg5AGQheALiNgNQgBAAAAgBQAAgBABAAQB2gjBLhNQAngpBKh1g");
	this.shape_21.setTransform(-30.4,-20.4,1.324,1.324);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18231B").s().p("AjZCnIgBgBIABgBQB2gjBLhNQAngpBKh1IABAAIA6gNQA8gTAKgkQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAEqQAAAHgEAFQgEAEgHABQiBAUg5AGQgrAFg1AAQg/AAhMgHg");
	this.shape_22.setTransform(-30.4,-20.4,1.324,1.324);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#18231B").ss(3).p("AAAhvQiMAAhAgKQhZgOgMglQgBgBgBAAQgBABAAABIAAEpQAAAFAEAFQAEAFAFABQEnBFEnhFQANgDAAgOIAAkrQAAgDgBADQgLAnhYAOQhBAKiPAAg");
	this.shape_23.setTransform(-42.2,-20.4,1.324,1.324);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#243327").s().p("AkmCOQgGgBgEgFQgDgFgBgFIAAkpIABgCIACABQANAlBYAOQBAAKCMAAQCQAABAgKQBYgOALgnQAAgBABAAQAAgBAAAAQAAAAAAABQABAAAAABIAAErQAAAOgOADQiTAjiUAAQiTAAiTgjg");
	this.shape_24.setTransform(-42.2,-20.4,1.324,1.324);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#87AA80").s().p("AAEBPIhCh+QgDgGADgGQADgHAHgCIAwgNQAEgBACACQAEACABAEIA6Ccg");
	this.shape_25.setTransform(-57,-48.7,1.324,1.324);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5F7C59").s().p("AADg/QADgJAJgBIAXgEQAEgBACADQACADgBADIg6CSIggACg");
	this.shape_26.setTransform(-26.8,-48.4,1.324,1.324);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#18231B").ss(3).p("AE0AAQAAAvhaAQQhBAMiZAAQiYAAhBgMQhbgQAAgvQAAguBbgQQBBgMCYAAQCZAABBAMQBaAQAAAug");
	this.shape_27.setTransform(-42.2,-45.1,1.324,1.324);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AjZA/QhbgQAAgvQAAguBbgQQBBgMCYAAQCZAABBAMQBbAQAAAuQAAAvhbAQQhBAMiZAAQiYAAhBgMg");
	this.shape_28.setTransform(-42.2,-45.1,1.324,1.324);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D8CAC3").s().p("AjvBWQhkgkAAgyQAAgyBkgkQBjgjCMAAQCNAABjAjQBkAkAAAyQAAAyhkAkQhjAkiNAAQiMAAhjgkg");
	this.shape_29.setTransform(-40.5,-3.6,1.324,1.324);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7A7A7A").s().p("Ag1AZIAAgxIBlAAQgHAHgJAAQAJAAAHAGQAGAHAAAIQAAAIgFAGQgFAGgHABg");
	this.shape_30.setTransform(-146.9,-7.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2A2A2B").s().p("AgWgCIAWgIIAXAHIgtAOg");
	this.shape_31.setTransform(-4.7,-11.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D8D2D0").s().p("AhDAcIgBAAQgIAAgGgGQgGgGAAgIQAAgIAFgFQAFgGAHgBQBiAAA+gTIAAAOIicAxg");
	this.shape_32.setTransform(-15.9,-8.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#95BFBF").s().p("ApYAZQAIgCAFgFQAFgHAAgIQAAgIgHgGQgGgGgJAAQAJgBAGgGISmAFQgHABgFAGQgFAFAAAIQAAAIAGAGQAGAGAIAAIABgBIAAAFg");
	this.shape_33.setTransform(-83.2,-7.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E5B8B1").s().p("AgGAxQgVABgTgKQgggRgCgmQAAgNAGgMIAFgIIAVAYQAeAYAtAAIA2AAIAAAxg");
	this.shape_34.setTransform(-160.5,-10);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#421D11").s().p("AJxBVI1lAAQgnAAgbgZQgcgZAAgjQAAgjAcgZQAbgZAnAAIVoAAIAGABIDLBCQAOAFAAANQAAAOgOAFIjLBCIgGABgAsogtQgWATAAAaQAAAbAWATQAVATAfAAIVoAAIAAABIDLhCIjLhBI1oAAQgfAAgVAUg");
	this.shape_35.setTransform(-85.5,-11.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8E8E8E").s().p("AAbBBIhQAAIAAiCIBQAAIAFAAQAJAAAHAGQAGAHAAAJQAAAJgGAGQgHAHgJAAQAJAAAHAGQAGAHAAAIQAAAJgGAGQgHAHgJAAQAJAAAHAGQAGAHAAAJQAAAJgGAHQgHAGgJAAg");
	this.shape_36.setTransform(-146.9,-11.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#38393A").s().p("AgWgOIAtAOIgtAPg");
	this.shape_37.setTransform(-4.7,-11.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4EDE9").s().p("AhaA9IgBAAQgIAAgGgGQgGgGAAgIQAAgIAFgGQAFgGAHgBQgHgBgFgGQgFgFAAgIQAAgHAGgGQAGgGAIAAQgIAAgGgGQgGgGAAgJQAAgIAGgGQAGgGAIAAIABAAIAAgFIDKBBIjKBCg");
	this.shape_38.setTransform(-13.6,-11.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FCCBC0").s().p("AgGBBQgfAAgVgSQgWgUAAgbQAAgaAWgTQAVgTAfgBIACABIAAgBIBVAAIAACCg");
	this.shape_39.setTransform(-160.5,-11.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ADDFE1").s().p("ApcBBIAAiCIS5AAIAACCg");
	this.shape_40.setTransform(-83.2,-11.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A57351").s().p("Ar0BWQgnAAgbgZQgcgZAAgkQAAgiAcgZQAbgZAnAAIVogBIAGABIDLBCQAOAFAAANQAAAOgOAFIjLBCIgGABgAr0hAQgfAAgVATQgWATAAAaQAAAbAWAUQAVATAfAAIVoAAIDLhCIjLhBg");
	this.shape_41.setTransform(-85.5,-8.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A57351").s().p("Ar0BCQgfAAgVgTQgWgUAAgbQAAgaAWgTQAVgTAfAAIVogBIDLBBIjLBCg");
	this.shape_42.setTransform(-85.5,-8.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#421D11").s().p("AgRHWIm+kRQgKgHAAgLIAEiFQABgMAKgFIAvgaQgDgEABgGIAFg7IgQgJQgKgFAAgMIABiGQAAgMAKgFIGFjiQAEgDAGAAQAFAAAFADIHEEFQAKAGAAALIgBCBIASAMQAKAHgBAMIgMCEQgBAKgKAFIgoAUIgEBmQAAAMgKAFImLDYQgDACgGAAQgGAAgEgDgAmdjiIgBCGIAbAQIgGBGIASAMIhKAoIgECFIG+ESIGKjXIAEhzIAzgZIAMiDIgfgWIAEgCIABiGInEkFg");
	this.shape_43.setTransform(-45.5,-28.3,1.142,1.142);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AEC7D1").s().p("AhwgiIDgAKIhnA7g");
	this.shape_44.setTransform(-42.1,-28.3,1.142,1.142);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#97AEBA").s().p("AhwAhQBEgcAqgxQAgAvBSAnQghADgiAAQhOAAhPgMg");
	this.shape_45.setTransform(-42.1,-36.1,1.142,1.142);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6E7A7F").s().p("AgjgtIBHgqIgBCFIhGAqg");
	this.shape_46.setTransform(-0.7,-40.2,1.142,1.142);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A1AFB5").s().p("AkFhtIBHgpIHEEEIhHApg");
	this.shape_47.setTransform(-26.6,-62.8,1.142,1.142);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#91A1AA").s().p("AjBAvIGEjiIAACGImFDhg");
	this.shape_48.setTransform(-18.9,-29.6,1.142,1.142);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AABDC9").s().p("Ajig/IABiGIHEEFIgBCFg");
	this.shape_49.setTransform(-67,-31.6,1.142,1.142);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BFD3DD").s().p("AmkgRIGFjiIHEEEImFDjg");
	this.shape_50.setTransform(-44.7,-52.2,1.142,1.142);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C6664F").s().p("AgfgwIBKgjIgMCEIhJAjg");
	this.shape_51.setTransform(1.4,-22.6,1.142,1.142);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E2896A").s().p("Aj7iDIBKgjIGtEqIhLAjg");
	this.shape_52.setTransform(-22.5,-47.3,1.142,1.142);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DB7256").s().p("AjFAeIGWjAIgLCFImWDAg");
	this.shape_53.setTransform(-17.6,-13.7,1.142,1.142);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F4845D").s().p("AjchSIAMiFIGsEqIgLCFg");
	this.shape_54.setTransform(-65.3,-19.7,1.142,1.142);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E29C8F").s().p("Amhg0IGXjBIGsEqImXDBg");
	this.shape_55.setTransform(-41.4,-38.3,1.142,1.142);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DDCDC3").s().p("ABECOIk9kXIBFglIGuEXIh/BGg");
	this.shape_56.setTransform(-59.9,-11.9,1.142,1.142);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BAA495").s().p("AghguIBHgnIgECEIhHAog");
	this.shape_57.setTransform(-5.2,-6.6,1.142,1.142);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F6E4D6").s().p("AkCh0IBJgnIG8EQIhJAng");
	this.shape_58.setTransform(-30.4,-29.8,1.142,1.142);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CEB6A5").s().p("AjCApIGKjWIgFCFImKDWg");
	this.shape_59.setTransform(-23.6,3.5,1.142,1.142);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E5CAB7").s().p("AjghFIAEiGIG9ERIgECFg");
	this.shape_60.setTransform(-71.6,0.2,1.142,1.142);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2E9E2").s().p("AmkgcIGMjXIG9EQImLDXg");
	this.shape_61.setTransform(-48.8,-19.8,1.142,1.142);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#A57351").ss(3,0,1).p("AmXg1IhLAkIHHEeIH+keIhFhiIAlg+Iglhl");
	this.shape_62.setTransform(-45.4,-0.4,1.142,1.142);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A57351").s().p("AnigMIBLgkIM1jhIAkBlIgkA+IBFBiIn/Eeg");
	this.shape_63.setTransform(-45.4,-0.9,1.142,1.142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-236.3,-30.7,235.8,34.5);
p.frameBounds = [rect, new cjs.Rectangle(-86,-61.4,90.5,74), new cjs.Rectangle(-170.5,-20.1,170.2,20.3), new cjs.Rectangle(-102.1,-82.3,113.4,114.3)];


(lib.btn_ressayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABsCHIgCgCIhqg6IAAAWIgTAAIAAAMIgBACIgpgDQglgHgLggQgCgGgBgNIAAgbQAAgFgEgCIgXgQIgDgCIAbgdQADgEAAgDIAAhaIATAAIABgHIDTAAIAACYIgTAAIAAAOIgSAAIAAAAIA6AjQAEACgBAEIgOAzIgHgEIgHgEIgGAUgAAJAxIBzBAIABgBIAKgmQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgQgKQg6gjgigMIgCgBIAAgCIBaAAIAAiKIjHAAIAABRQAAACgCAEIgYAaIAUAOIACABQAEACAAAFIAAAeQAAAVAMAMQAVAYAvgEIAAgvQAGAAAJAGg");
	this.shape.setTransform(271.7,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhLAGIAAgLICXAAIAAALg");
	this.shape_1.setTransform(273.4,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhLAGIAAgLICXAAIAAALg");
	this.shape_2.setTransform(273.4,31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAGBPIgHAJQgMAPgUAFQgTAFgRgHQgXgKgDgaQgCgKADgMQABgHAGgIQAGgHAKgIIAOgJIgYAAIAAgnIANAAIAAgOIgNAAIAAguIANAAIAAgNIANAAIABgHIANAAIAAgHIAtAAIAAAOIBDAAIAAAuIgNAAIAAANIANAAIAAApIgNAAIAAALIg1AAQgCAEAFACQAXAHANAGQANAGAcAZIAMAMIgxAvgAA9BgIAagaIgKgKQgcgbgYgHIgYgIQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgaIBBAAIAAgbIhBAAIAAgbIBBAAIAAghIhBAAIAAgNIgiAAIAAANIgaAAIAAAhIAaAAIAAAbIgaAAIAAAbIAaAAIAAAUIgYAHQgPAIgCAOQgCAKACAKQAEAZAWAFQAaAGAVgQQAKgHAFgOQAFABAsAlg");
	this.shape_3.setTransform(244.4,34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIABQAAgIAIAAIAJAAIAAAIQgBAHgGABQgKgBAAgHg");
	this.shape_4.setTransform(240,39.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ah4B8IAAgCIAAg6IAUAAIAAgHIA7AAQACgugKgSQgPgdgbgLIgcgJIgEgCIALg0IAPADIAEgQQAiAHAVAMQAZAOASAXQA6gwAxgIIAMA1IgUAFIACAHIgQAEQgRAFgDACQgFADgGAGQgXAbgDAcIgBBdIgUAAIAAAOgAhdBnIB3AAIAAhXQAEggAWgZQAWgYAggHIAKgDIgJgoQg/AMgjA2Qgig2g/gMIgJAoIAKADQAfAHAUAYQAVAZABAfIAAAvIAAACIhPAAg");
	this.shape_5.setTransform(219.8,33);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgaAaIAMgzIAZAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIANAyIAAAAgAgDAUIgHgaIgBAAIgHAaIAPAAg");
	this.shape_6.setTransform(193.2,30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgiAGIADgMIBCAAIAAAMg");
	this.shape_7.setTransform(193,35.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AArBXQgCgHgCgBQgBgBgIgBIhCAAQgEAAgBAFIgHAYIgOgEIgEARIgzgQIALgaIgWAAIAAg0IADAAIAJgtIANABQABAAAAAAQABAAAAAAQABAAAAgBQAAgBAAAAIADgLIAUABQAEABABgDIAGgbIgdgGIAJgwIAPAEIAEgRQBAAUBegRIAKApIgUAFIABAIIgJACIALAnIAqgGIAAAuIgDAAQgFAAAAACQgBABABAEIALAnIgTACIAHAaQABAEgDACIg9AlgABBA9IAMArIAhgTIgJggIATgCIgJghIgRABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgHgKIAjgEIAAggIgoAHIgRg8IAfgHIgHgdQhUAQhAgRIgHAiIAfAGIgOA1QgBAEgEAAIgjgEIgGAeIAmADIgGAHQgCADgEABIgdAAIAAAnIAXAAIgLAcIAlAMIAKgjQABgFAFAAQAtAAA0AAQADgBABAEg");
	this.shape_8.setTransform(192.1,34.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgICBQgggCgpgSIgBgBIAQgsIgdgIIAShtIAOABQADgEgFgDIgRgOIAdgrIAFAEIAMgQQAtAtBDgFIAAA1IgUAAIAAAOIglgCIgjgIIgFAaIAJgDQAdgLAXADQAWADAOANQAQANADATQAHAngdAYQgMALgSALQgUAMgbAAIgEAAgAg5BdQAtAUAhgDQAkgDAUgZQASgXgHgcQgGgfgkgIQgVgFgcAJIgaAIIAKg4IgkgGIgQBiIAiAJQAEABAEgDIAagMQAVgJARACQANACAFAIQAEAIgGAKIgFAFQgJAKgRABQgTACgZgJIgUgHgAg4hXQAWAXApAOQApAPAWgHIAAgnQg6ADgvgog");
	this.shape_9.setTransform(167.9,31.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgJCBQgfgCgpgSIgBgBIAQgsIgdgIIAShtIANABQADgEgEgDIgRgOIAdgrIAFAEIALgQQAuAtBDgFIAAA1IgUAAIAAAOIglgCIgkgIIgEAaIAJgDQAcgLAYADQAVADAPANQAQANADATQAHAngdAYQgOAMgRAKQgTAMgbAAIgFAAgAg5BdQAsAUAigDQAkgDAUgZQARgXgGgcQgHgfgjgIQgVgFgdAJIgaAIIAKg4IgjgGIgQBiIAhAJQAEABAFgDIAZgMQAWgJAQACQAOACAEAIQAEAIgGAKIgEAFQgKAKgRABQgTACgZgJIgUgHgAg5hXQAXAXAoAOQAqAPAVgHIAAgnQg6ADgvgog");
	this.shape_10.setTransform(147.2,31.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAGBQIAAgBIAAABIgIAIQgLAOgUAGQgUAGgQgIQgXgJgDgbQgCgLACgLQACgHAGgIQAFgGALgJIAOgJIgYAAIAAgnIANAAIAAgOIgNAAIAAguIANAAIAAgNIANAAIABgHIANAAIAAgHIAtAAIAAAOIBDAAIAAAuIgNAAIAAANIAMAAIAAApIgMAAIAAALIg1AAQgCAEAFACIAkANQANAGAcAZIAMAMIgxAvIgqglgAA8BgIAagaIgJgKQgcgagYgIIgYgIQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgaIBBAAIAAgbIhBAAIAAgbIBBAAIAAghIhBAAIAAgNIgiAAIAAANIgaAAIAAAhIAaAAIAAAbIgaAAIAAAbIAaAAIAAAUIgYAHQgPAIgCAOQgCAKACAKQADAYAXAGQAaAHAVgRQAKgHAFgOQAEABAsAlg");
	this.shape_11.setTransform(125.8,34.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIABQAAgIAIAAIAJAAIAAAIQAAAHgHABQgKgBAAgHg");
	this.shape_12.setTransform(121.3,39.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIABQAAgIAIAAIAJAAIAAAIQAAAHgHABQgKgBAAgHg");
	this.shape_13.setTransform(97.8,39.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgwAbIAkgrIABgBQAEAAABgDIAEgEQACgDADAAIAuAAIg6A1QgCABgDAAIgfAAIgDABgAAAgUIgbAiIAWAAIADgCIAlggIABgCIgfAAQgCAAgDACg");
	this.shape_14.setTransform(108.3,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAGBQIAAgBIAAABIgIAIQgLAOgUAGQgUAGgQgIQgXgJgDgbQgCgLACgLQACgHAGgIQAFgGALgJIAOgJIgYAAIAAgnIANAAIAAgOIgNAAIAAguIANAAIAAgNIANAAIABgHIANAAIAAgHIAtAAIAAAOIBDAAIAAAuIgNAAIAAANIAMAAIAAApIgMAAIAAALIg1AAQgCAEAFACIAkANQANAGAcAZIAMAMIgxAvIgqglgAA8BgIAagaIgJgKQgcgagYgIIgYgIQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgaIBBAAIAAgbIhBAAIAAgbIBBAAIAAghIhBAAIAAgNIgiAAIAAANIgaAAIAAAhIAaAAIAAAbIgaAAIAAAbIAaAAIAAAUIgYAHQgPAIgCAOQgCAKACAKQADAYAXAGQAaAHAVgRQAKgHAFgOQAEABAsAlg");
	this.shape_15.setTransform(102.3,34.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgYAKIAAgTIAiAAQAEAAACADIAJAQg");
	this.shape_16.setTransform(70,31.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhPAKIAAgTICfAAIAAATg");
	this.shape_17.setTransform(75.5,27.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAaB4QgGgEgMgOIgUgYIgDADIgPAFIABAEIACADIgFACIhdAeQgDABgCgEIgOgjIgCgDIAAgCIAHgDQAFAAAAgHIAAi8IAOAAIAAgNID2AAIgBAFIAAB/IgTAAIAAANIgHABIAAAUIgOAAIAAANIgdAAIAJALQAGAJAQgBQALgBAMgIIAHgFIAeAmIgPAKIgCAFQgbATgcADIgIAAQgbAAgOgKgAgUAeQACAAADACIAuA4QAOAQANADQAPAEASgCQAYgCAWgQIgWgbQgRAMgSAAQgLAAgGgHIgkgnIBBAAIAAgNIhHAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAgBIgLgRIBwAAIAAh4IjoAAIABC2QAAAKgIACIgCABIANAfIBZgcIgMgfIgoAMIAAgbIABAAg");
	this.shape_18.setTransform(74.9,31.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AhPAJIAAgRICfAAIAAARg");
	this.shape_19.setTransform(75.5,24);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGANIAGgZIABAAIAGAZg");
	this.shape_20.setTransform(192.1,31.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhnBuIAAgoIBQAAIAAgCIAAgvQgCgegUgZQgVgZgegHIgKgDIAJgoQA+AMAjA3QAjg2A+gNIAKAoIgKADQghAHgVAZQgWAYgFAgIAABYg");
	this.shape_21.setTransform(220.8,32.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA4BEQgBgEgDABQg0AAgtAAQgFAAgBAFIgKAjIglgMIALgcIgXAAIAAgnIAdAAQAEgBACgDIAGgHIgmgDIAGgeIAjAEQAEAAABgEIAOg1IgfgGIAHgiQBBARBTgQIAHAdIgfAHIARA8IAogHIAAAgIgjAEIAHAKQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIARgBIAJAhIgTACIAJAhIghASgAgiAYIBFAAIAAgNIhCAAgAgYgIIA1AAIAAAAIgNgzQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAgBAAIgZAAg");
	this.shape_22.setTransform(193,34.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAIBBQgGAPgJAHQgWAQgagGQgVgGgFgZQgBgJACgLQABgOAQgHIAYgHIAAgUIgbAAIAAgbIAbAAIAAgbIgbAAIAAghIAbAAIAAgOIAhAAIAAAOIBCAAIAAAhIhBAAIAAAbIBBAAIAAAbIhCAAIAAAaQAAAAABAAQAAABAAAAQAAAAABABQABAAAAAAIAYAIQAXAHAcAaIAKALIgaAZQgsgkgEgCgAg5A6QAAAIAKAAQAHAAABgHIAAgKIgLAAQgHABAAAIg");
	this.shape_23.setTransform(244.9,33.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAIBBQgFAPgKAHQgVAQgagGQgXgGgDgZQgCgJACgLQACgOAPgHIAYgHIAAgUIgaAAIAAgbIAaAAIAAgbIgaAAIAAghIAaAAIAAgOIAiAAIAAAOIBBAAIAAAhIhBAAIAAAbIBBAAIAAAbIhBAAIAAAaQAAAAAAAAQAAABAAAAQABAAAAABQABAAABAAIAXAIQAYAHAcAaIAJALIgaAZQgsgkgEgCgAg5A6QAAAIALAAQAHAAAAgHIAAgKIgKAAQgIABAAAIg");
	this.shape_24.setTransform(102.7,33.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfASIAcghQADgDABAAIAfAAIgBADIglAgIgDABg");
	this.shape_25.setTransform(108.7,19.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgBA5QgLgGgFAAIAAAvQgvAEgWgYQgLgMAAgUIAAgfQAAgFgEgCIgDgCIgTgNIAXgaQADgEAAgCIAAhRIDGAAIAACLIhZAAIAAABIACABQAiAMA6AjIAQAKQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIgLAmIgBABgAhGgiICXAAIAAgNIiXAAgAhGhJICYAAIAAgNIiYAAg");
	this.shape_26.setTransform(272.9,35.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAzBxQgNgDgOgQIgug3QgCgDgCAAIg0AAIgCABIAAAaIAogMIAMAfIhYAcIgNgfIABgBQAIgBAAgKIAAi2IDoAAIAAB2IhwAAIAKATQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAIBGAAIAAANIhAAAIAkAoQAFAGAMAAQASABARgMIAVAbQgVAPgZADIgJAAQgNAAgLgDgAgeAXIgJgRQgCgDgEAAIgjAAIAAAUIAyAAgAhQgQICeAAIAAgUIieAAgAhQg4ICeAAIAAgTIieAAg");
	this.shape_27.setTransform(75.6,30.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAEIgIgDQAdgLARABQAFABAFADQADACAAADQAAAEgBADQgBABgGABIgKABQgOAAgTgGg");
	this.shape_28.setTransform(168,37.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAIBBQgFAPgKAHQgVAQgagGQgXgGgDgZQgCgJACgLQACgOAPgHIAYgHIAAgUIgaAAIAAgbIAaAAIAAgbIgaAAIAAghIAaAAIAAgOIAiAAIAAAOIBBAAIAAAhIhBAAIAAAbIBBAAIAAAbIhBAAIAAAaQAAAAAAAAQAAABAAAAQABAAAAABQABAAABAAIAXAIQAYAHAcAaIAJALIgaAZQgsgkgEgCgAg5A6QAAAIALAAQAHAAAAgHIAAgKIgKAAQgIABAAAIg");
	this.shape_29.setTransform(126.2,33.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhCBDIANgjIAUAHQAaAJASgCQARgBAJgKIAFgFQAGgKgEgIQgFgIgNgCQgRgCgVAJIgaAMQgEADgEgBIgigJIAQhiIAkAGIgKA5IAagJQAcgJAVAFQAkAJAGAeQAHAcgSAXQgUAZgkADIgIABQgeAAgogSg");
	this.shape_30.setTransform(168.8,34.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AABAdQgpgOgXgWIAWgfQAuAnA7gCIAAAmQgHACgJAAQgTAAgcgKg");
	this.shape_31.setTransform(168.6,23.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AABAdQgpgOgWgWIAUgfQAwAnA5gCIAAAmQgGACgJAAQgTAAgcgKg");
	this.shape_32.setTransform(147.8,23.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVAEIgIgDQAdgLARABQAFABAFADQADACAAADQAAAEgBADQgBABgGABIgKABQgOAAgTgGg");
	this.shape_33.setTransform(147.3,37.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhCBDIANgjIAUAHQAaAJASgCQARgBAJgKIAFgFQAGgKgEgIQgFgIgNgCQgRgCgVAJIgaAMQgEADgEgBIgigJIAQhiIAkAGIgKA5IAagJQAcgJAVAFQAkAJAGAeQAHAcgSAXQgUAZgkADIgIABQgeAAgogSg");
	this.shape_34.setTransform(148.1,34.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0572D").s().p("A4cDsQgqAAgfgjQgegkAAgxMA0HgFfIAAFfQAAAxgeAkQgfAjgrAAg");
	this.shape_35.setTransform(169.8,38.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#682C15").s().p("A4LFGQg+AAgsgsQgsgsAAg+IAAlfQAAg+AsgsQAsgsA+AAMAwXAAAQA+AAAsAsQAsAsAAA+IAAFfQAAA+gsAsQgsAsg+AAgA5gkDQgjAjAAAxIAAFfQAAAxAjAkQAjAjAyAAMAwXAAAQAyAAAjgjQAjgkAAgxIAAlfQAAgxgjgjQgjgkgyAAMgwXAAAQgyAAgjAkg");
	this.shape_36.setTransform(169.8,32.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FE7030").s().p("A4LEoQgyAAgjgjQgjgkAAgxIAAlfQAAgxAjgjQAjgkAyAAMAwXAAAQAyAAAjAkQAjAjAAAxIAAFfQAAAxgjAkQgjAjgyAAg");
	this.shape_37.setTransform(169.8,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_ressayer, rect = new cjs.Rectangle(0,0,339.7,65.2), [rect]);


(lib.btn_prochainNiveau = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhJB0IgNjPIgBgEIAAgHIASAAIAAgMIAzgBIAKCbIAPAAIAAiKIASAAIAAgLIAyAAIAACVIANAAIAAAxIgMAAIAAANIhMABIgWACIAAALgAg+hsIANDOIAmAAIAAgHIgBgHIBeAAIAAgnIgNAAIAAiVIgmAAIAACVIgtAAIgJiag");
	this.shape.setTransform(390.8,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAGIADgLIA+AAIAAALg");
	this.shape_1.setTransform(368.3,36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAZIALgxIAXAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAMAuIAAABgAgCATIgHgYIgCAAIgGAYIAPAAg");
	this.shape_2.setTransform(368.5,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AApBSIgEgIQgBgBgHAAIg/AAQgDAAgBADIgHAYIgNgEIgEAQIgwgPIAKgYIgUAAIAAgyIADAAIAIgqIAMABQABABABgBQAAAAABAAQAAAAAAgBQAAAAAAgBIACgLIAUACQAEABAAgEIAGgZIgcgGIAKgtIAOAFIADgQQA9ASBYgQIAJAnIgTAEIACAIIgJACIAKAlIAogGIAAArIgDAAIgFACIAAAFIAJAgIABAFIgRACIAGAYQACAEgEABIg1AhIgEACgAA5A2QABAAABAAQABABAAAAQAAAAABABQAAAAAAABIAMApIAfgSIgJgeIASgCIgIgfIgQABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAIgGgKIAggDIAAgeIglAGIgQg4IAdgHIgHgbQhRAOg6gPIgHAgIAdAFIgNAyQgBAFgEgBIghgEIgFAdIAkACIgGAIQgCACgEAAIgbABIAAAkIAWAAIgLAbIAjALIAKghQABgFAFAAg");
	this.shape_3.setTransform(367.4,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ADDFE1").s().p("AgbgHQAMgGAQAGQARAGAKAMQglgEgSgOg");
	this.shape_4.setTransform(113.2,31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAAQgBgHAIAAIAJAAIAAAIQgBAHgGAAIgCAAQgHAAAAgIg");
	this.shape_5.setTransform(339.9,40);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAFBLIgGAIQgMAPgSAEQgRAFgRgHQgWgJgDgZQgBgJACgMQACgHAFgHIAPgOIANgJIgWAAIAAgkIAMAAIAAgNIgMAAIAAgsIAMAAIAAgMIANAAIAAgHIAMAAIAAgGIArAAIAAAMIA/AAIAAAsIgMAAIAAANIALAAIAAAmIgMAAIAAALIgxAAQgCADAEACIAjANQANAFAZAYIALALIguAtgAA5BaIAYgYIgJgKQgagYgWgIIgMgDIgLgEQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgZIA+AAIAAgZIg+AAIAAgZIA9AAIAAgfIg9AAIAAgMIggAAIAAAMIgYAAIAAAfIAYAAIAAAZIgYAAIAAAZIAYAAIAAAUIgWAHQgPAGgBANQgCAKABAKQAEAWAVAGQAYAGAUgPQAKgIAFgNQAFACAoAig");
	this.shape_6.setTransform(344.1,35.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhSA8IASgGIAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIgsh/IATgGIgBgGIAxgPIApB8QASgTAIgVQAIghABgdIARAAIAAgMIAzACIAAAOQgGBPgtAtIgNAMQgtAjgqALIgVAHgAhQhYIAtCEIgWAIIAMAlIAhgLQBMgbAahMQAJgiABgeIgngCQgDBUg6AkIgqiAg");
	this.shape_7.setTransform(319.8,35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghgQIANgBIAAgLIAygEIAEAuIgOACIABAKIg2AHgAgOgXIAAAlIAqgFIgEgig");
	this.shape_8.setTransform(298.7,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhTAhIAOAAQAEAAgBgEIAAgIIAZgCQAHgBACgHIAGgYIgIACIgIgrIASgGIgBgGIBEgUIAHAvIgNADQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIADAeQACAHAJAGQANAIAVAAIADABIgBA2IgJAAIgIgBIgBANQgrgBgZgZIgLAGQgWASgdADIgUABgAgIAAQgFARgSAGIgMADIgRABIAAArQAygEAWgeQAWAbAsAEIAAgpIgcgIQgQgGgEgPQgDgRABgSQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAMgDIgFgiIg3AQIAFAfIAJgCQgBASgEAPg");
	this.shape_9.setTransform(298.7,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AiFBBIARgHIAAgBIgBgDQAbgHAFhBIgMAEIgOgsIARgFIgBgGIALgDQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgBgTIATAAIABgGIAqAAIAAALIAugPQAUgIALAUQADAHACAQQABAWgDAsIgBAuIAHAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAFgRIALACIAFgOIAsALIgUBBIgJAAIgDACIgDAKIgLAAIhgAAQAHgaAGh0IgYAIQAAAjgXA7QgEAGgKAJQgeAYgbAJIgBAAgAhtA6IANAfQBJgdgChqIAzgQQgCA6gKBUIBdABQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAMgnIAEgNIgggHIgIAaQgBAEgEAAIgdAAIADhBQABgjAAgRQAAgJgFgLQgGgQgRAGIg1ARIAAgNIggAAIAAAQQAAAGgBABIgdAGIAKAgIAOgDQAABMguASg");
	this.shape_10.setTransform(275.1,35.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiFBBIARgHIAAgBIgBgDQAagGAGhCIgHACIgFACIgOgsIARgFIgBgGIAKgDQABAAABAAQAAgBAAAAQABAAAAgBQAAgBAAAAIAAgTIATAAIAAgGIAsAAIAAALIAtgPQAUgIAKAUQAEAJACAOQABAQgDAyIgCAuIAIAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAFgRIALACIAFgOIAsALIgTBBIgKAAIgDACIgDAKIgLAAIhgAAQAHgfAGhvIgYAIQAAAhgYA9QgEAHgKAIQgdAYgbAJIgBAAgAhtA6IANAfQBIgdgBhqIAygQQAAA3gLBXIBdABQABAAAAgBQABAAAAAAQABAAAAgBQAAgBAAAAIAMgnIAEgNIgggHIgCADIgGAXQgBAEgEAAIgdAAIADhBQABgjAAgRQgBgJgEgLQgGgRgRAHIg1ARIAAgNIggAAIAAAQIgBAHIgeAGIAKAgIAPgDQAABMguASg");
	this.shape_11.setTransform(236.1,35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhSAhIANAAQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAgBIAAgIIAYgCQAHAAACgIIAGgYIgIACIgIgrIASgGIgBgGIBEgUIAGAvIgMADQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIADAeQACAHAJAGQAOAIAUAAIADABIgBA2IgJAAIgJgBIAAANQgqgBgbgZIgKAGQgWASgdADIgUABgAgIAAQgEARgTAGIgMADIgRABIAAArQAygEAWgeQAXAbAsAEIAAgpIgdgIQgPgGgFgPQgDgOABgVQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIANgDIgFgiIg3AQIAFAfIAJgCQAAAQgFARg");
	this.shape_12.setTransform(211.4,37);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghgQIANgBIAAgLIAygEIAEAuIgPACIABAKIg1AHgAgOgXIAAAlIApgFIgDgig");
	this.shape_13.setTransform(211.4,25.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAZIALgxIAYAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAMAuIAAABgAgCATIgHgYIgBAAIgGAYIAOAAg");
	this.shape_14.setTransform(189.3,31.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AggAGIADgLIA+AAIAAALg");
	this.shape_15.setTransform(189.1,36.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAoBSQgBgHgCgBQgBgBgIAAIg+AAQgEAAgBADIgGAYIgNgEIgFAQIgvgPIAKgYIgUAAIAAgyIADAAIAHgqIANABQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAAAAIACgLIATACQAEABABgEIAGgZIgcgGIAJgtIAOAFIAEgQQA9ASBXgQIAKAnIgJACIgKACIABAIIgJACIALAlIAngGIAAArIgDAAIgEACQgBABABAEIAKAlIgSACIAHAYQABAEgDABIg5AjgAA5A2QADAAABADIAMApIAegSIgIgeIASgCIgJgfIgPABQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgGgKIAhgDIAAgeIgmAGIgQg4IAegHIgHgbQhRAOg7gPIgGAgIAdAFIgNAyQgBAEgEAAIghgEIgFAdIAkACIgGAIQgDACgDAAIgbABIAAAkIAWAAIgLAbIAiALIAKghQACgFAEAAg");
	this.shape_16.setTransform(188.3,35.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAABoIAAgsIAMAAIAAgTIAQAAQAHAAABgBQACgBAAgHIAAgQIgbAAIgGAKQgUAogYATQgUAQgVACIgTABIAAgsIAMAAIAAgUIARAAIAPgKQAHgGACgIIgpAAIAAgfIAMAAIAAgTIAtAAIAAg4IAMAAIAAgMIAqAAQAEAtAAAXIBIAAIAAADIAAA0QgBAagSAUIgMAPQgTAVgeABgAATBVIAWgCQAUgEAPgQQAPgSACgUIABg0IgBgBIhJAAQABgIAAgaIgCgjIgfAAQABAvgDAXIg2AAIAAASIAqAAIAAABQgMAggQAOQgMAKgLgBIgDAAIAAAmQARABAOgIQATgMAQgUQAPgTALggQAAgDAEgBIAlAAIADABIAAAcIAAADQgBAJgIAIQgJAJgKgCIgJAAg");
	this.shape_17.setTransform(163.9,35.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgwBiQgqgRgQgoQgKgZAGgbQAHgaAUgTIAOgOQAagWAkADIAcAEIAAgEIANgDIgCgHIAygJIAfB5IgNAAIABAGIguAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgJgUgbgNQgYgMgSABIgDAAQgLADgDADQgEADgBAOQgCAWAWAOQAiAYAkgSIAagPIAbArIgOAJIACADQgtAegmABQgWAAgZgLgAgdhSQgpAIgRAmQgQAlASAjQARAfAjAOQAgAOAcgGQAZgFAcgQIAFgEIgUghIgUAMQgbANgXgHQgegHgMgTQgRgXAPgZQANgXAfADQAXADAYAQQAHAEAJAKIAIAPQABADAEAAIAiAAIgchrIgmAHIAJAcIgUgJIgBAAQgVgIgTAAIgQABg");
	this.shape_18.setTransform(139.4,34.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag7BoQgQgHgNgSQgVgegBgbQgBgTAKgOIAEACIAHgOIATALIgBgCQgageAbgeQATgUAJgHQAggUAmALQA9ARASBAIAFAZIABABIAAAOIgCAKQgGAbgZAYQgQAPgGAFQghAXghAAQgZAAgZgLgAhdAKQABAVAMAUQAOAXAMAIQAVAOAdABQAuADAjgjQAWgVAFgZQAEgUgIgdQgSg5g2gQQgvgPgjAjQgNAOAAAQQABAQAPAMIAPAKQAbAOAbACIAbACIABgfIgegDQgQgCgRgIQgJgFgDgGQgEgHAGgFQASgPAUAGQAtAOAOAuQAJAcgUAVQgYAcgiACQgYABgSgTQgTgTACgZIgBgDIgdgPQgFAKAAAOgAg0ADQgBAXAOAPQAOARAVABQAVADAXgQQAIgGAEgJQADgHAAgLQAAgLgEgGIgBANIgKAAIgBALQg1AAgmgUg");
	this.shape_19.setTransform(112.9,36.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhHAGIAAgLICPAAIAAALg");
	this.shape_20.setTransform(87.6,32);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABmCAIgCgCIhkg4IAAAWIgSAAIAAALIgBABIgmgCQgjgGgLgfQgCgGAAgMIAAgaQAAgEgEgCIgYgQIAZgdQACgCAAgEIAAhUIATAAIAAgHIDHAAIAACPIgSAAIAAANIgRAAIAAABIAEACIAzAfQAEABgCAFIgNAvIgNgHIgFATgAAJAuIBsA8IABgBIAJgjQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgPgJQg6gigdgLIgCgBIAAgBIBUAAIAAiCIi7AAIAABMQAAADgCACIgWAZIASANIADABQAEADAAAEIgBAcQABAUAKALQAUAXAtgEIAAgsQAFAAAJAFg");
	this.shape_21.setTransform(86.1,36.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhHAGIAAgLICPAAIAAALg");
	this.shape_22.setTransform(87.7,28.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhEAJIAAgRICJAAIAAARg");
	this.shape_23.setTransform(57.5,28.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhEAJIAAgRICJAAIAAARg");
	this.shape_24.setTransform(57.5,23.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ah5BVIAJgDQADAAAAgEIAAi/IAMAAIAAgMIDbAAIAACOIgSAAIAAAOIiWAAIAAAWIAfgLIAPApIgVAHIACAGIhXAegAhbBJIgJAEIALAcIBRgaIgLgdIghAMIAAgyICoAAIAAiDIjOAAg");
	this.shape_25.setTransform(56,31.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhCA6IAWgIIgtiEIAlgLIAsCAQA5glADhTIAmACQgBAegIAhQgbBNhMAbIggALg");
	this.shape_26.setTransform(320.7,34.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAIA9QgFANgKAIQgUAPgYgGQgVgGgEgWQgBgKACgKQABgNAPgGIAWgHIAAgUIgYAAIAAgZIAYAAIAAgZIgYAAIAAgfIAYAAIAAgMIAgAAIAAAMIA9AAIAAAfIg9AAIAAAZIA+AAIAAAZIg+AAIAAAZQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAKAEIAMADQAWAIAaAYIAJAKIgYAYQgogigFgCgAg2A2QABAIAJAAQAHAAAAgHIAAgJIgKAAQgHAAAAAIg");
	this.shape_27.setTransform(344.5,34.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag7BoIgMjOIAmgBIAJCaIAuAAIAAiVIAmAAIAACVIANAAIAAAnIheAAIABAHIAAAHg");
	this.shape_28.setTransform(391.8,34.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGAMIAGgYIAAAAIAHAYg");
	this.shape_29.setTransform(367.4,32.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA0BAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAIhbAAQgFAAgBAEIgKAiIgigMIAKgaIgVAAIAAglIAbAAQADAAACgDIAHgHIglgCIAGgdIAgADQAFACABgFIAMgyIgdgFIAHggQA8APBPgPIAHAcIgdAHIAQA3IAmgFIAAAeIghADIAGAJQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAQgBIAJAgIgSACIAIAeIgfASgAggAXIBBAAIAAgMIg+AAgAgWgHIAxAAIAAgBIgMgwQgBAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgXAAg");
	this.shape_30.setTransform(368.3,34.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhFAgIARgBIAMgDQATgGAEgSQAFgQAAgQIgJACIgFgfIA3gQIAFAiIgNADQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQgBAVADAMQAFARAPAGIAdAIIAAApQgsgFgXgaQgWAegyADg");
	this.shape_31.setTransform(212.3,36.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgKBnQgdgCgUgNQgNgIgOgXQgMgVgBgUQAAgPAGgKIAcAPIABADQgBAaASATQASATAagCQAggBAZgcQAUgWgJgbQgPgvgsgNQgUgGgSAOQgGAGADAGQAEAGAJAFQAQAIAQADIAfACIgCAfIgagBQgcgDgbgNIgPgKQgPgNAAgQQgBgPAOgPQAjgjAvAPQA1ARASA5QAJAbgFAVQgEAZgWAVQghAhgrAAIgGAAg");
	this.shape_32.setTransform(113.5,35.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBA2QgJgGgGAAIAAAsQgsAEgUgWQgKgLgBgUIAAgdQAAgEgEgDIgCgBIgTgNIAXgZQACgCAAgDIAAhMIC7AAIAACDIhUAAIgBAAIADABQAdALA5AiIAPAKQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgKAjIgBACgAhCggICPAAIAAgMIiPAAgAhChFICPAAIAAgMIiPAAg");
	this.shape_33.setTransform(87.1,35.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgUgQIAmgDIADAiIgpAFg");
	this.shape_34.setTransform(299.4,24.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUgQIAmgDIADAiIgpAFg");
	this.shape_35.setTransform(212.1,24.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhrBUIAJgEIAAi/IDOAAIAACCIioAAIAAAyIAhgMIALAdIhRAbgAg8gMICJAAIAAgSIiJAAgAg8g+ICJAAIAAgTIiJAAg");
	this.shape_36.setTransform(56.7,31.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhFAgIARgBIAMgDQATgGAEgSQAEgPACgRIgKACIgFgfIA3gQIAFAiIgMADQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABQAAASACAPQAEARARAGIAcAIIAAApQgtgFgWgaQgVAegzADg");
	this.shape_37.setTransform(299.6,36.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ah1BAQAugSAAhMIgPADIgKggIAegGIABgHIAAgQIAgAAIAAANIA1gRQARgHAGARQAEALABAJQAAARgBAjIgDBBIAdAAQAEAAABgEIAGgXIACgDIAgAHIgEANIgMAnQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIhdgBQALhXAAg3IgyAQQABBqhIAdg");
	this.shape_38.setTransform(236.9,34.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ah1BAQAugSAAhNIgOAEIgKggIAdgHQABgBAAgFIAAgQIAgAAIAAANIA1gRQARgHAGARQAFALAAAJQAAAQgBAjIgDBCIAdAAQAEAAABgEIAIgbIAgAIIgEANIgMAmQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIhdAAQAKhWACg4IgzAPQACBrhJAdg");
	this.shape_39.setTransform(275.9,35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AglBXQgkgOgQgfQgTgkARglQAQgmApgHQAcgFAcAMIABAAIAVAJIgJgdIAlgGIAcBrIgiAAQgDAAgBgDIgIgPQgKgLgGgEQgZgPgXgDQgegEgNAXQgPAZAQAYQANASAdAIQAYAHAagOIAVgLIATAhIgFADQgbARgaAFQgIABgJAAQgUAAgWgJg");
	this.shape_40.setTransform(139.8,34.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA1BAQgCgDgCAAIhbAAQgFAAgBAEIgKAiIgigMIAKgaIgWAAIAAglIAbAAQAEAAACgDIAGgHIgkgCIAFgdIAhADQAEABABgEIANgyIgcgFIAGggQA7APBQgPIAHAcIgdAHIAQA3IAmgFIAAAeIghADIAGAJQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAQgBIAJAgIgSACIAIAeIgfASgAggAXIBBAAIAAgMIg/AAgAgXgHIAyAAIAAgBIgNgwQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgXAAg");
	this.shape_41.setTransform(189.1,34.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGAMIAGgYIAAAAIAHAYg");
	this.shape_42.setTransform(188.3,32.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AANA1IAJAAQAJACAKgJQAIgIABgJIAAgDIAAgcIgEAAIgkAAQgEAAgBACQgJAigQATQgQATgUAMQgNAIgRgBIAAglIACgBQAMABAMgKQAQgOAMgfIAAgBIgqAAIAAgTIA1AAQAEgXgBguIAfAAIACAiQAAAagBAJIBJAAIAAABIgBAzQgBAVgPARQgPARgUAEIgWABg");
	this.shape_43.setTransform(164.6,34.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#96BCBA").s().p("A/rDsQg3AAgngjQgogkAAgxMBDjgFfIAAFfQAAAxgoAkQgnAjg3AAg");
	this.shape_44.setTransform(219.2,38.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#364443").s().p("A/5FGQg+AAgsgsQgsgsAAg+IAAlfQAAg+AsgsQAsgsA+AAMA/zAAAQA/AAArAsQAsAsAAA+IAAFfQAAA+gsAsQgsAsg+AAgEghOgEDQgjAjAAAxIAAFfQAAAxAjAkQAjAjAyAAMA/zAAAQAyAAAjgjQAjgkAAgxIAAlfQAAgxgjgjQgjgkgyAAMg/zAAAQgyAAgjAkg");
	this.shape_45.setTransform(219.2,32.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#ADDFE1").s().p("A/5EoQgyAAgjgjQgjgkAAgxIAAlfQAAgxAjgjQAjgkAyAAMA/zAAAQAyAAAjAkQAjAjAAAxIAAFfQAAAxgjAkQgjAjgyAAg");
	this.shape_46.setTransform(219.2,32.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B7B7B7").s().p("A/5EoQgyAAgjgjQgjgkAAgxIAAlfQAAgxAjgjQAjgkAyAAMA/zAAAQAyAAAjAkQAjAjAAAxIAAFfQAAAxgjAkQgjAjgyAAg");
	this.shape_47.setTransform(226,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_prochainNiveau, rect = new cjs.Rectangle(0,0,442.2,68.2), [rect]);


(lib.btn_prochainePage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiiBzIAbgSIgCgHICDhTIichiIAog+IAGAEIARgbIEGClIgeASIAHAFIkGClgAh5h2ICnBrIinBqIAaAqIDriUIjriUg");
	this.shape.setTransform(246.7,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE7030").s().p("AiCBrICohrIiohqIAagqIDrCUIjrCVg");
	this.shape_1.setTransform(247.6,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBLQgOgFgMgKQgLgKgGgPQgHgPABgUQAAgSAFgPQAGgPALgKQALgKAOgGQAOgFAQAAQANAAAMAEQANADAKAHQAJAHAFAKQAHALgBANQABANgGAIQgEAIgIAGQgJAFgMACQgMADgOAAIgXgCQgLgCgOgFQACATANAJQANAKAXAAIAQgBIAMgDIAJgCIAIgBQAFAAADACQAEADABAGQAAAIgHAFQgGAFgKADQgJADgKABIgRABQgSAAgQgFgAgJgwQgHACgHAEQgGAFgEAHQgFAHgCALQAMAGAMABQALACALAAQASAAAJgEQAJgEAAgMQAAgLgIgIQgJgIgSAAQgIAAgIACg");
	this.shape_2.setTransform(207.8,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQBzIgMgBIgMgDIgKgEIgKgHQgFgDAAgHQAAgGAEgEQACgGAHAAIAGACIAJAFIAOADQAHACALAAQAOAAAKgFQAJgHAHgKQAGgLACgPQAEgPAAgTQgDAKgFAHQgGAHgHAEQgHAEgIACQgJACgIgBQgPABgMgEQgNgEgKgJQgJgJgGgNQgFgMgBgUQABgSAFgPQAGgQAKgKQALgMAOgGQAPgGASgBQAKAAAJACIAOAGIALAHIAJAKQALAOAGAVQAEAUAAAcQABAVgEAWQgDAVgKASQgJASgQALQgRAMgYAAgAghhHQgNAMAAAYQAAAWAMANQALALATAAQALAAAJgEQAJgFAFgGQAGgIACgJQADgJAAgJQAAgIgCgIQgCgIgFgHQgFgGgHgEQgJgEgLAAQgUAAgNANg");
	this.shape_3.setTransform(190.9,27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdBOQgMgEgKgIQgLgJgGgPQgHgPAAgXQAAgQAFgQQAEgPAIgMQAKgMANgGQANgHASAAQAPAAAMAGQANAFAKANIAAgHIACgHQABgEADgCQADgCAFAAQAFAAAEAEQAEAEABAMIABAeIABAaIgBAfIgBAeIgCAMIgDAGIgDACIgEABQgGAAgCgCIgFgEIgCgHIgBgIQgHAJgNAHQgNAGgRAAQgMAAgNgDgAgWguQgHAEgFAHQgFAHgDAJQgCAKAAAKQAAAbAMANQAMANAUAAQAMAAAIgEQAJgEAFgHQAFgHADgKQADgKAAgLQAAgPgFgKQgFgKgHgGQgIgGgIgCQgIgCgGAAQgLAAgJAEg");
	this.shape_4.setTransform(173,23.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhFBwQgFgFAAgMIgBgTIgBgXIgBgZIgBgXQAAgjAFgYQAFgXALgOQAKgOAPgGQAPgFATAAQAQAAAOAFQAOAEAKAKQAKAKAGAQQAHAQAAAXQAAASgHAOQgGAOgLAKQgLAJgPAFQgPAGgRAAQgOAAgMgGQgLgHgFgHIACAhIABAdIAAAMIgCAJQgCAFgDACQgDADgGAAQgHAAgEgFgAgShSQgHAEgFAHQgFAGgDAJQgCAJAAALQAAAKACAJQACAJAFAHQAEAGAIAEQAIAEALAAQAIAAAIgCQAIgDAGgFQAGgFAEgJQAEgKAAgNQAAgPgEgKQgEgJgGgGQgGgGgIgDQgIgCgIAAQgKAAgIADg");
	this.shape_5.setTransform(155.8,27.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXBLQgPgFgLgKQgLgKgGgPQgHgPAAgUQABgSAFgPQAHgPAKgKQALgKAPgGQAOgFAPAAQANAAANAEQAMADAJAHQAKAHAFAKQAHALAAANQAAANgGAIQgEAIgIAGQgJAFgMACQgMADgOAAIgWgCQgMgCgOgFQADATANAJQAMAKAYAAIAPgBIAMgDIAJgCIAJgBQAEAAAEACQADADAAAGQABAIgHAFQgGAFgJADQgJADgKABIgSABQgSAAgQgFgAgJgwQgIACgGAEQgGAFgEAHQgFAHgCALQANAGALABQAKACAMAAQASAAAJgEQAJgEAAgMQAAgLgIgIQgIgIgUAAQgHAAgIACg");
	this.shape_6.setTransform(131.5,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag5BQIgEgBIgDgGIgBgJIgBgPIgBgUIAAgWIAAgUIAAgaIABgSQACgNAEgDQADgEAFAAQAIAAAEAEQADAFABAKQAMgKANgGQANgGANAAQANAAAMAHQAKAFAIAOQAEAJACAKIAEAVIAAAKIAAAJIAAAMIAAARIAAASIgBAPQgCAHgDADQgDADgHAAQgOAAAAgNIAAgIIAAgQIgBgTIAAgQIgBgJIgCgMIgCgMIgCgJQgFgLgGgCQgHgDgIAAQgKAAgJAEQgJADgMAIIAAATIAAAaIgBAdIgBAYIgBAKIgCAGIgEABIgGABg");
	this.shape_7.setTransform(114.8,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAABtQgFAAgDgDQgEgFgBgMIgBgbIgBggIABglIABgZQACgKADgFQADgFAFAAQAFAAAEAEQAEADAAANIADA+IgBAdIgCAdIgBAMIgDAGIgEADgAgMhMQgGgGAAgIQAAgHAGgFQAFgGAHAAQAHAAAGAGQAGAFAAAIQAAAHgGAGQgGAFgHAAQgHAAgFgFg");
	this.shape_8.setTransform(102.6,20.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdBOQgMgEgKgIQgLgJgHgPQgGgPAAgXQAAgQAFgQQAEgPAIgMQAKgMANgGQANgHASAAQAPAAAMAGQANAFAKANIAAgHIACgHQABgEADgCQADgCAFAAQAFAAAEAEQAEAEABAMIABAeIABAaIgBAfIgBAeIgCAMIgDAGIgDACIgEABQgGAAgCgCIgFgEIgCgHIgBgIQgHAJgNAHQgNAGgRAAQgMAAgNgDgAgWguQgHAEgFAHQgFAHgDAJQgCAKAAAKQAAAbAMANQAMANAUAAQAMAAAIgEQAJgEAFgHQAFgHADgKQADgKAAgLQAAgPgFgKQgFgKgHgGQgIgGgIgCQgIgCgGAAQgLAAgJAEg");
	this.shape_9.setTransform(89.8,23.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AApBxQgDgFAAgHIAAgGIgBgPIAAgRIgBgNIgBgLIgBgMIgCgLIgCgJQgFgKgHgDQgGgDgHAAQgLABgJADIgVAIIAAAGIAAAPIAAATIgBAVIAAAUIgBAQIgBALIgCAFIgDACIgEAAIgJAAIgEgCIgDgFIgBgKIgBgPIgBgYIAAgbIAAgdIAAgeIAAgeIABgbIABgRQAAgIACgFQACgHAJABQAGAAAEAEQADAEABAMIABAfIABArIAKgGIAOgGIANgCIANgBQAPgBALAHQALAHAHANQAEAJACAJIADAVIABAJIAAALIABAMIAAAQIgBARIgBAOQgCAGgDADQgDAEgGgBQgIABgEgGg");
	this.shape_10.setTransform(72.8,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AguA8QgWgVAAgmQAAgPAFgPQAFgPALgLQAKgLAPgHQAPgGATAAIASABIARAEQAHADAFAEQAEAEAAAGQAAANgPAAIgHgBIgIgCIgLgCIgQgBQgTAAgLAOQgMAOAAAWQAAAYAMAOQALAPAUAAQANAAAIgCIANgFIAJgFQADgCAEAAQAFAAAEACQADADAAAHQAAAHgGAGQgGAFgIAEQgJAEgKACIgSABQglAAgVgUg");
	this.shape_11.setTransform(56.5,23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBKQgOgHgKgLQgKgLgFgOQgFgPAAgQQAAgRAGgPQAGgOALgLQAKgLAQgFQAPgHARAAQASABAOAFQAOAFAKAKQAJAKAGAOQAFAOAAATQAAASgGAPQgGAPgLAMQgLAKgOAGQgPAHgQgBQgTAAgPgGgAgSguQgJAEgGAGQgGAIgDAJQgDAKAAAKQAAAWAMAOQALAOAWABQANgBAJgEQAJgEAFgIQAGgHADgKQACgJAAgJQAAgLgCgJQgDgJgFgHQgGgHgIgDQgJgEgMgBQgLABgJAEg");
	this.shape_12.setTransform(40,24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoBOQgDgEgBgNIgCgbIAAgkIAAgjIACgYQABgMAEgDQADgFAFAAIAHABIAFADIAEAFIABAKIAAADIAAADIAAADQAJgLAJgHQALgIAOAAQASABAAAPQAAAFgCAEQgDAEgEACIgJAEIgMACQgKACgIAFQgJAGgDAHIAAAJIABAEIAAAFIAAAFIgBAeIgBAeIgCALIgDAHIgFACIgEAAQgJAAgDgDg");
	this.shape_13.setTransform(26.2,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag6BvQgJAAgCgDQgDgEgBgNIgBgUIAAgfIAAgnIgBgtQAAgMADgMQADgLAIgKQAIgKAOgFQAOgGAXAAQAOAAAPADQAOADALAJQALAIAGAOQAHAOAAAVQAAAVgIAPQgHANgNAIQgNAJgSADQgRAEgVAAIgKAAIgMgBIgBA5IgBALIgDAGIgFADgAgWhPQgHACgFAEQgFAEgCAHQgCAHAAALIAAAYIAAAZIAQAAIARAAIASgBQAKgCAIgDQAIgFAFgIQAGgJAAgQQAAgUgMgLQgMgLgaAAQgKAAgHACg");
	this.shape_14.setTransform(11.4,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_prochainePage, rect = new cjs.Rectangle(0,0,263,42.6), [rect]);


(lib.btn_pagePrecedente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiiAMIAegTIgGgEIEFilIAoA+IgbARIADAHIiEBTICcBiIgnA+IgHgCIgRAagAiLAMIDrCUIAbgqIiohqICohqIgbgrg");
	this.shape.setTransform(16.3,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE7030").s().p("AiCAAIDqiUIAbAqIioBqICoBrIgbAqg");
	this.shape_1.setTransform(15.4,22.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBLQgOgFgMgKQgLgKgGgPQgHgPABgUQAAgSAFgPQAHgPAKgKQALgKAPgGQAOgFAPAAQANAAAMAEQANADAKAHQAJAHAFAKQAHALAAANQAAANgGAIQgEAIgIAGQgJAFgMACQgMADgOAAIgXgCQgLgCgOgFQACATANAJQANAKAXAAIAQgBIAMgDIAJgCIAIgBQAEAAAEACQAEADAAAGQABAIgHAFQgGAFgJADQgKADgJABIgSABQgSAAgQgFgAgJgwQgHACgHAEQgGAFgEAHQgFAHgCALQAMAGAMABQALACALAAQASAAAJgEQAJgEAAgMQAAgLgIgIQgJgIgTAAQgHAAgIACg");
	this.shape_2.setTransform(268.9,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKBkQgEgEgBgNIAAguIAAg8IgIAAIgHAAIgKAAIgIgCQgDgCgCgDQgBgCAAgGQgBgPAXAAIAIAAIAJABIAAgaIACgQQACgFADgCQADgCAFAAQADAAADAEQAEADACAGIABALIABANIAAAIIAAAGIAIgBIAJAAQAMAAAGADQAHAEAAAIQAAAFgCADQgDADgEABIgIACIgKABIgHAAIgIgBIAAAdIAAAbIgBAYIgBAbIgBALIgDAHIgEACIgEABQgGAAgEgEg");
	this.shape_3.setTransform(254.5,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag5BQIgEgBIgCgGIgCgJIgBgPIgBgUIAAgWIgBgUIABgaIACgSQACgNACgDQAEgEAFAAQAIAAADAEQAFAFABAKQALgKANgGQANgGAOAAQANAAAKAHQAMAFAGAOQAFAJACAKIADAVIABAKIABAJIAAAMIAAARIAAASIgDAPQAAAHgEADQgEADgFAAQgPAAgBgNIAAgIIAAgQIAAgTIgBgQIAAgJIgBgMIgCgMIgEgJQgEgLgHgCQgGgDgIAAQgKAAgJAEQgJADgLAIIAAATIAAAaIgBAdIgBAYIgCAKIgCAGIgEABIgGABg");
	this.shape_4.setTransform(239.8,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWBLQgPgFgMgKQgLgKgGgPQgHgPAAgUQABgSAFgPQAGgPAMgKQAKgKAPgGQAOgFAPAAQANAAANAEQAMADAJAHQAKAHAGAKQAFALABANQgBANgFAIQgEAIgIAGQgJAFgMACQgMADgPAAIgVgCQgMgCgOgFQADATANAJQANAKAXAAIAPgBIANgDIAIgCIAJgBQADAAAFACQADADAAAGQAAAIgGAFQgGAFgJADQgKADgJABIgSABQgSAAgPgFgAgJgwQgIACgGAEQgGAFgEAHQgFAHgCALQANAGALABQAKACAMAAQASAAAJgEQAJgEAAgMQAAgLgIgIQgIgIgUAAQgHAAgIACg");
	this.shape_5.setTransform(222.8,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcBzQgNgEgMgIQgLgJgHgPQgIgQAAgWQAAgUAGgPQAGgOAKgLQALgKAPgGQAPgFAQAAQAPAAAIADQAJAEAFAFIAAgTIAAgVIABgSIAAgOQABgKADgEQADgDAIgBQAIABADADQADAEAAAJIABALIAAAQIAAAQIAAAOIAAAQIAAA6IgBApIADAHIAEAHIAEAGQACADAAAEQAAAFgCADIgFAFIgHAEIgHAAQgGAAgEgEQgEgGgCgGIgIAHIgLAGIgOAFQgHABgIAAQgLAAgMgDgAgSgIQgIADgHAFQgHAFgEAKQgEAJAAAMQAAAKADAJQADAKAGAHQAGAHAJAFQAJAEAMAAQATAAAKgLQAKgMAAgaQAAgygnAAQgJAAgJADg");
	this.shape_6.setTransform(206,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXBzQgOgFgMgLQgLgKgGgPQgHgOABgUQAAgTAFgPQAHgOAKgKQALgLAPgFQAOgFAPAAQANAAAMADQANAEAKAGQAJAHAFALQAHAJAAAOQAAAMgGAJQgEAJgIAFQgJAFgMADQgMACgOAAIgXgBQgLgCgOgGQACATAOAKQAMAJAXAAIAQgBIAMgCIAJgDIAIgBQAEAAAFADQADACAAAHQABAIgHAEQgGAFgJADQgJADgKABIgSABQgSAAgQgEgAgJgJQgHACgHAFQgGADgEAIQgFAHgCALQAMAFAMACQALACALAAQASAAAJgEQAJgFAAgMQAAgLgIgHQgJgIgTAAQgHAAgIACgAgbhCQgDgCAAgFQAAgDAFgFIAKgKIANgKIAPgJIAOgGIALgCQAFAAAEADQAEADgBAGQAAAEgDAEIgLAJIgPAJIgQAIIgNAGIgNACg");
	this.shape_7.setTransform(188.8,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AguA8QgWgVAAgmQAAgPAFgPQAFgPALgLQAKgLAPgHQAPgGATAAIASABIARAEQAHADAFAEQAEAEAAAGQAAANgPAAIgHgBIgIgCIgLgCIgQgBQgTAAgLAOQgMAOAAAWQAAAYAMAOQALAPAUAAQANAAAIgCIANgFIAJgFQADgCAEAAQAFAAAEACQADADAAAHQAAAHgGAGQgGAFgIAEQgJAEgKACIgSABQglAAgVgUg");
	this.shape_8.setTransform(172.9,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXBzQgOgFgMgLQgLgKgGgPQgHgOABgUQAAgTAFgPQAHgOAKgKQALgLAPgFQAOgFAPAAQANAAAMADQANAEAKAGQAJAHAFALQAHAJAAAOQAAAMgGAJQgEAJgIAFQgJAFgMADQgMACgOAAIgXgBQgLgCgOgGQACATANAKQANAJAXAAIAQgBIAMgCIAJgDIAIgBQAEAAAEADQAEACAAAHQABAIgHAEQgGAFgJADQgKADgJABIgSABQgSAAgQgEgAgJgJQgHACgHAFQgGADgEAIQgFAHgCALQAMAFAMACQALACALAAQASAAAJgEQAJgFAAgMQAAgLgIgHQgJgIgTAAQgHAAgIACgAgbhCQgDgCAAgFQAAgDAFgFIAKgKIANgKIAPgJIAOgGIALgCQAFAAAEADQAEADgBAGQAAAEgDAEIgLAJIgPAJIgQAIIgNAGIgNACg");
	this.shape_9.setTransform(156.8,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgoBOQgDgEgBgNIgCgbIAAgkIAAgjIACgYQABgMAEgDQADgFAFAAIAHABIAFADIAEAFIABAKIAAADIAAADIAAADQAJgLAJgHQALgIAOAAQASABAAAPQAAAFgCAEQgDAEgEACIgJAEIgMACQgKACgIAFQgJAGgDAHIAAAJIABAEIAAAFIAAAFIgBAeIgBAeIgCALIgDAHIgFACIgEAAQgJAAgDgDg");
	this.shape_10.setTransform(143.5,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhFBwQgFgFAAgMIgBgTIgBgXIgBgZIgBgXQAAgjAFgYQAFgXALgOQAKgOAPgGQAPgFATAAQAQAAAOAFQAOAEAKAKQAKAKAGAQQAHAQAAAXQAAASgHAOQgGAOgLAKQgLAJgPAFQgPAGgRAAQgOAAgMgGQgLgHgFgHIACAhIABAdIAAAMIgCAJQgCAFgDACQgDADgGAAQgHAAgEgFgAgShSQgHAEgFAHQgFAGgDAJQgCAJAAALQAAAKACAJQACAJAFAHQAEAGAIAEQAIAEALAAQAIAAAIgCQAIgDAGgFQAGgFAEgJQAEgKAAgNQAAgPgEgKQgEgJgGgGQgGgGgIgDQgIgCgIAAQgKAAgIADg");
	this.shape_11.setTransform(128.2,27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXBLQgOgFgMgKQgLgKgGgPQgGgPAAgUQAAgSAFgPQAHgPAKgKQALgKAOgGQAOgFARAAQAMAAAMAEQANADAKAHQAJAHAFAKQAHALgBANQAAANgEAIQgFAIgJAGQgIAFgMACQgMADgOAAIgXgCQgLgCgOgFQACATANAJQAOAKAWAAIAQgBIAMgDIAJgCIAIgBQAFAAADACQAFADAAAGQAAAIgHAFQgGAFgKADQgIADgLABIgSABQgRAAgQgFgAgJgwQgIACgGAEQgGAFgFAHQgEAHgCALQAMAGAMABQALACALAAQASAAAJgEQAJgEAAgMQAAgLgIgIQgIgIgTAAQgIAAgIACg");
	this.shape_12.setTransform(103.9,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQBzIgMgBIgMgDIgKgEIgKgHQgEgDgBgHQABgGADgEQACgGAHAAIAHACIAJAFIAMADQAIACALAAQAOAAAKgFQAKgHAGgKQAGgLADgPQADgPAAgTQgEAKgEAHQgGAHgHAEQgHAEgIACQgJACgIgBQgPABgMgEQgNgEgKgJQgJgJgGgNQgFgMgBgUQABgSAFgPQAGgQAKgKQALgMAOgGQAPgGASgBQALAAAHACIAPAGIALAHIAJAKQALAOAGAVQAEAUAAAcQABAVgEAWQgEAVgIASQgKASgQALQgRAMgYAAgAghhHQgMAMAAAYQgBAWAMANQALALATAAQALAAAJgEQAJgFAFgGQAFgIADgJQADgJAAgJQAAgIgCgIQgCgIgFgHQgFgGgHgEQgJgEgLAAQgUAAgNANg");
	this.shape_13.setTransform(87.1,27.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdBOQgMgEgKgIQgLgJgHgPQgGgPAAgXQAAgQAFgQQAEgPAIgMQAJgMAOgGQANgHASAAQAPAAAMAGQANAFAKANIAAgHIABgHQACgEADgCQADgCAGAAQAEAAAFAEQADAEABAMIABAeIABAaIgBAfIgBAeIgCAMIgCAGIgEACIgEABQgGAAgCgCIgFgEIgCgHIgBgIQgHAJgNAHQgNAGgRAAQgMAAgNgDgAgWguQgHAEgFAHQgFAHgDAJQgCAKAAAKQAAAbAMANQAMANAUAAQAMAAAIgEQAJgEAFgHQAGgHACgKQADgKAAgLQAAgPgFgKQgFgKgHgGQgIgGgIgCQgIgCgGAAQgLAAgJAEg");
	this.shape_14.setTransform(69.2,23.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag6BvQgJAAgCgDQgDgEgBgNIgBgUIAAgfIAAgnIgBgtQAAgMADgMQADgLAIgKQAIgKAOgFQAOgGAXAAQAOAAAPADQAOADALAJQALAIAGAOQAHAOAAAVQAAAVgIAPQgHANgNAIQgNAJgSADQgRAEgVAAIgKAAIgMgBIgBA5IgBALIgDAGIgFADgAgWhPQgHACgFAEQgFAEgCAHQgCAHAAALIAAAYIAAAZIAQAAIARAAIASgBQAKgCAIgDQAIgFAFgIQAGgJAAgQQAAgUgMgLQgMgLgaAAQgKAAgHACg");
	this.shape_15.setTransform(52.5,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_pagePrecedente, rect = new cjs.Rectangle(0,0,289.1,42.6), [rect]);


(lib.btn_debuter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#364443").s().p("ABrCGIgDgCIhog6IAAAXIgTAAIAAAMIgBAAIgpgBQgkgIgLggQgCgGgBgNIAAgbQAAgDgDgDIgagRIAageQADgDAAgDIAAhZIATAAIABgHIDRAAIAACWIgUAAIAAANIgRAAIgBABIA6AiQAEACgBAFIgOAxIgOgHIgGAUgAAJAwIBxA/IABgBIAKglQABgBgBAAQAAAAAAgBQAAAAgBgBQAAAAgBAAIgPgLQhAglgbgKIgCgBIAAAAIBYAAIAAiJIjEAAIAABPQAAADgCADIgYAaIAWAPQAEADAAAEIAAAeQABAVAKAMQAWAYAugFIAAguIABAAQAFAAAJAFgAg7gpIAAgNICWAAIAAANgAg6hQIAAgOICWAAIAAAOg");
	this.shape.setTransform(245.8,35.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#364443").s().p("AAGBPIAAAAIAAAAIgIAIQgLAPgTAFQgUAFgRgHQgWgJgDgbQgCgKADgLQABgHAGgIQAFgGALgJIANgJIgXAAIAAgmIANAAIAAgOIgNAAIAAguIANAAIAAgNIANAAIABgHIAMAAIAAgGIAtAAIAAANIBCAAIAAAuIgNAAIAAANIANAAIAAAnIgNAAIAAANIg0AAQgCADAEABQAXAIAOAGQAMAFAcAZIAMANIgxAuIgpglgAA8BfIAZgaIgJgKQgcgagXgHIgYgIQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgaIBAAAIAAgbIhAAAIAAgaIBAAAIAAghIhAAAIAAgNIghAAIAAANIgaAAIAAAhIAZAAIAAAbIgZAAIAAAaIAZAAIAAAVIgDAAIgUAHQgPAGgCAOQgCALACAJQADAYAWAGQAaAGAVgPQAKgIAFgOQAEABAsAlgAg0AyQgBgIAIgBIAKAAIAAAKQAAAHgHAAQgKAAAAgIg");
	this.shape_1.setTransform(218.8,34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#364443").s().p("AgJCUIgLgDQgOgIgKgSQgPgbAAgjIAAgeIg3AAIAAhOIAHAAIABgBIgDgCIgFAAIAAgeIAIAAIAAgQIBBAAIABgfIAHABIABgRIABAAIAvAMIgCAjIAoAAIACAgIgJAAIAAABIAHAAIABAoIgHAAQgDAFAFgBIAJAAIAAAjIgGAAIAAAPIg1AAIAAAQQAAAKADAOQACAGABAAQADABAEgCQAPgFAUgOIAkgdIAfApIgKALIACAFIgDAEQgrAtgrAOIgRAEgAhlAFIA6AAIgBADQgGAiAIAeQAGAbAOAPQANAOAQgCQAPgCANgGQAegNAggeIALgKIgZggIgGAFQgbAXgaAOIgOAEQgIADgCgIIgDgLQgEgRACgiIAAgHIA7AAIAAgWIgyAAQgFAAAAgEIAAgMIAxAAIgBgbIgFAAIghADQgGAAAAgFIABgKIAtgCIgBgQQAAgEgEAAIgkABIACghQAAgEgEgBIgggIIgDApQgBAFgDAAIhEAAIAAASIBFAAIgBAIQgBAEgBACQgBABgFAAIg8AAIAAAdIA+AAIAAAKQgBAEgFAAIg4AAg");
	this.shape_2.setTransform(194.8,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#364443").s().p("AhMB6IgOjaIgBgEIAAgHIATAAIAAgMIA1gCIAKCjIAQAAIAAiQIATAAIAAgNIA1AAIAACdIANAAIAAA0IgNAAIAAANIhPAAIgXAEIAAALgAgLBnIgBgPIBiAAIAAgoIgOAAIAAidIgnAAIAACdIgwAAIgKiiIgoABIANDYIApAAg");
	this.shape_3.setTransform(170.7,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#364443").s().p("AhfB+IgHgBQgGAAgDgDQgCgDgBgGIgEgvIAUAAIgBgMIAIABQAFAAAAgFIgHijIATAAIAAgNIA3AAIAFAaIB/AAIgFBGIALgCIAACBIgNAAIAAANIiaAAQgFAAgDACQgUAPgSAAIgBgBgAg+AuQgBAHgHAEQgFACgDAAIgOACIADAjQABAIACABQACACAIAAIAFAAQASgDAOgMQACgCAEAAICRAAIAAhyIgLADIAFhIIh+AAIgEgbIgrAAgAgSAsIAAgnIBbAAIAAAngAgSg8IBOAAIAAAbIhOACgAgMgnIABABIAAAAIAtgBIgBgBIgqgBg");
	this.shape_4.setTransform(147.1,33.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#364443").s().p("AAABpIgHAJQgMAPgTAEQgUAGgQgHQgWgKgEgaQgCgKADgMQABgHAGgHQAGgIAKgIIANgJIgXAAIAAgmIANAAIAAgOIgNAAIAAgtIANAAIAAgOIANAAIABgGIAMAAIAAgHIAuAAIAAANIBBAAIAAAuIgNAAIAAANIANAAIAAAmIgNAAIAAAOIgzAAQgCAEAEAAIAkAPQAMAEAcAZIAMANIgwAvgAA2B5IAagZIgKgLQgcgZgXgIIgXgHQgBgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgaIBBAAIAAgaIhBAAIAAgbIBAAAIAAghIhAAAIAAgMIghAAIAAAMIgaAAIAAAiIAaAAIAAAaIgaAAIAAAaIAaAAIAAAVIgEAAIgUAHQgPAGgCAOQgCAMACAIQAEAYAVAHQAaAFAVgPQAKgHAFgPQAEABAsAlgAg6BMQAAgHAHgCIALAAIAAAKQgBAHgHAAQgKAAAAgIgAAFhXIAAgBIAkgrIABgBQADAAACgCIACgCIABgDQADgDADAAIAuABIg7A0IgFACgAA1iGIgSAWIgKAMIAXAAIADgCIAmgiIgfAAQgDAAgCACg");
	this.shape_5.setTransform(122.4,31.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#364443").s().p("AhyBHIALgDQAFgBgCgEIAAgFIAPgFQA+gTAkgTIAUgMQAKgFgDgNQgBgKgMgHQgMgIgYgGIgRgCIAABEIgIACQgGABABAFIAAAGIg1ALIAAheIgSACIgCg8IAOAAIAAgNIAGgBIABgGIAMAAIAAgMIA1AAIAAATIAMABQArADAXAHQAgALARAXQAUAbgJAlQgHAZgYAZIgRASQgNAOgdAPQgxAZhLAcIgCABgAAOg/QAZAGALALQAJAIACALQABAOgJAJQgPAMgKAGQgdAShAAWIgcAJIAIA3IABgBQBMgdAogVQAdgPAOgPQAWgZAGgRQANgmgUgcQgNgTgagKQgXgJgogDIgbgCIAAgTIgnAAIAAATIgUAAIABAuIATgBIAABdIAogJIAAhUQAcABASAFg");
	this.shape_6.setTransform(97.1,30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8FCFF").s().p("AgBA4QgLgFgFAAIAAAuQguAFgWgYQgKgMgBgVIAAgeQAAgEgEgDIgWgPIAYgaQACgDAAgDIAAhPIDEAAIAACJIhYAAIAAAAIACABQAbAKBAAlIAPALQABAAABAAQAAABAAAAQAAABABAAQAAAAgBABIgKAlIgBABgAhGghICWAAIAAgNIiWAAgAhFhIICWAAIAAgOIiWAAg");
	this.shape_7.setTransform(246.9,34.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8FCFF").s().p("AAIBAQgFAPgKAHQgVAQgagGQgWgGgDgYQgCgJACgLQACgPAPgGIAUgGIADgBIAAgUIgZAAIAAgbIAZAAIAAgaIgZAAIAAghIAaAAIAAgNIAhAAIAAANIBAAAIAAAgIhAAAIAAAbIBAAAIAAAbIhAAAIAAAZQAAABAAAAQAAABAAAAQABAAAAAAQABABABAAIAXAHQAXAIAcAZIAJALIgZAZQgsgkgEgCgAg4A5QAAAIAKAAQAHAAAAgHIAAgJIgKAAQgIABABAHg");
	this.shape_8.setTransform(219.2,33.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8FCFF").s().p("AhkBHIAcgJQBAgWAdgSQAKgGAPgNQAJgIgBgNQgCgLgJgJQgLgLgZgGQgSgFgcgBIAABUIgoAJIAAhcIgTABIgBgvIAUAAIAAgTIAnAAIAAAUIAbABQAoADAXAJQAaALANASQAUAdgNAkQgGATgWAYQgOAPgdAPQgoAVhMAeIgBAAg");
	this.shape_9.setTransform(97.8,29.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8FCFF").s().p("AgWABIAAAAIACgCIAqABIACAAIguACg");
	this.shape_10.setTransform(148.2,29.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8FCFF").s().p("AgfASIAKgLIASgWQACgCACAAIAfAAIgmAhIgDACg");
	this.shape_11.setTransform(128.2,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8FCFF").s().p("AAIBAQgGAPgJAHQgVAQgagGQgVgGgFgYQgBgJABgLQADgPAPgGIAUgGIADgBIAAgUIgaAAIAAgbIAaAAIAAgaIgaAAIAAghIAaAAIAAgNIAhAAIAAANIBBAAIAAAgIhAAAIAAAbIBAAAIAAAbIhBAAIABAZQAAABAAAAQAAABAAAAQABAAAAAAQABABAAAAIAXAHQAYAIAbAZIAKALIgaAZQgrgkgEgCgAg5A5QABAIAKAAQAGAAABgHIAAgJIgKAAQgIABAAAHg");
	this.shape_12.setTransform(122.3,33.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8FCFF").s().p("Ag9BtIgOjYIApgBIAKCiIAvAAIAAidIAoAAIAACdIANAAIAAAoIhiAAIABAPg");
	this.shape_13.setTransform(171.6,33.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8FCFF").s().p("AgZB5QgOgPgGgbQgIgeAGgiIABgDIg6AAIAAgWIA4AAQAFAAABgEIAAgKIg+AAIAAgdIA8AAQAFAAABgBQABgCABgEIABgIIhFAAIAAgSIBEAAQADAAABgFIADgpIAgAIQAEABAAAEIgCAhIAkgBQAEAAAAAEIABAQIgtACIgBAKQAAAFAGAAIAhgDIAFAAIABAbIgxAAIAAAMQAAAEAFAAIAyAAIAAAWIg7AAIAAAHQgCAiAEARIAEALQACAIAHgDIAOgEQAagOAbgXIAGgFIAZAgIgLAKQggAegeANQgNAGgPACIgEAAQgOAAgLgMg");
	this.shape_14.setTransform(195.1,31.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8FCFF").s().p("AgdAKIAAgTIA7AAIAAATg");
	this.shape_15.setTransform(148.8,36.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8FCFF").s().p("AhWByQgIAAgCgCQgBgBgCgJIgDgiIAPgCQACAAAFgCQAIgEAAgHIgFimIArAAIAFAaIB+AAIgFBJIALgDIAAByIiRAAQgEAAgDACQgOAMgSADgAgbAyIBbAAIAAgnIhbAAgAgbgZIBNgBIAAgbIhNAAg");
	this.shape_16.setTransform(148,32.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#96BCBA").s().p("A4iDsQgrAAgegjQgfgkAAgxMA0VgFfIAAFfQAAAxgfAkQgeAjgrAAg");
	this.shape_17.setTransform(170.5,38.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#364443").s().p("A4SFGQg+AAgsgsQgsgsAAg+IAAlfQAAg+AsgsQAsgsA+AAMAwlAAAQA+AAAsAsQAsAsAAA+IAAFfQAAA+gsAsQgsAsg+AAgA5nkDQgjAjAAAxIAAFfQAAAxAjAkQAjAjAyAAMAwlAAAQAxAAAkgjQAjgkAAgxIAAlfQAAgxgjgjQgkgkgxAAMgwlAAAQgyAAgjAkg");
	this.shape_18.setTransform(170.5,32.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ADDFE1").s().p("A4SEoQgyAAgjgjQgjgkAAgxIAAlfQAAgxAjgjQAjgkAyAAMAwlAAAQAxAAAkAkQAjAjAAAxIAAFfQAAAxgjAkQgkAjgxAAg");
	this.shape_19.setTransform(170.5,32.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B7B7B7").s().p("A48EoQgxAAgjgjQgjgkAAgxIAAlfQAAgxAjgjQAjgkAxAAMAx5AAAQAxAAAjAkQAjAjAAAxIAAFfQAAAxgjAkQgjAjgxAAg");
	this.shape_20.setTransform(172.1,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_debuter, rect = new cjs.Rectangle(0,0,343.8,68.2), [rect]);


(lib.mcdecorsmobileClipChaise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chaise
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#705651").s().p("AhYBaQgmgmAAg0QAAgzAmgmQAlglAzAAQA0AAAmAlQAlAmAAAzQAAA0glAmQgmAlg0AAQgzAAglglg");
	this.shape.setTransform(-65.5,-86.4,1.001,1.001);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#705651").s().p("AhYBaQgmgmAAg0QAAgzAmgmQAlglAzAAQA0AAAmAlQAlAmAAAzQAAA0glAmQgmAlg0AAQgzAAglglg");
	this.shape_1.setTransform(-252.7,-86.4,1.001,1.001);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4B0A9").s().p("A2WIcQg6AAgpgpQgpgpAAg6IAAsfQAAg6ApgpQApgpA6AAMAstAAAQA6AAApApQApApAAA6IAAMfQAAA6gpApQgpApg6AAgA3qnkQgkAjAAAyIAAMfQAAAyAkAjQAiAjAyAAMAstAAAQAxAAAkgjQAjgjAAgyIAAsfQAAgygjgjQgkgjgxAAMgstAAAQgyAAgiAjg");
	this.shape_2.setTransform(-156.7,-86.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D8C9BF").s().p("A2WIIQgyAAgigjQgkgjAAgyIAAsfQAAgyAkgjQAigjAyAAMAstAAAQAxAAAkAjQAjAjAAAyIAAMfQAAAygjAjQgkAjgxAAg");
	this.shape_3.setTransform(-156.7,-86.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#705651").s().p("AhNFUIAAqnICbAAIAAKng");
	this.shape_4.setTransform(-57.6,-33.6,1.001,1.001);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#705651").s().p("AhNFUIAAqnICbAAIAAKng");
	this.shape_5.setTransform(-253.6,-33.6,1.001,1.001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcdecorsmobileClipChaise, rect = new cjs.Rectangle(-313.8,-140.8,314.2,141.3), [rect]);


(lib.mcdecorsmobileClipBocal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{niveau1:0,niveau2:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// bocal
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AABDC9").s().p("AhsVbQiWAAhcgIQiKgMhfghQjwhTjJiZQjHiZiRjSQiRjShMj5QhLj4AAkKQAAjkA9jaQA8jaB1jCQg3gTgYgUQgZgUgJgcQgJgdAIgfQALgtAhgaQAtgjBPAAQAnAABCAKIAgAFQAlgCA4AAQCCAAE6APQDUALB9AEQDGAICjAAQCnAACzgIQBpgFDIgMQC0gLBjgFQCbgGCMAAIAZgDQBGgHArAAQCpAAAaBeQAPA6gZApQgSAegmAQQgYAKgqAJQB2DCA8DaQA9DbAADkQAAEOhOD7QhND7iVDUQiVDVjNCYQjNCYj1BQQhSAbhxALQhTAHh+AAgA3eziQgOA7BNAfIAyATQAWALgHAKQh5C/g/DZQhCDfAADrQAAITEhGjQEfGiHeCmQBbAgCDALQBcAJCUAAIEFAAQB7AABRgHQBtgKBOgaQHoigEomlQEpmoAAoaQAAjthDjhQhAjah7jAQgIgNAZgHIA9gOQBcgYgWhSQgShBiKAAQglAAgxAFIg0AEQjOABmAAXQl+AYj9gBQjxAAmHgSQmIgTh2AAQg2AAgmACIgBAAQgHAAgwgIQgxgHghAAQhvAAgTBLg");
	this.shape.setTransform(-166.5,-184.8,1.001,1.001);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FDF9F6").ss(5).p("AZZj+QAAIbkpGnQkoGmnoCgQhnAhiiAHQgkACjzAAQjeAAhGgEQipgKhtglQneimkfmiQkhmkAAoTQAAjrBCjfQA/jZB5i/QAHgKgWgKQgfgMgTgHQhNggAOg7QAThLBwAAQA6ABBPAOQCHgFGOATQHHAWD2AAQD9AAF+gYQGAgXDOAAQABAAA3gGQA2gFAnABQCAADARA+QAWBShcAZQgtAJgQAEQgZAHAIANQB7DABADaQBDDhAADtg");
	this.shape_1.setTransform(-166.5,-184.8,1.001,1.001);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9DC6C5").s().p("AhtEDQFqnyEIqjQBHgRA7geQBJgmBAhCQBnCPAPD4QAPDwhFEPQhHEXiMDpQiWD9jHCOQifB5h0A/Qh4BCh9AdQhzAcioAJQhyAFkTABQHAlIFbnfg");
	this.shape_2.setTransform(-91.3,-157.3,1.001,1.001);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADDFE1").s().p("AkkQhQipgJhtgmQneimkfmiQkhmjAAoUQAAkUBbkDIBCAVQBUAYBYAVQEaBBDWAAQBxAAB9gUQA2gJCsgkQE3hCEJAAQDTAAEZBTIC+A4QBdAaAyAAQEQAAB9hSQA/gpAIgqQBbEDAAEUQAAIbkpGnQkoGmnoCgQhnAiiiAGQgkACjzAAQjeAAhGgEg");
	this.shape_3.setTransform(-166.5,-156.7,1.001,1.001);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FDF9F6").ss(7).p("AZZj+QAAIbkpGnQkoGmnoCgQhnAhiiAHQgkACjzAAQjeAAhGgEQipgKhtglQneimkfmiQkhmkAAoTQAAjrBCjfQA/jZB5i/QAHgKgWgKQgfgMgTgHQhNggAOg7QAThLBwAAQA6ABBPAOQCHgFGOATQHHAWD2AAQD9AAF+gYQGAgXDOAAQABAAA3gGQA2gFAnABQCAADARA+QAWBShcAZQgtAJgQAEQgZAHAIANQB7DABADaQBDDhAADtg");
	this.shape_4.setTransform(-166.5,-184.8,1.001,1.001);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DEF4FC").s().p("AkkUwQipgKhtglQneimkfmiQkhmkAAoTQAAjrBCjfQA/jZB5i/QAHgKgWgKIgygTQhNggAOg7QAThLBwAAQA6ABBPAOQCHgFGOATQHHAWD2AAQD9AAF+gYQGAgXDOAAIA4gGQA2gFAnABQCAADARA+QAWBShcAZIg9ANQgZAHAIANQB7DABADaQBDDhAADtQAAIbkpGnQkoGmnoCgQhnAhiiAHQgkACjzAAQjeAAhGgEg");
	this.shape_5.setTransform(-166.5,-184.8,1.001,1.001);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8D8CF").s().p("Aw/TbMgAtgmpMAikgAMIAyKxQAQBKgxB+QgwB8h9DTQidEIqcPlg");
	this.shape_6.setTransform(-121.7,-124.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A57351").s().p("Aw/TbMgAtgmpMAijgAMIAyKxQAQBKgwB+QgwB8h9DTQidEIqdPlg");
	this.shape_7.setTransform(-121.7,-124.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{y:-157.3}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{y:-157.2}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-335.7,-326,335.9,326);
p.frameBounds = [rect, new cjs.Rectangle(-335.7,-325.9,335.9,326)];


(lib.mcdecorsfixeClipTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"niveau1":0,"niveau2":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// table
	this.instance = new lib.table_niveau1();
	this.instance.parent = this;
	this.instance.setTransform(-1,0,0.501,0.501);

	this.instance_1 = new lib.table_niveau2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,0,0.501,0.501);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,0,802.1,370.7);
p.frameBounds = [rect, rect];


(lib.mcdecorsdefilantClipFond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"niveau1":0,"niveau2":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// fond_defilant
	this.instance = new lib.fond_defilant_niveau1();
	this.instance.parent = this;
	this.instance.setTransform(-2,0,0.501,0.501);

	this.instance_1 = new lib.fond_defilant_niveau2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1,0.501,0.501);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2,0,2171.8,236);
p.frameBounds = [rect, new cjs.Rectangle(0,-1,2167,235.8)];


(lib.vie_pleine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC4E39").s().p("AheCOQgwgcgfgqIidBtQgFAEgGAAQgGAAgEgCQgKgGAAgMIAAlJQAAgLAJgGQAGgDAFAAQAGAAADADICgBVQAhggAwgWQBJgiBaAAQBUAABDAXQBCAWAlApQApAtgGA3QgJBWhMAwQhNAxh/AAQheAAhIgrgAibA/QASAWAYATQBMA9BtAAQB9AABHgwQBCgrAHhKQAHhFhLgvQhNgwh8AAQhoAAhOAuQgZAPgTARIgOAOIithcIAAFJICth5g");
	this.shape.setTransform(-1.6,-3.1,0.901,0.901);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE7030").s().p("AhxBoQgYgTgSgWIgNgTIitB5IAAlJICtBcIAOgOQATgRAZgPQBOguBoAAQB8AABNAwQBLAvgHBFQgHBKhCArQhHAwh9AAQhtAAhMg9g");
	this.shape_1.setTransform(-1.6,-3.1,0.901,0.901);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ah8B7QgbgXgTgbIgPgVIi+CNIAAmBIC+BsIAQgRQAVgUAbgRQBXg2BxAAQCJAABUA4QBUA3gIBRQgJBXhHAyQhPA4iKAAQh3AAhUhGg");
	this.shape_2.setTransform(-3.4,-0.6,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.3,-19.7,68.4,36.6);
p.frameBounds = [rect];


(lib.vie_perdue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAgwIAABh");
	this.shape.setTransform(11.9,-2.7,0.878,0.878);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAhbIAAC3");
	this.shape_1.setTransform(6.3,-3.6,0.878,0.878);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAiIIAAER");
	this.shape_2.setTransform(1.1,-2.7,0.878,0.878);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAEhbQgJAUAEBTQABAqAEAm");
	this.shape_3.setTransform(-4.9,-3.6,0.878,0.878);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAgwIAABh");
	this.shape_4.setTransform(-11,-2.7,0.878,0.878);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,1,1).p("AC8AEIl3gH");
	this.shape_5.setTransform(-0.3,-2.5,0.878,0.878);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1,1).p("ABXg3IAABZIitBeIAAkAg");
	this.shape_6.setTransform(-24.3,-2,0.878,0.878);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhDibIAAE3IAVgLQAZgOAVgRQBBg3AChDQAChEhEguQgVgPgZgKg");
	this.shape_7.setTransform(22.1,-2.1,0.878,0.878);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(8,1,1).p("AAAgwIAABh");
	this.shape_8.setTransform(11.9,-1.8,0.878,0.878);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#999999").ss(8,1,1).p("AAAhbIAAC3");
	this.shape_9.setTransform(6.3,-2.8,0.878,0.878);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(8,1,1).p("AAAiIIAAER");
	this.shape_10.setTransform(1.1,-1.9,0.878,0.878);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#999999").ss(8,1,1).p("AAEhbQgJAUAEBTQABAqAEAm");
	this.shape_11.setTransform(-4.9,-2.8,0.878,0.878);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(8,1,1).p("AAAgwIAABh");
	this.shape_12.setTransform(-11,-1.8,0.878,0.878);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#999999").ss(8,1,1).p("AC8AEIl3gH");
	this.shape_13.setTransform(-0.3,-1.6,0.878,0.878);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#999999").ss(8,1,1).p("ABXg3IAABZIitBeIAAkAg");
	this.shape_14.setTransform(-24.3,-1.1,0.878,0.878);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#999999").ss(8,1,1).p("AhDibIAAE3IAVgLQAZgOAVgRQBBg3AChDQAChEhEguQgVgPgZgKg");
	this.shape_15.setTransform(22.1,-1.2,0.878,0.878);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.9,-18.8,68,35.4);
p.frameBounds = [rect];


(lib.progression_niveau_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99544F").ss(2,0,1).p("ACkhpIAADTIlHhqg");
	this.shape.setTransform(255.7,-25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED5E4A").s().p("AijAAIFHhpIAADTg");
	this.shape_1.setTransform(255.7,-25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AABDC9").s().p("AgQD1Qg2AAgegKQhWgegzhLQg0hKAAheQAAhAAbg6QgMgSAFgXQAFgRANgLQAQgOAZAAIAVACIABABIANgBQAZAAAtADQBLADAeAAQAnAAA7gEQBBgDAYAAIAWgCQAfAAARAQQALAKAEAOQAGAYgLASIgDAEQAaA5AAA/QAABeg2BMQg1BMhXAcQgaAJguAAgAjmi/QgCAJAMAFQALAEgBACQgnA8AABJQAABRAtBAQAsBABJAaQAWAIAxAAIAoAAQAmAAAWgHQBLgYAthBQAuhBAAhSQAAhIgng+QgBgCANgDQAOgEgEgNQgCgKgWAAIgVACQggAAg6AEQg7ADgnAAQgkAAg8gDIhPgDIgOABQgMgDgJAAQgRAAgDAMg");
	this.shape_2.setTransform(272.3,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FDF9F6").ss(5).p("AD6gmQAABSguBBQgtBBhLAYQgQAFgZACQgGAAglAAQhAAAgXgIQhJgagshAQgthAAAhRQAAhJAng8QABgCgLgEQgMgFACgJQADgMARAAQAJAAAMADQAVgBA9ADQBHADAkAAQAnAAA7gDQA6gEAgAAQADAAAUgCQAUABACAJQAEANgOAEQgNADABACQAnA+AABIg");
	this.shape_3.setTransform(272.3,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9DC6C5").s().p("ABChpQATgDAPgOQAcAigUBGQgUBHgzAhQglAagdAHQgWAEhAAAQBzhMBCiYg");
	this.shape_4.setTransform(283.9,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ADDFE1").s().p("AgnCFQgYgBgPgFQhDgVgog0Qgog1AAhCQAAgiANghIAhAIQAoAIAdAAQAWAAArgIQAqgIAlAAQAdAAAnAKQAnALAHAAQAmAAARgLQAJgFABgFQAMAfAAAkQABBDgpA1QgpA1hFAUQgOAEgXABIgmAAIgnAAg");
	this.shape_5.setTransform(272.3,19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FDF9F6").ss(7).p("AD6gmQAABSguBBQgtBBhLAYQgQAFgZACQgGAAglAAQhAAAgXgIQhJgagshAQgthAAAhRQAAhJAng8QABgCgLgEQgMgFACgJQADgMARAAQAJAAAMADQAVgBA9ADQBHADAkAAQAnAAA7gDQA6gEAgAAQADAAAUgCQAUABACAJQAEANgOAEQgNADABACQAnA+AABIg");
	this.shape_6.setTransform(272.3,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEF4FC").s().p("AAADNQhAAAgXgIQhJgagshAQgthAAAhRQAAhJAng8QABgCgLgEQgMgFACgJQADgMARAAQAJAAAMADQAVgBA9ADQBHADAkAAQAnAAA7gDQA6gEAgAAIAXgCQAUABACAJQAEANgOAEQgNADABACQAnA+AABIQAABSguBBQgtBBhLAYQgQAFgZACIgrAAg");
	this.shape_7.setTransform(272.3,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AABDC9").s().p("AgQD0Qg3AAgdgKQhWgegzhKQg0hKAAheQAAhCAcg5QgNgSAFgWQAFgRANgLQAQgOAZAAQALAAAKACIAPAAQAZAAAsADQBBADAoAAQAdAABFgEQAwgDApAAIABgBIAVgBQAfAAASAQQALAKADAOQAGAWgLAUIgDAEQAZA4AABAQAABeg1BMQg1BMhXAcQgcAJgsAAgAjmi/QgCAJAMAFQALAEgBACQgnA8AABJQABBQAsBBQAsBABJAaQAXAHAwAAIAoABQAnAAAUgHQBMgZAthAQAuhBAAhSQgBhKgmg8QgCgCAOgDQAOgEgEgNQgCgKgWAAIgVACQggAAg6ADQg7AEgnAAQgkAAg9gDIhNgDIgPAAQgMgCgJAAQgRAAgDAMg");
	this.shape_8.setTransform(29,11.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FDF9F6").ss(5).p("AD6gmQAABSguBBQguBBhLAYQgPAFgZACQgGAAglAAQhAAAgXgIQhJgZgshBQgthAAAhRQAAhIAng9QABgBgLgFQgMgFACgJQADgMASABQAIAAAMACQAVgBA9ADQBGADAlAAQAmAAA8gDQA7gEAfAAQADAAAVgBQATAAACAKQAEAMgOAEQgNAEABABQAnA8AABKg");
	this.shape_9.setTransform(29,11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9DC6C5").s().p("ABChpQAUgEAOgNQAcAjgUBFQgUBHg0AhQgkAagdAGQgWAFhAAAQBzhMBCiYg");
	this.shape_10.setTransform(40.5,17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ADDFE1").s().p("AAACFIgnAAQgYgBgPgGQhCgUgog1Qgog0gBhCQAAgiANghQA3AQAvAAQAVABArgJQArgIAlAAQAcAAAoALQAnAJAHABQAmgBARgJQAJgGABgFQAMAhAAAiQABBDgpA1QgpA0hEAVQgOAEgYABIgmAAg");
	this.shape_11.setTransform(29,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FDF9F6").ss(7).p("AD6gmQAABSguBBQguBBhLAYQgPAFgZACQgGAAglAAQhAAAgXgIQhJgZgshBQgthAAAhRQAAhIAng9QABgBgLgFQgMgFACgJQADgMASABQAIAAAMACQAVgBA9ADQBGADAlAAQAmAAA8gDQA7gEAfAAQADAAAVgBQATAAACAKQAEAMgOAEQgNAEABABQAnA8AABKg");
	this.shape_12.setTransform(29,11.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DEF4FC").s().p("AAADMQhAABgXgIQhJgagshAQgshBgBhQQAAhIAng9QABgBgLgFQgMgFACgJQADgMASAAQAIAAAMACQAVAAA9ADQBGADAlAAQAnAAA7gDQA6gEAgAAIAYgBQATAAACAJQAEANgOAEQgOAEACABQAmA8ABBKQAABSguBBQgtBAhMAZQgPAFgZABIgrAAg");
	this.shape_13.setTransform(29,11.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#99544F").ss(2,0,1).p("AAABvIAAjd");
	this.shape_14.setTransform(272.3,-18.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#515151").ss(3,0,1).p("AytAAMAlbAAA");
	this.shape_15.setTransform(152.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-37.5,301.3,82.4);
p.frameBounds = [rect];


(lib.progression_niveau_avatar_inerte = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC4E39").s().p("AgqBCQgWgNgPgTIhGAxQgDACgDAAIgEgBQgGgDAAgGIAAiVQAAgFAFgEIAFgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIBIAnQAqgoBFAAQAmAAAfAKQAeAKARATQATAVgDAZQgEAogjAWQgjAWg6AAQgqAAghgTgAgzAwQAjAbAxAAQA5AAAggVQAegUADgiQAEgfgjgVQgjgWg4AAQgvAAgjAVIgbAVIhPgqIAACVIBPg3g");
	this.shape.setTransform(16.6,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE7030").s().p("AgzAwIgZgcIhPA3IAAiVIBPAqIAbgVQAjgVAvAAQA4AAAjAWQAjAVgEAfQgDAigeAUQggAVg5AAQgxAAgjgbg");
	this.shape_1.setTransform(16.6,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.progression_niveau_avatar_inerte, rect = new cjs.Rectangle(0,0,33.2,17.1), [rect]);


(lib.gauge_air_minuterie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(1).call(this.frame_32).wait(1).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1));

	// masque (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AFNAAQAAAugMArQgMAqgVAlQgWAlgfAeQgeAfglAWQglAVgqAMQgrAMguAAQhEAAg9gaQg8gagtguQgugtgag8Qgag9AAhFQAAgtAMgrQAMgqAVglQAWglAfgeQAegfAlgWQAlgVAqgMQArgMAtAAQAuAAArAMQAqAMAlAVQAlAWAeAfQAfAeAWAlQAVAlAMAqQAMArAAAtg");
	var mask_graphics_1 = new cjs.Graphics().p("AA6lHQAsAIAnASQAmASAhAbQAgAbAZAhQAYAiAQAnQAQAmAFArQAGAqgGArQgGAtgQAnQgRAogZAhQgZAighAaQggAagmARQgmASgqAHQgrAIgrgEQhDgHg5gdQg4gdgpgvQgqgwgWg7QgVg8AChDQACgsANgpQANgpAWgjQAXgkAegdQAegcAkgVQAlgVApgLQApgLAsAAIAAFMg");
	var mask_graphics_2 = new cjs.Graphics().p("AByk4QAoAPAjAYQAiAXAbAfQAbAeASAkQATAkAKAoQAJAnAAApQAAApgLAqQgMAqgUAkQgVAkgcAeQgcAdgiAWQgiAWgnANQgmANgqADQgoADgrgHQhAgMg1ggQg0ghglgwQglgxgSg7QgSg7AFhAQAEgrAOgnQAOgnAXgiQAWgiAegcQAegbAkgTQAjgUAogKQApgLAqAAIAAFMg");
	var mask_graphics_3 = new cjs.Graphics().p("ACmkfQAlAVAdAcQAdAcAVAhQAVAiAMAlQANAlAEAoQADAmgGAoQgFAogQAmQgQAngZAgQgYAhgeAZQgeAZgkASQgjARgnAJQgmAJgngBQgpgBgogKQg9gRgxgjQgwgkghgxQghgxgOg7QgOg6AIg9QAFgqAPglQAPgmAXggQAXggAdgaQAegaAjgTQAjgSAngKQAngKApAAIAAFMg");
	var mask_graphics_4 = new cjs.Graphics().p("ADWj+QAfAaAXAfQAXAgAPAjQAPAkAHAlQAHAmgCAlQgCAmgLAmQgLAlgVAjQgUAkgbAcQgbAcggAVQggAVgkANQgkANgmAFQgmAEgmgEQgngEgmgOQg5gVgsgmQgtgmgcgyQgdgxgLg6QgKg5AKg7QAJgwAUgqQAVgpAfgiQAfgjAngYQAngYAtgOQAsgNAwAAIAAFMg");
	var mask_graphics_5 = new cjs.Graphics().p("AD/jVQAZAeARAiQARAiAJAkQAJAkABAlQABAkgIAkQgHAlgPAiQgQAjgYAfQgYAfgdAYQgdAYgiAQQghARgkAIQgkAJglABQgkABglgIQglgIgkgQQg1gZgogoQgogogZgyQgYgygHg4QgIg3ANg5QAKguAWgoQAVgoAfggQAfggAmgXQAmgXAsgNQArgMAuAAIAAFMg");
	var mask_graphics_6 = new cjs.Graphics().p("AEgimQATAhALAjQALAjADAkQADAjgFAjQgFAkgMAiQgMAigTAfQgUAfgbAaQgaAbgfAUQgfATgiAMQgiAMgkAFQgjAFgjgDQgkgDgjgLQgjgLgggTQgygcgjgpQgkgqgVgyQgUgxgEg3QgEg1AOg3QAMgsAWgmQAWgmAfgeQAfgeAlgWQAlgWAqgLQArgMAsAAIAAFMg");
	var mask_graphics_7 = new cjs.Graphics().p("AE5hxQAPApAEAqQADAqgGApQgHApgQAmQgRAngaAhQgaAhgiAbQgjAbgnAQQgnAQgpAGQgqAGgogEQgqgEgngPQgogOgkgZQgtgggfgqQgggrgQgxQgRgxgBg1QgBg0AQg0QAOgqAWgkQAXgjAegdQAfgdAkgUQAkgUApgLQApgLArAAIAAFMg");
	var mask_graphics_8 = new cjs.Graphics().p("AFIg5QAHAqgDAnQgDApgMAmQgNAngVAiQgWAigdAdQgdAcglAVQgtAbgyAKQgyALgxgEQgygFgvgTQgwgTgogiQgogigbgrQgcgrgNgxQgNgxACgxQACgzASgyQAPgnAXgiQAXgiAegbQAegbAjgTQAkgTAngKQAogKApAAIAAFMg");
	var mask_graphics_9 = new cjs.Graphics().p("AFNAAQAAAugMArQgMAqgVAlQgWAlgfAeQgeAfglAWQglAVgqAMQgrAMguAAQhEAAg9gaQg8gagtguQgugtgag8Qgag9AAhFQAAgtAMgrQAMgqAVglQAWglAfgeQAegfAlgWQAlgVAqgMQArgMAtAAIAAFMg");
	var mask_graphics_10 = new cjs.Graphics().p("AFKA6QgHArgSAnQgSAmgaAgQgbAgghAZQghAZgmAQQgmAQgqAGQgqAGgrgFQhCgIg3gfQg4gegogwQgogwgUg7QgUg8ADhBQADgtANgoQANgoAXgjQAWgjAegcQAegdAkgUQAkgUApgLQApgLAsAAIAAFMg");
	var mask_graphics_11 = new cjs.Graphics().p("AFDByQgPAogXAhQgXAigdAbQgeAagjATQgjATgnAKQgmAKgpABQgoABgpgKQg+gPgygjQgxgigjgxQgigxgPg7QgQg6AHg/QAFgqAPgmQAOgmAXghQAXggAegbQAdgaAkgTQAjgTAngKQAogKApAAIAAFMg");
	var mask_graphics_12 = new cjs.Graphics().p("AE3CmQgVAkgbAcQgbAcggAVQggAVgkANQgkANgmAFQgmAEgmgEQgmgEgngOQg5gVgsgmQgsgmgdgyQgdgxgKg6QgLg5AKg7QAJgwAVgqQAVgpAegiQAfgjAngYQAngYAtgOQAtgNAvAAIAAFMg");
	var mask_graphics_13 = new cjs.Graphics().p("AEmDWQgZAegeAWQgeAXghAPQgiAPgkAHQgkAIgkgBQgkgBglgIQgkgJgigRQg0gbgngoQgngogXgyQgXgygGg4QgGg2ANg5QALgtAWgnQAVgnAfggQAfgfAmgXQAlgXArgMQAsgMAtAAIAAFMg");
	var mask_graphics_14 = new cjs.Graphics().p("AESD/QgiAcgnATQgnASgpAHQgqAIgqgDQgpgDgpgNQgogOglgYQgvgeghgqQgggrgSgxQgSgygCg1QgCg0APg2QANgqAXgkQAWglAfgdQAegdAlgVQAlgVApgLQAogLAsAAIAAFMg");
	var mask_graphics_15 = new cjs.Graphics().p("AD6EgQguAbgyAKQgyALgygEQgygFgugTQgvgTgpgiQgogigbgrQgbgrgNgxQgNgxACgxQABgzASgyQAPgnAXgiQAXgiAegbQAegbAjgTQAkgTAngKQAngKAqAAIAAFMg");
	var mask_graphics_16 = new cjs.Graphics().p("ADfE5QgvARgwADQgwACgvgLQgugLgqgYQgqgYgjgkQgiglgVgrQgWgsgIgvQgJgvAGgwQAFgwAUguQAQglAXgfQAXgfAegYQAdgZAjgRQAigSAlgJQAmgJAoAAIAAFMg");
	var mask_graphics_17 = new cjs.Graphics().p("ADDFIQheAQhWgiQhVgjg7hMQg4hOgIhcQgIhbAqhWQARgiAYgdQAXgcAdgXQAdgWAhgQQAggPAkgJQAkgIAmAAIAAFMg");
	var mask_graphics_18 = new cjs.Graphics().p("ACnFNQhGAAg8gaQg7gaguguQgugtgZg8Qgag9gBhFQABgtALgrQAMgqAWglQAWglAegeQAegfAlgWQAlgVAqgMQAqgMAvAAIAAFMg");
	var mask_graphics_19 = new cjs.Graphics().p("ABtFKQhAgLg0ghQg1ggglgxQglgwgSg7QgSg8AGg/QAEgsAOgnQANgnAXgiQAXgiAegbQAdgbAjgUQAkgTAogLQAogKArAAIAAFMg");
	var mask_graphics_20 = new cjs.Graphics().p("AA1FDQg5gVgsgmQgsgmgdgxQgdgygKg5QgLg6ALg7QAIgwAVgqQAVgpAfgiQAegiAngZQAmgYAtgOQAtgNAxAAIAAFMg");
	var mask_graphics_21 = new cjs.Graphics().p("AAAE3QgwgdgkgpQgjgpgVgyQgVgygEg3QgEg1APg3QAMgsAWglQAWgmAfgfQAegeAlgWQAlgVAqgMQAqgMAuAAIAAFMg");
	var mask_graphics_22 = new cjs.Graphics().p("AgvEmQgogigbgrQgbgrgNgxQgNgxACgyQACgyASgyQAOgnAXgiQAXgiAegbQAegbAjgTQAjgTAogKQAngKArAAIAAFMg");
	var mask_graphics_23 = new cjs.Graphics().p("AhYESQgfgmgTgrQgTgsgGguQgGgvAHguQAHguAVgsQAQgkAYgdQAXgeAdgYQAdgXAhgRQAigQAlgJQAlgIAngBIAAFMg");
	var mask_graphics_24 = new cjs.Graphics().p("Ah5D6QgthPAAhYQAAhWAthPQAXgnAfgfQAegeAlgWQAmgWAqgLQAqgMAtAAIAAFMg");
	var mask_graphics_25 = new cjs.Graphics().p("AiRDfQgOgmgFgoQgEgoAFgnQAGgnAOglQAOglAYghQAXgiAegaQAegaAjgTQAjgSAngKQAngJApAAIAAFMg");
	var mask_graphics_26 = new cjs.Graphics().p("AigDDQgHgkACgkQABglAKgjQAJgjARgfQARggAXgcQAYgdAdgWQAdgWAggPQAhgPAjgIQAjgIAmAAIAAFMg");
	var mask_graphics_27 = new cjs.Graphics().p("AimCnQABgvALgqQAMgqAWglQAWglAegeQAegeAlgWQAlgWAqgMQAqgLAvgBIAAFNg");
	var mask_graphics_28 = new cjs.Graphics().p("AihBtQAJgwAVgqQAVgpAfgiQAegiAngYQAmgZAtgNQAtgNAwgBIAAFNg");
	var mask_graphics_29 = new cjs.Graphics().p("AiRA1QAOgoAXghQAXghAegbQAegbAjgTQAjgTAogKQAngKAqgBIAAFNg");
	var mask_graphics_30 = new cjs.Graphics().p("Ah5AAQAXgmAegeQAfgfAlgWQAlgWArgLQAqgLAsgBIAAFNg");
	var mask_graphics_31 = new cjs.Graphics().p("AhYgvQAYgcAdgWQAdgWAggPQAggQAkgIQAjgHAlgBIAAFNg");
	var mask_graphics_32 = new cjs.Graphics().p("AgvhYQAegZAigRQAjgSAlgIQAmgJAngBIAAFNg");
	var mask_graphics_33 = new cjs.Graphics().p("AAAh5QAmgWAqgLQAqgLAsgBIAAFNg");
	var mask_graphics_34 = new cjs.Graphics().p("AA1iRQA3gUA6gBIAAFNg");
	var mask_graphics_35 = new cjs.Graphics().p("ABtigQAcgFAdgBIAAFNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:33.2,y:33.1}).wait(1).to({graphics:mask_graphics_1,x:33.3,y:33.1}).wait(1).to({graphics:mask_graphics_2,x:33.3,y:33.1}).wait(1).to({graphics:mask_graphics_3,x:33.3,y:33.1}).wait(1).to({graphics:mask_graphics_4,x:33.3,y:33.1}).wait(1).to({graphics:mask_graphics_5,x:33.3,y:33.1}).wait(1).to({graphics:mask_graphics_6,x:33.3,y:33.1}).wait(1).to({graphics:mask_graphics_7,x:33.3,y:33.1}).wait(1).to({graphics:mask_graphics_8,x:33.3,y:33.1}).wait(1).to({graphics:mask_graphics_9,x:33.3,y:33.1}).wait(1).to({graphics:mask_graphics_10,x:33,y:33.1}).wait(1).to({graphics:mask_graphics_11,x:32.3,y:33.1}).wait(1).to({graphics:mask_graphics_12,x:31.1,y:33.1}).wait(1).to({graphics:mask_graphics_13,x:29.4,y:33.1}).wait(1).to({graphics:mask_graphics_14,x:27.3,y:33.1}).wait(1).to({graphics:mask_graphics_15,x:25,y:33.1}).wait(1).to({graphics:mask_graphics_16,x:22.3,y:33.1}).wait(1).to({graphics:mask_graphics_17,x:19.5,y:33.1}).wait(1).to({graphics:mask_graphics_18,x:16.6,y:33.1}).wait(1).to({graphics:mask_graphics_19,x:16.6,y:32.8}).wait(1).to({graphics:mask_graphics_20,x:16.6,y:32.1}).wait(1).to({graphics:mask_graphics_21,x:16.6,y:30.9}).wait(1).to({graphics:mask_graphics_22,x:16.6,y:29.2}).wait(1).to({graphics:mask_graphics_23,x:16.6,y:27.1}).wait(1).to({graphics:mask_graphics_24,x:16.6,y:24.8}).wait(1).to({graphics:mask_graphics_25,x:16.6,y:22.1}).wait(1).to({graphics:mask_graphics_26,x:16.6,y:19.3}).wait(1).to({graphics:mask_graphics_27,x:16.6,y:16.4}).wait(1).to({graphics:mask_graphics_28,x:16.6,y:16.4}).wait(1).to({graphics:mask_graphics_29,x:16.6,y:16.4}).wait(1).to({graphics:mask_graphics_30,x:16.6,y:16.4}).wait(1).to({graphics:mask_graphics_31,x:16.6,y:16.4}).wait(1).to({graphics:mask_graphics_32,x:16.6,y:16.4}).wait(1).to({graphics:mask_graphics_33,x:16.6,y:16.4}).wait(1).to({graphics:mask_graphics_34,x:16.6,y:16.4}).wait(1).to({graphics:mask_graphics_35,x:16.6,y:16.4}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// niveau_air
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s().de(-15.6,-12.1,31.3,24.2);
	this.shape.setTransform(95,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s().p("AA9AAYAAAAAAAAAAAAIh5AAg");
	this.shape_1.setTransform(44.4,24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE7030").s().p("AjqDrQhhhiAAiJQAAiIBhhhQBhhiCJAAQCJAABiBiQBhBhAACIQAACJhhBiQhiBhiJAAQiJAAhhhhg");
	this.shape_2.setTransform(33.2,33.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,66.5,66.4);
p.frameBounds = [rect, new cjs.Rectangle(0,0,66.6,66.4), rect=new cjs.Rectangle(0,0,66.7,66.4), rect, rect=new cjs.Rectangle(0,0,66.6,66.4), rect, rect, new cjs.Rectangle(0,0,66.7,66.4), rect=new cjs.Rectangle(0,0,66.6,66.4), rect, new cjs.Rectangle(0,0,66.1,66.4), new cjs.Rectangle(0,0,64.6,66.4), new cjs.Rectangle(0,0,62.2,66.4), new cjs.Rectangle(0,0,58.8,66.4), new cjs.Rectangle(0,0,54.7,66.4), new cjs.Rectangle(0,0,50,66.4), new cjs.Rectangle(0,0,44.7,66.4), new cjs.Rectangle(0,0,39.1,66.4), new cjs.Rectangle(0,0,33.3,66.4), new cjs.Rectangle(0,0,33.3,65.9), new cjs.Rectangle(0,0,33.3,64.4), new cjs.Rectangle(0,0,33.3,62), new cjs.Rectangle(0,0,33.3,58.6), new cjs.Rectangle(0,0,33.3,54.5), new cjs.Rectangle(0,0,33.3,49.7), new cjs.Rectangle(0,0,33.3,44.5), new cjs.Rectangle(0,0,33.3,38.9), new cjs.Rectangle(0,0,33.3,33.1), new cjs.Rectangle(0.5,0,32.8,33.1), new cjs.Rectangle(2,0,31.3,33.1), new cjs.Rectangle(4.5,0,28.9,33.1), new cjs.Rectangle(7.8,0,25.5,33.1), new cjs.Rectangle(11.9,0,21.4,33.1), new cjs.Rectangle(16.7,0,16.7,33.1), new cjs.Rectangle(21.9,0,11.4,33.1), new cjs.Rectangle(27.5,0,5.8,33.1), null];


(lib.koi_surprise_seul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.5,1,1).p("ABrBeIgRAQIjEizIArgog");
	this.shape.setTransform(10.7,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AABDC9").s().p("AhqhFIArgoICqDLIgRAQg");
	this.shape_1.setTransform(10.7,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.koi_surprise_seul, rect = new cjs.Rectangle(-1,-1,23.4,24.1), [rect]);


(lib.avatar_koi_siTouche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D6D6").s().p("AjUALQgFgJAZAGQAxAMAgADQCYARCWhWIAXAHQhzBOiAAHIgcABQhaAAhBgkg");
	this.shape.setTransform(57.4,68.7,1,1,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#26110B").s().p("AhXgPICogCIAHAbIivAIg");
	this.shape_1.setTransform(82.5,24.7,1,1,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#441F13").s().p("Ag/GOQgLgIgDgMQgDgSAQgVIAOhEQgPgCgRgEQg0gHgagOQgRAHg2ASQgYAJgmAMQhrAkgSAEQgWAFgHAAQgQAAgOgJQgOgHgXgcQgLgSADgPQAEgQAXgOIAKgFQgJgaAIgnQAEg0AhgfQgQgbgDgrQgGhCAbgcIAFgGIgCgLIgDgFQgIgSgCgLQgEgTAJgOQAJgMAQAAQAgAABBBIIACADQArBGA0AdQAHgSAHgQIgFABIAAAAQgLAAgHgJQgGgJABgRQACgRALgvIAHgfQgFgPgbgmQgbglghgmIgQgPQgjgSAHgYQAFgQARgJQAIgQAVAAQAMAAAYAIQEXBhARAIIAVgMQAJgMASgHQBiglBGgDQAZgDAUAAQBpAABBAzIAOAHQA1AeABBIQAKAygOA2QgSBQg+BKQg+BKheA4IgQAKIgGBfQgDAVgYgBQgRAAg2gPIgTgGQgYAChoBDIgDACIgYARQgRAWgRAAQgIAAgGgDgAhOD2QAYAEAbADIgSBeIgJAOQgHAOAJAFIADABQAJAAALgSIAcgSIABAAQBvhKAdABIABAAIAnAKQAlAKANAAQAHAAAAgCIAHhpIAYgOQBcg4A8hJQA6hFAShLQANg0gKgtQAAg+gsgYIgOgIQg8gwhkABQgTAAgZACQhCAEhgAjQgOAFgHALIgjATIgHgFQgVgMkShcQgRgHgMAAQgLAAgBAHIAAACQgQAGgEALQgCAKAZAMQAAABADADIANANQAiAmAcAmQAgAtAEASQAAADgMA4QgMA0AHAAIApgGQgaAtgLArQhHgbg2haQgPgQgRgQQgjgigPAAQgGAAgCAFQgGAJAHAUIAJAXIADAPQAAAIgKAKQgVAWAFA6QADAkAMAYQAGAMAGAEIgVARQgWAagCAlQgHAfAGAVQACALAEAFIAAAAQACAFgIAGQgKACgJAFQgOAIgDAJQgBAHAGAJIAPARQALALAFABQAIAHAMAAQAGAAASgEQAYgGBkgiIA9gVIBQgdQATAPA9AKg");
	this.shape_2.setTransform(57.6,47,1,1,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D8D8D8").ss(0.5,1).p("AiMgEIBQgHQBSgGANAEQAWAIBUAV");
	this.shape_3.setTransform(54.2,31.4,1,1,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D8D8D8").ss(0.5,1).p("AiihAIBtAhQBuAhAMAIQATAMBLAr");
	this.shape_4.setTransform(52.4,23.3,1,1,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5E5E5").s().p("ACMA/IgagkQgFgDiNgzQiNg0gDgDIgUgUQgEgDACgDQADgGCdA7QCcA4AFAHIAoAxQAkAsABAGIgVACQgQgMgXgig");
	this.shape_5.setTransform(51.7,22,1,1,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhiBTQANg5gBgCQgEgWgngyQgigugkglIAAgCQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQA7AQCDAwQB8AvAFAGQBTBlgGgDQgCgBiRAbQiUAcgHAAIAAAAQgGAAALg0g");
	this.shape_6.setTransform(51,24.5,1,1,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE7030").s().p("ADMCEIgQgHIhKheIk8h5QgegLAEgMQADgJAMgGIAMgEQErBoAUAJQAUAJBLBmIALAMQAKAPgHAJQgEAFgJAAQgEAAgGgBg");
	this.shape_7.setTransform(52.7,20.8,1,1,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#893E17").s().p("ADDB6IgRgJIg/hUIkxh4QgfgOACgMQACgKAUAEQAKACAJAEQESBcAVAMQAVALA+BSIANAOQALAQgGAKQgDAFgHAAQgFAAgIgDg");
	this.shape_8.setTransform(54,19.6,1,1,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9A19D").s().p("AAmAuQgCgPgGgRQgMghgXgLQgegNgQAHIgLAEQgFgLAbgLQAdgNAdAWQAdAVALAsQAGAWAAASg");
	this.shape_9.setTransform(105,36.3,1,1,15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9A19D").s().p("AgEAnQgxgagKgNQgVgbAAgjIAqApQAwApAfAEQAfAEAIgMQAEgFgBgGIAFAWQACAZgRAIQgEADgHAAQgUAAgqgYg");
	this.shape_10.setTransform(102.1,41.4,1,1,15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBEB7").s().p("AAuBgIgHgEQhIgmgMgFQgNgFgOgdQgQgfAJgYQAPgnAcgLQAggNArAZQAnAVAEAzQADAYgGAVIADASQABATgOALQgLAJgJAAIgDAAgAgOg2QgWAAgKAUQgFAJATAJQAgAQAFACIAZAXQAJAIAGgGQAIgJgHgZQgIgagPgKQgSgMgRAAIgCABg");
	this.shape_11.setTransform(103.2,37.8,1,1,15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#421B0A").s().p("AAKA7QgYgFgUgWQgUgVgEgYQgEgYAPgNQAOgOAZAGQAWAFAVAWQATAVAEAXQAFAZgPANQgKAKgPAAIgNgCg");
	this.shape_12.setTransform(103.9,36.8,1,1,15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#212121").ss(1,1).p("AgYANQA3AFgHgf");
	this.shape_13.setTransform(79.5,28,1,1,15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#212121").s().p("AgKAGQgCgDADgDQACgDAFgCQADgDAFABQAEAAABACQABADgCACQgCAEgFACQgEADgEAAQgEgBgBgCg");
	this.shape_14.setTransform(80.9,27.5,1,1,15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EDEDED").s().p("AggAiQgggEgHgWQgFgQADgPIAFgKQAdAfAjACQAjAEAsgYQgBAEgGAHQgNAMgZAQQgaAPgaAAIgKAAg");
	this.shape_15.setTransform(79.4,32.5,1,1,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkA+QgegDgKgVQgKgUAPgZQAPgaAggQQAfgPAeADQAeADAKAUQAKAVgPAYQgPAaggAQQgaAOgYAAIgLgBg");
	this.shape_16.setTransform(80.7,29.7,1,1,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ah+gNQAyAJBTAOQBEAJA0gM");
	this.shape_17.setTransform(20.8,54.1,1,1,15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ah2hAQBOBAAkAXQBDAqA5AA");
	this.shape_18.setTransform(24.6,43.7,1,1,15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#D8D8D8").p("ABQgUQgpgpgogpQhThRAAAFQAAAGACAJQAAAIgKAKQgVAWAFA7QAEAkAMAYQAGAKAFAFIgSASQgTAZgIAlQgGAfAFAVQADALAEAEIAAAFQgDAGgMAHQgTAKB0gZQBygaAegQQAjgSgCgdQgDgig4g6g");
	this.shape_19.setTransform(22.9,44.9,1,1,15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiHCwQAMgHADgGIAAgFQgEgEgDgLQgFgVAGgfQAIglATgZIASgSQgFgFgGgKQgMgYgEgkQgFg7AVgWQAKgKAAgIIgCgPQAAgFBTBRIBRBSQA4A6ADAiQACAdgjASQgeAQhyAaQhTASgOAAQgGAAAGgDg");
	this.shape_20.setTransform(22.9,44.9,1,1,15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#441F13").s().p("Ah5A0QgEgHAIgLQAPgYA4gYQBMgjBBgJQBRgLiWBdQgRAKgegGQgdgGgEAGQgTAegXACIgDAAQgMAAgKgIg");
	this.shape_21.setTransform(17.5,61.1,1,1,15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiIDnQgQgJgKgOQgHgJACgIQACgIAPgJQANgHAMABIAIAAQgEgCgEgIQgJgUADgxQADgmAVgZIAVgRQgFgFgGgKQgMgYgEgkQgFg7AVgWQAKgKAAgIIgCgPIgJgXQgIgUAHgKQAJgOApAlQAVASASAVQA9BmBVAXQAFAhAPBAQAKAvACAkQgKAch8AmQg9AThMASIgIABQgMAAgNgHg");
	this.shape_22.setTransform(23.3,45.2,1,1,15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FE7030").ss(1,1).p("AAigcIhDA5");
	this.shape_23.setTransform(81.8,48,1,1,15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#D8D6D6").ss(1,1).p("AAigcIhDA5");
	this.shape_24.setTransform(81.5,48.5,1,1,15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FE7030").ss(1,1).p("AArgJIhVAT");
	this.shape_25.setTransform(80.6,43.5,1,1,15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#D8D6D6").ss(1,1).p("AArgJIhWAT");
	this.shape_26.setTransform(80.1,43.9,1,1,15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FE7030").ss(1,1).p("AAsAGIhXgL");
	this.shape_27.setTransform(81.6,39.4,1,1,15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#D8D6D6").ss(1,1).p("AAsAGIhXgL");
	this.shape_28.setTransform(80.9,39.5,1,1,15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#441F13").s().p("Ah4AyQAHgaAhgbQAhgbAogQQBjgnAcA/QASAniIAgQgzAMgmABIgFAAQgjAAAHgMg");
	this.shape_29.setTransform(64.8,51.3,1,1,15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#441F13").s().p("AgiB2QhGgpgnhLQgohOAzgSQBdgjBCgEQA+gEA0AWQAWAKgCAFQgCADgRACQgnAGASANQAfAVgjBAQglBCg4AEIAEAnQgEARgPAAQgPAAgcgRg");
	this.shape_30.setTransform(83,32.6,1,1,15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FE7030").s().p("AhqA3QgMhBARgZQgpgxAigRQAbgPBDALQA9AJAsAVQAwAVgVAOQgTANhJBDQhFBCgDABQgJAEgJAAQgfAAgLg4g");
	this.shape_31.setTransform(52.3,50.6,1,1,15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D8D6D6").s().p("AlKDYQgFgJAZAGQAxAMAgADQCZARCWhXQB2hOBEi8QAJgaAZhWQAMgoAFALQAvBeg8B2Qg8B2iNBUQhuBKiFALQgYACgWAAQhaAAgwgkg");
	this.shape_32.setTransform(74,51.9,1,1,15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AiXEqQiKgEg1haQg1hZA/h6QA/h7COhVQCNhVCKAEQCKADA1BZQA1Bag/B6Qg/B7iOBVQiIBSiEAAIgLAAg");
	this.shape_33.setTransform(72,46.3,1,1,15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BABABA").ss(0.5,1).p("AghCDQADgkAEglQAHhLAHgNQALgUAjhQ");
	this.shape_34.setTransform(73.6,66.5,1,1,15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#AFAFAF").ss(0.5,1).p("AhUCQQAVgvAXgyQAuhhAKgKQAPgRA2hC");
	this.shape_35.setTransform(65.3,66.7,1,1,15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E5E5E5").s().p("AiAC+QAAgWAYh1QAbiEARgEQAEgBBXg0QBWg0AFAAIAEAFQAEADgBAGQgOAOhRAyIhSAzQgEAEgXByQgWBygDACIgYAQIgEACQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_36.setTransform(62.7,66.2,1,1,15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E8E8E8").s().p("AiPDBIAAgCQATgsAfhuQAbhdAEgCIBrhGQBmhDgCADQgCACgJCXIgKCgQgBAIgtgMIgzgOQgUAAg5AhQgVANhGAsIgBAAIgBAAg");
	this.shape_37.setTransform(64.2,66.2,1,1,15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC5729").s().p("AiaDMQgJgFAHgOIAJgNIAaiDQAbiEAIgLQAHgMBjgpIBjgnIAOgIQAPgGAIAIQAIAJgIAQQgEAIgFAHIhoA0IirEjQgNAXgJAAIgEgCg");
	this.shape_38.setTransform(62.9,66.6,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.avatar_koi_siTouche, rect = new cjs.Rectangle(0,0,113.5,84.5), [rect]);


(lib.avatar_koi_siMort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#212121").p("AgggEIBBAJ");
	this.shape.setTransform(20.7,42.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#212121").p("AgTgaIAnA1");
	this.shape_1.setTransform(20.7,42.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#441F13").s().p("AgRFzQi8i2gRgXQgFgGgGgRIgegFQgLAAgKgDQhPgYgygcQgzgdgdgnQgsgtgUg2QgRgUgGgjQgJg3AygpQAug6BsgdQBJgVBYgBQA/gOBbgaIAhgJIAFgBQAKAAAKAJQALAJANAUQAPAXAHAMQAHAGA6AOQA7AOAYAKQAdAEAIAMQAGAJgDAKQgDAOgPAFIAJAJQASALARAQQAXAVAKATICEgGIBhgCIAIAAQASAAALADQATAHAJASIACADQAGAKAAAMQAAANgIAHQgLALgWAAIgDAAQAAAogZAiQAGASgEAQIgEAJIgBADQgKAPgTAOQACAegMAPQgIAKgLABIgDABQgJAAgLgHQgGgEgUgRQgnghgdgSQgxgfgxgLQgjAlg6AfQg5AehEASIgLAVQAAARAKAsQALAsARAwIAIAVQAWAbgMATQgJAOgQADQgHAHgLAAQgSAAgVgYgAjelEQhWABhHAUQhnAbgrA3QgrAiAIAsQAFAgAQARQASA0ArAsQAbAkAvAaQAwAcBNAXQAIADAIAAIACAAIAqAHQAIAXAFAGQAIAMBiBgIBhBfIAIAJQALAJAGAAQAEAAACgDIABgDQAOAAAFgJQAFgHgRgUIgBgGIgHgQQgQgvgLgtQgMg1ABgTQABgDAQgfQBJgSA8ghQA6gfAhgmQBKAMBKA5IAuAlQATAQAGAAIAAAAQAQgCgFgsIABgBIACgCQAVgNAJgPIAAgBIACgFQADgJgEgNIgEgKQAdgigBgqIAEgRIgFAAIAAgBIAIACIAQABQAVAAAAgKQAAgKgGgFIABgCQgGgLgKgDQgIgDgQAAIgIAAIhqADIiJAGQgEgTgXgWQgSgTgWgNQgXgXgdgRIAUgDIASACQAPAAACgHQABgEgLgDQgIgDgJAAIAAgBQgVgJhJgSQg7gOgGgLQgkhAgNAAIgBAAQhwAhhNARg");
	this.shape_2.setTransform(58.3,39.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D8D8D8").ss(0.5,1).p("ABrA9Qh8gpgPgPQgJgIghgdIgggb");
	this.shape_3.setTransform(47.7,45.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D8D8D8").ss(0.5,1).p("ABuB3QiViGgLgSIg7hV");
	this.shape_4.setTransform(48.7,54.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D8D6D6").s().p("AAPBBQhqhtgCgIQgihuABgIQADAAAOAFQAJARAJAoIAKAqQADAFBgBiQBhBjABAEIAKAZQACAEgCACIAAAAQgIAAhnhqg");
	this.shape_5.setTransform(49.2,55.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AB9CrQgqgjhYhdQhWhXgCgIIgThAQgQg5ACADQABACB5AbQB6AcAGACQAFADgXAsQgaAvAAACQgCAVARA+QAOA2ASAvIAAACIgBAAIgBAAg");
	this.shape_6.setTransform(49.2,55.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE7030").s().p("AB5DHIhphpIhyhzQgIgJgShBIgRg/QgEgHgBgIQgEgRAHgGQAIgGAMALIAKAMIAgBxIDWDiIAJAMQAJANgEAFQgEAIgMABg");
	this.shape_7.setTransform(48.4,56.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#893E17").s().p("AB6C5IgOgMIhgheQhhhggIgLQgJgMgQg2IgPgzQgEgIgCgKQgEgTAHgHQAHgGALANQAGAGAFAIIAbBkIDNDdIAKAOQAIAPgDAGQgBAEgEAAQgFAAgIgHg");
	this.shape_8.setTransform(47,57.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9A19D").s().p("AAABAQgYgNgCggQgBgeAYghIAYgaIAFAZIgSAXQgQAbAGAWQAHAcANAGIAJAFQgCAFgGAAQgHAAgMgHg");
	this.shape_9.setTransform(6.2,22.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9A19D").s().p("AALAkQACg3gNgXQgPgXgMABIgKAGQAFgJAHgIQAQgQAPAHQAQAIAKA2QAIAvgDAOQgEANgEAIQgIAPgPAMQAEgXABgcg");
	this.shape_10.setTransform(12,21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBEB7").s().p("AggBSQgagOgIgrQgHglAgggQAQgPARgIQAEgGAFgGQAOgLAOADQAPADAEAIQACAEAAADIARBQQADAMgLAYQgNAdgVAHQgRAGgNAAQgPAAgMgHgAgBgxQgHADgHAXQgGAYADAOQAEATAJAIQAJALAMgLQAGgEgGgRIgJggIgDgdQgBgJgDAAIgBAAg");
	this.shape_11.setTransform(8.8,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#421B0A").s().p("AgHA9QgSgCgJgUQgJgTADgYQADgaAPgQQAOgQARACQAQADAKASQAKAUgEAYQgEAagOAQQgNAOgOAAIgDAAg");
	this.shape_12.setTransform(8.7,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#212121").s().p("AgCAFQgDgCgCgDQgCgCABgCQAEgFAHAFQAEACACACQABADgBACQgBADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(20.6,42.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EDEDED").s().p("AAIA1QAThDhHgmIAKAAQAPADAVAKQAaAMAMAZQALAXgMAPQgPARgOAAIgCAAg");
	this.shape_14.setTransform(24.1,41.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAoQgZgPgLgWQgKgVAKgRQAKgQAYgBQAZgBAYANQAZAPAKAXQALAVgKARQgKARgYABIgDAAQgXAAgXgOg");
	this.shape_15.setTransform(22,41.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D8D8D8").ss(0.5,1).p("ABqAcQhbg9h4AH");
	this.shape_16.setTransform(96.4,39.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#D8D8D8").ss(0.5,1).p("ABqgCQhpgGhqAN");
	this.shape_17.setTransform(99.1,33.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#D8D8D8").ss(0.5,1).p("AA7BaQACABABgBQABgBAAgCQgCgJAEgGQABgBATgQQANgMACgHQABgFgFgLQgEgKADgGQAJgPAFgLQALgVABgPQABgMACgKIACgJQgsgCg1AFQhpALgvAoQgDADAAAEQAAAFAEACQBDAvByBAg");
	this.shape_18.setTransform(97.9,39.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA7BaQhyhAhDgvQgDgCgBgFQAAgEAEgDQAugoBqgLQA1gFAsACIgCAJQgDAKgBAMQgBAPgKAVIgPAaQgCAGAEAKQAEALgBAFQgBAHgOAMIgTARQgFAGACAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgCAAIgBAAg");
	this.shape_19.setTransform(97.9,39.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D8D6D6").s().p("ABYBIQgbgNgygmQgYgThRgQQg6gMANgYQBgg5BvAwQAsAXAUA1QARAwgNALQgFAGgKAAQgNAAgUgKg");
	this.shape_20.setTransform(92.2,43);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#441F13").s().p("AhVAhQhGgHCFgxQAPgGAZAMQAYALAEgEQATgYAdABQALAAAEAFQAEAFgIAGQADAGgIAIQgOAQgxALQguAKgrAAQgRAAgQgBg");
	this.shape_21.setTransform(100.2,30);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAmBsIgsglQhLg5hLgOQgXgDAGgaIALgZQACgrAfgLQAPgGAPAEIBjgHQBqgHAbAEQAbADAJAJQAFAFABAKQAAALgXgBIgWgDQAHA2giAoIAFANQAEAPgGAKQgHALgOAKIgMAJIABAWQgBAXgLACIAAAAQgFAAgTgPg");
	this.shape_22.setTransform(97.1,38.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FE7030").ss(1,1).p("AgsAAIBZAA");
	this.shape_23.setTransform(34.6,25.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#D8D6D6").ss(1,1).p("AgsAAIBZAA");
	this.shape_24.setTransform(35.2,25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FE7030").ss(1,1).p("AgngUIBOAp");
	this.shape_25.setTransform(33.7,30.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#D8D6D6").ss(1,1).p("AgmgUIBOAp");
	this.shape_26.setTransform(34.4,30.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FE7030").ss(1,1).p("AgcghIA5BD");
	this.shape_27.setTransform(31.1,33.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#D8D6D6").ss(1,1).p("AgcghIA5BD");
	this.shape_28.setTransform(31.7,33.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#441F13").s().p("AgfAQQgdglgMgOQgUgXgSAHQAzgWBWA3QAsAbAoAeQghATgeAAQgsAAgjgqg");
	this.shape_29.setTransform(50.8,29.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#441F13").s().p("ABIBrQhcgbg1gkQgxgigYgvQgOgeAcARQAfATgFgRQgJgeBEgQQBFgRAtAeIAWgZQAbgPAUAzQAbBAgTA+QgRA2glAAQgIAAgKgDg");
	this.shape_30.setTransform(23.1,40.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FE7030").s().p("AAOBFQghAAgpgUQgrgWgMgbQgPgfAmgbQAXgQA2AJQAxAIAqAXQAtAYgBAVQgBAYhEAKQABAYgkAAIgCAAg");
	this.shape_31.setTransform(60.7,37.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D8D6D6").s().p("AgIB0QicgQhmg+Qhhg6gkhdQABgJASANQAuAfARAKQB9BHCwANQCwAgCKg9QBFgfAiglQgQBXhwA6QhmA2iHAAIgsgCg");
	this.shape_32.setTransform(44.4,41.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhMDeQicgVhfheQhVhTAGhZQAGhVCDguQCBgtCpAVQCpAVBwBLQBxBLgTBSQgSBTiPA+QhyAyh6AAQgoAAgrgGg");
	this.shape_33.setTransform(44,29.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BABABA").ss(0.5,1).p("AB8gSQhtAZgXgBQgPgBg0AHIgxAH");
	this.shape_34.setTransform(44.5,5.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#AFAFAF").ss(0.5,1).p("ACZANQixAAgWgFIhqgU");
	this.shape_35.setTransform(49.5,9.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E5E5E5").s().p("Ag8AuQgCgChVgpQhSgogBgDIACgEQACgEAHgBQASAFBPAmIBRAmQAGACB2gSQB2gQADABIAYALQABAAABABQABAAAAABQAAAAAAAAQAAABgBAAQjPAjg7AAQgUAAgEgEg");
	this.shape_36.setTransform(52.4,12.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2F2F2").s().p("AgqBFQgHgFhkgnQg9gZgXgHQAdAABbgXICJgmQANgDAmBCQAGALA7AOQBJARAVAKIAAABIgCABQgzAAh3ALQhYAJgOAAIgCAAg");
	this.shape_37.setTransform(52.5,8.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC5729").s().p("AhIA5QgOgBhNg1IhKgzIgLAFQgKAEAGgIQAJgMAhAEIBVAfIFdAaQAhACgCAJQgCAHgQgBIgRgCIiKAVQiDATgVAAIgCAAg");
	this.shape_38.setTransform(53.1,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,116.6,79);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.clipPoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5B5B5B").s().p("AgxAyQgUgVAAgdQAAgcAUgUQAVgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAVQgUAUgdAAQgcAAgVgUg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipPoint, rect = new cjs.Rectangle(-7,-6.9,14,14), [rect]);


(lib.manekiNeko_mvtBras = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouvement_bras
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#301105").s().p("AAcJ8Qg4gTgVglQgGgKgDgLQgpA+hlAAQhMAAg+ghQg6gfgPgpQgRgvAogpIgEgeQgHg6ABgeQABgyATgfQgkgsgDhBQgDhCAfgxQAXgrAngqQAsgtAmgKQgVgqgFgvQgGgwAMgtQgCgMAIgIQAWhCAygvQAGhFAFglQAIg4AOgLQAOgXASgEIAIgBQAbAAAaAeQAcAfAQA6QAZgFAaAAQAdAAAgAGIALgZQANggATgYQAggnAmAAQAPAAAOAGQAgANAMA2QAIAkABBIIAAAIQARAKAMAPQA8AkAZBpQAUBRgIBdQgIBcgeA1QAWBDgDBHQgEBGgcBBQALAZAGAcIAAACIABADIAAAGIABABQAEAUgBAUQAAA4gWAxQgVAygnAhQgWAegtARQguAQg7AAQg5AAgwgQgAgbH1QgjA7A6AmQAyAiBXAAQA0AAApgOQAtgPATgcQAlgeAVgxQATguAAgyQAAgRgDgSIgCgMQgFgdgOgcQAehAAEhIQADhJgXhCQAyhNgKibQgMilhPguQgOgRgVgKQAAg7gEglQgJhGgdgLQgKgFgLAAQgbAAgZAdQgTAWgNAhQgJAQgHAXQgkgJgmAAQgiAAggAIQgPhBgdgiQgVgXgRAAIgDAAQgMADgKAUIgBAAQgQABgLCmQg2AxgVBCQgDACAAAEIAAADQgOAzAJA1QAJA1AdAsQgGgCgGAAQgnAAgxA0QglAngWAqQgfAvAFA/QAGBBAnAmQgXAagDAxQgCAfAIA+QACAUAEAUQhBA3BEA5QBBA1BiAAQA1AAAlgVQApgXALgvIAQgLg");
	this.shape.setTransform(5.8,-61.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000003").s().p("AgpAtQgMgNABgcQACgcALgLQAVgVASAAQAhAAAOAzQAOAwgWAEIgZAGQgPAEgKAAQgTAAgLgMgAgZgUQgGAFAAAUQgBAUAGAHQAFAEAKAAQALABAXgHIAIgBQABgJgCgNQgDgPgHgMQgKgQgKAAQgKAAgPAQg");
	this.shape_1.setTransform(-12.4,-20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000003").s().p("AgtAWQgMgMAXgXQAQgRASAAQAbAAAQAbQAQAZgWAEQgYAFgTAAQgdAAgKgJgAgUAAIgHAJQAIACANAAQAPAAASgDQgDgHgHgEQgJgHgIAAQgJAAgLAKg");
	this.shape_2.setTransform(-14,-29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000003").ss(2).p("AgHgqIAPBV");
	this.shape_3.setTransform(-12.4,-20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000003").ss(2).p("AgqAIIBVgP");
	this.shape_4.setTransform(-12.4,-20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000003").ss(2,1).p("AgJg6IAUB1");
	this.shape_5.setTransform(-21.1,-20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000003").ss(2,1).p("AgJg6IATB1");
	this.shape_6.setTransform(-25.9,-19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000003").ss(2,1).p("AgMhKIAZCV");
	this.shape_7.setTransform(-23.5,-20.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000003").ss(2,1).p("AgfAGIA/gL");
	this.shape_8.setTransform(-24.9,-27.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000003").ss(2,1).p("AgfAGIA/gL");
	this.shape_9.setTransform(-25.5,-30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000003").ss(2,1).p("AgqAIIBVgP");
	this.shape_10.setTransform(-14.7,-32.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A26615").s().p("AgVC2QgqgGghgpQgeglgOg4QgOg2AHgzQAHg2AbgdQAXAVAdAAQAZAAAYgRQAWgPANgaQAsAMAhAuQAgAsAMA6QASBXghA6QglA+hTAAQgQAAgOgCgAiBglQgBAxARAzQAQAqAZAbQAZAbAdADIAbACQA+AAAfgnQAUgYAGgmQAGgmgJgsQgKgxgagmQgZgmgggPQgSAagYAOQgZAOgaAAQgaAAgWgNQgTAfgBAyg");
	this.shape_11.setTransform(-17.9,-24.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6D702").s().p("AgVC2QgqgGghgpQgeglgOg5QgOg2AHgzQAHg2AbgdQAiAgAqgOQAngNAVgpQAsAMAhAuQAgArAMA7QAUBggpA6QgmA1hLAAQgOAAgRgCg");
	this.shape_12.setTransform(-17.9,-24.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F6D702").p("AAKAHQgeAsgFgfQABgmAAABQAVgMAOgCQAfgEggAqg");
	this.shape_13.setTransform(-28,-57.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FE7030").s().p("AgZAUIABglQAVgMAOgCQAfgEggAqQgRAZgJAAQgHAAgCgMg");
	this.shape_14.setTransform(-28,-57.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#ED5E4A").ss(1,1).p("AALAQQgWgHABgX");
	this.shape_15.setTransform(-24.4,-40.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#ED5E4A").ss(1,1).p("AAPAVQgegJABgg");
	this.shape_16.setTransform(-21.1,-42.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag+BkQgggigDg9QgCg8AdgmQAaghAngCQAngDAdAfQAgAjACA+QADA8gdAlQgaAignABIgFAAQgkAAgbgdg");
	this.shape_17.setTransform(-24.2,-50.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F6D702").p("AAbAAQAAA3gbAAQgaAAAAg3QAAg2AaAAQAbAAAAA2g");
	this.shape_18.setTransform(25.5,-75.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FE7030").s().p("AgaAAQAAg1AagBQAbABAAA1QAAA2gbAAQgaAAAAg2g");
	this.shape_19.setTransform(25.5,-75.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#ED5E4A").ss(1,1).p("AgLAPQABgXAWgF");
	this.shape_20.setTransform(21.2,-99.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#ED5E4A").ss(1,1).p("AgQAUQADggAegH");
	this.shape_21.setTransform(23.3,-96.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DDDDDD").ss(2,1).p("AgrABIAUAJQAbAFAogZ");
	this.shape_22.setTransform(25.3,-92.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhdCNQgLg+ADhQQAChEAJgjQgqgaAAgoQAAgjAfgdQAegdAmgBQAqgCAeAlQAmAWAZBEQAZBAAFBOQAFBSgRA/QgTBGgpAZQgkAWgcAAQhDAAgWh8g");
	this.shape_23.setTransform(32.6,-81.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DDDDDD").s().p("AhdCNQgLg+ADhQQAChEAJgjQgqgaAAgoQAAgjAfgdQAegdAmgBQAqgCAdAlQAmAWAaBEQAYBAAGBOQAFBSgRA/QgTBGgpAZQgkAWgcAAQhDAAgWh8g");
	this.shape_24.setTransform(30.3,-81.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000101").s().p("AgPAhIgNgNQAKgYANgSQAUgbANAPQAFAFgSAbQgTAdACAOQgFAAgIgIg");
	this.shape_25.setTransform(-11.4,-53.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F6D702").s().p("AgyA2QgYgUAAgiQAAghAYgVQAVgRAdgBQAeABAVARQAYAVAAAhQAAAigYAUQgVATgegBQgdABgVgTg");
	this.shape_26.setTransform(-8.1,-56.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(0.5,1).p("AiyhIQAUBMCBAtQB8ArBJgiQgIgCgLAE");
	this.shape_27.setTransform(0.4,-60.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#ED5E4A").s().p("AjsCxQhEgjgJhDQgHg9AqhBIAagfIAahRQBtB0CSgNQCVgOBQiKQAeASAbAiQgYAkgnAoQhPBQhNAOQgaCGhZAwQgpAVguAAQg8AAhGgkg");
	this.shape_28.setTransform(7.3,-56.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#ED5E4A").ss(1,1).p("AABAPIgBgd");
	this.shape_29.setTransform(-12.2,-98);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#ED5E4A").ss(1,1).p("AgFANIALgZ");
	this.shape_30.setTransform(-9.7,-97.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#ED5E4A").ss(1,1).p("AgBAPIACgd");
	this.shape_31.setTransform(8.2,-99.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#ED5E4A").ss(1,1).p("AAGAMIgLgX");
	this.shape_32.setTransform(5.7,-99);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#ED5E4A").ss(1,1).p("AgjgLQApgHAdAf");
	this.shape_33.setTransform(26.9,-80);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#ED5E4A").ss(1,1).p("AgvAJQAUgPAbgCQAYgCAYAK");
	this.shape_34.setTransform(26.5,-85.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#ED5E4A").ss(1,1).p("Ai2AZQATAAAhgQQAkgQASgBQAUgBAgAJQAsANAFABQA8AMAegDQAygFASgp");
	this.shape_35.setTransform(1.5,-79.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1).p("AAlARQgMgYgUgGQgUgHgVAP");
	this.shape_36.setTransform(-15.6,-93.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1).p("Ag9APQAdgXAggFQAjgFAbAU");
	this.shape_37.setTransform(9.7,-92.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ED5E4A").s().p("AAeBQQgbgYgDgBIgygSQgRgHgDgbQgEgeAhgkQAigmAeAHQAcAGAOBYQAPBXgTAJIgDAAQgJAAgTgQg");
	this.shape_38.setTransform(23.7,-112.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAfBTQhBg5g0ALQAPhmApgvQAggkAgAIQAgAIALBUQAEAkAGCbQgWgfgigdg");
	this.shape_39.setTransform(24.5,-110.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AjGDCQhahIAAh6QAAh5BahHQBRhBB1AAQB1AABRBBQBbBHAAB5QAAB6hbBIQhRBAh1AAQh1AAhRhAg");
	this.shape_40.setTransform(9.3,-87.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ED5E4A").s().p("AgvABQALiNAPgBQAigDAPAhQASAlAKBuQghgLgqA6QgVAcgPAfQADhGAFhHg");
	this.shape_41.setTransform(-6,-108.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhDAGQAFiIAlgLQATgFAaAiQAmAxALBjQgogKgzA5QgaAdgSAeQgEhDADhFg");
	this.shape_42.setTransform(-3.4,-110.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgCgSAIgKQAIgLASgC");
	this.shape_43.setTransform(5.3,-6.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgEgXANgOQAMgPAXgD");
	this.shape_44.setTransform(8.3,-4.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQADgZATgOQARgPAaAB");
	this.shape_45.setTransform(12.2,-2.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ah0BPQg1gdgBgyQABgxA1geQAvgaBFAAQBFAAAwAbQA2AdgBAxQABAyg2AdQgwAbhFAAQhEAAgwgbg");
	this.shape_46.setTransform(19.1,-8.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F6D702").p("AAjAHQgKAxgigIQgjgHAKgvQAKgxAiAIQAjAHgKAvg");
	this.shape_47.setTransform(33.3,-21.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FE7030").s().p("AgJAwQgjgHAKgvQAKgxAiAIQAjAHgKAvQgJAqgaAAIgJgBg");
	this.shape_48.setTransform(33.3,-21.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ah4CVQg3g4AAhdQAAhdA3g3QAxgyBHAAQBIgBAxAyQA3A3AABeQAABeg3A4QgxAxhIAAQhHAAgxgyg");
	this.shape_49.setTransform(24.9,-21.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C1C1C1").s().p("AiGCXQg9g4AAhfQAAheA9g4QA3gzBPAAQBQAAA3AyQA9A4AABfQAABfg9A4Qg3AzhQAAQhPgBg3gyg");
	this.shape_50.setTransform(22.9,-21.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DDDDDD").s().p("AiNA9IB9jJICeAdIgzBPQgyBdADBQQh5gvhAghg");
	this.shape_51.setTransform(-5.4,-28);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhMBcQgRgOAIghQAJgkAlgqQAmgtAigPQAegMAQAPQAQAPgJAhQgJAkgkApQglArghAPQgPAGgLAAQgNAAgIgHg");
	this.shape_52.setTransform(-23.4,-62.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DDDDDD").s().p("AhMBcQgRgOAIghQAJgkAlgqQAmgtAigPQAegMAQAPQAQAPgJAhQgJAkgkApQglArghAPQgPAGgLAAQgNAAgIgHg");
	this.shape_53.setTransform(-23.4,-62.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAAFUQiKgBhhhVQhrheAAigQAAieBrhfQBhhVCKgBQCLgBBgBVQBrBeAAChQAACihrBeQhfBUiKAAIgCAAg");
	this.shape_54.setTransform(9.3,-47.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C1C1C1").s().p("AAAFFQiFgBhchTQhlhdgBibQAAiaBnhXQBchPCEADQCFADBcBSQBnBbAACVQAACahnBaQhbBQiDAAIgDAAg");
	this.shape_55.setTransform(7.8,-45.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAADJQhMAAg1gzQg7g3AAhfQAAhdA7g4QA1gyBMgBQBNAAA1AyQA7A4AABeQAABfg7A4Qg1AyhLAAIgCAAg");
	this.shape_56.setTransform(-9.1,-29.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgFgkAkgF");
	this.shape_57.setTransform(-31.4,-11.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgDgXAMgOQAMgPAXgD");
	this.shape_58.setTransform(-28.4,-9.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQAEgZASgOQASgOAZAA");
	this.shape_59.setTransform(-24.5,-7.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Ah0BPQg2gdAAgyQAAgxA2geQAwgaBEAAQBFAAAwAbQA2AdAAAxQAAAyg2AdQgwAbhFAAQhEAAgwgbg");
	this.shape_60.setTransform(-16.9,-12.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#301105").s().p("AAnJ9Qg5gUgVgkQgGgKgCgMQgrA/hjAAQhMAAg/giQg6gfgPgoQgHgSADgUQAEgbAYgXQgDgPgCgQQgHg6ABgdQACgzATgfQgkgsgDhDQgDhAAfgwQAWgsAogqQArgtAmgJQgVgrgFgvQgFgwALgtQgBgLAHgJQAVhAA0gwQAFhGAGglQAHg3APgMQANgWASgFIAIgBQAbAAAaAfQAcAgAQA4QAagEAaAAQAdAAAfAFIALgYQAOghAUgYQAggoAoAAQAIAAAGACQAlAJAPBAQAKAuAFB6QAkAzALA+QAKA/gSA6QAhBhgFA4QAkBKACBUQABBUghBMQAMAdAEAZIAAABIABAEIABAFIAAACQAEATgBAUQAAA4gVAyQgWAygnAgQgWAegtARQguARg7AAQg5AAgvgQgAgRH1QgiA7A4AnQAzAiBXAAQA0AAApgOQAtgPAUgcQAlgfAUgwQATguAAgyQABgSgEgSIgBgLQgGgegNgcQAjhKgBhUQgBhUglhIQAGg2gjhnQAUg5gLg9QgLg8gkgxQgEhwgHgsQgMhCgcgHIgKgBQgWAAgWATQgaAWgSAsQgIAQgHAYQglgJglAAQgiAAggAHQgPhBgdghQgVgYgSAAIgDAAQgMAEgKATIAAAAQgQACgMCmQg2AxgUBBQgEACAAAEIABAEQgOAyAJA1QAIA1AeAsQgGgBgGAAQgoAAgwAzQglAngXArQgcArADA7QABAiAMAdQAMAdAUASQgXAagDAxQgCAfAHA+QACAVAEATQhBA4BFA5QBAA1BjAAQA1AAAkgVQApgYAMgvIAPgLg");
	this.shape_61.setTransform(4.8,-61.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000003").s().p("AgpAtQgMgNABgcQABgbAMgMQAVgVASAAQAhAAAOAzQAOAwgWAEIgZAGQgPAEgKAAQgTAAgLgMgAgZgUQgGAFgBAUQAAAUAGAHQAFAEAKAAQALABAXgHIAIgBQABgJgCgNQgDgPgHgMQgKgQgKAAQgJAAgQAQg");
	this.shape_62.setTransform(-12.4,-20.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000003").s().p("AgtAWQgMgMAXgXQAQgRASAAQAcAAAQAbQAPAZgWAEQgXAFgTAAQgeAAgKgJgAgTAAIgIAJQAIACAOAAQAPAAARgDQgDgHgHgEQgIgHgJAAQgJAAgKAKg");
	this.shape_63.setTransform(-14.1,-29);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000003").ss(2).p("AgGgqIANBV");
	this.shape_64.setTransform(-12.5,-19.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000003").ss(2,1).p("AgJg6IATB1");
	this.shape_65.setTransform(-25.9,-19.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#F6D702").p("AALAHQgeAsgGgfQABgmABABQAUgMAOgCQAfgEgfAqg");
	this.shape_66.setTransform(-28.1,-57.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FE7030").s().p("AgZAUQABgmABABQAUgMAOgCQAfgEgfAqQgSAZgJAAQgHAAgCgMg");
	this.shape_67.setTransform(-28.1,-57.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#F6D702").p("AAZgJQASAxgZAKQgYAKgTgzQgRgxAZgJQAYgKASAyg");
	this.shape_68.setTransform(19.2,-71.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FE7030").s().p("AgZAJQgRgxAZgJQAYgKASAyQASAxgZAKQgEACgEAAQgTAAgQgrg");
	this.shape_69.setTransform(19.2,-71.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#ED5E4A").ss(1,1).p("AgFASQgHgWAUgN");
	this.shape_70.setTransform(6.6,-93.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#ED5E4A").ss(1,1).p("AgHAYQgKgdAcgS");
	this.shape_71.setTransform(9.6,-91.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#DDDDDD").ss(2,1).p("AgnAUIAWACQAbgGAegl");
	this.shape_72.setTransform(12.9,-88.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgXCgQghg3gahOQgXhBgEgjQgvgKgOglQgMghATgmQASglAjgPQAogQApAZQAqAIAvA2QAsAyAgBJQAgBIAGBCQAHBHgaAmQglA0gmAAQgzAAg0hag");
	this.shape_73.setTransform(22.6,-79);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#DDDDDD").s().p("AgXCgQghg3gahOQgXhBgEgjQgvgKgOglQgMghASgmQATglAjgPQAogQAoAZQArAIAvA2QArAyAgBJQAgBIAHBCQAHBHgbAmQgkA0gmAAQgzAAg0hag");
	this.shape_74.setTransform(22.5,-80.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#DDDDDD").s().p("AgXCgQghg3gahOQgXhBgEgjQgvgKgOglQgMghASgmQATglAjgPQAogQAoAZQArAIAvA2QArAyAgBJQAgBIAHBCQAHBHgbAmQgkA0gmAAQgzAAg0hag");
	this.shape_75.setTransform(20.5,-78.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000101").s().p("AgPAhIgNgNQALgZAMgRQATgbAOAPQAFAFgSAbQgTAdACAOQgGAAgHgIg");
	this.shape_76.setTransform(-11.4,-53.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(0.5,1).p("AiyhIQAVBMCAAtQB8ArBKgiQgJgCgKAE");
	this.shape_77.setTransform(0.3,-60.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#ED5E4A").s().p("AjsCxQhEgjgJhDQgHg9AqhBIAagfIAahRQBtB0CSgNQCVgOBQiKQAdARAcAjQgYAkgoAoQhPBQhMAOQgaCGhZAwQgpAVguAAQg8AAhGgkg");
	this.shape_78.setTransform(7.3,-56.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#ED5E4A").ss(1,1).p("AAAAPIABgd");
	this.shape_79.setTransform(8.1,-99.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#ED5E4A").ss(1,1).p("AAHAMIgMgX");
	this.shape_80.setTransform(5.7,-98.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#ED5E4A").ss(1,1).p("AgvAJQAUgPAagCQAYgCAZAK");
	this.shape_81.setTransform(26.5,-85.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#ED5E4A").ss(1,1).p("Ai1AZQASAAAigQQAjgQASgBQAUgBAgAJQAtANAFABQA7AMAegDQAygFASgp");
	this.shape_82.setTransform(1.5,-79.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(1,1).p("Ag8APQAcgXAggFQAjgFAbAU");
	this.shape_83.setTransform(9.7,-92.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#ED5E4A").s().p("AAeBQQgbgYgDgBIgygSQgRgHgDgbQgFgeAigkQAigmAeAHQAcAGAOBYQAPBXgTAJIgDAAQgJAAgTgQg");
	this.shape_84.setTransform(23.7,-112.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAfBTQhBg5g0ALQAPhmApgvQAggkAgAIQAgAIALBUQAEAkAGCbQgXgfghgdg");
	this.shape_85.setTransform(24.5,-110.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AjFDCQhbhIAAh6QAAh5BbhHQBRhBB0AAQB1AABSBBQBaBHAAB5QAAB6haBIQhSBAh1AAQh0AAhRhAg");
	this.shape_86.setTransform(9.3,-87);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ED5E4A").s().p("AgvABQALiNAOgBQAjgDAPAhQARAkALBvQghgLgqA6QgVAcgPAfQADhGAFhHg");
	this.shape_87.setTransform(-6,-108.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhDAGQAGiIAlgLQATgFAaAiQAlAxAMBjQgpgKgzA5QgaAdgSAeQgEhDADhFg");
	this.shape_88.setTransform(-3.5,-110.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgCgSAIgKQAIgLARgC");
	this.shape_89.setTransform(5.3,-6.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C1C1C1").s().p("AiGCXQg9g4AAhfQAAheA9g4QA4gzBOAAQBPAAA4AyQA9A4AABfQAABfg9A4Qg4AzhPAAQhOgBg4gyg");
	this.shape_90.setTransform(22.9,-21.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AhNBcQgQgOAIghQAJgkAlgqQAmgtAhgPQAfgMAQAPQAQAPgJAhQgJAkgkApQglArghAPQgPAGgMAAQgMAAgJgHg");
	this.shape_91.setTransform(-23.4,-62.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DDDDDD").s().p("AhNBcQgQgOAIghQAJgkAlgqQAmgtAhgPQAfgMAQAPQAQAPgJAhQgJAkgkApQglArghAPQgPAGgMAAQgMAAgJgHg");
	this.shape_92.setTransform(-23.4,-62.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAAFUQiKgBhghVQhrheAAigQAAieBrhfQBghVCKgBQCMgBBfBVQBrBeABChQgBCihrBeQhfBUiKAAIgCAAg");
	this.shape_93.setTransform(9.3,-47.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C1C1C1").s().p("AAAFFQiEgBhdhTQhlhdAAibQgBiaBnhXQBchPCEADQCFADBcBSQBmBbABCVQgBCahmBaQhbBQiDAAIgDAAg");
	this.shape_94.setTransform(7.8,-45.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAADJQhMAAg1gzQg7g3AAhfQAAhdA7g4QA1gyBMgBQBNAAA1AyQA7A4AABeQAABfg7A4Qg0AyhMAAIgCAAg");
	this.shape_95.setTransform(-9.1,-29.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgEgXANgOQAMgPAXgD");
	this.shape_96.setTransform(-28.4,-9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQADgZATgOQASgOAZAA");
	this.shape_97.setTransform(-24.5,-7.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("Ah0BPQg2gdAAgyQAAgxA2geQAvgaBFAAQBFAAAwAbQA2AdgBAxQABAyg2AdQgwAbhFAAQhEAAgwgbg");
	this.shape_98.setTransform(-16.9,-12.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#301105").s().p("AAnJ9Qg5gTgVglQgFgJgDgNQgVAfgkAQQgkAQgxAAQhMAAg/ghQg6gggPgoQgRgwApgoIgFgfQgHg6ABgdQACgzATgeQgkgtgDhDQgDhAAfgwQAWgsAogqQArgtAmgJQgVgqgFgwQgFgwALgsQgBgMAHgJQAVhAA0gxQAFhGAGgkQAHg4APgLQANgVASgGIAIgBQAbAAAaAfQAdAgAPA4QAbgEAZAAQAdAAAfAFQAGgOAFgKQANghAVgZQAggnAoAAIAPACQAkAJAPBAQAKAvAFB5QAnA3AJBDQAJBEgYA/QAnA0AOAoQAUA1gSAoQAUBCgEBFQgEBGgbA+QAMAdAEAZIAAABIABAEIABAFIAAACQAEATgBAUQAAA4gVAyQgWAygnAhQgVAeguARQgtAQg8AAQg5AAgvgQgAgRH2QgiA6A4AnQAzAiBXAAQA0AAApgOQAtgPAUgcQAlgfAUgwQATguAAgyQABgRgDgSIgCgMQgGgegNgcQAdg+AEhHQAEhGgWhCQAUgigSgwQgOgpgsg5QAbg9gIhEQgJhDgog1QgEhwgHgsQgMhBgcgHQgFgCgFAAQgWAAgWATQgaAWgSAsQgIAQgHAYQgmgJgkAAQghAAghAHQgPhBgdghQgVgYgSAAIgDABQgMADgKAUIAAAAQgQABgMCmQg1AwgVBDQgEABAAAFIABADQgOAzAJA0QAIA1AeAsIgMgBQgoAAgwA0QglAngXAqQgcArADA6QABAjAMAdQAMAdAUASQgXAagDAxQgCAfAHA+QADAWADASQhBA3BFA5QBAA2BjAAQA1AAAkgVQApgYAMguIAPgLg");
	this.shape_99.setTransform(4.8,-61.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000003").s().p("AgpAtQgMgMABgeQACgbALgLQAVgVASABQAhAAAOAxQAOAxgWADIgZAHQgOAEgLgBQgTAAgLgLgAgZgVQgGAGAAATQgBAVAGAGQAFAFAKAAQAIAAAagGIAIgCQABgIgCgMQgDgPgHgNQgJgQgLAAQgKAAgPAPg");
	this.shape_100.setTransform(-12.4,-20.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000003").s().p("AgtAWQgMgMAXgXQAQgRASAAQAbAAAQAbQAQAZgWAEQgTAFgYAAQgdAAgKgJgAgUAAIgHAJQAIACANAAQAUAAANgDQgDgHgHgEQgJgHgIAAQgJAAgLAKg");
	this.shape_101.setTransform(-14,-29);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000003").ss(2).p("AgqAHIBVgN");
	this.shape_102.setTransform(-12.4,-19.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000003").ss(2,1).p("AgfAFIA/gJ");
	this.shape_103.setTransform(-24.9,-27.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000003").ss(2,1).p("AgfAFIA/gK");
	this.shape_104.setTransform(-25.5,-30.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000003").ss(2,1).p("AgqAHIBVgN");
	this.shape_105.setTransform(-14.7,-32.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A26615").s().p("AgVC2QgqgFghgpQgegmgOg4QgOg2AHgzQAHg2AbgdQAXAVAdAAQAZAAAYgQQAWgQANgaQAsANAhAtQAgAsAMA6QASBYghA5QglA+hTAAQgQAAgOgCgAiBglQgBAyARAxQAQAsAZAaQAZAaAdAEQAMACAPAAQA+AAAfgmQAUgZAGgmQAGgmgJgsQgKgxgagmQgZglgggQQgSAZgYAOQgZAPgaAAQgaAAgWgOQgTAggBAyg");
	this.shape_106.setTransform(-17.9,-24.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F6D702").s().p("AgVC2QgqgFghgpQgegmgOg4QgOg2AHgzQAHg2AbgdQAiAfAqgOQAngNAVgpQAsANAhAtQAgAsAMA6QAUBggpA7QgmA0hLAAQgOAAgRgCg");
	this.shape_107.setTransform(-17.9,-24.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#F6D702").p("AALAHQgeArgGgeQgBgKABgOQABgOABAAQAVgLAOgCQAfgFggArg");
	this.shape_108.setTransform(-28.1,-57.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FE7030").s().p("AgZAUQgBgKABgOQABgOABAAQAVgLAOgCQAfgFggArQgRAZgKAAQgHAAgCgMg");
	this.shape_109.setTransform(-28.1,-57.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#ED5E4A").ss(1,1).p("AALAPQgWgHABgW");
	this.shape_110.setTransform(-24.4,-40.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("Ag+BkQgggigDg9QgCg8AdglQAagiAngCQAngCAdAfQAgAiACA+QADA8gdAlQgaAignACIgEAAQgkAAgcgeg");
	this.shape_111.setTransform(-24.2,-50.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#F6D702").p("AAVgRQAjApgVASQgVARgigqQgjgoAVgSQAVgRAiApg");
	this.shape_112.setTransform(20.5,-65.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FE7030").s().p("AgUARQgjgoAVgSQAVgRAiApQAjApgVASQgGAFgIAAQgRAAgYgeg");
	this.shape_113.setTransform(20.5,-65.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#ED5E4A").ss(1,1).p("AADATQgNgTAOgS");
	this.shape_114.setTransform(1,-82);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#ED5E4A").ss(1,1).p("AAFAaQgTgaATgZ");
	this.shape_115.setTransform(4.4,-81.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#DDDDDD").ss(2,1).p("AgdAhQAJACAMgIQAXgPAPgs");
	this.shape_116.setTransform(8.8,-79.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAmCjQgxgog1hAQgsg2gSgiQgwAHgZgfQgXgaAFgqQAEgqAcgZQAggdAvAJQArgHA+AiQA5AhA3A4QA3A5AdA5QAgA/gLArQgVBTg2AAQgqAAg9gwg");
	this.shape_117.setTransform(21,-74.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#DDDDDD").s().p("AAmCjQgxgog0hAQgtg2gRgiQgxAHgZgfQgXgbAFgpQAEgqAcgaQAggcAvAJQArgHA+AiQA5AgA3A5QA3A5AeA5QAfA/gLArQgVBTg2AAQgqAAg9gwg");
	this.shape_118.setTransform(20.2,-75.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#DDDDDD").s().p("AAmCjQgxgog0hAQgtg2gRgiQgxAHgZgfQgXgbAFgpQAEgqAcgaQAggcAvAJQArgHA+AiQA5AgA3A5QA3A5AeA5QAfA/gLArQgVBTg2AAQgqAAg9gwg");
	this.shape_119.setTransform(19.2,-72.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000101").s().p("AgPAhIgNgNQALgZAMgRQAUgbANAPQAFAFgSAbQgTAcACAOIAAAAQgGAAgHgHg");
	this.shape_120.setTransform(-11.4,-53.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(0.5,1).p("AiyhIQAUBLCBAtQB8AsBJgiQgIgCgLAE");
	this.shape_121.setTransform(0.4,-60.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#ED5E4A").s().p("AjsCxQhEgjgJhDQgHg9AqhAIAaggIAahQQBtB0CSgOQCVgOBQiKQAdARAcAjQgYAkgnAoQhPBQhNAPQgaCGhZAvQgoAVguAAQg9AAhGgkg");
	this.shape_122.setTransform(7.3,-56.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#ED5E4A").ss(1,1).p("AgFAMIALgX");
	this.shape_123.setTransform(-9.7,-97.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#ED5E4A").ss(1,1).p("AAHANIgMgZ");
	this.shape_124.setTransform(5.7,-98.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#ED5E4A").ss(1,1).p("AgjgKQApgJAdAg");
	this.shape_125.setTransform(26.9,-79.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#ED5E4A").ss(1,1).p("Ai1AZQASAAAigQQAjgQASgBQAUgBAgAJQAuANAEABQA8ALAdgCQAygFASgq");
	this.shape_126.setTransform(1.5,-79.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1,1).p("Ag9APQAdgXAggEQAjgGAbAV");
	this.shape_127.setTransform(9.7,-92.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#ED5E4A").s().p("AAeBQQgbgYgDgBQgmgNgMgFQgRgIgDgbQgEgdAhglQAiglAeAHQAcAGAOBYQAPBXgTAJIgDAAQgJAAgTgQg");
	this.shape_128.setTransform(23.7,-112.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAfBTQhBg5g0ALQAPhmApgvQAggkAgAIQAgAHALBVQAEAkAGCbQgWgfgigdg");
	this.shape_129.setTransform(24.5,-110.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AjFDCQhbhIAAh6QAAh5BbhHQBRhBB0AAQB1AABSBBQBaBHAAB5QAAB5haBJQhSBAh1AAQh0AAhRhAg");
	this.shape_130.setTransform(9.3,-87);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#ED5E4A").s().p("AgvABQALiMAOgCQAjgCAPAgQASAlAKBuQghgKgqA5QgVAdgPAeQADhGAFhHg");
	this.shape_131.setTransform(-6,-108.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AhDAGQAGiJAlgKQATgFAaAiQAlAxAMBjQgpgKgzA5QgaAdgSAeQgEhDADhFg");
	this.shape_132.setTransform(-3.5,-110.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgFglAlgE");
	this.shape_133.setTransform(5.3,-6.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQADgZATgOQARgOAaAA");
	this.shape_134.setTransform(12.2,-2.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("Ah0BPQg2gdABgyQgBgxA2geQAwgaBEAAQBFAAAwAbQA1AdABAxQgBAyg1AdQgwAbhFAAQhEAAgwgbg");
	this.shape_135.setTransform(19.1,-8.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#F6D702").p("AAjAHQgKAwgigHQgjgHAKgvQAKgxAiAIQAjAHgKAvg");
	this.shape_136.setTransform(33.3,-21.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FE7030").s().p("AgJAwQgjgHAKgvQAKgxAiAIQAjAHgKAvQgJAqgbAAIgIgBg");
	this.shape_137.setTransform(33.3,-21.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("Ah4CVQg3g3AAheQAAhdA3g3QAxgyBHAAQBIAAAxAxQA3A4AABdQAABfg3A3QgxAxhIAAQhHAAgxgyg");
	this.shape_138.setTransform(24.9,-21.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AhMBcQgRgOAIggQAJglAlgqQAmgtAhgOQAfgNAQAPQAQAPgJAhQgJAlgkApQglArghAOQgPAGgLAAQgNAAgIgHg");
	this.shape_139.setTransform(-23.4,-62.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#DDDDDD").s().p("AhMBcQgRgOAIggQAJglAlgqQAmgtAhgOQAfgNAQAPQAQAPgJAhQgJAlgkApQglArghAOQgPAGgLAAQgNAAgIgHg");
	this.shape_140.setTransform(-23.4,-62.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAAFUQiKgBhghVQhrhfAAifQAAifBrheQBghVCKgBQCMgBBfBVQBrBeABChQgBChhrBfQheBUiKAAIgDAAg");
	this.shape_141.setTransform(9.3,-47.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#C1C1C1").s().p("AAAFFQiEgBhdhTQhlhdAAibQgBiaBnhXQBchPCEADQCFADBcBSQBmBcABCUQgBCahmBaQhbBQiDAAIgDAAg");
	this.shape_142.setTransform(7.8,-45.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAADJQhMAAg1gzQg7g3AAhfQAAhdA7g4QA1gzBMAAQBNAAA1AyQA7A4AABeQAABfg7A4Qg1AyhLAAIgCAAg");
	this.shape_143.setTransform(-9.1,-29.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgFglAkgE");
	this.shape_144.setTransform(-31.4,-11.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#301105").s().p("AAnJ9Qg5gUgVgkQgGgKgCgMQgVAegkARQgkAQgxAAQhMAAg/giQg6gfgPgpQgRguApgpIgFgfQgHg6ABgdQACgzATgfQgkgsgDhBQgEhBAggxQASggAYgdQA0g8AygRQgVgrgGgwQgFgwALguQgBgLAHgJQAXhBAygwQAFhHAGgjQAHg4APgLQANgWASgFIAIgBQAbAAAaAfQAcAfAQA5QAbgEAZAAQAdAAAfAFQAGgOAFgKQANghAVgYQAggoAoAAIAPACQAkAJAPA/QAKAwAFB5QApA5AIBHQAIBGgcBAQAnAfARAhQAaAzgaAzQAXBEgEBIQgDBIgcBBQALAaAFAcIAAABIABAEIABAFIAAACQAEATgBAUQABA4gWAyQgWAygnAgQgVAeguARQgtARg8AAQg5AAgvgQgAgRH1QgiA7A4AnQAzAiBXAAQA0AAApgOQAtgQAUgbQAlgfAUgwQAUgugBgzQABgQgDgTIgCgLQgGgfgNgbQAehBADhJQADhJgYhDIABgCQAZgqgSgpQgQgkgzgnQAgg+gGhHQgHhHgrg4QgEhwgHgsQgMhCgcgHIgKgBQgWAAgWATQgaAWgSAsQgIAQgHAYQglgJglAAQgiAAggAHQgPhBgdghQgVgYgSAAIgDAAQgMAEgKATIAAAAQgQACgMCmQg1AwgVBCQgEACAAAEIABAEQgOAyAJA1QAIA1AeAsIgIgBQgVAAgfAVQgfAUgdAiQgZAdgPAdQgeAuAFBAQAFBAAoAmQgXAagDAxQgCAfAHA+QADAWADASQhBA3BFA5QBAA2BjAAQA1AAAkgVQApgYAMgvIAPgLg");
	this.shape_145.setTransform(4.8,-61.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000003").s().p("AgpAtQgMgMABgdQACgcALgLQAVgVASAAQAhAAAOAzQAOAvgWAFIgZAGQgOAEgLAAQgTAAgLgMgAgZgVQgGAGAAAUQgBAUAGAGQAEAGALgBQAIABAagHIAIgCQABgIgCgNQgDgPgHgMQgKgQgKAAQgKAAgPAPg");
	this.shape_146.setTransform(-12.4,-20.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000003").s().p("AgtAWQgMgMAXgXQAQgRASAAQAbAAAQAbQAQAZgWAEQgVAFgWAAQgdAAgKgJgAgUAAIgHAIQAKADALAAQAPAAASgDQgDgHgHgEQgJgHgIAAQgJAAgLAKg");
	this.shape_147.setTransform(-14,-29);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000003").ss(2,1).p("AgKg6IAVB1");
	this.shape_148.setTransform(-21.1,-19.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000003").ss(2,1).p("AgfAFIA/gJ");
	this.shape_149.setTransform(-25.5,-30.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#A26615").s().p("AgVC2QgqgGghgpQgeglgOg4QgOg2AHgzQAHg2AbgdQAXAVAdAAQAZAAAYgRQAWgPANgaQAsAMAhAuQAgAsAMA6QASBXghA6QglA+hTAAQgQAAgOgCgAiBglQgBAyARAxQAQAsAZAaQAZAbAdADIAbACQA+AAAfgmQAUgZAGgmQAGgmgJgsQgKgxgagmQgZgmgggPQgSAZgYAPQgZAOgaAAQgYAAgYgNQgTAegBAzg");
	this.shape_150.setTransform(-17.9,-24.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#F6D702").p("AAKAHQgeArgFgeQABgmAAAAQAVgLAOgCQAfgFggArg");
	this.shape_151.setTransform(-28,-57.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FE7030").s().p("AgZAUIABgmQAVgLAOgCQAfgFggArQgRAZgJAAQgHAAgCgMg");
	this.shape_152.setTransform(-28,-57.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#ED5E4A").ss(1,1).p("AALAPQgWgGABgX");
	this.shape_153.setTransform(-24.4,-40.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#ED5E4A").ss(1,1).p("AAPAVQgegKABgf");
	this.shape_154.setTransform(-21.1,-42);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("Ag+BkQgggigDg9QgCg8AdglQAagiAngCQAngCAdAfQAgAiACA+QADA9gdAlQgaAhgnACIgEAAQgkAAgcgeg");
	this.shape_155.setTransform(-24.2,-50.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#F6D702").p("AANgXQAsAZgKAZQgKAagygdQgqgYAJgaQAJgaAyAdg");
	this.shape_156.setTransform(20.6,-63);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FE7030").s().p("AgNAYQgqgYAJgaQAJgaAyAdQAsAZgKAZQgFAMgNAAQgQAAgagPg");
	this.shape_157.setTransform(20.6,-63);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#ED5E4A").ss(1,1).p("AAHASQgSgNAHgW");
	this.shape_158.setTransform(-3.1,-71.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#ED5E4A").ss(1,1).p("AAKAZQgagTAKge");
	this.shape_159.setTransform(0.5,-71.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#DDDDDD").ss(2,1).p("AgQApQAJgBAIgLQARgXgBgu");
	this.shape_160.setTransform(4.8,-71.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("ABSCVQg6gVhCgrQg4gjgcgbQgsAYgigUQgfgSgJgoQgKgoASgiQAUgmAvgHQAogXBJAMQBCALBIAlQBIAlAuAwQAxAzAAAvQgCBhhQAAQgjAAgygSg");
	this.shape_161.setTransform(17.9,-71.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#DDDDDD").s().p("ABSCVQg6gVhCgrQg4gjgcgbQgsAYgigUQgfgSgJgoQgKgoASgiQAUgmAvgHQAogXBJAMQBCALBIAlQBIAlAuAwQAxAzAAAvQgCBhhQAAQgjAAgygSg");
	this.shape_162.setTransform(16.7,-72.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#DDDDDD").s().p("ABSCVQg6gVhCgrQg4gjgcgbQgsAYgigUQgfgSgJgoQgKgoASgiQAUgmAvgHQAogXBJAMQBCALBIAlQBIAlAuAwQAxAzAAAvQgCBhhQAAQgjAAgygSg");
	this.shape_163.setTransform(16.7,-69.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000101").s().p("AgPAhIgNgNQAKgYANgSQAUgbANAPQAFAFgSAbQgTAcACAOIAAAAQgGAAgHgHg");
	this.shape_164.setTransform(-11.4,-53.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F6D702").s().p("AgyA2QgYgUAAgiQAAghAYgVQAVgSAdAAQAeAAAVASQAYAVAAAhQAAAigYAUQgVATgeAAQgdAAgVgTg");
	this.shape_165.setTransform(-8.1,-56.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFFFFF").ss(0.5,1).p("AiyhIQAUBLCBAuQB8ArBJgiQgIgCgLAE");
	this.shape_166.setTransform(0.4,-60.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#ED5E4A").s().p("AjsCxQhEgjgJhDQgHg8AqhBIAaggIAahQQBtB0CSgOQCVgOBQiKQAdARAcAjQgYAlgnAnQhPBQhNAPQgaCGhZAvQgoAVguAAQg9AAhGgkg");
	this.shape_167.setTransform(7.3,-56.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#ED5E4A").ss(1,1).p("Ai1AZQASAAAigQQAjgQASgBQAUgBAgAJQAuANAEABQA8AMAdgDQAygFASgp");
	this.shape_168.setTransform(1.5,-79.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#ED5E4A").s().p("AAeBQQgbgYgDgBQgmgNgMgFQgRgHgDgbQgEgeAhgkQAigmAeAHQAcAGAOBYQAPBXgTAJIgDAAQgJAAgTgQg");
	this.shape_169.setTransform(23.7,-112.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AhDAGQAFiJAlgKQATgFAaAiQAmAxALBjQgogKgzA5QgaAdgSAeQgEhDADhFg");
	this.shape_170.setTransform(-3.4,-110.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgEgXANgOQAMgOAXgE");
	this.shape_171.setTransform(8.3,-4.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("Ah4CVQg3g3AAheQAAhdA3g3QAxgyBHAAQBIAAAxAyQA3A3AABdQAABfg3A3QgxAxhIAAQhHAAgxgyg");
	this.shape_172.setTransform(24.9,-21.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAAFUQiKgBhghVQhrhfAAifQAAifBrheQBghVCKgBQCMAABfBUQBrBeABChQgBChhrBfQheBUiKAAIgDAAg");
	this.shape_173.setTransform(9.3,-47.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQADgZATgOQARgPAaAB");
	this.shape_174.setTransform(-24.5,-7.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#301105").s().p("AAmJ9Qg5gUgVgkQgGgOgCgIQgUAeglAQQgkARgxAAQhMAAg/giQg5gfgQgpQgRguApgpIgFgfQgHg6ABgdQACgzATgeQgkgtgDhBQgDhBAfgxQAYgtAmgpQAqgsAngKQgUgrgGgvQgFgwALgtQgBgLAHgJQAXhBAygwQAFhCAGgoQAEgeAFgOQAFgQAIgHQAQgdAZAAQAeAAAdAuQATAeAQAsQAbgEAaAAQAhAAAcAFQAEgMAGgMQARgnAYgaQAdgeAhAAQAUAAATAMQAeATAKA6QAHAogCBUIAAAcQAnA3AJBEQAJBEgYA+QBXAtgPBVIgEAXQgEAVgIAQQATBBgEBEQgEBEgbA9QALAaAFAcIABABIABAJIAAACQAFATgCAUQABA4gWAyQgWAygmAhQgWAdguARQguARg6AAQg5AAgwgQgAgRH2QgjA6A4AnQAzAiBYAAQAzAAAqgOQAsgQAUgcQAlgeAUgwQAUgugBgyQACgSgEgSIgBgHIgBgEQgGgegNgcQAdg9AEhGQAEhFgUhAQAKgQADgXIAEgWQAHgqgVgeQgUgagsgTQAeg+gHhGQgIhEgqg4QAChGgCguQgFhVgegSQgOgJgPAAQgbAAgZAcQgTAWgOAhQgJASgGAWQglgJglAAQghAAghAHQgGgagWgqQgeg3gXAAQgPAAgLAYIgBAAQgPACgNCmQg1AwgVBCQgEACAAAEIABAEQgOAyAJA1QAJA1AdAsIgMgBQgoAAgwA0QglAngXAqQgeAuAFA/QAGBBAnAmQgXAagDAxQgCAfAHA+IAHAoQhBA4BEA5QBAA1BjAAQA1AAAlgVQAogYAMgvIAQgKg");
	this.shape_175.setTransform(4.9,-61.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000003").s().p("AgpAtQgMgNABgdQABgbAMgLQAUgUATAAQAhAAAOAyQAOAwgWAEQgmAJgMAAQgUAAgKgLgAgZgVQgGAGgBATQAAAVAGAGQAEAFALAAQALAAAXgGIAHgCQACgHgCgOQgDgOgIgNQgJgPgKAAQgLAAgOAOg");
	this.shape_176.setTransform(-12.4,-20.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000003").s().p("AgtAWQgMgMAXgXQARgRARAAQAbAAAQAbQAQAZgWAEQgUAFgXAAQgdAAgKgJgAgTAAIgIAJQAIACANAAQAPAAASgDQgDgHgHgEQgIgHgJAAQgKAAgJAKg");
	this.shape_177.setTransform(-14,-29);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#A26615").s().p("AgVC2QgqgFghgqQgeglgOg4QgOg2AGgzQAHg3AcgdQAXAWAcAAQAaAAAXgQQAWgQAOgaQArAMAiAuQAgAsAMA6QASBYgiA5QgkA+hUAAgAiCglQgBAyASAxQAQArAZAbQAYAbAdADQAOACANAAQA+AAAggmQAUgZAGgmQAGgmgKgsQgJgxgagmQgZgmghgPQgRAZgYAOQgZAPgbAAQgZAAgWgOQgTAggCAyg");
	this.shape_178.setTransform(-17.9,-24.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F6D702").s().p("AgVC2QgqgFghgqQgeglgOg4QgOg2AGgzQAHg3AcgdQAhAgArgOQAngNAVgpQArAMAiAuQAgAsAMA6QAUBggpA6QgmA1hMAAQgOAAgQgCg");
	this.shape_179.setTransform(-17.9,-24.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#F6D702").p("AALAHQgfArgFgeQABgmAAAAQAVgLAOgCQAfgFgfArg");
	this.shape_180.setTransform(-28,-57.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FE7030").s().p("AgZAUIABgmQAVgLAOgCQAfgFgfArQgSAZgJAAQgHAAgCgMg");
	this.shape_181.setTransform(-28,-57.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("Ag+BkQgggigDg9QgCg8AdglQAagiAngCQAngCAdAfQAgAiADA+QACA8gdAlQgaAignACIgEAAQgkAAgcgeg");
	this.shape_182.setTransform(-24.2,-50.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#F6D702").p("AAFgaQA1AJgEAaQgFAbg1gJQg1gJAEgaQAFgbA1AJg");
	this.shape_183.setTransform(23,-60.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FE7030").s().p("AgEAbQg1gJAEgaQAFgbA1AJQA1AJgEAaQgEAUgeAAQgLAAgNgCg");
	this.shape_184.setTransform(23,-60.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#ED5E4A").ss(1,1).p("AAMAPQgWgFgBgY");
	this.shape_185.setTransform(-2,-60);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#ED5E4A").ss(1,1).p("AAQAUQgegHgBgg");
	this.shape_186.setTransform(1.2,-61.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#DDDDDD").ss(2,1).p("AgHAtQAHgFAFgNQAIgbgRgs");
	this.shape_187.setTransform(5.8,-63);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AB6B9Qg+AAhLgRQhAgOgjgPQghAlgngHQgigGgXgjQgXgjAFglQAGgrApgWQAdgjBJgNQBEgNBQAKQBSAKA7AeQBBAgAOAuQAnB/iqAAIgDAAg");
	this.shape_188.setTransform(17.8,-68.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#DDDDDD").s().p("AB6B9Qg+AAhLgRQg/gOgkgPQghAlgngGQgigGgXgjQgXgjAFglQAGgrApgXQAdgiBJgOQBEgMBQAKQBSAKA7AdQBBAgAOAuQAmB/iqAAIgCAAg");
	this.shape_189.setTransform(17.4,-69.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#DDDDDD").s().p("AB6B9Qg+AAhLgRQg/gOgkgPQghAlgngGQgigGgXgjQgXgjAFglQAGgrApgXQAdgiBJgOQBEgMBQAKQBSAKA7AdQBBAgAOAuQAmB/iqAAIgCAAg");
	this.shape_190.setTransform(17.4,-66.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000101").s().p("AgPAhIgNgNQALgZAMgRQATgbAOAPQAFAFgSAbQgTAcACAOIgBAAQgFAAgHgHg");
	this.shape_191.setTransform(-11.3,-53.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F6D702").s().p("AgzA2QgXgUAAgiQAAghAXgVQAWgRAdgBQAeABAVARQAYAVAAAhQAAAigYAUQgVATgegBQgdABgWgTg");
	this.shape_192.setTransform(-8.1,-56.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFFFFF").ss(0.5,1).p("AiyhIQAUBMCBAtQB8ArBJgiQgKgBgJAD");
	this.shape_193.setTransform(0.4,-60.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#ED5E4A").s().p("AjsCxQhEgjgJhDQgIg9ArhBIAZgfIAbhQQBsB0CTgOQCVgOBQiKQAcARAdAjQgYAkgoAoQhPBQhMAPQgaCGhZAvQgoAVguAAQg9AAhGgkg");
	this.shape_194.setTransform(7.3,-56.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#ED5E4A").ss(1,1).p("AgigLQAogHAdAf");
	this.shape_195.setTransform(26.9,-79.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#ED5E4A").ss(1,1).p("AgvAJQAUgPAbgCQAXgCAZAK");
	this.shape_196.setTransform(26.5,-85.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#ED5E4A").ss(1,1).p("Ai1AYQASAAAigPQAjgQASgBQAUgBAgAJQAtANAFABQA7AMAdgDQAygFASgp");
	this.shape_197.setTransform(1.5,-79.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(1,1).p("AAlAQQgMgXgUgHQgUgGgVAP");
	this.shape_198.setTransform(-15.6,-93);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(1,1).p("Ag9APQAdgXAggFQAjgFAaAU");
	this.shape_199.setTransform(9.8,-92.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#ED5E4A").s().p("AAfBQIgfgaQgmgMgLgFQgRgHgEgcQgEgdAhglQAiglAeAHQAcAGAPBYQAOBXgTAJIgEAAQgIAAgSgQg");
	this.shape_200.setTransform(23.7,-112.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAfBTQhBg5g0ALQAPhmAqgvQAfglAgAIQAgAIALBUQAEAkAGCcQgWgfgigdg");
	this.shape_201.setTransform(24.5,-110.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#ED5E4A").s().p("AgvABQAMiNAOgBQAigCAPAgQASAlAKBuQghgKgqA5QgVAdgPAeQADhGAFhHg");
	this.shape_202.setTransform(-6,-108.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AhDAHQAGiJAlgLQASgFAaAjQAmAwAMBkQgpgLgzA5QgaAdgSAfQgEhDADhFg");
	this.shape_203.setTransform(-3.4,-110.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQAEgZASgOQARgPAaAB");
	this.shape_204.setTransform(12.2,-2.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("Ah0BPQg2gdAAgyQAAgxA2gdQAwgbBEAAQBFAAAwAbQA2AdAAAxQAAAyg2AdQgwAbhFAAQhEAAgwgbg");
	this.shape_205.setTransform(19.1,-8.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#F6D702").p("AAjAHQgKAxgigIQgjgHAKgvQAKgwAiAHQAjAHgKAvg");
	this.shape_206.setTransform(33.3,-21.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FE7030").s().p("AgJAwQgjgHAKgvQAKgwAiAHQAjAHgKAvQgIAqgbAAIgJgBg");
	this.shape_207.setTransform(33.3,-21.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("Ah4CVQg3g4AAhdQAAhdA3g3QAygyBGAAQBIgBAxAyQA3A3AABeQAABeg3A4QgxAxhIAAQhGAAgygyg");
	this.shape_208.setTransform(25,-21.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#C1C1C1").s().p("AiGCXQg9g4AAhfQAAheA9g4QA3gzBPAAQBQAAA3AyQA9A4AABfQAABgg9A4Qg3AyhQAAQhPAAg3gzg");
	this.shape_209.setTransform(22.9,-21.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#DDDDDD").s().p("AiNA9IB+jJICdAdIgzBPQgyBdAEBQQh6gvhAghg");
	this.shape_210.setTransform(-5.4,-27.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AhNBcQgRgOAIghQAJgkAlgqQAngtAhgOQAfgNAQAPQAQAPgJAhQgJAlgkApQglArghAOQgPAGgMAAQgMAAgJgHg");
	this.shape_211.setTransform(-23.3,-62.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#DDDDDD").s().p("AhNBcQgRgOAIghQAJgkAlgqQAngtAhgOQAfgNAQAPQAQAPgJAhQgJAlgkApQglArghAOQgPAGgMAAQgMAAgJgHg");
	this.shape_212.setTransform(-23.3,-62.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAAFUQiKAAhghVQhrhfAAigQAAieBrhfQBghWCKAAQCLgBBgBVQBrBeAAChQAAChhrBfQhfBUiJAAIgDAAg");
	this.shape_213.setTransform(9.3,-47.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#C1C1C1").s().p("AAAFFQiEgBhchTQhmhdAAibQAAiaBmhXQBchPCEADQCFADBcBSQBmBbAACVQAACahmBaQhbBQiDAAIgDAAg");
	this.shape_214.setTransform(7.8,-45.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AiBCXQg7g4AAhfQAAhdA7g5QA1gxBMgBQBNAAA1AyQA7A4AABeQAABfg7A4Qg1AyhNAAQhMAAg1gyg");
	this.shape_215.setTransform(-9.1,-29.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgFgkAkgF");
	this.shape_216.setTransform(-31.4,-11.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQAEgZASgOQARgPAaAB");
	this.shape_217.setTransform(-24.5,-7.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("Ah0BPQg2gdAAgyQAAgxA2gdQAwgbBEAAQBFAAAwAbQA2AdAAAxQAAAyg2AdQgwAbhFAAQhEAAgwgbg");
	this.shape_218.setTransform(-16.9,-12.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#301105").s().p("AAnJ8Qg5gTgVglQgGgKgCgLQgVAegkAQQglARgwAAQhMAAg/giQg6gfgPgpQgSguAqgpQgDgPgCgQQgHg6ABgdQACgzATgfQglgtgChCQgDhBAfgwQAPgdAbgfQAYgdAcgUQAagUAYgIQgVgrgGgwQgGgwAMguQgBgMAHgIQAWhBAzgwQAEg3AGgzQAFgdAEgPQAGgRAIgGQAMgWATgFIAIgBQAaAAAbAeQAdAhAPA4QAXgEAdAAQAhAAAbAFQAFgNAGgLQAQgoAZgZQAdgeAgAAQAVAAATAMQAeASAKA7QAHApgCBTIAAAcQAnA2AJBCQAJBCgWA+QAxAZAJA9IADAXQAGArgRAeQAWBDgDBIQgDBHgdBBQALAYAGAdIAAACIABADIABAGIAAACQAEATgBAUQAAA4gVAyQgWAygnAgQgWAegtARQguAQg7AAQg5AAgvgQgAgRH1QgiA7A4AmQAzAiBXAAQA0AAApgOQAtgPATgcQAmgeAUgwQAUgugBgzQABgRgEgSIgCgMQgGgegNgbQAfhAADhKQADhIgYhEQATgagGgqIgDgXQgIg6g4gUQAcg9gIhEQgIhEgpg2QAChHgDgtQgFhVgegSQgOgJgPAAQgaAAgZAcQgUAXgNAgQgIAPgHAYQgjgIgnAAQgkAAgeAHQgQhBgdghQgVgYgRAAIgDAAQgMADgKAUIAAAAQgQABgMCnQg2AwgVBCQgDACAAAEIABADQgOAzAJA1QAIA1AdAsIgHgBQgVAAgfAUQgfAVgdAiQgYAbgQAfQgcArADA6QABAiAMAeQAMAcATATQgXAagDAxQgCAfAIA+IAGAoQhBA3BFA5QBAA2BjAAQA1AAAkgVQApgYALgvIAQgLg");
	this.shape_219.setTransform(4.8,-61.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000003").s().p("AgpAtQgMgNABgdQABgbAMgLQAUgUATAAQAhAAAOAyQAOAwgWAEQgnAJgLAAQgUAAgKgLgAgZgVQgGAGgBATQAAAVAGAGQAFAFAKAAQALAAAXgGIAIgCQABgIgCgNQgDgPgIgMQgJgPgKAAQgKAAgPAOg");
	this.shape_220.setTransform(-12.4,-20.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000003").s().p("AgtAWQgMgLAXgYQARgRARAAQAbAAAQAbQAQAZgWAFQgTAEgXAAQgeAAgKgJgAgTAAIgIAJQAIACAOAAQAPAAARgDQgDgHgHgFQgIgGgJAAQgJAAgKAKg");
	this.shape_221.setTransform(-14.1,-29.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000003").ss(2,1).p("AgfAGIA/gK");
	this.shape_222.setTransform(-24.9,-27.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#A26615").s().p("AgVC2QgqgFghgqQgeglgOg4QgOg2AGgzQAHg3AcgdQAXAWAcAAQAaAAAXgRQAWgQAOgZQAsAMAhAuQAgAsAMA6QASBYghA5QglA+hTAAgAiBglQgCAyASAxQAQAsAZAaQAZAbAdADIAbACQA+AAAfgmQAUgZAGgmQAGgmgJgsQgKgxgagmQgZgmghgPQgRAZgYAOQgZAPgbAAQgZAAgWgOQgTAggBAyg");
	this.shape_223.setTransform(-17.9,-24.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#F6D702").s().p("AgVC2QgqgFghgqQgeglgOg4QgOg2AGgzQAHg3AcgdQAhAgArgOQAngNAVgpQAsAMAhAuQAgAsAMA6QAUBggpA6QgmA1hLAAQgOAAgRgCg");
	this.shape_224.setTransform(-17.9,-24.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#F6D702").p("AALAHQgfAsgFgfQABgmAAABQAVgMAOgCQAfgEgfAqg");
	this.shape_225.setTransform(-28.1,-57.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FE7030").s().p("AgZAUIABglQAVgMAOgCQAfgEgfAqQgSAZgJAAQgHAAgCgMg");
	this.shape_226.setTransform(-28.1,-57.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("Ag+BkQgggigCg9QgDg8AdglQAagiAngCQAngCAdAfQAgAiACA+QADA8gcAlQgbAigoACIgDAAQgkAAgcgeg");
	this.shape_227.setTransform(-24.2,-50.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#F6D702").p("AgDgaQA1gIAEAbQAEAbg2AHQg1AIgEgbQgEgbA2gHg");
	this.shape_228.setTransform(24.1,-58.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FE7030").s().p("Ag1AHQgEgaA2gHQA1gIAEAbQAEAag2AIIgVACQghAAgDgWg");
	this.shape_229.setTransform(24.1,-58.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#ED5E4A").ss(1,1).p("AAQAKQgXADgIgW");
	this.shape_230.setTransform(0.3,-50.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#ED5E4A").ss(1,1).p("AAWAOQgfADgMge");
	this.shape_231.setTransform(2.9,-53.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#DDDDDD").ss(2,1).p("AAJArQAGgHAAgOQAAgbgdgl");
	this.shape_232.setTransform(6.6,-55.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AjcB/QghgagGglQgIgqAhgiQARgoA/gjQA8ghBOgRQBPgQBBAIQBIAJAfAmQBZBtiqA4Qg8AThQAJQhCAHglgEQgUAtgnAFIgLABQgdAAgcgWg");
	this.shape_233.setTransform(17.4,-64.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#DDDDDD").s().p("AjbB/QghgagHglQgIgqAhgiQARgpA/gjQA8ggBOgRQBQgQBBAIQBHAJAfAmQBZBtiqA4Qg8AThQAJQhCAHglgEQgUAtgnAFIgKABQgeAAgbgWg");
	this.shape_234.setTransform(16.7,-64.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#DDDDDD").s().p("AjbB/QghgagHglQgIgqAhgiQARgpA/gjQA8ggBOgRQBQgQBBAIQBHAJAfAmQBZBtiqA4Qg8AThQAJQhCAHglgEQgUAtgnAFIgKABQgeAAgbgWg");
	this.shape_235.setTransform(17.7,-61.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000101").s().p("AgPAhIgNgNQALgZAMgRQATgbAOAOQAFAGgSAbQgTAdACANIgBABQgFAAgHgIg");
	this.shape_236.setTransform(-11.4,-53.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#F6D702").s().p("AgzA3QgXgVAAgiQAAghAXgUQAWgTAdABQAfgBAVATQAXAUAAAhQAAAigXAVQgVASgfAAQgdAAgWgSg");
	this.shape_237.setTransform(-8.1,-56.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#FFFFFF").ss(0.5,1).p("AizhIQAUBMCBAtQB8ArBKgiQgLgBgIAD");
	this.shape_238.setTransform(0.4,-60.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#ED5E4A").s().p("AjsCxQhEgjgJhDQgIg9ArhBIAZgfIAbhQQBtB0CSgOQCVgOBQiKQAcARAdAjQgYAkgoAoQhPBQhMAPQgaCGhZAvQgoAVguAAQg8AAhHgkg");
	this.shape_239.setTransform(7.3,-56.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#ED5E4A").ss(1,1).p("AACAPIgCgd");
	this.shape_240.setTransform(-12.2,-98);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#ED5E4A").ss(1,1).p("AgigLQApgHAcAf");
	this.shape_241.setTransform(26.8,-80);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#ED5E4A").s().p("AAfBQQgcgYgDgCIgxgRQgSgIgDgbQgEgdAhglQAiglAeAGQAcAHAPBYQAOBXgTAJIgDABQgJAAgSgRg");
	this.shape_242.setTransform(23.6,-112.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AAfBTQhCg5g0ALQAQhmApgvQAgglAhAIQAfAIALBUQAEAlAGCbQgWgfgigdg");
	this.shape_243.setTransform(24.5,-110.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AjGDBQhahHAAh6QAAh5BahIQBRhAB1AAQB1ABBRA/QBbBJAAB4QAAB6hbBHQhRBBh1AAQh1AAhRhBg");
	this.shape_244.setTransform(9.3,-87.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#ED5E4A").s().p("AgvABQALiNAPgBQAigCAQAgQARAlALBuQgigKgqA5QgWAdgPAeQADhGAGhHg");
	this.shape_245.setTransform(-6,-108.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AhDAHQAGiJAlgLQATgFAZAjQAmAwAMBkQgpgLgzA5QgaAdgSAfQgEhDADhFg");
	this.shape_246.setTransform(-3.5,-110.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#F6D702").p("AAjAHQgKAxgigIQgigHAJgvQAKgwAiAHQAjAHgKAvg");
	this.shape_247.setTransform(33.2,-21.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FE7030").s().p("AgJAwQgigHAJgvQAKgwAiAHQAjAHgKAvQgJAqgaAAIgJgBg");
	this.shape_248.setTransform(33.2,-21.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("Ah4CVQg3g4AAhdQAAhdA3g3QAxgyBHAAQBHgBAyAyQA3A3AABeQAABeg3A4QgyAxhHAAQhHAAgxgyg");
	this.shape_249.setTransform(24.9,-21.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#C1C1C1").s().p("AiFCXQg+g4AAhfQAAheA+g4QA3gzBOAAQBPAAA4AzQA9A4AABeQAABgg9A4Qg4AyhPAAQhOAAg3gzg");
	this.shape_250.setTransform(22.9,-21.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#DDDDDD").s().p("AiNA+IB+jKICdAdIgzBOQgyBeAEBQQh5gvhBggg");
	this.shape_251.setTransform(-5.4,-28);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AhNBcQgQgOAIghQAJgkAlgqQAmgtAhgOQAfgNAQAPQAQAPgJAhQgJAlgkApQglArghAOQgPAGgMAAQgMAAgJgHg");
	this.shape_252.setTransform(-23.4,-62.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#DDDDDD").s().p("AhNBcQgQgOAIghQAJgkAlgqQAmgtAhgOQAfgNAQAPQAQAPgJAhQgJAlgkApQglArghAOQgPAGgMAAQgMAAgJgHg");
	this.shape_253.setTransform(-23.4,-62.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AAAFUQiKAAhghWQhrheAAigQAAieBrhfQBghVCKgBQCMgBBfBVQBsBeAAChQAACihsBeQhfBUiKAAIgCAAg");
	this.shape_254.setTransform(9.3,-47.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AiBCWQg7g4AAheQAAheA7g3QA1gzBMAAQBNAAA1AyQA7A4AABeQAABgg7A3Qg1AyhNAAQhMgBg1gyg");
	this.shape_255.setTransform(-9.1,-29.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgFgkAlgF");
	this.shape_256.setTransform(-31.4,-11.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("Ah0BQQg1gegBgyQABgxA1geQAwgaBEAAQBFAAAwAaQA2AegBAxQABAyg2AeQgwAahFAAQhEAAgwgag");
	this.shape_257.setTransform(-16.9,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60,p:{x:-16.9,y:-12.3}},{t:this.shape_59},{t:this.shape_58,p:{y:-9.1}},{t:this.shape_57,p:{y:-11.8,x:-31.4}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{y:-28}},{t:this.shape_50},{t:this.shape_49,p:{y:-21.6}},{t:this.shape_48,p:{y:-21.9}},{t:this.shape_47,p:{y:-21.9}},{t:this.shape_46},{t:this.shape_45,p:{y:-2.9,x:12.2}},{t:this.shape_44,p:{y:-4.4}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{y:-87.1}},{t:this.shape_39,p:{y:-110.9}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{y:-93.1}},{t:this.shape_35},{t:this.shape_34,p:{y:-85.5}},{t:this.shape_33,p:{y:-80}},{t:this.shape_32,p:{y:-99}},{t:this.shape_31},{t:this.shape_30,p:{y:-97.6}},{t:this.shape_29,p:{y:-98}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{y:-56.3}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{y:-50.5}},{t:this.shape_16,p:{y:-42.1}},{t:this.shape_15,p:{y:-40.7}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{y:-24.4}},{t:this.shape_11,p:{y:-24.4}},{t:this.shape_10,p:{y:-32.7,x:-14.7}},{t:this.shape_9,p:{y:-30.8}},{t:this.shape_8,p:{y:-27.7}},{t:this.shape_7,p:{y:-20.2}},{t:this.shape_6,p:{x:-25.9,y:-19.4}},{t:this.shape_5},{t:this.shape_4,p:{x:-12.4,y:-20}},{t:this.shape_3,p:{y:-20}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96,p:{x:-28.4,y:-9}},{t:this.shape_57,p:{y:-11.7,x:-31.4}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_51,p:{y:-27.9}},{t:this.shape_90,p:{y:-21.8}},{t:this.shape_49,p:{y:-21.5}},{t:this.shape_48,p:{y:-21.8}},{t:this.shape_47,p:{y:-21.8}},{t:this.shape_60,p:{x:19.1,y:-8.1}},{t:this.shape_45,p:{y:-2.8,x:12.2}},{t:this.shape_44,p:{y:-4.3}},{t:this.shape_89,p:{x:5.3,y:-6.3}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_36,p:{y:-93}},{t:this.shape_82},{t:this.shape_81,p:{y:-85.4}},{t:this.shape_33,p:{y:-79.9}},{t:this.shape_80},{t:this.shape_79,p:{x:8.1,y:-99.4}},{t:this.shape_30,p:{y:-97.5}},{t:this.shape_29,p:{y:-97.9}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_26,p:{y:-56.2}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_17,p:{y:-50.4}},{t:this.shape_16,p:{y:-42}},{t:this.shape_15,p:{y:-40.6}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_12,p:{y:-24.3}},{t:this.shape_11,p:{y:-24.3}},{t:this.shape_10,p:{y:-32.6,x:-14.7}},{t:this.shape_9,p:{y:-30.7}},{t:this.shape_8,p:{y:-27.6}},{t:this.shape_7,p:{y:-20.1}},{t:this.shape_65,p:{y:-19.3,x:-25.9}},{t:this.shape_6,p:{x:-21.1,y:-19.9}},{t:this.shape_4,p:{x:-12.5,y:-19.9}},{t:this.shape_64,p:{y:-19.9}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},2).to({state:[{t:this.shape_60,p:{x:-16.9,y:-12.1}},{t:this.shape_45,p:{y:-7.4,x:-24.5}},{t:this.shape_96,p:{x:-28.4,y:-9}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{y:-45.1}},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_51,p:{y:-27.9}},{t:this.shape_90,p:{y:-21.7}},{t:this.shape_138},{t:this.shape_137,p:{y:-21.7}},{t:this.shape_136,p:{y:-21.7}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_44,p:{y:-4.3}},{t:this.shape_133,p:{y:-6.2}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127,p:{y:-92.3}},{t:this.shape_36,p:{y:-93}},{t:this.shape_126},{t:this.shape_34,p:{y:-85.4}},{t:this.shape_125,p:{y:-79.9}},{t:this.shape_124},{t:this.shape_79,p:{x:8.2,y:-99.3}},{t:this.shape_123},{t:this.shape_29,p:{y:-97.9}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_26,p:{y:-56.2}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_16,p:{y:-42}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104,p:{x:-25.5,y:-30.7}},{t:this.shape_103,p:{x:-24.9,y:-27.6}},{t:this.shape_7,p:{y:-20}},{t:this.shape_65,p:{y:-19.2,x:-25.9}},{t:this.shape_6,p:{x:-21.1,y:-19.9}},{t:this.shape_102},{t:this.shape_3,p:{y:-19.9}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},2).to({state:[{t:this.shape_60,p:{x:-16.9,y:-12.2}},{t:this.shape_174},{t:this.shape_58,p:{y:-9}},{t:this.shape_89,p:{x:-31.4,y:-11.7}},{t:this.shape_143},{t:this.shape_142,p:{y:-45.2}},{t:this.shape_173},{t:this.shape_140},{t:this.shape_139},{t:this.shape_51,p:{y:-27.9}},{t:this.shape_90,p:{y:-21.8}},{t:this.shape_172},{t:this.shape_137,p:{y:-21.8}},{t:this.shape_136,p:{y:-21.8}},{t:this.shape_135},{t:this.shape_45,p:{y:-2.8,x:12.2}},{t:this.shape_171},{t:this.shape_133,p:{y:-6.3}},{t:this.shape_170},{t:this.shape_131},{t:this.shape_86},{t:this.shape_39,p:{y:-110.8}},{t:this.shape_169},{t:this.shape_127,p:{y:-92.4}},{t:this.shape_36,p:{y:-93}},{t:this.shape_168},{t:this.shape_34,p:{y:-85.4}},{t:this.shape_125,p:{y:-80}},{t:this.shape_80},{t:this.shape_79,p:{x:8.2,y:-99.4}},{t:this.shape_123},{t:this.shape_29,p:{y:-97.9}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153,p:{x:-24.4,y:-40.6}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_12,p:{y:-24.3}},{t:this.shape_150},{t:this.shape_105},{t:this.shape_149},{t:this.shape_103,p:{x:-24.9,y:-27.6}},{t:this.shape_7,p:{y:-20.1}},{t:this.shape_6,p:{x:-25.9,y:-19.3}},{t:this.shape_148},{t:this.shape_102},{t:this.shape_3,p:{y:-19.9}},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},2).to({state:[{t:this.shape_218},{t:this.shape_217,p:{y:-7.4}},{t:this.shape_96,p:{x:-28.3,y:-9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214,p:{y:-45.1}},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204,p:{x:12.2,y:-2.8}},{t:this.shape_44,p:{y:-4.3}},{t:this.shape_57,p:{y:-6.3,x:5.3}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_40,p:{y:-87}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199,p:{x:9.8,y:-92.3}},{t:this.shape_198},{t:this.shape_197,p:{x:1.5,y:-79.1}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_32,p:{y:-98.9}},{t:this.shape_79,p:{x:8.2,y:-99.3}},{t:this.shape_123},{t:this.shape_29,p:{y:-97.9}},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_16,p:{y:-42}},{t:this.shape_15,p:{y:-40.6}},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_10,p:{y:-32.6,x:-14.6}},{t:this.shape_103,p:{x:-25.5,y:-30.7}},{t:this.shape_104,p:{x:-24.8,y:-27.6}},{t:this.shape_7,p:{y:-20}},{t:this.shape_65,p:{y:-19.3,x:-25.8}},{t:this.shape_6,p:{x:-21.1,y:-19.9}},{t:this.shape_4,p:{x:-12.4,y:-19.9}},{t:this.shape_3,p:{y:-19.9}},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]},2).to({state:[{t:this.shape_257},{t:this.shape_217,p:{y:-7.5}},{t:this.shape_96,p:{x:-28.4,y:-9.1}},{t:this.shape_256},{t:this.shape_255},{t:this.shape_214,p:{y:-45.2}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_60,p:{x:19.1,y:-8.2}},{t:this.shape_204,p:{x:12.1,y:-2.9}},{t:this.shape_44,p:{y:-4.4}},{t:this.shape_57,p:{y:-6.4,x:5.3}},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_199,p:{x:9.7,y:-92.4}},{t:this.shape_36,p:{y:-93.1}},{t:this.shape_197,p:{x:1.4,y:-79.2}},{t:this.shape_81,p:{y:-85.5}},{t:this.shape_241},{t:this.shape_32,p:{y:-99}},{t:this.shape_79,p:{x:8.1,y:-99.4}},{t:this.shape_30,p:{y:-97.6}},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_16,p:{y:-42.1}},{t:this.shape_153,p:{x:-24.5,y:-40.7}},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_10,p:{y:-32.7,x:-14.7}},{t:this.shape_103,p:{x:-25.5,y:-30.8}},{t:this.shape_222},{t:this.shape_7,p:{y:-20.1}},{t:this.shape_65,p:{y:-19.4,x:-25.9}},{t:this.shape_6,p:{x:-21.1,y:-20}},{t:this.shape_4,p:{x:-12.5,y:-20}},{t:this.shape_64,p:{y:-20}},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219}]},2).to({state:[{t:this.shape_218},{t:this.shape_217,p:{y:-7.4}},{t:this.shape_96,p:{x:-28.3,y:-9}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214,p:{y:-45.1}},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204,p:{x:12.2,y:-2.8}},{t:this.shape_44,p:{y:-4.3}},{t:this.shape_57,p:{y:-6.3,x:5.3}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_40,p:{y:-87}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199,p:{x:9.8,y:-92.3}},{t:this.shape_198},{t:this.shape_197,p:{x:1.5,y:-79.1}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_32,p:{y:-98.9}},{t:this.shape_79,p:{x:8.2,y:-99.3}},{t:this.shape_123},{t:this.shape_29,p:{y:-97.9}},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_16,p:{y:-42}},{t:this.shape_15,p:{y:-40.6}},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_10,p:{y:-32.6,x:-14.6}},{t:this.shape_103,p:{x:-25.5,y:-30.7}},{t:this.shape_104,p:{x:-24.8,y:-27.6}},{t:this.shape_7,p:{y:-20}},{t:this.shape_65,p:{y:-19.3,x:-25.8}},{t:this.shape_6,p:{x:-21.1,y:-19.9}},{t:this.shape_4,p:{x:-12.4,y:-19.9}},{t:this.shape_3,p:{y:-19.9}},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]},6).to({state:[{t:this.shape_60,p:{x:-16.9,y:-12.2}},{t:this.shape_174},{t:this.shape_58,p:{y:-9}},{t:this.shape_89,p:{x:-31.4,y:-11.7}},{t:this.shape_143},{t:this.shape_142,p:{y:-45.2}},{t:this.shape_173},{t:this.shape_140},{t:this.shape_139},{t:this.shape_51,p:{y:-27.9}},{t:this.shape_90,p:{y:-21.8}},{t:this.shape_172},{t:this.shape_137,p:{y:-21.8}},{t:this.shape_136,p:{y:-21.8}},{t:this.shape_135},{t:this.shape_45,p:{y:-2.8,x:12.2}},{t:this.shape_171},{t:this.shape_133,p:{y:-6.3}},{t:this.shape_170},{t:this.shape_131},{t:this.shape_86},{t:this.shape_39,p:{y:-110.8}},{t:this.shape_169},{t:this.shape_127,p:{y:-92.4}},{t:this.shape_36,p:{y:-93}},{t:this.shape_168},{t:this.shape_34,p:{y:-85.4}},{t:this.shape_125,p:{y:-80}},{t:this.shape_80},{t:this.shape_79,p:{x:8.2,y:-99.4}},{t:this.shape_123},{t:this.shape_29,p:{y:-97.9}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153,p:{x:-24.4,y:-40.6}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_12,p:{y:-24.3}},{t:this.shape_150},{t:this.shape_105},{t:this.shape_149},{t:this.shape_103,p:{x:-24.9,y:-27.6}},{t:this.shape_7,p:{y:-20.1}},{t:this.shape_6,p:{x:-25.9,y:-19.3}},{t:this.shape_148},{t:this.shape_102},{t:this.shape_3,p:{y:-19.9}},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},2).to({state:[{t:this.shape_60,p:{x:-16.9,y:-12.1}},{t:this.shape_45,p:{y:-7.4,x:-24.5}},{t:this.shape_96,p:{x:-28.4,y:-9}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{y:-45.1}},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_51,p:{y:-27.9}},{t:this.shape_90,p:{y:-21.7}},{t:this.shape_138},{t:this.shape_137,p:{y:-21.7}},{t:this.shape_136,p:{y:-21.7}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_44,p:{y:-4.3}},{t:this.shape_133,p:{y:-6.2}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127,p:{y:-92.3}},{t:this.shape_36,p:{y:-93}},{t:this.shape_126},{t:this.shape_34,p:{y:-85.4}},{t:this.shape_125,p:{y:-79.9}},{t:this.shape_124},{t:this.shape_79,p:{x:8.2,y:-99.3}},{t:this.shape_123},{t:this.shape_29,p:{y:-97.9}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_26,p:{y:-56.2}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_16,p:{y:-42}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104,p:{x:-25.5,y:-30.7}},{t:this.shape_103,p:{x:-24.9,y:-27.6}},{t:this.shape_7,p:{y:-20}},{t:this.shape_65,p:{y:-19.2,x:-25.9}},{t:this.shape_6,p:{x:-21.1,y:-19.9}},{t:this.shape_102},{t:this.shape_3,p:{y:-19.9}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},2).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96,p:{x:-28.4,y:-9}},{t:this.shape_57,p:{y:-11.7,x:-31.4}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_51,p:{y:-27.9}},{t:this.shape_90,p:{y:-21.8}},{t:this.shape_49,p:{y:-21.5}},{t:this.shape_48,p:{y:-21.8}},{t:this.shape_47,p:{y:-21.8}},{t:this.shape_60,p:{x:19.1,y:-8.1}},{t:this.shape_45,p:{y:-2.8,x:12.2}},{t:this.shape_44,p:{y:-4.3}},{t:this.shape_89,p:{x:5.3,y:-6.3}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_36,p:{y:-93}},{t:this.shape_82},{t:this.shape_81,p:{y:-85.4}},{t:this.shape_33,p:{y:-79.9}},{t:this.shape_80},{t:this.shape_79,p:{x:8.1,y:-99.4}},{t:this.shape_30,p:{y:-97.5}},{t:this.shape_29,p:{y:-97.9}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_26,p:{y:-56.2}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_17,p:{y:-50.4}},{t:this.shape_16,p:{y:-42}},{t:this.shape_15,p:{y:-40.6}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_12,p:{y:-24.3}},{t:this.shape_11,p:{y:-24.3}},{t:this.shape_10,p:{y:-32.6,x:-14.7}},{t:this.shape_9,p:{y:-30.7}},{t:this.shape_8,p:{y:-27.6}},{t:this.shape_7,p:{y:-20.1}},{t:this.shape_65,p:{y:-19.3,x:-25.9}},{t:this.shape_6,p:{x:-21.1,y:-19.9}},{t:this.shape_4,p:{x:-12.5,y:-19.9}},{t:this.shape_64,p:{y:-19.9}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},2).to({state:[{t:this.shape_60,p:{x:-16.9,y:-12.3}},{t:this.shape_59},{t:this.shape_58,p:{y:-9.1}},{t:this.shape_57,p:{y:-11.8,x:-31.4}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{y:-28}},{t:this.shape_50},{t:this.shape_49,p:{y:-21.6}},{t:this.shape_48,p:{y:-21.9}},{t:this.shape_47,p:{y:-21.9}},{t:this.shape_46},{t:this.shape_45,p:{y:-2.9,x:12.2}},{t:this.shape_44,p:{y:-4.4}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{y:-87.1}},{t:this.shape_39,p:{y:-110.9}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{y:-93.1}},{t:this.shape_35},{t:this.shape_34,p:{y:-85.5}},{t:this.shape_33,p:{y:-80}},{t:this.shape_32,p:{y:-99}},{t:this.shape_31},{t:this.shape_30,p:{y:-97.6}},{t:this.shape_29,p:{y:-98}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{y:-56.3}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{y:-50.5}},{t:this.shape_16,p:{y:-42.1}},{t:this.shape_15,p:{y:-40.7}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{y:-24.4}},{t:this.shape_11,p:{y:-24.4}},{t:this.shape_10,p:{y:-32.7,x:-14.7}},{t:this.shape_9,p:{y:-30.8}},{t:this.shape_8,p:{y:-27.7}},{t:this.shape_7,p:{y:-20.2}},{t:this.shape_6,p:{x:-25.9,y:-19.4}},{t:this.shape_5},{t:this.shape_4,p:{x:-12.4,y:-20}},{t:this.shape_3,p:{y:-20}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(6));

	// mouvement_bras
	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#301105").s().p("AAJJxQg0gfgIgvQgYAfgtATQgvASg3ABQhRgBg3gjQg3gkAAg0QAAgkAegeIgFgfQgHg6ABgdQABgzAUgfQglgsgChDQgEhBAggvQARghAZgcQAzg8AzgRQgdg5AAg/QAAgjAIgeQgBgLAHgJQAWhCAyguQAGhGAFglQAIg3APgMQANgWASgFIAIgBQAbAAAaAeQAcAfAQA6QAZgFAbAAQAcAAAgAGIALgZQANggAUgYQAhgoAnAAIAPACQAjAIAOA3QALAnAEBXQARAJAMAPQApAaAZBFQAZBGAABZQAABKgGAuQgIA2gRAhQASA5AAA+QAABPgfBKQAKAZAGAdIAAABIABADIABAGIAAACQADAUAAARIAAADQAAA3gVAyQgXAygmAgQgXAggvATQgvATg3AAQhKAAg2gfgAgXHyQgJASAAARQAAAqAwAfQAyAeBHAAQA0AAArgSQArgRATgdQAkgdAUgsQAVgvAAg1IAAgDQAAgQgDgSIgCgMQgFgdgOgcQAjhJAAhQQAAg+gVg8QAUgeAHg4QAGgsAAhKQAAhVgXhDQgYhCglgVQgOgRgVgKQgEhWgIgnQgNgzgYgGIgLgBQgVAAgWATQgaAWgSAsQgIAQgIAYQgmgJgjAAQgjgBggAIQgOhBgegiQgUgXgSAAIgDAAQgMAEgKATIgBAAQgPACgMClQg1AygWBBQgDACAAAEIABAEQgJAfAAAhQAABJApA/IgHgBQgWAAgeAUQgfAVgdAiQgYAcgQAeQgcAqADA7QABAiAMAeQAMAdAUASQgYAagCAxQgDAfAIA+QACAVAEATQgfAaAAAhQAAArAyAeQAyAfBHAAQA/AAAxgaQAwgZAIgmIAQgLg");
	this.shape_258.setTransform(5.4,-61.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000003").s().p("AgjAxQgEgEgBgFIgLg+QgBgHAEgFQADgFAHgBIA+gLIACAAQAGgBAEAEQAFAEAAAFIALA+QABAGgDAGQgEAFgGABIhBALQgFABgFgEgAgfgWIAKA2IA1gKIgJg1g");
	this.shape_259.setTransform(-12.5,-19.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000003").s().p("AgnAcQgEgEgBgGIgEgTQgBgGAEgFQAEgGAGgBIBBgLQAFAAAFADQAEAEABAGIAEATQABAHgEAFQgEAGgGAAIhBAMQgFAAgFgEgAgbAAIACAKIA1gJIgCgKg");
	this.shape_260.setTransform(-13.9,-28.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000003").ss(2).p("AgHgqIAPBV");
	this.shape_261.setTransform(-12.4,-19.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000003").ss(2).p("AgqAIIBVgP");
	this.shape_262.setTransform(-12.4,-19.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000003").ss(2,1).p("AgJg6IAUB1");
	this.shape_263.setTransform(-21.1,-19.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000003").ss(2,1).p("AgJg6IATB1");
	this.shape_264.setTransform(-25.9,-19.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000003").ss(2,1).p("AgMhKIAZCV");
	this.shape_265.setTransform(-23.5,-20.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000003").ss(2,1).p("AgfAGIA/gL");
	this.shape_266.setTransform(-24.9,-27.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000003").ss(2,1).p("AgfAGIA/gL");
	this.shape_267.setTransform(-25.5,-30.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000003").ss(2,1).p("AgqAIIBVgP");
	this.shape_268.setTransform(-14.7,-32.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#A26615").s().p("AhiCXQgfglgLhbQgIg+ACgfQADgyAZgaIANALQASALAXAAQAIAAAMgCQAWgFAWgaIASgZQArAMAiAuQAgArAMA7QAXBygnAtQgaAehOAMQgWAEgTAAQgxAAgbgggAh+g5QgBAcAHAyQAKBYAeAgQAUAWAmAAQAOAAAYgEQAlgFATgHQAbgKANgSQAbgogUhhQgKgxgZgmQgZgmghgPQgeAsgkAHQgMADgMAAQgcAAgWgNQgMAWAAAmg");
	this.shape_269.setTransform(-17.4,-24.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#F6D702").s().p("AhUClQgrghgNhsQgIg/ACgfQADgyAZgZIASANQAZANAfgHQAWgEAWgaIASgaQArANAiAtQAgAsAMA6QAXBygnAuQgaAehOAMQgVADgSAAQgpAAgXgSg");
	this.shape_270.setTransform(-17.4,-24.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#F6D702").p("AARANQgJANgKAFQgMAGgIgGQgHgFACgNQABgNAJgMQAKgMAKgGQAMgFAHAFQAIAFgCANQgBAMgKANg");
	this.shape_271.setTransform(-28.7,-58.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FE7030").s().p("AgWAfQgHgGACgMQABgNAJgMQAKgNAKgFQAMgGAHAGQAIAFgCANQgBAMgKANQgJAMgKAGQgGADgFAAQgFAAgEgDg");
	this.shape_272.setTransform(-28.7,-58.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#ED5E4A").ss(1,1).p("AALAQQgNgEgEgIQgCgEgBgHIgBgH");
	this.shape_273.setTransform(-24.4,-40.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#ED5E4A").ss(1,1).p("AAPAVQgRgFgGgKQgDgGgCgLIgBgJ");
	this.shape_274.setTransform(-21.1,-42);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AhABmQgegngCg7QgDg4AagrQAbgqApgCQAngBAfAnQAfAoABA5QADA5gaAqQgcAqgoACIgDABQglAAgegmg");
	this.shape_275.setTransform(-24.2,-50.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#F6D702").p("AAbAAQAAAZgIASQgIASgLAAQgKAAgIgSQgIgSAAgZQAAgYAIgSQAIgSAKAAQALAAAIASQAIASAAAYg");
	this.shape_276.setTransform(25.5,-75);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FE7030").s().p("AgSArQgIgSAAgZQAAgYAIgSQAIgSAKAAQALAAAIASQAIARAAAZQAAAZgIASQgIASgLAAQgKAAgIgSg");
	this.shape_277.setTransform(25.5,-75);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#ED5E4A").ss(1,1).p("AgLAPQAAgEABgEQABgHAEgEQAGgGALgD");
	this.shape_278.setTransform(21.2,-99.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#ED5E4A").ss(1,1).p("AgQAUQAAgFACgGQACgKAFgFQAJgIAPgF");
	this.shape_279.setTransform(23.3,-96.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#DDDDDD").ss(2,1).p("AgrABIAUAJQAbAFAogZ");
	this.shape_280.setTransform(25.3,-92.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AhSC8QgPgwAAh+QAAg9AMg0QgTgMgLgUQgMgTAAgWQAAgkAdgaQAbgZAngBQAYAAATAKQAUAJANARQAlAVAXBCQAXBDABBUQAAB5gTA1QgaBJhFgBQhHABgZhJg");
	this.shape_281.setTransform(32.1,-81.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#DDDDDD").s().p("AhRC8QgRgxAAh9QAAg6ANg3QgTgNgLgTQgMgTAAgWQAAgkAcgaQAcgZAngBQAYAAATAKQAUAJANARQAlAVAXBCQAYBDAABUQAAB5gTA1QgZBJhFgBQhIABgYhJg");
	this.shape_282.setTransform(29.7,-81.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000101").s().p("AgQAiIgOgMQANgKAGgKQADgDACgPQABgOAEgEQAFgFAHgCQAHgBAFADQAGAFABAHQACAIgEAEQgDADgOAHQgJAFgDAKQgFATADANQgGAAgHgIg");
	this.shape_283.setTransform(-11.2,-53.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#F6D702").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_284.setTransform(-8.1,-56.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FFFFFF").ss(0.5,1).p("AivhEIASAkQAgApBIAcQBZAkBfgFQAMgBAKgBQALgBAGgCQARgFgiAI");
	this.shape_285.setTransform(0.1,-61.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#ED5E4A").s().p("AilDJQicgfAGhxQACgjATgmIARggIAagfIAahRIAUAUQAbAZAeATQBhA8BdgRQBegSBHhHQAjgkARggQAeATAbAhQgYAlgnAoQhPBPhNAPQgcCShGAlQgcAPguAAQgnAAgzgKg");
	this.shape_286.setTransform(7.2,-56.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#ED5E4A").ss(1,1).p("AABAPIgBgd");
	this.shape_287.setTransform(-12.2,-97.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#ED5E4A").ss(1,1).p("AgFANIALgZ");
	this.shape_288.setTransform(-9.7,-97.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#ED5E4A").ss(1,1).p("AAAAPIABgd");
	this.shape_289.setTransform(8.2,-99.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#ED5E4A").ss(1,1).p("AAGAMIgMgX");
	this.shape_290.setTransform(5.7,-98.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#ED5E4A").ss(1,1).p("AgjgKIAOgCQAQgBAJAEQAPAIARAP");
	this.shape_291.setTransform(26.9,-80);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#ED5E4A").ss(1,1).p("AgvAKIAPgKQASgIANAAQAVAAAcAI");
	this.shape_292.setTransform(26.5,-85.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#ED5E4A").ss(1,1).p("Ai2AYQALAAAigQQAjgQAaAAQATAAA/AQQA+ASAlgCQAqgBAWgXQALgMADgM");
	this.shape_293.setTransform(1.5,-79.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(1,1).p("AAlASQgDgIgHgIQgNgPgOgDQgQgDgLAHQgGAEgDAE");
	this.shape_294.setTransform(-15.6,-93.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(1,1).p("Ag9APIAWgPQAagOAYAAQAYgBAQAJQAIAFADAE");
	this.shape_295.setTransform(9.7,-92.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#ED5E4A").s().p("AA3BeQg/g+g1ABQgEAAgDgDQgDgEABgFQAOhCAhgfQAZgYAaAFQAZAGAJA1QAGAgADBaQABAHgGACIgFACQgDAAgDgDg");
	this.shape_296.setTransform(23.2,-112.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AAfBTQhBg5g0ALQAPhmApgvQAggkAgAIQAgAIALBUQAEAkAGCbQgWgfgigdg");
	this.shape_297.setTransform(24.5,-110.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AjMC7QhUhOAAhtQAAhsBUhNQBVhOB3AAQApAAApALQBbAZA5BFQA7BGAABYQAABthUBOQhWBNh3AAQh3AAhVhNg");
	this.shape_298.setTransform(9.3,-87);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#ED5E4A").s().p("AgvABQALiNAOgBQAjgDAPAhQASAlAKBuQghgLgqA6QgVAcgPAfQADhGAFhHg");
	this.shape_299.setTransform(-6,-108.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AhDAGQAFiIAlgLQATgFAaAiQAmAxALBjQgogKgzA5QgaAdgSAeQgEhDADhFg");
	this.shape_300.setTransform(-3.4,-110.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgDgWAJgIQAFgFALgDQAFgCAFgB");
	this.shape_301.setTransform(5.3,-6.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgBgIABgJQABgQAIgHQAIgHAOgFQAHgCAGgB");
	this.shape_302.setTransform(8.3,-4.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQABgIAEgJQAGgRALgHQAKgGARgEQAJgCAHAA");
	this.shape_303.setTransform(12.2,-2.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("Ah4BJQgxgeAAgrQAAgqAxgeQAygeBGAAQBGAAAyAeQAzAeAAAqQAAArgzAeQgyAehGAAQhGAAgygeg");
	this.shape_304.setTransform(19.1,-8.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#F6D702").p("AAjAHQgFAWgNANQgOANgMgDQgPgDgIgRQgHgSAFgUQAFgWANgNQAOgNAMADQAPADAIARQAHASgFAUg");
	this.shape_305.setTransform(33.3,-21.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FE7030").s().p("AgJA0QgPgDgIgRQgHgSAFgUQAFgWANgNQAOgNAMADQAPADAIARQAHASgFAUQgFAWgNANQgLALgKAAIgFgBg");
	this.shape_306.setTransform(33.3,-21.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("Ah8CVQgzg9AAhYQAAhWAzg+QA0g9BIAAQBJAAAzA9QA0A+AABWQAABYg0A9QgzA+hJAAQhIAAg0g+g");
	this.shape_307.setTransform(24.9,-21.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#C1C1C1").s().p("AiJCVQg6g+AAhXQAAhWA6g+QA4g+BRAAQBRAAA5A+QA6A+AABWQAABXg6A+Qg5A+hRAAQhRAAg4g+g");
	this.shape_308.setTransform(22.9,-21.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#DDDDDD").s().p("AiNA9IB9jJICeAdIgzBPQgyBdADBQQh5gvhAghg");
	this.shape_309.setTransform(-5.4,-27.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AhYBoQgRgOAOgpQAPgpAkgqQAlgrAlgUQAmgUARAOQARAPgOAoQgPApgkAqQglArglAUQgWAMgPAAQgLAAgHgGg");
	this.shape_310.setTransform(-23.3,-62.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#DDDDDD").s().p("AhYBoQgRgOAOgpQAPgpAkgqQAlgrAlgUQAmgUARAOQARAPgOAoQgPApgkAqQglArglAUQgWAMgPAAQgLAAgHgGg");
	this.shape_311.setTransform(-23.3,-62.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AjxD5QhkhnAAiSQAAiRBkhnQBkhoCNAAQCOAABkBoQBlBnAACRQAACShlBnQhkBoiOAAQiMAAhlhog");
	this.shape_312.setTransform(9.3,-47.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#C1C1C1").s().p("AjyDpQhUhjAAiOQAAiOBUhbQBYheCMAAQCNAABkBiQBkBiABCLQgBCLhkBjQhkBiiNAAQiKAAhahng");
	this.shape_313.setTransform(7.8,-45);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AiECVQg4g9AAhYQAAhWA4g+QA3g9BNAAQBOAAA3A9QA4A+AABWQAABYg4A9Qg3A+hOAAQhNAAg3g+g");
	this.shape_314.setTransform(-9.1,-29.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgDgWAJgIQAGgFAKgDQAFgCAFgB");
	this.shape_315.setTransform(-31.4,-11.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgDgdAMgLQAIgHAOgFQAHgCAGgB");
	this.shape_316.setTransform(-28.4,-9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQACgIADgJQAHgRAKgHQAKgGASgEQAJgBAGgB");
	this.shape_317.setTransform(-24.5,-7.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("Ah4BJQgygeAAgrQAAgqAygeQAygeBGAAQBHAAAyAeQAyAeAAAqQAAArgyAeQgyAehHAAQhGAAgygeg");
	this.shape_318.setTransform(-16.9,-12.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#301105").s().p("AAPJxQg0gggIguQgYAfguATQguASg3ABQhQgBg4gjQg3gkAAg0QAAgkAegeQgDgPgCgQQgHg5ABgeQABgzATgfQgkgtgChCQgDhBAfgvQAQggAagdQAzg8AzgRQgdg5AAg/QAAgfAIgiQgBgMAHgIQAWhAAzgwQADg2AHg1QAFgeAEgOQAFgQAJgHQAMgWATgFIAIgBQAbAAAaAeQAcAgAQA5QAagFAaAAQAdAAAfAGQAFgOAGgLQAOghATgXQAhgoAoAAQAIAAAGACQAlAJAOBAQALAuAEB6QA0BHAABWQAAAngMAmQAhBigFA3QAmBNAABYQAABQghBJQALAZAGAdIAAABIACAJIAAACQADAUAAARIAAADQAAA3gVAyQgWAygnAgQgXAggvATQgvATg3AAQhKAAg2gfgAgRHyQgKARAAASQAAAqAxAfQAyAeBHAAQA0AAAsgSQAqgSATgcQAkgdAUgsQAVgvAAg1IAAgDQAAgMgDgWIgCgMQgFgdgOgcQAjhJAAhQQAAhWgnhLQAHg2gjhnQANgmAAgnQAAhSgzhFQgEhvgIgsQgLhCgdgHIgJgBQgWAAgWATQgaAWgSAsQgKATgGAVQgmgJgjAAQgjgBggAIQgPhBgdgiQgVgXgRAAIgDAAQgMAEgKATIAAAAQgQABgMCmQg2AxgVBCQgDACAAAEIABAEQgJAeAAAiQAABIApBAIgHgBQgVAAgfAUQgfAVgdAiQgXAbgRAfQgcArADA6QABAiAMAeQAMAcATATQgXAagDAxQgCAfAIA+IAGAoQgfAaAAAhQAAArAyAeQAyAfBHAAQBAAAAwgaQAvgZAJgmIAQgLg");
	this.shape_319.setTransform(4.8,-61.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000003").s().p("AgjAxQgEgEgBgFIgLg+QgBgHADgFQAEgFAGgBIA+gLIADAAQAFgBAFAEQAEAEABAFIALA+QABAGgDAGQgEAFgGABIhBALQgGABgEgEgAgfgWIAKA2IA1gKIgKg1g");
	this.shape_320.setTransform(-12.5,-19.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000003").s().p("AgmAcQgFgEgBgGIgDgTQgBgGADgFQAEgGAGgBIBAgLQAGAAAEADQAFAEABAGIADATQACAHgEAFQgEAGgGAAIhAAMQgGAAgEgEgAgbAAIACAKIA1gJIgCgKg");
	this.shape_321.setTransform(-13.9,-28.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000003").ss(2).p("AgGgqIANBV");
	this.shape_322.setTransform(-12.5,-19.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000003").ss(2,1).p("AgJg6IATB1");
	this.shape_323.setTransform(-25.9,-19.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#A26615").s().p("AhiCXQggglgLhbQgHg+ACgfQADgyAYgaIAOALQASALAWAAQAIAAANgCQAWgFAWgaQALgNAGgMQAsAMAiAuQAgAsAMA6QAXBygoAtQgaAehNAMQgWAEgTAAQgxAAgbgggAh/g5QAAAaAGA0QALBYAeAgQAUAWAmAAQAOAAAYgEQAlgFATgHQAbgKANgSQAbgngUhiQgKgxgZgmQgagmgggPQgeAsgkAHQgMADgNAAQgcAAgWgNQgLAWgBAmg");
	this.shape_324.setTransform(-17.4,-24.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#F6D702").s().p("AhUClQgsghgNhsQgHg+ACggQADgyAYgZIATANQAZANAfgHQAWgEAWgaQALgNAGgNQAsANAiAtQAgAsAMA6QAXBygoAuQgaAehNAMQgUADgSAAQgpAAgYgSg");
	this.shape_325.setTransform(-17.4,-24.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#F6D702").p("AASANQgKANgKAFQgMAGgHgGQgIgFACgNQABgMAJgNQAKgMAKgGQAMgFAIAFQAHAGgBAMQgCAMgJANg");
	this.shape_326.setTransform(-28.8,-58.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FE7030").s().p("AgVAfQgIgFACgNQABgNAJgMQAKgNAKgFQAMgGAIAGQAHAFgBANQgCAMgJANQgKAMgKAGQgGADgFAAQgFAAgDgDg");
	this.shape_327.setTransform(-28.8,-58.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AhABmQgegogDg6QgCg4AagrQAbgqAogCQAogBAeAnQAfAoACA5QADA5gbAqQgbAqgoACIgEABQglAAgdgmg");
	this.shape_328.setTransform(-24.2,-50.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#F6D702").p("AAZgIQAJAWgBAUQgCAUgKADQgLAEgNgOQgNgOgJgYQgIgWABgUQABgTALgEQAKgEANAOQAOAOAIAYg");
	this.shape_329.setTransform(19.2,-71.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FE7030").s().p("AgDAvQgNgOgIgYQgJgWABgUQABgTALgEQAKgEANAOQAOAOAIAYQAJAWgBAUQgCAUgKADIgFABQgJAAgKgLg");
	this.shape_330.setTransform(19.2,-71.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#ED5E4A").ss(1,1).p("AgFASQgBgEAAgEQgCgJADgDQAEgIAJgH");
	this.shape_331.setTransform(6.6,-93.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#ED5E4A").ss(1,1).p("AgHAYQgBgFgBgFQgCgLAEgGQAEgHAHgHQAEgDADgD");
	this.shape_332.setTransform(9.6,-91.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#DDDDDD").ss(2,1).p("AgnAUIAWACQAbgGAegl");
	this.shape_333.setTransform(12.9,-88.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgDDJQghgogqh2QgVg4gGg3QgXgFgQgNQgSgPgHgVQgNgiASghQARgiAlgNQAVgIAXACQAWACASALQAoAHAtA2QAtA3AdBQQAqBxABA4QABBNhCAXQgUAIgSAAQgsAAgggrg");
	this.shape_334.setTransform(22.3,-79.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#DDDDDD").s().p("AgDDJQgggogrh2QgVg4gGg3QgWgFgRgNQgSgPgHgVQgNgiASghQARgiAlgNQAWgIAXACQAVACASALQApAHAtA2QAtA3AdBPQApByABA4QABBNhBAXQgVAIgSAAQgsAAgggrg");
	this.shape_335.setTransform(22.1,-80.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#DDDDDD").s().p("AgDDJQgggogrh2QgVg4gGg3QgWgFgRgNQgSgPgHgVQgNgiASghQARgiAlgNQAWgIAXACQAVACASALQApAHAtA2QAtA3AdBPQApByABA4QABBNhBAXQgVAIgSAAQgsAAgggrg");
	this.shape_336.setTransform(20.1,-78.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000101").s().p("AgRAiIgNgMIAHgGQAIgHAEgHQADgDABgPQACgOAEgEQAFgFAHgCQAHgBAFADQAGAFABAHQACAIgEAEQgDADgOAHQgKAFgCAKQgGATADANQgFAAgIgIg");
	this.shape_337.setTransform(-11.2,-53.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#FFFFFF").ss(0.5,1).p("ACZBCQALgBAGgCQARgFgiAIgAivhEIASAkQAgApBIAcQBaAkBegFQANgBAJgB");
	this.shape_338.setTransform(0,-61.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#ED5E4A").s().p("AimDJQicgfAHhxQACgjATgmIARggIAZgfIAbhRIAUAUQAbAZAeATQBgA8BdgRQBegSBIhHQAjgkARggQAdASAcAiQgYAlgoAoQhPBPhMAPQgcCShGAlQgcAPguAAQgnAAg0gKg");
	this.shape_339.setTransform(7.2,-56.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#ED5E4A").ss(1,1).p("AgGANIANgZ");
	this.shape_340.setTransform(-9.7,-97.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#ED5E4A").ss(1,1).p("AAHAMIgNgX");
	this.shape_341.setTransform(5.7,-98.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#ED5E4A").ss(1,1).p("AgigKIANgCQAQgBAJAEQAPAIAQAP");
	this.shape_342.setTransform(26.8,-80);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#ED5E4A").ss(1,1).p("AgvAKIAPgKQARgIAOAAQAVAAAcAI");
	this.shape_343.setTransform(26.5,-85.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#ED5E4A").ss(1,1).p("Ai1AYQAKAAAjgQQAigQAaAAQATAABAAQQA+ASAkgCQAqgBAWgXQALgMACgM");
	this.shape_344.setTransform(1.4,-79.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(1,1).p("AAlASQgDgIgHgIQgNgPgPgDQgPgDgLAHIgJAI");
	this.shape_345.setTransform(-15.6,-93.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(1,1).p("Ag9APIAWgPQAagOAXAAQAZgBAQAJQAHAFADAE");
	this.shape_346.setTransform(9.7,-92.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#ED5E4A").s().p("AA3BeQg+g+g1ABQgFAAgDgDQgDgEABgFQAOhDAhgeQAZgYAaAFQAZAGAJA1QAGAfAEBbQAAAHgGACIgFACQgDAAgDgDg");
	this.shape_347.setTransform(23.1,-112.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AAgBTQhDg5gzALQAPhmAqgvQAegkAhAIQAgAIALBUQAFAlAFCaQgXgfgggdg");
	this.shape_348.setTransform(24.5,-110.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#ED5E4A").s().p("AgvABQALiNAPgBQAigDAQAhQARAlALBuQgigLgqA6IglA7QADhGAGhHg");
	this.shape_349.setTransform(-6,-108.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AhDAGQAGiIAlgLQATgFAZAiQAmAxAMBjQgpgKgzA5IgsA7QgEhDADhFg");
	this.shape_350.setTransform(-3.5,-110.7);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgBgGAAgHQACgMAFgFQAJgIARgD");
	this.shape_351.setTransform(5.3,-6.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgBgIABgJQABgQAIgHQAMgLAXgE");
	this.shape_352.setTransform(8.3,-4.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQACgIADgJQAHgRALgHQAPgKAbgC");
	this.shape_353.setTransform(12.1,-2.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#F6D702").p("AAjAHQgFAWgNANQgNANgOgDQgOgDgHgRQgHgSAEgUQAFgWANgNQAOgNANADQAOADAHARQAHARgEAVg");
	this.shape_354.setTransform(33.2,-21.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FE7030").s().p("AgKA0QgOgDgHgRQgHgSAEgUQAFgWANgNQAOgNANADQAOADAHARQAHARgEAVQgFAWgNANQgLALgLAAIgFgBg");
	this.shape_355.setTransform(33.2,-21.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("Ah7CVQg0g9AAhYQAAhWA0g+QAzg9BIAAQBJAAA0A9QAzA+AABWQAABYgzA9Qg0A+hJAAQhIAAgzg+g");
	this.shape_356.setTransform(24.9,-21.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#C1C1C1").s().p("AiKCVQg5g+AAhXQAAhWA5g+QA6g+BQAAQBRAAA6A+QA5A+AABWQAABXg5A+Qg6A+hRAAQhQAAg6g+g");
	this.shape_357.setTransform(22.9,-21.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#DDDDDD").s().p("AhdBUIgwgXIB+jJICdAdQgZAfgaAwQgyBdAEBQQhLgdg/gcg");
	this.shape_358.setTransform(-5.4,-27.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AhYBoQgRgOAOgpQAOgpAlgqQAlgrAlgUQAmgUARAOQARAPgOAoQgPApgkAqQglArglAUQgWAMgPAAQgLAAgHgGg");
	this.shape_359.setTransform(-23.3,-62.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#DDDDDD").s().p("AhYBoQgRgOAOgpQAOgpAlgqQAlgrAlgUQAmgUARAOQARAPgOAoQgPApgkAqQglArglAUQgWAMgPAAQgLAAgHgGg");
	this.shape_360.setTransform(-23.3,-62.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AjxD5QhkhngBiSQABiRBkhnQBkhoCNAAQCOAABkBoQBkBnAACRQAACShkBnQhkBoiOAAQiNAAhkhog");
	this.shape_361.setTransform(9.3,-47.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#C1C1C1").s().p("AjxDpQhVhjAAiOQAAiOBVhbQBXheCMAAQCNAABkBiQBkBiAACLQAACLhkBjQhkBiiNAAQiKAAhZhng");
	this.shape_362.setTransform(7.8,-45);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AiECVQg4g9AAhYQAAhWA4g+QA3g9BNAAQBOAAA4A9QA3A+AABWQAABYg3A9Qg4A+hOAAQhNAAg3g+g");
	this.shape_363.setTransform(-9.1,-29.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQAAgGAAgHQAAgMAGgFQAJgIARgD");
	this.shape_364.setTransform(-31.4,-11.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgBgIABgIQABgRAIgHQAMgKAXgF");
	this.shape_365.setTransform(-28.4,-9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQABgIAEgJQAGgRALgHQAPgKAcgC");
	this.shape_366.setTransform(-24.5,-7.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#301105").s().p("AAPJxQg0gfgIgvQgYAgguASQguATg3AAQhQAAg4gkQg3gjAAg1QAAgkAdgeIgEgfQgHg5ABgeQABgzATgeQgkgugChCQgDhAAfgwQAQgfAageQAzg8AzgRQgdg5AAg/QAAgfAIghQgBgMAHgJQAWhAAzgxQAEg3AGgzQAFgeAEgOQAFgQAJgHQAMgVATgGIAIgBQAaAAAbAfQAdAgAPA4QAbgEAZAAQAdAAAfAFQAFgMAGgMQAOgiATgYQAhgnAoAAQAFAAAJACQAlAJAOBAQALAuAEB6QA0BHAABWQAAAygSAuQAmAzAPApQAUA1gTAoQASA4AAA6QAABQghBJQALAaAGAcIAAABIACALQADAVAAARIAAACQAAA4gVAyQgWAxgnAhQgXAfgvATQgvATg3AAQhKAAg2gfgAgRHzQgKAQAAASQAAAqAxAfQAyAeBHAAQA0AAAsgSQAqgRATgcQAkgdAUgtQAVgvAAg1IAAgCQAAgNgDgVIgBgIIgBgEQgGgegNgcQAjhIAAhRQAAg7gTg5QATgigRgwQgOgqgsg4QAVgxAAgyQAAhTgzhDQgEhwgIgsQgLhBgdgIQgEgBgFAAQgWAAgWATQgaAWgSAsQgKAUgGAUQgkgJglAAQgiAAghAHQgPhBgdghQgVgYgRAAIgDAAQgMAEgKAUIAAAAQgQAAgMCnQg1AvgWBEQgDABAAAFIABADQgJAfAAAhQAABIApBAIgHgBQgVAAgfAVQgfAUgdAiQgZAegPAcQgcArADA6QABAjAMAdQAMAdATASQgXAagDAxQgCAfAIA+IAGAoQgfAbAAAgQAAArAyAeQAyAfBHAAQBAAAAwgZQAvgZAJgmIAQgLg");
	this.shape_367.setTransform(4.8,-61.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000003").s().p("AgjAxQgEgEgBgFIgLg+QgBgHADgFQAEgGAGAAIA+gMIADAAQANAAACANIALA+QABAHgDAEQgEAGgGABIhBAMQgGgBgEgDgAgfgVIAKA1IA1gKIgKg1g");
	this.shape_368.setTransform(-12.5,-19.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000003").s().p("AgnAcQgEgEgBgFIgEgVQAAgGADgFQAEgFAGgCIA+gLIADAAQAFABAEADQAFAEABAGIAEATQAAAHgDAEQgDAGgHABIhBALQgFABgFgEgAgbAAIACALIA1gKIgCgLg");
	this.shape_369.setTransform(-13.9,-28.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000003").ss(2).p("AgqAHIBVgN");
	this.shape_370.setTransform(-12.5,-19.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000003").ss(2,1).p("AgfAFIA/gJ");
	this.shape_371.setTransform(-24.9,-27.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000003").ss(2,1).p("AgfAFIA/gK");
	this.shape_372.setTransform(-25.5,-30.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000003").ss(2,1).p("AgqAHIBVgN");
	this.shape_373.setTransform(-14.7,-32.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#A26615").s().p("AhiCYQgggmgLhbQgHg+ACgfQADgyAYgZIAOALQASAKAWAAQALAAAKgCQAWgEAWgbQALgNAGgMQAsANAiAtQAgAsAMA6QAXBygoAuQgaAdhNANQgZADgQAAQgxAAgbgfgAh/g5QAAAaAGA0QALBYAeAgQAUAWAmAAQARAAAVgDQAlgGATgHQAbgKANgSQAbgngUhiQgKgxgZgmQgagmgggPQgfAsgjAIQgOACgLAAQgbAAgXgNQgLAWgBAmg");
	this.shape_374.setTransform(-17.4,-24.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#F6D702").s().p("AhUClQgsghgNhtQgHg+ACgfQADgyAYgZIATANQAZANAfgHQAWgEAWgbQALgNAGgMQAsANAiAtQAgAsAMA6QAXBygoAuQgaAdhNANQgUADgSAAQgpAAgYgSg");
	this.shape_375.setTransform(-17.4,-24.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#F6D702").p("AASANQgKANgKAFQgMAGgHgGQgIgFACgNQABgNAJgMQAKgNAKgFQAMgFAIAFQAHAFgBANQgCAMgJANg");
	this.shape_376.setTransform(-28.8,-58.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FE7030").s().p("AgVAfQgIgFACgNQABgNAJgMQAKgNAKgFQAMgFAIAFQAHAFgBANQgCAMgJANQgKANgKAFQgGADgFAAQgFAAgDgDg");
	this.shape_377.setTransform(-28.8,-58.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#ED5E4A").ss(1,1).p("AALAPQgNgDgEgIQgCgEgBgHIgBgH");
	this.shape_378.setTransform(-24.4,-40.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#ED5E4A").ss(1,1).p("AAPAVQgRgFgGgLQgDgFgCgLIgBgJ");
	this.shape_379.setTransform(-21.1,-42);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AhABmQgegogCg6QgDg4AbgrQAbgqAngBQAogCAfAnQAeAoADA6QACA5gaAqQgbAqgpACIgDAAQgmAAgdgmg");
	this.shape_380.setTransform(-24.2,-50.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#F6D702").p("AAVgRQAQATAFATQAGASgJAIQgIAHgSgJQgRgIgQgUQgQgSgGgTQgFgTAJgHQAIgHASAJQARAIAQATg");
	this.shape_381.setTransform(20.5,-65.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FE7030").s().p("AANAtQgRgIgQgUQgQgSgGgTQgFgTAJgHQAIgHASAJQARAIAQATQAQATAFATQAGASgJAIQgDADgGAAQgHAAgKgFg");
	this.shape_382.setTransform(20.5,-65.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#ED5E4A").ss(1,1).p("AAEATQgIgLABgIQABgFADgHIADgG");
	this.shape_383.setTransform(0.9,-82);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#ED5E4A").ss(1,1).p("AAFAaQgLgPACgLQABgHAEgKIAFgI");
	this.shape_384.setTransform(4.3,-81.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#DDDDDD").ss(2,1).p("AgdAhIAVgGQAYgPAOgs");
	this.shape_385.setTransform(8.7,-79.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("ABBC+QgsgbhPhgQgngugZgxQgWAEgVgIQgVgHgPgRQgXgcAFgmQAFglAegZQARgPAWgGQAWgFAUAEQAqgHA9AjQA8AkA2BBQBOBcAUA1QAbBHg1AtQgeAZghAAQgcAAgegTg");
	this.shape_386.setTransform(20.6,-74.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#DDDDDD").s().p("ABBC+QgsgbhQhgQgmgugZgxQgXADgUgHQgVgHgPgRQgXgcAFgmQAFglAegZQARgPAWgGQAWgFAUAEQAqgHA8AjQA8AkA3BBQBOBbAUA1QAbBIg1AsQgeAaghAAQgcAAgegTg");
	this.shape_387.setTransform(19.8,-75.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#DDDDDD").s().p("ABBC+QgsgbhQhgQgmgugZgxQgXADgUgHQgVgHgPgRQgXgcAFgmQAFglAegZQARgPAWgGQAWgFAUAEQAqgHA8AjQA8AkA3BBQBOBbAUA1QAbBIg1AsQgeAaghAAQgcAAgegTg");
	this.shape_388.setTransform(18.8,-72.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000101").s().p("AgRAiIgNgNIAHgGQAIgHAEgGQADgDABgPQACgOAEgEQAFgFAHgCQAHgBAFADQAGAFABAHQACAIgEAEQgDAEgOAGQgKAEgCAKQgGAUADANIAAAAQgGAAgHgIg");
	this.shape_389.setTransform(-11.2,-53.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#FFFFFF").ss(0.5,1).p("AivhEIASAkQAgApBIAcQBZAkBfgFQANgBAJgBQALgBAGgCQARgFgiAI");
	this.shape_390.setTransform(0,-61.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#ED5E4A").s().p("AimDIQicgeAHhxQACgjATgmIARggIAZggIAbhQIAUAUQAbAZAeATQBgA8BdgSQBegRBIhHQAjgkARggQAcAQAdAkQgYAkgoAoQhPBQhMAPQgcCShGAlQgcAPguAAQgnAAg0gLg");
	this.shape_391.setTransform(7.2,-56.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#ED5E4A").ss(1,1).p("AgGAMIAMgX");
	this.shape_392.setTransform(-9.7,-97.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#ED5E4A").ss(1,1).p("AAGANIgMgZ");
	this.shape_393.setTransform(5.7,-98.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#ED5E4A").ss(1,1).p("AgigKIANgCQAQgBAJAEQAPAIAQAO");
	this.shape_394.setTransform(26.8,-79.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#ED5E4A").ss(1,1).p("AgvAJIAPgJQASgJANAAQAVAAAcAJ");
	this.shape_395.setTransform(26.5,-85.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#ED5E4A").ss(1,1).p("Ai1AYQAKAAAjgQQAigQAaAAQATAABAAQQA+ASAkgCQAqgCAWgWQALgMACgM");
	this.shape_396.setTransform(1.4,-79.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(1,1).p("Ag8APIAVgPQAagOAYAAQAYgBAQAKQAIAEADAE");
	this.shape_397.setTransform(9.7,-92.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#ED5E4A").s().p("AA3BeQg+g9g1AAQgFAAgDgDQgDgEABgEQAOhDAhgfQAZgYAaAGQAZAFAJA1QAGAfAEBcQAAAGgGADIgEAAQgEAAgDgCg");
	this.shape_398.setTransform(23.1,-112.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AAfBTQhCg5g0ALQAQhmApgvQAgglAgAJQAgAHALBVQAEAkAHCbQgXgfgigdg");
	this.shape_399.setTransform(24.5,-110.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AjLC7QhVhOAAhtQAAhtBVhNQBUhNB3AAQAsAAAnALQBaAYA5BFQA7BHAABYQAABthVBOQhUBNh4AAQh3AAhUhNg");
	this.shape_400.setTransform(9.3,-87);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#ED5E4A").s().p("AgvABQALiMAPgCQAigCAQAgQARAlALBuQgigKgqA5IglA7QADhGAGhHg");
	this.shape_401.setTransform(-6,-108.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AhDAGQAGiJAlgKQATgFAZAiQAmAxAMBjQgpgKgzA5IgsA7QgEhDADhFg");
	this.shape_402.setTransform(-3.5,-110.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgBgGAAgHQABgNAGgFQAJgHAQgD");
	this.shape_403.setTransform(5.3,-6.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQABgIAEgJQAHgRAKgHQAQgKAbgC");
	this.shape_404.setTransform(12.1,-2.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("Ah4BJQgygeAAgrQAAgpAygfQAygeBGAAQBHAAAyAeQAyAeAAAqQAAArgyAeQgyAehHAAQhGAAgygeg");
	this.shape_405.setTransform(19.1,-8.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#F6D702").p("AAjAHQgFAWgNANQgNANgOgDQgOgDgHgRQgHgSAEgUQAFgWANgNQANgNAOADQAOADAHARQAHARgEAVg");
	this.shape_406.setTransform(33.2,-21.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FE7030").s().p("AgKA0QgOgDgHgRQgHgSAEgUQAFgWANgNQANgNAOADQAOADAHARQAHARgEAVQgFAWgNANQgLALgLAAIgFgBg");
	this.shape_407.setTransform(33.2,-21.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("Ah8CVQgzg+AAhXQAAhWAzg+QA0g+BIAAQBJAAAzA+QA0A+AABWQAABXg0A+QgzA+hJAAQhIAAg0g+g");
	this.shape_408.setTransform(24.9,-21.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#C1C1C1").s().p("AiKCVQg5g9AAhYQAAhWA5g+QA6g+BQABQBRgBA6A+QA5A+AABWQAABYg5A9Qg6A+hRgBQhQABg6g+g");
	this.shape_409.setTransform(22.9,-21.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#DDDDDD").s().p("AhdBUIgwgXIB+jJICdAdQgZAggaAvQgyBdAEBQQhLgdg/gcg");
	this.shape_410.setTransform(-5.4,-27.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AhYBoQgRgPAOgoQAPgpAkgqQAlgrAlgUQAmgUARAOQARAPgOAoQgOApglAqQglArglAUQgWAMgPAAQgLAAgHgGg");
	this.shape_411.setTransform(-23.3,-62.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#DDDDDD").s().p("AhYBoQgRgPAOgoQAPgpAkgqQAlgrAlgUQAmgUARAOQARAPgOAoQgOApglAqQglArglAUQgWAMgPAAQgLAAgHgGg");
	this.shape_412.setTransform(-23.3,-62.5);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AjxD5QhlhnABiSQgBiRBlhnQBlhoCMAAQCOAABkBoQBlBnAACRQAACShlBnQhkBoiOAAQiNAAhkhog");
	this.shape_413.setTransform(9.3,-47.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#C1C1C1").s().p("AjxDpQhVhjAAiOQAAiOBVhbQBXheCMAAQCNAABkBiQBkBjAACKQAACLhkBiQhkBjiNAAQiKAAhZhng");
	this.shape_414.setTransform(7.8,-45);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AiECVQg4g+AAhXQAAhWA4g+QA3g+BNAAQBOAAA4A+QA3A+AABWQAABXg3A+Qg4A+hOAAQhNAAg3g+g");
	this.shape_415.setTransform(-9.1,-29.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgBgGAAgHQABgNAFgEQAJgIARgD");
	this.shape_416.setTransform(-31.4,-11.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQACgIADgJQAHgRAKgHQAQgKAbgC");
	this.shape_417.setTransform(-24.5,-7.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("Ah3BJQgzgeAAgrQAAgqAzgeQAxgeBGAAQBGAAAzAeQAxAfAAApQAAArgxAeQgzAehGAAQhGAAgxgeg");
	this.shape_418.setTransform(-16.9,-12.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#301105").s().p("AAQJxQg1gfgIgvQgYAfgtATQguATg4AAQhQAAg3gkQg4gkAAg0QAAgjAegfIgFgfQgHg6ABgdQACgzATgfQgkgsgDhDQgDhAAfgwQARggAZgdQA0g8AygRQgdg5AAg/QAAgiAIgfQgBgMAHgIQAWhAAzgxQAFhDAGgnQAEgeAFgOQAFgRAIgGQAMgWATgFIAIgBQAbAAAbAfQAbAfARA5QAbgEAYAAQAdAAAgAFQAEgNAGgLQANghAVgYQAggoAoAAIAPACQAlAJAOA/QAKAvAFB6QAzBIAABVQAAA2gWAzQAnAfARAhQAaAzgaAzQAUA7AABAQAABSggBIQALAaAFAcIABABIABAJIAAACQAEATAAASIgBACIABABQAAA3gWAyQgWAygmAgQgYAggvATQguATg4AAQhKAAg1gfgAgQHyQgKARAAASQAAAqAxAfQAyAeBGAAQA1AAArgSQAqgRAUgcQAjgdAVgtQAVgvAAg1IgBgCIABgBQAAgMgDgWIgCgLQgGgfgNgbQAihIAAhSQAAhCgWg6IABgCQAZgqgSgpQgQgkgygnQAag0AAg6QAAhTgzhDQgEhwgHgsQgMhCgcgHIgKgBQgWAAgWATQgaAWgSAsQgJATgGAVQgjgJgnAAQgiAAggAHQgPhBgdghQgVgYgSAAIgCAAQgNAEgJATIgBAAQgPABgNCnQg1AwgVBCQgEACAAAEIABAEQgJAfAAAhQAABKAqA+IgIgBQgVAAgeAVQgfAUgeAiQgYAdgQAdQgbArACA6QABAjAMAdQAMAcAUATQgXAagDAxQgCAfAHA+IAHAoQggAbAAAgQAAArAyAeQAyAfBHAAQBAAAAwgaQAwgZAJgmIAQgLg");
	this.shape_419.setTransform(4.8,-61.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000003").s().p("AgjAxQgFgEgBgFIgKg+QgBgHADgFQAEgFAGgBIA+gLIADAAQANAAACAMIALA+QABAGgDAFQgEAGgHABIhAALQgGABgEgEgAgfgWIAJA1IA2gJIgKg1g");
	this.shape_420.setTransform(-12.4,-19.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000003").s().p("AgnAcQgEgEgBgGIgEgTQgBgHAEgFQAEgFAGgBIBBgLQAFAAAFADQAEAEABAFIAEAUQABAGgEAGQgEAFgGABIhBAMQgFAAgFgEgAgbAAIACAKIA1gJIgCgLg");
	this.shape_421.setTransform(-13.9,-28.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000003").ss(2,1).p("AgfAFIA/gJ");
	this.shape_422.setTransform(-25.5,-30.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#A26615").s().p("AhiCYQgfgmgLhbQgIg/ACgfQADgxAZgZIANALQASAKAXAAQAKAAAKgCQAWgEAWgbQALgNAHgMQArAMAiAuQAgAsAMA6QAXBxgnAuQgaAehOANQgYADgRAAQgxAAgbgfgAh+g5QgBAcAHAyQAKBYAeAgQAUAWAmAAQASAAAUgDQAmgHASgHQAbgJANgTQAbgngUhhQgKgygZglQgZgmghgPQgfAsgjAHQgKADgOAAQgdAAgVgNQgMAWAAAmg");
	this.shape_423.setTransform(-17.4,-24.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#F6D702").s().p("AhTClQgsghgNhtQgIg+ACgfQADgyAZgZIASANQAZANAfgHQAWgEAWgbQALgNAHgMQArANAiAtQAgAsAMA6QAXBygnAuQgaAdhOANQgUADgSAAQgpAAgXgSg");
	this.shape_424.setTransform(-17.4,-24.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#F6D702").p("AASAMQgKANgKAGQgMAFgIgFQgHgGACgMQABgNAJgMQAKgNAKgFQAMgGAHAGQAIAFgCANQgBAMgJAMg");
	this.shape_425.setTransform(-28.7,-58.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FE7030").s().p("AgWAfQgHgGACgMQABgNAJgMQAKgNAKgFQAMgGAHAGQAIAFgCANQgBAMgJAMQgKANgKAGQgGADgFAAQgFAAgEgDg");
	this.shape_426.setTransform(-28.7,-58.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#ED5E4A").ss(1,1).p("AALAPQgMgDgEgIQgDgEgBgHIgBgH");
	this.shape_427.setTransform(-24.4,-40.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#ED5E4A").ss(1,1).p("AAPAVQgSgFgFgKQgDgGgCgLIgBgJ");
	this.shape_428.setTransform(-21.1,-42);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AhABmQgegogDg6QgCg5AbgqQAagqApgCQAngBAfAnQAeAoADA5QACA5gaAqQgbAqgpACIgEABQglAAgdgmg");
	this.shape_429.setTransform(-24.2,-50.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#F6D702").p("AAOgXQAWANALAOQALAQgFAKQgGAKgTgCQgUgCgVgNQgWgNgLgOQgLgQAFgKQAGgJATABQAUACAVANg");
	this.shape_430.setTransform(20.5,-62.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FE7030").s().p("AAcAmQgUgCgVgNQgWgNgLgOQgLgQAFgKQAGgJATABQAUACAVANQAWANALAOQALAQgFAKQgFAJgOAAIgGgBg");
	this.shape_431.setTransform(20.5,-62.9);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#ED5E4A").ss(1,1).p("AAHASQgLgHgCgJQgBgEABgIIACgH");
	this.shape_432.setTransform(-3,-71.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#ED5E4A").ss(1,1).p("AAJAZQgPgKgCgMQgBgGABgLIACgK");
	this.shape_433.setTransform(0.5,-71.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#DDDDDD").ss(2,1).p("AgQApIARgMQARgXgBgu");
	this.shape_434.setTransform(4.8,-71.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AB+CjQgygKhsg/Qg1gegogmQgUAKgVABQgXAAgTgLQgggTgIgkQgIgkATgiQAMgVATgMQASgNAVgDQAkgVBFANQBFAMBJArQBpA8AlArQAyA5gjA8QgdAzg3AAQgMAAgPgDg");
	this.shape_435.setTransform(17.7,-71.7);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#DDDDDD").s().p("AB+CjQgzgKhrg/Qg1gegogmQgUAKgVABQgXAAgTgLQgggTgIgjQgIglATgiQAMgVATgMQASgNAVgDQAkgVBFANQBFAMBJArQBpA9AlAqQAyA5gjA8QgdAzg3AAQgMAAgPgDg");
	this.shape_436.setTransform(16.6,-72.7);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#DDDDDD").s().p("AB+CjQgzgKhrg/Qg1gegogmQgUAKgVABQgXAAgTgLQgggTgIgjQgIglATgiQAMgVATgMQASgNAVgDQAkgVBFANQBFAMBJArQBpA9AlAqQAyA5gjA8QgdAzg3AAQgMAAgPgDg");
	this.shape_437.setTransform(16.6,-69.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000101").s().p("AgRAiIgNgMIAHgGQAIgIAEgGQADgDABgPQACgOAEgEQAFgFAHgCQAHgBAFADQAGAFABAHQACAIgEAEQgEAEgNAGQgKAEgCAKQgGAUADANIAAAAQgGAAgHgIg");
	this.shape_438.setTransform(-11.2,-53.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#FFFFFF").ss(0.5,1).p("ACZBCQALgBAGgCQAQgFghAIgAivhEIASAkQAgApBIAcQBZAkBfgFQAMgBAKgB");
	this.shape_439.setTransform(0.1,-61.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#ED5E4A").s().p("AilDIQicgeAGhxQADgjASgmIARggIAaggIAahQIAVAUQAaAZAfATQBgA8BdgRQBegSBHhHQAkgkARggQAcARAcAjQgYAlgnAnQhPBQhNAPQgcCShGAlQgcAPguAAQgmAAg0gLg");
	this.shape_440.setTransform(7.2,-56.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#ED5E4A").ss(1,1).p("AgigKIANgCQAQgBAIAEQAQAIAQAO");
	this.shape_441.setTransform(26.9,-80);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#ED5E4A").ss(1,1).p("AgvAKIAPgKQASgJANAAQAVAAAcAJ");
	this.shape_442.setTransform(26.5,-85.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#ED5E4A").ss(1,1).p("Ai1AYQAKAAAjgQQAigQAaAAQATAAA/AQQA/ASAkgCQAqgBAWgXQALgMACgM");
	this.shape_443.setTransform(1.5,-79.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").ss(1,1).p("AAlASQgEgIgGgIQgNgPgPgDQgPgDgLAHIgJAI");
	this.shape_444.setTransform(-15.6,-93.1);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#000000").ss(1,1).p("Ag8APIAVgOQAagOAYgBQAYgBAQAKQAIAEADAE");
	this.shape_445.setTransform(9.8,-92.4);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#ED5E4A").s().p("AA3BeQg/g9g0AAQgFABgDgEQgDgEABgEQAOhDAhgfQAZgYAaAGQAZAFAJA1QAGAgADBbQABAGgGADIgFAAQgDAAgDgCg");
	this.shape_446.setTransform(23.2,-112.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AAfBTQhBg5g0ALQAPhmAqgvQAfgkAgAIQAgAIALBUQAEAjAGCcQgWgfgigdg");
	this.shape_447.setTransform(24.5,-110.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AjMC7QhUhOAAhtQAAhtBUhMQBVhOB3AAQApAAAqALQBaAZA5BFQA7BGAABYQAABthVBOQhVBNh3AAQh3AAhVhNg");
	this.shape_448.setTransform(9.3,-87);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#ED5E4A").s().p("AgvABQAMiMAOgCQAigCAQAgQARAlAKBuQghgKgqA5IglA7QADhGAGhHg");
	this.shape_449.setTransform(-6,-108.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AhDAGQAGiJAlgKQATgFAZAiQAmAxALBjQgogKgzA5IgsA7QgEhDADhFg");
	this.shape_450.setTransform(-3.4,-110.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgBgGAAgHQABgNAGgEQAJgIAQgD");
	this.shape_451.setTransform(5.3,-6.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgBgHABgJQACgRAHgHQAMgKAXgF");
	this.shape_452.setTransform(8.3,-4.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQABgIAEgJQAGgRALgHQAQgKAbgC");
	this.shape_453.setTransform(12.2,-2.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("Ah4BJQgxgeAAgrQAAgpAxgfQAzgeBFAAQBHAAAxAeQAzAeAAAqQAAArgzAeQgxAehHAAQhFAAgzgeg");
	this.shape_454.setTransform(19.1,-8.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#F6D702").p("AAjAHQgFAWgNANQgOANgNgDQgOgDgHgRQgHgRAEgVQAEgWAOgNQANgNAOADQAOADAHARQAHASgEAUg");
	this.shape_455.setTransform(33.3,-21.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FE7030").s().p("AgKA0QgOgDgHgRQgHgRAEgVQAEgWAOgNQANgNAOADQAOADAHARQAHASgEAUQgFAWgNANQgLALgLAAIgFgBg");
	this.shape_456.setTransform(33.3,-21.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("Ah7CVQg0g9AAhYQAAhWA0g+QAzg9BIAAQBJAAAzA9QA0A+AABWQAABYg0A9QgzA+hJAAQhIAAgzg+g");
	this.shape_457.setTransform(25,-21.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#DDDDDD").s().p("AheBUIgvgXIB+jJICdAdQgZAggaAvQgyBdAEBQQhMgdg/gcg");
	this.shape_458.setTransform(-5.4,-27.9);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AhYBoQgRgPAOgoQAPgpAkgqQAkgrAmgUQAmgUARAOQARAPgOAoQgOApgmAqQglArgkAUQgWAMgPAAQgLAAgHgGg");
	this.shape_459.setTransform(-23.3,-62.5);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#DDDDDD").s().p("AhYBoQgRgPAOgoQAPgpAkgqQAkgrAmgUQAmgUARAOQARAPgOAoQgOApgmAqQglArgkAUQgWAMgPAAQgLAAgHgGg");
	this.shape_460.setTransform(-23.3,-62.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AjxD5QhkhnAAiSQAAiRBkhnQBkhoCNAAQCOAABkBoQBkBnAACRQAACShkBnQhkBoiOAAQiNAAhkhog");
	this.shape_461.setTransform(9.3,-47.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#C1C1C1").s().p("AjxDpQhVhjAAiPQAAiNBVhcQBXhdCMAAQCNAABkBjQBkBiAACKQAACMhkBiQhkBiiNAAQiKAAhZhng");
	this.shape_462.setTransform(7.8,-45);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgBgGABgHQAAgNAGgEQAJgIAQgD");
	this.shape_463.setTransform(-31.4,-11.7);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#301105").s().p("AAOJxQg0gfgIgvQgYAgguASQguATg3AAQhQAAg4gkQg3gjAAg1QAAgkAegeQgDgPgCgQQgHg7ABgcQABgzAUgeQglgugChCQgDhAAfgwQAPgdAbggQAzg8AzgRQgdg5AAg/QAAgeAIgjQgBgMAHgIQAWhBAzgwQAEg2AGg0QAFgeAEgOQAFgQAJgHQAMgVATgGIAIgBQAaAAAbAeQAdAiAPA3QAXgEAdAAQAhAAAbAFQAFgMAGgMQAOgiATgYQAhgnAoAAQAIAAAGACQAlAJAOBAQALAuAEB6QA0BHAABWQAAAzgSAtQBWAtgOBVIgEAXQgEAVgIAQQAQA2AAA2QAABRghBJQALAaAGAcIAAABIACAJIAAACQADAUAAASIAAACQAAA3gVAyQgWAygnAhQgXAfgvATQgvATg3AAQhKAAg2gfgAgSHzQgKAQAAASQAAAqAxAfQAyAeBHAAQA0AAAsgSQAqgRATgdQAkgdAUgsQAVgvAAg1IAAgCQAAgRgDgSIgBgHIgBgEQgGgegNgcQAjhIAAhSQAAg3gSg3QAKgQAEgXIAEgWQAHgqgWgeQgTgagtgTQAZgyAAg4QAAhSgzhEQgEhwgIgsQgLhCgcgHIgKgBQgWAAgWATQgaAWgSAsQgKATgFAVQglgJglAAQgiAAggAHQgQhBgdghQgVgYgRAAIgDAAQgMAEgKAUIAAAAQgQAAgMCnQg2AwgVBCQgDACAAAEIABAEQgJAfAAAhQAABJApA/IgHgBQgVABgfATQgfAVgdAiQgZAegPAcQgcArADA6QABAjAMAdQAMAcATATQgXAagDAxQgCAfAIA+IAGAoQgfAaAAAhQAAArAyAeQAyAfBHAAQBAAAAwgaQAvgZAJgmQAJgFAHgFg");
	this.shape_464.setTransform(4.9,-61.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000003").s().p("AgZA0QgGAAgEgDQgFgEAAgGIgLg9QgBgGADgGQAEgFAGgBIBBgLQAFgBAFAEQAEAEABAFIALA+QABAHgDAFQgEAFgGABIg+ALgAgfgWIAKA2IA1gKIgKg1g");
	this.shape_465.setTransform(-12.5,-19.9);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000003").s().p("AgdAfQgNAAgCgNIgEgTQAAgHADgFQADgFAHgBIA+gLIADAAQANAAACAMIAEAUQAAAHgDAFQgEAFgGABIg+ALgAgbAAIACALIA1gKIgCgLg");
	this.shape_466.setTransform(-13.9,-28.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#A26615").s().p("AhiCXQggglgLhbQgHg+ACgfQADgyAYgaIAOALQASALAWAAQALAAAKgCQAWgEAWgbQALgNAGgMQAsAMAiAuQAgAsAMA6QAXBygoAuQgaAdhNAMQgWAEgTAAQgxAAgbgggAh/g5QAAAaAGA0QALBYAeAgQAUAWAmAAQARAAAVgDQAlgGATgHQAbgKANgSQAbgngUhiQgKgxgZgmQgagmgggPQgfAsgjAIQgOACgLAAQgbAAgXgNQgLAWgBAmg");
	this.shape_467.setTransform(-17.4,-24.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#F6D702").s().p("AhUCmQgsgigNhsQgHg+ACggQADgxAYgaIATAOQAZAMAfgGQAWgFAWgaQALgNAGgNQAsANAiAtQAgAsAMA7QAXBygoAtQgaAehNAMQgVADgSAAQgpAAgXgRg");
	this.shape_468.setTransform(-17.4,-24.5);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#F6D702").p("AASANQgKANgKAFQgMAFgHgFQgIgFACgNQABgNAJgMQAKgNAKgFQAMgGAIAGQAHAFgBANQgCAMgJANg");
	this.shape_469.setTransform(-28.8,-58.4);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FE7030").s().p("AgVAfQgIgFACgNQABgNAJgMQAKgNAKgFQAMgGAIAGQAHAFgBANQgCAMgJANQgKANgKAFQgGADgFAAQgFAAgDgDg");
	this.shape_470.setTransform(-28.8,-58.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#ED5E4A").ss(1,1).p("AALAQQgNgEgEgHQgCgFgBgHIgBgH");
	this.shape_471.setTransform(-24.4,-40.6);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AhABmQgegogCg6QgDg4AagrQAbgqApgCQAngBAfAnQAeAoACA6QADA5gaAqQgbAqgpABIgEABQglAAgdgmg");
	this.shape_472.setTransform(-24.2,-50.4);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#F6D702").p("AAFgaQAZAEAPALQARALgCAKQgCAMgTAEQgTAFgYgEQgZgEgQgLQgQgLACgKQACgLATgFQATgFAYAEg");
	this.shape_473.setTransform(23,-60.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FE7030").s().p("AgDAbQgZgEgRgLQgQgLACgKQACgLATgFQATgFAYAEQAZAEAPALQARALgCAKQgCAMgTAEQgKADgMAAQgKAAgKgCg");
	this.shape_474.setTransform(23,-60.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#ED5E4A").ss(1,1).p("AAMAPQgMgDgFgHQgDgFgCgHIgBgH");
	this.shape_475.setTransform(-2,-60);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#ED5E4A").ss(1,1).p("AAQAUQgRgEgHgKQgDgGgDgKIgCgJ");
	this.shape_476.setTransform(1.2,-61.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#DDDDDD").ss(2,1).p("AgHAtQAHgFAFgNQAJgbgRgs");
	this.shape_477.setTransform(5.7,-63);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AgBBsQg8gLgygVQgPARgVAHQgVAIgWgDQgjgHgVgfQgUggAGgmQAEgXANgSQANgSASgKQAcghBEgLQBGgNBTAPQB3AUAyAcQBCAlgLBDQgMBIhMALQgNACgTAAQgzAAhbgPg");
	this.shape_478.setTransform(17.5,-68.5);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#DDDDDD").s().p("AgBBsQg5gKg1gWQgPARgVAHQgVAIgWgEQgjgGgVgfQgUggAGgmQAEgXANgSQANgSASgKQAbghBFgMQBGgMBTAOQB3AVAyAbQBDAlgMBEQgMBHhMAMQgOACgUAAQgzAAhZgPg");
	this.shape_479.setTransform(17.1,-69.2);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#DDDDDD").s().p("AgBBsQg5gKg1gWQgPARgVAHQgVAIgWgEQgjgGgVgfQgUggAGgmQAEgXANgSQANgSASgKQAbghBFgMQBGgMBTAOQB3AVAyAbQBDAlgMBEQgMBHhMAMQgOACgUAAQgzAAhZgPg");
	this.shape_480.setTransform(17.1,-66.2);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000101").s().p("AgRAjIgNgNIAHgGQAIgHAEgHQADgDACgPQABgOAEgDQAFgGAHgCQAIgBAEAEQAGAEABAHQACAIgEAEQgEAEgNAGQgKAFgCAKQgGATADANIAAAAQgGAAgHgHg");
	this.shape_481.setTransform(-11.2,-53.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#FFFFFF").ss(0.5,1).p("ACZBCQALgBAHgCQAPgFghAIgAiuhEIARAkQAhApBIAcQBZAkBfgFQAMAAAJgC");
	this.shape_482.setTransform(0,-61.2);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#ED5E4A").s().p("AimDJQicgfAHhxQACgjATgmIARggIAZgfIAbhRIAUAVQAbAYAeATQBgA8BdgRQBegRBIhIQAjgjARghQAcARAdAjQgYAlgoAoQhPBPhMAPQgcCThGAlQgcAOguAAQgnAAg0gKg");
	this.shape_483.setTransform(7.2,-56.6);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#ED5E4A").ss(1,1).p("AABAPIgCgd");
	this.shape_484.setTransform(-12.2,-97.9);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#ED5E4A").ss(1,1).p("AgFAMIAMgX");
	this.shape_485.setTransform(-9.7,-97.5);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#ED5E4A").ss(1,1).p("AAGAMIgLgX");
	this.shape_486.setTransform(5.7,-98.9);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#ED5E4A").ss(1,1).p("AgigKIANgCQAQgBAJAFQAPAHAQAP");
	this.shape_487.setTransform(26.8,-80);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#ED5E4A").ss(1,1).p("Ai1AYQAKAAAjgQQAigQAaAAQATAABAARQA+ARAkgCQAqgBAWgXQALgMACgL");
	this.shape_488.setTransform(1.4,-79.1);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#000000").ss(1,1).p("AAlASQgDgIgHgIQgNgPgOgDQgQgDgLAHIgJAI");
	this.shape_489.setTransform(-15.6,-93.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#000000").ss(1,1).p("Ag8APIAVgPQAagOAYAAQAYgBAQAJQAIAFACAE");
	this.shape_490.setTransform(9.7,-92.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#ED5E4A").s().p("AA3BeQg+g+g1ABQgFAAgDgDQgDgEABgEQAOhDAhgfQAZgYAaAGQAZAFAJA1QAGAfAEBbQAAAHgGADIgEAAQgEAAgDgCg");
	this.shape_491.setTransform(23.1,-112.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AAfBTQhBg5g0ALQAPhmApgvQAgglAgAIQAgAIALBUQAFAlAFCbQgWgfgigdg");
	this.shape_492.setTransform(24.5,-110.7);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AjMC7QhUhOAAhtQAAhsBUhOQBWhNB2AAQArAAAnALQBbAYA6BGQA6BGAABYQAABthUBOQhVBNh4AAQh2AAhWhNg");
	this.shape_493.setTransform(9.3,-87);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#ED5E4A").s().p("AgvABQALiNAPgBQAigCAQAgQARAlALBuQgigKgqA5IglA7QADhGAGhHg");
	this.shape_494.setTransform(-6,-108.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AhDAHQAGiJAlgLQATgFAZAjQAmAwAMBkQgpgLgzA5IgsA8QgEhDADhFg");
	this.shape_495.setTransform(-3.5,-110.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQAAgGAAgHQABgMAFgFQAJgIARgD");
	this.shape_496.setTransform(5.3,-6.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgBgIABgJQABgRAIgGQAMgLAXgE");
	this.shape_497.setTransform(8.3,-4.3);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#F6D702").p("AAjAHQgEAWgOANQgNANgOgDQgOgDgHgRQgHgRAEgVQAFgVANgOQANgNAOADQAOADAHARQAHASgEAUg");
	this.shape_498.setTransform(33.2,-21.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FE7030").s().p("AgKA0QgOgDgHgRQgHgRAEgVQAFgVANgOQANgNAOADQAOADAHARQAHASgEAUQgEAWgOANQgLALgKAAIgGgBg");
	this.shape_499.setTransform(33.2,-21.8);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("Ah8CVQgzg+AAhXQAAhWAzg+QA0g+BIAAQBJAAA0A+QAzA+AABWQAABXgzA+Qg0A+hJAAQhIAAg0g+g");
	this.shape_500.setTransform(24.9,-21.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#DDDDDD").s().p("AhdBUIgwgWIB+jKICdAdQgZAggaAvQgyBdAEBQQhLgdg/gcg");
	this.shape_501.setTransform(-5.4,-27.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AhYBoQgRgPAOgoQAOgpAlgqQAlgrAlgUQAmgVARAPQARAOgOAqQgOAoglAqQglArglAUQgWAMgPAAQgLAAgHgGg");
	this.shape_502.setTransform(-23.3,-62.5);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#DDDDDD").s().p("AhYBoQgRgPAOgoQAOgpAlgqQAlgrAlgUQAmgVARAPQARAOgOAqQgOAoglAqQglArglAUQgWAMgPAAQgLAAgHgGg");
	this.shape_503.setTransform(-23.3,-62.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AjxD5QhkhnAAiSQAAiRBkhnQBkhoCNAAQCOAABkBoQBlBnAACRQAACShlBnQhkBoiOAAQiNAAhkhog");
	this.shape_504.setTransform(9.3,-47.4);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AiECVQg4g+AAhXQAAhXA4g9QA3g+BNAAQBOAAA4A+QA3A9AABXQAABXg3A+Qg4A+hOAAQhNAAg3g+g");
	this.shape_505.setTransform(-9.1,-29.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQAAgGAAgHQABgMAFgFQAJgIARgD");
	this.shape_506.setTransform(-31.4,-11.7);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("Ah3BJQgzgeAAgrQAAgqAzgeQAxgeBGAAQBHAAAxAeQAyAfAAApQAAArgyAeQgxAehHAAQhGAAgxgeg");
	this.shape_507.setTransform(-16.9,-12.2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#301105").s().p("AAPJxQg0gfgIguQgYAegtATQgvASg3AAQhQABg3gkQg4gkAAgzQAAgmAegdIgFgeQgHg6ABgeQACgzATgfQgkgtgDhBQgDhBAfgxQAQgeAageQA0g8AygRQgdg5AAhAQAAghAIgfQgBgLAHgJQAXhBAygvQAFhHAGgjQAHg5APgLQANgWASgFIAIgBQAbAAAaAfQAcAgAQA4QAagEAaAAQAegBAeAHQAGgPAFgKQANggAVgaQAggnAoAAQAIAAAHACQAlAJAOA/QAKAvAFB6QAzBHAABVQAAAwgQAsQAxAZAJA9IABALIACAMQAGApgRAgQAUA7AAA+QAABQggBLQALAYAFAcIABACIABAJIAAACQADAVAAAQIAAACQAAA5gVAxQgWAygnAgQgXAggvATQguATg4AAQhKAAg2gfgAgRHyQgJARAAARQAAArAxAeQAxAfBHAAQA1AAArgRQAqgSAUgcQAjgeAUgtQAVguAAg2IAAgCQAAgPgCgTIgCgLQgGgfgNgaQAihIAAhTQAAhAgWg7QATgbgGgpIgDgYQgIg6g4gTQAWgyAAg1QAAhSgzhDQgEhwgHgsQgMhCgcgHIgKgBQgWAAgWASQgaAXgSAsQgIAPgHAYQgngJgjAAQgfABgjAHQgPhBgdghQgVgYgSAAIgDAAQgMAEgJAUIgBAAQgQABgMCmQg1AwgVBCQgEACAAAEIABADQgJAgAAAgQAABLAqA+IgIAAQgVgBgfAVQgfAUgdAiQgYAdgQAdQgcApADA9QABAhAMAeQAMAcAUATQgXAagDAxQgCAfAHA+IAGAoQgfAaAAAiQAAAqAyAfQAyAdBHAAQBAABAwgaQAwgZAJgmIAPgLg");
	this.shape_508.setTransform(4.8,-61.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000003").s().p("AgZA1QgFgBgFgDQgEgEgBgGIgLg+QgBgGAEgFQADgFAHgCIBAgLQAGABAEADQAFAEABAGIAKA+QABAGgDAFQgEAGgGABIg+ALgAgfgVIAKA1IA1gJIgJg1g");
	this.shape_509.setTransform(-12.5,-19.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000003").s().p("AgdAfQgFAAgFgDQgEgEgBgGIgEgTQgBgHAEgFQAEgFAGgBIA+gLIADAAQAFAAAFADQAEAEABAFIAEAUQABAHgEAFQgEAFgGABIg+ALgAgbAAIACALIA1gKIgCgLg");
	this.shape_510.setTransform(-13.9,-28.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#000003").ss(2,1).p("AgfAGIA/gK");
	this.shape_511.setTransform(-24.9,-27.6);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#A26615").s().p("AhiCXQgfglgLhbQgIg+ACgfQADgyAZgaIANALQASALAXAAQAKAAAKgCQAWgEAWgbQALgNAHgMQArAMAiAuQAgAsAMA6QAXBygnAuQgaAdhOAMQgWAEgTAAQgxAAgbgggAh+g5QgBAcAHAyQAKBYAeAgQAUAWAmAAQARAAAVgDQAmgGASgHQAbgKANgSQAbgogUhhQgKgxgZgmQgZgmghgPQgfAsgjAIQgOACgKAAQgcAAgWgNQgMAWAAAmg");
	this.shape_512.setTransform(-17.4,-24.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#F6D702").s().p("AhUCmQgrgigNhsQgIg/ACgfQADgyAZgZIASAOQAZAMAfgGQAWgFAWgaQALgNAHgNQArANAiAtQAgAsAMA7QAXBygnAtQgaAehOAMQgVADgSAAQgpAAgXgRg");
	this.shape_513.setTransform(-17.4,-24.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#F6D702").p("AASANQgKANgKAFQgMAFgIgFQgHgFACgNQABgNAJgMQAKgNAKgFQAMgGAHAGQAIAFgCANQgBAMgJANg");
	this.shape_514.setTransform(-28.7,-58.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FE7030").s().p("AgWAfQgHgFACgNQABgNAJgMQAKgNAKgFQAMgGAHAGQAIAFgCANQgBAMgJANQgKANgKAFQgGADgFAAQgFAAgEgDg");
	this.shape_515.setTransform(-28.7,-58.4);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#ED5E4A").ss(1,1).p("AALAPQgNgDgEgHQgCgFgBgHIgBgH");
	this.shape_516.setTransform(-24.4,-40.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#ED5E4A").ss(1,1).p("AAPAVQgSgFgFgKQgEgGgBgLIgBgJ");
	this.shape_517.setTransform(-21.1,-42);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("Ag/BmQgfgogCg5QgDg5AbgqQAbgrAogBQAogCAeAoQAeAnADA6QACA4gaArQgcAqgoACIgDAAQglAAgdgmg");
	this.shape_518.setTransform(-24.2,-50.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#F6D702").p("AgDgaQAYgDATAFQATAFABAMQACAKgRAKQgQALgZADQgYADgTgFQgTgFgBgLQgCgLARgKQARgKAYgEg");
	this.shape_519.setTransform(24.1,-58.4);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FE7030").s().p("AgnAZQgTgGgBgLQgCgKARgKQARgKAYgEQAYgDATAFQATAGABAKQACALgRAKQgQALgZADIgSABQgOAAgLgDg");
	this.shape_520.setTransform(24.1,-58.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#ED5E4A").ss(1,1).p("AAQAKQgOACgFgGQgEgDgFgHIgDgF");
	this.shape_521.setTransform(0.4,-50.7);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#ED5E4A").ss(1,1).p("AAWAOQgTACgIgIQgGgEgFgJIgFgI");
	this.shape_522.setTransform(2.9,-53.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#DDDDDD").ss(2,1).p("AAJArQAGgHAAgOQAAgbgdgl");
	this.shape_523.setTransform(6.6,-55.8);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AjbB9QgegYgFgnQgDgXAHgWQAGgTAPgQQAQgnA+ggQA/ghBUgMQB3gRA3AMQBLAPAKBEQAKBHhFAiQguAXh8ARQg6AJg4gGQgJAVgSAOQgRAOgWADIgMABQgdAAgYgUg");
	this.shape_524.setTransform(16.9,-63.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#DDDDDD").s().p("AjbB9QgdgZgGgmQgGgwAfggQAQgnA+ggQA/ghBUgMQB3gRA3AMQBLAPAKBEQAKBHhEAiQgvAXh8ARQg9AJg1gGQgJAVgRANQgSAOgWAEIgNABQgcAAgYgUg");
	this.shape_525.setTransform(16.2,-64.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#DDDDDD").s().p("AjbB9QgdgZgGgmQgGgwAfggQAQgnA+ggQA/ghBUgMQB3gRA3AMQBLAPAKBEQAKBHhEAiQgvAXh8ARQg9AJg1gGQgJAVgRANQgSAOgWAEIgNABQgcAAgYgUg");
	this.shape_526.setTransform(17.2,-61.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000101").s().p("AgQAjIgOgNIAHgGQAIgHAEgHQADgDACgPQABgOAEgEQAGgFAGgCQAIgBAEAEQAGAEABAHQACAIgEAEQgEAEgNAGQgJAFgDAKQgFATADANIgBAAQgFAAgHgHg");
	this.shape_527.setTransform(-11.2,-53.8);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#FFFFFF").ss(0.5,1).p("AiuhEIARAkQAgApBIAcQBaAkBegFQANAAAJgCQALgBAHgCQAPgEghAH");
	this.shape_528.setTransform(0,-61.2);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#ED5E4A").s().p("AilDJQicgfAGhxQACgjATgmIARggIAagfIAahRIAUAVQAbAYAeATQBhA8BdgRQBegSBHhHQAjgkARggQAcARAdAjQgYAlgnAoQhPBPhNAPQgcCThGAlQgcAOguAAQgmAAg0gKg");
	this.shape_529.setTransform(7.2,-56.6);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#ED5E4A").ss(1,1).p("AgFAMIALgY");
	this.shape_530.setTransform(-9.7,-97.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#ED5E4A").ss(1,1).p("AgigKIANgCQAQgBAIAFQAQAHAQAP");
	this.shape_531.setTransform(26.9,-80);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#ED5E4A").ss(1,1).p("Ai2AYQALAAAigQQAjgQAaAAQATAAA/AQQA/ASAlgCQApgBAWgXQALgMADgL");
	this.shape_532.setTransform(1.5,-79.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#ED5E4A").s().p("AA3BeQg/g+g1ABQgEAAgDgDQgDgEABgEQAOhDAhgfQAZgYAaAFQAZAGAJA1QAGAgADBaQABAHgGACIgFACQgDAAgDgDg");
	this.shape_533.setTransform(23.2,-112.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AAfBTQhBg5g0ALQAPhmApgvQAgglAgAIQAgAIALBUQAEAlAGCbQgWgfgigdg");
	this.shape_534.setTransform(24.5,-110.7);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AjMC7QhUhNAAhuQAAhsBUhOQBWhNB2AAQApAAApALQBbAZA6BFQA6BHAABXQAABuhUBNQhWBNh3AAQh2AAhWhNg");
	this.shape_535.setTransform(9.3,-87);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#ED5E4A").s().p("AgvABQALiNAOgBQAjgCAPAgQASAlAKBuQghgKgqA5IgkA7QADhGAFhHg");
	this.shape_536.setTransform(-6,-108.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AhDAHQAFiJAlgLQATgFAaAjQAmAwALBkQgogLgzA5IgsA8QgEhDADhFg");
	this.shape_537.setTransform(-3.4,-110.7);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQAAgGAAgHQABgMAFgFQAJgIAQgD");
	this.shape_538.setTransform(5.3,-6.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("Ah4BJQgxgeAAgrQAAgqAxgeQAygeBGAAQBHAAAxAeQAzAeAAAqQAAArgzAeQgxAehHAAQhGAAgygeg");
	this.shape_539.setTransform(19.1,-8.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#F6D702").p("AAjAHQgFAWgNANQgNANgOgDQgOgDgHgRQgHgRAEgVQAEgWAOgNQANgNAOADQAOADAHARQAHASgEAUg");
	this.shape_540.setTransform(33.3,-21.8);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FE7030").s().p("AgKA0QgOgDgHgRQgHgRAEgVQAEgWAOgNQANgNAOADQAOADAHARQAHASgEAUQgFAWgNANQgLALgKAAIgGgBg");
	this.shape_541.setTransform(33.3,-21.8);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#C1C1C1").s().p("AiJCVQg6g+AAhXQAAhWA6g+QA5g+BQAAQBSAAA4A+QA6A+AABWQAABXg6A+Qg4A+hSAAQhQAAg5g+g");
	this.shape_542.setTransform(22.9,-21.8);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#DDDDDD").s().p("AheBUIgvgXIB+jJICdAdQgaAggZAuQgyBeADBQQhLgdg/gcg");
	this.shape_543.setTransform(-5.4,-27.9);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AhYBoQgRgOAOgpQAOgpAlgqQAlgrAlgUQAmgUARAOQARAOgOApQgOApglAqQglArglAUQgWAMgPAAQgLAAgHgGg");
	this.shape_544.setTransform(-23.3,-62.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#DDDDDD").s().p("AhYBoQgRgOAOgpQAOgpAlgqQAlgrAlgUQAmgUARAOQARAOgOApQgOApglAqQglArglAUQgWAMgPAAQgLAAgHgGg");
	this.shape_545.setTransform(-23.3,-62.5);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AjxD6QhlhoABiSQgBiRBlhoQBkhnCNAAQCOAABlBnQBjBoABCRQgBCShjBoQhlBniOAAQiNAAhkhng");
	this.shape_546.setTransform(9.3,-47.4);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#C1C1C1").s().p("AjyDpQhUhjAAiPQAAiNBUhcQBYhdCMAAQCNAABkBjQBkBiABCKQgBCLhkBjQhkBiiNAAQiKAAhahng");
	this.shape_547.setTransform(7.8,-45);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AiECVQg4g9AAhYQAAhXA4g9QA3g+BNAAQBOAAA3A+QA4A9AABXQAABYg4A9Qg3A9hOAAQhNAAg3g9g");
	this.shape_548.setTransform(-9.1,-29.2);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgBgIABgJQABgQAIgHQAMgLAXgE");
	this.shape_549.setTransform(-28.3,-9);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#FFFFFF").ss(0.5,1).p("AiuhEIARAkQAhApBIAcQBZAkBfgFQAMAAAJgCQALgBAHgCQAPgFghAI");
	this.shape_550.setTransform(0,-61.2);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#FFFFFF").ss(0.5,1).p("AivhEIASAkQAgApBIAcQBZAkBfgFQAMgBAKgBQALgBAGgCQAQgFghAI");
	this.shape_551.setTransform(0.1,-61.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#FFFFFF").ss(0.5,1).p("AivhEIASAkQAgApBIAcQBaAkBegFQANgBAJgBQALgBAGgCQARgFgiAI");
	this.shape_552.setTransform(0,-61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_318,p:{x:-16.9,y:-12.2}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304,p:{x:19.1,y:-8.1}},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289,p:{x:8.2,y:-99.4}},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268,p:{x:-14.7}},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:-23.5,y:-20.1}},{t:this.shape_264,p:{x:-25.9,y:-19.3}},{t:this.shape_263},{t:this.shape_262,p:{x:-12.4}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258}]}).to({state:[{t:this.shape_304,p:{x:-16.9,y:-12.2}},{t:this.shape_366},{t:this.shape_365,p:{x:-28.4,y:-9}},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_318,p:{x:19.1,y:-8.1}},{t:this.shape_353},{t:this.shape_352,p:{x:8.3,y:-4.3}},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_298},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_289,p:{x:8.1,y:-99.4}},{t:this.shape_340},{t:this.shape_287},{t:this.shape_339},{t:this.shape_338},{t:this.shape_284},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_274},{t:this.shape_273},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_268,p:{x:-14.7}},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:-23.6,y:-20.1}},{t:this.shape_323,p:{y:-19.3,x:-25.9}},{t:this.shape_264,p:{x:-21.1,y:-19.9}},{t:this.shape_262,p:{x:-12.5}},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319}]},2).to({state:[{t:this.shape_418},{t:this.shape_417,p:{y:-7.4,x:-24.5}},{t:this.shape_352,p:{x:-28.4,y:-9}},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405,p:{x:19.1,y:-8.1}},{t:this.shape_404},{t:this.shape_365,p:{x:8.3,y:-4.3}},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_345},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_289,p:{x:8.1,y:-99.3}},{t:this.shape_392},{t:this.shape_287},{t:this.shape_391},{t:this.shape_390},{t:this.shape_284},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373,p:{x:-14.7}},{t:this.shape_372,p:{x:-25.5,y:-30.7}},{t:this.shape_371,p:{x:-24.9,y:-27.6}},{t:this.shape_265,p:{x:-23.6,y:-20}},{t:this.shape_323,p:{y:-19.2,x:-25.9}},{t:this.shape_264,p:{x:-21.1,y:-19.9}},{t:this.shape_370,p:{x:-12.5}},{t:this.shape_322},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367}]},2).to({state:[{t:this.shape_318,p:{x:-16.9,y:-12.2}},{t:this.shape_417,p:{y:-7.5,x:-24.5}},{t:this.shape_352,p:{x:-28.3,y:-9}},{t:this.shape_463},{t:this.shape_415},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_357},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453,p:{x:12.2,y:-2.8}},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_290},{t:this.shape_289,p:{x:8.2,y:-99.4}},{t:this.shape_392},{t:this.shape_287},{t:this.shape_440},{t:this.shape_439},{t:this.shape_284},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_373,p:{x:-14.6}},{t:this.shape_422},{t:this.shape_371,p:{x:-24.8,y:-27.6}},{t:this.shape_265,p:{x:-23.5,y:-20.1}},{t:this.shape_323,p:{y:-19.3,x:-25.8}},{t:this.shape_264,p:{x:-21.1,y:-19.9}},{t:this.shape_370,p:{x:-12.4}},{t:this.shape_261},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419}]},2).to({state:[{t:this.shape_507},{t:this.shape_417,p:{y:-7.4,x:-24.5}},{t:this.shape_365,p:{x:-28.4,y:-9}},{t:this.shape_506},{t:this.shape_505},{t:this.shape_414},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_409},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_318,p:{x:19.1,y:-8.1}},{t:this.shape_353},{t:this.shape_497},{t:this.shape_496,p:{x:5.3,y:-6.3}},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_343},{t:this.shape_487},{t:this.shape_486},{t:this.shape_289,p:{x:8.1,y:-99.3}},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_284},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_274},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_268,p:{x:-14.7}},{t:this.shape_371,p:{x:-25.5,y:-30.7}},{t:this.shape_372,p:{x:-24.9,y:-27.6}},{t:this.shape_265,p:{x:-23.6,y:-20}},{t:this.shape_323,p:{y:-19.3,x:-25.9}},{t:this.shape_264,p:{x:-21.1,y:-19.9}},{t:this.shape_262,p:{x:-12.5}},{t:this.shape_322},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464}]},2).to({state:[{t:this.shape_405,p:{x:-16.9,y:-12.2}},{t:this.shape_453,p:{x:-24.5,y:-7.4}},{t:this.shape_549},{t:this.shape_496,p:{x:-31.4,y:-11.7}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_408},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_417,p:{y:-2.8,x:12.2}},{t:this.shape_352,p:{x:8.3,y:-4.3}},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_295},{t:this.shape_489},{t:this.shape_532},{t:this.shape_292},{t:this.shape_531},{t:this.shape_486},{t:this.shape_289,p:{x:8.2,y:-99.3}},{t:this.shape_530},{t:this.shape_287},{t:this.shape_529},{t:this.shape_528},{t:this.shape_284},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_268,p:{x:-14.6}},{t:this.shape_371,p:{x:-25.5,y:-30.7}},{t:this.shape_511},{t:this.shape_265,p:{x:-23.5,y:-20}},{t:this.shape_264,p:{x:-25.9,y:-19.3}},{t:this.shape_263},{t:this.shape_262,p:{x:-12.4}},{t:this.shape_261},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508}]},2).to({state:[{t:this.shape_507},{t:this.shape_417,p:{y:-7.4,x:-24.5}},{t:this.shape_365,p:{x:-28.4,y:-9}},{t:this.shape_506},{t:this.shape_505},{t:this.shape_414},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_409},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_318,p:{x:19.1,y:-8.1}},{t:this.shape_353},{t:this.shape_497},{t:this.shape_496,p:{x:5.3,y:-6.3}},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_343},{t:this.shape_487},{t:this.shape_486},{t:this.shape_289,p:{x:8.1,y:-99.3}},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_550},{t:this.shape_284},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_274},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_268,p:{x:-14.7}},{t:this.shape_371,p:{x:-25.5,y:-30.7}},{t:this.shape_372,p:{x:-24.9,y:-27.6}},{t:this.shape_265,p:{x:-23.6,y:-20}},{t:this.shape_323,p:{y:-19.3,x:-25.9}},{t:this.shape_264,p:{x:-21.1,y:-19.9}},{t:this.shape_262,p:{x:-12.5}},{t:this.shape_322},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464}]},6).to({state:[{t:this.shape_318,p:{x:-16.9,y:-12.2}},{t:this.shape_417,p:{y:-7.5,x:-24.5}},{t:this.shape_352,p:{x:-28.3,y:-9}},{t:this.shape_463},{t:this.shape_415},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_357},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453,p:{x:12.2,y:-2.8}},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_290},{t:this.shape_289,p:{x:8.2,y:-99.4}},{t:this.shape_392},{t:this.shape_287},{t:this.shape_440},{t:this.shape_551},{t:this.shape_284},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_373,p:{x:-14.6}},{t:this.shape_422},{t:this.shape_371,p:{x:-24.8,y:-27.6}},{t:this.shape_265,p:{x:-23.5,y:-20.1}},{t:this.shape_323,p:{y:-19.3,x:-25.8}},{t:this.shape_264,p:{x:-21.1,y:-19.9}},{t:this.shape_370,p:{x:-12.4}},{t:this.shape_261},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419}]},2).to({state:[{t:this.shape_418},{t:this.shape_417,p:{y:-7.4,x:-24.5}},{t:this.shape_352,p:{x:-28.4,y:-9}},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405,p:{x:19.1,y:-8.1}},{t:this.shape_404},{t:this.shape_365,p:{x:8.3,y:-4.3}},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_345},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_289,p:{x:8.1,y:-99.3}},{t:this.shape_392},{t:this.shape_287},{t:this.shape_391},{t:this.shape_390},{t:this.shape_284},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373,p:{x:-14.7}},{t:this.shape_372,p:{x:-25.5,y:-30.7}},{t:this.shape_371,p:{x:-24.9,y:-27.6}},{t:this.shape_265,p:{x:-23.6,y:-20}},{t:this.shape_323,p:{y:-19.2,x:-25.9}},{t:this.shape_264,p:{x:-21.1,y:-19.9}},{t:this.shape_370,p:{x:-12.5}},{t:this.shape_322},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367}]},2).to({state:[{t:this.shape_304,p:{x:-16.9,y:-12.2}},{t:this.shape_366},{t:this.shape_365,p:{x:-28.4,y:-9}},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_318,p:{x:19.1,y:-8.1}},{t:this.shape_353},{t:this.shape_352,p:{x:8.3,y:-4.3}},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_298},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_289,p:{x:8.1,y:-99.4}},{t:this.shape_340},{t:this.shape_287},{t:this.shape_339},{t:this.shape_552},{t:this.shape_284},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_274},{t:this.shape_273},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_268,p:{x:-14.7}},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:-23.6,y:-20.1}},{t:this.shape_323,p:{y:-19.3,x:-25.9}},{t:this.shape_264,p:{x:-21.1,y:-19.9}},{t:this.shape_262,p:{x:-12.5}},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319}]},2).to({state:[{t:this.shape_318,p:{x:-16.9,y:-12.2}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304,p:{x:19.1,y:-8.1}},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289,p:{x:8.2,y:-99.4}},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268,p:{x:-14.7}},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:-23.5,y:-20.1}},{t:this.shape_264,p:{x:-25.9,y:-19.3}},{t:this.shape_263},{t:this.shape_262,p:{x:-12.4}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258}]},2).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-127,83.7,131.2);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-36.4,-127,82,131.2), rect, rect=new cjs.Rectangle(-36,-127,81.6,131.2), rect, rect, rect, rect=new cjs.Rectangle(-36.4,-127,82.2,131.2), rect, rect=new cjs.Rectangle(-36,-127,81.6,131.2), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-36.4,-127,82.2,131.2), rect, rect=new cjs.Rectangle(-36,-127,81.6,131.2), rect, rect, rect, rect=new cjs.Rectangle(-36.4,-127,82,131.2), rect, rect=new cjs.Rectangle(-36,-127,83.7,131.2), rect, rect, rect, rect, rect];


(lib.manekiNeko_etatTouche_tour2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6D702").s().p("AANK0QgtgPgegcQg4AhhKAAQhVAAhLglQhUgpgYhDQgYhAAng8QgThuAZhFQggg7ABhHQAChJAjg3QA2hfBCgtQgUhKAQhUQgBgYANgVQAWg8AtgxQAEgpAGgvQAEgcAGgWQAIgdAPgQQAUgfAegNQATgJAVAAQBGAAA0BhIAJATIAnABQAag3AngeQAogeAtAAQAmAAAhAVQAzAfAQBRQAIAugBBfIAAAJQAhA1AMA+QALA9gLA9QAmAhAOA2IAGAXQATBFgcA4QAOA+gFBBQgEBBgWA8QAIAXADAVIABADIAAAAIABADQAEAbAAAbQAABEgaA8QgaA9gvApQgaAggqAUQg+AehVAAQhGAAg5gVgAgUH1QgiA7A4AnQAzAiBXAAQA0AAApgOQAtgPATgcQAlgfAVgwQATguAAgyQAAgWgDgSIgBgFQgGghgOgbQAdg9AFhGQAEhFgVhBQAigkgPg3IgGgWQgPg5g4gMQAcg9gIhFQgIhDgpg2QAChHgDgtQgFhVgegSQgPgJgOAAQgaAAgZAcQgUAXgNAgQgKATgGAVQgkgJglAAQgiAAghAHQgFgagXgqQgdg3gXAAQgPAAgMAYIAAAAQgPABgNCnQg2AxgVBBQgcB5A6BZIgMgBQgoAAgwAzQglAngWArQgfAuAGBAQAFBAAnAmQgdAhABBEQABAoANBDQhBA4BFA5QBAA1BjAAQA1AAAkgVQApgYALgvIAQgLg");
	this.shape.setTransform(47.1,71.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.manekiNeko_etatTouche_tour2, rect = new cjs.Rectangle(0,0,94.2,142.6), [rect]);


(lib.manekiNeko_etatTouche_statique2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1).p("AguAYIBdgv");
	this.shape.setTransform(19.6,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1).p("AgpgXIBSAv");
	this.shape_1.setTransform(19.9,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1).p("Ag1AcIBrg3");
	this.shape_2.setTransform(43.8,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1).p("AgzgdIBnA8");
	this.shape_3.setTransform(43.8,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000003").s().p("AgpAtQgMgMABgeQABgbAMgLQAVgVASABQAhAAAOAxQAOAxgWADIgZAHQgPAEgKgBQgTAAgLgLgAgZgUQgGAFgBAUQAAAUAGAGQAEAFALAAQALAAAXgGIAHgCQACgHgCgNQgDgPgIgNQgKgQgJABQgKAAgPAPg");
	this.shape_4.setTransform(21.6,104.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000003").s().p("AgtAWQgMgMAXgXQAQgRASAAQAbAAAQAbQAQAZgWAEQgVAFgWAAQgdAAgKgJgAgTAAIgIAIQAHADAOAAQAPAAASgDQgDgHgHgEQgIgHgJAAQgJAAgKAKg");
	this.shape_5.setTransform(20,96.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000003").ss(2).p("AgHgqIAPBV");
	this.shape_6.setTransform(21.6,105.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000003").ss(2).p("AgqAIIBVgP");
	this.shape_7.setTransform(21.6,105.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000003").ss(2,1).p("AgJg6IATB1");
	this.shape_8.setTransform(13,104.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000003").ss(2,1).p("AgJg6IATB1");
	this.shape_9.setTransform(8.2,105.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000003").ss(2,1).p("AgMhKIAZCV");
	this.shape_10.setTransform(10.5,104.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000003").ss(2,1).p("AgfAFIA/gJ");
	this.shape_11.setTransform(9.2,97.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000003").ss(2,1).p("AgfAGIA/gL");
	this.shape_12.setTransform(8.5,94.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000003").ss(2,1).p("AgpAIIBUgP");
	this.shape_13.setTransform(19.4,92.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A26615").s().p("AgVC2QgqgFghgpQgegmgOg5QgOg2AGgyQAHg3AcgdQAXAWAcAAQAaAAAXgQQAWgQAOgaQArANAiAtQAgAsAMA6QASBYgiA5QgkA+hTAAQgQAAgOgCgAiBgmQgCAyASAyQAQArAZAbQAZAbAdAEIAbABQA9AAAggmQAUgZAGgmQAGgmgKgsQgJgxgagmQgZglghgQQgRAZgYAOQgZAPgbAAQgYAAgXgOQgTAggBAxg");
	this.shape_14.setTransform(16.1,100.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6D702").s().p("AgVC2QgqgGghgpQgeglgOg5QgOg2AGgzQAHg2AcgdQAhAgArgOQAngNAVgpQArAMAiAuQAgAsAMA6QAUBggpA6QgmA1hLAAQgOAAgRgCg");
	this.shape_15.setTransform(16.1,100.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F6D702").p("AALAHQgfArgFgeQABgmAAAAQAAAAAjgNQAfgEgfAqg");
	this.shape_16.setTransform(6,67.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FE7030").s().p("AgZAUIABgmIAjgNQAfgEgfAqQgSAZgJAAQgHAAgCgMg");
	this.shape_17.setTransform(6,67.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#ED5E4A").ss(1,1).p("AALAQQgWgHABgX");
	this.shape_18.setTransform(9.6,84.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#ED5E4A").ss(1,1).p("AAPAVQgegKABgf");
	this.shape_19.setTransform(12.9,83);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag+BkQgggigDg9QgCg8AdglQAagiAngCQAngCAdAfQAgAiADA+QACA9gdAlQgaAhgnACIgEAAQgkAAgcgeg");
	this.shape_20.setTransform(9.8,74.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F6D702").p("AgHgZQAygOAIAaQAIAZg1AOQgyAOgHgaQgHgZAzgOg");
	this.shape_21.setTransform(60.4,67.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FE7030").s().p("AgzAOQgHgZAzgOQAygOAIAaQAIAZg1AOQgQAFgMAAQgYAAgFgRg");
	this.shape_22.setTransform(60.4,67.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#ED5E4A").ss(1,1).p("AARAHQgWAGgLgV");
	this.shape_23.setTransform(37.7,78.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#ED5E4A").ss(1,1).p("AAXALQgeAHgPgd");
	this.shape_24.setTransform(39.9,75.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DDDDDD").ss(2,1).p("AAPApQAGgHgCgOQgDgcgjgg");
	this.shape_25.setTransform(43.2,72.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AjMCVQgkgVgLglQgNgpAcgmQAMgqA6gqQA2gnBLgaQBLgZBBgBQBIgBAjAdQBwBfikBPQg6AchQAUQhDARgjABQgOAugmALQgKACgKAAQgZAAgZgPg");
	this.shape_26.setTransform(53.2,63.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C1C1C1").s().p("AjMCVQgkgVgLgkQgNgpAcgnQAMgqA6gqQA2gnBLgZQBLgaBBgBQBIgBAjAeQBxBeilBPQg6AchQAUQhCARgkABQgOAugmALQgKACgKAAQgZAAgZgPg");
	this.shape_27.setTransform(52.9,62.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DDDDDD").s().p("AjMCVQgkgVgLgkQgNgpAcgnQAMgqA6gqQA2gnBLgZQBLgaBBgBQBIgBAjAeQBwBeikBPQg6AchQAUQhDARgjABQgOAugmALQgKACgKAAQgZAAgZgPg");
	this.shape_28.setTransform(53.8,65.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000101").s().p("AgPAhIgNgNQALgZAMgRQATgbAOAPQAFAFgSAbQgTAdACAOQgGAAgHgIg");
	this.shape_29.setTransform(22.7,71.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F6D702").s().p("AgyA3QgYgVAAgiQAAgiAYgTQAUgTAeABQAfgBAUATQAYATAAAiQAAAigYAVQgUARgfABQgegBgUgRg");
	this.shape_30.setTransform(25.9,68.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(0.5,1).p("AiyhIQAUBMCBAtQB8ArBJgiQgIgCgKAE");
	this.shape_31.setTransform(34.4,64.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ED5E4A").s().p("Aj5CtQhEgjgIhDQgIg8AqhBIAaggIAahQQBvB3CXgSQCQgRBrh+IAeANQAOAHAKALQgfAoguArQhbBWhNAPQgaCGhZAvQgoAVguAAQg8AAhHgkg");
	this.shape_32.setTransform(42.6,69.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#ED5E4A").ss(1,1).p("AABAPIgBgd");
	this.shape_33.setTransform(21.8,27.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#ED5E4A").ss(1,1).p("AgFAMIALgX");
	this.shape_34.setTransform(24.3,27.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#ED5E4A").ss(1,1).p("AAAAPIABgd");
	this.shape_35.setTransform(42.2,25.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#ED5E4A").ss(1,1).p("AAGAMIgLgX");
	this.shape_36.setTransform(39.7,26.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#ED5E4A").ss(1,1).p("AgigLQApgHAcAf");
	this.shape_37.setTransform(60.9,45.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#ED5E4A").ss(1,1).p("AgvAJQAUgPAbgCQAYgCAYAK");
	this.shape_38.setTransform(60.5,39.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#ED5E4A").ss(1,1).p("Ai1AZQASAAAigQQAigQATgBQAUgBAgAJQAvAOADAAQA7AMAdgDQAygFASgp");
	this.shape_39.setTransform(35.5,45.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ED5E4A").s().p("AgtgOQAVgOAYgCQAXgCAXALQgJAvgkAFIgGAAQgfAAgJgtg");
	this.shape_40.setTransform(27.4,48.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ED5E4A").s().p("AAfBQQgcgYgDgBIgxgSQgRgHgEgbQgEgeAhgkQAigmAeAHQAcAGAPBYQAOBXgTAJIgEAAQgIAAgSgQg");
	this.shape_41.setTransform(57.7,12.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAfBTQhBg5g0ALQAPhmAqgvQAfgkAgAIQAgAIALBUQAEAjAGCcQgWgfgigdg");
	this.shape_42.setTransform(58.5,14.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AjFDCQhbhIAAh6QAAh5BbhHQBRhBB0AAQB1AABRBBQBbBHAAB5QAAB6hbBIQhRBAh1AAQh0AAhRhAg");
	this.shape_43.setTransform(43.3,38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ED5E4A").s().p("AgvABQAMiMAOgCQAigCAPAhQASAkAKBuQghgKgqA5QgVAdgPAeQADhGAFhHg");
	this.shape_44.setTransform(28,16.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhDAGQAGiIAlgLQATgFAZAiQAmAxAMBjQgpgKgzA5QgaAdgSAeQgEhDADhFg");
	this.shape_45.setTransform(30.6,14.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgFglAkgE");
	this.shape_46.setTransform(39.3,118.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgDgXAMgOQAMgOAXgE");
	this.shape_47.setTransform(42.3,120.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQAEgZASgOQARgPAaAB");
	this.shape_48.setTransform(46.2,122.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ah0BPQg2gdAAgyQAAgxA2geQAwgaBEAAQBFAAAwAbQA2AdAAAxQAAAyg2AdQgwAbhFAAQhEAAgwgbg");
	this.shape_49.setTransform(53.1,116.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#F6D702").p("AAjAHQgKAwgigHQgjgHAKgvQAKgxAiAIQAjAHgKAvg");
	this.shape_50.setTransform(67.3,103.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FE7030").s().p("AgJAwQgjgHAKgvQAKgxAiAIQAjAHgKAvQgJAqgaAAIgJgBg");
	this.shape_51.setTransform(67.3,103.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ah4CVQg3g3AAheQAAhcA3g4QAygyBGAAQBIAAAxAyQA3A2AABeQAABeg3A3QgxAyhIAAQhGAAgygyg");
	this.shape_52.setTransform(59,103.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C1C1C1").s().p("AiGCXQg9g4AAhfQAAheA9g4QA3gzBPAAQBQAAA3AyQA9A4AABfQAABfg9A4Qg3AzhQAAQhPgBg3gyg");
	this.shape_53.setTransform(56.9,103.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DDDDDD").s().p("AheBUIgvgXIB+jJICdAdIgzBPQgyBdAEBQQhMgdg/gcg");
	this.shape_54.setTransform(28.6,97.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhNBcQgRgOAIggQAJglAlgqQAngtAhgOQAfgNAQAPQAQAPgJAhQgJAlgkApQglArghAOQgPAGgMAAQgMAAgJgHg");
	this.shape_55.setTransform(10.7,62.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DDDDDD").s().p("AhNBcQgRgOAIggQAJglAlgqQAngtAhgOQAfgNAQAPQAQAPgJAhQgJAlgkApQglArghAOQgPAGgMAAQgMAAgJgHg");
	this.shape_56.setTransform(10.7,62.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAAFUQiKgBhhhVQhrheAAigQAAieBrhfQBhhVCKgBQCMgBBgBVQBrBeAAChQAACihrBeQhgBUiKAAIgCAAg");
	this.shape_57.setTransform(43.4,77.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C1C1C1").s().p("AAAFFQiEgBhchTQhmhdAAibQAAiaBmhXQBchPCEADQCFADBcBTQBmBaAACVQAACahmBaQhbBQiDAAIgDAAg");
	this.shape_58.setTransform(41.8,79.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAADJQhMAAg1gzQg7g3AAhfQAAhdA7g4QA1gzBMAAQBNAAA1AyQA7A4AABeQAABfg7A4Qg1AyhLAAIgCAAg");
	this.shape_59.setTransform(24.9,95.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#ED5E4A").ss(1,1).p("AgPAVQgCgSAIgKQAIgLARgC");
	this.shape_60.setTransform(2.6,113.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#ED5E4A").ss(1,1).p("AgVAcQgEgXANgOQAMgPAXgD");
	this.shape_61.setTransform(5.7,116.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#ED5E4A").ss(1,1).p("AggAbQAEgZASgOQARgPAaAB");
	this.shape_62.setTransform(9.5,117.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ah0BPQg2gdAAgyQAAgxA2geQAwgaBEAAQBFAAAwAbQA2AdAAAxQAAAyg2AdQgwAbhFAAQhEAAgwgbg");
	this.shape_63.setTransform(17.1,112.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.manekiNeko_etatTouche_statique2, rect = new cjs.Rectangle(0,0,79.4,127.5), [rect]);


(lib.manekiNeko_etatTouche_eclair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eclair
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F6D702").ss(4).p("AiDhhIBuAAIAFB1IBeAAIAkBb");
	this.shape.setTransform(-0.3,0.6,1,1,0,0,0,11.4,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.manekiNeko_etatTouche_eclair, rect = new cjs.Rectangle(-27,-22.4,28.6,25), [rect]);


(lib.manekiNeko_etatTombe_neutre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#303030").s().p("AgZGBQg2AOg6AAQhWAAhGgeQgJAFgMADIgBAAIgFACIgGACQghAIgjAAIgSAAQhmgGg4hCQg0gWgWhJQgVhEAOhKQAKg6AbgiQAbgiAmgHQgagSgRglQgbg6AEhKQADhHAfgxQAig3A5AAQAkAAAdAXQAsgMAuAAQBGgBAsAfQAoglBEgDIALAAQA5AAAmAaQAhAOAiAeQBAA2AIAwQA3gdBHAAQB7AABNBXQA1AEAzAGQAcAFANADQASAGAHAJQAWALAGAUQAEAPgMAVQgcAvhYAXQAIAzgIA3QAXAGAYASQAvAYAUAiQAQAcgGAaQgJAlg+APQgvAKh2AEQhFA0hdAAQgrAAgmgLQgEAJgKAMQgmAugoAFIgMACQgPAHgRAAQgjAAgfgfgAApGMQANAAAOgGIANgCQAhgFAignQALgNAHgVQAqAQAyAAQBaAABBg0QBsgDAsgIQBAgLAHgcQAFgVgOgWQgSgcgpgUQgdgYgaABIgFAAQAPhFgNhGQBHgPAjggQAYgYgEgOQgDgNgUgKIAAAAQgBgQikgMQhIhWh2AAQhVAAg/AuIAEgFIgIgCQANgRgNgdQgPgigsglQgjgegdgLQghgZg0ABIgKAAQgxABghAXQgeAUgJAfIgFgCQAGgPALgMQgmgkhMAAQgwAAgvAPQgagagiAAQgxAAgdAzQgbAvgBBDQgBBEAZAxQAbA3AvAEIARAZIgCAKQgVgPgaAAQgvAAgdAtQgaAqgEBAQgDA/ATAyQAWA3AoAPQAzA/BgAGIARAAQAjAAAcgIIALgEQAPgEAMgGQBGAgBWABQBAgBA2gRQAcAiAgAAg");
	this.shape.setTransform(65.8,41.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1).p("AgXguIAvBd");
	this.shape_1.setTransform(96.8,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1).p("AAYgoIgvBS");
	this.shape_2.setTransform(95.8,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1).p("Agbg1IA3Bs");
	this.shape_3.setTransform(96.4,45.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1).p("AAfgzIg8Bn");
	this.shape_4.setTransform(96.4,45.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000003").s().p("AguAoIgJgrQgDgYAOgNQALgLAaAAQAeAAANANQAlAmgdAbQgZAZgnAAQgYAAgCgMgAgegaQgGAGAAAOQABAJAGAVIACAHIAHABQAQAAAQgIQATgHAEgLQAFgLgTgTQgBgCgIgCQgJgDgKAAQgSAAgFAFg");
	this.shape_5.setTransform(25,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000003").s().p("AgZAlQgGgZABgbQADghAQgBQAKAAAPAQQAcAbgRAcQgPAbgWAAQgMAAgBgMgAgHAcQALgGAFgNQAGgNgPgOIgIgIQgFAUAGAig");
	this.shape_6.setTransform(33.5,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000003").ss(2).p("AArgHIhVAP");
	this.shape_7.setTransform(24.4,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000003").ss(2).p("AgHgqIAPBV");
	this.shape_8.setTransform(24.4,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000003").ss(2,1).p("AA7gJIh1AT");
	this.shape_9.setTransform(24.7,14.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000003").ss(2,1).p("AA7gJIh1AT");
	this.shape_10.setTransform(24,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000003").ss(2,1).p("ABLgMIiVAZ");
	this.shape_11.setTransform(24.7,12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000003").ss(2,1).p("AgFgfIAKA/");
	this.shape_12.setTransform(32.3,10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000003").ss(2,1).p("AgFgfIALA/");
	this.shape_13.setTransform(35.2,10.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000003").ss(2,1).p("AgGgqIANBV");
	this.shape_14.setTransform(37.1,21.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A26615").s().p("AiTBsQgtguALhTQAHg4BFgmQA/giBLAAQBNAAAmAkQggAiAOAqQANAnApAVQgMAsguAhQgrAgg7AMQgcAGgbAAQhMAAgogqgAhdhiQg+AggGAwQgJBGAiAnQAjAnBGAAQAbAAAYgFQAxgKAmgaQAmgZAPggQgsgfgIguQgGgjASgdQghgUg2AAQhEAAg6Afg");
	this.shape_15.setTransform(28.8,18.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6D702").s().p("AiCB6QhAgtANhiQAGgqApghQAlgeA5gOQA2gOAzAGQA2AHAdAcQggAhAOArQANAnApAVQgMArguAiQgrAgg7AMQgeAGgcAAQg5AAgngcg");
	this.shape_16.setTransform(28.8,18.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F6D702").p("AgGALQgrgeAfgGQAPgDAWAFQAAgBANAkQAEAegqgfg");
	this.shape_17.setTransform(62.3,7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FE7030").s().p("AgGALQgrgeAfgGQAPgDAWAFIANAjQACAPgKAAQgJAAgVgQg");
	this.shape_18.setTransform(62.3,7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#ED5E4A").ss(1,1).p("AgOALQAHgWAXAB");
	this.shape_19.setTransform(45.2,11.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#ED5E4A").ss(1,1).p("AgUAPQAKgeAfAB");
	this.shape_20.setTransform(46.5,14.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5B5B5B").s().p("AheBHQghgagCgnQgBgnAfgdQAjggA8gDQA8gCAlAdQAiAaACAnQACAngfAdQgiAgg+ADIgJAAQg2AAgjgbg");
	this.shape_21.setTransform(55,11.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F6D702").p("AAagGQAOAxgaAIQgZAIgOg0QgOgyAagHQAZgIAOA0g");
	this.shape_22.setTransform(61.7,62.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FE7030").s().p("AgZAHQgOgyAagHQAZgIAOA0QAOAxgaAIIgHABQgUAAgMgtg");
	this.shape_23.setTransform(61.7,62.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#ED5E4A").ss(1,1).p("AgGARQgGgWAVgL");
	this.shape_24.setTransform(51,39.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#ED5E4A").ss(1,1).p("AgKAXQgHgeAdgP");
	this.shape_25.setTransform(53.9,41.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#DDDDDD").ss(2,1).p("AgoAQIAWADQAbgDAggi");
	this.shape_26.setTransform(56.8,45.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5B5B5B").s().p("AgmCeQgcg6gUhQQgRhDgBgjQgugOgLgmQgJgiAWgkQAVgkAlgLQApgNAmAcQAqAMAqA6QAnA2AaBLQAaBLAABBQACBIgeAjQgmAugkAAQg1AAgvhig");
	this.shape_27.setTransform(65.9,55.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C1C1C1").s().p("AgmCeQgcg6gUhQQgRhDgBgjQgugOgLgmQgJgiAWgkQAVgkAkgLQApgNAnAcQAqAMAqA6QAnA2AZBLQAaBLABBBQABBIgeAjQgmAugkAAQg1AAguhig");
	this.shape_28.setTransform(67,54.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DDDDDD").s().p("AgmCeQgcg6gUhQQgRhDgBgjQgugOgLgmQgJgiAWgkQAVgkAkgLQApgMAnAbQAqAMAqA6QAnA2AZBLQAaBLABBBQABBIgeAjQgmAugkAAQg1AAguhig");
	this.shape_29.setTransform(63.7,55.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000101").s().p("AADAPQgdgTgNACQgBgGAIgHIANgNQAYAJASAOQAbATgPAOIgDABQgIAAgVgOg");
	this.shape_30.setTransform(58.2,24.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F6D702").s().p("Ag2AzQgSgVAAgeQAAgdASgVQAVgYAhAAQAiAAAUAYQATAVAAAdQAAAegTAVQgUAYgiAAQghAAgVgYg");
	this.shape_31.setTransform(60.7,27.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.5,1).p("ABJiyQhMAUgtCBQgrB8AiBJQACgIgEgL");
	this.shape_32.setTransform(65.2,36.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ED5E4A").s().p("ABfD7QhWhbgPhNQiGgagvhZQgxhdBAh8QAjhEBDgJQA8gHBBAqIAgAaIBQAaQh3BvASCXQARCQB+BrIgNAeQgHAOgLAKQgogfgrgug");
	this.shape_33.setTransform(60.5,44.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#ED5E4A").ss(1,1).p("AgOABIAdgB");
	this.shape_34.setTransform(102.5,23.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#ED5E4A").ss(1,1).p("AgLgFIAXAM");
	this.shape_35.setTransform(102,26.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#ED5E4A").ss(1,1).p("AgOAAIAdAB");
	this.shape_36.setTransform(103.9,44.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#ED5E4A").ss(1,1).p("AgLAGIAXgM");
	this.shape_37.setTransform(103.4,41.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#ED5E4A").ss(1,1).p("AALgiQAIApgfAc");
	this.shape_38.setTransform(84.5,62.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#ED5E4A").ss(1,1).p("AgIgvQAPAUACAbQACAYgLAY");
	this.shape_39.setTransform(89.9,62.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#ED5E4A").ss(1,1).p("AgXi2QAAATAQAhQAPAkABASQACAUgKAgQgNAwgBABQgMA8ADAdQAFAyAqAT");
	this.shape_40.setTransform(83.7,37.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ED5E4A").s().p("AgeABQgFgkAygJQAOAUACAYQACAXgLAXQgvgJgFgkg");
	this.shape_41.setTransform(81.5,29.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ED5E4A").s().p("AhfA9QgEgJAUgWQAYgbABgDQANgmAFgLQAHgRAbgEQAegEAkAhQAmAigHAeQgGAchYAOQglAGgXAAQgfAAgFgKg");
	this.shape_42.setTransform(116.8,59.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5B5B5B").s().p("AhSAfQA5hBgLg0QBmAPAvApQAkAggIAgQgIAghUALQgjAEicAGQAfgWAdgig");
	this.shape_43.setTransform(115.3,60.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5B5B5B").s().p("AjADHQhBhRAAh2QAAh0BBhRQBHhbB5AAQB6AABIBbQBABRAAB0QAAB2hABRQhIBah6AAQh5AAhHhag");
	this.shape_44.setTransform(91.6,45.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ED5E4A").s().p("AhSgTIg7gkICNAIQCNAMABAOQACAighAPQgkAShuAKQAKghg5gqg");
	this.shape_45.setTransform(112.9,30);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5B5B5B").s().p("AhSgXIg7grICIgCQCIAGALAlQAFATgiAaQgxAlhjAMQAKgpg5gzg");
	this.shape_46.setTransform(115.2,32.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#ED5E4A").ss(1,1).p("AgUgPQAlgFAEAk");
	this.shape_47.setTransform(10.8,41.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#ED5E4A").ss(1,1).p("AgbgVQAXgEAOANQAOAMAEAX");
	this.shape_48.setTransform(8.9,44.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#ED5E4A").ss(1,1).p("AgaggQAZADAOATQAPARgBAa");
	this.shape_49.setTransform(7.3,48.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5B5B5B").s().p("AhOB1QgbgvAAhGQAAhEAbgwQAdg2AxABQAygBAdA2QAbAwAABEQAABGgbAvQgdA2gyAAQgxAAgdg2g");
	this.shape_50.setTransform(12.7,55.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F6D702").p("AgGAjQgwgKAHgiQAHgjAvAKQAxAKgIAiQgHAjgvgKg");
	this.shape_51.setTransform(26.3,69.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FE7030").s().p("AgGAjQgwgKAHgiQAHgjAvAKQAxAKgIAiQgFAbgfAAQgJAAgJgCg");
	this.shape_52.setTransform(26.3,69.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5B5B5B").s().p("AiVB5QgxgyAAhHQABhGAxgyQA3g3BdAAQBdAAA4A3QAyAyAABGQAABHgyAyQg3A3heAAQheAAg3g3g");
	this.shape_53.setTransform(26.1,60.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C1C1C1").s().p("AiXCHQgyg4ABhPQAAhOAyg3QA4g+BeAAQBfAAA4A+QAzA3AABOQAABPgyA4Qg4A9hgAAQheAAg5g9g");
	this.shape_54.setTransform(26.3,58.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DDDDDD").s().p("AAhBbQhdgyhQAEQAuh6AihAIDJB+IgdCdQgfgZgwgag");
	this.shape_55.setTransform(32.4,30.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5B5B5B").s().p("AArBWQglgJgpgkQgrglgOghQgNgfAOgQQAOgRAgAIQAlAJAqAlQAtAmAOAiQANAegPAQQgJAKgSAAQgJAAgMgDg");
	this.shape_56.setTransform(67.1,12.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DDDDDD").s().p("AArBWQglgJgpgkQgrglgOghQgNgfAOgQQAOgRAgAIQAlAJAqAlQAtAmAOAiQANAegPAQQgJAKgSAAQgJAAgMgDg");
	this.shape_57.setTransform(67.1,12.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5B5B5B").s().p("Aj/DrQhVhgABiLQABiKBVhgQBehrCfAAQCfAABfBrQBVBgABCKQABCLhVBgQheBriiAAQihAAhehrg");
	this.shape_58.setTransform(52,45.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C1C1C1").s().p("Aj0DhQhRhcABiFQABiEBThcQBdhmCbAAQCaAABXBmQBPBcgDCEQgDCFhSBcQhbBmiVAAQiaAAhahmg");
	this.shape_59.setTransform(49.7,43.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5B5B5B").s().p("AiWCCQgyg1AAhNQAAhMAzg1QA3g7BeAAQBeAAA4A7QAzA1AABMQAABNgyA1Qg4A7hfAAQheAAg4g7g");
	this.shape_60.setTransform(33.7,26.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#ED5E4A").ss(1,1).p("AgUgPQASgCAKAIQALAIACAR");
	this.shape_61.setTransform(16.2,4.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#ED5E4A").ss(1,1).p("AgbgVQAYgEAOANQAOAMADAX");
	this.shape_62.setTransform(13.5,7.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#ED5E4A").ss(1,1).p("AgaggQAZAEAOASQAPARgBAa");
	this.shape_63.setTransform(12,11.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5B5B5B").s().p("AhOB1QgbgwAAhFQAAhEAbgwQAdg2AxAAQAyAAAdA2QAbAwAABEQAABFgbAwQgdA2gyAAQgxAAgdg2g");
	this.shape_64.setTransform(16.7,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.manekiNeko_etatTombe_neutre, rect = new cjs.Rectangle(0,0,131.6,83.2), [rect]);


(lib.projectile__lancement_source = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{neutre:0,tir:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// projectile_source
	this.mc_projectile_source_point = new lib.projectile_langement_source_point();
	this.mc_projectile_source_point.name = "mc_projectile_source_point";
	this.mc_projectile_source_point.parent = this;
	this.mc_projectile_source_point.setTransform(0,0,1,1,0,0,0,3.6,3.6);
	this.mc_projectile_source_point.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mc_projectile_source_point).wait(2));

	// projectile_animation
	this.instance = new lib.projectile_lancement_animation();
	this.instance.parent = this;
	this.instance.setTransform(12.8,0.1,1,1,0,0,0,12.8,0.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3.6,-3.6,7.3,7.3);
p.frameBounds = [rect, new cjs.Rectangle(-3.6,-11.8,30.1,23.8)];


(lib.clipOmbre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{pale:0,foncee:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// ombre
	this.instance = new lib.ombre_pale();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,-0.2,1,1,0,0,0,47.3,9.4);

	this.instance_1 = new lib.ombre_foncee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.6,-0.2,1,1,0,0,0,47.3,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.9,-9.6,94.6,18.8);
p.frameBounds = [rect, rect];


(lib.btn_pageSuivante_avecFond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn_prochainePage();
	this.instance.parent = this;
	this.instance.setTransform(141,26.9,1,1,0,0,0,131.5,21.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDF9F6").s().p("A13ExIAAphMArvAAAIAAJhg");
	this.shape.setTransform(140,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_pageSuivante_avecFond, rect = new cjs.Rectangle(0,0,280,61), [rect]);


(lib.btn_pagePrecedente_avecFond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn_pagePrecedente();
	this.instance.parent = this;
	this.instance.setTransform(144.6,29.7,1,1,0,0,0,144.6,21.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDF9F6").s().p("A13ExIAAphMArvAAAIAAJhg");
	this.shape.setTransform(140,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_pagePrecedente_avecFond, rect = new cjs.Rectangle(0,0,289.1,61), [rect]);


(lib.mcviesClipVie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{vie_pleine:0,vie_perdue:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// vies
	this.instance = new lib.vie_pleine("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3,-0.9);

	this.instance_1 = new lib.vie_perdue("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,-0.4,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.3,-20.7,68.4,36.6);
p.frameBounds = [rect, new cjs.Rectangle(-36.9,-19.8,68,35.4)];


(lib.progression_niveau_avatar_mvt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{etat_neutre:0,etat_recul:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// progression_niveau_avatar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC4E39").s().p("AgqBCQgWgNgPgTIhGAxQgDACgDAAIgEgBQgGgDAAgGIAAiVQAAgFAFgEIAFgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIBIAnQAqgoBFAAQAmAAAfAKQAeAKARATQATAVgDAZQgEAogjAWQgjAWg6AAQgqAAghgTgAgzAwQAjAbAxAAQA5AAAggVQAegUADgiQAEgfgjgVQgjgWg4AAQgvAAgjAVIgbAVIhPgqIAACVIBPg3g");
	this.shape.setTransform(16.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE7030").s().p("AgzAwIgZgcIhPA3IAAiVIBPAqIAbgVQAjgVAvAAQA4AAAjAWQAjAVgEAfQgDAigeAUQggAVg5AAQgxAAgjgbg");
	this.shape_1.setTransform(16.6,0);

	this.instance = new lib.progression_niveau_avatar_inerte();
	this.instance.parent = this;
	this.instance.setTransform(16.6,0,1,1,0,0,0,16.6,8.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({rotation:-22.5,x:16.7},0).wait(1).to({rotation:-45,x:16.6,y:-0.1},0).wait(1).to({rotation:-67.5},0).wait(1).to({rotation:-90,y:0},0).wait(1).to({rotation:-108,x:16.5,y:-0.1},0).wait(1).to({rotation:-126,x:16.6},0).wait(1).to({rotation:-144,x:16.5,y:0},0).wait(1).to({rotation:-162,y:-0.1},0).wait(1).to({rotation:-180,y:0},0).wait(1).to({rotation:-198},0).wait(1).to({rotation:-216},0).wait(1).to({rotation:-234,y:0.1},0).wait(1).to({rotation:-252},0).wait(1).to({rotation:-270,x:16.6},0).wait(1).to({rotation:-288},0).wait(1).to({rotation:-306,x:16.5},0).wait(1).to({rotation:-324,x:16.6},0).wait(1).to({rotation:-342},0).wait(1).to({rotation:-360,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-8.5,33.2,17.1);
p.frameBounds = [rect, rect, new cjs.Rectangle(-1.6,-10.8,33.9,24.8), new cjs.Rectangle(-0.6,-13.8,30.9,31.2), new cjs.Rectangle(2.7,-16.1,24.7,34.2), new cjs.Rectangle(8.1,-16.6,17.1,33.2), new cjs.Rectangle(6.4,-16.1,23.2,34.1), new cjs.Rectangle(3.8,-14.7,28.9,32.6), new cjs.Rectangle(1.7,-12.6,32.9,28.8), new cjs.Rectangle(0.3,-10.3,34.4,23.2), new cjs.Rectangle(0,-8.5,33.2,17.1), new cjs.Rectangle(0.5,-13,34.1,23.2), new cjs.Rectangle(1.9,-16.1,32.6,28.9), new cjs.Rectangle(3.9,-17.9,28.8,32.9), new cjs.Rectangle(6.2,-18,23.2,34.4), new cjs.Rectangle(8,-16.5,17.1,33.2), new cjs.Rectangle(3.5,-18,23.2,34.1), new cjs.Rectangle(0.3,-17.9,28.9,32.6), new cjs.Rectangle(-1.4,-16,32.8,28.7), new cjs.Rectangle(-1.5,-12.8,34.3,23.2), new cjs.Rectangle(0,-8.5,33.2,17.1)];


(lib.mccompteursClipProgressionNiveau = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.progression_niveau_avatar = new lib.progression_niveau_avatar_mvt();
	this.progression_niveau_avatar.name = "progression_niveau_avatar";
	this.progression_niveau_avatar.parent = this;
	this.progression_niveau_avatar.setTransform(79.1,-24.9,1,1,0,0,0,16.6,0);

	this.instance = new lib.progression_niveau_base("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.7,-33.3,1,1,0,0,0,150.7,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.progression_niveau_avatar}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mccompteursClipProgressionNiveau, rect = new cjs.Rectangle(0,-74.5,301.3,82.4), [rect]);


(lib.mccompteursClipGaugeAir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{gauge_remplie:0,gauge_vide:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// gauge_air_centre
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#84A09D").p("ABLAAQAAAfgWAWQgWAWgfAAQgeAAgWgWQgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeg");
	this.shape.setTransform(-0.7,-37.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7CECB").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_1.setTransform(-0.7,-37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// gauge_air_minuterie
	this.gauge_air_minuterie = new lib.gauge_air_minuterie();
	this.gauge_air_minuterie.name = "gauge_air_minuterie";
	this.gauge_air_minuterie.parent = this;
	this.gauge_air_minuterie.setTransform(-0.7,-37.6,1,1,0,0,0,33.2,33.2);

	this.timeline.addTween(cjs.Tween.get(this.gauge_air_minuterie).wait(1).to({visible:false},0).wait(1));

	// gauge_air_fond
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E3C36").s().p("Aj4D5QhnhnAAiSQAAiQBnhnQBnhoCRAAQCRAABoBoQBnBnAACQQAACShnBnQhoBniRAAQiRAAhnhngAjqjpQhhBhAACIQAACJBhBiQBhBhCJAAQCJAABihhQBhhiAAiJQAAiIhhhhQhihiiJAAQiJAAhhBig");
	this.shape_2.setTransform(-0.6,-37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BC4E39").s().p("AjqDrQhhhiAAiJQAAiIBhhhQBhhiCJAAQCJAABiBiQBhBhAACIQAACJhhBiQhiBhiJAAQiJAAhhhhg");
	this.shape_3.setTransform(-0.6,-37.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A7CECB").s().p("AkVFeQgVAAgWgJQgYgKgKgQIKoqYQAKAJAJAWQAKAVAAAPIAAInQAAAcgdAbQgdAagcAAg");
	this.shape_4.setTransform(0.4,-36.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#6F8C8B").ss(2).p("AEQF1IofAAQgqAAgegeQgdgdAAgqIAAofQAAgqAdgeQAegdAqAAIIfAAQAqAAAeAdQAdAeAAAqIAAIfQAAAqgdAdQgeAegqAAg");
	this.shape_5.setTransform(-0.7,-37.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADDFE1").s().p("AkPF1QgqAAgegdQgdgeAAgpIAAogQAAgpAdgfQAegdAqAAIIfAAQAqAAAeAdQAdAfAAApIAAIgQAAApgdAeQgeAdgqAAg");
	this.shape_6.setTransform(-0.7,-37.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AkdGDQgpAAgegeQgegeAAgpIAAo7QAAgpAegeQAegeApAAII7AAQAqAAAdAeQAeAeAAApIAAI7QAAApgeAeQgdAegqAAg");
	this.shape_7.setTransform(2.8,-34.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8E3C36").s().p("AATBZIgbgfIgDACIgLAEIACAFIgDACIhFAWQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgKgaIgCgDIAAgBIAFgCQAEgBAAgFIAAiLIAKAAIAAgKIC2AAIAABiIgOAAIAAAKIgFABIAAAOIgKAAIAAAKIgXAAIAIAIQAEAHALgBQAIAAAKgHIAFgDIAWAcIgLAIIgCADQgTAPgVABIgHABQgTAAgLgIgAgOAWIADACIAiApQAKAMAKACQAOAEALgCQARgBARgMIgQgUQgNAJgNgBQgJAAgEgFIgbgdIAwAAIAAgKIg0AAQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgIgNIBTAAIAAhYIisAAIAACHQAAAIgGAAIgBABIAKAXIBCgVIgJgXIgeAJIAAgUg");
	this.shape_8.setTransform(17,-86.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8E3C36").s().p("AgSAIIAAgOIAZgBQABAAABABQAAAAABAAQAAAAABABQAAAAAAABIAHAMg");
	this.shape_9.setTransform(13.4,-86.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8E3C36").s().p("Ag6AHIAAgNIB1AAIAAANg");
	this.shape_10.setTransform(17.4,-92.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8E3C36").s().p("Ag6AHIAAgNIB1AAIAAANg");
	this.shape_11.setTransform(17.4,-89.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8E3C36").s().p("AgrBjIAAgnIAEgBIAAgJIAVAAIAAhiIgZAAIAAgoIAEAAIAAgKIBTAAIAAAnIgEABIAAAJIgQAAIAABjIAUAAIAAAnIgEAAIAAAKgAgbBWIBAAAIAAgeIgSAAIAAh2IASAAIAAgdIhAAAIAAAdIAUAAIAAB2IgUAAg");
	this.shape_12.setTransform(-1.9,-86.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8E3C36").s().p("AhlBlIAAgBIAUgwIgPAAIAAgqIAKgCIAAgIIATgCQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIAIgkIAAgBIgZAAIAAgrIAJgBIAAgJICEgGIAEApIgLACIAAAHQAAAFACACIAvBuIgNACIADAIIgxAIIgNgxIg0AIQgFABAAADIgHApQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgEABIgDAJgAhDhZIAAAhIAcAAIgMAzQgBAEgBABIgFABIgXADIAAAhIARAAIgUAxIAsAAIABgCIAKg0IBJgLIANAwIAmgGIg1h8IAQgCIgCggg");
	this.shape_13.setTransform(-18.3,-87.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E3C36").s().p("AgWAQIAJgkQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAIAWgGIANAyIgzAJgAgIgLIgCADIgJAgIAbgFIgIggg");
	this.shape_14.setTransform(-18.2,-90.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FE7030").s().p("AAmBUQgKgCgKgMIgigpIgDgCIgoAAIAAAUIAegJIAJAXIhCAVIgKgXIABgBQAGAAAAgIIAAiHICsAAIAABXIhTAAIAIAOQAAAAAAAAQAAABABAAQAAAAAAAAQABAAABAAIA0AAIAAAKIgwAAIAbAdQAEAFAJAAQANABANgJIAQAUQgRAMgRABIgHAAQgIAAgKgCgAgWARIgHgMQgBgBAAgBQAAAAgBAAQAAgBgBAAQgBAAAAAAIgaABIAAAOIAlAAgAg7gMIB1AAIAAgOIh1AAgAg7gpIB1AAIAAgPIh1AAg");
	this.shape_15.setTransform(17.5,-87.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FE7030").s().p("AhZBbIAUgyIgRAAIAAggIAWgEIAGgBQABgBABgDIAMgzIgcAAIAAgiIB7gFIACAfIgQACIA1B9IgmAGIgNgwIhJALIgKA0IgCACgAgNgwQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABIgJAmIgDAMIAzgIIgNgyg");
	this.shape_16.setTransform(-17.8,-87.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FE7030").s().p("AggBZIAAgeIAVAAIAAh2IgVAAIAAgdIBBAAIAAAdIgSAAIAAB2IASAAIAAAeg");
	this.shape_17.setTransform(-1.5,-87.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s().p("AATBZIgNgNIgOgSIgDACIgLAEIABADIABACIgDACIhFAWQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgLgaIgBgDIAAgBIAFgCQAEgBAAgFIAAiHIAAgEIAKAAIAAgJIC2AAIAAADIAABeIgPAAIAAAKIgFABIAAAOIgKAAIAAAKIgWAAIAIAIQAEAHALgBQAJAAAIgHIAGgDIAWAcIgLAIIgCADQgTAPgVABIgHAAQgUAAgKgHgAg1AWIAnAAIADACIAiApQAKAMAKACQAMADAMgBQASgBARgMIgJgKIgIgKQgMAJgNgBQgJAAgEgFIgSgTIgJgKIAwAAIAAgKIgDAAIgxAAIgEAAIgIgNIBUAAIAAhZIisAAIAAAEIAACDQAAAHgGABIgBABIAKAXIAhgKIAhgLIgJgXIgeAJIAAgUIABAAgAg2AMIAAgNIAEAAIAWAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAHAMgAg2gRIAAgOIB1AAIAAAOgAg2guIAAgOIB1AAIAAAOg");
	this.shape_18.setTransform(18.5,-85.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s().p("AgrBjIAAgnIAEgBIAAgJIAVAAIAAhiIgZAAIAAgoIAEAAIAAgKIBTAAIAAAnIgEABIAAAKIgRAAIAABiIAVAAIAAAnIgEAAIAAAKgAgcBWIBBAAIAAgeIgSAAIAAh2IASAAIAAgdIhBAAIAAAdIAVAAIAAB2IgVAAg");
	this.shape_19.setTransform(-0.5,-85.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s().p("AhlBlIAAgBIAGgNIAOgkIgPAAIAAgpIAKgCIAAgIIATgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAAAIAJgkIAAgBIgaAAIAAgrIAKgBIAAgJICDgGIAEAqIgLABIABAHIABAGIAuBsIABADIgNACIABAEIACAEIgZADIgYAFIgNgxIgOACIgnAFQgEACAAADIgEAVIgDATQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgFAAIgCAGIgBAEgAhChaIAAAiIAbAAIAAACIgMAxIgCAFIgFAAIgXAEIAAAgIASAAIgKAZIgLAZIAsAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIADgQIAEgSIADgSIBJgLIANAwIAmgGIg1h9IAQgBIgCgggAgVgMIAKgmQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIAWgFIAOAyIg0AIIADgMgAgHgoQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIgHAbIgBAGIAagFIgJghIgHADg");
	this.shape_20.setTransform(-16.8,-85.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.8,-103.1,119.6,107.6);
p.frameBounds = [rect, rect];


(lib.koi_surprise_groupe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// surprise_4
	this.instance = new lib.koi_surprise_seul();
	this.instance.parent = this;
	this.instance.setTransform(25.1,-13.9,0.818,0.818,75,0,0,10.7,11);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(15));

	// surprise_3
	this.instance_1 = new lib.koi_surprise_seul();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.2,-19,1,1,55.8,0,0,10.7,10.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(19));

	// surprise_2
	this.instance_2 = new lib.koi_surprise_seul();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.5,-17.5,0.95,0.95,30,0,0,10.6,10.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(23));

	// surprise_1
	this.instance_3 = new lib.koi_surprise_seul();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10.7,-11.5,1,1,0,0,0,10.7,11);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-21.7,-22.7,21.9,22.6), rect, rect, rect, rect=new cjs.Rectangle(-21.7,-31.8,37.5,31.6), rect, rect, rect, rect=new cjs.Rectangle(-21.7,-34.3,51.3,34.2), rect, rect, rect, rect=new cjs.Rectangle(-21.7,-34.3,58.1,34.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.avatar_koi_siTouche_mvt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// surprise
	this.instance = new lib.koi_surprise_groupe("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-13,-66.9,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},52).wait(8));

	// mvt_siTouche
	this.instance_1 = new lib.avatar_koi_siTouche();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.2,3.7,1,1,0,0,0,56.8,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:57.6,regY:47,rotation:-2.9,x:-4.2,y:-33.7},0).wait(1).to({rotation:-5.8,x:-6.2},0).wait(1).to({rotation:-8.7,x:-8.1,y:-33.5},0).wait(1).to({rotation:-11.6,x:-10,y:-33.1},0).wait(1).to({rotation:-14.5,x:-11.8,y:-32.8},0).wait(1).to({rotation:-17.4,x:-13.6,y:-32.3},0).wait(1).to({rotation:-20.3,x:-15.4,y:-31.7},0).wait(1).to({rotation:-23.2,x:-17.2,y:-31},0).wait(44).to({rotation:-20.4,x:-15.5,y:-31.7},0).wait(1).to({rotation:-17.5,x:-13.7,y:-32.3},0).wait(1).to({rotation:-14.7,x:-11.8,y:-32.7},0).wait(1).to({rotation:-11.8,x:-10,y:-33.1},0).wait(1).to({rotation:-8.9,x:-8.2,y:-33.4},0).wait(1).to({rotation:-6.1,x:-6.3,y:-33.6},0).wait(1).to({rotation:-3.2,x:-4.4,y:-33.7},0).wait(1).to({rotation:-0.3,x:-2.6,y:-33.8},0).wait(1));

	// ombre
	this.ombre = new lib.clipOmbre();
	this.ombre.name = "ombre";
	this.ombre.parent = this;
	this.ombre.setTransform(-1,-1.9,1,1,0,0,0,-0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.ombre).wait(1).to({x:-2.3},0).wait(1).to({x:-3.7},0).wait(1).to({x:-5.1},0).wait(1).to({x:-6.5},0).wait(1).to({x:-7.8},0).wait(1).to({x:-9.2},0).wait(1).to({x:-10.6},0).wait(1).to({x:-12},0).wait(44).to({x:-10.6},0).wait(1).to({x:-9.2},0).wait(1).to({x:-7.8},0).wait(1).to({x:-6.5},0).wait(1).to({x:-5.1},0).wait(1).to({x:-3.7},0).wait(1).to({x:-2.3},0).wait(1).to({x:-1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-80.8,113.5,88.3);
p.frameBounds = [rect, new cjs.Rectangle(-61,-79.6,112.2,87.1), new cjs.Rectangle(-62.1,-85.2,110.7,92.7), new cjs.Rectangle(-63,-85.2,109,92.7), new cjs.Rectangle(-63.8,-85.2,107.2,92.7), new cjs.Rectangle(-64.3,-85.2,105,92.7), new cjs.Rectangle(-64.8,-96.7,102.9,104.7), new cjs.Rectangle(-65.1,-96.7,101.9,105.4), rect=new cjs.Rectangle(-65.2,-96.7,100.6,106.2), rect, rect=new cjs.Rectangle(-65.2,-102.3,100.6,111.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-65.2,-71,100.6,80.5), rect, rect=new cjs.Rectangle(-65.2,-85.2,100.6,94.7), rect, rect, rect, rect=new cjs.Rectangle(-65.2,-96.7,100.6,106.2), rect, rect, rect, rect=new cjs.Rectangle(-65.2,-102.3,100.6,111.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-65.1,-70.3,101.9,79.1), new cjs.Rectangle(-64.8,-70.9,103,78.9), new cjs.Rectangle(-64.3,-73,105,80.5), new cjs.Rectangle(-63.8,-74.8,106.9,82.3), new cjs.Rectangle(-63.1,-76.6,108.8,84.1), new cjs.Rectangle(-62.2,-78.1,110.5,85.6), new cjs.Rectangle(-61.2,-79.5,112.1,87), new cjs.Rectangle(-60,-80.6,113.4,88.1)];


(lib.avatar_koi_siMort_neutre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// avatarKoi_etatMort_neutre
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#212121").p("AgggEIBBAJ");
	this.shape.setTransform(-96.3,-10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#212121").p("AgTgaIAnA1");
	this.shape_1.setTransform(-96.3,-10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#441F13").s().p("AgRFzQi8i2gRgXQgFgGgGgRIgegFQgLAAgKgDQhPgYgygcQgzgdgdgnQgsgtgUg2QgRgUgGgjQgJg3AygpQAug6BsgdQBJgVBYgBQA/gOBbgaIAhgJIAFgBQAKAAAKAJQALAJANAUQAPAXAHAMQAHAGA6AOQA7AOAYAKQAdAEAIAMQAGAJgDAKQgDAOgPAFIAJAJQASALARAQQAXAVAKATICEgGIBhgCIAIAAQASAAALADQATAHAJASIACADQAGAKAAAMQAAANgIAHQgLALgWAAIgDAAQAAAogZAiQAGASgEAQIgEAJIgBADQgKAPgTAOQACAegMAPQgIAKgLABIgDABQgJAAgLgHQgGgEgUgRQgnghgdgSQgxgfgxgLQgjAlg6AfQg5AehEASIgLAVQAAARAKAsQALAsARAwIAIAVQAWAbgMATQgJAOgQADQgHAHgLAAQgSAAgVgYgAjelEQhWABhHAUQhnAbgrA3QgrAiAIAsQAFAgAQARQASA0ArAsQAbAkAvAaQAwAcBNAXQAIADAIAAIACAAIAqAHQAIAXAFAGQAIAMBiBgIBhBfIAIAJQALAJAGAAQAEAAACgDIABgDQAOAAAFgJQAFgHgRgUIgBgGIgHgQQgQgvgLgtQgMg1ABgTQABgDAQgfQBJgSA8ghQA6gfAhgmQBKAMBKA5IAuAlQATAQAGAAIAAAAQAQgCgFgsIABgBIACgCQAVgNAJgPIAAgBIACgFQADgJgEgNIgEgKQAdgigBgqIAEgRIgFAAIAAgBIAIACIAQABQAVAAAAgKQAAgKgGgFIABgCQgGgLgKgDQgIgDgQAAIgIAAIhqADIiJAGQgEgTgXgWQgSgTgWgNQgXgXgdgRIAUgDIASACQAPAAACgHQABgEgLgDQgIgDgJAAIAAgBQgVgJhJgSQg7gOgGgLQgkhAgNAAIgBAAQhwAhhNARg");
	this.shape_2.setTransform(-58.7,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D8D8D8").ss(0.5,1).p("ABrA9Qh8gpgPgPQgJgIghgdIgggb");
	this.shape_3.setTransform(-69.3,-7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D8D8D8").ss(0.5,1).p("ABuB3QiViGgLgSIg7hV");
	this.shape_4.setTransform(-68.3,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D8D6D6").s().p("AAPBBQhqhtgCgIQgihuABgIQADAAAOAFQAJARAJAoIAKAqQADAFBgBiQBhBjABAEIAKAZQACAEgCACIAAAAQgIAAhnhqg");
	this.shape_5.setTransform(-67.8,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AB9CrQgqgjhYhdQhWhXgCgIIgThAQgQg5ACADQABACB5AbQB6AcAGACQAFADgXAsQgaAvAAACQgCAVARA+QAOA2ASAvIAAACIgBAAIgBAAg");
	this.shape_6.setTransform(-67.8,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE7030").s().p("AB5DHIhphpIhyhzQgIgJgShBIgRg/QgEgHgBgIQgEgRAHgGQAIgGAMALIAKAMIAgBxIDWDiIAJAMQAJANgEAFQgEAIgMABg");
	this.shape_7.setTransform(-68.6,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#893E17").s().p("AB6C5IgOgMIhgheQhhhggIgLQgJgMgQg2IgPgzQgEgIgCgKQgEgTAHgHQAHgGALANQAGAGAFAIIAbBkIDNDdIAKAOQAIAPgDAGQgBAEgEAAQgFAAgIgHg");
	this.shape_8.setTransform(-70,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9A19D").s().p("AAABAQgYgNgCggQgBgeAYghIAYgaIAFAZIgSAXQgQAbAGAWQAHAcANAGIAJAFQgCAFgGAAQgHAAgMgHg");
	this.shape_9.setTransform(-110.8,-30.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9A19D").s().p("AALAkQACg3gNgXQgPgXgMABIgKAGQAFgJAHgIQAQgQAPAHQAQAIAKA2QAIAvgDAOQgEANgEAIQgIAPgPAMQAEgXABgcg");
	this.shape_10.setTransform(-105,-31.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBEB7").s().p("AggBSQgagOgIgrQgHglAgggQAQgPARgIQAEgGAFgGQAOgLAOADQAPADAEAIQACAEAAADIARBQQADAMgLAYQgNAdgVAHQgRAGgNAAQgPAAgMgHgAgBgxQgHADgHAXQgGAYADAOQAEATAJAIQAJALAMgLQAGgEgGgRIgJggIgDgdQgBgJgDAAIgBAAg");
	this.shape_11.setTransform(-108.2,-30.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#421B0A").s().p("AgHA9QgSgCgJgUQgJgTADgYQADgaAPgQQAOgQARACQAQADAKASQAKAUgEAYQgEAagOAQQgNAOgOAAIgDAAg");
	this.shape_12.setTransform(-108.3,-29.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#212121").s().p("AgCAFQgDgCgCgDQgCgCABgCQAEgFAHAFQAEACACACQABADgBACQgBADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(-96.4,-10.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EDEDED").s().p("AAIA1QAThDhHgmIAKAAQAPADAVAKQAaAMAMAZQALAXgMAPQgPARgOAAIgCAAg");
	this.shape_14.setTransform(-92.9,-11.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAoQgZgPgLgWQgKgVAKgRQAKgQAYgBQAZgBAYANQAZAPAKAXQALAVgKARQgKARgYABIgDAAQgXAAgXgOg");
	this.shape_15.setTransform(-95,-11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D8D8D8").ss(0.5,1).p("ABqAcQhbg9h4AH");
	this.shape_16.setTransform(-20.6,-13.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#D8D8D8").ss(0.5,1).p("ABqgCQhpgGhqAN");
	this.shape_17.setTransform(-17.9,-19.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#D8D8D8").ss(0.5,1).p("AA7BaQACABABgBQABgBAAgCQgCgJAEgGQABgBATgQQANgMACgHQABgFgFgLQgEgKADgGQAJgPAFgLQALgVABgPQABgMACgKIACgJQgsgCg1AFQhpALgvAoQgDADAAAEQAAAFAEACQBDAvByBAg");
	this.shape_18.setTransform(-19.1,-13.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA7BaQhyhAhDgvQgDgCgBgFQAAgEAEgDQAugoBqgLQA1gFAsACIgCAJQgDAKgBAMQgBAPgKAVIgPAaQgCAGAEAKQAEALgBAFQgBAHgOAMIgTARQgFAGACAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgCAAIgBAAg");
	this.shape_19.setTransform(-19.1,-13.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D8D6D6").s().p("ABYBIQgbgNgygmQgYgThRgQQg6gMANgYQBgg5BvAwQAsAXAUA1QARAwgNALQgFAGgKAAQgNAAgUgKg");
	this.shape_20.setTransform(-24.8,-10);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#441F13").s().p("AhVAhQhGgHCFgxQAPgGAZAMQAYALAEgEQATgYAdABQALAAAEAFQAEAFgIAGQADAGgIAIQgOAQgxALQguAKgrAAQgRAAgQgBg");
	this.shape_21.setTransform(-16.8,-23);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAmBsIgsglQhLg5hLgOQgXgDAGgaIALgZQACgrAfgLQAPgGAPAEIBjgHQBqgHAbAEQAbADAJAJQAFAFABAKQAAALgXgBIgWgDQAHA2giAoIAFANQAEAPgGAKQgHALgOAKIgMAJIABAWQgBAXgLACIAAAAQgFAAgTgPg");
	this.shape_22.setTransform(-19.9,-14.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FE7030").ss(1,1).p("AgsAAIBZAA");
	this.shape_23.setTransform(-82.4,-27.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#D8D6D6").ss(1,1).p("AgsAAIBZAA");
	this.shape_24.setTransform(-81.8,-27.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FE7030").ss(1,1).p("AgngUIBOAp");
	this.shape_25.setTransform(-83.3,-22.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#D8D6D6").ss(1,1).p("AgmgUIBOAp");
	this.shape_26.setTransform(-82.6,-22.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FE7030").ss(1,1).p("AgcghIA5BD");
	this.shape_27.setTransform(-85.9,-19.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#D8D6D6").ss(1,1).p("AgcghIA5BD");
	this.shape_28.setTransform(-85.3,-19.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#441F13").s().p("AgfAQQgdglgMgOQgUgXgSAHQAzgWBWA3QAsAbAoAeQghATgeAAQgsAAgjgqg");
	this.shape_29.setTransform(-66.2,-23.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#441F13").s().p("ABIBrQhcgbg1gkQgxgigYgvQgOgeAcARQAfATgFgRQgJgeBEgQQBFgRAtAeIAWgZQAbgPAUAzQAbBAgTA+QgRA2glAAQgIAAgKgDg");
	this.shape_30.setTransform(-93.9,-12.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FE7030").s().p("AhDBFQgiAAgpgUQgrgWgMgbQgPgfAmgbQAXgQA2AJQAxAIArAXQAsAYgBAVQgBAYCmARQjiARgqAAIgCAAg");
	this.shape_31.setTransform(-48.1,-15.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D8D6D6").s().p("AgIB0QicgQhmg+Qhhg6gkhdQABgJASANQAuAfARAKQB9BHCwANQCwAgCKg9QBFgfAiglQgQBXhwA6QhmA2iHAAIgsgCg");
	this.shape_32.setTransform(-72.6,-11.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhMDeQicgVhfheQhVhTAGhZQAGhVCDguQCBgtCpAVQCpAVBwBLQBxBLgTBSQgSBTiPA+QhyAyh6AAQgoAAgrgGg");
	this.shape_33.setTransform(-73,-23.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BABABA").ss(0.5,1).p("AB8gSQhtAZgXgBQgPgBg0AHIgxAH");
	this.shape_34.setTransform(-72.5,-47.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#AFAFAF").ss(0.5,1).p("ACZANQixAAgWgFIhqgU");
	this.shape_35.setTransform(-67.5,-43.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E5E5E5").s().p("Ag8AuQgCgChVgpQhSgogBgDIACgEQACgEAHgBQASAFBPAmIBRAmQAGACB2gSQB2gQADABIAYALQABAAABABQABAAAAABQAAAAAAAAQAAABgBAAQjPAjg7AAQgUAAgEgEg");
	this.shape_36.setTransform(-64.6,-40.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2F2F2").s().p("AgqBFQgHgFhkgnQg9gZgXgHQAdAABbgXICJgmQANgDAmBCQAGALA7AOQBJARAVAKIAAABIgCABQgzAAh3ALQhYAJgOAAIgCAAg");
	this.shape_37.setTransform(-64.5,-44.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC5729").s().p("AhIA5QgOgBhNg1IhKgzIgLAFQgKAEAGgIQAJgMAhAEIBVAfIFdAaQAhACgCAJQgCAHgQgBIgRgCIiKAVQiDATgVAAIgCAAg");
	this.shape_38.setTransform(-63.9,-39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ombre
	this.ombre = new lib.clipOmbre();
	this.ombre.name = "ombre";
	this.ombre.parent = this;
	this.ombre.setTransform(-69.1,-7.9,1,1,0,0,0,-0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.ombre).wait(1));

}).prototype = getMCSymbolPrototype(lib.avatar_koi_siMort_neutre, rect = new cjs.Rectangle(-117,-53,116.6,79), [rect]);


(lib.avatar_koi_siMort_mvt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mvt_mortAvatar
	this.instance = new lib.avatar_koi_siMort();
	this.instance.parent = this;
	this.instance.setTransform(0.6,-12.5,1,1,165,0,0,113.3,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:58.3,regY:39.5,rotation:162.2,x:51.6,y:-33.4},0).wait(1).to({rotation:159.4,x:50.5,y:-35.9},0).wait(1).to({rotation:156.6,x:49.3,y:-38.2},0).wait(1).to({rotation:153.8,x:48,y:-40.6},0).wait(1).to({rotation:151,x:46.6,y:-42.9},0).wait(1).to({rotation:148.2,x:45.1,y:-45.1},0).wait(1).to({rotation:145.4,x:43.4,y:-47.2},0).wait(1).to({rotation:142.6,x:41.6,y:-49.3},0).wait(1).to({rotation:139.8,x:39.8,y:-51.3},0).wait(1).to({rotation:137,x:37.9,y:-53.1},0).wait(1).to({rotation:134.2,x:35.9,y:-54.9},0).wait(1).to({rotation:131.4,x:33.7,y:-56.6},0).wait(1).to({rotation:128.6,x:31.5,y:-58.1},0).wait(1).to({rotation:125.8,x:29.3,y:-59.6},0).wait(1).to({rotation:123.1,x:26.9,y:-60.9},0).wait(1).to({rotation:120.3,x:24.6,y:-62.1},0).wait(1).to({rotation:117.5,x:22.1,y:-63.2},0).wait(1).to({rotation:114.7,x:19.6,y:-64.2},0).wait(1).to({rotation:111.9,x:17.1,y:-65.1},0).wait(1).to({rotation:109.1,x:14.4,y:-65.8},0).wait(1).to({rotation:106.3,x:11.8,y:-66.4},0).wait(1).to({rotation:103.5,x:9.2,y:-66.9},0).wait(1).to({rotation:100.7,x:6.5,y:-67.2},0).wait(1).to({rotation:97.9,x:3.8,y:-67.4},0).wait(1).to({rotation:95.1,x:1.2,y:-67.5},0).wait(1).to({rotation:92.3,x:-1.6},0).wait(1).to({rotation:89.5,x:-4.3,y:-67.3},0).wait(1).to({rotation:86.7,x:-6.9,y:-66.9},0).wait(1).to({rotation:83.9,x:-9.6,y:-66.5},0).wait(1).to({rotation:81.1,x:-12.2,y:-65.9},0).wait(1).to({rotation:78.3,x:-14.8,y:-65.1},0).wait(1).to({rotation:75.5,x:-17.4,y:-64.2},0).wait(1).to({rotation:72.7,x:-19.9,y:-63.3},0).wait(1).to({rotation:69.9,x:-22.3,y:-62.1},0).wait(1).to({rotation:67.1,x:-24.8,y:-60.9},0).wait(1).to({rotation:64.3,x:-27.1,y:-59.5},0).wait(1).to({rotation:61.5,x:-29.4,y:-57.9},0).wait(1).to({rotation:58.7,x:-31.6,y:-56.3},0).wait(1).to({rotation:55.9,x:-33.8,y:-54.5},0).wait(1).to({rotation:53.1,x:-35.8,y:-52.7},0).wait(1).to({rotation:50.3,x:-37.8,y:-50.7},0).wait(1).to({rotation:47.5,x:-39.7,y:-48.6},0).wait(1).to({rotation:44.7,x:-41.5,y:-46.4},0).wait(1).to({rotation:41.9,x:-43.2,y:-44.1},0).wait(1).to({rotation:39.2,x:-44.8,y:-41.7},0).wait(1).to({rotation:36.4,x:-46.2,y:-39.2},0).wait(1).to({rotation:33.6,x:-47.6,y:-36.6},0).wait(1).to({rotation:30.8,x:-48.9,y:-33.9},0).wait(1).to({rotation:28,x:-50,y:-31.1},0).wait(1).to({rotation:25.2,x:-51,y:-28.3},0).wait(1).to({rotation:22.4,x:-51.9,y:-25.3},0).wait(1).to({rotation:19.6,x:-52.7,y:-22.3},0).wait(1).to({rotation:16.8,x:-53.3,y:-19.3},0).wait(1).to({rotation:14,x:-53.8,y:-16.1},0).wait(1).to({rotation:11.2,x:-54.2,y:-13},0).wait(1).to({rotation:8.4,x:-54.4,y:-9.7},0).wait(1).to({rotation:5.6,x:-54.6,y:-6.4},0).wait(1).to({rotation:2.8,x:-54.5,y:-3.1},0).wait(1).to({rotation:0,x:-54.4,y:0.3},0).wait(1));

	// ombre
	this.ombre = new lib.clipOmbre();
	this.ombre.name = "ombre";
	this.ombre.parent = this;
	this.ombre.setTransform(64,2.1,1,1,0,0,0,-0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.ombre).wait(1).to({scaleX:0.99,scaleY:1.01,x:61.8},0).wait(1).to({scaleX:0.97,scaleY:1.02,x:59.7,y:2},0).wait(1).to({scaleX:0.96,scaleY:1.03,x:57.5},0).wait(1).to({scaleX:0.94,scaleY:1.04,x:55.4,y:1.9},0).wait(1).to({scaleX:0.93,scaleY:1.05,x:53.2},0).wait(1).to({scaleX:0.91,scaleY:1.07,x:51,y:1.8},0).wait(1).to({scaleX:0.9,scaleY:1.08,x:48.9},0).wait(1).to({scaleX:0.89,scaleY:1.09,x:46.7,y:1.7},0).wait(1).to({scaleX:0.87,scaleY:1.1,x:44.6},0).wait(1).to({scaleX:0.86,scaleY:1.11,x:42.4},0).wait(1).to({scaleX:0.84,scaleY:1.12,x:40.2,y:1.6},0).wait(1).to({scaleX:0.83,scaleY:1.13,x:38.1,y:1.5},0).wait(1).to({scaleX:0.81,scaleY:1.14,x:35.9},0).wait(1).to({scaleX:0.8,scaleY:1.15,x:33.8,y:1.4},0).wait(1).to({scaleX:0.79,scaleY:1.16,x:31.6},0).wait(1).to({scaleX:0.77,scaleY:1.17,x:29.4,y:1.3},0).wait(1).to({scaleX:0.76,scaleY:1.18,x:27.3},0).wait(1).to({scaleX:0.74,scaleY:1.19,x:25.1,y:1.2},0).wait(1).to({scaleX:0.73,scaleY:1.2,x:23},0).wait(1).to({scaleX:0.71,scaleY:1.22,x:20.8},0).wait(1).to({scaleX:0.7,scaleY:1.23,x:18.6,y:1.1},0).wait(1).to({scaleX:0.68,scaleY:1.24,x:16.5},0).wait(1).to({scaleX:0.67,scaleY:1.25,x:14.4,y:1},0).wait(1).to({scaleX:0.66,scaleY:1.26,x:12.2},0).wait(1).to({scaleX:0.64,scaleY:1.27,x:10,y:0.9},0).wait(1).to({scaleX:0.63,scaleY:1.28,x:7.8},0).wait(1).to({scaleX:0.61,scaleY:1.29,x:5.7,y:0.8},0).wait(1).to({scaleX:0.6,scaleY:1.3,x:3.6},0).wait(1).to({scaleX:0.61,scaleY:1.31,x:1.4},0).wait(1).to({scaleX:0.63,scaleY:1.32,x:-0.7,y:0.7},0).wait(1).to({scaleX:0.64,scaleY:1.33,x:-2.9},0).wait(1).to({scaleX:0.66,scaleY:1.34,x:-5,y:0.6},0).wait(1).to({scaleX:0.67,scaleY:1.36,x:-7.2},0).wait(1).to({scaleX:0.68,scaleY:1.37,x:-9.4,y:0.5},0).wait(1).to({scaleX:0.7,scaleY:1.38,x:-11.5,y:0.4},0).wait(1).to({scaleX:0.71,scaleY:1.39,x:-13.7},0).wait(1).to({scaleX:0.73,scaleY:1.4,x:-15.9,y:0.3},0).wait(1).to({scaleX:0.74,scaleY:1.41,x:-18},0).wait(1).to({scaleX:0.76,scaleY:1.42,x:-20.2},0).wait(1).to({scaleX:0.77,scaleY:1.43,x:-22.4,y:0.2},0).wait(1).to({scaleX:0.79,scaleY:1.44,x:-24.5},0).wait(1).to({scaleX:0.8,scaleY:1.45,x:-26.7,y:0.1},0).wait(1).to({scaleX:0.81,scaleY:1.46,x:-28.8},0).wait(1).to({scaleX:0.83,scaleY:1.47,x:-31,y:0},0).wait(1).to({scaleX:0.84,scaleY:1.48,x:-33.2},0).wait(1).to({scaleX:0.86,scaleY:1.5,x:-35.3,y:-0.1},0).wait(1).to({scaleX:0.87,scaleY:1.51,x:-37.5},0).wait(1).to({scaleX:0.89,scaleY:1.52,x:-39.6},0).wait(1).to({scaleX:0.9,scaleY:1.53,x:-41.8,y:-0.2},0).wait(1).to({scaleX:0.91,scaleY:1.54,x:-44},0).wait(1).to({scaleX:0.93,scaleY:1.55,x:-46.1,y:-0.3},0).wait(1).to({scaleX:0.94,scaleY:1.56,x:-48.3},0).wait(1).to({scaleX:0.96,scaleY:1.57,x:-50.4},0).wait(1).to({scaleX:0.97,scaleY:1.58,x:-52.6,y:-0.4},0).wait(1).to({scaleX:0.99,scaleY:1.59,x:-54.8},0).wait(1).to({scaleX:1,scaleY:1.6,x:-56.9,y:-0.5},0).wait(1).to({scaleX:1.01,scaleY:1.61,x:-59.1},0).wait(1).to({scaleX:1.03,scaleY:1.62,x:-61.2},0).wait(1).to({scaleX:1.04,scaleY:1.64,x:-63.4,y:-0.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-84.2,133.1,106.4);
p.frameBounds = [rect, new cjs.Rectangle(-1,-70.5,113.1,82.1), new cjs.Rectangle(-0.8,-72.2,111.7,83.9), new cjs.Rectangle(-0.5,-73.8,110,85.5), new cjs.Rectangle(-0.2,-75.3,108.1,87.1), new cjs.Rectangle(-0.8,-76.7,106.9,88.5), new cjs.Rectangle(-1.7,-78.1,105.6,89.9), new cjs.Rectangle(-2.6,-79.1,104.1,91), new cjs.Rectangle(-3.5,-81.2,102.6,93.2), new cjs.Rectangle(-4.4,-84.7,100.7,96.8), new cjs.Rectangle(-5.2,-88.1,98.6,100.1), new cjs.Rectangle(-6.1,-91.5,96.3,103.7), new cjs.Rectangle(-7,-94.6,94,106.8), new cjs.Rectangle(-7.8,-97.7,91.6,110), new cjs.Rectangle(-8.6,-100.7,89.1,112.9), new cjs.Rectangle(-9.5,-103.6,86.4,116), new cjs.Rectangle(-11.4,-106.5,84.7,118.8), new cjs.Rectangle(-14.6,-109.1,83.8,121.5), new cjs.Rectangle(-17.7,-111.7,83.1,124.2), new cjs.Rectangle(-20.8,-114.1,82.3,126.7), new cjs.Rectangle(-23.9,-116.4,81.4,129.1), new cjs.Rectangle(-26.9,-118.4,80.4,131.1), new cjs.Rectangle(-30.1,-120.3,79.3,133), new cjs.Rectangle(-33,-121.8,79.2,134.6), new cjs.Rectangle(-35.9,-123.1,79.2,136), new cjs.Rectangle(-38.5,-124.2,79.1,137.1), new cjs.Rectangle(-41.3,-125.1,79.2,138), new cjs.Rectangle(-43.8,-125.7,78.9,138.7), new cjs.Rectangle(-46.3,-126,78.5,139), new cjs.Rectangle(-48.7,-126.1,79.2,139.2), new cjs.Rectangle(-50.9,-125.9,79.9,139.1), new cjs.Rectangle(-53,-125.5,80.5,138.7), new cjs.Rectangle(-55.3,-124.9,81.4,138.2), new cjs.Rectangle(-57.1,-123.8,81.8,137.1), new cjs.Rectangle(-58.8,-122.6,82,136), new cjs.Rectangle(-60.5,-121.1,82.1,134.6), new cjs.Rectangle(-61.9,-119.5,82.1,133), new cjs.Rectangle(-63.4,-117.5,82,131.1), new cjs.Rectangle(-64.7,-115.3,81.9,128.9), new cjs.Rectangle(-65.8,-112.8,81.5,126.5), new cjs.Rectangle(-67.5,-110.3,81.7,124), new cjs.Rectangle(-71,-107.4,83.7,121.1), new cjs.Rectangle(-74.3,-104.3,85.6,118.1), new cjs.Rectangle(-77.8,-101,87.6,114.9), new cjs.Rectangle(-81,-97.6,89.4,111.5), new cjs.Rectangle(-84,-94.2,92,108.2), new cjs.Rectangle(-87.1,-90.6,94.8,104.6), new cjs.Rectangle(-89.9,-86.7,97.4,100.8), new cjs.Rectangle(-92.7,-82.9,99.8,97), new cjs.Rectangle(-95.6,-78.5,102.4,92.7), new cjs.Rectangle(-98.2,-74.3,104.7,88.6), new cjs.Rectangle(-100.7,-70,106.9,84.4), new cjs.Rectangle(-102.9,-65.6,108.8,81.5), new cjs.Rectangle(-105,-61.1,110.6,80.5), new cjs.Rectangle(-106.9,-56.4,112.2,79.5), new cjs.Rectangle(-108.5,-52.1,113.6,78.6), new cjs.Rectangle(-109.8,-49.1,114.7,79), new cjs.Rectangle(-111,-45.8,115.5,79.1), new cjs.Rectangle(-111.9,-42.5,116.1,79.1), new cjs.Rectangle(-112.6,-39.1,116.6,79)];


(lib.avatar_koi_fretillement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// source_jet_deau
	this.source_jet_eau = new lib.projectile__lancement_source();
	this.source_jet_eau.name = "source_jet_eau";
	this.source_jet_eau.parent = this;
	this.source_jet_eau.setTransform(41.8,-29.7);

	this.timeline.addTween(cjs.Tween.get(this.source_jet_eau).wait(1).to({regX:11.4,regY:-0.2,x:47,y:-12.4},0).wait(1).to({y:-12.3},0).wait(1).to({x:53.2,y:-28.4},0).wait(1).to({x:53.3,y:-28},0).wait(1).to({x:53.5,y:-27.6},0).wait(1).to({x:53.7,y:-27.2},0).wait(2).to({x:52.8,y:-34.2},0).wait(1).to({y:-34.3},0).wait(2).to({x:53.2,y:-30.2},0).wait(1).to({x:53.1,y:-29.7},0).wait(1).to({x:53,y:-29.3},0).wait(1).to({x:52.9},0).wait(1).to({x:48.4,y:-12.3},0).wait(3).to({x:53.2,y:-29},0).wait(3).to({x:53.7,y:-28.8},0).wait(1).to({y:-28.7},0).wait(1).to({x:54.1,y:-42.9},0).wait(3).to({x:54.7,y:-33.1},0).wait(3));

	// avatar_koi
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#441F13").s().p("AA6GzQgNgJgggdIgOgOQgJgFgeABQgkAAhGAIIgEABIgVACIgJABQgOAIgNAAQgPAAgIgMQgIgLAEgNQAGgSAXgLIAcglIgCgBIAAAAIgBgBIgHgFQgngfgXgmIggACQg0AGhHAAIh1gBQgbgBgMgFQgUgJgJgWIgBgGQgFgRAHgOQAJgSAbgGIAOgEQgIgfAWg+QATg1AugXQgJghAJgwQAOhKAlgVIAHgFIAAgEIABgMQAGgUAZgXQAJgHAMAAQAjAAAhBQIBTChQAmgiAygcQgBgJAIgRQAIgOAWghIALgRQAGgVgYh7IgHgiQgTggASgRIACgCQAJgOAlgBQAJAAAHAIIBfB8IBlCEIAHAAQANgGANABIAIAAQBqALBEAdQBAAYAuAmQAtAmAWAuIAKANQASAaAAAfQAAAggRAhQgcBhhxBEQhxBFiWAMIgnACIgfA1QgGAKgNAAQgKAAgPgLgAAIFtIAjAgQAgAdAIAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIAjg9QAcgBAVgCQCRgLBthEQBshBAZhaQAgg6gegtQgFgHgGgHQgUgrgsgjQgrgkg9gXQhAgchogMIgGAAQgLABgKAFIgXABIgCgGQgMgRi7jyIgQABQgQADADAEIgGAEQgHAHAPAWQgBABABAGIAGAYIAAACQAbCEgKAaIgbArQgYAlAGADIAKAGQhNAkgvA1Ihgi7QgHgQgKgSQgTgigOAAQgFAAgDADQgUARgEAOIgCARQgCAKgOAHQgeASgLA/QgIAoAGAdQADAPAFAFIgcANQgeATgPAoQgSAzAFAYQACANAFACQgKAOgZAFQgSAGgFAIQgEAHAEAMIAAABIAAAAQAGAQANAFQAJAEAWABIB0AAQBGAAAzgGIAtgCQAWApApAfIAaAUIgrA5IgOAIQgNAKAFAHQACAEAFAAQAJAAANgIIACAAIAfgEIABAAQBLgJAkAAQAkABAMAGg");
	this.shape.setTransform(-8.2,-36.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhjhNIA8AgQA8AiAJALQAOARA4A9");
	this.shape_1.setTransform(-4.1,-45.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhdiCQCDCSAJAUQAJAVAmBJ");
	this.shape_2.setTransform(-3.6,-53.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5E5E5").s().p("ABZC4QgGgSgCgpQgCgogBgCQgCgGhXhzQhXh0gBgEIgGgaQgBgGACgBQAGgCBhCBQBfB/ABAIQAPBygEAHQgGgCgLgGg");
	this.shape_3.setTransform(-4.3,-55.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB2DAQgBgChxgzQhyg0gGgEQgGgDAYgmIAcgqQAHgSgLhCQgEgcgQhNIABgCIACAAQAoArBPBsQBNBnABAIQAOB5gCAAIAAAAg");
	this.shape_4.setTransform(-5.5,-55.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE7030").s().p("ABhDTIgJgOIgLhzIjAkIIgIgNQgHgPAFgEQALgKAVAIQC7DwAMASQAMASAHB7IADAQQAAARgKAEIgFABQgHAAgJgKg");
	this.shape_5.setTransform(-3.1,-56.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#893E17").s().p("ABhC2IgJgNIgIhUIjGj6QgEgDgCgEQgFgIAGgFQALgJAcAGQCwDuALARQAMARAKBIIACAPQABAQgKADIgFABQgIAAgIgJg");
	this.shape_6.setTransform(-2.6,-59.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D8D6D6").s().p("AAuAUQh6g2hMAGQAMgLASgLQAjgXAcgCQAcgDBeBOQAwAmAqAnQgugdg9gcg");
	this.shape_7.setTransform(-6.6,-41.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9A19D").s().p("AAKA0QAGgOACgTQAEgjgQgUQgUgagSAAQgLAAAAgBQAAgMAdABQAfACARAhQARAggKAsQgFAWgJAQg");
	this.shape_8.setTransform(43,-28.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9A19D").s().p("AgZAmQgggtgDgQQgHgjAQgeIATA3QAZA7AZAQQAZASANgHQAGgDABgGIgEAWQgJAXgUAAQgUAAgjgzg");
	this.shape_9.setTransform(39.3,-25.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBEB7").s().p("AgHBkIgFgGIg5hNQgIgKAAgeQAAglASgRQAfgcAdACQAiADAcAqQAZAkgSAvQgJAXgOARQgBAIgEAJQgJARgQAEIgLABQgIAAgFgEgAggg5QgIAGANARQAXAdACAEIALAfQAFALAIgDQALgEAFgaQAFgagKgQQgLgTgRgIQgHgEgIAAQgLAAgLAIg");
	this.shape_10.setTransform(41.3,-28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#421B0A").s().p("AgRA5QgTgPgJgcQgIgbAIgYQAHgYATgFQATgGASAQQATAQAIAcQAJAbgIAXQgHAYgTAGIgKABQgNAAgOgMg");
	this.shape_11.setTransform(41.6,-29.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#212121").s().p("AgIAFQgEgCABgDQgBgBAEgCQAEgCAEAAQAFAAAEACQAEACAAABQAAADgEACQgEABgFAAQgEAAgEgBg");
	this.shape_12.setTransform(20.8,-44.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EDEDED").s().p("AgvAcQgcgQAEgTQADgQAKgKIAJgHQAXBHBigEQgKAKgwAEIgLAAQgbAAgXgNg");
	this.shape_13.setTransform(18.7,-41.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag8AjQgZgOAAgVQAAgTAZgPQAagOAiAAQAjAAAaAOQAZAPAAATQAAAVgZAOQgaAOgjAAQgiAAgagOg");
	this.shape_14.setTransform(20.2,-42.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#D8D8D8").ss(0.5,1).p("AiDgwQAyAYBUApQBGAeA7AC");
	this.shape_15.setTransform(-45,-28.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhrhoQBBBdAfAiQA7BBA8AR");
	this.shape_16.setTransform(-40.8,-39.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#D8D8D8").p("ACDAYQgfg4ggg3QhAhvgCAEQgBAHAAAKQgCAJgOAIQgdASgMA/QgHAoAGAdQADANAEAGIgbANQgfAUgOAoQgSAzAEAYQACANAGACQgLANgZAGQgVAGCFgEQCEgEAlgIQArgJAGgfQAIgmgrhPg");
	this.shape_17.setTransform(-46.6,-40.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AikC/QAZgGALgNQgGgCgCgNQgEgYASgzQAOgoAfgUIAbgNQgEgGgDgNQgGgdAHgoQAMg/AdgSQAOgIACgJIABgRQACgEBABvIA/BvQArBPgIAmQgGAfgrAJQglAIiEAEIhSACQgqAAAMgEg");
	this.shape_18.setTransform(-46.6,-40.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#441F13").s().p("AiGAlQgOgBgEgGQgEgHAMgHQgCgIAMgJQAXgUBEgKQFngYknBWQgUAGgfgRQgdgOgGAFQgcAagiAAIgHAAg");
	this.shape_19.setTransform(-48.9,-20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiMDtQgYgBgIgDQgNgFgGgPQgEgMAEgHQAFgIASgFQAZgGAKgNQgFgDgCgMQgEgZARgyQAPgpAegUIAcgLQgEgGgEgPQgGgcAIgoQALhAAegRQAOgIADgJIABgRQADgOAVgSQANgMAYAlQAMATAIAWIByDbQgFAqgBAvQAAAhgJAmQgSAbiQAEIgkAAQg0AAhFgDg");
	this.shape_20.setTransform(-46.1,-39.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FE7030").ss(1,1).p("AArgKIhVAV");
	this.shape_21.setTransform(16.6,-20.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#D8D6D6").ss(1,1).p("AArgKIhVAV");
	this.shape_22.setTransform(16.2,-20.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FE7030").ss(1,1).p("AAsALIhXgU");
	this.shape_23.setTransform(16.4,-25.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#D8D6D6").ss(1,1).p("AArAKIhWgT");
	this.shape_24.setTransform(15.9,-25.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FE7030").ss(1,1).p("AAlAZIhJgx");
	this.shape_25.setTransform(18.1,-29.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#D8D6D6").ss(1,1).p("AAlAZIhJgx");
	this.shape_26.setTransform(17.5,-29.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#441F13").s().p("AgcAvQgggOgkgXQgdgSgBABQBFhoBYBMIA7A5QAbAcAKgJQgbAbgqAAQglAAgxgVg");
	this.shape_27.setTransform(-2.2,-22.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#441F13").s().p("Ah1BnQguhHgBhXQgBhbA4AGQBmALA/AbQA8AZAlAtQAQAUgFADQgDACgRgGQgmgMALAUQASAhg+AsQhAAsg2gWQgDAZgLAOQgHAJgIAAQgSAAgZgng");
	this.shape_28.setTransform(24,-39);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FE7030").s().p("AiCAeQAGgzAtgZQgVgOAAgbQAcgsBfAlQBdAkALAwQAIAkgFALQgDAJgQgFQgVgHgMgCQgXgFgRALQglAOgjARQhJAiAMAJQgogdAFg1g");
	this.shape_29.setTransform(-13.6,-29.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D8D6D6").s().p("AjpB0QiNgygfhRQgBgLAQAQQAhAeAbATQB9BXC/ABQCQgRCdiSQARgQBHhJQAfghAAANQAABth0BTQh2BVipAMQgdAGghAAQhQAAhegig");
	this.shape_30.setTransform(8.5,-14.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AkVDOQh+hDgHhsQgIhrBzhVQBzhVCqgNQCqgNB+BDQB9BDAIBsQAIBqh0BWQhzBWiqAMQgbACgaAAQiJAAhpg4g");
	this.shape_31.setTransform(7,-26.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BABABA").ss(0.5,1).p("AhYBmQASgeAVggQApg/ALgJQASgNBDg4");
	this.shape_32.setTransform(3.9,-8.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#AFAFAF").ss(0.5,1).p("AiLBaQAoggArghQBUhDAOgFQAVgHBNgj");
	this.shape_33.setTransform(-4.3,-9.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E5E5E5").s().p("AjGBxQANgXBHhaQBUhpARAEQAEABBlgIQBkgIAEACIACAGQACAFgEAFQgSAFhfAJQhdAIgDABQgGAChHBcQhHBcgEABIgcADIgBAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_34.setTransform(-6.9,-10.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E8E8E8").s().p("AARBvQgighgEgCQgSgJhDAEQgcABhPAKIgBgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAlgfBNhSQBChJAEAAICAgPQB4gOgDACQgCABhMCCIhRCMIgDABQgHAAgdgag");
	this.shape_35.setTransform(-5.2,-7.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC5729").s().p("AjkB6QgGgIANgJIAOgIIBShpQBUhrAMgHQAMgHBqAIQA2AEAzAGIARgBQARABADALQADAMgOAKQgHAGgIADIh0ABIkcC3QgRALgIAAQgGAAgCgEg");
	this.shape_36.setTransform(-6.8,-11);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#441F13").s().p("AgmGkIglggQgJgGhCgCIgvgBQgZgCgRgDIgNABQgeAAgGgVQgDgMAHgLQALgPAcgBIArgUQgVgGgLgFQguAhhpBCIgnAaQgYAQgUAAQgJAAgKgDQgYgEgLgSQgHgNAGgOQADgJAMgIQgLgTAIgbIAAgCQgLgNgBgQQgCgJADgUQgQgRAAgQQAAgNALgJQAFgFALgCQAIgBAVgCQAvgFAdgHQAzgMAigWQACgRAJgPQAshVBKg8QBYhKBqgSIgDgEQgFgGABgKQAAgKAKgLQAKgKAigcIAVgSQAHgPAJgrQAJgsAFgxIACgUQgHghARgMQAIgGAMgBIAIABQADgBAFgBQAYABAMAoQBRD0ACANQACAOgEAmIAKADQCCA3AzA8QAxAxAUA0QAVA1gKAuIgCAJQABALgBALQgEArgkAbQgWARgeAIQgLAJgPABIgNADQg1AShJABQgngBg1gGIgjgFQgiAVgnAbQgfAWgKAIQgGAKgMAAQgPABgpgggAjtFiQAXAFBOACQA+ACAMALQANALAZATQAiAbAIAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABgEApgdQArgeAqgZIApAGQA0AHAlAAQBHAAA0gUQAFAAAHgCQAPAAAEgIIAogPQAngYADgoQACgOgCgIIADgLQAJgrgTgwQgUgvgtgsQgug5iAg1QgJgEgIAAIgIgDQAIgygDgNQgDgVhQjqQgHgagJgBQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBACQgFgDgGAAQgFAAgEAEQgHAFAGAXIgCAWQgFAxgKAsQgJAzgJAQQgCACgmAhQglAeAEAFIAeAeQhzAJhgBKQhPA8gvBZQgIASgBAQQgxAjhTAOQhKAGgHAGQgHAGAIAMQADAEALAKIAAABIgDAQQgBALAAAGQABAQAOAIIgCANQgEAMAAAFQABALAHAJIABAAIAEAGIAEAIQgjAJAJARQAGAKAQACQAIACAGAAQANAAAUgNIBYg5QBSg1AdgWQASALAkAIQASAHASADIhdAuIgQACQgQADACAJQACAFAPABIAOgCg");
	this.shape_37.setTransform(-7.8,-37.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ag7hnIArAsQArAuADAMQAGARAYBY");
	this.shape_38.setTransform(4.9,-47.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#D8D8D8").ss(0.5,1).p("AgniZQBDCuABAUIALBx");
	this.shape_39.setTransform(7.6,-55.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E5E5E5").s().p("AAHDGQgBgSANgzIAMg0QAAgGgmh7Qgnh7ABgEIABgaQABgFACgBQAFgCApCKQArCHgCAIQgZCJgEAHQgFgIgFgGg");
	this.shape_40.setTransform(8.8,-56.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ABGDUQgBgEinioQgEgEAlgeQAnggABgCQAKgTALg9QAJg2AEgvIACgCIABABQAUAvAjByQAiBugCAHQgbCQgCAAIAAAAg");
	this.shape_41.setTransform(3.5,-56.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FE7030").s().p("AAMDYIgEgPIAShwIhRkYIgDgOQgCgOAFgEQALgIAOAKQBUEBAEATQAFATgYB3QAAAegOAEIgCABQgHAAgEgMg");
	this.shape_42.setTransform(10.1,-58.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#893E17").s().p("AAMDPIgDgRIAShiIhNkRIgCgPQgCgRAGgEQAGgGAHAPQAEAHACAJQBPDpADAVQAEAVgSBhQgBAjgNAFIgDAAQgGAAgEgNg");
	this.shape_43.setTransform(11.6,-59);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E5E5E5").s().p("ABbBFQg+g0gygdQg3gfgfADIAjgMQA8gSAcgBQAlgBA2CBQADAIgHAEQgDADgDAAQgDAAgDgDg");
	this.shape_44.setTransform(-1.9,-44.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9A19D").s().p("AgiAtIAYgTQAXgYgBgXQgBgdgLgKIgIgHQAHgJAUARQAWATgHAhQgGAfgfAaIggAVg");
	this.shape_45.setTransform(38.6,-12.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9A19D").s().p("AgRBNQgOgLAEgzQADgqAIgOQAPgcAbgOIgSAzQgOA3AIAaQAJAaANACIAFAAQgFADgHACQgHACgHAAQgLAAgJgHg");
	this.shape_46.setTransform(31.6,-12.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFBEB7").s().p("AgrBTQgPgDgIgIIgEgIIAChVQAAgMARgWQAVgaAXgCQAlgDAVASQAXAUgDAtQgDAngoAYIgmAQQgCADgEACQgGADgIAAIgNgBgAACghQgFACgDAQIgFAeIgJAbQgDAJAEAAQAHAAANgSQAQgSADgOQAEgRgEgKQgCgIgJAAIgHABg");
	this.shape_47.setTransform(36.5,-12.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#421B0A").s().p("AgXA7QgRgGgFgWQgFgVAKgYQAKgZATgMQASgNARAGQARAHAFAVQAFAWgKAXQgKAZgTAMQgMAJgLAAQgGAAgGgCg");
	this.shape_48.setTransform(36.6,-13.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#212121").s().p("AgCAEQgEgCgBgDQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQABgCAEABQACABAEACQAIAGgEAEQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAgBAAQgDAAgDgEg");
	this.shape_49.setTransform(28.6,-36.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDEDED").s().p("AgDAkQgZgRgJgZQgJgaAOgMQASgPAOAEQgNAgALAbQAJAbAjAaIgBAAQgMAAgggVg");
	this.shape_50.setTransform(24.7,-35.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAUA5QgXgEgYgSQgXgTgJgXQgJgXAMgPQALgOAaADQAYADAXATQAYATAIAWQAJAYgMAOQgKAMgSAAIgJAAg");
	this.shape_51.setTransform(27.1,-35.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhiAqQBrgOBahF");
	this.shape_52.setTransform(-48.2,-13.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhSA8QBVg1BQhC");
	this.shape_53.setTransform(-46.9,-8.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ahog7QgBAAgBACQAAABABABQAGAEAAAGQgBAFgDANQgBAMACAGQACAEAEAFQAFAFACAGQABABgFATQgEARALANQAMANgCANIBRg4QBUhCARgxQACgDgDgDQgCgCgEAAQg6AGiRAbg");
	this.shape_54.setTransform(-47.9,-8.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhWBAQgLgNAEgRQAFgTgBgBQgCgGgFgFIgGgJQgCgGABgMIAEgSQAAgGgGgEQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgCQCRgbA6gGQAEAAACACQADADgCADQgRAxhUBCIhRA4QACgNgMgNg");
	this.shape_55.setTransform(-47.9,-9.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#441F13").s().p("AhQA+QgEgDACgIQAFgRAkgfQDRiWiNCWQgKAKgZAGQgYAFgCAFQgGAYgYANQgLAGgEAAQgGAAAFgKg");
	this.shape_56.setTransform(-46.4,-6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ah4CLQgMgDgEgIQgGgMARgIQAJgEAKgCQgOgMgDgOQgCgMAEgaQgOgIAAgQQAAgJACgMIACgLQgHgFgFgHQgLgOAIgHQAGgGBYgIQBegSAvgzQAPgQAWAfQALAPAIATQAPAYgZAhIgcAcQiVBvglAUQgRAJgOAAIgKgBg");
	this.shape_57.setTransform(-44.6,-11.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FE7030").ss(1,1).p("AAzANIhlgZ");
	this.shape_58.setTransform(7.7,-19.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#D8D6D6").ss(1,1).p("AA0ANIhmgZ");
	this.shape_59.setTransform(7,-19.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FE7030").ss(1,1).p("AApAoIhRhO");
	this.shape_60.setTransform(9.8,-25.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#D8D6D6").ss(1,1).p("AApAoIhRhP");
	this.shape_61.setTransform(9,-25.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FE7030").ss(1,1).p("AAaA3Igzht");
	this.shape_62.setTransform(13.5,-29.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#D8D6D6").ss(1,1).p("AAaA3Igzhs");
	this.shape_63.setTransform(12.9,-29.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#441F13").s().p("AgcATQgngggYgdQgYgeANgBQAXgJApALQAnAKAlAXQBcA3gfAxQgHAMgPAAQgiAAhHg7g");
	this.shape_64.setTransform(-10.2,-23.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#441F13").s().p("AiLBEQgSg/Abg+QAdhBAuAUQBWAlAwAkQAsAiATArQAIASgFAAQgDABgNgJQgegTADASQAFAdhEANQhGANgpgeQgLAQgOAHQgGADgFAAQgTAAgMgog");
	this.shape_65.setTransform(24.5,-35.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FE7030").s().p("ABZBfQgPgPgKgIQgSgNgSABQglgEgmgCQhMgDAFALQgUgqAbgkQAagmAxgBQgMgUAMgUQAqgXBCBEQBBBBgLAtQgJAhgJAHQgCACgDAAQgGAAgIgHg");
	this.shape_66.setTransform(-16,-33.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D8D6D6").s().p("Ag7AZQilgVgwgHQhIgLgZgaQAMgIAEgBQAIgBAXAEID6A0QCuAbBjgQQBSgOBXg4QgpBPhrAVQgkAHgqAAQhYAAhzgdg");
	this.shape_67.setTransform(5.6,-7.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgWDVQjZgvhPglQh6g3AnhKQA5hvBqhBQCBhQCbAdQCoAgBtBkQBqBhgVBeQgVBehvAgQgyAOhBAAQhRAAhmgXg");
	this.shape_68.setTransform(3,-26.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BABABA").ss(0.5,1).p("AhSAuIAlgcQAogcAPgJQAVgLA0gP");
	this.shape_69.setTransform(-4.2,-3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#AFAFAF").ss(0.5,1).p("Ah7AfIBPgeQBRgeAOAAQAXABAygC");
	this.shape_70.setTransform(-14.6,-4.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E5E5E5").s().p("AjCA5IgcgGQgCAAgBAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAVgNBhgsQBzg2AOAIQAEACBlAZQBjAZACADIAAAEQAAAEgFADQgUgBhdgWIhhgWQgGgBhiAuQhgAugGAAIAAAAg");
	this.shape_71.setTransform(-8.8,-7.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E8E8E8").s().p("Ag1AaQgMgLg+gCQhOgCgXgFIgBgBIABgCQAvgLBlgpQBYgjADABQC0AlAnAGQgaAEhMAwQheA7gFALQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgNAAhDg6g");
	this.shape_72.setTransform(-8.7,-3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CC5729").s().p("AkBA8QgDgIAQgDIAQgCIByg3QB0g4AOgCQAOgBBkAnQAzATAvATIAQAEQAQAHgBAJQgCAPgiABIhvgjIlPA2QgMACgHAAQgOAAgBgHg");
	this.shape_73.setTransform(-8.9,-9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#441F13").s().p("AAPGCQgKgJgOgUQgSgagEgJQgGgEg7gPQg8gNgYgJQgcgEgJgMQgGgJADgKQADgOAPgFIgJgJQgSgLgSgQQgXgUgKgTIiEAHIhhADIgLABQgQAAgKgEQgTgGgKgTIgBgDQgGgJAAgMQAAgMAHgJQALgKAXgBIACAAQAAgoAYgiQgGgTAEgPIAEgJIABgCQAJgPAUgPQgDgfAMgPQAHgJAMgCIADAAQAJAAALAHQAHAEATAQQAoAhAcARQAyAeAxALQAjgmA5gfQA5gfBDgTIALgUQABgRgMgsQgLgtgRgvIgJgVQgVgbALgTQAIgNAQgEQAJgIAKABQASgBAVAYQDCC6ANARQAFAGAHAQIAeAGIAAAAQAKAAALACQBPAXAzAcQAyAcAeAmQAtAtAUA1QARAVAHAiQAKA3gyAqQgtA7hsAeQhIAVhYACQgyAMhoAeIghAKIgFAAQgKAAgLgIgAjJD6QgCAJAdABIABABQAUAJBKARQA7AOAGALQAHANAOAVQAVAcAIABIABAAIBFgUQBJgWAugLQBXgBBGgVQBogdApg3QArgkgJgqQgGghgQgQQgSg0gsgrQgbgkgvgaQgxgbhOgXQgGgCgJAAIgCAAIgqgHQgJgWgFgGQgNgSi/i2QgRgTgJABQgEgBgCAEIgBACQgOABgFAIQgFAJARATIABAFIAHARQARAvAMAtQANA0gCATIgQAjQhJATg7AhQg6AhggAlQhKgLhMg4IgugkQgTgQgGAAIAAAAQgKABgCAUQgBALADANIgBACIgCACQgVAMgJAQIAAABIgCAFQgFAQAKAPQgcAjABArIgDAQIAFAAIAAABQgMgDgMAAQgWAAABALQAAAKAFAEIAAACQAGALAJAEQAIADAOAAIAKgBIBqgDICJgIQAFASAXAWQATATAVAMQAZAYAdAQIgVAEIgRgCQgRAAgBAGg");
	this.shape_74.setTransform(-7.3,-44.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ahrg6IBBAVQBBAYAKAJQAPAOA8Ax");
	this.shape_75.setTransform(3,-50.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ahuh1QCWCEAMATQALARAwBD");
	this.shape_76.setTransform(1.9,-59.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E5E5E5").s().p("ABxCkQgJgQgKgoQgKgogBgCQgDgFhhhhQhihigBgEIgLgZQgCgEACgCQAEgEBtBtQBqBrACAIIATA8QARA2gBAFg");
	this.shape_77.setTransform(1.4,-61);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("ACBCqQgCgCh4gaIiBgdQgFgDAXgsIAZgyQABgUgRg+QgPg3gSguIAAgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAqAjBZBbQBXBXACAHQAlB3gCAAIAAAAg");
	this.shape_78.setTransform(1.4,-61);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FE7030").s().p("AB+C+IgKgMIgihwIjYjgIgJgLQgJgNADgGQAFgHALgBQAGgBAFABQDPDJAOAPQANAQAgB5IAFAPQAEARgHAGQgDADgDAAQgGAAgIgIg");
	this.shape_79.setTransform(2.2,-61.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#893E17").s().p("AB4C1IgKgOIgchjIjQjbIgKgNQgJgPADgHQAEgIAPALQAHAFAGAHQC/C1ANASQAOASAcBiIAGASQAEATgHAHQgCACgDAAQgGAAgIgJg");
	this.shape_80.setTransform(3.6,-63.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F9A19D").s().p("AgXAuIARgXQAQgbgHgWQgGgcgOgGIgJgFQAEgKAWAMQAZAMACAhQACAegYAhIgXAag");
	this.shape_81.setTransform(44.7,-28.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F9A19D").s().p("AgEBVQgQgHgLg2QgJguADgOQAIgfAXgTIgEA0QgCA3AOAXQAOAXANgCQAGAAAEgGQgFAJgIAIQgLALgLAAQgEAAgEgCg");
	this.shape_82.setTransform(39,-27.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFBEB7").s().p("AgbBYQgOgDgFgHIgCgHQgPhGgDgKQgDgLALgZQANgdAVgIQAhgMAYANQAaANAIAsQAHAlgfAfIghAYQgEAHgGAFQgKAJgLAAIgGgBgAgQgpQgFAFAFAQIALAgIADAdQABALAEgCQAHgDAGgXQAGgYgDgOQgFgTgIgIQgFgFgFAAQgFAAgHAFg");
	this.shape_83.setTransform(42.1,-28.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#421B0A").s().p("AgHA9QgRgCgKgTQgKgUAEgYQADgZAPgQQAOgRAQACQARACAKATQAJATgDAZQgDAZgOAQQgNAPgOAAIgEAAg");
	this.shape_84.setTransform(42.3,-29.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#212121").s().p("AgCAFQgIgFACgEQAEgFAHAFQAJAEgDAFQgCADgDAAQgDAAgDgDg");
	this.shape_85.setTransform(30.1,-48.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EDEDED").s().p("AgBAoQgagMgMgYQgLgYAMgOQAQgTAOABQgJAjAOAZQAMAaAlATIgFAAQgOAAgcgNg");
	this.shape_86.setTransform(26.6,-47.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgXAoQgZgOgLgWQgKgWAJgQQAKgRAYgBQAZgCAYAOQAZAPALAWQALAWgKAQQgJARgZABIgFABQgVAAgXgOg");
	this.shape_87.setTransform(28.8,-47.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhpgaQBdA9B2gK");
	this.shape_88.setTransform(-45.6,-44.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhpAFQBpAEBqgO");
	this.shape_89.setTransform(-48.2,-37.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ag7hZQgCgBgBABQgCABABACQADAJgFAGQgCACgRAPQgOAMgBAHQgBAGAEALQAEAJgCAHQgDAFgLAVQgKAVgBAPQgCATgDALIBhgEQBpgLAugpQAEgDgBgEQAAgEgDgDQhGgwhxg9g");
	this.shape_90.setTransform(-47.1,-43.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ah4A8QABgPAKgVIAOgaQACgHgEgJQgEgLABgGQABgHAOgMIATgRQAFgGgDgJQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBIADAAQBxA9BGAwQADADAAAEQABAEgEADQguAphpALIhhAEQADgLACgTg");
	this.shape_91.setTransform(-47,-43.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#441F13").s().p("AheAiQgLAAgEgFQgEgFAIgGIAEgOQAOgQAxgMQEKghjPBQQgOAFgagLQgYgLgDAFQgTAXgbAAIgCAAg");
	this.shape_92.setTransform(-49.2,-34.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AiDB6QgcgEgJgIQgFgFgBgKQAAgKAXAAIAWACQgIg1AhgoQgDgGgCgHQgDgPAGgLQAGgKAOgLIAMgJQgCgLABgLQAAgXALgCQAFAAAUAPIAsAkQBNA5BKAMQAXADgGAaQgDANgHAMQgCAsgeALIgfACQiSAOg7AAIgagBg");
	this.shape_93.setTransform(-46.2,-43.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FE7030").ss(1,1).p("AAtAAIhZAA");
	this.shape_94.setTransform(16.3,-31.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#D8D6D6").ss(1,1).p("AAtAAIhZAA");
	this.shape_95.setTransform(15.8,-30.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FE7030").ss(1,1).p("AAoAVIhPgp");
	this.shape_96.setTransform(17.2,-35.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#D8D6D6").ss(1,1).p("AAnAVIhNgo");
	this.shape_97.setTransform(16.6,-35.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FE7030").ss(1,1).p("AAeAhIg7hB");
	this.shape_98.setTransform(19.8,-38.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#D8D6D6").ss(1,1).p("AAdAhIg5hB");
	this.shape_99.setTransform(19.2,-39);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#441F13").s().p("AgQAUQgrgUgfgVQgfgVAJgDQAngUBiAdQBpAegSAvQgFANgUAAQghAAhGgig");
	this.shape_100.setTransform(-4.7,-35.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#441F13").s().p("AiHBIQgbhAASg+QAUhDAzAOQBdAbA1AkQAyAhAYAvQAPAdgdgRQgfgSAFARQAKAehEARQhFARgugdQgIASgNAHQgGAEgGAAQgTAAgRgng");
	this.shape_101.setTransform(27.7,-45.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FE7030").s().p("AARBCQgxgIgrgWQgtgXABgVQAAgYBEgLQgBgZAmAAQAiABAoATQAsAVAMAbQAPAfgmAbQgOALgdAAQgPAAgSgDg");
	this.shape_102.setTransform(-9.9,-43);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D8D6D6").s().p("AAxAWQixgihSAZIA7gpQBGgoA0AIIDwB6QhJgXhZgRg");
	this.shape_103.setTransform(-5.3,-49.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D8D6D6").s().p("AgUBdQhygOhxgwQiIg4gZhEQACgKATARQAtAmASANQB6BXCnAYQCQALCrhXQAXgLBJgrQAjgUgDALQgTBTh5AtQhXAhhvAAQgsAAgugFg");
	this.shape_104.setTransform(6.8,-22.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgaDeQipgThxhJQhxhLARhSQARhUCOg/QCYhECnAUQCdAUBgBdQBVBSgFBZQgFBViCAvQhcAhhwAAQguAAgwgFg");
	this.shape_105.setTransform(7,-35.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#BABABA").ss(0.5,1).p("Ah7AVIA5gOQA9gMANAAQAYABBcgQ");
	this.shape_106.setTransform(6.7,-11.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#AFAFAF").ss(0.5,1).p("AiYgKIBbAAQBeAAANADQAWAFBVAO");
	this.shape_107.setTransform(1.7,-14.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E5E5E5").s().p("AB7AHIhRglQgGgCh2ATQh2ARgDgBIgYgJQgCgBAAAAQgBgBAAAAQgBgBAAAAQABAAAAAAQASgGB9gTQCJgVALAKQACADBUAoQBTAnACADIgDAEQgCADgGACQgSgFhQglg");
	this.shape_108.setTransform(-1.3,-18);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E8E8E8").s().p("Ag0ApQgOgUgIgOQgGgLg7gNQhKgRgUgJIgBgBIACgBQAzgBB3gNQBlgLADACQCZA9AoANQgeAAhbAYIiIAnIgBAAQgJAAgUgcg");
	this.shape_109.setTransform(-1.3,-14.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CC5729").s().p("ADTA4IhUgeIlfgXIgQgCQgQgCACgFQABgHARAAQAIAAAIACQEOguAWACQAXACCQBmQAXgOgJAMQgFAIgTABg");
	this.shape_110.setTransform(-2,-18.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#441F13").s().p("AAVGWQgOgJgXgbQgIgCgGgIQgCgFAAgEIgTgXQgGgIhBgEQg9gEgdgJIgHAAQgVAAgLgKQgHgGgBgJQgBgPAIgJQAMgOAagBIAJgFQgigUgXgXQgOgOgHgLIgDgFQi3AvgqADIgJABQgfAAgRgRQgOgOAAgSQAAgNAJgLQAJgJAQgBQgDgZAVgXIACgDQgEgSAHgQQADgKANgSQgHgXAHgPQAGgMANgEQAEgBAEAAQAKAAAfANQAqARAfAJQA2AOA3ADQAwg4BMgrIACgCIAHgDQAvgaAxgQIAegJIASgdQACgRgFgtQgGgugJgyIgFgVQgRgdAMgRQAJgMAPgDQAHgFAIAAQAUAAATAeQCXDKANAYIAHAVIANgCQAMAAAMAFQCHAwA9A6QA2ApAbAwQAbAwgDAvQAFAQABASQACAqggAeQgUATgbALQgKAKgOACQgJAEgGAAQhTAth5AAQgxAAg1gHIhtA9QgFAEgHAAQgJAAgKgHgAAoGJIACgBIBzhBQA1AIA1AAQB4AABNgsQAIAAAIgEQAOgCADgHIAkgUQAkgbgCgmQgBgTgFgNQAEgtgagtQgZgrgzgnQg6g3iDgvQgJgEgJAAQgIAAgIADIgNgDQgGgYgDgGQgKgUiYjMQgOgVgJAAQgCAAgCADIgBACIgEAAQgKAAgEAHQgGAHAOAVIAEAXQAKAxAGAuQAHA1gEATQAAADgOAVIgKARIglALQgwAPgtAZIgGAEIAAAAQhQAtgvA7QhPgDhPgcQg/gagLAAIgCAAQgQAFANAhIgBABIgKAPQgHAKgBAGQgFAKACALQABAFACAEIgIAMQgIAJgDAHQgFAKADANIABAIIgBAKIgOgCQgVAAAAAPQAAAKAHAHQAMAMAXAAIAHgBQAsgDDCgyQADAIAGAJQAHAMALAKQAdAeA4AbIgtAZIgBAAQgJAAgIACQgOAEABAKQABAIATAAIAKAAIABAAQAXAIBNAGQA/AEAKAPIAaAfIgDADIAEgCQAlAtALAAg");
	this.shape_111.setTransform(-6.7,-47.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhZhHIA3AeQA4AfAIAKQAMAPAwA5");
	this.shape_112.setTransform(4.7,-54.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhWiBQB4CVAJATQAIAUAkBH");
	this.shape_113.setTransform(4.7,-63.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E5E5E5").s().p("ABTCxQgHgRgEgpQgEgpgBgCQgCgGhMhsQhNhtgBgEIgGgaQgCgFACgBQAEgEBVB6QBUB4ABAHIAKA+QAKA3gCAFIgOgHg");
	this.shape_114.setTransform(4.4,-64.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("ABuC4QgBgChqgoQhrgqgEgDQgFgDAZgpIAcguQAEgVgIg/QgIg3gLgxQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAiAoBGBlQBDBhABAHQAUB6gBAAIAAAAg");
	this.shape_115.setTransform(3.1,-64.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FE7030").s().p("ABcDMIgIgNIgShzIipj5IgHgNQgHgNAEgGQAIgLARAGQCjDhAKARQALARAPB8QAJAegLAIQgCACgDAAQgGAAgGgJg");
	this.shape_116.setTransform(5.3,-65.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#893E17").s().p("ABXDDIgIgPIgOhmIiijzIgHgOQgHgQAEgGQAEgIAMANQAGAGAFAHQCXDLAKAUQAKAUAOBkQAJAjgLAJQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgFAAgHgKg");
	this.shape_117.setTransform(6.6,-66.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D8D6D6").s().p("AAiAdQiXgwg4AHIBCgfQBPggA2gCQAjgBA9BOQAdAnAYAnQhBgZhMgYg");
	this.shape_118.setTransform(-1.6,-53.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F9A19D").s().p("AgdAsIAUgUQATgYgDgXQgEgcgLgIIgJgGQAGgJAUAPQAXAPgCAgQgDAegbAdIgcAWg");
	this.shape_119.setTransform(45.2,-26.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F9A19D").s().p("AgOBMQgPgJgBgwQgBgpAFgNQAMgdAYgQIgKAyQgJA2AKAYQALAYANABIAGgCIgMAHQgIADgIAAQgJAAgIgFg");
	this.shape_120.setTransform(38.9,-26.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFBEB7").s().p("AggBTQgOgBgJgHIgFgHIgGhRQgCgMAOgXQARgbAWgEQAjgHAWAPQAXARACArQACAlgjAbIgjAUQgBADgFACQgHAFgNAAIgFAAgAAAggQgGACgBAQIgBAdIgGAaQgCAKAEgBQAGgBALgSQANgUABgMQACgRgEgJQgDgIgHAAQgDAAgEADg");
	this.shape_121.setTransform(42.9,-27.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#421B0A").s().p("AgPA7QgRgEgHgVQgHgUAHgXQAGgZARgOQAQgOAQAEQARAEAHAVQAHAUgHAXQgGAZgRAOQgNALgMAAIgHgBg");
	this.shape_122.setTransform(43,-27.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#212121").s().p("AADAIQgDgBgCgCQgIgGADgEQAFgFAGAGQAEADABACQABADgCACQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_123.setTransform(32.8,-49.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EDEDED").s().p("AgEAlQgYgQgIgZQgIgZAPgNQALgLAMgCIAIgBQgNAiAJAaQAIAcAiAZIgBAAQgNAAgegUg");
	this.shape_124.setTransform(28.9,-48.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AASA5QgXgCgXgTQgXgRgHgXQgIgXANgPQAMgQAYACQAYACAWASQAXATAHAWQAIAXgMAPQgLAOgTAAIgHAAg");
	this.shape_125.setTransform(31.3,-48.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhsgIQBnAgBygb");
	this.shape_126.setTransform(-46.6,-41.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhmAXQBmgOBogf");
	this.shape_127.setTransform(-48,-36);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhKhPQgBgBgCACQgBABABABQAEAHgEAGQgIAKgEAGQgHAMAAAGQAAAFABAHQABAIgBAGQAAACgNAQQgMAPAEASQAEASgIAMIBkgUQBrgcAngoQADgDgBgDQgBgDgEgCQhDgYiCgig");
	this.shape_128.setTransform(-47.8,-39.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("Ah4AxQgEgSAMgPQAOgQAAgCIgBgOIgBgMQABgGAHgMIALgQQAFgGgFgHIABgCQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQCBAiBEAYQAEACAAADQABADgCADQgnAohrAcIhlAUQAJgMgFgSg");
	this.shape_129.setTransform(-47.4,-39.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#441F13").s().p("AhpAhQgEgDAHgGIADgNQANgOAwgNQA+gSA6gBQBGgBiAA1QgOAGgagIQgZgGgDAEQgRAVgdACIgCAAQgJAAgEgDg");
	this.shape_130.setTransform(-48.7,-33);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AioBfQgIgIgBgKQAAgOAUgBQAJAAAKADQgGgSAEgQQAEgMAQgXQgCgEgBgFQgCgLAEgKQAFgJAHgMIAHgKQgDgIgBgKQgEgTALgDIBMAbQBTAeBYABQAWAAAGATQADAKgCAJQAEAZgbASIgdAOQjSA2grADIgIABQgVAAgLgLg");
	this.shape_131.setTransform(-45.2,-39.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FE7030").ss(1,1).p("AAsgDIhXAH");
	this.shape_132.setTransform(15,-31.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#D8D6D6").ss(1,1).p("AAsgDIhXAH");
	this.shape_133.setTransform(14.5,-31.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FE7030").ss(1,1).p("AApARIhRgh");
	this.shape_134.setTransform(15.4,-36);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#D8D6D6").ss(1,1).p("AAqARIhSgh");
	this.shape_135.setTransform(14.8,-35.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FE7030").ss(1,1).p("AAhAeIhBg8");
	this.shape_136.setTransform(17.7,-39.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#D8D6D6").ss(1,1).p("AAhAfIhBg8");
	this.shape_137.setTransform(17.1,-39.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#441F13").s().p("AgRATQgpgUgcgVQgcgVALgDQANgHAmACQAnACAlAKQBjAcgTAyQgFAOgUAAQgfAAhBgig");
	this.shape_138.setTransform(-4.3,-36.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#441F13").s().p("AiSBRQgbhGAWhJQAXhMA1ATQBhAjA4AnQA0AkAZAtQALAUgGACQgDABgQgJQgigUAFAUQAKAhhJAUQhJAUgwgfQgKATgOAJQgHAEgGAAQgVAAgQgrg");
	this.shape_139.setTransform(27.9,-47.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FE7030").s().p("AhpBNQgugPAmgyQAigtAZgFQAAglAhgCQAcgBAqAaQAoAZAYAeQAbAjgMAXIhvAJQhXAIgaAAIgJgBg");
	this.shape_140.setTransform(-11.6,-45.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D8D6D6").s().p("AgvBIQkpg9hBhiQADgKANAJIAyAkQBsBFCvAkQCSAWC4hSQATgJBWgrQAlgUgCAMQgYBliBAoQg/AThKAAQhOAAhZgVg");
	this.shape_141.setTransform(7.6,-23.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgqDVQjBgqhgg3Qh1hDAnhOQAnhRB7hBQCUhOCZAdQCrAgBqBYQBqBZgUBbQgWBgh8AoQhCAVhRAAQhNAAhZgUg");
	this.shape_142.setTransform(7.1,-37.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#BABABA").ss(0.5,1).p("AhuAyIAwgiQAzghANgDQAXgEBWgZ");
	this.shape_143.setTransform(3.1,-17.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#AFAFAF").ss(0.5,1).p("AiVAWIBXgWQBYgWAOABQAXACBXAA");
	this.shape_144.setTransform(-0.7,-20.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#E5E5E5").s().p("AjFBEIgcgJQgGgCADgCQAPgNBsg3QB4hAAPAMQADACBiAlQBgAjADAEIgBAHQAAAFgGAEQgTgDhcggIhegiQgGgBhmA3QhlA2gGAAIAAAAg");
	this.shape_145.setTransform(-4.5,-25.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E8E8E8").s().p("AgiBJQgYgagMgRQgLgPg+gEQhNgGgYgHIgBgBIACgCQAwgOBqgvQBagpAEABIB+AqQB2AngEAAQgFAAjqCDIgBABQgIAAgfgig");
	this.shape_146.setTransform(-3.1,-19.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CC5729").s().p("AkDBGQgCgKAQgEIAQgBIB4hBQB6hDAOgBQAOgCBgA3QAxAaAtAcIAQAGQAPAIgCAMQgCANgRAEIgSACIhsgyIlVA2IgQABQgQAAgBgJg");
	this.shape_147.setTransform(-4.6,-27.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#441F13").s().p("AAjGmIgpgXQgBgBgFAAQgPAAgxAPQg8ASgaABQgPAIgMAAQgRAAgIgOQgHgMAFgNQAGgRAYgJIA5hBQhVgngsg5QhJAgiZAjIgNABQgTAAgTgLQgRgJgLgOQgNgOADgQQAEgRAXgNIAJgEQgIgaAGghQADguAggdQgPgXgFgmQgIg+AcgcIADgDIAAgBIgBgIIgDgEQgIgRgDgKQgEgTAJgNQAJgMAPAAQAgAABBA/IAjAcQBXBFAgARQAig0A+gqQAAgKAJgOQAJgOAbghIASgXQAEgQgFguQgEgugJgyIgGgWQgSgfAQgRQALgMARgBQAHgEAIAAQAUAAAWAfIBFBcQBGBbAZAiIAbAAQALgGAOAAIAIAAQBpAMBBAdQBUAhAzA4QAyA5AFBCIAAADIAAAIQALAjgSAnQgKAWgRAUIgCAGQgMAngcAHQg2A3hSAiQhSAjhhAIIg/BKQgIAJgMAAQgRAAgsgXgAAEF+IAqAXQAnAUALAAQABAAABAAQABAAAAgBQABAAAAAAQAAAAAAgBIBFhQIABAAQBkgHBTgkQBQgjAzg2QAVgBAKghIACgIIACgDQAPgQAKgTQAQgjgKgfIAAgNQgEg9gxg1QgvgzhOgeQg9gbhngMIgGAAQgLAAgJAGIgpABQgWgfhNhkIhIhfQgQgXgKAAQgEAAgBADIgCACIgGgBQgKAAgGAGQgGAHAOAXIAFAXQAKAyAEAvQAFA2gFASQgBACgiArQggAoAGADIAIAEQhVA0gjBFIgCgKQgdgLgyglIhchJQgOgPgSgOQgkgdgPAAQgFAAgCADQgHAJAIASIAKAVIADANQAAAIgKAJQgUAUAGA2QAEAgAMAUQAHALAFAEQgKAEgKAMQgVAXgCAjQgGAcAGATQADAKAEAEIAAAAQACAEgIAGQgKACgIAEQgPAIgCAIQgBAGAGAJQAJALAOAHQAOAIAOAAIAJgBQCrgnBCghQArBFBwAtIhOBYIgOAHQgNAJAEAJQACAEAGAAQAIAAAPgIIAAABQAZgCA5gQQA3gRARAAQALAAAFAEg");
	this.shape_148.setTransform(-6.6,-44.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhmhOIBBAiQBAAjAIAKQANARA3A9");
	this.shape_149.setTransform(-3.9,-53.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhfiIQCHCfAIAUQAJAUAnBK");
	this.shape_150.setTransform(-3.5,-62.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E5E5E5").s().p("ABZC4QgHgSgDgpQgDgqgBgCQgCgFhVhzQhUhzgBgEIgHgbQgBgFACgBQAFgEBeCBQBdB+ABAIQASB1gDAHIgQgIg");
	this.shape_151.setTransform(-3.8,-63.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AB/DAQgBgCh6gwIiBg1QgGgDAggoQAigrABgCQAGgUgHhAQgGg5gLgxQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACAAQAmAqBNBsQBLBmABAHQASB8gCAAIAAAAg");
	this.shape_152.setTransform(-6,-63.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FE7030").s().p("ABiDUIgJgOIgPh1Ii6kHIgIgNQgHgOAEgFQAKgLATAHQC2DvALARQAMASALB+IADARQACARgJAFIgFABQgHAAgIgKg");
	this.shape_153.setTransform(-2.8,-64.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#893E17").s().p("ABdDLIgIgQIgMhoIizkAIgIgPQgGgQAEgGQAGgIANAOQAHAGAFAIQCnDYALAUQALAUAMBnIADATQABATgIAGIgFABQgGAAgIgLg");
	this.shape_154.setTransform(-1.1,-65.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D8D6D6").s().p("AAzAYQh3gphUAEIAfgZQAngZAngDQAngDBSBFQApAhAjAjQgsgWg7gWg");
	this.shape_155.setTransform(-7,-49.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F9A19D").s().p("AACAyQAGgNAEgRQAHgigOgVQgQgagQgCQgLgCAAgBQACgLAbAFQAdAFAMAhQANAggOApQgGAVgKAOg");
	this.shape_156.setTransform(43.4,-34.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F9A19D").s().p("AATBaQgTgCgbg1QgagvgBgPQgDgiARgcIANA3QASA6AVAUQAWATANgFQAGgDACgGQgBALgGALQgJATgRAAIgDAAg");
	this.shape_157.setTransform(39.5,-32.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFBEB7").s().p("AgSBfIgEgHQgmhFgHgKQgHgKADgeQADgjATgOQAggXAaAFQAfAGAXAqQAUAmgVAqQgLAWgPAOQgBAIgFAIQgKAQgPACIgFAAQgMAAgGgFgAgeg0QgJAFAMASIAXAlIAIAhQAEAMAIgCQAMgDAIgaQAIgagIgRQgKgVgRgKQgJgGgKAAQgKAAgKAGg");
	this.shape_158.setTransform(41.6,-34.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#421B0A").s().p("AgVA1QgQgRgGgcQgFgbAKgVQAJgWASgEQARgDAQARQARARAFAbQAFAbgJAWQgKAWgSADIgGABQgOAAgNgOg");
	this.shape_159.setTransform(41.8,-35.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#212121").s().p("AgLAAQAAgGALAAQAMAAAAAGQAAAHgMAAQgLAAAAgHg");
	this.shape_160.setTransform(21.4,-52);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EDEDED").s().p("AgtAfQgagSAEgVQADgSAIgLQAFgFAEgCQALAoAdASQAbASAxgBQgLAKgtAEIgJAAQgbAAgWgOg");
	this.shape_161.setTransform(19.4,-49);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("Ag5AmQgYgPAAgXQAAgVAYgQQAYgRAhABQAigBAYARQAYAQAAAVQAAAXgYAPQgYAQgiAAQghAAgYgQg");
	this.shape_162.setTransform(20.8,-49.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ah+gKQAyAHBUAMQBDAHA0gN");
	this.shape_163.setTransform(-45.6,-31.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ah4g3QBQA4AkATQBEAlA5gB");
	this.shape_164.setTransform(-44.8,-41.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#D8D8D8").p("ABNgVQgqgkgpgkQhVhIABADQAAAGACAIQAAAHgJAKQgVAUAGA1QAEAhANAVQAGAJAGAEQgIAFgKAMQgSAXgHAjQgGAbAFAUQADAJAEAEQACACgBACQgDAGgMAGQgSAKBzgZQBygaAdgPQAjgRgDgaQgEgfg5gzg");
	this.shape_165.setTransform(-45.8,-39.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AiGCgQAMgGADgGQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQgEgEgDgJQgFgUAGgbQAHgjASgXQAKgMAIgFQgGgEgGgJQgNgVgEghQgGg1AVgUQAJgKAAgHIgCgOQgBgDBVBIIBTBIQA5AzAEAfQADAagjARQgdAPhyAaQhTASgOAAQgFAAAFgDg");
	this.shape_166.setTransform(-45.8,-39.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#441F13").s().p("Ah7AwIAEgQQAPgVA4gXQEvhojnCIQgRAKgegFQgdgFgDAGQgTAdgYADIgGAAQgOAAgFgKg");
	this.shape_167.setTransform(-46.5,-24.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AiHDSQgQgIgKgNQgHgIACgGQACgIAOgIQASgKAPAEQgEgCgEgHQgKgSADgsQABgjAVgXQALgMAKgFQgGgEgGgJQgNgVgEghQgGg1AVgUQAJgKAAgHIgCgOIgKgUQgIgSAGgJQAJgNAqAgQAVARATASIBbBJQAxAmAdAMQAJAuADAjIADBGQgJAZh7AlQg3ARhSATIgIABQgMAAgNgGg");
	this.shape_168.setTransform(-45.2,-39.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#D8D6D6").ss(1,1).p("AAsALIhWgU");
	this.shape_169.setTransform(15.1,-35.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#441F13").s().p("AgNAsQg0gNgigSQglgRAOgKQASgbArgKQAogKAsAIQAtAIAdAVQAfAXgBAeQgCAcgxAAQghAAg4gNg");
	this.shape_170.setTransform(-0.6,-31.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#441F13").s().p("AhyBnQgthGgBhXQgBhbA2AGQBlALA8AbQA7AZAkAtQAQATgFADQgDACgRgFQglgNAKAUQASAig8ArQg/Asg0gWQgDAZgLANQgHAJgIAAQgRAAgYgmg");
	this.shape_171.setTransform(25,-48.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FE7030").s().p("Ah+A5QgbgvBMgrQgVgOABgaQAZgpAxALQAoAKAuApQApAlAUAlQAVAmgXADQg5AEg2AIQhqAQAfAPQgtgUgRgdg");
	this.shape_172.setTransform(-11.8,-40.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#D8D6D6").s().p("AjkBtQiBgwgshMQgBgMAZARQA+AqAOAIQCQBXCigBQCOgRCSiQQAVgVA8hDQAdggAAANQAABthrBRQhsBSilANQgbADgbAAQhhAAhkglg");
	this.shape_173.setTransform(8.2,-24.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AkODNQh7hDgHhrQgHhqBwhWQBwhVCmgNQClgMB7BCQB7BDAHBrQAHBrhwBVQhwBVimANQgaADgaAAQiFAAhng5g");
	this.shape_174.setTransform(8.3,-35.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#BABABA").ss(0.5,1).p("AhVBSIAhguQAkgvAMgHQATgMBHgz");
	this.shape_175.setTransform(8.7,-11.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#AFAFAF").ss(0.5,1).p("AiCBGIBIgyQBKgxANgEQAWgGBQge");
	this.shape_176.setTransform(1.2,-12.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E5E5E5").s().p("AjMBiQAJgRBRhXQBahiARAFQAEACBmgBQBkgBAEACIACAGQABAEgEAGQgTAEhfACIhgADQgGAChNBTQhNBVgEAAIgcACQgBAAgBAAQgBAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_177.setTransform(-2.8,-13.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E8E8E8").s().p("AgBBUQgcgNgUgNQgPgJg7ARQhJAWgYABIgBgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAogdBShNQBHhEADAAICBgHQB5gGgDABQgFACirDFQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgKAAghgRg");
	this.shape_178.setTransform(-1.2,-11.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CC5729").s().p("AjsByQgEgIANgJIAOgHIBZhjQBahlANgGQAMgGBqAPIBpAQIAQAAQARACACAMQACALgOAKIgQAIIh0gHIknCkQgQAKgJAAQgGAAgDgFg");
	this.shape_179.setTransform(-2.7,-14.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#441F13").s().p("AA2GrQgNgIgggcIgOgNQgKgEgdAAQgnAAhDAHIghAFQgRAHgKABQgQAAgIgNQgHgLAEgMQAEgRAYgMIAcgiIgTgNIAAAAIgBgBIgHgFQgegXgTgYQgLgMgJgRQgqAGheAGQhWAHgTAAQgXAAgLgEQgTgJgGgYIgBgEQgIgmAqgOQAHgCAFgEQgFgeAVg6QATgzAogYQgGgfAKgvQAOhEAhgXIAGgEIABgGIACgKQAEgTAXgXQAJgIALAAQAhAAAXBMIBECkQAjgiA2geIgBgFQgCgKAJgQQAHgOAbgkIAMgQQAIgWgWh6IgHgiQgMgUADgNQACgLAIgGQAHgGAJAAIACAAQAWAAAXAcIABAAICzDoIAWAAQALgFAPAAIAHAAQBqALBEAcQB1ArAxBOQAQANANASQAbAngNAyQgIAdgUAaQgCAIgFALQgKAcgWAJQg2A/hgAqQhgAqhwAHIgNACIgnA/QgHAKgMAAQgKAAgQgLgAAEFpIAkAdQAgAcAIAAIACgBQAGgIAmhAIAXgCQBxgHBegrQBbgoAyg+QASgCAHgaQAGgJABgKQAOgQAJgYQASgwgZgkQgLgRgQgMQguhKhwgpQhBgbhogLIgFAAQgNAAgIAFIglABIi5jwQgSgVgMAAIgBAAIgFACQgJAHAQAWQgBABABAGIAFAYIABACQAYCFgLAZIgeArQgbAkAHAEIATAJQhXAogwA5IhQjBQgFgQgHgQQgNgfgMAAQgDAAgDADQgTASgDANIgDAQQgCAJgMAIQgZARgNA+QgJAmADAbQACAOADAFQgKADgNALQgaATgOAmQgSAxACAXQABAMAFACQgKAMgUAIQgQAFgEAIQgEAHADALIAAACQAEAOAKAFQAHACATAAQAVAABggIQBqgHAdgGQAKAWAOARQATAXAbAVIAJAGQARAMATALIgtA3QgHADgHAFQgNAJAGAIQACAEAFgBQAIAAAOgIIABABIAfgEIABgBQBMgHAjAAQAlAAALAHg");
	this.shape_180.setTransform(-7.1,-36.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhnhQIA/AiQA/AkAIAKQAOASA7A/");
	this.shape_181.setTransform(-5.1,-45.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhgiEQCICWAIAUQAJAVAoBL");
	this.shape_182.setTransform(-4.4,-53.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E5E5E5").s().p("ABZC6QgHgSAAgoQgBgpgBgCQgCgGhZh2QhZh2gBgFIgGgaQgBgFADgBQAGgDBjCEQBiCDABAIQAMBygEAHg");
	this.shape_183.setTransform(-5.1,-55.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AB7DDQgBgCh2g2Qh5g4gFgDQgGgEAaglIAfgpQAIgSgJhCQgEgggOhKQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIACAAQAoAtBSBuQBPBpABAIQALB5gCAAIgBAAg");
	this.shape_184.setTransform(-6.7,-55.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FE7030").s().p("ABhDUIgJgOIgJhzIjEkPQgFgGgDgHQgHgPAFgEQAIgGAKAMQAFAGAEAHQDAD3AMASQAMASALBnIADAQQAAARgLAEIgEABQgJAAgJgLg");
	this.shape_185.setTransform(-3.8,-55.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#E5E5E5").s().p("AAOA1QiTgdgYAQIA7g3QBDg+ABgFQAFgTBWAgQBUAgADAJIAKB2QgHgLiJgag");
	this.shape_186.setTransform(-10.2,-45.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#893E17").s().p("ABlDHIgJgOIgHhZIjOkOQgEgGgEgIQgHgOAGgFQAHgFAQAMQAHAGAGAHQDAD2AMASQAMATAJBMIACAQQAAARgKADIgFABQgIAAgJgKg");
	this.shape_187.setTransform(-3.4,-57.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F9A19D").s().p("AAKAzQAGgOACgSQAEgjgQgVQgUgZgRgBQgMAAAAgBQAAgMAdACQAfACARAhQARAggKAsQgFAWgJAQg");
	this.shape_188.setTransform(42.7,-29.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F9A19D").s().p("AgZAmQgggtgDgRQgHgiAQgeIATA3QAZA6AZASQAZARANgGQAGgDABgGIgEAVQgJAYgUAAQgUAAgjg0g");
	this.shape_189.setTransform(39.1,-26.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFBEB7").s().p("AgHBkIgFgHIg5hMQgJgLABgeQAAgkASgRQAfgcAdACQAiADAcApQAZAlgSAuQgJAYgOAQQgBAIgEAJQgJASgQADIgLACQgIAAgFgEgAggg5QgIAGANAQQAXAeACAEIALAfQAFALAIgDQALgEAFgaQAFgbgKgPQgLgTgRgIQgHgEgIAAQgLAAgLAIg");
	this.shape_190.setTransform(41.1,-28.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#421B0A").s().p("AgRA5QgUgQgIgcQgIgaAIgYQAHgYATgGQASgFATAQQATAPAIAcQAJAbgIAYQgHAYgTAFIgKACQgNAAgOgMg");
	this.shape_191.setTransform(41.3,-29.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#212121").s().p("AgLAAQgBgCAEgCQAEgCAEgBQAFABAEACQADACAAACQAAAIgMAAQgLAAAAgIg");
	this.shape_192.setTransform(20.9,-44.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#EDEDED").s().p("AgwAgQgbgSAEgXQADgTAKgLQAEgGAEgCQAMArAfASQAdATAzgCQgLALgwAFIgLABQgcAAgXgQg");
	this.shape_193.setTransform(18.8,-41.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("Ag8ApQgZgRAAgYQAAgWAZgRQAZgRAjAAQAjAAAaARQAZARAAAWQAAAYgZARQgZAQgkAAQgjAAgZgQg");
	this.shape_194.setTransform(20.2,-42.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhpgnQAoAVBDAiQA4AZAvgB");
	this.shape_195.setTransform(-45.7,-29.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhShdQAxBVAXAeQAsA7AxAN");
	this.shape_196.setTransform(-41.6,-40.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#D8D8D8").p("AB0ANQgXgzgXgzQguhmgBAEQgCAGgBAKQgDAJgLAIQgYARgOA9QgIAnADAbQACAMADAGQgKADgOAKQgaAVgOAmQgRAxACAXQABAMAEACQgJAMgVAHQgSAHBtgKQBtgKAegJQAkgLAHgeQAJgkgehJg");
	this.shape_197.setTransform(-47.3,-40.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AiIC5QAVgHAJgMQgEgCgBgMQgCgXARgxQAOgmAagVQAOgKAKgDQgDgGgCgMQgDgbAIgnQAOg9AYgRQALgIADgJIADgQQABgEAuBmIAuBmQAeBJgJAkQgHAegkALQgeAJhtAKQhCAGgTAAQgNAAAHgDg");
	this.shape_198.setTransform(-47.3,-40.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#441F13").s().p("AhwAoQgLAAgDgFQgDgGAKgHIAJgSQAUgTA4gNQEognj2BeQgRAHgZgOQgWgMgFAFQgbAbgeAAIgCAAg");
	this.shape_199.setTransform(-49.4,-21.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AiiDjQgKgEgEgOQgDgLAEgHQAEgIAQgFQAUgHAKgNQgFgCgBgLQgCgYASgxQAOgmAagUQANgLAKgCQgDgFgCgOQgDgbAJgmQANg9AZgSQAMgIABgIIADgQQADgOATgSQAMgMARAjQAIARAGAUIBjDvQAOBGgEAQQgDAPglAYQgYAQh3AJQhSAHgwAAQgTAAgHgDg");
	this.shape_200.setTransform(-45.3,-39.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#D8D6D6").ss(1,1).p("AArgKIhWAV");
	this.shape_201.setTransform(15.3,-22.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FE7030").ss(1,1).p("AAsAKIhXgT");
	this.shape_202.setTransform(15.5,-27.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#D8D6D6").ss(1,1).p("AAsAKIhWgT");
	this.shape_203.setTransform(14.9,-26.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FE7030").ss(1,1).p("AAlAaIhJgz");
	this.shape_204.setTransform(17.2,-31);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#D8D6D6").ss(1,1).p("AAlAaIhJgz");
	this.shape_205.setTransform(16.5,-31);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#441F13").s().p("AgNAwQgkgOg5giQgFgDgBgGQgBgGAEgFQA5hHBEArQAlAXA3A7QAHAFgCAIQgBAIgIADQgRAHgWAAQgiAAgsgRg");
	this.shape_206.setTransform(-3.8,-23.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#441F13").s().p("Ah1BjQguhEgBhTQgBhYA4AGQBmAKA/AaQA7AZAmArQAQASgFADQgDACgRgFQgmgMALAUQASAfg+AqQhAAqg2gVQgDAYgLANQgHAJgJAAQgRAAgZglg");
	this.shape_207.setTransform(23,-39.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FE7030").s().p("AiCAdQAFgxAtgZQgVgNAAgZQAcgrBfAjQBeAiAKAvQAIAjgEALQgEAIgQgEQgVgIgMgCQgXgEgRAKQgkAOgjAQQhIAhALAIQgogdAFgxg");
	this.shape_208.setTransform(-14.6,-30);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D8D6D6").s().p("Aj8BnQiBg5gWhIQgBgKAUATQAlAjAeAVQCDBdC0gKQCRgRCYiNQAVgUA/hCQAegfAAAMQAABphwBQQhxBSioAMQglAHgmAAQhdAAhggqg");
	this.shape_209.setTransform(6.6,-15.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AkVDGQh+hBgHhnQgIhnBzhSQBzhRCrgNQCpgMB+BAQB+BBAHBnQAIBmhzBSQh0BSipANQgbACgbAAQiIAAhqg2g");
	this.shape_210.setTransform(6,-27);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#E54803").s().p("AkIBhQiHg+gGhhQAAgJAUAYQAjAqAhAbQCDBwC2gLQCRgQCXiNQAWgVA+hBQAeggAAANQAABphvBQQhxBSipAMQggAEghAAQhvAAhlgvg");
	this.shape_211.setTransform(6.5,-16);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FE7030").s().p("AkVDGQh+hBgHhnQgIhnBzhSQBzhRCrgNQCpgMB+BAQB+BBAHBnQAIBmhzBSQh0BSipANQgbACgbAAQiIAAhqg2g");
	this.shape_212.setTransform(6,-27);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#BABABA").ss(0.5,1).p("AhYBiIAng8QApg8AKgIQATgOBEg1");
	this.shape_213.setTransform(4.6,-8.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#AFAFAF").ss(0.5,1).p("AiLBXIBThAQBUg/ANgFQAVgHBOgi");
	this.shape_214.setTransform(-3.5,-9.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E5E5E5").s().p("AjGBsQAOgWBGhWQBUhlARAEQADABBmgIQBkgHAEACIACAGQACAEgDAFQgTAFhfAJIhgAIQgGAChHBYQhHBYgEAAIgcAEIgDAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_215.setTransform(-6.2,-10.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E8E8E8").s().p("AARBrQgigggEgCQgSgJhDAEQgaABhRAJQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAgCQAmgeBMhPQBChFAEAAICAgOQB5gOgEACQgCABhMB9IhRCFIgCABQgIAAgdgYg");
	this.shape_216.setTransform(-4.5,-7.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#CC5729").s().p("AjkB1QgGgIANgJQAHgFAHgDIBShkQBUhmALgGQAMgHBrAIIBqAJIAQgBQARABADALQADAKgOALIgPAIIh0ABIkcCvQgRAKgJAAQgFAAgCgDg");
	this.shape_217.setTransform(-6,-11.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#441F13").s().p("ABBGyQgNgKgggdIgPgNQgJgEgcAAQgkAAhGAIIgiAEQgRAIgKAAQgQAAgIgMQgHgLAEgNQAFgRAXgMIArg3QgQgLgKgIQgqgdgSgZIhLgJIhBgJQh1gRgNgDQgTgFgIgEQgPgHgHgNQgKgIgBgKQgBgDABgDQgFgMgDgOQgCgVAJgLQAMgOAagBIALAAQAEgcAYgeQAbgsArgNQgBggAQgnQAZg/AlgOIAGgCIABgDIADgIIAAgGQAAgTADgLQAGgTAOgJQAGgDAIAAQAmAAAeBvIAAAEQAHBSAiAyQAPgPANgKIgFgCQgJgFgDgKQgCgLAJgPQAJgOAggmIATgYQADgQgIgtQgHgugNgwIgFgMIgCgJQgYgfASgUQAMgMASgBQAIgFAJAAQAUAAAZAcQDJDNAQAVIAYAAQALgGAOAAIAIABQBoALBAAcQA9AXAtAkQAsAkAVAsIAJAMQARAYABAeQABAegQAfQgMAvgmAsQg1A/hYAnQhZAohtAIIgSACIgwBSQgHAKgMAAQgLAAgPgLgAAPFtIAkAfQAgAdAIAAIADgBIA0haIAcgDQBqgIBXgnQBUglAxg7QAjgoAMgtQAbg4gcgpIgKgMQgUgqgqgiQgpgig7gWQg9gbhmgLIgFAAQgLAAgJAGIgDAAIglABIgEgIQgOgUjLjNQgTgWgLAAQgEAAgDADIgBADIgFgBQgNAAgHAHQgHAHASAWQgBABACAFIAGARQANAxAIAvQAJA2gFASQgBACglAtQgiAqAHADIAoAMQgtAegcAiQgzg6gJhoQgGgYgJgYQgTgwgOAAIgEABQgLAGgCAVIgBAYIgFAPQgDAIgOAEQgdAKgWA3QgNAiAAAbQAAANADAGQgMAAgPAHQgeANgTAgQgTAYgFAVQgDALACAGIAAABQAAAEgLADQgGgDgKAAIgDAAQgRABgGAHQgFAFACALQACAMAIAQQgGAGALAGQADAKALAFQAGADASAEQANAEBzAQQAkAGAcADQA5AIAcABQAKAWAyAkQAUAQAXAOIg7BMIgNAIQgNAKAFAIQACADAFAAQAIAAAOgIIACAAIAfgDIABgBQBLgIAkAAQAjAAAMAHg");
	this.shape_218.setTransform(-7.4,-33.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ah4hHIBLAdQBMAfAKALQAPAPBBA5");
	this.shape_219.setTransform(-6.7,-43.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ah0iCQCjCVALAUQALAUAwBI");
	this.shape_220.setTransform(-6.6,-52.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#E5E5E5").s().p("ABvCzQgIgSgGgqIgHgrQgDgFhnhtQhnhugBgEIgJgaQgCgFACgBQAGgEBzB6QBwB5ACAIIAOA+QAMA4gCAFg");
	this.shape_221.setTransform(-7.1,-53.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("ACUC6QgCgDiNgoQiRgqgGgDQgGgDAigpQAlgtAAgCQAGgVgMhAQgKg4gPgwIABgCIACAAQAuAoBeBmQBbBhABAIQAbB7gCAAIAAAAg");
	this.shape_222.setTransform(-8.8,-53.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FE7030").s().p("AB8DOIgLgOIgYh0Ijjj7QgWgXAIgIQAHgHAOAAQAHAAAFABQDdDjAOARQAOARAUB9IAFAQQACARgKAGQgDABgDAAQgIAAgJgIg");
	this.shape_223.setTransform(-6,-54.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#893E17").s().p("AB2DFIgLgQIgThnIjaj0QgWgbAIgKQAGgIAQANQAIAGAHAIQDKDMAOAUQAOAUATBlIAEATQADATgJAGQgDACgDAAQgHAAgJgKg");
	this.shape_224.setTransform(-4.1,-55.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#D8D6D6").s().p("AAvAYQh9gchPAEQAIgNARgOQAhgbApAAIDYBtQgwgQg/gPg");
	this.shape_225.setTransform(-7.8,-40.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#F9A19D").s().p("AAKA0QAGgOACgTQAEgjgRgUQgUgagRAAQgMAAAAgBQAAgMAeABQAfACARAhQARAggKAsQgFAWgJAQg");
	this.shape_226.setTransform(42.5,-28.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#F9A19D").s().p("AgZAmQgggtgDgQQgDgQABgLQABgTAKgTIATA3QAZA6AZASQAaARANgHQAFgDACgFIgFAVQgJAXgUAAQgUAAgjgzg");
	this.shape_227.setTransform(38.8,-24.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFBEB7").s().p("AgHBkIgFgGQgwhDgJgKQgIgKAAgeQAAglASgRQAfgcAdACQAiADAdAqQAZAkgSAvQgKAXgOARIgFARQgIARgRAEIgLABQgIAAgFgEgAggg5QgIAGANAQQAXAeACAEIAMAfQAEALAIgDQALgEAFgaQAFgbgJgPQgMgTgRgIQgHgEgIAAQgLAAgLAIg");
	this.shape_228.setTransform(40.8,-27.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#421B0A").s().p("AgRA5QgTgPgJgcQgIgbAHgYQAIgYATgFQATgGASAQQAUAQAHAcQAJAbgIAXQgHAYgTAGIgKABQgMAAgPgMg");
	this.shape_229.setTransform(41.1,-28.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#212121").s().p("AgIAFQgEgCAAgDQAAgCAEgCQAEgCAEAAQAFAAAEACQAEACgBACQABADgEACQgEACgFAAQgEAAgEgCg");
	this.shape_230.setTransform(20.5,-42.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#EDEDED").s().p("AgwAfQgbgSAEgVQADgSAKgLIAIgIQAMApAfASQAdATAzgCQgLAKgwAFIgKAAQgdAAgXgPg");
	this.shape_231.setTransform(18.4,-39.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("Ag8AnQgZgQAAgXQAAgWAZgQQAZgQAjAAQAkAAAZAQQAZAQAAAWQAAAXgZAQQgZAQgkAAQgjAAgZgQg");
	this.shape_232.setTransform(19.8,-40.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhshBQApAeBEAzQA3AmA1AM");
	this.shape_233.setTransform(-43.6,-28.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhNhuQApBcAWAkQApBEAzAa");
	this.shape_234.setTransform(-38,-37.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#D8D8D8").p("ACHAoQgTg3gTg2QglhugCAEQgCAFgCAKQgEAHgOAFQgcAJgVA3QgOAjABAaQAAANADAHIgYAHQgdAOgYAeQgTAYgFAWQgCAKABAGIgCAEQgEAFgPAAQgVACBzAcQBxAcAiAAQAogBALgbQANgggYhNg");
	this.shape_235.setTransform(-45.2,-39.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("Ag0CVQhzgcAVgCQAPAAAEgFIACgEQgBgGACgKQAFgWATgYQAYgeAdgOIAYgHQgDgHAAgNQgBgaAOgjQAVg3AcgJQAOgFAEgHIAEgPQACgEAlBuIAmBtQAYBNgNAgQgLAbgoABIgCAAQgiAAhvgcg");
	this.shape_236.setTransform(-45.2,-39.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#441F13").s().p("AgcAPQgXgQgGACQghAUgggJQgNgDgCgGQgCgFALgFQAAgHAMgHQAYgNA9ACQBQACBCAWQBOAZixAQIgEAAQgRAAgXgSg");
	this.shape_237.setTransform(-48.7,-22.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgJDcQg1gJhYgVQgPgEgLgQQgLgPgCgRQgCgLAEgGQAGgHARgBQAVAAAMAKQgDgEAAgJQABgWAYgqQAUghAegNQAQgFALAAQgDgHAAgNQgBgaAOgjQAWg3AbgJQAOgFAEgHIAEgPIACgYQACgWAKgGQAPgIAUAzQALAaAHAbQAKB3BBA5QgKAfgQBCQgMAvgOAhQgLALgkAAQgmAAg/gLg");
	this.shape_238.setTransform(-44.3,-39);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#FE7030").ss(1,1).p("AAsAKIhWgU");
	this.shape_239.setTransform(17,-26.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#D8D6D6").ss(1,1).p("AArAKIhVgT");
	this.shape_240.setTransform(16.4,-26.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FE7030").ss(1,1).p("AAlAaIhJgy");
	this.shape_241.setTransform(18.7,-30.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#D8D6D6").ss(1,1).p("AAlAaIhJgy");
	this.shape_242.setTransform(18,-30.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#441F13").s().p("AgMApQg0gMgigRQgkgRANgKQASgXAqgKQAogJArAGQAuAGAcATQAfAWgBAfQgCAcgwAAQghAAg3gOg");
	this.shape_243.setTransform(-0.9,-21.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#441F13").s().p("AhxBkQgthFgBhTQgBhYA2AFQBkALA8AaQA5AZAkArQAQASgEADQgDACgRgFQglgMALATQARAhg8ApQg+Arg0gVIgNAlQgHAIgIAAQgRAAgYgkg");
	this.shape_244.setTransform(24.5,-37.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FE7030").s().p("Ah+AdQAFgxAsgYQgVgNAAgbQAcgqBbAkQBbAiAKAvQAIAjgEAKQgEAIgPgEQgUgHgMgDQgWgEgRAKQgkAOgiAQQhGAhAMAJQgngcAFgzg");
	this.shape_245.setTransform(-11.9,-28.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D8D6D6").s().p("AjsBoQiDgwgXhQQgBgKAUATQAkAjAdAUQCBBdCugLQCMgRCRiKQAUgUA9hBQAcgfAAANQAABphqBOQhsBPijANQgWACgXAAQhqAAhjglg");
	this.shape_246.setTransform(8.7,-14.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AkMDGQh6hAgHhoQgHhnBvhSQBwhSCkgMQCkgNB6BBQB6BAAHBoQAHBnhvBSQhwBSilANQgZACgaAAQiEAAhmg3g");
	this.shape_247.setTransform(8,-25.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#BABABA").ss(0.5,1).p("AhXBmQASgfAUggQApg/ALgIQALgIAnggIAkgd");
	this.shape_248.setTransform(5.5,-5.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#AFAFAF").ss(0.5,1).p("AiLBbQAoghArgiQBVhCANgFQAUgIBOgj");
	this.shape_249.setTransform(-2.7,-6.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#E5E5E5").s().p("AjFBxQAJgTBKheQBUhqARAEQAEABBlgHQBkgIAEACIACAGQACAFgEAFQgSAFhfAJQhdAIgDABQgGAChHBcQhHBcgEABIgcADIgCAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAABgBg");
	this.shape_250.setTransform(-5.3,-8.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#E8E8E8").s().p("AARBwQgigigEgBQgSgKhDAEQgdAChOAIIgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAmggBMhTQBDhIADAAICAgPQB4gOgDACQgCAAhMCEIhRCKIgCACQgIAAgdgZg");
	this.shape_251.setTransform(-3.6,-4.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#CC5729").s().p("AjkB6QgGgIANgKIAOgIIBRhoQBUhrAMgHQAMgHBrAIQA2AEAzAGIAQgBQARABADALQADAMgOAKQgHAGgIADIh0ABIkbC3QgRALgJAAQgFAAgCgEg");
	this.shape_252.setTransform(-5.1,-8.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#441F13").s().p("AglGkIgngfQgHgGhDgCQg9gBgdgGIgMABQgeAAgGgVQgDgMAHgKQAKgOAdgCIAqgVQgQgEgPgHQgnAchwBIIgnAZQgZARgTAAQgJAAgKgDQgYgEgLgTQgIgNAHgOQAEgKALgHQgMgSAJgcIAAgBQgMgNAAgQQgCgLADgSQgQgSAAgPQAAgOALgIQAFgFALgCIAcgEQAwgFAdgHQAzgLAhgXQADgRAIgPQAshUBLg+QBYhJBpgTIgCgDQgFgHAAgJQABgJAKgMQAKgKAigcIAVgSQAHgPAJgrQAJgsAFgwIACgWQgHggARgMQAJgHALAAIAHABIAJgCQAYAAALApQBSD0ACAOQACANgFAmIALADQCDA3AyA9QAwAwAVA0QAVA1gLAvIgCAIQABALgBALQgDArgkAcQgXARgdAIQgLAIgPACIgMACQg3AThIAAQgtAAgvgHIgjgEQgjAVglAaQghAXgIAIQgGAKgNAAQgQAAgngggAjtFiQAYAGBNABQA+ACAMALQAMALAZAUQAjAbAIAAIACgBQABgFApgcQArgfApgYIAqAFQAuAHArAAQBIAAAygTQAGAAAIgCQAOgBAEgHIAogQQAogYACgnQABgNgBgKQACgFABgFQAJgsgUgwQgTgvgtgsQgwg5h+g1QgJgEgIAAIgIgDQAHgxgCgOQgDgVhQjqQgHgbgJAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABIgBACIgLgDQgEAAgFADQgHAFAGAYIgCAWQgGAxgIAsQgKAzgKAQIgoAjQgkAeAEAEIAeAfQhzAJhgBKQhQA9guBZQgJAQgBARQgwAkhTANQhLAHgGAFQgHAGAIAMQAGAIAIAGIAAACQgFAaACAGQAAAQANAIIgBAOQgEAKAAAHQAAALAIAJIABAAIAEAFQADAFABAEQgjAJAJAQQAGALAQABQAHADAHAAQAOAAASgNQCYhgAwglQASAMAkAIIAkAKIheAuQgIAAgIACQgPADACAIQACAGAPAAIAOgBg");
	this.shape_253.setTransform(-7.9,-37.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ag7hnIArAsQArAuADAMQAHARAXBX");
	this.shape_254.setTransform(4.8,-47.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#D8D8D8").ss(0.5,1).p("AgniZQBDCuACAVIAKBw");
	this.shape_255.setTransform(7.5,-55.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#E5E5E5").s().p("AAHDGQgBgSANgyIAMg1QAAgFgmh8Qgnh7ABgEIACgaQAAgFACgBQAFgBApCJQArCIgCAHQgZCKgEAGQgEgIgGgGg");
	this.shape_256.setTransform(8.7,-56.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("ABGDUQgBgDhQhSIhXhXQgEgEAlgfIAoghQAKgTAMg9QAIg1AFgwIABgCIABABQATAuAkBzQAiBtgCAIQgbCQgCAAIAAAAg");
	this.shape_257.setTransform(3.4,-56.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FE7030").s().p("AAMDYIgEgPIAThwIhSkYIgDgOQgCgOAFgEQALgIAOAKQBUEBAEATQAFATgYB3QAAAegNAEIgDABQgGAAgFgMg");
	this.shape_258.setTransform(10,-58.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#893E17").s().p("AAMDPIgDgRIAShiIhNkRIgCgPQgCgRAFgFQAHgFAHAOIAGAQQBPDpADAWQAEAVgSBhQgCAigNAFIgDABQgGAAgDgNg");
	this.shape_259.setTransform(11.5,-58.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#E5E5E5").s().p("ABbBFQg/g0gwgcQg3gggfACIAigLQA8gSAcgBQAlAAA2CBQADAHgHAFQgDACgDAAQgDAAgDgDg");
	this.shape_260.setTransform(-2,-44.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#F9A19D").s().p("AgiAtIAYgTQAXgYgBgXQgBgdgLgKIgIgHQAHgJAUASQAWASgHAhQgGAfgfAaIggAVg");
	this.shape_261.setTransform(38.5,-12.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#F9A19D").s().p("AgRBNQgOgLAEgzQADgqAIgOQAHgNAGgHQAKgNATgIIgRAyQgPA3AIAaQAJAbANACIAFgBIgMAFQgHABgHAAQgLAAgJgGg");
	this.shape_262.setTransform(31.5,-12.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFBEB7").s().p("AgrBTQgPgDgIgIIgEgIIAChUQAAgNARgWQAVgaAXgCQAmgDAUASQAXAUgDAuQgDAmgoAYIgmAQQgCADgEACQgGADgJAAIgMgBgAACghQgFADgDAPIgFAfIgJAaQgEAKAFgBQAHAAAOgSQAPgSADgOQAEgRgEgJQgDgJgIAAIgHABg");
	this.shape_263.setTransform(36.4,-12.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#421B0A").s().p("AgXA7QgRgGgFgWQgEgWAKgXQAKgZASgMQASgNARAGQAQAGAFAWQAGAWgKAXQgKAZgTAMQgMAJgMAAQgGAAgFgCg");
	this.shape_264.setTransform(36.5,-13.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#212121").s().p("AgCAEQgJgGAEgEQABgCAEABQACAAAEADQAIAGgEAEQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgEAAgDgEg");
	this.shape_265.setTransform(28.5,-36.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#EDEDED").s().p("AgDAkQgZgRgJgYQgJgaAOgMQASgQAOAEQgMAgAKAbQAJAbAjAaIgBAAQgNAAgfgVg");
	this.shape_266.setTransform(24.6,-35.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AAUA5QgYgDgXgTQgYgTgIgWQgIgYALgOQALgPAZADQAYADAYATQAXATAJAXQAIAXgLAOQgKAMgTAAIgIAAg");
	this.shape_267.setTransform(27,-35.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhiAqQBqgNBbhF");
	this.shape_268.setTransform(-48.3,-13.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhSA8QBTgzBShE");
	this.shape_269.setTransform(-47,-8.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ahng7QgCABgBABQAAABABABQAGAEAAAHQgBAFgCANQgCALACAGQACAEAEAFQAFAGACAFQABACgFATQgEARALAMQANANgCAOQAngYApghQBVhBARgxQABgEgCgCQgDgDgEABQhUAIh2AYg");
	this.shape_270.setTransform(-48,-8.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AhWBAQgLgNAEgRQAFgTgBgCIgHgLIgGgJQgCgFACgMIADgSQAAgHgGgEQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIADgBQB2gYBUgJQAEAAADACQACACgBAEQgRAxhVBCQgpAhgnAXQACgNgNgNg");
	this.shape_271.setTransform(-48,-9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#441F13").s().p("AhQA+QgEgCACgJQAFgRAlgfQDQiViMCVQgKAKgaAGQgYAFgBAFQgHAYgYANQgLAGgEAAQgGAAAFgKg");
	this.shape_272.setTransform(-46.5,-6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("Ah4CLQgLgDgFgIQgGgMASgIIASgGQgOgMgDgOQgCgLAEgbQgOgIAAgQQAAgJACgMIACgLQgHgFgFgHQgLgOAIgHQAGgGBYgIQBegSAvgzQAPgQAWAfQALAPAIATQAPAYgZAhQgMARgQALQiVBvglAUQgRAJgOAAIgKgBg");
	this.shape_273.setTransform(-44.7,-11.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FE7030").ss(1,1).p("AA0AMIhngX");
	this.shape_274.setTransform(7.6,-19.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#D8D6D6").ss(1,1).p("AAzAMIhmgX");
	this.shape_275.setTransform(6.9,-19.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FE7030").ss(1,1).p("AApAoIhRhP");
	this.shape_276.setTransform(9.7,-25.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#D8D6D6").ss(1,1).p("AAaA3Igzht");
	this.shape_277.setTransform(12.8,-29.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#441F13").s().p("AiLBEQgSg/Abg+QAchBAvAUQBWAlAwAlQAsAhATArQAIASgFABQgEAAgNgIQgegUAEARQAFAehFANQhFAOgqgfQgKARgOAGQgGADgFAAQgTAAgMgog");
	this.shape_278.setTransform(24.5,-35.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FE7030").s().p("ABZBfQgPgPgKgHQgSgNgSABQglgEgmgCQhMgEAFALQgUgpAbglQAagmAygBQgNgTAMgVQAqgWBCBDQBBBBgLAtQgJAhgJAHQgCACgEAAQgFAAgIgHg");
	this.shape_279.setTransform(-16.1,-33.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#D8D6D6").s().p("Ag7AZQilgVgwgHQhIgLgZgaQAMgIAEAAQAIgCAXAFID6AzQCuAbBjgQQBSgOBXg4QgpBPhrAVQgkAHgqAAQhXAAh0gdg");
	this.shape_280.setTransform(5.5,-7.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgXDVQjYgvhQgkQh5g3AnhLQA6hvBohBQCChQCbAdQCoAgBtBkQBqBggVBfQgVBehvAgQgyAOhBAAQhRAAhngXg");
	this.shape_281.setTransform(2.9,-26);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#BABABA").ss(0.5,1).p("AhSAuQARgNAUgPQAogdAPgIQAUgLA1gP");
	this.shape_282.setTransform(-4.3,-2.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#AFAFAF").ss(0.5,1).p("Ah7AfIBPgfQBRgdAOAAQAXABAygC");
	this.shape_283.setTransform(-14.7,-4.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#E5E5E5").s().p("AjCA5IgcgGQgBAAgBgBQgBAAgBAAQAAgBAAAAQAAAAAAgBQAQgLBmguQBzg2APAIIBnAbQBkAZADADIgBAEQABAEgGADQgUgBhegWIhfgWQgHgBhiAuQhgAugGAAIAAAAg");
	this.shape_284.setTransform(-8.9,-7.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#E8E8E8").s().p("Ag1AZQgMgLg+gBQhNgCgYgFQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABgCQAvgLBmgpQBXgjADABQC0AkAnAGQgaAFhMAvQhfA8gEALQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgMAAhEg7g");
	this.shape_285.setTransform(-8.8,-2.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#CC5729").s().p("AkBA8QgCgIAPgDQAIgCAIAAIByg3QB0g4AOgBQAOgCBkAnQAzAUAvATIAQAEQAQAGgBAJQgBAKgRAEIgRACIhwgjIlPA2QgIABgIAAIgDAAQgOAAgBgGg");
	this.shape_286.setTransform(-9,-8.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#441F13").s().p("AAPGCQgKgIgOgVQgSgagEgIQgGgFg7gOQg8gNgYgLQgcgDgJgMQgGgJADgKQADgOAPgFIgJgJQgSgLgSgQQgXgUgKgTIiEAHIhhAEIgLAAQgQAAgKgDQgTgHgKgSIgBgDQgGgJAAgNQAAgMAHgIQALgLAXAAIACAAQAAgpAYgjQgGgSAEgPIAEgJIABgDQAJgPAUgOQgDgfAMgPQAHgJAMgCIADAAQAJAAALAHQAHAEATAQQAoAgAcASQAyAeAxALQAjgmA5gfQA5gfBDgTIALgVQABgQgMgsQgLgtgRgwIgJgUQgVgbALgTQAIgNAQgEQAJgIAKAAQASAAAVAYQDCC5ANASQAFAFAHARIAeAFIAAAAQAKAAALADQBPAXAzAcQAyAcAeAmQAtAuAUA1QARAUAHAjQAKA3gyApQgtA7hsAeQhIAVhYADQgyAMhoAeIghAJIgFABQgKAAgLgJgAjJD7QgCAIAdACIABAAQAUAJBKARQA7AOAGALQAHAOAOAUQAVAdAIAAIABAAIBFgUQBJgVAugLQBUgCBJgVQBogdApg3QArgjgJgrQgGghgQgPQgSg1gsgsQgbgjgvgaQgxgchOgWQgGgCgJAAIgCAAIgqgHQgJgWgFgGQgNgSi/i3QgRgSgJAAQgEAAgCAEIgBACQgOAAgFAJQgFAIARAUIABAFIAHAQQARAwAMAtQANA0gCATIgQAiQhJATg7AiQg6AgggAmQhKgMhMg3IgugkQgTgQgGAAIAAAAQgKABgCATQgBAMADANIgBACIgCACQgVAMgJAQIAAABIgCAFQgFAPAKAQQgcAjABArIgDAQIAFAAIAAABQgMgCgMAAQgWAAABAKQAAAKAFAFIAAACQAGAKAJAEQAIADAOAAIAKAAIBqgEICJgIQAFASAXAXQATASAVAMQAZAYAdAQIgVAEIgRgCQgRAAgBAHg");
	this.shape_287.setTransform(-7.3,-45.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ahuh1QCWCEAMASQALASAwBD");
	this.shape_288.setTransform(1.9,-60.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#E5E5E5").s().p("ABxCkQgJgQgKgoQgKgogBgCQgDgFhhhhQhihigBgEIgLgZQgCgEACgCQAEgEBtBtQBqBrACAIIATA8QARA1gBAGg");
	this.shape_289.setTransform(1.4,-61.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#421B0A").s().p("AgHA9QgRgCgKgTQgKgUAEgYQADgZAPgRQAOgQAQACQARACAKATQAJAUgDAYQgDAZgOARQgNAOgOAAIgEAAg");
	this.shape_290.setTransform(42.3,-29.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#EDEDED").s().p("AgBAoQgagMgMgYQgLgYAMgOQAQgTAOABQgJAjAOAZQAMAaAlATIgFABQgOAAgcgOg");
	this.shape_291.setTransform(26.6,-47.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgXAoQgZgOgLgXQgKgVAJgQQAKgRAYgBQAZgCAYAOQAZAPALAWQALAWgKAQQgJARgZACIgFAAQgVAAgXgOg");
	this.shape_292.setTransform(28.8,-47.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ag7haQgCAAgBABQgCABABABQADAJgFAHQgCACgRAPQgOAMgBAHQgBAFAEALQAEAKgCAGQgDAFgLAVQgKAWgBAPQgCATgDALIBhgEQBpgMAugoQAEgDgBgFQAAgEgDgCQhGgwhxg+g");
	this.shape_293.setTransform(-47.1,-44.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("Ah4A8QABgPAKgVIAOgaQACgHgEgJQgEgLABgGQABgHAOgMIATgRQAFgGgDgJQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIADAAQBxA9BGAwQADADAAAEQABAEgEADQguAphpAMIhhAEQADgMACgTg");
	this.shape_294.setTransform(-47,-44.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AiDB6QgcgEgJgIQgFgFgBgKQAAgKAXAAIAWACQgIg1AhgpQgDgFgCgIQgDgPAGgKQAGgLAOgLIAMgIQgCgLABgMQAAgXALgBQAFgBAUAPIAsAlQBNA4BKANQAXADgGAaQgDANgHAMQgCAsgeALIgfACQiSAOg7AAIgagBg");
	this.shape_295.setTransform(-46.2,-43.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FE7030").ss(1,1).p("AAeAhIg7hC");
	this.shape_296.setTransform(19.8,-39.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#441F13").s().p("AgQAUQgrgUgfgVQgfgVAJgDQAngVBiAeQBpAegSAvQgFAOgUAAQghAAhGgjg");
	this.shape_297.setTransform(-4.7,-36.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#441F13").s().p("AiHBIQgbhAASg/QAUhDAzAPQBdAbA1AjQAyAiAYAuQAPAegdgRQgfgTAFARQAJAehDASQhFARgugdQgIASgNAHQgGAEgGAAQgTAAgRgng");
	this.shape_298.setTransform(27.7,-46.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FE7030").s().p("AARBCQgxgIgrgWQgtgYABgUQAAgZBEgLQgBgYAmAAQAiAAAoAUQAsAVAMAaQAPAfgmAcQgOALgdAAQgPAAgSgDg");
	this.shape_299.setTransform(-9.9,-43.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#D8D6D6").s().p("AAxAWQixgihSAZIA7goQBGgoA0AIIDwB5QhJgXhZgRg");
	this.shape_300.setTransform(-3.3,-51.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#D8D6D6").s().p("AgUBdQihgZhdgsQhegsgohJQACgKASAPIA8AuQB6BUCrAiQCQALCrhXQAXgLBJgrQAjgUgDALQgTBTh5AtQhXAhhvAAQgsAAgugFg");
	this.shape_301.setTransform(6.8,-22.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgaDeQipgShxhKQhxhKARhTQARhUCOg/QCYhECnAUQCdAUBgBdQBVBTgFBYQgFBViCAvQhcAihwAAQguAAgwgGg");
	this.shape_302.setTransform(7,-35.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#AFAFAF").ss(0.5,1).p("AiYgLIBbAAQBeABANADQAWAFBVAN");
	this.shape_303.setTransform(1.7,-14.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#E5E5E5").s().p("AB7AHIhRglQgGgCh2ATQh2ARgDgBIgYgKQgGgCADgBQAXgGB4gSQCJgVALAKQACADBUAoQBTAnACADIgDAEQgCADgGACQgSgFhQglg");
	this.shape_304.setTransform(-1.3,-18.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#441F13").s().p("AAVGWQgOgJgXgbQgJgCgFgIQgCgEAAgFIgTgXQgHgIhAgEQhCgFgYgIIgIABQgVgBgKgJQgHgHgBgJQgCgOAJgKQAMgNAagBIAJgGQgjgVgWgWQgOgNgHgMIgDgEQi/AvgiACIgJABQgfAAgRgRQgOgOAAgSQAAgOAJgKQAJgIAQgDQgDgZAVgWIACgDQgFgSAIgQQACgIANgUQgGgYAHgPQAGgMANgDIAIgCQAJAAAfANQAqASAgAJQA1AOA4ADQAwg4BMgsIAIgFQAvgZAygQIAegKIASgdQACgQgGguQgFgsgJgzIgDgMIgCgKQgSgdANgQQAIgNAQgCQAGgFAJAAQAUAAATAdQCdDXAGALQADAGAFAQQAGgCAHAAQAMAAAMAEQCGAxA+A6QA2ApAbAwQAbAvgDAwQAFARABARQACAqggAeQgUAUgcALQgJAJgOADQgIADgIAAQhRAuh6gBQgyABg0gIQhlA4gIAFQgFAEgHAAQgJAAgKgHgAAoGJIABAAIB0hCQA0AIA2AAQB3AABOgsQAGAAAKgDQAOgDADgHIAkgTQAjgbgBgnQgBgTgFgNQAEgtgagsQgagtgygmQg5g3iFgwQgIgDgJAAQgJAAgHADIgOgDQgFgXgDgIQgLgTiXjMQgOgVgJAAQgDAAgBADIgBACIgEAAQgKgBgFAIQgFAHANAVIAFAWQAKAyAGAuQAHA1gEATQgBADgNAVIgLARQgNAEgXAHQguAPgvAZIgGADQhRAvguA5QhQgChOgcQhAgagKAAIgCAAQgOAEAKAiIAAABQgRAYgCAHQgEAKACALQABAGACADIgIAMQgJAKgCAGQgGAKAEAOIABAHIgBAKQgFgCgJAAQgVAAAAAPQAAAKAHAHQALAMAYAAIAHgBQAkgCDKgzQADAIAGAJQAGAJAMANQAeAeA3AbIguAaIAAAAQgKAAgHACQgPADACAKQABAJASgBIALAAIABAAQAXAIBNAGQA+AEALAPIAaAgIgDADIAEgCQAmAsAKAAg");
	this.shape_305.setTransform(-6.7,-49.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhZhHIA3AdQA5AgAHAKQALAPAxA5");
	this.shape_306.setTransform(4.7,-55.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhWiBQB4CVAJAUQAIATAkBH");
	this.shape_307.setTransform(4.7,-64.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#E5E5E5").s().p("ABTCxQgHgSgEgoIgFgrQgCgGhNhsQhMhtgBgEIgHgaQgBgFACgBQAEgEBVB6QBTB3ACAIIAKA+QAJA3gBAFg");
	this.shape_308.setTransform(4.4,-66.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("ABtC4QgBgChpgoIhvgtQgFgDAZgpIAcgvQAEgUgJg/QgHg4gLgwQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACAAQAiAoBFBlQBEBgABAIQAVB6gCAAIgBAAg");
	this.shape_309.setTransform(3.1,-66.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FE7030").s().p("ABcDMIgIgNIgSh0Iipj4QgEgGgDgHQgGgNADgGQAIgLARAGQCjDhALARQAKARAPB8QAKAegMAIIgFACQgFAAgHgJg");
	this.shape_310.setTransform(5.2,-66.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#893E17").s().p("ABXDDIgIgPIgOhmIiijzQgEgGgDgIQgHgQAEgGQAEgIAMANQAGAGAFAHQCWDLALAUQAKAUAOBkQAJAjgLAJQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgFAAgHgKg");
	this.shape_311.setTransform(6.6,-68);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#D8D6D6").s().p("AAiAdQiWgwg5AHIBDgfQBOggA2gCQAkgBA7BOQAeAnAXAnQhAgZhMgYg");
	this.shape_312.setTransform(-1.7,-54.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#F9A19D").s().p("AgdAsIAVgUQATgZgDgWQgEgcgMgIIgIgGQAFgJAVAPQAXAPgDAgQgCAegcAdIgbAWg");
	this.shape_313.setTransform(45.2,-28.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#F9A19D").s().p("AgNBMQgQgJgBgwQgBgpAFgNQAMgdAYgQIgKAyQgJA2AKAYQALAYANABIAGgCIgMAHQgJADgHAAQgJAAgHgFg");
	this.shape_314.setTransform(38.9,-28.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFBEB7").s().p("AgfBTQgPgBgIgHIgFgHIgHhRQgCgMAPgXQARgbAVgEQAkgHAVAPQAYARACArQABAlgjAbIgjATQgBADgEADQgIAFgNAAIgEAAgAAAggQgGACAAAQQgBAYgBAFIgGAaQgCAJAEAAQAHgBALgTQAMgTACgMQACgRgFgJQgDgIgHAAQgEAAgDADg");
	this.shape_315.setTransform(42.8,-28.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#421B0A").s().p("AgQA7QgQgEgHgVQgHgUAHgXQAHgZAQgOQAQgOAQAEQARAEAHAVQAHAUgHAXQgHAYgQAPQgNALgMAAIgIgBg");
	this.shape_316.setTransform(43,-29.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#212121").s().p("AADAIQgDgBgDgCQgHgGADgEQACgCADAAQADABADACQAIAGgEAEQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgBAAg");
	this.shape_317.setTransform(32.8,-51.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#EDEDED").s().p("AgEAlQgYgQgIgZQgIgZAOgOQASgQAOADQgNAiAJAaQAIAcAiAZIgBAAQgNAAgegUg");
	this.shape_318.setTransform(28.9,-50.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AASA5QgYgCgWgSQgXgTgHgWQgIgXAMgQQAMgPAZACQAYACAWATQAXASAHAWQAIAYgMAPQgLANgVAAIgFAAg");
	this.shape_319.setTransform(31.3,-50.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhsgJQBmAiBzgc");
	this.shape_320.setTransform(-46.6,-42.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhmAXQBlgOBogf");
	this.shape_321.setTransform(-48.1,-37.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhKhQQgCAAgBABQgCABABABQAEAHgEAGQgHALgEAGQgHALgBAGQAAALACAQQAAACgOAQQgMAPAEASQAEASgIAMIBlgUQBrgcAmgoQADgDgBgDQAAgEgEgBQhTgehygdg");
	this.shape_322.setTransform(-47.7,-40.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("Ah4AxQgEgRAMgQQAOgQAAgBQgCgRAAgKQABgHAHgLIALgQQAEgGgEgHQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABABQByAcBTAeQAEABAAAEQABAEgDACQgmAphrAcIhlAUQAIgNgEgSg");
	this.shape_323.setTransform(-47.4,-40.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#441F13").s().p("AhlAYIADgNQANgOAwgOQBBgSA4AAQBFgCh/A2QgOAGgbgIQgZgGgDAEQgRAVgcACIgHAAQgVAAAPgMg");
	this.shape_324.setTransform(-48.8,-34.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AioBgQgJgIAAgKQAAgPAUAAQAKgBAJADQgHgSAFgPQADgNARgXQgCgDgBgGQgDgLAFgKQAEgJAIgMIAHgKQgEgIgBgKQgCgTAKgDIBLAbQBUAeBXABQAXAAAGATQADAKgCAJQADAZgbATIgcANQjSA3grADIgIAAQgVAAgLgKg");
	this.shape_325.setTransform(-45.2,-40.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#FE7030").ss(1,1).p("AAsgDIhYAH");
	this.shape_326.setTransform(14.9,-33);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#D8D6D6").ss(1,1).p("AAsgDIhYAH");
	this.shape_327.setTransform(14.4,-32.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#FE7030").ss(1,1).p("AApARIhSgh");
	this.shape_328.setTransform(15.4,-37.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#D8D6D6").ss(1,1).p("AApARIhRgh");
	this.shape_329.setTransform(14.8,-37.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#FE7030").ss(1,1).p("AAgAfIg/g9");
	this.shape_330.setTransform(17.7,-41.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#D8D6D6").ss(1,1).p("AAhAfIhBg9");
	this.shape_331.setTransform(17.1,-41.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#441F13").s().p("AgRASQgpgTgcgVQgcgWALgDQANgHAmACQAnACAlALQBjAcgTAyQgFAOgTAAQgfAAhCgjg");
	this.shape_332.setTransform(-4.3,-38.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#441F13").s().p("AiSBRQgbhHAWhIQAXhMA1ATQBhAjA4AmQA0AkAZAuQALAUgGACQgEAAgPgIQgigUAFATQAKAhhJAVQhJAUgxggQgJAUgOAJQgHAEgGAAQgUAAgRgrg");
	this.shape_333.setTransform(27.9,-48.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FE7030").s().p("AhpBNQgugPAmgzQAigtAZgEQgBgmAhgBQAcgBAqAZQApAZAYAfQAaAjgMAXIhvAJQhXAIgZAAIgJgBg");
	this.shape_334.setTransform(-11.6,-47);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#D8D6D6").s().p("AgvBIQkog9hChiQACgKAOAJIAyAkQBrBFCwAkQCSAWC4hSIBog0QAmgUgCAMQgYBliBAoQg/AThKAAQhOAAhZgVg");
	this.shape_335.setTransform(7.6,-24.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgpDWQjCgrhgg3Qh1hDAnhOQAohRB6hBQCVhOCYAdQCrAgBrBYQBqBZgVBbQgVBgh9AoQhCAVhQAAQhNAAhZgTg");
	this.shape_336.setTransform(7.1,-39.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#E5E5E5").s().p("AjFBEIgcgJQgBAAgBgBQgBAAgBgBQAAAAAAgBQAAAAABAAQASgPBqg2QB4g/AOALQADADBiAkQBhAkACAEIgBAGQAAAFgFAEQgUgDhcggIhdghQgHgBhmA2QhlA2gGAAIAAAAg");
	this.shape_337.setTransform(-4.5,-27.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#E8E8E8").s().p("AghBJQgYgagNgRQgLgPg+gEQhNgGgXgHIgBgBIABgCQAwgOBqgvQBbgpADABIB+AqQB2AngEAAQgFAAjqCDIgCABQgHAAgegig");
	this.shape_338.setTransform(-3.2,-20.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#CC5729").s().p("AkDBGQgBgKAPgEIAQgBIB4hBQB6hDAOgBQAOgCBhA3QAwAaAuAcIAPAGQAPAIgCAMQgCAMgRAFIgSACIhsgyIlUA2IgRABQgQAAgBgJg");
	this.shape_339.setTransform(-4.7,-28.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#441F13").s().p("ABdHOQgOgKgfgdIgPgNQgIgEgeAAQgoAAhCAHIgEABIgeAEQgOAIgNAAQgPAAgIgNQgIgKAEgOQAFgRAYgLIAvg+QgjgRgXgSIgCgBIAAgBIgBAAIgHgGQgdgXgVgcQhDAdilAhIgpAKQgWAEgIAAQgcAAgPgWIgCgEQgKgPAEgOQAEgSAZgNIALgHQgOgbAGg5QAGg0AlggQgQgbgCgrQgEhEAegdIAFgFIAAgCIgCgMQAAgUAUgaQAJgNAQAAQASAAAYAVQARAOAPAUICXCDQAtg9BQgtQAAgJAIgRQAIgOAWghIALgQQAGgWgYh7IgGgZIgBgJQgUggATgRQAKgKATAAQARAAAGAEQAEACAFAFIC+D2IARAAQAMgGAOAAIAHABQBtAMBBAcQBEAaAuAoQAvAoAUAyIAOARQAbAngNAxQgIAdgUAaQgCAKgFAJQgLAigcAGQgzA5hSAnQhSAnhhANIhGB4QgGAKgNAAQgKAAgPgLgAArGIQADACAgAeQAgAdAIAAIADgBIBKiAQBlgMBUgoQBRgnAwg5IAAAAQAWAAAJgdQAFgKABgJQAOgRAJgXQATgwgZgkQgJgLgGgGQgSgwgtgmQgsgmhAgYQg/gbhqgMIgFgBQgMAAgJAGIggABIjEj/QgIgDgIAAQgLAAgFAFQgIAHAQAWQgBABABAGIAGAYIAAACQAbCDgKAbIgbArQgYAlAGAEIAKAFQhqAygvBQIiqiUQgJgMgMgMQgYgZgOAAQgFAAgEAFQgQAVAAANIADAPQgBAIgLALQgYAWAEA7QACAlAMAXQAGAMAGAEQgLAFgMANQgYAZgEAnQgGAwAKAVQAFALAGAAQgHAOgWALQgQAJgDAJQgCAHAHAJIAAABIAAABQAKANARAAQAKAAAQgEIApgKQC4gkA6gfQAVAhAjAbIAJAHQAlAbAqARIhCBWQgIADgGAFQgNAJAFAJQADADAEAAQAJAAANgIIACAAIAfgEIABAAQBHgIAoAAQAkAAAMAGg");
	this.shape_340.setTransform(-7.9,-47.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#D8D8D8").ss(0.5,1).p("AhjhNIA7AgQA9AiAIALQAPARA4A9");
	this.shape_341.setTransform(-4.1,-59.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#D8D8D8").ss(0.5,1).p("AheiBQCECRAJAVQAJAUAnBK");
	this.shape_342.setTransform(-3.7,-67.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E5E5E5").s().p("ABZC3QgHgSgCgoQgBgpgBgCQgCgFhXh0QhYh0gBgEIgGgaQgBgFACgBQAGgDBiCBQBfB/ABAJQAPBygEAHIgRgJg");
	this.shape_343.setTransform(-4.4,-70);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AB2DAQgCgChwgzIh4g4QgGgDAYgmIAbgqQAHgSgKhCQgFgegPhLQAAgBAAgBQAAAAABAAQAAgBABABQAAAAABAAQAnArBQBsQBNBnABAIQAOB5gCAAIAAAAg");
	this.shape_344.setTransform(-5.5,-70);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FE7030").s().p("ABiDTIgJgOIgMhzIjAkIIgIgNQgHgPAFgFQALgJAVAHQC8DxALASQAMASAIB7IACAQQABARgKAEIgFABQgIAAgIgKg");
	this.shape_345.setTransform(-3.2,-70.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#893E17").s().p("ABlDEIgJgOIgJhYIjJkIIgIgNQgHgPAFgFQAHgGAPAMIANANQC8DwALASQAMASAKBMIADAQQAAARgJAEIgFABQgHAAgJgKg");
	this.shape_346.setTransform(-2.9,-71.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#D8D6D6").s().p("AAuAUQh6g2hMAGIAdgWQAkgXAcgDQAcgCBeBOQAxAmApAnQgtgdg+gcg");
	this.shape_347.setTransform(-7,-56.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#F9A19D").s().p("AALA0QAFgOACgTQAFgjgRgUQgUgagRAAQgMAAAAgBQAAgMAdABQAfACARAhQARAggKAsQgFAWgIAQg");
	this.shape_348.setTransform(43.6,-41.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#F9A19D").s().p("AgZAmQgggtgDgRQgDgPABgLQABgTAKgUIATA4QAZA6AZASQAaARANgHQAFgDACgFIgFAVQgJAYgUAAQgUgBgjgzg");
	this.shape_349.setTransform(40,-38.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFBEB7").s().p("AgHBkIgFgGQgwhDgJgKQgJgKABgeQAAglASgRQAfgcAdACQAiADAdAqQAZAkgTAvQgJAXgOARQgBAIgEAJQgIARgRAEIgLABQgIAAgFgEgAggg5QgIAGANARQAWAcADAFIALAfQAFALAIgDQALgEAFgaQAFgagJgQQgMgTgRgIQgHgEgIAAQgLAAgLAIg");
	this.shape_350.setTransform(42,-40.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#421B0A").s().p("AgRA6QgTgRgJgbQgIgcAIgXQAHgYATgFQATgGASAQQATAQAIAcQAJAbgIAYQgHAXgTAGIgKABQgNAAgOgLg");
	this.shape_351.setTransform(42.2,-42.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#212121").s().p("AgIAFQgDgCAAgDQAAgCADgCQAEgCAEAAQAFAAAEACQAEACgBACQABADgEACQgEACgFAAQgEAAgEgCg");
	this.shape_352.setTransform(21.8,-57);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#EDEDED").s().p("AgvAgQgcgSAEgXQADgTAKgLQAEgGAEgCQAMArAfASQAcAUA0gCQgDADgJADQgRAGgeADIgLABQgbAAgXgQg");
	this.shape_353.setTransform(19.7,-53.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("Ag8ApQgZgRAAgYQAAgWAZgSQAagQAiAAQAkAAAZAQQAZASAAAWQAAAYgZARQgZAQgkAAQgiAAgagQg");
	this.shape_354.setTransform(21.1,-54.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#D8D8D8").ss(0.5,1).p("AiGgOQA1AJBYAPQBIAKA4gN");
	this.shape_355.setTransform(-48.5,-36.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#D8D8D8").ss(0.5,1).p("Ah8hBQBSBBAlAXQBFAqA9AB");
	this.shape_356.setTransform(-47,-47.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#D8D8D8").p("ABbgdQgrgqgqgpQhVhSAAAEQABAGACAKQgBAIgLAKQgYAXAEA6QACAlAMAYQAGAMAGAEQgLAFgMAMQgYAagEAmQgGAxAKAVQAFAKAGABQgHAOgWALQgTAKB8gkQB7gjAggQQAngTgCgdQgBgjg6g6g");
	this.shape_357.setTransform(-48.9,-44.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AiTC9QAWgLAHgOQgGgBgFgKQgKgVAGgxQAEgmAYgaQAMgMALgFQgGgEgGgMQgMgYgCglQgEg6AYgXQALgKABgIIgDgQQAAgEBVBSIBVBTQA6A6ABAjQACAdgnATQggAQh7AjQhgAcgKAAQgBAAAAAAQAAAAAAgBQAAAAABAAQAAgBABAAg");
	this.shape_358.setTransform(-48.9,-44.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#441F13").s().p("AiGA+QgFgFAKgJIAFgSQARgYA9gYQBQgjBIgJQBXgMikBeQgSAKghgGQgdgGgFAGQgXAhgkAGIgJABQgHAAgDgCg");
	this.shape_359.setTransform(-50.4,-28.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#FFFFFF").ss(1,1).p("ABcARQAIAXgQAGQgeAEgZAFQgyAOgWAEQgkAFgIgXQgMgiAKgnQALguAigHQAjgIAuAiQAsAgALAeg");
	this.shape_360.setTransform(-49.7,-55.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AihDpQgOgBgIgMQgHgKACgHQADgJAQgIQAWgLAHgOQgGgBgFgKQgKgVAGgxQAEgmAYgaQAMgMALgEQgGgFgGgMQgMgYgCglQgEg6AYgXQALgKABgIIgDgQQAAgMAQgWQAKgOAeAcQAPAOANAQICyCcQAYAzAEAhQAEAjgRApQgLAciNAjIibAhQgTAEgJAAIgCAAg");
	this.shape_361.setTransform(-46.7,-44.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#D8D6D6").ss(1,1).p("AAsgKIhXAV");
	this.shape_362.setTransform(16.2,-34.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#D8D6D6").ss(1,1).p("AAsAKIhXgU");
	this.shape_363.setTransform(15.8,-39.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#441F13").s().p("AhsAAQgFgCgBgGQgBgGADgFQA6hNBGAuQAmAYA4A+QAGAFgBAHQgBAIgHADQgTAJgZAAQhDAAhohEg");
	this.shape_364.setTransform(-2.8,-37.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#441F13").s().p("Ah1BnQguhHgBhXQgBhbA4AGQBmALA/AbQA7AZAmAtQAQAUgFADQgDACgRgGQgmgMALAUQASAhg+AsQhAAsg2gWQgDAZgLAOQgHAJgIAAQgSAAgZgng");
	this.shape_365.setTransform(23.9,-53.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FE7030").s().p("AiCAfQAGg0AtgZQgWgOABgbQAcgsBfAlQBdAlALAvQAIAlgFALQgDAIgQgEQgVgIgMgCQgXgEgRAKQglAOgjARQhIAiALAJQgogdAFg0g");
	this.shape_366.setTransform(-13.7,-43.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#D8D6D6").s().p("AkIBlQiHhBgGhlQAAgJAUAZQAjAsAhAcQCDB1C2gMQCRgRCXiTQAVgVA/hFQAeggAAANQAABthvBTQhxBWipANQggAEggAAQhwAAhlgxg");
	this.shape_367.setTransform(7.4,-29.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AkVDOQh+hDgHhsQgIhrBzhVQBzhWCrgNQCpgMB+BDQB+BDAHBsQAIBrhzBVQhzBWirANQgaACgbAAQiJAAhpg5g");
	this.shape_368.setTransform(6.9,-40.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#BABABA").ss(0.5,1).p("AhYBmIAng+QAphAAKgIQATgNBEg4");
	this.shape_369.setTransform(7.7,-16.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#AFAFAF").ss(0.5,1).p("AiLBbIBThDQBUhCANgFQAWgHBNgk");
	this.shape_370.setTransform(-0.5,-17.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#E5E5E5").s().p("AjGByQANgXBHhbQBUhpARAEQAEABBlgIQBkgIAEACQAAABACAFQACAFgDAFQgTAGhfAIIhgAJQgGAChHBcQhHBcgEABIgcADIgCAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_371.setTransform(-3.1,-19);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#E8E8E8").s().p("AARBvQgighgEgCQgSgJhDAEQgeAChNAIIgBgBQgBAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAlgfBNhTQBChIAEAAICAgPQB5gOgDABQgDABhMCDIhRCMIgDABQgHAAgdgag");
	this.shape_372.setTransform(-1.4,-15.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#CC5729").s().p("AjlB7QgFgJANgJQAGgFAIgDIBRhpQBUhrAMgHQAMgHBrAIQA2AEAzAGIARgBQARABADALQADAMgOALIgPAIIh0ABIkdC3QgQALgJAAQgFAAgDgDg");
	this.shape_373.setTransform(-2.9,-19.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#441F13").s().p("AA6GzQgNgJgggdIgOgOQgJgFgeABQgkAAhGAIIgEABIgVACIgJABQgOAIgNAAQgPAAgIgMQgIgLAEgNQAGgSAXgLIAcglIgCgBIAAAAIgBgBIgHgFQgngfgXgmIggACQg0AGhHAAIh1AAQgbgCgMgFQgUgJgJgWIgBgGQgFgRAHgOQAJgSAbgGIAOgEQgIgfAWg+QATg1AugXQgJghAJgwQAOhKAlgVIAHgFIAAgEIABgMQAGgUAZgXQAJgHAMAAQAjAAAhBQIBTChQAmgiAygcQgBgJAIgRQAIgOAWghIALgRQAGgVgYh7IgHgiQgTggASgRIACgCQAJgOAlgBQAJAAAHAIIBfB8IBlCEIAHAAQANgGANABIAIAAQBqALBEAdQBAAYAuAmQAtAmAWAuIAKANQASAaAAAfQAAAggRAhQgcBhhxBEQhxBFiWAMIgnACIgfA1QgGAKgNAAQgKAAgPgLgAAIFtIAjAgQAgAdAIAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIAjg9QAcgBAVgCQCRgLBthDQBshCAZhaQAgg6gegtQgFgHgGgHQgUgrgsgjQgrgkg9gXQhAgchogMIgGAAQgLABgKAFIgXABIgCgGQgMgRi7jyIgQABQgQADADAEIgGAEQgHAHAPAWQgBABABAGIAGAYIAAACQAbCEgKAaIgbArQgYAlAGADIAKAGQhNAkgvA1Ihgi7QgHgQgKgSQgTgigOAAQgFAAgDADQgUARgEAOIgCARQgCAKgOAHQgeASgLA/QgIAoAGAdQADAPAFAFIgcANQgeATgPAoQgSAzAFAYQACANAFACQgKAOgZAFQgSAGgFAIQgEAHAEAMIAAABIAAABQAGAPANAFQAJAEAWABIB0AAQBGAAAzgGIAtgCQAWApApAgIAIAGIASANIgrA5IgOAIQgNAKAFAHQACAEAFAAQAJAAANgIIACAAIAfgEIABAAQBLgJAkAAQAkABAMAGg");
	this.shape_374.setTransform(-7,-39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36,p:{x:-6.8,y:-11}},{t:this.shape_35,p:{x:-5.2,y:-7.4}},{t:this.shape_34,p:{x:-6.9,y:-10.8}},{t:this.shape_33,p:{x:-4.3,y:-9.5}},{t:this.shape_32,p:{x:3.9,y:-8.1}},{t:this.shape_31,p:{x:7,y:-26.3}},{t:this.shape_30,p:{x:8.5,y:-14.7}},{t:this.shape_29,p:{x:-13.6,y:-29.5}},{t:this.shape_28,p:{x:24,y:-39}},{t:this.shape_27,p:{x:-2.2,y:-22.9}},{t:this.shape_26,p:{x:17.5,y:-29.2}},{t:this.shape_25,p:{x:18.1,y:-29.2}},{t:this.shape_24,p:{x:15.9,y:-25.2}},{t:this.shape_23,p:{x:16.4,y:-25.4}},{t:this.shape_22,p:{x:16.2,y:-20.4}},{t:this.shape_21,p:{x:16.6,y:-20.8}},{t:this.shape_20,p:{x:-46.1,y:-39.5}},{t:this.shape_19,p:{x:-48.9,y:-20.1}},{t:this.shape_18,p:{x:-46.6,y:-40.5}},{t:this.shape_17,p:{x:-46.6,y:-40.5}},{t:this.shape_16,p:{x:-40.8,y:-39.6}},{t:this.shape_15,p:{x:-45,y:-28.5}},{t:this.shape_14,p:{x:20.2,y:-42.3}},{t:this.shape_13,p:{x:18.7,y:-41.5}},{t:this.shape_12,p:{x:20.8,y:-44.2}},{t:this.shape_11,p:{x:41.6,y:-29.4}},{t:this.shape_10,p:{x:41.3,y:-28}},{t:this.shape_9,p:{x:39.3,y:-25.6}},{t:this.shape_8,p:{x:43,y:-28.9}},{t:this.shape_7,p:{x:-6.6,y:-41.9}},{t:this.shape_6,p:{x:-2.6,y:-59.9}},{t:this.shape_5,p:{x:-3.1,y:-56.2}},{t:this.shape_4,p:{x:-5.5,y:-55.7}},{t:this.shape_3,p:{x:-4.3,y:-55.8}},{t:this.shape_2,p:{x:-3.6,y:-53.5}},{t:this.shape_1,p:{x:-4.1,y:-45.3}},{t:this.shape}]}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{x:-10.2}},{t:this.shape_63},{t:this.shape_62,p:{x:13.5}},{t:this.shape_61,p:{x:9}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_110,p:{y:-18.9}},{t:this.shape_109,p:{y:-14.1}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{y:-11.2}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99,p:{y:-39}},{t:this.shape_98},{t:this.shape_97,p:{y:-35.5}},{t:this.shape_96,p:{y:-35.6}},{t:this.shape_95,p:{y:-30.7}},{t:this.shape_94,p:{y:-31.1}},{t:this.shape_93},{t:this.shape_92,p:{y:-34.5}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{y:-37.8}},{t:this.shape_88,p:{y:-44.5}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{y:-48.5}},{t:this.shape_84},{t:this.shape_83,p:{y:-28.4}},{t:this.shape_82,p:{y:-27.4}},{t:this.shape_81,p:{y:-28.6}},{t:this.shape_80,p:{y:-63.1}},{t:this.shape_79,p:{y:-61.7}},{t:this.shape_78,p:{y:-61}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{y:-50.9}},{t:this.shape_74}]},2).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144,p:{x:-0.7,y:-20.1}},{t:this.shape_143,p:{y:-17.6}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},3).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_26,p:{x:16.7,y:-39.9}},{t:this.shape_25,p:{x:17.3,y:-39.9}},{t:this.shape_169},{t:this.shape_23,p:{x:15.7,y:-36}},{t:this.shape_22,p:{x:15.4,y:-31}},{t:this.shape_21,p:{x:15.8,y:-31.5}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148}]},2).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205,p:{x:16.5,y:-31}},{t:this.shape_204,p:{x:17.2,y:-31}},{t:this.shape_203},{t:this.shape_202,p:{x:15.5,y:-27.2}},{t:this.shape_201,p:{x:15.3,y:-22.1}},{t:this.shape_21,p:{x:15.7,y:-22.6}},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},3).to({state:[{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_201,p:{x:16.8,y:-21.6}},{t:this.shape_21,p:{x:17.2,y:-22.1}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218}]},2).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_64,p:{x:-10.3}},{t:this.shape_277},{t:this.shape_62,p:{x:13.4}},{t:this.shape_61,p:{x:8.9}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253}]},2).to({state:[{t:this.shape_110,p:{y:-19.4}},{t:this.shape_109,p:{y:-14.6}},{t:this.shape_304},{t:this.shape_303},{t:this.shape_106,p:{y:-11.7}},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_99,p:{y:-39.5}},{t:this.shape_296},{t:this.shape_97,p:{y:-36}},{t:this.shape_96,p:{y:-36.1}},{t:this.shape_95,p:{y:-31.2}},{t:this.shape_94,p:{y:-31.6}},{t:this.shape_295},{t:this.shape_92,p:{y:-35}},{t:this.shape_294},{t:this.shape_293},{t:this.shape_89,p:{y:-38.3}},{t:this.shape_88,p:{y:-45.1}},{t:this.shape_292},{t:this.shape_291},{t:this.shape_85,p:{y:-49.1}},{t:this.shape_290},{t:this.shape_83,p:{y:-28.9}},{t:this.shape_82,p:{y:-27.9}},{t:this.shape_81,p:{y:-29.1}},{t:this.shape_80,p:{y:-63.6}},{t:this.shape_79,p:{y:-62.3}},{t:this.shape_78,p:{y:-61.5}},{t:this.shape_289},{t:this.shape_288},{t:this.shape_75,p:{y:-51.4}},{t:this.shape_287}]},3).to({state:[{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_144,p:{x:-0.8,y:-21.6}},{t:this.shape_143,p:{y:-19.1}},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305}]},2).to({state:[{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_205,p:{x:17.4,y:-43.4}},{t:this.shape_204,p:{x:18.1,y:-43.4}},{t:this.shape_363},{t:this.shape_202,p:{x:16.4,y:-39.6}},{t:this.shape_362},{t:this.shape_21,p:{x:16.6,y:-35.1}},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340}]},3).to({state:[{t:this.shape_36,p:{x:-5.5,y:-14}},{t:this.shape_35,p:{x:-4,y:-10.4}},{t:this.shape_34,p:{x:-5.7,y:-13.8}},{t:this.shape_33,p:{x:-3,y:-12.5}},{t:this.shape_32,p:{x:5.1,y:-11.1}},{t:this.shape_31,p:{x:8.2,y:-29.3}},{t:this.shape_30,p:{x:9.7,y:-17.7}},{t:this.shape_29,p:{x:-12.4,y:-32.5}},{t:this.shape_28,p:{x:25.2,y:-42}},{t:this.shape_27,p:{x:-0.9,y:-25.9}},{t:this.shape_26,p:{x:18.7,y:-32.2}},{t:this.shape_25,p:{x:19.4,y:-32.2}},{t:this.shape_24,p:{x:17.1,y:-28.2}},{t:this.shape_23,p:{x:17.7,y:-28.4}},{t:this.shape_22,p:{x:17.5,y:-23.4}},{t:this.shape_21,p:{x:17.9,y:-23.8}},{t:this.shape_20,p:{x:-44.9,y:-42.5}},{t:this.shape_19,p:{x:-47.6,y:-23.1}},{t:this.shape_18,p:{x:-45.3,y:-43.5}},{t:this.shape_17,p:{x:-45.3,y:-43.5}},{t:this.shape_16,p:{x:-39.5,y:-42.6}},{t:this.shape_15,p:{x:-43.7,y:-31.5}},{t:this.shape_14,p:{x:21.4,y:-45.3}},{t:this.shape_13,p:{x:20,y:-44.5}},{t:this.shape_12,p:{x:22.1,y:-47.2}},{t:this.shape_11,p:{x:42.8,y:-32.4}},{t:this.shape_10,p:{x:42.6,y:-31}},{t:this.shape_9,p:{x:40.6,y:-28.6}},{t:this.shape_8,p:{x:44.2,y:-31.9}},{t:this.shape_7,p:{x:-5.4,y:-44.9}},{t:this.shape_6,p:{x:-1.4,y:-62.9}},{t:this.shape_5,p:{x:-1.9,y:-59.2}},{t:this.shape_4,p:{x:-4.2,y:-58.7}},{t:this.shape_3,p:{x:-3.1,y:-58.8}},{t:this.shape_2,p:{x:-2.4,y:-56.5}},{t:this.shape_1,p:{x:-2.8,y:-48.3}},{t:this.shape_374}]},3).wait(3));

	// ombre
	this.ombre = new lib.clipOmbre();
	this.ombre.name = "ombre";
	this.ombre.parent = this;
	this.ombre.setTransform(-3.3,-1.9,1,1,0,0,0,-0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.ombre).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-80.9,118.7,89.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(-61.7,-82.9,107.8,90.4), rect, rect=new cjs.Rectangle(-65.6,-84.1,116.6,91.6), rect, rect, rect=new cjs.Rectangle(-65,-88.9,116.6,96.4), rect, rect=new cjs.Rectangle(-64,-88.8,114.9,96.3), rect, rect, rect=new cjs.Rectangle(-65.1,-80.2,116.1,87.7), rect, rect=new cjs.Rectangle(-65.4,-78.2,116,89), rect, rect=new cjs.Rectangle(-61.7,-82.9,107.8,90.4), rect, rect, rect=new cjs.Rectangle(-65.6,-84.6,116.6,92.1), rect, rect=new cjs.Rectangle(-65,-90.5,116.6,98), rect, rect, rect=new cjs.Rectangle(-68.3,-94.5,120.1,102), rect, rect, rect=new cjs.Rectangle(-66.3,-83.9,118.7,91.4), rect, rect];


(lib.mcavatarClipKoi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{enMouvement:0,etatTouche:1,etatSiTombe:2,etatMort_neutre:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// points
	this.P3_mc = new lib.clipPoint();
	this.P3_mc.name = "P3_mc";
	this.P3_mc.parent = this;
	this.P3_mc.setTransform(-0.9,-6);
	this.P3_mc.visible = false;

	this.P2_mc = new lib.clipPoint();
	this.P2_mc.name = "P2_mc";
	this.P2_mc.parent = this;
	this.P2_mc.setTransform(3.1,-57);
	this.P2_mc.visible = false;

	this.P0_mc = new lib.clipPoint();
	this.P0_mc.name = "P0_mc";
	this.P0_mc.parent = this;
	this.P0_mc.setTransform(43.1,-16.1);
	this.P0_mc.visible = false;

	this.P1_mc = new lib.clipPoint();
	this.P1_mc.name = "P1_mc";
	this.P1_mc.parent = this;
	this.P1_mc.setTransform(-45.7,-17.2);
	this.P1_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.P1_mc},{t:this.P0_mc},{t:this.P2_mc},{t:this.P3_mc}]}).to({state:[{t:this.P1_mc},{t:this.P0_mc},{t:this.P2_mc},{t:this.P3_mc}]},3).wait(1));

	// etats_koi
	this.avatar_cycleMarche = new lib.avatar_koi_fretillement();
	this.avatar_cycleMarche.name = "avatar_cycleMarche";
	this.avatar_cycleMarche.parent = this;
	this.avatar_cycleMarche.setTransform(347.2,-5.9,1,1,0,0,0,347.6,-3.8);

	this.avatar_etatTouche = new lib.avatar_koi_siTouche_mvt();
	this.avatar_etatTouche.name = "avatar_etatTouche";
	this.avatar_etatTouche.parent = this;
	this.avatar_etatTouche.setTransform(-3.9,-39,1,1,0,0,0,-3.2,-38.6);

	this.avatar_etatTombe = new lib.avatar_koi_siMort_mvt();
	this.avatar_etatTombe.name = "avatar_etatTombe";
	this.avatar_etatTombe.parent = this;
	this.avatar_etatTombe.setTransform(-75,-44.5,1,1,0,0,0,-6,-39.6);

	this.avatar_etatTombe_neutre = new lib.avatar_koi_siMort_neutre();
	this.avatar_etatTombe_neutre.name = "avatar_etatTombe_neutre";
	this.avatar_etatTombe_neutre.parent = this;
	this.avatar_etatTombe_neutre.setTransform(-5.9,46.6,1,1,0,0,0,58.2,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.avatar_cycleMarche}]}).to({state:[{t:this.avatar_etatTouche}]},1).to({state:[{t:this.avatar_etatTombe}]},1).to({state:[{t:this.avatar_etatTombe_neutre}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-83.1,118.7,89.2);
p.frameBounds = [rect, new cjs.Rectangle(-60.7,-81.2,113.5,88.3), new cjs.Rectangle(-83.1,-89.1,133.2,106.4), new cjs.Rectangle(-181.1,-63.9,231.2,97)];


(lib.manekiNeko_saut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// manekiNeko_saut
	this.instance = new lib.manekiNeko_mvtBras();
	this.instance.parent = this;
	this.instance.setTransform(5,-61.9,1,1,0,0,0,5.4,-61.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:5.8,x:5.4},0).wait(14).to({y:-64.5},0).wait(1).to({y:-67.1},0).wait(1).to({y:-69.7},0).wait(1).to({y:-72.3},0).wait(1).to({y:-74.8},0).wait(1).to({y:-77.4},0).wait(1).to({y:-80},0).wait(1).to({y:-82.6},0).wait(1).to({y:-85.2},0).wait(1).to({y:-87.8},0).wait(1).to({y:-90.4},0).wait(1).to({y:-93},0).wait(1).to({y:-95.5},0).wait(1).to({y:-98.1},0).wait(1).to({y:-100.7},0).wait(1).to({y:-103.3},0).wait(1).to({y:-105.9},0).wait(5).to({y:-91.2},0).wait(1).to({y:-76.6},0).wait(1).to({y:-61.9},0).wait(22));

	// ombre
	this.ombre = new lib.clipOmbre();
	this.ombre.name = "ombre";
	this.ombre.parent = this;
	this.ombre.setTransform(3,-2.9,1,1,0,0,0,-0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.ombre).wait(15).to({scaleX:1.01,scaleY:1.04,y:-2.8},0).wait(1).to({scaleX:1.02,scaleY:1.09},0).wait(1).to({scaleX:1.03,scaleY:1.13,y:-2.9},0).wait(1).to({scaleX:1.03,scaleY:1.18},0).wait(1).to({scaleX:1.04,scaleY:1.22,x:2.9,y:-2.8},0).wait(1).to({scaleX:1.05,scaleY:1.26},0).wait(1).to({scaleX:1.06,scaleY:1.31},0).wait(1).to({scaleX:1.07,scaleY:1.35},0).wait(1).to({scaleX:1.08,scaleY:1.39,x:3,y:-2.9},0).wait(1).to({scaleX:1.09,scaleY:1.44,y:-2.8},0).wait(1).to({scaleX:1.1,scaleY:1.48},0).wait(1).to({scaleX:1.1,scaleY:1.53},0).wait(1).to({scaleX:1.11,scaleY:1.57,x:2.9},0).wait(1).to({scaleX:1.12,scaleY:1.61},0).wait(1).to({scaleX:1.13,scaleY:1.66},0).wait(1).to({scaleX:1.14,scaleY:1.7},0).wait(1).to({scaleX:1.15,scaleY:1.75},0).wait(1).to({scaleX:1.15},0).wait(1).to({scaleX:1.14,scaleY:1.74},0).wait(1).to({scaleX:1.14},0).wait(1).to({scaleX:1.14},0).wait(1).to({scaleX:1.09,scaleY:1.5,x:3},0).wait(1).to({scaleX:1.05,scaleY:1.25,x:2.9},0).wait(1).to({scaleX:1,scaleY:1,x:3,y:-2.9},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.3,-127.5,94.6,134);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-44.7,-130.1,95.4,137), new cjs.Rectangle(-45.1,-132.7,96.3,140), new cjs.Rectangle(-45.5,-135.3,97.1,143), new cjs.Rectangle(-45.9,-137.9,97.9,146.1), new cjs.Rectangle(-46.3,-140.4,98.7,149), new cjs.Rectangle(-46.8,-143,99.6,152), new cjs.Rectangle(-47.1,-145.6,100.4,155.1), new cjs.Rectangle(-47.5,-148.2,101.2,158.1), new cjs.Rectangle(-48,-150.8,102,161), new cjs.Rectangle(-48.4,-153.4,102.8,164), new cjs.Rectangle(-48.8,-156,103.7,167), new cjs.Rectangle(-49.2,-158.6,104.5,170), new cjs.Rectangle(-49.6,-161.1,105.3,173), new cjs.Rectangle(-50,-163.7,106.1,176), new cjs.Rectangle(-50.4,-166.3,107,179), new cjs.Rectangle(-50.8,-168.9,107.8,182), new cjs.Rectangle(-51.2,-171.5,108.6,185), new cjs.Rectangle(-51.1,-171.5,108.4,185), new cjs.Rectangle(-51,-171.5,108.1,185), new cjs.Rectangle(-50.9,-171.5,107.9,185), new cjs.Rectangle(-50.8,-171.5,107.7,185), new cjs.Rectangle(-48.6,-156.8,103.3,168), new cjs.Rectangle(-46.4,-142.2,99,151), rect=new cjs.Rectangle(-44.3,-127.5,94.6,134), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.manekiNeko_etatTouche_eclairs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eclair6
	this.instance = new lib.manekiNeko_etatTouche_eclair();
	this.instance.parent = this;
	this.instance.setTransform(65.8,13,0.999,0.999,0,75,-105);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(18));

	// eclair5
	this.instance_1 = new lib.manekiNeko_etatTouche_eclair();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.3,-2,0.999,0.999,0,14.8,-165.2,-0.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(20));

	// eclair4
	this.instance_2 = new lib.manekiNeko_etatTouche_eclair();
	this.instance_2.parent = this;
	this.instance_2.setTransform(43.5,-10,0.999,0.999,0,-24.8,155.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).wait(22));

	// eclair3
	this.instance_3 = new lib.manekiNeko_etatTouche_eclair();
	this.instance_3.parent = this;
	this.instance_3.setTransform(26.4,-8.7,0.999,0.999,35.3,0,0,0.2,-0.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(24));

	// eclair2
	this.instance_4 = new lib.manekiNeko_etatTouche_eclair();
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.6,-5.8,1,1,10.3,0,0,0.1,-0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(26));

	// eclair1
	this.instance_5 = new lib.manekiNeko_etatTouche_eclair();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-15,5.3,1,1,0,0,0,-12.7,-10);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-29.3,-7.1,28.6,25), rect, rect=new cjs.Rectangle(-29.3,-32.5,40.4,50.3), rect, rect=new cjs.Rectangle(-29.3,-42.3,69.6,60.1), rect, rect=new cjs.Rectangle(-29.3,-42.3,98.3,60.1), rect, rect=new cjs.Rectangle(-29.3,-42.3,122.3,60.1), rect, rect=new cjs.Rectangle(-29.3,-42.3,123.7,81.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.manekiNeko_etatTouche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eclairs
	this.instance = new lib.manekiNeko_etatTouche_eclairs();
	this.instance.parent = this;
	this.instance.setTransform(2.1,-161.6,1,1,0,0,0,24.9,-35.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tour
	this.instance_1 = new lib.manekiNeko_etatTouche_tour2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.1,-61.7,1,1,0,0,0,47.1,71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// corps
	this.instance_2 = new lib.manekiNeko_etatTouche_statique2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4,-62.1,1,1,0,0,0,39.6,63.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// ombre
	this.ombre = new lib.clipOmbre();
	this.ombre.name = "ombre";
	this.ombre.parent = this;
	this.ombre.setTransform(3.2,0.5,1,1,0,0,0,-0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.ombre).wait(1));

}).prototype = getMCSymbolPrototype(lib.manekiNeko_etatTouche, rect = new cjs.Rectangle(-44,-132.9,94.6,142.8), [rect]);


(lib.manekiNeko_etatTombe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// etat_neutre
	this.instance = new lib.manekiNeko_etatTombe_neutre();
	this.instance.parent = this;
	this.instance.setTransform(89.2,-21.7,1,1,0,0,0,65.8,41.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(18));

	// etat_tombe
	this.instance_1 = new lib.manekiNeko_etatTombe_neutre();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.4,2.6,1,1,-90,0,0,0,65.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:65.8,regY:41.6,x:-0.9,y:-63.2},0).wait(1).to({rotation:-89.9,x:-0.8,y:-63.3},0).wait(1).to({rotation:-89.5,x:-0.3,y:-63.4},0).wait(1).to({rotation:-88.4,x:0.9,y:-63.8},0).wait(1).to({rotation:-86.2,x:3.5,y:-64.6},0).wait(1).to({rotation:-82,x:8.4,y:-65.9},0).wait(1).to({rotation:-75.2,x:16.7,y:-67.2},0).wait(1).to({rotation:-64.8,x:29.4},0).wait(1).to({rotation:-49.7,x:47.5,y:-63.2},0).wait(1).to({rotation:-28.5,x:69.6,y:-50.1},0).wait(1).to({rotation:0,x:89.2,y:-21.7},0).to({_off:true},1).wait(18));

	// ombre
	this.ombre = new lib.clipOmbre();
	this.ombre.name = "ombre";
	this.ombre.parent = this;
	this.ombre.setTransform(0,-2.9,1,1,0,0,0,-0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.ombre).wait(1).to({scaleX:0.99,scaleY:1.08,x:-0.2,y:-2.8},0).wait(1).to({scaleX:0.99,scaleY:1.17,x:-0.3,y:-2.9},0).wait(1).to({scaleX:0.98,scaleY:1.25,x:-0.4,y:-2.8},0).wait(1).to({scaleX:0.97,scaleY:1.34,x:4},0).wait(1).to({scaleX:0.97,scaleY:1.42,x:8.4},0).wait(1).to({scaleX:0.96,scaleY:1.51,x:12.8},0).wait(1).to({scaleX:0.95,scaleY:1.59,x:17.2},0).wait(1).to({scaleX:0.95,scaleY:1.68,x:21.6},0).wait(1).to({scaleX:0.94,scaleY:1.76,x:26},0).wait(1).to({scaleX:1.14,scaleY:2.5,x:54.9},0).wait(1).to({scaleX:1.34,scaleY:3.23,x:83.9,y:-2.7},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-128.9,94.6,135.4);
p.frameBounds = [rect, new cjs.Rectangle(-47.1,-128.9,94,136.2), new cjs.Rectangle(-46.9,-128.9,93.3,137), new cjs.Rectangle(-46.6,-129.2,92.7,138), new cjs.Rectangle(-42,-129.7,92.1,139.4), new cjs.Rectangle(-41.2,-130.8,95.4,141.3), new cjs.Rectangle(-39.6,-132.3,97.9,143.6), new cjs.Rectangle(-36.3,-133.5,98.6,145.6), new cjs.Rectangle(-30.1,-131.5,109.9,144.4), new cjs.Rectangle(-18.4,-121.2,126.6,134.8), new cjs.Rectangle(1.1,-93.6,137,114.2), rect=new cjs.Rectangle(20.7,-63.3,134.3,90.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mcantagonistesClipManekiNeko = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"enMouvement":0,"etatTouche":1,etatTombe:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// manekiNeko
	this.cycleMarche = new lib.manekiNeko_saut();
	this.cycleMarche.name = "cycleMarche";
	this.cycleMarche.parent = this;
	this.cycleMarche.setTransform(5.1,-60,1,1,0,0,0,5,-62);

	this.etatTouche = new lib.manekiNeko_etatTouche();
	this.etatTouche.name = "etatTouche";
	this.etatTouche.parent = this;
	this.etatTouche.setTransform(0.1,-63.5,1,1,0,0,0,-1,-65.5);

	this.etatTombe = new lib.manekiNeko_etatTombe();
	this.etatTombe.name = "etatTombe";
	this.etatTombe.parent = this;
	this.etatTombe.setTransform(11,-60.6,1,1,0,0,0,5.5,-63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cycleMarche}]}).to({state:[{t:this.etatTouche}]},1).to({state:[{t:this.etatTombe}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.2,-125.6,94.6,134);
p.frameBounds = [rect, new cjs.Rectangle(-43,-131,94.6,142.8), new cjs.Rectangle(-41.8,-126.5,94.6,135.4)];


(lib.mcecransClipEcran = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ecran_debutJeu1:0,ecran_debutJeu2:1,ecran_partiePerdue:2,ecran_partieGagnee:3,ecran_debutNiveau1:4,ecran_debutNiveau2:5});

	// txt_dynamique2
	this.txt_msgVictoire = new cjs.Text("Tu as réussi tous les niveaux ! Koï a réussi à s'échapper !", "32px 'Sniglet'");
	this.txt_msgVictoire.name = "txt_msgVictoire";
	this.txt_msgVictoire.textAlign = "center";
	this.txt_msgVictoire.lineHeight = 46;
	this.txt_msgVictoire.lineWidth = 414;
	this.txt_msgVictoire.parent = this;
	this.txt_msgVictoire.setTransform(-401,-111.9);
	this.txt_msgVictoire._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt_msgVictoire).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// txt_dynamique
	this.txt_msgNiveauEchoue = new cjs.Text("", "32px 'Sniglet'", "#FDF9F6");
	this.txt_msgNiveauEchoue.name = "txt_msgNiveauEchoue";
	this.txt_msgNiveauEchoue.textAlign = "center";
	this.txt_msgNiveauEchoue.lineHeight = 46;
	this.txt_msgNiveauEchoue.lineWidth = 498;
	this.txt_msgNiveauEchoue.parent = this;
	this.txt_msgNiveauEchoue.setTransform(-400.1,-399.1);
	this.txt_msgNiveauEchoue._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt_msgNiveauEchoue).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// bouton2
	this.btn_debuter = new lib.btn_debuter();
	this.btn_debuter.name = "btn_debuter";
	this.btn_debuter.parent = this;
	this.btn_debuter.setTransform(-203,-59.9,1,1,0,0,0,171.8,34);
	this.btn_debuter._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_debuter).wait(1).to({_off:false},0).to({_off:true},1).wait(4));

	// bouton1
	this.btn_pageSuivante = new lib.btn_pageSuivante_avecFond();
	this.btn_pageSuivante.name = "btn_pageSuivante";
	this.btn_pageSuivante.parent = this;
	this.btn_pageSuivante.setTransform(-159.9,-53.4,1,1,0,0,0,140,30.5);

	this.btn_pagePrecedente = new lib.btn_pagePrecedente_avecFond();
	this.btn_pagePrecedente.name = "btn_pagePrecedente";
	this.btn_pagePrecedente.parent = this;
	this.btn_pagePrecedente.setTransform(-623.5,-56.2,1,1,0,0,0,144.6,30.5);

	this.btn_reessayer = new lib.btn_ressayer();
	this.btn_reessayer.name = "btn_reessayer";
	this.btn_reessayer.parent = this;
	this.btn_reessayer.setTransform(-399.9,-75.1,1,1,0,0,0,169.8,32.5);

	this.btn_prochainNiveau = new lib.btn_prochainNiveau();
	this.btn_prochainNiveau.name = "btn_prochainNiveau";
	this.btn_prochainNiveau.parent = this;
	this.btn_prochainNiveau.setTransform(-399.8,-65.1,1,1,0,0,0,221.1,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_pageSuivante}]}).to({state:[{t:this.btn_pagePrecedente}]},1).to({state:[{t:this.btn_reessayer}]},1).to({state:[{t:this.btn_prochainNiveau}]},1).to({state:[]},1).wait(2));

	// ecran
	this.instance = new lib.page1_debutJeu();
	this.instance.parent = this;
	this.instance.setTransform(-803,-602,0.502,0.502);

	this.instance_1 = new lib.page2_explications();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-803,-602,0.502,0.502);

	this.instance_2 = new lib.ecran_partiePerdue_sansTxt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-800,-601,0.502,0.502);

	this.instance_3 = new lib.ecran_partieGagnee();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-802,-602,0.502,0.502);

	this.instance_4 = new lib.interface_debutNiveau1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-802,-601,0.502,0.502);

	this.instance_5 = new lib.interface_debutNiveau2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-802,-602,0.502,0.502);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-803,-602,803,601.9);
p.frameBounds = [rect, new cjs.Rectangle(-803,-602,803,602.3), new cjs.Rectangle(-800,-601,803,602.4), new cjs.Rectangle(-802,-602,803.7,602.8), new cjs.Rectangle(-802,-601,803.7,602.9), new cjs.Rectangle(-802,-602,803.7,602.9)];


// stage content:
(lib.animate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'F90A3A85C0A94B04B7AE06BC4A63E181',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ecran_partieGagnee.png?1558102780306", id:"ecran_partieGagnee"},
		{src:"images/ecran_partiePerdue_sansTxt.png?1558102780306", id:"ecran_partiePerdue_sansTxt"},
		{src:"images/fond_defilant_niveau1.png?1558102780306", id:"fond_defilant_niveau1"},
		{src:"images/fond_defilant_niveau2.png?1558102780307", id:"fond_defilant_niveau2"},
		{src:"images/interface_debutNiveau1.png?1558102780307", id:"interface_debutNiveau1"},
		{src:"images/interface_debutNiveau2.png?1558102780307", id:"interface_debutNiveau2"},
		{src:"images/page1_debutJeu.png?1558102780307", id:"page1_debutJeu"},
		{src:"images/page2_explications.png?1558102780307", id:"page2_explications"},
		{src:"images/table_niveau1.png?1558102780307", id:"table_niveau1"},
		{src:"images/table_niveau2.png?1558102780307", id:"table_niveau2"}
	],
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
an.compositions['F90A3A85C0A94B04B7AE06BC4A63E181'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;