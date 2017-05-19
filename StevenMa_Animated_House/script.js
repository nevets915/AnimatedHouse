	var ctx; // variable declarations
	var x = 200;
	var y = 145;
	var z = 0.5;
	var u = 20;
	/*
	function for starting canvas
	*/
	function drawMe() {
		ctx = document.getElementById('myCanvas').getContext('2d');
		var interval = setInterval(drawHouse,60);
	};

	/* 
	function for animating smoke
	*/
	function drawHouse() {

		ctx.beginPath();
		ctx.rect(0,250,300,50); 	// Grass
		ctx.fillStyle = "#009900";
		ctx.fill();
		ctx.closePath();
	
		ctx.beginPath();
		ctx.rect(0,0,300,250); 		// Sky
		ctx.fillStyle = "#4dd3ff";
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
      	ctx.arc(0, 0, 83, 0, 2 * Math.PI, false);		// Sun
      	ctx.fillStyle = 'yellow';
     	ctx.fill();
      	ctx.lineWidth = 0.5;
      	ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
      	ctx.arc(0, 0, 80, 0, 2 * Math.PI, false);		// Sun
      	ctx.fillStyle = '#ff6600';
     	ctx.fill();
      	ctx.lineWidth = 0.5;
      	ctx.stroke();
		ctx.closePath();

		ctx.beginPath(); 			// House side wall
		ctx.moveTo(25,200);
		ctx.lineTo(70,220);
		ctx.lineTo(70,300);
		ctx.lineTo(25,280);	
		ctx.lineTo(25,200);
		ctx.closePath();
		ctx.lineWidth="3";
		ctx.fillStyle = "#FBB917";
		ctx.fill();
		ctx.strokeStyle = 'FBB917';
		ctx.stroke(); // Draw it
	
		ctx.beginPath();			// House front wall
		ctx.moveTo(70,220);
		ctx.lineTo(145,150); 
		ctx.lineTo(220,200); 
		ctx.lineTo(220,280); 
		ctx.lineTo(70,300); 
		ctx.closePath();
		ctx.lineWidth="3";
		ctx.fillStyle = "#FFD801";
		ctx.fill();
		ctx.strokeStyle = 'FFD801';
		ctx.stroke(); // Draw it
	
		ctx.beginPath();			// Roof Left
		ctx.moveTo(5,215);
		ctx.lineTo(90,130); 
		ctx.lineTo(150,145);
		ctx.lineTo(60,230);
		ctx.lineTo(5,215);
		ctx.closePath();
		ctx.lineWidth="2";
		ctx.fillStyle = "#483C32";
		ctx.fill();
		ctx.strokeStyle = '483C32';
		ctx.stroke(); // Draw it
	
		ctx.beginPath();			// Roof Right
		ctx.moveTo(150,145);
		ctx.lineTo(240,205);
		ctx.lineTo(225,205);
		ctx.lineTo(145,150);
		ctx.lineTo(150,145);
		ctx.closePath();
		ctx.lineWidth="2";
		ctx.fillStyle = "#333333";
		ctx.fill();
		ctx.strokeStyle = '483C32';
		ctx.stroke(); // Draw it
	
		ctx.beginPath();			// Chimney
		ctx.moveTo(210,185);
		ctx.lineTo(210,155);
		ctx.lineTo(175,135);
		ctx.lineTo(175,160);
		ctx.lineTo(210,183);
		ctx.closePath();
		ctx.lineWidth="2";
		ctx.fillStyle = "#6F4E37";
		ctx.fill();
		ctx.strokeStyle = '#6F4E37';
		ctx.stroke(); // Draw it

		ctx.beginPath()				// Top left window
		ctx.moveTo(110,220);
		ctx.lineTo(145,215);
		ctx.lineTo(145,245);
		ctx.lineTo(110,250);
		ctx.closePath();
		ctx.lineWidth="3";
		ctx.fillStyle = "#FFF8C6";
		ctx.fill();
		ctx.strokeStyle = 'brown';
		ctx.stroke(); // Draw it
	
		ctx.beginPath()
		ctx.strokeStyle="brown"; 	// Top right window
		ctx.moveTo(145,215);
		ctx.lineTo(180,210);
		ctx.lineTo(180,240);
		ctx.lineTo(145,245);
		ctx.closePath();
		ctx.lineWidth="3";
		ctx.fillStyle = "#FFFFCC";
		ctx.fill();
		ctx.strokeStyle = 'brown';
		ctx.stroke(); // Draw it
	
		ctx.beginPath()
		ctx.strokeStyle="brown"; 	// Down left window
		ctx.moveTo(110,250);
		ctx.lineTo(110,280);
		ctx.lineTo(145,275);
		ctx.lineTo(145,245);
		ctx.closePath();
		ctx.lineWidth="3";
		ctx.fillStyle = "#FFF8C6";
		ctx.fill();
		ctx.strokeStyle = 'brown';
		ctx.stroke(); // Draw it
	
		ctx.beginPath()
		ctx.strokeStyle="brown"; 	// Down right window
		ctx.moveTo(145,245);
		ctx.lineTo(180,240);
		ctx.lineTo(180,270);
		ctx.lineTo(145,275);
		ctx.closePath();
		ctx.lineWidth="3";
		ctx.fillStyle = "#FFF8C6";
		ctx.fill();
		ctx.strokeStyle = 'brown';
		ctx.stroke(); // Draw it
		

	  ctx.beginPath();					// Wreaths
      ctx.arc(150, 185, 13, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

	  ctx.beginPath();					// Wreath yellow 1
      ctx.arc(140, 175, 3, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

      ctx.beginPath();					// Wreath orange 1
      ctx.arc(150, 171, 3, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'orange';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

      ctx.beginPath();					// Wreath yellow 2
      ctx.arc(160, 175, 3, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

      ctx.beginPath();					// Wreath orange 2
      ctx.arc(164, 185, 3, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'orange';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

      ctx.beginPath();					// Wreath yellow 3
      ctx.arc(160, 195, 3, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

      ctx.beginPath();					// Wreath orange 3
      ctx.arc(150, 199, 3, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'orange';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

      ctx.beginPath();					// Wreath yellow 4
      ctx.arc(140, 195, 3, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

      ctx.beginPath();					// Wreath orange 4
      ctx.arc(136, 185, 3, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'orange';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

      ctx.beginPath();;					// FLower petal 1
      ctx.arc(270, 265, 5, 0, 2*Math.PI, true);
      ctx.lineWidth = 2;
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.strokeStyle = '#550000';
      ctx.stroke();
      ctx.stroke();
      
      ctx.beginPath();					// FLower petal 2
      ctx.arc(285, 265, 5, 0, 2*Math.PI, true);
      ctx.lineWidth = 2;
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.strokeStyle = '#550000';
      ctx.stroke();
      ctx.stroke(); 

      ctx.beginPath();    				// FLower petal 3
      ctx.arc(277, 260, 5, 0, 2*Math.PI, true);       
      ctx.lineWidth = 2;
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.strokeStyle = '#550000';
      ctx.stroke();

      ctx.beginPath();					// Stem
      ctx.moveTo(277,265);
      ctx.lineTo(277,290);
      ctx.closePath();
      ctx.lineWidth="5";
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.strokeStyle = '#6F4E37';
      ctx.stroke(); // Draw it


		ctx.beginPath();
		ctx.clearRect(180, 0, 120, 160);	// Clear white canvas for animation

		
		ctx.beginPath();
		ctx.rect(175,0,125,160); 			// Sky re-draw
		ctx.fillStyle = "#4dd3ff";
		ctx.fill();
		ctx.closePath();
		
		ctx.beginPath();					// Chimney re-draw
		ctx.moveTo(210,185);
		ctx.lineTo(210,155);
		ctx.lineTo(175,135);
		ctx.lineTo(175,160);
		ctx.lineTo(210,183);
		ctx.closePath();
		ctx.lineWidth="2";
		ctx.fillStyle = "#6F4E37";
		ctx.fill();
		ctx.strokeStyle = '#6F4E37';
		ctx.stroke(); // Draw it
		
		ctx.fillStyle = "rgba(105,105,105," + z +")"; 	// Color for smoke
		ctx.beginPath();
		ctx.arc(x,y,u,0,2*Math.PI); 					// Middle smoke cloud
		ctx.fill();
		ctx.closePath();
  
		ctx.beginPath();
		ctx.arc(x+23,y+20,u,0,2*Math.PI); 				// Bottom right smoke cloud
		ctx.fill();
		ctx.closePath();
  
		ctx.beginPath();
		ctx.arc(x-20,y,u,0,2*Math.PI);  				// Left smoke cloud
		ctx.fill();
		ctx.closePath();
  
		ctx.beginPath();
		ctx.arc(x,y-20,u,0,2*Math.PI); 					// Top smoke cloud
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(x+20,y-20,u,0,2*Math.PI); 
		ctx.fill();
		ctx.closePath();

		y -= 7; 		// movement of smoke in y-axis
		z = z - 0.025; 	// opacity change
		x = x + 3; 		// movement in x-axis
		u = u + 1.25; 	// size change of smoke
  
		/* 
		If statement for resetting animation
		*/
		if (y <= 0) { 
			y = 145;
			z = 0.5;
			x = 190;
			u = 20;
		}
	}