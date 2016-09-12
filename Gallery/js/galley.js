//(function(){

	var Slider = function(selector, prev, next){
		this.nextBtn = next;
		this.previousBtn = prev;
		this.itemCounter = 0;
		this.itemsList = selector;
		this.cantItems = this.itemsList.children().length;

	}

	Slider.prototype = {
		constructor : Slider,
		
		goPrevious : function(){
			this.itemsList;
			this.cantItems;
			this.itemCounter = this.itemCounter-1;
			if ( this.itemCounter === -1){
				this.itemCounter = this.cantItems - 1;
			}
			this.itemsList.css({
				'left' : this.itemCounter * -800 + 'px'
			});
		},

		goNext : function(){
			this.itemsList;
			this.cantItems;
			this.itemCounter = this.itemCounter + 1;
			if ( this.itemCounter === this.cantItems ){
				this.itemCounter = 0;
			}
			this.itemsList.css({
				'left' : this.itemCounter * -800 + 'px'
		});
	},

	addEventHandlers : function()
	{
		this.previousBtn[0].ref = this;
		this.nextBtn[0].ref = this;

		this.previousBtn.on('click', function()
		{
			this.ref.goPrevious();
		});

		this.nextBtn.on('click', function(){
			this.ref.goNext();
		});
	}
}

	var slider = new Slider( $('.itemsList'), $('.previousBtn'), $('.nextBtn') );
	slider.addEventHandlers();
//}
	
//})();